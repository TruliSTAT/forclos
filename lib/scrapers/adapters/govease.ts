import { BaseScraper, ScrapeResult, ScrapedTaxSale } from '../base'

interface GovEaseConfig {
  countyId: string
  state: string
  county: string
  saleType: 'lien' | 'deed'
}

export class GovEaseScraper extends BaseScraper {
  private config: GovEaseConfig

  constructor(scraperId: string, config: GovEaseConfig) {
    super(scraperId)
    this.config = config
  }

  async scrape(): Promise<ScrapeResult> {
    const errors: string[] = []
    let recordsFound = 0
    let recordsSaved = 0
    const listings: ScrapedTaxSale[] = []

    try {
      // GovEase API v2
      const apiBase = 'https://legacy.govease.com'
      
      // Get upcoming sales
      const salesRes = await this.http.get(
        `${apiBase}/api/sales?county_id=${this.config.countyId}&status=upcoming&per_page=200`,
        { headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' } }
      )

      const sales = salesRes.data?.data || salesRes.data?.sales || []

      for (const sale of sales) {
        // Get parcels for this sale
        try {
          const parcelsRes = await this.http.get(
            `${apiBase}/api/sales/${sale.id}/parcels?per_page=500`,
            { headers: { 'Accept': 'application/json' } }
          )
          const parcels = parcelsRes.data?.data || []

          for (const parcel of parcels) {
            listings.push({
              property: {
                address: this.cleanAddress(parcel.situs_address || parcel.address || ''),
                city: parcel.situs_city || parcel.city || this.config.county,
                county: this.config.county,
                state: this.config.state,
                zip: parcel.situs_zip || parcel.zip || '',
                parcelId: parcel.parcel_number || parcel.apn || parcel.id,
                propertyType: parcel.property_class || parcel.land_use,
              },
              saleType: this.config.saleType,
              certificateNumber: parcel.certificate_number || parcel.cert_no,
              yearOfTax: parseInt(parcel.tax_year || sale.tax_year || ''),
              lienAmount: parseFloat(parcel.amount_due || parcel.lien_amount || '0') || undefined,
              interestRate: parseFloat(parcel.interest_rate || sale.interest_rate || '18') || undefined,
              saleDate: this.parseDate(sale.sale_date || sale.date),
              assessedValue: parseFloat(parcel.assessed_value || '0') || undefined,
              status: parcel.status?.toLowerCase() || 'available',
              sourceUrl: `${apiBase}/sales/${sale.id}/parcels/${parcel.id}`,
              sourceId: String(parcel.id),
            })
          }
        } catch {}
      }

      // Also try direct HTML scrape if API returns empty
      if (listings.length === 0) {
        const pageRes = await this.http.get(
          `${apiBase}/${this.config.state.toLowerCase()}/${this.config.county.toLowerCase().replace(/\s/g, '-')}-county`
        )
        const $ = this.parseHTML(pageRes.data)
        
        $('.parcel-row, .listing-row, tr[data-parcel]').each((_, el) => {
          const parcelId = $(el).attr('data-parcel') || $(el).find('.parcel-id').text().trim()
          const address = $(el).find('.address, td:nth-child(2)').text().trim()
          const amount = $(el).find('.amount, td:nth-child(4)').text().trim()
          const date = $(el).find('.sale-date, td:nth-child(3)').text().trim()

          if (!address) return
          const addressParts = address.split(',')
          listings.push({
            property: {
              address: this.cleanAddress(addressParts[0] || address),
              city: addressParts[1]?.trim() || this.config.county,
              county: this.config.county,
              state: this.config.state,
              parcelId,
            },
            saleType: this.config.saleType,
            lienAmount: this.parseCurrency(amount),
            saleDate: this.parseDate(date),
            status: 'available',
            sourceId: parcelId,
          })
        })
      }

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
