import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getSession } from '@/lib/auth'
import { db } from '@/lib/db'

function getStripe() {
  const Stripe_ = Stripe as any
  return new Stripe_(process.env.STRIPE_SECRET_KEY || 'sk_placeholder', { apiVersion: '2026-03-25.dahlia' as any })
}

const PRICES: Record<string, string> = {
  pro: process.env.STRIPE_PRICE_PRO || '',
  elite: process.env.STRIPE_PRICE_ELITE || '',
}

export async function POST(req: Request) {
  try {
    const stripe = getStripe()
    const user = await getSession()
    if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 })

    const { tier } = await req.json()
    const priceId = PRICES[tier]
    if (!priceId) return NextResponse.json({ error: 'Invalid tier' }, { status: 400 })

    const dbUser = await db.user.findUnique({ where: { id: user.id } })
    if (!dbUser) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    let customerId = dbUser.stripeCustomerId
    if (!customerId) {
      const customer = await stripe.customers.create({ email: user.email })
      customerId = customer.id
      await db.user.update({ where: { id: user.id }, data: { stripeCustomerId: customerId } })
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://forclos.com'
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/search?upgraded=true`,
      cancel_url: `${siteUrl}/pricing`,
      metadata: { userId: user.id, tier },
    })

    return NextResponse.json({ url: session.url })
  } catch (e) {
    console.error('Stripe checkout error:', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
