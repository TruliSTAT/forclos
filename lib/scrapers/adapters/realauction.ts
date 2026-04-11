import { BaseScraper, ScrapeResult, ScrapedForeclosure } from '../base'

interface RealAuctionConfig {
  countyCode: string
  state: string
  county: string
  baseUrl?: string
}

export class RealAuctionScraper extends BaseScraper {
  private config: RealAuctionConfig

  constructor(scraperId: string, config: RealAuctionConfig) {
    super(scraperId)
    this.config = config
  }

  async scrape(): Promise<ScrapeResult> {
    const errors: string[] = []
    let recordsFound = 0
    let recordsSaved = 0
    const listings: ScrapedForeclosure[] = []

    try {
      // RealAuction uses a county-specific search page
      const baseUrl = this.config.baseUrl || `https://www.realauction.com`
      const searchUrl = `${baseUrl}/servlet/com.realauction.raaprst.servlet.search.ResultsServlet`

      const response = await this.http.post(
        searchUrl,
        new URLSearchParams({
          site: this.config.countyCode,
          aucstatus: 'A',
          pageSize: '100',
          pageNum: '0',
        }).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Referer': baseUrl,
          },
        }
      )

      const $ = this.parseHTML(response.data)

      // RealAuction results are in a table structure
      $('table.results-table tr, tr.auction-row, .auction-item').each((_, row) => {
        const cells = $(row).find('td')
        if (cells.length < 3) return

        const caseNumber = $(cells[0]).text().trim()
        const address = $(cells[1]).text().trim()
        const auctionDateStr = $(cells[2]).text().trim()
        const openingBidStr = $(cells[3])?.text().trim()
        const statusStr = $(cells[4])?.text().trim().toLowerCase() || 'scheduled'

        if (!address || address.length < 5) return

        // Parse address into components
        const parts = address.split(',')
        const streetAddress = parts[0]?.trim() || address
        const cityState = parts[1]?.trim() || ''
        const cityParts = cityState.split(' ')
        const city = cityParts.slice(0, -2).join(' ') || this.config.county
        const zip = cityParts[cityParts.length - 1] || ''

        listings.push({
          property: {
            address: this.cleanAddress(streetAddress),
            city: city || this.config.county,
            county: this.config.county,
            state: this.config.state,
            zip,
          },
          caseNumber,
          auctionDate: this.parseDate(auctionDateStr),
          openingBid: this.parseCurrency(openingBidStr),
          status: statusStr.includes('cancel') ? 'cancelled' : statusStr.includes('sold') ? 'sold' : 'scheduled',
          sourceUrl: `${baseUrl}/details/${caseNumber}`,
          sourceId: caseNumber,
        })
      })

      // Also try JSON API format (newer RealAuction)
      if (listings.length === 0) {
        try {
          const apiRes = await this.http.get(
            `${baseUrl}/api/v1/auctions?county=${this.config.countyCode}&status=active&limit=200`,
            { headers: { 'Accept': 'application/json' } }
          )
          if (apiRes.data?.auctions) {
            for (const item of apiRes.data.auctions) {
              listings.push({
                property: {
                  address: this.cleanAddress(item.propertyAddress || item.address || ''),
                  city: item.city || this.config.county,
                  county: this.config.county,
                  state: this.config.state,
                  zip: item.zip || item.zipCode || '',
                  parcelId: item.parcelId || item.folio,
                },
                caseNumber: item.caseNumber || item.caseNo,
                auctionDate: this.parseDate(item.auctionDate || item.saleDate),
                openingBid: this.parseCurrency(String(item.openingBid || item.minimumBid || '')),
                status: item.status?.toLowerCase() || 'scheduled',
                sourceUrl: `${baseUrl}/auction/${item.id}`,
                sourceId: String(item.id || item.caseNumber),
              })
            }
          }
        } catch {}
      }

      recordsFound = listings.length
      recordsSaved = await this.saveForeclosures(listings)
      await this.updateScraperStats(recordsSaved, 'success')
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      errors.push(msg)
      await this.updateScraperStats(0, 'error', msg)
    }

    return { scraperId: this.scraperId, recordsFound, recordsSaved, errors }
  }
}
