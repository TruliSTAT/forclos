import axios, { AxiosInstance } from 'axios'
import * as cheerio from 'cheerio'
import { db } from '@/lib/db'

export interface ScrapedProperty {
  address: string
  city: string
  county: string
  state: string
  zip?: string
  parcelId?: string
  propertyType?: string
  lat?: number
  lng?: number
}

export interface ScrapedForeclosure {
  property: ScrapedProperty
  caseNumber?: string
  auctionDate?: Date
  openingBid?: number
  assessedValue?: number
  status: string
  lender?: string
  attorney?: string
  plaintiff?: string
  sourceUrl?: string
  sourceId?: string
}

export interface ScrapedTaxSale {
  property: ScrapedProperty
  saleType: 'lien' | 'deed'
  certificateNumber?: string
  yearOfTax?: number
  lienAmount?: number
  interestRate?: number
  saleDate?: Date
  assessedValue?: number
  status: string
  sourceUrl?: string
  sourceId?: string
}

export interface ScrapeResult {
  scraperId: string
  recordsFound: number
  recordsSaved: number
  errors: string[]
}

export abstract class BaseScraper {
  protected scraperId: string
  protected http: AxiosInstance

  constructor(scraperId: string) {
    this.scraperId = scraperId
    this.http = axios.create({
      timeout: 30000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
    })
  }

  abstract scrape(): Promise<ScrapeResult>

  protected parseHTML(html: string) {
    return cheerio.load(html)
  }

  protected parseCurrency(s: string | undefined): number | undefined {
    if (!s) return undefined
    const n = parseFloat(s.replace(/[$,\s]/g, ''))
    return isNaN(n) ? undefined : n
  }

  protected parseDate(s: string | undefined): Date | undefined {
    if (!s) return undefined
    const d = new Date(s)
    return isNaN(d.getTime()) ? undefined : d
  }

  protected cleanAddress(s: string): string {
    return s.replace(/\s+/g, ' ').trim().toUpperCase()
  }

  protected async upsertProperty(prop: ScrapedProperty): Promise<string> {
    const existing = prop.parcelId
      ? await db.property.findFirst({
          where: { parcelId: prop.parcelId, state: prop.state, county: prop.county },
        })
      : await db.property.findFirst({
          where: { address: prop.address, city: prop.city, state: prop.state },
        })

    if (existing) {
      await db.property.update({
        where: { id: existing.id },
        data: { ...prop, updatedAt: new Date() },
      })
      return existing.id
    }

    const created = await db.property.create({ data: prop })
    return created.id
  }

  protected async saveForeclosures(listings: ScrapedForeclosure[]): Promise<number> {
    let saved = 0
    for (const listing of listings) {
      try {
        const propertyId = await this.upsertProperty(listing.property)
        await db.foreclosureListing.upsert({
          where: {
            id: listing.sourceId
              ? `${this.scraperId}_${listing.sourceId}`
              : `${this.scraperId}_${listing.property.address}_${listing.auctionDate?.toISOString() || ''}`,
          },
          create: {
            id: listing.sourceId ? `${this.scraperId}_${listing.sourceId}` : undefined,
            propertyId,
            caseNumber: listing.caseNumber,
            auctionDate: listing.auctionDate,
            openingBid: listing.openingBid,
            assessedValue: listing.assessedValue,
            status: listing.status,
            lender: listing.lender,
            attorney: listing.attorney,
            plaintiff: listing.plaintiff,
            sourceUrl: listing.sourceUrl,
            sourceId: listing.sourceId,
            scraperId: this.scraperId,
          },
          update: {
            auctionDate: listing.auctionDate,
            openingBid: listing.openingBid,
            status: listing.status,
            scrapedAt: new Date(),
          },
        })
        saved++
      } catch (err) {
        console.error(`[${this.scraperId}] Failed to save foreclosure:`, err)
      }
    }
    return saved
  }

  protected async saveTaxSales(listings: ScrapedTaxSale[]): Promise<number> {
    let saved = 0
    for (const listing of listings) {
      try {
        const propertyId = await this.upsertProperty(listing.property)
        await db.taxSaleListing.upsert({
          where: {
            id: listing.sourceId
              ? `${this.scraperId}_${listing.sourceId}`
              : `${this.scraperId}_${listing.certificateNumber || ''}_${listing.property.state}_${listing.property.county}`,
          },
          create: {
            id: listing.sourceId
              ? `${this.scraperId}_${listing.sourceId}`
              : undefined,
            propertyId,
            saleType: listing.saleType,
            certificateNumber: listing.certificateNumber,
            yearOfTax: listing.yearOfTax,
            lienAmount: listing.lienAmount,
            interestRate: listing.interestRate,
            saleDate: listing.saleDate,
            assessedValue: listing.assessedValue,
            status: listing.status,
            county: listing.property.county,
            state: listing.property.state,
            sourceUrl: listing.sourceUrl,
            sourceId: listing.sourceId,
            scraperId: this.scraperId,
          },
          update: {
            lienAmount: listing.lienAmount,
            status: listing.status,
            saleDate: listing.saleDate,
            scrapedAt: new Date(),
          },
        })
        saved++
      } catch (err) {
        console.error(`[${this.scraperId}] Failed to save tax sale:`, err)
      }
    }
    return saved
  }

  protected async updateScraperStats(recordsFound: number, status: 'success' | 'error', errors?: string) {
    await db.scraper.update({
      where: { id: this.scraperId },
      data: {
        lastRunAt: new Date(),
        lastRunStatus: status,
        lastRunCount: recordsFound,
        totalRecords: { increment: recordsFound },
      },
    })
    await db.scraperJob.create({
      data: {
        scraperId: this.scraperId,
        completedAt: new Date(),
        status,
        recordsFound,
        errors,
      },
    })
  }
}
