export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  const [scrapers, fcTotal, txTotal] = await Promise.all([
    db.scraper.findMany({
      orderBy: [{ state: 'asc' }, { county: 'asc' }],
      include: {
        jobs: {
          orderBy: { startedAt: 'desc' },
          take: 1,
        },
      },
    }),
    db.foreclosureListing.count(),
    db.taxSaleListing.count(),
  ])

  // Build per-county record counts
  const [fcByCounts, txByCounts] = await Promise.all([
    db.property.findMany({
      where: { foreclosureListings: { some: {} } },
      select: {
        county: true,
        state: true,
        _count: { select: { foreclosureListings: true } },
      },
    }),
    db.property.findMany({
      where: { taxSaleListings: { some: {} } },
      select: {
        county: true,
        state: true,
        _count: { select: { taxSaleListings: true } },
      },
    }),
  ])

  // Aggregate by state+county
  type CountyKey = string
  const countyRecord: Record<CountyKey, { foreclosures: number; taxSales: number }> = {}

  for (const p of fcByCounts) {
    const key = `${p.state}:${p.county}`
    countyRecord[key] = countyRecord[key] || { foreclosures: 0, taxSales: 0 }
    countyRecord[key].foreclosures += p._count.foreclosureListings
  }
  for (const p of txByCounts) {
    const key = `${p.state}:${p.county}`
    countyRecord[key] = countyRecord[key] || { foreclosures: 0, taxSales: 0 }
    countyRecord[key].taxSales += p._count.taxSaleListings
  }

  const scraperStatus = scrapers.map(s => {
    const lastJob = s.jobs[0] ?? null
    const key = `${s.state}:${s.county}`
    const counts = countyRecord[key] || { foreclosures: 0, taxSales: 0 }
    const recordCount =
      s.listingType === 'foreclosure'
        ? counts.foreclosures
        : counts.taxSales

    return {
      id: s.id,
      name: s.name,
      state: s.state,
      county: s.county,
      listingType: s.listingType,
      platform: s.platform,
      isActive: s.isActive,
      lastRunAt: s.lastRunAt?.toISOString() ?? null,
      lastRunStatus: s.lastRunStatus ?? 'never',
      lastRunCount: s.lastRunCount ?? 0,
      recordCount,
      totalRecords: s.totalRecords,
      schedule: s.schedule,
      lastJob: lastJob
        ? {
            id: lastJob.id,
            startedAt: lastJob.startedAt.toISOString(),
            completedAt: lastJob.completedAt?.toISOString() ?? null,
            status: lastJob.status,
            recordsFound: lastJob.recordsFound ?? 0,
            errors: lastJob.errors ?? null,
          }
        : null,
    }
  })

  // Health summary
  const now = new Date()
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

  const healthy = scraperStatus.filter(s => s.lastRunStatus === 'success').length
  const errors = scraperStatus.filter(s => s.lastRunStatus === 'error').length
  const stale = scraperStatus.filter(s => !s.lastRunAt || new Date(s.lastRunAt) < sevenDaysAgo).length
  const recentRuns = scraperStatus.filter(s => s.lastRunAt && new Date(s.lastRunAt) > oneDayAgo).length

  return NextResponse.json({
    summary: {
      totalScrapers: scrapers.length,
      activeScrapers: scrapers.filter(s => s.isActive).length,
      healthy,
      errors,
      stale,
      recentRuns,
      totalListings: fcTotal + txTotal,
      foreclosures: fcTotal,
      taxSales: txTotal,
      lastUpdated: now.toISOString(),
    },
    scrapers: scraperStatus,
  })
}
