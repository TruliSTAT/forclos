'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Users, TrendingUp, Database, DollarSign, Clock, CheckCircle, AlertTriangle } from 'lucide-react'

function fmt$(n: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/stats').then(r => r.json()).then(d => { setStats(d); setLoading(false) })
    const id = setInterval(() => fetch('/api/admin/stats').then(r => r.json()).then(setStats), 30000)
    return () => clearInterval(id)
  }, [])

  if (loading) return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-slate-400">Loading…</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-slate-950 text-sm">F</div>
            <span className="font-black text-white text-lg">Forclos</span>
          </Link>
          <span className="text-slate-600">·</span>
          <span className="text-slate-400 text-sm">Admin</span>
        </div>
        <div className="flex gap-3 text-sm">
          <Link href="/admin/dashboard" className="text-white font-semibold">Dashboard</Link>
          <Link href="/admin" className="text-slate-400 hover:text-white">Scrapers</Link>
        </div>
      </nav>

      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-black text-white mb-6">📊 Platform Dashboard</h1>

        {/* Revenue */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Monthly Recurring Revenue', value: fmt$(stats?.revenue?.mrr || 0), sub: `${fmt$(stats?.revenue?.arr || 0)} ARR`, icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
            { label: 'Total Users', value: (stats?.users?.total || 0).toLocaleString(), sub: `${stats?.users?.pro || 0} Pro · ${stats?.users?.elite || 0} Elite`, icon: Users, color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
            { label: 'Total Listings', value: (stats?.listings?.properties || 0).toLocaleString(), sub: `${(stats?.listings?.foreclosures || 0).toLocaleString()} FC · ${(stats?.listings?.taxSales || 0).toLocaleString()} Tax`, icon: Database, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
            { label: 'Pending Tx Fees', value: fmt$(stats?.marketplace?.pendingFees || 0), sub: `${stats?.marketplace?.pending || 0} listings pending`, icon: TrendingUp, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
          ].map(card => (
            <div key={card.label} className={`bg-slate-900 border rounded-2xl p-5 ${card.bg}`}>
              <div className="flex items-center justify-between mb-3">
                <p className="text-slate-400 text-xs">{card.label}</p>
                <card.icon size={16} className={card.color} />
              </div>
              <p className={`text-2xl font-black ${card.color}`}>{card.value}</p>
              <p className="text-slate-500 text-xs mt-1">{card.sub}</p>
            </div>
          ))}
        </div>

        {/* User tier breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Users size={16} className="text-slate-400" /> User Breakdown
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Free', count: stats?.users?.free || 0, color: 'bg-slate-600', pct: (stats?.users?.free || 0) / Math.max(1, stats?.users?.total || 1) },
                { label: 'Pro ($29/mo)', count: stats?.users?.pro || 0, color: 'bg-violet-500', pct: (stats?.users?.pro || 0) / Math.max(1, stats?.users?.total || 1) },
                { label: 'Elite ($79/mo)', count: stats?.users?.elite || 0, color: 'bg-amber-500', pct: (stats?.users?.elite || 0) / Math.max(1, stats?.users?.total || 1) },
              ].map(tier => (
                <div key={tier.label} className="flex items-center gap-3">
                  <span className="text-slate-400 text-sm w-28 shrink-0">{tier.label}</span>
                  <div className="flex-1 bg-slate-800 rounded-full h-2">
                    <div className={`h-2 rounded-full ${tier.color}`} style={{ width: `${tier.pct * 100}%` }} />
                  </div>
                  <span className="text-white font-semibold text-sm w-8 text-right">{tier.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Clock size={16} className="text-slate-400" /> Recent Signups
            </h3>
            <div className="space-y-2">
              {(stats?.recentSignups || []).slice(0, 6).map((u: any) => (
                <div key={u.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-300 text-sm truncate max-w-[200px]">{u.email}</p>
                    <p className="text-slate-600 text-xs">{new Date(u.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                    u.tier === 'elite' ? 'bg-amber-500/20 text-amber-300' :
                    u.tier === 'pro'   ? 'bg-violet-500/20 text-violet-300' :
                    'bg-slate-700 text-slate-400'
                  }`}>{u.tier}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marketplace */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-bold mb-4">🤝 Marketplace Status</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-emerald-400 font-black text-3xl">{stats?.marketplace?.active || 0}</p>
              <p className="text-slate-500 text-sm">Active Listings</p>
            </div>
            <div>
              <p className="text-amber-400 font-black text-3xl">{stats?.marketplace?.pending || 0}</p>
              <p className="text-slate-500 text-sm">Pending Approval</p>
            </div>
            <div>
              <p className="text-violet-400 font-black text-3xl">{fmt$(stats?.marketplace?.pendingFees || 0)}</p>
              <p className="text-slate-500 text-sm">Uncollected Fees</p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <Link href="/admin" className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors">
            → Go to Scraper Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
