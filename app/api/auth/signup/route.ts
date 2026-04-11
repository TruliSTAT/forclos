import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hashPassword, createToken, setSessionCookie } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }
    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 })
    }

    const existing = await db.user.findUnique({ where: { email: email.toLowerCase() } })
    if (existing) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 409 })
    }

    const passwordHash = await hashPassword(password)
    const user = await db.user.create({
      data: {
        email: email.toLowerCase(),
        passwordHash,
        name: name || null,
        tier: 'free',
      },
    })

    // Also capture as lead
    await db.lead.upsert({
      where: { email: email.toLowerCase() },
      update: { convertedAt: new Date() },
      create: { email: email.toLowerCase(), source: 'signup' },
    })

    const token = createToken(user.id)
    const cookie = setSessionCookie(token)

    const res = NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name, tier: user.tier },
    })
    res.cookies.set(cookie)
    return res
  } catch (e) {
    console.error('Signup error:', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
