'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ChevronDown, LogOut, User, Star, Zap, BarChart2 } from 'lucide-react'

export interface NavUser { id: string; email: string; name?: string | null; tier: string }

const TIER_BADGE: Record<string, { label: string; cls: string }> = {
  free:  { label: 'Free',  cls: 'bg-slate-700 text-slate-300' },
  pro:   { label: 'Pro',   cls: 'bg-violet-500/20 text-violet-300 border border-violet-500/30' },
  elite: { label: 'Elite', cls: 'bg-amber-500/20 text-amber-300 border border-amber-500/30' },
}

export function NavBar() {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<NavUser | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    fetch('/api/auth/me').then(r => r.json()).then(d => setUser(d.user))
  }, [])

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    setUser(null)
    router.push('/')
  }

  const tabs = [
    { href: '/search?tab=foreclosure',  label: '🏚️ Foreclosures' },
    { href: '/search?tab=tax-lien',     label: '🏷️ Tax Liens' },
    { href: '/search?tab=deed-lien',    label: '📋 Deeds & Liens' },
    { href: '/marketplace',             label: '🤝 Marketplace' },
    { href: '/map',                     label: '🗺️ Map' },
  ]

  const isActive = (href: string) => {
    const base = href.split('?')[0]
    if (base === '/search') return pathname === '/search'
    return pathname.startsWith(base)
  }

  return (
    <nav className="border-b border-slate-800 bg-slate-950/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-slate-950 text-sm">F</div>
          <span className="font-black text-white text-lg hidden sm:block tracking-tight">Forclos</span>
        </Link>

        {/* Tabs */}
        <div className="hidden lg:flex items-center gap-0.5">
          {tabs.map(t => (
            <Link key={t.href} href={t.href}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                isActive(t.href)
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}>
              {t.label}
            </Link>
          ))}
        </div>

        <div className="flex-1" />

        {/* Extra nav links */}
        <div className="hidden md:flex items-center gap-3 text-sm text-slate-500">
          <Link href="/funding" className="hover:text-white transition-colors">🏦 Funding</Link>
          <Link href="/investors" className="hover:text-white transition-colors">👥 Investors</Link>
          {user && (
            <Link href="/dashboard" className="hover:text-emerald-400 transition-colors text-slate-400">📊 Dashboard</Link>
          )}
          {user?.tier === 'elite' && (
            <Link href="/portfolio" className="hover:text-amber-400 transition-colors text-amber-500/70">💼 Portfolio</Link>
          )}
        </div>

        {/* Right side */}
        {user ? (
          <div className="relative">
            <button onClick={() => setMenuOpen(o => !o)}
              className="flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-lg px-3 py-1.5 text-sm transition-colors">
              <User size={14} className="text-slate-400" />
              <span className="text-slate-300 max-w-[100px] truncate hidden sm:block">{user.name || user.email}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${TIER_BADGE[user.tier]?.cls}`}>
                {TIER_BADGE[user.tier]?.label}
              </span>
              <ChevronDown size={12} className="text-slate-500" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-10 w-52 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1 z-50">
                <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                  <BarChart2 size={14} /> Dashboard
                </Link>
                <Link href="/pricing" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                  <Star size={14} /> Upgrade Plan
                </Link>
                {user.tier === 'elite' && (
                  <>
                    <Link href="/marketplace/new" className="flex items-center gap-2 px-4 py-2 text-sm text-amber-400 hover:bg-slate-800">
                      <Zap size={14} /> List a Property
                    </Link>
                    <Link href="/portfolio" className="flex items-center gap-2 px-4 py-2 text-sm text-amber-400 hover:bg-slate-800">
                      <BarChart2 size={14} /> My Portfolio
                    </Link>
                  </>
                )}
                <hr className="border-slate-700 my-1" />
                <button onClick={logout} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
                  <LogOut size={14} /> Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login" className="text-slate-400 hover:text-white text-sm px-3 py-1.5 transition-colors">Sign In</Link>
            <Link href="/signup" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm px-4 py-1.5 rounded-lg transition-colors whitespace-nowrap">
              Start Free →
            </Link>
          </div>
        )}
      </div>

      {/* Mobile tabs */}
      <div className="lg:hidden flex gap-1 px-4 pb-2 overflow-x-auto scrollbar-hide">
        {tabs.map(t => (
          <Link key={t.href} href={t.href}
            className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              isActive(t.href) ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-white'
            }`}>
            {t.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
