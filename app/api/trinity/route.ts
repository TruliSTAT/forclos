export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { getSession, TIER_LIMITS } from '@/lib/auth'
import { trinityRespond } from '@/lib/trinity'
import { db } from '@/lib/db'

const FREE_LIMIT  = 3
const PRO_LIMIT   = 20

export async function POST(req: Request) {
  const user = await getSession()
  const tier = user?.tier || 'free'

  // Rate limiting
  if (user) {
    const dbUser = await db.user.findUnique({ where: { id: user.id } })
    if (dbUser) {
      const limit = tier === 'elite' ? Infinity : tier === 'pro' ? PRO_LIMIT : FREE_LIMIT
      if (limit !== Infinity) {
        const now = new Date()
        const sameDay = new Date(dbUser.searchResetAt).toDateString() === now.toDateString()
        const count = sameDay ? dbUser.searchCount : 0
        if (count >= limit) {
          return NextResponse.json({
            role: 'trinity',
            content: `You've used your ${limit} Trinity question${limit !== 1 ? 's' : ''} for today. ${tier === 'free' ? 'Upgrade to Pro for 20/day, or Elite for unlimited.' : 'Upgrade to Elite for unlimited.'} — Trinity`,
            upgrade: true,
            timestamp: Date.now(),
          })
        }
        await db.user.update({
          where: { id: user.id },
          data: { searchCount: sameDay ? { increment: 1 } : 1, searchResetAt: sameDay ? undefined : now },
        })
      }
    }
  } else {
    // Anonymous: basic session limiting via header check (client handles count)
  }

  const { message, history } = await req.json()
  if (!message?.trim()) {
    return NextResponse.json({ error: 'Message required' }, { status: 400 })
  }

  const response = await trinityRespond(message, user?.id, tier)
  return NextResponse.json(response)
}
