import { BaseScraper, ScrapeResult, ScrapedForeclosure, ScrapedTaxSale } from '../base'
import * as cheerio from 'cheerio'

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
    const foreclosures: ScrapedForeclosure[] = []
    const taxSales: ScrapedTaxSale[] = []

    try {
      const baseUrl = 'https://www.bid4assets.com'
      const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': baseUrl,
      }

      const urls = this.config.agencySlug
        ? [
            `${baseUrl}/auctions/agency/${this.config.agencySlug}`,
            `${baseUrl}/${this.config.agencySlug}`,
          ]
        : [
            `${baseUrl}/auctions?state=${this.config.state}&county=${encodeURIComponent(this.config.county)}&category=tax-sale`,
            `${baseUrl}/search?q=${encodeURIComponent(this.config.county + ' County ' + this.config.state)}&category=real-estate-tax-deed`,
          ]

      for (const url of urls) {
        try {
          const res = await this.http.get(url, { headers })
          const $ = cheerio.load(res.data)

          // Primary selectors for Bid4Assets auction listings
          const itemSelectors = [
            '.auction-item', '.listing-card', '.property-listing',
            'article.listing', '.auction-listing', '.result-item',
            '.card.auction', '[data-auction-id]',
          ]

          let found = false
          for (const sel of itemSelectors) {
            const items = $(sel)
            if (items.length === 0) continue
            found = true

            items.each((_, el) => {
              const $el = $(el)
              const title = $el.find('.listing-title, h3, h4, .property-address, .address, .auction-title').first().text().trim()
                || $el.find('a').first().text().trim()
              const bidAmount = $el.find('.current-bid, .opening-bid, .bid-amount, .minimum-bid, .starting-bid').first().text().trim()
                || $el.find('[class*="bid"]').first().text().trim()
              const endDate = $el.find('[datetime]').first().attr('datetime')
                || $el.find('.end-date, .auction-end, .close-date, time').first().text().trim()
              const detailHref = $el.find('a').first().attr('href') || ''
              const id = $el.attr('data-auction-id') || $el.attr('data-id')
                || detailHref.split('/').pop() || ''
              const statusText = $el.find('.status, .badge, .auction-status').first().text().trim().toLowerCase()
              const parcelId = $el.find('.parcel, .apn, [class*="parcel"]').first().text().trim()

              if (!title || title.length < 5) return

              const addressParts = title.split(',')
              const address = this.cleanAddress(addressParts[0] || title)
              const city = addressParts[1]?.trim() || this.config.county
              const zip = addressParts[2]?.trim().replace(/\D/g, '').slice(0, 5) || ''

              const property = {
                address,
                city,
                county: this.config.county,
                state: this.config.state,
                zip,
                parcelId: parcelId || undefined,
              }

              const status = statusText.includes('sold') ? 'sold'
                : statusText.includes('cancel') ? 'cancelled'
                : 'available'

              const sourceUrl = detailHref
                ? (detailHref.startsWith('http') ? detailHref : `${baseUrl}${detailHref}`)
                : url

              if (this.config.saleType === 'foreclosure') {
                foreclosures.push({
                  property,
                  auctionDate: this.parseDate(endDate || ''),
                  openingBid: this.parseCurrency(bidAmount),
                  status,
                  sourceUrl,
                  sourceId: id,
                })
              } else {
                taxSales.push({
                  property,
                  saleType: this.config.saleType === 'tax-deed' ? 'deed' : 'lien',
                  lienAmount: this.parseCurrency(bidAmount),
                  saleDate: this.parseDate(endDate || ''),
                  status,
                  sourceUrl,
                  sourceId: id,
                })
              }
            })
            break
          }

          // JSON API fallback — Bid4Assets exposes an internal API on some pages
          if (!found) {
            try {
              const apiRes = await this.http.get(
                `${baseUrl}/api/v2/auctions?agency=${this.config.agencySlug || ''}&state=${this.config.state}&status=active&page_size=200`,
                { headers: { ...headers, Accept: 'application/json' } }
              )
              const data = apiRes.data
              const items = data?.auctions || data?.results || data?.items || []
              for (const item of items) {
                const property = {
                  address: this.cleanAddress(item.address || item.property_address || ''),
                  city: item.city || this.config.county,
                  county: this.config.county,
                  state: this.config.state,
                  zip: item.zip || item.zipcode || '',
                  parcelId: item.parcel_id || item.apn || undefined,
                }
                if (this.config.saleType === 'foreclosure') {
                  foreclosures.push({
                    property,
                    auctionDate: this.parseDate(item.end_date || item.auction_date || ''),
                    openingBid: parseFloat(item.current_bid || item.opening_bid || '0') || undefined,
                    status: item.status?.toLowerCase() || 'available',
                    sourceUrl: `${baseUrl}/auctions/${item.id}`,
                    sourceId: String(item.id || ''),
                  })
                } else {
                  taxSales.push({
                    property,
                    saleType: 'deed',
                    lienAmount: parseFloat(item.current_bid || item.opening_bid || '0') || undefined,
                    saleDate: this.parseDate(item.end_date || item.auction_date || ''),
                    status: item.status?.toLowerCase() || 'available',
                    sourceUrl: `${baseUrl}/auctions/${item.id}`,
                    sourceId: String(item.id || ''),
                  })
                }
              }
            } catch {}
          }

          const combined = this.config.saleType === 'foreclosure' ? foreclosures : taxSales
          if (combined.length > 0) break
        } catch (urlErr) {
          errors.push(`${url}: ${urlErr instanceof Error ? urlErr.message : String(urlErr)}`)
        }
      }

      if (this.config.saleType === 'foreclosure') {
        recordsFound = foreclosures.length
        if (recordsFound > 0) recordsSaved = await this.saveForeclosures(foreclosures)
      } else {
        recordsFound = taxSales.length
        if (recordsFound > 0) recordsSaved = await this.saveTaxSales(taxSales)
      }

      if (recordsFound > 0) {
        await this.updateScraperStats(recordsSaved, 'success')
      } else {
        errors.push('No listings found — site may require JS rendering or has no active auctions')
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
