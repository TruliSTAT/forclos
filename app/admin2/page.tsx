'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Users, DollarSign, TrendingUp, Database, RefreshCw, Crown, Zap, AlertCircle, CheckCircle, BarChart2 } from 'lucide-react'

function fmt$(n: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

export default function BusinessDashboard() {
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStats()
    const interval = setInterval(loadStats, 30000)
    return () => clearInterval(interval)
  }, [])

  const loadStats = async () => {
    try {
      const res = await fetch('/api/admin/stats')
      const data = await res.json()
      setStats(data)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <RefreshCw className="text-slate-600 animate-spin" size={28} />
      </div>
    )
  }

  const mrr = stats?.revenue?.mrr || 0
  const arr = stats?.revenue?.arr || 0
  const totalUsers = stats?.users?.total || 0
  const proUsers = stats?.users?.pro || 0
  const eliteUsers = stats?.users?.elite || 0
  const freeUsers = stats?.users?.free || 0
  const paidConversion = totalUsers > 0 ? (((proUsers + eliteUsers) / totalUsers) * 100).toFixed(1) : '0.0'

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Nav */}
      <nav className="border-b border-slate-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-emerald-500 rounded-md flex items-center justify-center font-black text-slate-950 text-xs">F</div>
            <span className="font-bold text-white">Forclos</span>
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400 text-sm">Business Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin" className="text-slate-400 hover:text-white text-sm">Scrapers</Link>
          <button onClick={loadStats} className="text-slate-500 hover:text-white">
            <RefreshCw size={16} />
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Revenue */}
        <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <DollarSign size={18} className="text-emerald-400" /> Revenue
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'MRR', value: fmt$(mrr), sub: 'Monthly Recurring', color: 'text-emerald-400' },
            { label: 'ARR', value: fmt$(arr), sub: 'Annual Run Rate', color: 'text-emerald-400' },
            { label: 'Pending Fees', value: fmt$(stats?.marketplace?.pendingFees || 0), sub: 'Marketplace 2.5%', color: 'text-amber-400' },
            { label: 'Conversion', value: `${paidConversion}%`, sub: 'Free → Paid', color: 'text-violet-400' },
          ].map(s => (
            <div key={s.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-slate-500 text-xs mb-1">{s.label}</p>
              <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
              <p className="text-slate-600 text-xs mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Users */}
        <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Users size={18} className="text-violet-400" /> Users
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Users', value: totalUsers, icon: Users, color: 'text-white' },
            { label: 'Free', value: freeUsers, icon: null, color: 'text-slate-400', sub: `${totalUsers > 0 ? ((freeUsers/totalUsers)*100).toFixed(0) : 0}%` },
            { label: 'Pro — $29/mo', value: proUsers, icon: Zap, color: 'text-violet-400', sub: fmt$(proUsers * 29) + '/mo' },
            { label: 'Elite — $79/mo', value: eliteUsers, icon: Crown, color: 'text-amber-400', sub: fmt$(eliteUsers * 79) + '/mo' },
          ].map(s => (
            <div key={s.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-slate-500 text-xs mb-1">{s.label}</p>
              <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
              {s.sub && <p className="text-slate-500 text-xs mt-1">{s.sub}</p>}
            </div>
          ))}
        </div>

        {/* Tier breakdown bar */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-8">
          <h3 className="text-white font-semibold mb-3">User Tier Distribution</h3>
          <div className="flex h-6 rounded-full overflow-hidden gap-0.5">
            <div className="bg-slate-700 transition-all" style={{ width: totalUsers > 0 ? `${(freeUsers/totalUsers)*100}%` : '100%' }} />
            <div className="bg-violet-500 transition-all" style={{ width: totalUsers > 0 ? `${(proUsers/totalUsers)*100}%` : '0%' }} />
            <div className="bg-amber-500 transition-all" style={{ width: totalUsers > 0 ? `${(eliteUsers/totalUsers)*100}%` : '0%' }} />
          </div>
          <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-slate-700 rounded-full" />Free ({freeUsers})</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-violet-500 rounded-full" />Pro ({proUsers})</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-500 rounded-full" />Elite ({eliteUsers})</span>
          </div>
        </div>

        {/* Data & Marketplace */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Database size={16} className="text-sky-400" /> Data Coverage
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Properties', value: stats?.listings?.properties?.toLocaleString() || '0', color: 'text-white' },
                { label: 'Foreclosures', value: stats?.listings?.foreclosures?.toLocaleString() || '0', color: 'text-red-400' },
                { label: 'Tax Sales', value: stats?.listings?.taxSales?.toLocaleString() || '0', color: 'text-sky-400' },
                { label: 'Active Scrapers', value: stats?.scrapers?.active || '0', color: 'text-emerald-400' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
                  <span className="text-slate-400 text-sm">{item.label}</span>
                  <span className={`font-bold ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
            <Link href="/admin" className="mt-4 flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
              Manage Scrapers →
            </Link>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <BarChart2 size={16} className="text-violet-400" /> Marketplace
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Active Listings', value: stats?.marketplace?.active || '0', color: 'text-white', icon: CheckCircle },
                { label: 'Pending Review', value: stats?.marketplace?.pending || '0', color: 'text-amber-400', icon: AlertCircle },
                { label: 'Pending Tx Fees', value: fmt$(stats?.marketplace?.pendingFees || 0), color: 'text-emerald-400', icon: DollarSign },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
                  <span className="text-slate-400 text-sm">{item.label}</span>
                  <span className={`font-bold ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
            <Link href="/marketplace" className="mt-4 flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors">
              View Marketplace →
            </Link>
          </div>
        </div>

        {/* Recent signups */}
        {stats?.recentSignups?.length > 0 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Users size={16} className="text-emerald-400" /> Recent Signups
            </h3>
            <div className="space-y-1">
              {stats.recentSignups.map((u: any) => (
                <div key={u.id} className="flex items-center gap-3 py-2 border-b border-slate-800/50 last:border-0">
                  <div className="w-7 h-7 bg-slate-800 rounded-full flex items-center justify-center text-sm">
                    {u.name?.[0] || u.email[0].toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-300 text-sm truncate">{u.name || u.email}</p>
                    <p className="text-slate-600 text-xs">{new Date(u.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    u.tier === 'elite' ? 'bg-amber-500/20 text-amber-400' :
                    u.tier === 'pro' ? 'bg-violet-500/20 text-violet-400' :
                    'bg-slate-800 text-slate-500'
                  }`}>
                    {u.tier}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
