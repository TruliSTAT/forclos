import { BaseScraper, ScrapeResult, ScrapedForeclosure, ScrapedTaxSale } from '../base'

interface Bid4AssetsConfig {
  state: string
  county: string
  saleType: 'foreclosure' | 'tax-deed' | 'tax-lien'
  agencySlug?: string
}

export class Bid4AssetsScraper extends BaseScraper {
  private config: Bid4AssetsConfig

  constructor(scraperId: string, config: Bid4AssetsConfig) {
    super(scraperId)
    this.config = config
  }

  async scrape(): Promise<ScrapeResult> {
    const errors: string[] = []
    let recordsFound = 0
    let recordsSaved = 0

    try {
      const baseUrl = 'https://www.bid4assets.com'
      const searchUrl = this.config.agencySlug
        ? `${baseUrl}/auctions/agency/${this.config.agencySlug}`
        : `${baseUrl}/search?q=${encodeURIComponent(this.config.county + ' ' + this.config.state)}&category=tax-sale`

      const res = await this.http.get(searchUrl)
      const $ = this.parseHTML(res.data)
      
      const foreclosures: ScrapedForeclosure[] = []
      const taxSales: ScrapedTaxSale[] = []

      // Parse Bid4Assets auction listings
      $('.auction-listing, .property-listing, article.listing').each((_, el) => {
        const title = $(el).find('.listing-title, h3, .property-address').text().trim()
        const bidAmount = $(el).find('.current-bid, .opening-bid, .bid-amount').text().trim()
        const endDate = $(el).find('.end-date, .auction-date, time').attr('datetime') || 
                       $(el).find('.end-date, .auction-date').text().trim()
        const detailUrl = $(el).find('a').first().attr('href') || ''
        const id = $(el).attr('data-auction-id') || $(el).attr('data-id') || detailUrl.split('/').pop() || ''
        const statusText = $(el).find('.status, .badge').text().trim().toLowerCase()

        if (!title || title.length < 5) return

        const addressParts = title.split(',')
        const address = this.cleanAddress(addressParts[0] || title)
        const city = addressParts[1]?.trim() || this.config.county

        const property = {
          address,
          city,
          county: this.config.county,
          state: this.config.state,
          zip: addressParts[2]?.trim() || '',
        }

        const status = statusText.includes('sold') ? 'sold' : statusText.includes('cancel') ? 'cancelled' : 'available'

        if (this.config.saleType === 'foreclosure') {
          foreclosures.push({
            property,
            auctionDate: this.parseDate(endDate),
            openingBid: this.parseCurrency(bidAmount),
            status,
            sourceUrl: detailUrl.startsWith('http') ? detailUrl : `${baseUrl}${detailUrl}`,
            sourceId: id,
          })
        } else {
          taxSales.push({
            property,
            saleType: this.config.saleType === 'tax-deed' ? 'deed' : 'lien',
            lienAmount: this.parseCurrency(bidAmount),
            saleDate: this.parseDate(endDate),
            status,
            sourceUrl: detailUrl.startsWith('http') ? detailUrl : `${baseUrl}${detailUrl}`,
            sourceId: id,
          })
        }
      })

      if (this.config.saleType === 'foreclosure') {
        recordsFound = foreclosures.length
        recordsSaved = await this.saveForeclosures(foreclosures)
      } else {
        recordsFound = taxSales.length
        recordsSaved = await this.saveTaxSales(taxSales)
      }

      await this.updateScraperStats(recordsSaved, 'success')
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      errors.push(msg)
      await this.updateScraperStats(0, 'error', msg)
    }

    return { scraperId: this.scraperId, recordsFound, recordsSaved, errors }
  }
}
