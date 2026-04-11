export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const type  = searchParams.get('type')  || ''
  const state = searchParams.get('state') || ''

  const where: Record<string, unknown> = { isActive: true }
  if (type)  where.types  = { has: type }
  if (state) where.states = { has: state.toUpperCase() }

  const partners = await db.fundingPartner.findMany({
    where,
    orderBy: { leadsCount: 'desc' },
    take: 12,
  })
  return NextResponse.json({ partners })
}

export async function POST(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 })
  if (user.tier === 'free') return NextResponse.json({ error: 'Pro plan required', upgrade: true }, { status: 403 })

  const { partnerId, propertyInfo, loanAmount } = await req.json()
  if (!partnerId) return NextResponse.json({ error: 'partnerId required' }, { status: 400 })

  await db.fundingPartner.update({ where: { id: partnerId }, data: { leadsCount: { increment: 1 } } })
  const lead = await db.fundingLead.create({ data: { userId: user.id, partnerId, propertyInfo, loanAmount } })
  const partner = await db.fundingPartner.findUnique({ where: { id: partnerId }, select: { applyUrl: true } })

  return NextResponse.json({ lead, applyUrl: partner?.applyUrl })
}
