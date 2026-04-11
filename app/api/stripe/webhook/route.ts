import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { db } from '@/lib/db'

function getStripe(): Stripe {
  return new (Stripe as any)(process.env.STRIPE_SECRET_KEY || 'sk_placeholder', { apiVersion: '2026-03-25.dahlia' as any })
}

export async function POST(req: Request) {
  const stripe = getStripe()
  const body = await req.text()
  const sig = req.headers.get('stripe-signature') || ''
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const tierFromProduct = async (productId: string): Promise<'pro' | 'elite'> => {
    const product = await stripe.products.retrieve(productId)
    return ((product as any).metadata?.tier as 'pro' | 'elite') || 'pro'
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const userId = session.metadata?.userId
      const tier = (session.metadata?.tier as 'pro' | 'elite') || 'pro'
      if (userId) {
        await db.user.update({
          where: { id: userId },
          data: { tier, stripeSubId: session.subscription as string, subStatus: 'active' },
        })
      }
      break
    }
    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription
      const user = await db.user.findFirst({ where: { stripeSubId: sub.id } })
      if (user) {
        const item = sub.items.data[0]
        const tier = item ? await tierFromProduct(item.price.product as string) : 'pro'
        await db.user.update({
          where: { id: user.id },
          data: {
            tier: sub.status === 'active' ? tier : 'free',
            subStatus: sub.status,
            subPeriodEnd: new Date((sub as any).current_period_end * 1000),
          },
        })
      }
      break
    }
    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      await db.user.updateMany({ where: { stripeSubId: sub.id }, data: { tier: 'free', subStatus: 'canceled' } })
      break
    }
  }

  return NextResponse.json({ received: true })
}
