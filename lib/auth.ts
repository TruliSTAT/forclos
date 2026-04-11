import { db } from './db'
import bcrypt from 'bcryptjs'
import { sign, verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'

const JWT_SECRET = process.env.JWT_SECRET || 'lienscope-dev-secret-change-in-prod'
const COOKIE_NAME = 'ls_session'

export interface SessionUser {
  id: string
  email: string
  name?: string | null
  tier: 'free' | 'pro' | 'elite'
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

export function createToken(userId: string): string {
  return sign({ sub: userId }, JWT_SECRET, { expiresIn: '30d' })
}

export async function getSession(): Promise<SessionUser | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(COOKIE_NAME)?.value
    if (!token) return null

    const payload = verify(token, JWT_SECRET) as { sub: string }
    const user = await db.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, email: true, name: true, tier: true },
    })
    return user as SessionUser | null
  } catch {
    return null
  }
}

export function setSessionCookie(token: string) {
  // Called from route handlers via Response headers
  return {
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  }
}

export async function getUserFromToken(token: string): Promise<SessionUser | null> {
  try {
    const payload = verify(token, JWT_SECRET) as { sub: string }
    const user = await db.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, email: true, name: true, tier: true },
    })
    return user as SessionUser | null
  } catch {
    return null
  }
}

// Tier limits
export const TIER_LIMITS = {
  free: {
    searchesPerDay: 10,
    detailsPerDay: 3,
    savedSearches: 0,
    csvExport: false,
    dealAnalyzer: false,
    emailAlerts: false,
    advancedFilters: false,
    apiAccess: false,
    portfolio: false,
    directMail: false,
    directMailLimit: 0,
    fundingApply: false,
    dealScoreBreakdown: false,
  },
  pro: {
    searchesPerDay: Infinity,
    detailsPerDay: Infinity,
    savedSearches: 25,
    csvExport: true,
    dealAnalyzer: true,
    emailAlerts: true,
    advancedFilters: true,
    apiAccess: false,
    portfolio: false,
    directMail: true,
    directMailLimit: 500,
    fundingApply: true,
    dealScoreBreakdown: true,
  },
  elite: {
    searchesPerDay: Infinity,
    detailsPerDay: Infinity,
    savedSearches: 999,
    csvExport: true,
    dealAnalyzer: true,
    emailAlerts: true,
    advancedFilters: true,
    apiAccess: true,
    portfolio: true,
    directMail: true,
    directMailLimit: 10000,
    fundingApply: true,
    dealScoreBreakdown: true,
  },
} as const

export function canSearch(user: SessionUser | null, count: number): boolean {
  if (!user) return count < 5 // Anonymous: 5/day
  const limit = TIER_LIMITS[user.tier].searchesPerDay
  return count < limit
}
