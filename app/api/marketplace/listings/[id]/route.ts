export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const user = await getSession()
  const tier = user?.tier || 'free'
  const canSeeDetails = tier === 'pro' || tier === 'elite'

  const listing = await db.marketplaceListing.findUnique({
    where: { id: params.id },
    include: {
      seller: { select: { id: true, name: true, tier: true, createdAt: true } },
      offers: {
        where: user ? { buyerId: user.id } : { id: 'none' },
        orderBy: { createdAt: 'desc' },
        take: 1,
      },
      _count: { select: { offers: true } },
    },
  })

  if (!listing || listing.status === 'pending') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json({
    listing: {
      ...listing,
      address: canSeeDetails ? listing.address : `${listing.city}, ${listing.state}`,
      city: canSeeDetails ? listing.city : '●●●',
      county: canSeeDetails ? listing.county : '●●●',
      purchasePricePaid: canSeeDetails ? listing.purchasePricePaid : null,
      description: canSeeDetails ? listing.description : null,
      reasonForSelling: canSeeDetails ? listing.reasonForSelling : null,
      photos: canSeeDetails ? listing.photos : [],
      documents: canSeeDetails ? listing.documents : [],
      seller: canSeeDetails ? listing.seller : null,
      offerCount: listing._count.offers,
      myOffer: listing.offers[0] || null,
      blurred: !canSeeDetails,
      tier,
    },
  })
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const listing = await db.marketplaceListing.findUnique({ where: { id: params.id } })
  if (!listing) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  // Admin approve action OR seller withdraw
  const body = await req.json()
  const isOwner = listing.sellerId === user.id

  if (body.action === 'withdraw' && isOwner) {
    await db.marketplaceListing.update({
      where: { id: params.id },
      data: { status: 'withdrawn' },
    })
    return NextResponse.json({ ok: true })
  }

  if (body.action === 'mark_closed' && isOwner) {
    const { closedPrice } = body
    const txFeeAmount = closedPrice * 0.025
    await db.marketplaceListing.update({
      where: { id: params.id },
      data: {
        status: 'sold',
        closedAt: new Date(),
        closedPrice,
        txFeeAmount,
      },
    })
    return NextResponse.json({ txFeeAmount, ok: true })
  }

  return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
}
