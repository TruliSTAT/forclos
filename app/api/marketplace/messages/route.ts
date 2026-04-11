export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const listingId = searchParams.get('listingId')
  if (!listingId) return NextResponse.json({ error: 'listingId required' }, { status: 400 })

  // Only seller and accepted buyer can read messages
  const listing = await db.marketplaceListing.findUnique({ where: { id: listingId } })
  if (!listing) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const isParty = listing.sellerId === user.id ||
    await db.marketplaceOffer.findFirst({ where: { listingId, buyerId: user.id, status: 'accepted' } })

  if (!isParty) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const messages = await db.marketplaceMessage.findMany({
    where: { listingId },
    include: { sender: { select: { id: true, name: true, tier: true } } },
    orderBy: { createdAt: 'asc' },
  })

  return NextResponse.json({ messages })
}

export async function POST(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { listingId, body } = await req.json()
  if (!listingId || !body) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  const listing = await db.marketplaceListing.findUnique({ where: { id: listingId } })
  if (!listing) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const isParty = listing.sellerId === user.id ||
    await db.marketplaceOffer.findFirst({ where: { listingId, buyerId: user.id, status: 'accepted' } })

  if (!isParty) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const message = await db.marketplaceMessage.create({
    data: { listingId, senderId: user.id, body },
    include: { sender: { select: { id: true, name: true, tier: true } } },
  })

  return NextResponse.json({ message }, { status: 201 })
}
