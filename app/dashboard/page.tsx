'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Search, Bell, TrendingUp, DollarSign, Clock, Crown, Zap,
  ChevronRight, Plus, Trash2, AlertTriangle, BarChart2, MapPin,
  Star, ArrowUpRight, RefreshCw, BookOpen,
} from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { UpgradeModal } from '@/components/UpgradeModal'

function fmt$(n?: number | null) {
  if (n == null) return '—'
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${Math.round(n).toLocaleString()}`
}

const TYPE_ICONS: Record<string, string> = {
  foreclosure: '🏚️',
  'tax-lien': '🏷️',
  'deed-lien': '📋',
  'tax-deed': '📋',
}

const GRADE_STYLE: Record<string, string> = {
  hot:  'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  warm: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  cold: 'bg-red-500/10 border-red-500/20 text-red-400',
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [savedSearches, setSavedSearches] = useState<any[]>([])
  const [recentListings, setRecentListings] = useState<any[]>([])
  const [portfolioSummary, setPortfolioSummary] = useState<any>(null)
  const [marketStats, setMarketStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [upgradeFeature, setUpgradeFeature] = useState('')
  const [deletingId, setDeletingId] = useState<string | null>(null)

  useEffect(() => {
    loadAll()
  }, [])

  const loadAll = async () => {
    setLoading(true)
    try {
      const [meRes, statsRes, listingsRes] = await Promise.all([
        fetch('/api/auth/me'),
        fetch('/api/admin/stats'),
        fetch('/api/listings?limit=6&sort=scraped_desc'),
      ])

      const meData = await meRes.json()
      if (!meData.user) { router.push('/login'); return }
      setUser(meData.user)

      const statsData = await statsRes.json()
      setMarketStats(statsData)

      const listingsData = await listingsRes.json()
      setRecentListings(listingsData.listings || [])

      // Load saved searches if pro+
      if (meData.user.tier !== 'free') {
        const ssRes = await fetch('/api/saved-searches')
        const ssData = await ssRes.json()
        setSavedSearches(ssData.searches || [])
      }

      // Load portfolio if elite
      if (meData.user.tier === 'elite') {
        const portRes = await fetch('/api/portfolio')
        const portData = await portRes.json()
        if (!portData.error) setPortfolioSummary(portData.summary)
      }
    } finally {
      setLoading(false)
    }
  }

  const deleteSearch = async (id: string) => {
    setDeletingId(id)
    await fetch('/api/saved-searches', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setSavedSearches(s => s.filter(x => x.id !== id))
    setDeletingId(null)
  }

  const runSearch = (search: any) => {
    const f = search.filters as Record<string, string>
    const params = new URLSearchParams()
    if (search.tab) params.set('tab', search.tab)
    Object.entries(f).forEach(([k, v]) => { if (v) params.set(k, String(v)) })
    router.push(`/search?${params.toString()}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <NavBar />
        <div className="flex items-center justify-center h-96">
          <RefreshCw className="text-slate-600 animate-spin" size={28} />
        </div>
      </div>
    )
  }

  if (!user) return null

  const TIER_CONFIG = {
    free:  { color: 'text-slate-400', bg: 'bg-slate-800', label: 'Free' },
    pro:   { color: 'text-violet-400', bg: 'bg-violet-500/10', label: 'Pro' },
    elite: { color: 'text-amber-400', bg: 'bg-amber-500/10', label: 'Elite' },
  }
  const tierCfg = TIER_CONFIG[user.tier as keyof typeof TIER_CONFIG] || TIER_CONFIG.free

  return (
    <div className="min-h-screen bg-slate-950">
      <NavBar />
      {showUpgrade && <UpgradeModal feature={upgradeFeature} onClose={() => setShowUpgrade(false)} />}

      <div className="max-w-screen-xl mx-auto px-4 py-8">

        {/* Welcome header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-slate-500 text-sm mb-1">Welcome back</p>
            <h1 className="text-2xl font-black text-white">{user.name || user.email.split('@')[0]} 👋</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tierCfg.bg} ${tierCfg.color}`}>
                {tierCfg.label} Plan
              </span>
              {user.tier === 'free' && (
                <button onClick={() => { setUpgradeFeature('Pro Plan'); setShowUpgrade(true) }}
                  className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors">
                  Upgrade <ArrowUpRight size={10} />
                </button>
              )}
            </div>
          </div>
          <Link href="/search" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2 rounded-xl text-sm transition-colors flex items-center gap-2">
            <Search size={14} /> New Search
          </Link>
        </div>

        {/* Market snapshot */}
        {marketStats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Foreclosures', value: marketStats.listings?.foreclosures?.toLocaleString(), icon: '🏚️', color: 'text-red-400' },
              { label: 'Tax Sales', value: marketStats.listings?.taxSales?.toLocaleString(), icon: '🏷️', color: 'text-sky-400' },
              { label: 'Active Scrapers', value: marketStats.scrapers?.active, icon: '⚡', color: 'text-emerald-400' },
              { label: 'Marketplace', value: marketStats.marketplace?.active, icon: '🤝', color: 'text-violet-400' },
            ].map(stat => (
              <div key={stat.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <p className="text-2xl mb-1">{stat.icon}</p>
                <p className={`text-2xl font-black ${stat.color}`}>{stat.value ?? '—'}</p>
                <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left column: Saved searches + Portfolio */}
          <div className="lg:col-span-1 space-y-6">

            {/* Saved Searches */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-bold flex items-center gap-2">
                  <Bell size={16} className="text-violet-400" /> Saved Searches
                </h2>
                {user.tier === 'free' ? (
                  <button onClick={() => { setUpgradeFeature('Saved searches & email alerts'); setShowUpgrade(true) }}
                    className="text-xs text-violet-400 hover:text-violet-300 flex items-center gap-1">
                    Unlock <Zap size={10} />
                  </button>
                ) : (
                  <Link href="/search" className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                    <Plus size={10} /> New
                  </Link>
                )}
              </div>

              {user.tier === 'free' ? (
                <div className="text-center py-8">
                  <Bell size={28} className="text-slate-700 mx-auto mb-2" />
                  <p className="text-slate-500 text-sm">Save searches and get email alerts when matching properties appear.</p>
                  <button onClick={() => { setUpgradeFeature('Saved searches'); setShowUpgrade(true) }}
                    className="mt-3 text-xs bg-violet-600/20 border border-violet-500/30 text-violet-400 px-3 py-1.5 rounded-lg hover:bg-violet-600/30 transition-colors">
                    Upgrade to Pro →
                  </button>
                </div>
              ) : savedSearches.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-slate-500 text-sm">No saved searches yet.</p>
                  <Link href="/search" className="mt-2 inline-block text-xs text-emerald-400 hover:text-emerald-300">
                    Create your first search →
                  </Link>
                </div>
              ) : (
                <div className="space-y-2">
                  {savedSearches.map(s => (
                    <div key={s.id} className="flex items-center gap-2 bg-slate-800 rounded-xl px-3 py-2.5 group">
                      <span className="text-lg">{TYPE_ICONS[s.tab] || '🔍'}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{s.name}</p>
                        <p className="text-slate-500 text-xs">{s.tab} · {s.alertsOn ? '🔔 alerts on' : '🔕 no alerts'}</p>
                      </div>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => runSearch(s)}
                          className="text-emerald-400 hover:text-emerald-300 p-1"><Search size={12} /></button>
                        <button onClick={() => deleteSearch(s.id)} disabled={deletingId === s.id}
                          className="text-red-400/60 hover:text-red-400 p-1"><Trash2 size={12} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Portfolio summary (elite only) */}
            {user.tier === 'elite' && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-white font-bold flex items-center gap-2">
                    <BarChart2 size={16} className="text-amber-400" /> My Portfolio
                  </h2>
                  <Link href="/portfolio" className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1">
                    View all <ChevronRight size={12} />
                  </Link>
                </div>
                {portfolioSummary ? (
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Invested', value: fmt$(portfolioSummary.totalInvested), color: 'text-white' },
                      { label: 'Accrued', value: fmt$(portfolioSummary.accruedInterest), color: 'text-emerald-400' },
                      { label: 'Active', value: portfolioSummary.activeCount, color: 'text-white' },
                      { label: '⚠️ Expiring', value: portfolioSummary.nearDeadline, color: portfolioSummary.nearDeadline > 0 ? 'text-red-400' : 'text-slate-500' },
                    ].map(c => (
                      <div key={c.label} className="bg-slate-800 rounded-xl p-3">
                        <p className="text-slate-500 text-xs mb-0.5">{c.label}</p>
                        <p className={`text-lg font-black ${c.color}`}>{c.value}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-slate-500 text-sm">No properties tracked yet.</p>
                    <Link href="/portfolio" className="mt-2 inline-block text-xs text-amber-400 hover:text-amber-300">
                      Add your first property →
                    </Link>
                  </div>
                )}
                {portfolioSummary?.nearDeadline > 0 && (
                  <Link href="/portfolio" className="mt-3 flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-red-500/20 transition-colors">
                    <AlertTriangle size={12} />
                    {portfolioSummary.nearDeadline} redemption deadline{portfolioSummary.nearDeadline > 1 ? 's' : ''} soon
                    <ChevronRight size={12} className="ml-auto" />
                  </Link>
                )}
              </div>
            )}

            {/* Upgrade CTA for non-elite */}
            {user.tier !== 'elite' && (
              <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 border border-amber-500/20 rounded-2xl p-5">
                <Crown className="text-amber-400 mb-3" size={24} />
                <h3 className="text-white font-bold mb-1">{user.tier === 'free' ? 'Unlock Pro' : 'Upgrade to Elite'}</h3>
                <p className="text-slate-400 text-xs mb-3 leading-relaxed">
                  {user.tier === 'free'
                    ? 'Unlimited searches, all filters, deal analyzer, saved searches, CSV export.'
                    : 'API access, Portfolio tracker, list on the Marketplace, team seats.'}
                </p>
                <button onClick={() => { setUpgradeFeature(user.tier === 'free' ? 'Pro Plan — Unlimited everything' : 'Elite Plan — Full platform'); setShowUpgrade(true) }}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black py-2 rounded-xl text-sm transition-all">
                  {user.tier === 'free' ? 'Upgrade to Pro — $29/mo →' : 'Upgrade to Elite — $79/mo →'}
                </button>
              </div>
            )}
          </div>

          {/* Right column: Recent listings */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-bold flex items-center gap-2">
                  <Star size={16} className="text-emerald-400" /> Freshest Listings
                </h2>
                <Link href="/search" className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                  View all <ChevronRight size={12} />
                </Link>
              </div>

              {recentListings.length === 0 ? (
                <div className="text-center py-12">
                  <RefreshCw className="text-slate-700 mx-auto mb-3" size={28} />
                  <p className="text-slate-500">No listings yet. Scrapers are populating the database.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {recentListings.map(l => {
                    const amount = l.openingBid ?? l.lienAmount
                    const equity = l.equityPct ?? l.estimatedRoi
                    return (
                      <Link key={l.id} href={`/listings/${l.id}?type=${l.type}`}
                        className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800/80 transition-colors group">
                        <span className="text-xl shrink-0">{TYPE_ICONS[l.type] || '🏠'}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-semibold truncate group-hover:text-emerald-400 transition-colors">
                            {l.address}
                          </p>
                          <p className="text-slate-500 text-xs flex items-center gap-1">
                            <MapPin size={10} /> {l.city}, {l.state}
                            {l.propertyType && <span className="ml-2 bg-slate-700 px-1.5 py-0.5 rounded text-slate-400">{l.propertyType}</span>}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-white font-bold text-sm">{fmt$(amount)}</p>
                          {equity != null && (
                            <p className="text-emerald-400 text-xs">{equity.toFixed(0)}% {l.type === 'tax-lien' ? 'ROI' : 'equity'}</p>
                          )}
                        </div>
                        <ChevronRight size={14} className="text-slate-600 group-hover:text-slate-400 shrink-0" />
                      </Link>
                    )
                  })}
                </div>
              )}

              {/* Quick filter buttons */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {[
                  { label: '🔥 High Equity', href: '/search?minEquity=50' },
                  { label: '⏰ This Week', href: '/search?dateFrom=' + new Date().toISOString().split('T')[0] },
                  { label: '💰 Under $10K', href: '/search?maxBid=10000' },
                  { label: '🏷️ Tax Liens', href: '/search?tab=tax-lien' },
                  { label: '🗺️ View Map', href: '/map' },
                ].map(btn => (
                  <Link key={btn.href} href={btn.href}
                    className="text-xs bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors">
                    {btn.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resource links */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Search, label: 'Search All Listings', href: '/search', color: 'text-emerald-400' },
                { icon: MapPin, label: 'Map View', href: '/map', color: 'text-sky-400' },
                { icon: TrendingUp, label: 'Marketplace', href: '/marketplace', color: 'text-violet-400' },
                { icon: DollarSign, label: 'Get Funding', href: '/funding', color: 'text-amber-400' },
                { icon: BookOpen, label: 'Investors', href: '/investors', color: 'text-teal-400' },
                { icon: Clock, label: 'Pricing', href: '/pricing', color: 'text-slate-400' },
              ].map(item => (
                <Link key={item.href} href={item.href}
                  className="flex items-center gap-3 bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-xl p-4 transition-all group">
                  <item.icon size={18} className={`${item.color} shrink-0`} />
                  <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
