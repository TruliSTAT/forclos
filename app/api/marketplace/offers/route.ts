export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function POST(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 })
  if (user.tier === 'free') {
    return NextResponse.json({ error: 'Pro plan required to make offers', upgrade: true }, { status: 403 })
  }

  const { listingId, offerAmount, message } = await req.json()
  if (!listingId || !offerAmount) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const listing = await db.marketplaceListing.findUnique({ where: { id: listingId } })
  if (!listing || listing.status !== 'active') {
    return NextResponse.json({ error: 'Listing not available' }, { status: 404 })
  }
  if (listing.sellerId === user.id) {
    return NextResponse.json({ error: "Can't offer on your own listing" }, { status: 400 })
  }

  // Upsert offer (update if already submitted)
  const existing = await db.marketplaceOffer.findFirst({
    where: { listingId, buyerId: user.id, status: 'pending' },
  })

  let offer
  if (existing) {
    offer = await db.marketplaceOffer.update({
      where: { id: existing.id },
      data: { offerAmount, message },
    })
  } else {
    offer = await db.marketplaceOffer.create({
      data: { listingId, buyerId: user.id, offerAmount, message },
    })
  }

  return NextResponse.json({ offer }, { status: 201 })
}

export async function PATCH(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { offerId, action } = await req.json() // action: accept | reject | withdraw
  const offer = await db.marketplaceOffer.findUnique({
    where: { id: offerId },
    include: { listing: true },
  })
  if (!offer) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const isSeller = offer.listing.sellerId === user.id
  const isBuyer  = offer.buyerId === user.id

  if (action === 'accept' && isSeller) {
    await db.marketplaceOffer.update({ where: { id: offerId }, data: { status: 'accepted', respondedAt: new Date() } })
    await db.marketplaceListing.update({ where: { id: offer.listingId }, data: { status: 'under_contract' } })
    // Reject all other pending offers
    await db.marketplaceOffer.updateMany({
      where: { listingId: offer.listingId, id: { not: offerId }, status: 'pending' },
      data: { status: 'rejected', respondedAt: new Date() },
    })
    return NextResponse.json({ ok: true, message: 'Offer accepted. Both parties will be connected.' })
  }

  if (action === 'reject' && isSeller) {
    await db.marketplaceOffer.update({ where: { id: offerId }, data: { status: 'rejected', respondedAt: new Date() } })
    return NextResponse.json({ ok: true })
  }

  if (action === 'withdraw' && isBuyer) {
    await db.marketplaceOffer.update({ where: { id: offerId }, data: { status: 'withdrawn', respondedAt: new Date() } })
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
}
