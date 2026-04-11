// Unclaimed Property Scraper
// Targets state unclaimed property databases (escheatment funds)
// Most states have public search APIs or downloadable CSVs

import axios from 'axios'
import { BaseScraper, ScrapeResult } from '../base'

interface UnclaimedRecord {
  ownerName: string
  address?: string
  city?: string
  state: string
  zip?: string
  reportedBy?: string
  amount?: number
  propertyType?: string
  reportDate?: string
}

export class UnclaimedPropertyScraper extends BaseScraper {
  private state: string

  constructor(scraperId: string, state: string) {
    super(scraperId)
    this.state = state
  }

  async scrape(): Promise<ScrapeResult> {
    const stateHandlers: Record<string, () => Promise<UnclaimedRecord[]>> = {
      FL: () => this.scrapeFloridaUnclaimed(),
      TX: () => this.scrapeTexasUnclaimed(),
      CA: () => this.scrapeCaliforniaUnclaimed(),
    }

    const handler = stateHandlers[this.state]
    if (!handler) {
      console.log(`No unclaimed handler for ${this.state}`)
      return { scraperId: this.scraperId, recordsFound: 0, recordsSaved: 0, errors: [] }
    }

    try {
      const records = await handler()
      return {
        scraperId: this.scraperId,
        recordsFound: records.length,
        recordsSaved: records.length,
        errors: [],
      }
    } catch (err: any) {
      return {
        scraperId: this.scraperId,
        recordsFound: 0,
        recordsSaved: 0,
        errors: [err?.message ?? 'Unknown error'],
      }
    }
  }

  private async scrapeFloridaUnclaimed(): Promise<UnclaimedRecord[]> {
    try {
      const res = await axios.get('https://www.myfloridacfo.com/api/unclaimed/search', {
        params: { state: 'FL', type: 'all', limit: 500 },
        timeout: 30000,
        headers: { 'User-Agent': 'Forclos/1.0 investor-research-tool' },
      })
      const items = res.data?.results || []
      return items.map((item: any) => ({
        ownerName: item.ownerName || item.name,
        address: item.address,
        city: item.city,
        state: 'FL',
        zip: item.zip,
        reportedBy: item.holder,
        amount: item.amount ? parseFloat(item.amount) : undefined,
        propertyType: item.propertyType,
        reportDate: item.reportDate,
      }))
    } catch {
      return []
    }
  }

  private async scrapeTexasUnclaimed(): Promise<UnclaimedRecord[]> {
    try {
      const res = await axios.get('https://claimittexas.org/app/claim/search', {
        params: { state: 'TX', limit: 500 },
        timeout: 30000,
        headers: { 'User-Agent': 'Forclos/1.0 investor-research-tool' },
      })
      const items = res.data?.claims || res.data?.results || []
      return items.map((item: any) => ({
        ownerName: item.ownerName || item.fullName,
        address: item.address,
        city: item.city,
        state: 'TX',
        zip: item.zipCode,
        reportedBy: item.holder || item.reportedBy,
        amount: item.amount ? parseFloat(String(item.amount).replace(/[$,]/g, '')) : undefined,
        propertyType: item.propertyType,
      }))
    } catch {
      return []
    }
  }

  private async scrapeCaliforniaUnclaimed(): Promise<UnclaimedRecord[]> {
    try {
      const res = await axios.get('https://ucpi.sco.ca.gov/api/search', {
        params: { state: 'CA', maxResults: 500 },
        timeout: 30000,
        headers: { 'User-Agent': 'Forclos/1.0 investor-research-tool' },
      })
      const items = res.data?.properties || []
      return items.map((item: any) => ({
        ownerName: item.ownerName,
        address: item.streetAddress,
        city: item.city,
        state: 'CA',
        zip: item.zipCode,
        reportedBy: item.holderName,
        amount: item.cashReported ? parseFloat(item.cashReported) : undefined,
        propertyType: item.propertyType,
      }))
    } catch {
      return []
    }
  }
}
