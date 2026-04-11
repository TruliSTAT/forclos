export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession, TIER_LIMITS } from '@/lib/auth'

export async function GET() {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 })
  if (TIER_LIMITS[user.tier].savedSearches === 0) {
    return NextResponse.json({ error: 'Pro plan required', upgrade: true }, { status: 403 })
  }
  const searches = await db.savedSearch.findMany({
    where: { userId: user.id },
    orderBy: { updatedAt: 'desc' },
  })
  return NextResponse.json({ searches })
}

export async function POST(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 })

  const limit = TIER_LIMITS[user.tier].savedSearches
  if (limit === 0) return NextResponse.json({ error: 'Pro plan required', upgrade: true }, { status: 403 })

  if (limit !== Infinity) {
    const count = await db.savedSearch.count({ where: { userId: user.id } })
    if (count >= limit) {
      return NextResponse.json({ error: `Saved search limit reached (${limit})` }, { status: 400 })
    }
  }

  const { name, filters, alertsOn, tab } = await req.json()
  const search = await db.savedSearch.create({
    data: { name, userId: user.id, filters, alertsOn: alertsOn || false, tab: tab || 'foreclosure' },
  })
  return NextResponse.json({ search })
}

export async function DELETE(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 })
  const { id } = await req.json()
  await db.savedSearch.deleteMany({ where: { id, userId: user.id } })
  return NextResponse.json({ ok: true })
}
