import { BaseScraper, ScrapeResult, ScrapedTaxSale } from '../base'

interface SRIConfig {
  state: string
  county: string
  fipsCode: string
  saleType: 'lien' | 'deed'
}

export class SRIScraper extends BaseScraper {
  private config: SRIConfig

  constructor(scraperId: string, config: SRIConfig) {
    super(scraperId)
    this.config = config
  }

  async scrape(): Promise<ScrapeResult> {
    const errors: string[] = []
    let recordsFound = 0
    let recordsSaved = 0
    const listings: ScrapedTaxSale[] = []

    try {
      const baseUrl = 'https://www.sriservices.com'
      const searchUrl = `${baseUrl}/taxsale/index.cfm?fuseaction=search.results`

      const res = await this.http.post(
        searchUrl,
        new URLSearchParams({
          state: this.config.state,
          county: this.config.county,
          fips: this.config.fipsCode,
          status: 'A',
        }).toString(),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )

      const $ = this.parseHTML(res.data)

      $('table.results tr, tr.data-row').each((i, row) => {
        if (i === 0) return // skip header
        const cells = $(row).find('td')
        if (cells.length < 4) return

        const certNo = $(cells[0]).text().trim()
        const parcelId = $(cells[1]).text().trim()
        const address = $(cells[2]).text().trim()
        const amount = $(cells[3]).text().trim()
        const year = $(cells[4])?.text().trim()
        const saleDate = $(cells[5])?.text().trim()

        if (!address && !certNo) return

        listings.push({
          property: {
            address: this.cleanAddress(address),
            city: this.config.county,
            county: this.config.county,
            state: this.config.state,
            parcelId,
          },
          saleType: this.config.saleType,
          certificateNumber: certNo,
          yearOfTax: parseInt(year) || undefined,
          lienAmount: this.parseCurrency(amount),
          saleDate: this.parseDate(saleDate),
          status: 'available',
          sourceId: certNo || parcelId,
        })
      })

      recordsFound = listings.length
      recordsSaved = await this.saveTaxSales(listings)
      await this.updateScraperStats(recordsSaved, 'success')
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      errors.push(msg)
      await this.updateScraperStats(0, 'error', msg)
    }

    return { scraperId: this.scraperId, recordsFound, recordsSaved, errors }
  }
}
