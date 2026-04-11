export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const strategy = searchParams.get('strategy') || ''
  const state    = searchParams.get('state') || ''

  const where: Record<string, unknown> = { isPublic: true }
  if (strategy) where.strategies = { has: strategy }
  if (state)    where.states     = { has: state.toUpperCase() }

  const profiles = await db.investorProfile.findMany({
    where,
    include: { user: { select: { id: true, name: true, tier: true, createdAt: true } } },
    orderBy: { dealsCount: 'desc' },
    take: 50,
  })
  return NextResponse.json({ profiles })
}

export async function PUT(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 })

  const body = await req.json()
  const profile = await db.investorProfile.upsert({
    where: { userId: user.id },
    update: { ...body, updatedAt: new Date() },
    create: { userId: user.id, ...body },
  })
  return NextResponse.json({ profile })
}
