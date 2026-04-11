import { db } from '@/lib/db'
import { RealAuctionScraper } from './adapters/realauction'
import { GovEaseScraper } from './adapters/govease'
import { Bid4AssetsScraper } from './adapters/bid4assets'
import { SRIScraper } from './adapters/sri'
import { GenericHTMLScraper } from './adapters/generic-html'
import type { ScrapeResult } from './base'

export async function runScraper(scraperId: string): Promise<ScrapeResult> {
  const scraper = await db.scraper.findUnique({ where: { id: scraperId } })
  if (!scraper) throw new Error(`Scraper ${scraperId} not found`)

  const config = (scraper.config as Record<string, any>) || {}

  await db.scraper.update({
    where: { id: scraperId },
    data: { lastRunStatus: 'running' },
  })

  let instance: any

  switch (scraper.platform) {
    case 'realauction':
      instance = new RealAuctionScraper(scraperId, {
        countyCode: config.countyCode,
        state: scraper.state,
        county: scraper.county || '',
        baseUrl: config.baseUrl,
      })
      break

    case 'govease':
      instance = new GovEaseScraper(scraperId, {
        countyId: config.countyId,
        state: scraper.state,
        county: scraper.county || '',
        saleType: scraper.listingType === 'tax-deed' ? 'deed' : 'lien',
      })
      break

    case 'bid4assets':
      instance = new Bid4AssetsScraper(scraperId, {
        state: scraper.state,
        county: scraper.county || '',
        saleType: scraper.listingType as 'foreclosure' | 'tax-deed' | 'tax-lien',
        agencySlug: config.agencySlug,
      })
      break

    case 'sri':
      instance = new SRIScraper(scraperId, {
        state: scraper.state,
        county: scraper.county || '',
        fipsCode: config.fipsCode || '',
        saleType: scraper.listingType === 'tax-deed' ? 'deed' : 'lien',
      })
      break

    case 'generic-html':
    default:
      if (!scraper.sourceUrl) throw new Error('No sourceUrl configured for generic scraper')
      instance = new GenericHTMLScraper(scraperId, {
        state: scraper.state,
        county: scraper.county || '',
        sourceUrl: scraper.sourceUrl,
        listingType: scraper.listingType as 'foreclosure' | 'tax-lien' | 'tax-deed',
        selectors: config.selectors || {
          row: 'table tr',
          address: 'td:nth-child(1)',
          amount: 'td:nth-child(3)',
          date: 'td:nth-child(2)',
        },
        pagination: config.pagination,
      })
  }

  return instance.scrape()
}

export async function runAllActiveScrapers(): Promise<ScrapeResult[]> {
  const scrapers = await db.scraper.findMany({ where: { isActive: true } })
  const results: ScrapeResult[] = []

  // Run in batches of 5 to avoid overwhelming sources
  for (let i = 0; i < scrapers.length; i += 5) {
    const batch = scrapers.slice(i, i + 5)
    const batchResults = await Promise.allSettled(
      batch.map(s => runScraper(s.id))
    )
    for (const r of batchResults) {
      if (r.status === 'fulfilled') results.push(r.value)
    }
    // Small delay between batches
    if (i + 5 < scrapers.length) {
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
  }

  return results
}
