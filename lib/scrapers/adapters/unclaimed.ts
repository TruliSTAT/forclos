// Unclaimed Property Scraper
// Targets state unclaimed property databases (escheatment funds)
// Most states have public search APIs or downloadable CSVs

import axios from 'axios'
import { BaseScraper } from '../base'
import { db } from '@/lib/db'

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
  async run() {
    const stateHandlers: Record<string, () => Promise<UnclaimedRecord[]>> = {
      FL: () => this.scrapeFloridaUnclaimed(),
      TX: () => this.scrapeTexasUnclaimed(),
      CA: () => this.scrapeCaliforniaUnclaimed(),
    }

    const handler = stateHandlers[this.config.state]
    if (!handler) {
      console.log(`No unclaimed handler for ${this.config.state}`)
      return
    }

    const records = await handler()
    await this.saveUnclaimedRecords(records)
    await this.updateScraperStats(records.length)
  }

  private async scrapeFloridaUnclaimed(): Promise<UnclaimedRecord[]> {
    // Florida Department of Financial Services – public CSV
    // https://www.myfloridacfo.com/division/aa/unclamedproperty/
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

  private async saveUnclaimedRecords(records: UnclaimedRecord[]) {
    // Upsert into a virtual "unclaimed" tax sale listing type
    // We reuse the TaxSaleListing model with saleType='unclaimed'
    for (const rec of records) {
      if (!rec.ownerName) continue

      try {
        const address = rec.address || `${rec.ownerName} (No Address)`
        const city = rec.city || 'Unknown'

        const property = await this.upsertProperty({
          address,
          city,
          county: 'Unknown',
          state: rec.state,
          zip: rec.zip,
        })

        const sourceId = `unclaimed-${rec.state}-${rec.ownerName}-${rec.amount || 0}`

        await db.taxSaleListing.upsert({
          where: { sourceId: sourceId.slice(0, 100) },
          update: {
            lienAmount: rec.amount,
            scrapedAt: new Date(),
          },
          create: {
            propertyId: property.id,
            saleType: 'unclaimed',
            county: city,
            state: rec.state,
            lienAmount: rec.amount,
            status: 'available',
            sourceId: sourceId.slice(0, 100),
            scraperId: this.scraper.id,
            scrapedAt: new Date(),
          },
        })
      } catch {
        // Skip individual failures
      }
    }
  }
}
