export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  const [scrapers, fcCount, txCount] = await Promise.all([
    db.scraper.findMany({
      orderBy: [{ state: 'asc' }, { county: 'asc' }],
      include: { _count: { select: { jobs: true } } },
    }),
    db.foreclosureListing.count(),
    db.taxSaleListing.count(),
  ])

  return NextResponse.json({
    scrapers,
    stats: {
      total: scrapers.length,
      active: scrapers.filter(s => s.isActive).length,
      foreclosures: fcCount,
      taxSales: txCount,
    },
  })
}
