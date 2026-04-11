export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET() {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 })
  if (user.tier !== 'elite') return NextResponse.json({ error: 'Elite plan required', upgrade: true }, { status: 403 })

  const properties = await db.portfolioProperty.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
  })

  const now = Date.now()
  const summary = properties.reduce((acc, p) => {
    acc.totalInvested += p.purchasePrice
    if (p.status === 'active') acc.activeCount++
    if (p.status === 'sold' && p.soldPrice) {
      acc.totalReturns += p.soldPrice - p.purchasePrice
      acc.closedCount++
    }
    if (p.listingType === 'tax-lien' && p.interestRate && p.purchaseDate) {
      const yearsHeld = (now - new Date(p.purchaseDate).getTime()) / (365.25 * 86400000)
      acc.accruedInterest += p.purchasePrice * (p.interestRate / 100) * yearsHeld
    }
    if (p.purchaseDeadline) {
      const daysLeft = Math.ceil((new Date(p.purchaseDeadline).getTime() - now) / 86400000)
      if (daysLeft <= 30 && daysLeft > 0) acc.nearDeadline++
    }
    return acc
  }, { totalInvested: 0, activeCount: 0, closedCount: 0, totalReturns: 0, accruedInterest: 0, nearDeadline: 0 })

  return NextResponse.json({ properties, summary })
}

export async function POST(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 })
  if (user.tier !== 'elite') return NextResponse.json({ error: 'Elite plan required', upgrade: true }, { status: 403 })

  const body = await req.json()
  let purchaseDeadline: Date | undefined
  if (body.purchaseDate && body.redemptionPeriodMonths && body.listingType === 'tax-lien') {
    const d = new Date(body.purchaseDate)
    d.setMonth(d.getMonth() + parseInt(body.redemptionPeriodMonths))
    purchaseDeadline = d
  }

  const property = await db.portfolioProperty.create({
    data: {
      userId: user.id,
      address: body.address,
      city: body.city,
      state: body.state,
      county: body.county,
      zip: body.zip,
      propertyType: body.propertyType,
      purchaseDate: body.purchaseDate ? new Date(body.purchaseDate) : undefined,
      purchasePrice: parseFloat(body.purchasePrice),
      listingType: body.listingType,
      certNumber: body.certNumber,
      interestRate: body.interestRate ? parseFloat(body.interestRate) : undefined,
      redemptionPeriodMonths: body.redemptionPeriodMonths ? parseInt(body.redemptionPeriodMonths) : undefined,
      purchaseDeadline,
      currentValue: body.currentValue ? parseFloat(body.currentValue) : undefined,
      notes: body.notes,
    },
  })
  return NextResponse.json({ property }, { status: 201 })
}

export async function PATCH(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 })
  const { id, ...data } = await req.json()
  await db.portfolioProperty.updateMany({ where: { id, userId: user.id }, data })
  return NextResponse.json({ ok: true })
}

export async function DELETE(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 })
  const { id } = await req.json()
  await db.portfolioProperty.deleteMany({ where: { id, userId: user.id } })
  return NextResponse.json({ ok: true })
}
