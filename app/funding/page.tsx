'use client'
import { useState, useEffect } from 'react'
import { NavBar } from '@/components/NavBar'
import { UpgradeModal } from '@/components/UpgradeModal'
import { ExternalLink, Building2, Lock } from 'lucide-react'

function fmt$(n?: number | null) {
  if (n == null) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(n)
}

const TYPE_LABELS: Record<string, string> = {
  'hard-money': '🔨 Hard Money',
  'bridge':     '🌉 Bridge',
  'dscr':       '📊 DSCR',
  'private':    '🤝 Private',
}

export default function FundingPage() {
  const [partners, setPartners] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [applyModal, setApplyModal] = useState<any | null>(null)
  const [loanAmount, setLoanAmount] = useState('')
  const [propertyInfo, setPropertyInfo] = useState('')
  const [applied, setApplied] = useState(false)
  const [filterType, setFilterType] = useState('')

  useEffect(() => {
    fetch(`/api/funding${filterType ? `?type=${filterType}` : ''}`)
      .then(r => r.json())
      .then(d => { setPartners(d.partners || []); setLoading(false) })
  }, [filterType])

  const applyNow = async () => {
    if (!applyModal) return
    const res = await fetch('/api/funding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ partnerId: applyModal.id, loanAmount: parseFloat(loanAmount) || null, propertyInfo }),
    })
    const data = await res.json()
    if (data.error === 'Pro plan required') { setApplyModal(null); setShowUpgrade(true); return }
    if (data.applyUrl) window.open(data.applyUrl, '_blank')
    setApplied(true)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <NavBar />
      {showUpgrade && <UpgradeModal feature="Applying for funding (Pro plan required)" onClose={() => setShowUpgrade(false)} />}

      {applyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => { setApplyModal(null); setApplied(false) }} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            {applied ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="text-white font-bold text-lg mb-2">Application Sent!</h3>
                <p className="text-slate-400 text-sm">Redirecting you to {applyModal.name}&apos;s application…</p>
                <button onClick={() => { setApplyModal(null); setApplied(false) }} className="mt-4 bg-emerald-500 text-slate-950 font-bold px-6 py-2 rounded-lg">Close</button>
              </div>
            ) : (
              <>
                <h3 className="text-white font-bold text-lg mb-1">Apply to {applyModal.name}</h3>
                <p className="text-slate-400 text-sm mb-4">Quick info to connect you with the right team.</p>
                <input type="number" placeholder="Loan amount needed ($)" value={loanAmount} onChange={e => setLoanAmount(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2.5 text-sm mb-3 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500" />
                <textarea placeholder="Brief property description (optional)" value={propertyInfo} onChange={e => setPropertyInfo(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2.5 text-sm mb-4 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 resize-none h-20" />
                <div className="flex gap-2">
                  <button onClick={() => setApplyModal(null)} className="flex-1 border border-slate-700 text-slate-400 rounded-xl py-2 text-sm">Cancel</button>
                  <button onClick={applyNow} className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl py-2 text-sm transition-colors">
                    Apply Now →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-black text-white mb-1">🏦 Funding Marketplace</h1>
          <p className="text-slate-400 text-sm">Hard money, bridge, and DSCR lenders who work with investors. Apply in minutes.</p>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {[['', 'All Lenders'], ['hard-money', '🔨 Hard Money'], ['bridge', '🌉 Bridge'], ['dscr', '📊 DSCR']].map(([val, label]) => (
            <button key={val} onClick={() => setFilterType(val)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${filterType === val ? 'bg-slate-800 text-white border border-slate-600' : 'border border-slate-800 text-slate-400 hover:text-white'}`}>
              {label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-48 bg-slate-900 border border-slate-800 rounded-2xl animate-pulse" />)}
          </div>
        ) : partners.length === 0 ? (
          <div className="text-center py-20">
            <Building2 size={40} className="text-slate-700 mx-auto mb-3" />
            <p className="text-slate-400">No lenders match this filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map(p => (
              <div key={p.id} className="bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-2xl p-5 flex flex-col transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center">
                      <Building2 size={18} className="text-slate-400" />
                    </div>
                    <div>
                      <p className="text-white font-bold">{p.name}</p>
                      <div className="flex gap-1 mt-0.5">
                        {p.types.map((t: string) => (
                          <span key={t} className="text-xs bg-slate-800 border border-slate-700 text-slate-400 px-1.5 py-0.5 rounded">
                            {TYPE_LABELS[t] || t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {p.description && <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-1">{p.description}</p>}

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="bg-slate-800 rounded-lg p-2.5">
                    <p className="text-slate-500 text-xs">Loan Range</p>
                    <p className="text-white font-semibold">{fmt$(p.minLoan)} – {fmt$(p.maxLoan)}</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-2.5">
                    <p className="text-slate-500 text-xs">Rates From</p>
                    <p className="text-white font-semibold">{p.rateFrom}% – {p.rateTo}%</p>
                  </div>
                </div>

                {p.states?.length > 0 && (
                  <p className="text-slate-600 text-xs mb-4">📍 {p.states.slice(0, 8).join(', ')}{p.states.length > 8 ? ` +${p.states.length - 8} more` : ''}</p>
                )}

                <button
                  onClick={() => { setApplyModal(p); setLoanAmount(''); setPropertyInfo(''); setApplied(false) }}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-xl text-sm transition-colors"
                >
                  <ExternalLink size={14} /> Apply Now
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center text-sm text-slate-500">
          <p>Forclos earns a referral fee from lender partners. This does not affect your rate or terms.</p>
        </div>
      </div>
    </div>
  )
}
