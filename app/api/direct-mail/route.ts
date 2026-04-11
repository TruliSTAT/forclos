export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession, TIER_LIMITS } from '@/lib/auth'

export async function GET(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 })

  const limits = TIER_LIMITS[user.tier]
  if (!limits.directMail) return NextResponse.json({ error: 'Pro plan required', upgrade: true }, { status: 403 })

  const { searchParams } = new URL(req.url)
  const state   = searchParams.get('state')  || ''
  const county  = searchParams.get('county') || ''
  const maxRows = limits.directMailLimit

  const where: Record<string, unknown> = { saleType: 'lien', status: 'available' }
  if (state)  where.state = state.toUpperCase()
  if (county) {
    where.property = { county: { contains: county, mode: 'insensitive' } }
  }

  const listings = await db.taxSaleListing.findMany({
    where,
    include: { property: true },
    take: maxRows,
    orderBy: { yearsDelinquent: 'desc' },
  })

  const headers = ['Owner Address','City','State','ZIP','County','Lien Amount ($)','Years Delinquent','Parcel ID']
  const rows = listings.map(l => [
    l.property.address,
    l.property.city,
    l.property.state,
    l.property.zip || '',
    l.property.county,
    l.lienAmount != null ? l.lienAmount.toFixed(2) : '',
    l.yearsDelinquent ?? '',
    l.property.parcelId || '',
  ].map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))

  const csv = [headers.join(','), ...rows].join('\n')
  const filename = `forclos-mail-${state || 'all'}-${Date.now()}.csv`

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'X-Row-Count': String(listings.length),
      'X-Max-Rows': String(maxRows),
    },
  })
}
