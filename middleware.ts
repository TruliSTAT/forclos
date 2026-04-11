import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'lienscope-dev-secret-change-in-prod'
const COOKIE_NAME = 'ls_session'

// Routes that require authentication
const AUTH_REQUIRED = [
  '/dashboard',
  '/portfolio',
]

// Routes that require specific tiers (checked in the pages/API themselves)
// Middleware just handles basic auth redirect

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if route requires auth
  const requiresAuth = AUTH_REQUIRED.some(r => pathname.startsWith(r))
  if (!requiresAuth) return NextResponse.next()

  const token = request.cookies.get(COOKIE_NAME)?.value

  if (!token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('next', pathname)
    return NextResponse.redirect(loginUrl)
  }

  try {
    verify(token, JWT_SECRET)
    return NextResponse.next()
  } catch {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('next', pathname)
    const res = NextResponse.redirect(loginUrl)
    res.cookies.delete(COOKIE_NAME)
    return res
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/portfolio/:path*',
  ],
}
