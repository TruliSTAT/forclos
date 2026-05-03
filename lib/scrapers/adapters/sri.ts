import { BaseScraper, ScrapeResult, ScrapedTaxSale } from '../base'
import * as cheerio from 'cheerio'

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
      const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': `${baseUrl}/taxsale/`,
      }

      // Try multiple SRI endpoint patterns
      const endpoints = [
        `/taxsale/index.cfm?fuseaction=search.results&fips=${this.config.fipsCode}`,
        `/taxsale/?fips=${this.config.fipsCode}&state=${this.config.state}`,
        `/taxsale/index.cfm?fuseaction=county.detail&fips=${this.config.fipsCode}`,
      ]

      for (const endpoint of endpoints) {
        try {
          const res = await this.http.get(`${baseUrl}${endpoint}`, { headers })
          const $ = cheerio.load(res.data)

          // Try various table structures
          const rows = $('table tr').toArray().slice(1) // skip header
            .concat($('.parcel-row, .listing-row, tr.data').toArray())

          for (const row of rows) {
            const cells = $(row).find('td')
            if (cells.length < 3) continue

            const certNo = $(cells[0]).text().trim()
            const parcelId = cells.length > 1 ? $(cells[1]).text().trim() : ''
            const address = cells.length > 2 ? $(cells[2]).text().trim() : $(cells[1]).text().trim()
            const amount = cells.length > 3 ? $(cells[3]).text().trim() : ''
            const year = cells.length > 4 ? $(cells[4]).text().trim() : ''
            const saleDate = cells.length > 5 ? $(cells[5]).text().trim() : ''

            if (!address || address.length < 5) continue
            if (address.toLowerCase().includes('address') && cells.length < 5) continue

            listings.push({
              property: {
                address: this.cleanAddress(address),
                city: this.config.county,
                county: this.config.county,
                state: this.config.state,
                parcelId: parcelId || undefined,
              },
              saleType: this.config.saleType,
              certificateNumber: certNo || undefined,
              yearOfTax: parseInt(year) || undefined,
              lienAmount: this.parseCurrency(amount),
              saleDate: this.parseDate(saleDate),
              status: 'available',
              sourceId: certNo || parcelId || undefined,
              sourceUrl: `${baseUrl}/taxsale/${endpoint}`,
            })
          }

          if (listings.length > 0) break
        } catch (endpointErr) {
          errors.push(`${endpoint}: ${endpointErr instanceof Error ? endpointErr.message : String(endpointErr)}`)
        }
      }

      // GA Fulton/Gwinnett also has a direct deed sale portal
      if (listings.length === 0 && this.config.state === 'GA') {
        try {
          const gaUrl = `https://www.${this.config.county.toLowerCase()}countyga.gov/tax-commissioner/tax-sale`
          const res = await this.http.get(gaUrl, { headers })
          const $ = cheerio.load(res.data)
          $('table tr').each((i, row) => {
            if (i === 0) return
            const cells = $(row).find('td')
            if (cells.length < 2) return
            const parcelId = $(cells[0]).text().trim()
            const address = $(cells[1]).text().trim()
            const amount = cells.length > 2 ? $(cells[2]).text().trim() : ''
            const saleDate = cells.length > 3 ? $(cells[3]).text().trim() : ''
            if (!address || address.length < 5) return
            listings.push({
              property: {
                address: this.cleanAddress(address),
                city: this.config.county,
                county: this.config.county,
                state: this.config.state,
                parcelId: parcelId || undefined,
              },
              saleType: 'deed',
              lienAmount: this.parseCurrency(amount),
              saleDate: this.parseDate(saleDate),
              status: 'available',
              sourceId: parcelId || undefined,
            })
          })
        } catch {}
      }

      recordsFound = listings.length
      if (recordsFound > 0) {
        recordsSaved = await this.saveTaxSales(listings)
        await this.updateScraperStats(recordsSaved, 'success')
      } else {
        errors.push('No listings found — SRI site may have changed structure or no active sales')
        await this.updateScraperStats(0, 'error', errors.join('; '))
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      errors.push(msg)
      await this.updateScraperStats(0, 'error', msg)
    }

    return { scraperId: this.scraperId, recordsFound, recordsSaved, errors }
  }
}
