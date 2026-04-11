'use client'
import { useState, useEffect } from 'react'
import { NavBar } from '@/components/NavBar'
import { UpgradeModal } from '@/components/UpgradeModal'
import { Crown, Plus, TrendingUp, DollarSign, AlertTriangle, Download, X } from 'lucide-react'

function fmt$(n?: number | null) {
  if (n == null) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}
function fmtPct(n: number) { return `${n.toFixed(2)}%` }

const STATUS_COLORS: Record<string, string> = {
  active:      'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  redeemed:    'bg-sky-400/10 text-sky-400 border-sky-400/20',
  sold:        'bg-violet-400/10 text-violet-400 border-violet-400/20',
  foreclosed:  'bg-red-400/10 text-red-400 border-red-400/20',
}

export default function PortfolioPage() {
  const [properties, setProperties] = useState<any[]>([])
  const [summary, setSummary] = useState<any>({})
  const [loading, setLoading] = useState(true)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [form, setForm] = useState({ address: '', city: '', state: '', listingType: 'tax-lien', purchasePrice: '', purchaseDate: '', interestRate: '', redemptionPeriodMonths: '', certNumber: '', notes: '' })
  const f = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  const load = async () => {
    setLoading(true)
    const res = await fetch('/api/portfolio')
    const data = await res.json()
    if (data.error === 'Elite plan required') { setShowUpgrade(true); setLoading(false); return }
    setProperties(data.properties || [])
    setSummary(data.summary || {})
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const addProperty = async () => {
    const res = await fetch('/api/portfolio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) { setShowAdd(false); setForm({ address: '', city: '', state: '', listingType: 'tax-lien', purchasePrice: '', purchaseDate: '', interestRate: '', redemptionPeriodMonths: '', certNumber: '', notes: '' }); load() }
  }

  const markStatus = async (id: string, status: string) => {
    await fetch('/api/portfolio', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) })
    load()
  }

  const exportCSV = () => {
    const headers = ['Address','City','State','Type','Purchase Price','Purchase Date','Interest Rate','Cert #','Status','Redemption Deadline','Notes']
    const rows = properties.map(p => [
      p.address, p.city, p.state, p.listingType, p.purchasePrice, p.purchaseDate ? new Date(p.purchaseDate).toLocaleDateString() : '',
      p.interestRate || '', p.certNumber || '', p.status,
      p.purchaseDeadline ? new Date(p.purchaseDeadline).toLocaleDateString() : '', p.notes || '',
    ].map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))
    const csv = [headers.join(','), ...rows].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = 'forclos-portfolio.csv'; a.click()
  }

  const inputCls = 'w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2.5 text-sm placeholder:text-slate-600 focus:outline-none focus:border-emerald-500'

  const now = Date.now()

  return (
    <div className="min-h-screen bg-slate-950">
      <NavBar />
      {showUpgrade && <UpgradeModal feature="Portfolio Tracker (Elite only)" onClose={() => setShowUpgrade(false)} />}

      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowAdd(false)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl overflow-y-auto max-h-[90vh]">
            <button onClick={() => setShowAdd(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white"><X size={18} /></button>
            <h3 className="text-white font-bold text-lg mb-4">Add to Portfolio</h3>
            <div className="space-y-3">
              <input placeholder="Street Address *" value={form.address} onChange={e => f('address', e.target.value)} className={inputCls} />
              <div className="grid grid-cols-2 gap-2">
                <input placeholder="City *" value={form.city} onChange={e => f('city', e.target.value)} className={inputCls} />
                <input placeholder="State *" value={form.state} onChange={e => f('state', e.target.value)} maxLength={2} className={inputCls} />
              </div>
              <select value={form.listingType} onChange={e => f('listingType', e.target.value)} className={inputCls}>
                <option value="tax-lien">Tax Lien</option>
                <option value="tax-deed">Tax Deed</option>
                <option value="foreclosure">Foreclosure</option>
                <option value="reo">REO</option>
              </select>
              <div className="grid grid-cols-2 gap-2">
                <input placeholder="Purchase Price *" type="number" value={form.purchasePrice} onChange={e => f('purchasePrice', e.target.value)} className={inputCls} />
                <input placeholder="Purchase Date" type="date" value={form.purchaseDate} onChange={e => f('purchaseDate', e.target.value)} className={inputCls} />
              </div>
              {form.listingType === 'tax-lien' && <>
                <div className="grid grid-cols-2 gap-2">
                  <input placeholder="Interest Rate %" type="number" step="0.1" value={form.interestRate} onChange={e => f('interestRate', e.target.value)} className={inputCls} />
                  <input placeholder="Redemption (months)" type="number" value={form.redemptionPeriodMonths} onChange={e => f('redemptionPeriodMonths', e.target.value)} className={inputCls} />
                </div>
                <input placeholder="Certificate Number" value={form.certNumber} onChange={e => f('certNumber', e.target.value)} className={inputCls} />
              </>}
              <textarea placeholder="Notes" value={form.notes} onChange={e => f('notes', e.target.value)} className={inputCls + ' resize-none h-20'} />
              <button onClick={addProperty} className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-xl transition-colors">Add Property →</button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1"><Crown className="text-amber-400" size={18} /><span className="text-amber-400 text-sm font-semibold">Elite Feature</span></div>
            <h1 className="text-2xl font-black text-white">📊 Portfolio Tracker</h1>
          </div>
          <div className="flex gap-2">
            <button onClick={exportCSV} className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 px-4 py-2 rounded-xl text-sm transition-colors">
              <Download size={14} /> Export CSV
            </button>
            <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-sm transition-colors">
              <Plus size={14} /> Add Property
            </button>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Invested', value: fmt$(summary.totalInvested), icon: DollarSign, color: 'text-white' },
            { label: 'Accrued Interest', value: fmt$(summary.accruedInterest), icon: TrendingUp, color: 'text-emerald-400' },
            { label: 'Active Properties', value: summary.activeCount ?? 0, icon: null, color: 'text-white' },
            { label: '⚠️ Near Deadline', value: summary.nearDeadline ?? 0, icon: AlertTriangle, color: summary.nearDeadline > 0 ? 'text-red-400' : 'text-slate-500' },
          ].map(card => (
            <div key={card.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-slate-500 text-xs mb-1">{card.label}</p>
              <p className={`text-2xl font-black ${card.color}`}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* Properties */}
        {loading ? (
          <div className="space-y-3">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-20 bg-slate-900 border border-slate-800 rounded-xl animate-pulse" />)}</div>
        ) : properties.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/40 border border-slate-800 rounded-2xl">
            <p className="text-slate-400 text-lg font-semibold mb-2">No properties yet</p>
            <p className="text-slate-600 text-sm mb-4">Add your tax liens, deeds, and REO properties to track P&L and redemption deadlines.</p>
            <button onClick={() => setShowAdd(true)} className="bg-emerald-500 text-slate-950 font-bold px-6 py-2 rounded-xl hover:bg-emerald-400 transition-colors">
              Add First Property →
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {properties.map(p => {
              const daysLeft = p.purchaseDeadline
                ? Math.ceil((new Date(p.purchaseDeadline).getTime() - now) / 86400000)
                : null

              let accruedInterest = 0
              if (p.listingType === 'tax-lien' && p.interestRate && p.purchaseDate) {
                const yrs = (now - new Date(p.purchaseDate).getTime()) / (365.25 * 86400000)
                accruedInterest = p.purchasePrice * (p.interestRate / 100) * yrs
              }

              return (
                <div key={p.id} className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl px-5 py-4 flex items-start gap-4 transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-white font-semibold text-sm">{p.address}</p>
                      <span className={`text-xs font-semibold border px-2 py-0.5 rounded-full ${STATUS_COLORS[p.status] || ''}`}>{p.status}</span>
                      <span className="text-xs bg-slate-800 border border-slate-700 text-slate-400 px-2 py-0.5 rounded-full">{p.listingType}</span>
                    </div>
                    <p className="text-slate-500 text-xs">{p.city}, {p.state} {p.certNumber ? `· Cert: ${p.certNumber}` : ''}</p>
                    {daysLeft !== null && (
                      <div className={`mt-1.5 flex items-center gap-1 text-xs font-semibold ${daysLeft <= 7 ? 'text-red-400' : daysLeft <= 30 ? 'text-amber-400' : 'text-slate-500'}`}>
                        {daysLeft <= 30 && <AlertTriangle size={11} />}
                        {daysLeft > 0 ? `Redemption deadline in ${daysLeft} days` : `Deadline passed ${Math.abs(daysLeft)} days ago`}
                      </div>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-white font-bold text-base">{fmt$(p.purchasePrice)}</p>
                    {accruedInterest > 0 && (
                      <p className="text-emerald-400 text-xs">+{fmt$(accruedInterest)} accrued</p>
                    )}
                    {p.interestRate && <p className="text-slate-500 text-xs">{p.interestRate}% rate</p>}
                  </div>
                  <select value={p.status} onChange={e => markStatus(p.id, e.target.value)}
                    className="bg-slate-800 border border-slate-700 text-slate-300 rounded-lg px-2 py-1 text-xs focus:outline-none shrink-0">
                    <option value="active">Active</option>
                    <option value="redeemed">Redeemed</option>
                    <option value="sold">Sold</option>
                    <option value="foreclosed">Foreclosed</option>
                  </select>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
