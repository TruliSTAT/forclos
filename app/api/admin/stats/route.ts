export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  const [
    totalUsers, proUsers, eliteUsers, freeUsers,
    totalProperties, totalForeclosures, totalTaxSales,
    activeMarketplace, pendingMarketplace,
    pendingTxFees, recentSignups, activeScrapers,
  ] = await Promise.all([
    db.user.count(),
    db.user.count({ where: { tier: 'pro' } }),
    db.user.count({ where: { tier: 'elite' } }),
    db.user.count({ where: { tier: 'free' } }),
    db.property.count(),
    db.foreclosureListing.count(),
    db.taxSaleListing.count(),
    db.marketplaceListing.count({ where: { status: 'active' } }),
    db.marketplaceListing.count({ where: { status: 'pending' } }),
    db.marketplaceListing.aggregate({
      where: { txFeeAmount: { gt: 0 }, txFeePaid: false, status: 'sold' },
      _sum: { txFeeAmount: true },
    }),
    db.user.findMany({
      orderBy: { createdAt: 'desc' }, take: 10,
      select: { id: true, email: true, name: true, tier: true, createdAt: true },
    }),
    db.scraper.count({ where: { isActive: true } }),
  ])

  const mrr = (proUsers * 29) + (eliteUsers * 79)

  return NextResponse.json({
    users: { total: totalUsers, free: freeUsers, pro: proUsers, elite: eliteUsers },
    listings: { properties: totalProperties, foreclosures: totalForeclosures, taxSales: totalTaxSales },
    marketplace: { active: activeMarketplace, pending: pendingMarketplace, pendingFees: pendingTxFees._sum.txFeeAmount || 0 },
    scrapers: { active: activeScrapers },
    revenue: { mrr, arr: mrr * 12 },
    recentSignups,
  })
}
