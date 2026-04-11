import { BaseScraper, ScrapeResult, ScrapedTaxSale } from '../base'

export class MaricopaAZScraper extends BaseScraper {
  constructor(scraperId: string) { super(scraperId) }

  async scrape(): Promise<ScrapeResult> {
    const errors: string[] = []
    const listings: ScrapedTaxSale[] = []

    try {
      const res = await this.http.get(
        'https://mcassessor.maricopa.gov/mcs.php?q=tax+liens&sale=1'
      )
      const $ = this.parseHTML(res.data)

      $('tr.result-row, table.results-table tr').each((i, row) => {
        if (i === 0) return
        const cells = $(row).find('td')
        if (cells.length < 3) return

        const parcelId  = $(cells[0]).text().trim()
        const address   = $(cells[1]).text().trim()
        const amount    = $(cells[2]).text().trim()
        const rate      = $(cells[3])?.text().trim()
        const year      = $(cells[4])?.text().trim()

        if (!address) return

        listings.push({
          property: {
            address: this.cleanAddress(address),
            city: 'Phoenix',
            county: 'Maricopa',
            state: 'AZ',
            parcelId,
          },
          saleType: 'lien',
          lienAmount: this.parseCurrency(amount),
          interestRate: parseFloat(rate?.replace('%','') || '16') || 16,
          yearOfTax: parseInt(year) || new Date().getFullYear() - 1,
          status: 'available',
          sourceUrl: 'https://mcassessor.maricopa.gov/mcs.php',
          sourceId: parcelId,
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
