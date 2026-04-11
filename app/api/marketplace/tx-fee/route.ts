export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { db } from '@/lib/db'
import { getSession } from '@/lib/auth'

function getStripe(): Stripe {
  return new (Stripe as any)(process.env.STRIPE_SECRET_KEY || 'sk_placeholder', { apiVersion: '2026-03-25.dahlia' as any })
}

export async function POST(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { listingId, closedPrice } = await req.json()
  const listing = await db.marketplaceListing.findUnique({ where: { id: listingId }, include: { seller: true } })

  if (!listing || listing.sellerId !== user.id) {
    return NextResponse.json({ error: 'Not found or forbidden' }, { status: 404 })
  }

  const stripe = getStripe()
  const price = closedPrice || listing.closedPrice || 0
  const txFeeAmount = Math.round(price * 0.025 * 100) // cents
  if (txFeeAmount <= 0) return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })

  let customerId = listing.seller.stripeCustomerId
  if (!customerId) {
    const customer = await stripe.customers.create({ email: listing.seller.email })
    customerId = customer.id
    await db.user.update({ where: { id: user.id }, data: { stripeCustomerId: customerId } })
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://forclos.com'
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [{
      price_data: {
        currency: 'usd',
        unit_amount: txFeeAmount,
        product_data: {
          name: 'Forclos Transaction Fee',
          description: `2.5% of ${new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(price)} — ${listing.address}`,
        },
      },
      quantity: 1,
    }],
    success_url: `${siteUrl}/marketplace?tx=paid`,
    cancel_url: `${siteUrl}/marketplace`,
    metadata: { listingId, type: 'tx_fee' },
  })

  await db.marketplaceListing.update({
    where: { id: listingId },
    data: { status: 'sold', closedAt: new Date(), closedPrice: price, txFeeAmount: txFeeAmount / 100, txFeeStripeId: session.id },
  })

  return NextResponse.json({ url: session.url, txFeeAmount: txFeeAmount / 100 })
}
