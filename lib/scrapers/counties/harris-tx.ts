import { BaseScraper, ScrapeResult, ScrapedTaxSale } from '../base'

export class HarrisCountyTXScraper extends BaseScraper {
  constructor(scraperId: string) { super(scraperId) }

  async scrape(): Promise<ScrapeResult> {
    const errors: string[] = []
    const listings: ScrapedTaxSale[] = []

    try {
      // Harris County Tax Sales - public records
      const res = await this.http.get(
        'https://www.hcto.net/property-tax/tax-sales'
      )
      const $ = this.parseHTML(res.data)

      // Parse tax sale listings table
      $('table tr').each((i, row) => {
        if (i === 0) return
        const cells = $(row).find('td')
        if (cells.length < 3) return

        const acctNo   = $(cells[0]).text().trim()
        const address  = $(cells[1]).text().trim()
        const amount   = $(cells[2]).text().trim()
        const saleDate = $(cells[3])?.text().trim()

        if (!address) return

        listings.push({
          property: {
            address: this.cleanAddress(address),
            city: 'Houston',
            county: 'Harris',
            state: 'TX',
            parcelId: acctNo,
          },
          saleType: 'deed',
          lienAmount: this.parseCurrency(amount),
          saleDate: this.parseDate(saleDate),
          status: 'available',
          sourceUrl: 'https://www.hcto.net/property-tax/tax-sales',
          sourceId: acctNo,
        })
      })

      const saved = await this.saveTaxSales(listings)
      await this.updateScraperStats(saved, 'success')
      return { scraperId: this.scraperId, recordsFound: listings.length, recordsSaved: saved, errors }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      await this.updateScraperStats(0, 'error', msg)
      return { scraperId: this.scraperId, recordsFound: 0, recordsSaved: 0, errors: [msg] }
    }
  }
}
