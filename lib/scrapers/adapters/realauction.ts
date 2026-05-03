import { BaseScraper, ScrapeResult, ScrapedForeclosure } from '../base'
import * as cheerio from 'cheerio'

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

  private buildBaseUrl(): string {
    if (this.config.baseUrl) return this.config.baseUrl.replace(/\/$/, '')
    const code = this.config.countyCode.toLowerCase()
    return `https://${code}.realforeclose.com`
  }

  async scrape(): Promise<ScrapeResult> {
    const errors: string[] = []
    const listings: ScrapedForeclosure[] = []
    let recordsFound = 0
    let recordsSaved = 0
    const baseUrl = this.buildBaseUrl()

    try {
      // Step 1: Establish a session by visiting the home page
      const homeRes = await this.http.get(`${baseUrl}/index.cfm`, {
        headers: this.browserHeaders(baseUrl),
        maxRedirects: 5,
      })
      // Extract CFID + CFTOKEN cookies if set
      const setCookieHeaders = (homeRes.headers['set-cookie'] as string[] | undefined) || []
      const sessionCookies = setCookieHeaders
        .map(c => c.split(';')[0])
        .join('; ')

      // Step 2: Try the main auction preview endpoint
      const auctionEndpoints = [
        `/index.cfm?zaction=AUCTION&Zmethod=PREVIEW&AUCTIONDATE=&Status=A&myCount=100&startRow=1`,
        `/index.cfm?zaction=AUCTION&Zmethod=PREVIEW&Status=A&myCount=100&startRow=1`,
        `/index.cfm?zaction=AUCTION&Zmethod=PREVIEW&AUCTIONDATE=&myCount=100&startRow=1`,
      ]

      for (const endpoint of auctionEndpoints) {
        try {
          const res = await this.http.get(`${baseUrl}${endpoint}`, {
            headers: {
              ...this.browserHeaders(baseUrl),
              Cookie: sessionCookies,
            },
          })

          const $ = cheerio.load(res.data)

          // realforeclose.com auction rows
          $('table.AUCTION_ITEM, div.AUCTION_ITEM, tr.AUCTION_ITEM, .item-details').each((_, el) => {
            const $el = $(el)
            const caseNum = $el.find('.CASENUM, .caseno, [id*="CASENUM"], td:nth-child(1)').first().text().trim()
              || $el.find('a[href*="casenum"]').first().text().trim()
            const address = $el.find('.ADDR, .address, [id*="ADDRESS"], td:nth-child(2)').first().text().trim()
            const city = $el.find('.CITY, .city, td:nth-child(3)').first().text().trim()
            const zip = $el.find('.ZIP, td:nth-child(4)').first().text().trim()
            const bidStr = $el.find('.OPENINGBID, .openingbid, [id*="OPENINGBID"]').first().text().trim()
              || $el.find('td:nth-child(5), td:nth-child(6)').first().text().trim()
            const dateStr = $el.find('.AUCTIONDATE, [id*="AUCTIONDATE"], td:nth-child(7)').first().text().trim()
            const statusStr = $el.find('.STATUS, .status').first().text().trim().toLowerCase()
            const detailHref = $el.find('a').first().attr('href')

            if (!address || address.length < 5) return

            const sourceUrl = detailHref
              ? (detailHref.startsWith('http') ? detailHref : `${baseUrl}${detailHref}`)
              : `${baseUrl}/index.cfm?zaction=AUCTION&zmethod=PREVIEW`

            listings.push({
              property: {
                address: this.cleanAddress(address),
                city: city || this.config.county,
                county: this.config.county,
                state: this.config.state,
                zip: zip || '',
              },
              caseNumber: caseNum || undefined,
              auctionDate: this.parseDate(dateStr),
              openingBid: this.parseCurrency(bidStr),
              status: statusStr.includes('cancel') ? 'cancelled'
                : statusStr.includes('sold') ? 'sold'
                : statusStr.includes('post') ? 'postponed'
                : 'scheduled',
              sourceUrl,
              sourceId: caseNum || undefined,
            })
          })

          // Also try table rows (some counties use plain tables)
          if (listings.length === 0) {
            $('table tr').each((_, row) => {
              const cells = $(row).find('td')
              if (cells.length < 3) return
              const caseNum = $(cells[0]).text().trim()
              const address = $(cells[1]).text().trim()
              const dateStr = $(cells[2]).text().trim()
              const bidStr = cells.length > 3 ? $(cells[3]).text().trim() : ''
              if (!address || address.length < 5 || address === 'Address') return
              if (address.toLowerCase().includes('address') && cells.length < 5) return
              listings.push({
                property: {
                  address: this.cleanAddress(address),
                  city: this.config.county,
                  county: this.config.county,
                  state: this.config.state,
                  zip: '',
                },
                caseNumber: caseNum || undefined,
                auctionDate: this.parseDate(dateStr),
                openingBid: this.parseCurrency(bidStr),
                status: 'scheduled',
                sourceId: caseNum || undefined,
              })
            })
          }

          if (listings.length > 0) break
        } catch (endpointErr) {
          errors.push(`Endpoint ${endpoint}: ${endpointErr instanceof Error ? endpointErr.message : String(endpointErr)}`)
        }
      }

      // Fallback: Try sheriffsalesonline.com format (OH counties)
      if (listings.length === 0 && baseUrl.includes('sheriffsalesonline')) {
        const res = await this.http.get(`${baseUrl}/auctionList.do?countyCode=${this.config.countyCode}&status=A`, {
          headers: this.browserHeaders(baseUrl),
        })
        const $ = cheerio.load(res.data)
        $('tr.auctionRow, tr[id^="auction"]').each((_, row) => {
          const cells = $(row).find('td')
          if (cells.length < 3) return
          const caseNum = $(cells[0]).text().trim()
          const address = $(cells[1]).text().trim()
          const dateStr = $(cells[2]).text().trim()
          const bidStr = cells.length > 3 ? $(cells[3]).text().trim() : ''
          if (!address || address.length < 5) return
          listings.push({
            property: {
              address: this.cleanAddress(address),
              city: this.config.county,
              county: this.config.county,
              state: this.config.state,
              zip: '',
            },
            caseNumber: caseNum || undefined,
            auctionDate: this.parseDate(dateStr),
            openingBid: this.parseCurrency(bidStr),
            status: 'scheduled',
            sourceId: caseNum || undefined,
          })
        })
      }

      recordsFound = listings.length
      if (recordsFound > 0) {
        recordsSaved = await this.saveForeclosures(listings)
        await this.updateScraperStats(recordsSaved, 'success')
      } else {
        errors.push('No listings found — site may require JS session or has no active auctions')
        await this.updateScraperStats(0, 'error', errors.join('; '))
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      errors.push(msg)
      await this.updateScraperStats(0, 'error', msg)
    }

    return { scraperId: this.scraperId, recordsFound, recordsSaved, errors }
  }

  private browserHeaders(referer: string): Record<string, string> {
    return {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'same-origin',
      'Referer': referer,
      'Cache-Control': 'max-age=0',
    }
  }
}
