import { BaseScraper, ScrapeResult, ScrapedForeclosure, ScrapedTaxSale } from '../base'

interface GenericHTMLConfig {
  state: string
  county: string
  sourceUrl: string
  listingType: 'foreclosure' | 'tax-lien' | 'tax-deed'
  selectors: {
    row: string
    address?: string
    city?: string
    parcelId?: string
    amount?: string
    date?: string
    caseNumber?: string
    status?: string
    link?: string
  }
  pagination?: {
    nextSelector: string
    maxPages: number
  }
}

export class GenericHTMLScraper extends BaseScraper {
  private config: GenericHTMLConfig

  constructor(scraperId: string, config: GenericHTMLConfig) {
    super(scraperId)
    this.config = config
  }

  async scrape(): Promise<ScrapeResult> {
    const errors: string[] = []
    let recordsFound = 0
    let recordsSaved = 0
    const foreclosures: ScrapedForeclosure[] = []
    const taxSales: ScrapedTaxSale[] = []

    let url: string | null = this.config.sourceUrl
    let pagesScraped = 0
    const maxPages = this.config.pagination?.maxPages || 1

    while (url && pagesScraped < maxPages) {
      try {
        const res = await this.http.get(url)
        const $ = this.parseHTML(res.data)
        const { selectors } = this.config

        $(selectors.row).each((_, el) => {
          const address = selectors.address
            ? $(el).find(selectors.address).text().trim()
            : $(el).find('td:first-child, .address').text().trim()
          
          if (!address || address.length < 5) return

          const city = selectors.city
            ? $(el).find(selectors.city).text().trim()
            : this.config.county
          
          const parcelId = selectors.parcelId
            ? $(el).find(selectors.parcelId).text().trim()
            : undefined
          
          const amount = selectors.amount
            ? $(el).find(selectors.amount).text().trim()
            : ''
          
          const date = selectors.date
            ? $(el).find(selectors.date).text().trim()
            : ''
          
          const caseNumber = selectors.caseNumber
            ? $(el).find(selectors.caseNumber).text().trim()
            : undefined
          
          const status = selectors.status
            ? $(el).find(selectors.status).text().trim().toLowerCase()
            : 'scheduled'
          
          const link = selectors.link
            ? $(el).find(selectors.link).attr('href')
            : $(el).find('a').first().attr('href')

          const property = {
            address: this.cleanAddress(address),
            city: city || this.config.county,
            county: this.config.county,
            state: this.config.state,
            parcelId,
          }

          const sourceUrl = link
            ? (link.startsWith('http') ? link : new URL(link, url!).href)
            : undefined

          if (this.config.listingType === 'foreclosure') {
            foreclosures.push({
              property,
              caseNumber,
              auctionDate: this.parseDate(date),
              openingBid: this.parseCurrency(amount),
              status: status.includes('cancel') ? 'cancelled' : 'scheduled',
              sourceUrl,
              sourceId: caseNumber || parcelId,
            })
          } else {
            taxSales.push({
              property,
              saleType: this.config.listingType === 'tax-deed' ? 'deed' : 'lien',
              certificateNumber: caseNumber,
              lienAmount: this.parseCurrency(amount),
              saleDate: this.parseDate(date),
              status: 'available',
              sourceUrl,
              sourceId: caseNumber || parcelId,
            })
          }
        })

        // Pagination
        if (this.config.pagination) {
          const nextHref = $(this.config.pagination.nextSelector).attr('href')
          url = nextHref ? (nextHref.startsWith('http') ? nextHref : new URL(nextHref, url).href) : null
        } else {
          url = null
        }
        pagesScraped++
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err)
        errors.push(msg)
        url = null
      }
    }

    if (this.config.listingType === 'foreclosure') {
      recordsFound = foreclosures.length
      recordsSaved = await this.saveForeclosures(foreclosures)
    } else {
      recordsFound = taxSales.length
      recordsSaved = await this.saveTaxSales(taxSales)
    }

    await this.updateScraperStats(recordsSaved, errors.length > 0 ? 'error' : 'success', errors.join('; '))
    return { scraperId: this.scraperId, recordsFound, recordsSaved, errors }
  }
}
