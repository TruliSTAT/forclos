'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Play, RefreshCw, CheckCircle, XCircle, Clock, Database, AlertCircle, ChevronDown, ChevronRight } from 'lucide-react'

interface Scraper {
  id: string
  name: string
  state: string
  county?: string
  listingType: string
  platform?: string
  isActive: boolean
  lastRunAt?: string
  lastRunStatus?: string
  lastRunCount?: number
  totalRecords: number
  schedule: string
  _count?: { jobs: number }
}

function StatusDot({ status }: { status?: string }) {
  const map: Record<string, string> = {
    success: 'bg-emerald-400',
    error: 'bg-red-400',
    running: 'bg-amber-400 animate-pulse',
  }
  return <span className={`w-2 h-2 rounded-full ${map[status || ''] || 'bg-slate-600'}`} />
}

function TypeBadge({ type }: { type: string }) {
  const map: Record<string, string> = {
    foreclosure: 'bg-red-400/10 text-red-400 border-red-400/20',
    'tax-lien': 'bg-sky-400/10 text-sky-400 border-sky-400/20',
    'tax-deed': 'bg-violet-400/10 text-violet-400 border-violet-400/20',
    all: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  }
  return (
    <span className={`inline-block border px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${map[type] || 'bg-slate-700 text-slate-400 border-slate-600'}`}>
      {type.replace('-', ' ')}
    </span>
  )
}

export default function AdminPage() {
  const [scrapers, setScrapers] = useState<Scraper[]>([])
  const [loading, setLoading] = useState(true)
  const [runningIds, setRunningIds] = useState<Set<string>>(new Set())
  const [expandedState, setExpandedState] = useState<string | null>(null)
  const [stats, setStats] = useState({ total: 0, active: 0, foreclosures: 0, taxSales: 0 })
  const [filterState, setFilterState] = useState('')

  useEffect(() => {
    fetchScrapers()
    const interval = setInterval(fetchScrapers, 10000)
    return () => clearInterval(interval)
  }, [])

  const fetchScrapers = async () => {
    try {
      const res = await fetch('/api/scrapers')
      const data = await res.json()
      setScrapers(data.scrapers || [])
      setStats(data.stats || {})
    } finally {
      setLoading(false)
    }
  }

  const runScraper = async (id: string) => {
    setRunningIds(s => { const n = new Set(Array.from(s)); n.add(id); return n })
    try {
      await fetch(`/api/scrapers/${id}/run`, { method: 'POST' })
      await fetchScrapers()
    } finally {
      setRunningIds(s => { const n = new Set(Array.from(s)); n.delete(id); return n })
    }
  }

  const runAll = async () => {
    await fetch('/api/scrapers/run-all', { method: 'POST' })
    await fetchScrapers()
  }

  const toggleScraper = async (id: string, isActive: boolean) => {
    await fetch(`/api/scrapers/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isActive: !isActive }) })
    await fetchScrapers()
  }

  const byState = scrapers.reduce((acc, s) => {
    if (!acc[s.state]) acc[s.state] = []
    acc[s.state].push(s)
    return acc
  }, {} as Record<string, Scraper[]>)

  const states = Object.keys(byState).sort()
  const filteredStates = filterState ? states.filter(s => s === filterState) : states

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Nav */}
      <nav className="border-b border-slate-800 px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-emerald-500 rounded-md flex items-center justify-center font-black text-slate-950 text-xs">LS</div>
          <span className="font-bold text-white">LienScope</span>
          <span className="text-slate-600 mx-2">/</span>
          <span className="text-slate-400 text-sm">Scraper Admin</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/search" className="text-slate-400 hover:text-white text-sm transition-colors">← Search</Link>
          <button onClick={runAll} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition-colors">
            <Play size={14} /> Run All Active
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Scrapers', value: stats.total, icon: Database },
            { label: 'Active Scrapers', value: stats.active, icon: CheckCircle, color: 'text-emerald-400' },
            { label: 'Foreclosure Records', value: stats.foreclosures?.toLocaleString(), icon: AlertCircle, color: 'text-red-400' },
            { label: 'Tax Sale Records', value: stats.taxSales?.toLocaleString(), icon: Clock, color: 'text-sky-400' },
          ].map(stat => (
            <div key={stat.label} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <stat.icon size={18} className={`mb-2 ${stat.color || 'text-slate-400'}`} />
              <div className="text-2xl font-bold text-white">{stat.value ?? '—'}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter */}
        <div className="flex items-center gap-3 mb-4">
          <h2 className="font-bold text-white text-lg">Scrapers</h2>
          <select value={filterState} onChange={e => setFilterState(e.target.value)} className="bg-slate-900 border border-slate-700 text-slate-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500">
            <option value="">All States ({states.length})</option>
            {states.map(s => <option key={s} value={s}>{s} ({byState[s].length})</option>)}
          </select>
          <RefreshCw size={16} className="text-slate-500 cursor-pointer hover:text-slate-300 transition-colors" onClick={fetchScrapers} />
        </div>

        {/* Scrapers by State */}
        <div className="space-y-2">
          {filteredStates.map(state => (
            <div key={state} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedState(expandedState === state ? null : state)}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {expandedState === state ? <ChevronDown size={16} className="text-slate-400" /> : <ChevronRight size={16} className="text-slate-400" />}
                  <span className="font-bold text-white text-sm">{state}</span>
                  <span className="text-xs text-slate-500">{byState[state].length} scrapers</span>
                  <span className="text-xs text-emerald-400">{byState[state].reduce((a, s) => a + s.totalRecords, 0).toLocaleString()} records</span>
                </div>
                <div className="flex gap-1">
                  {byState[state].map(s => <StatusDot key={s.id} status={s.lastRunStatus} />)}
                </div>
              </button>

              {expandedState === state && (
                <div className="border-t border-slate-800">
                  {byState[state].map(scraper => (
                    <div key={scraper.id} className="flex items-center gap-4 px-5 py-3 border-b border-slate-800/50 last:border-0 hover:bg-slate-800/30 transition-colors">
                      <StatusDot status={scraper.lastRunStatus} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{scraper.name}</p>
                        <p className="text-xs text-slate-500">{scraper.platform || 'custom'} · {scraper.schedule}</p>
                      </div>
                      <TypeBadge type={scraper.listingType} />
                      <div className="text-right hidden md:block">
                        <p className="text-xs text-slate-500">Last run</p>
                        <p className="text-xs text-slate-300">{scraper.lastRunAt ? new Date(scraper.lastRunAt).toLocaleDateString() : 'Never'}</p>
                      </div>
                      <div className="text-right min-w-[70px]">
                        <p className="text-xs text-slate-500">Records</p>
                        <p className="text-xs font-semibold text-emerald-400">{scraper.totalRecords.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked={scraper.isActive} onChange={() => toggleScraper(scraper.id, scraper.isActive)} className="sr-only peer" />
                          <div className="w-8 h-4 bg-slate-700 peer-checked:bg-emerald-500 rounded-full transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-4" />
                        </label>
                        <button
                          onClick={() => runScraper(scraper.id)}
                          disabled={runningIds.has(scraper.id)}
                          className="flex items-center gap-1 bg-slate-800 hover:bg-emerald-500/10 hover:text-emerald-400 border border-slate-700 hover:border-emerald-500/30 text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-50"
                        >
                          {runningIds.has(scraper.id) ? <RefreshCw size={12} className="animate-spin" /> : <Play size={12} />}
                          {runningIds.has(scraper.id) ? 'Running' : 'Run'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
