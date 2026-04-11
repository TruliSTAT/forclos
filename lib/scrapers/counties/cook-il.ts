import { BaseScraper, ScrapeResult, ScrapedForeclosure } from '../base'

export class CookCountyILScraper extends BaseScraper {
  constructor(scraperId: string) { super(scraperId) }

  async scrape(): Promise<ScrapeResult> {
    const errors: string[] = []
    const listings: ScrapedForeclosure[] = []

    try {
      // Cook County Sheriff Sale - public listing
      const res = await this.http.get(
        'https://www.cookcountysheriff.org/departments/courts-civil-process/sheriff-sales/foreclosure-search/'
      )
      const $ = this.parseHTML(res.data)

      $('table tbody tr, .sale-listing').each((_, row) => {
        const cells = $(row).find('td')
        if (cells.length < 4) return
        const caseNumber = $(cells[0]).text().trim()
        const address    = $(cells[1]).text().trim()
        const saleDate   = $(cells[2]).text().trim()
        const judgment   = $(cells[3]).text().trim()

        if (!address || address.length < 5) return

        const parts = address.split(',')
        listings.push({
          property: {
            address: this.cleanAddress(parts[0] || address),
            city: parts[1]?.trim() || 'Chicago',
            county: 'Cook',
            state: 'IL',
            zip: parts[2]?.trim() || '',
          },
          caseNumber,
          auctionDate: this.parseDate(saleDate),
          openingBid: this.parseCurrency(judgment),
          status: 'scheduled',
          sourceUrl: 'https://www.cookcountysheriff.org/departments/courts-civil-process/sheriff-sales/',
          sourceId: caseNumber,
        })
      })

      const saved = await this.saveForeclosures(listings)
      await this.updateScraperStats(saved, 'success')
      return { scraperId: this.scraperId, recordsFound: listings.length, recordsSaved: saved, errors }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      await this.updateScraperStats(0, 'error', msg)
      return { scraperId: this.scraperId, recordsFound: 0, recordsSaved: 0, errors: [msg] }
    }
  }
}
