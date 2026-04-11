'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, Filter, Lock, Crown, Zap, TrendingUp, Tag, Home, MapPin } from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { UpgradeModal } from '@/components/UpgradeModal'
import Link from 'next/link'

const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC']

const LISTING_TYPES = [
  { value: '', label: 'All Types' },
  { value: 'tax-deed', label: '📋 Tax Deed' },
  { value: 'tax-lien', label: '🏷️ Tax Lien Cert' },
  { value: 'reo', label: '🏦 REO / Bank Owned' },
  { value: 'foreclosure', label: '🏚️ Foreclosure' },
  { value: 'mechanic-lien', label: '🔧 Mechanic Lien' },
  { value: 'judgment-lien', label: '⚖️ Judgment Lien' },
]

function fmt$(n?: number | null) {
  if (n == null) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}
function fmtPct(n?: number | null) {
  if (n == null) return null
  return `${n.toFixed(1)}%`
}

function MarketplaceContent() {
  const searchParams = useSearchParams()
  const [listings, setListings] = useState<any[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [tier, setTier] = useState('free')
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [upgradeFeature, setUpgradeFeature] = useState('')
  const [offerModal, setOfferModal] = useState<any | null>(null)
  const [offerAmount, setOfferAmount] = useState('')
  const [offerMsg, setOfferMsg] = useState('')
  const [offerDone, setOfferDone] = useState(false)

  const [filters, setFilters] = useState({
    state: '', listingType: '', minPrice: '', maxPrice: '', sort: 'newest',
  })
  const f = (k: string, v: string) => setFilters(p => ({ ...p, [k]: v }))

  const fetchListings = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams(Object.fromEntries(Object.entries(filters).filter(([, v]) => v)))
      const res = await fetch(`/api/marketplace/listings?${params}`)
      const data = await res.json()
      setListings(data.listings || [])
      setTotal(data.total || 0)
      setTier(data.tier || 'free')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchListings() }, [filters])

  // Check for success params
  useEffect(() => {
    if (searchParams.get('tx') === 'paid') {
      // could show a toast
    }
  }, [searchParams])

  const makeOffer = async () => {
    if (!offerModal || !offerAmount) return
    const res = await fetch('/api/marketplace/offers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ listingId: offerModal.id, offerAmount: parseFloat(offerAmount), message: offerMsg }),
    })
    const data = await res.json()
    if (data.error === 'Pro plan required to make offers') {
      setOfferModal(null)
      setUpgradeFeature('Making offers on the Marketplace')
      setShowUpgrade(true)
      return
    }
    if (data.offer) setOfferDone(true)
  }

  const listingTypeLabel = (t: string) => LISTING_TYPES.find(x => x.value === t)?.label || t

  return (
    <div className="min-h-screen bg-slate-950">
      <NavBar />
      {showUpgrade && <UpgradeModal feature={upgradeFeature} onClose={() => setShowUpgrade(false)} />}

      {/* Offer Modal */}
      {offerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => { setOfferModal(null); setOfferDone(false) }} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            {offerDone ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-white font-bold text-lg mb-2">Offer Submitted!</h3>
                <p className="text-slate-400 text-sm mb-4">The seller will be notified and can accept or counter your offer.</p>
                <button onClick={() => { setOfferModal(null); setOfferDone(false) }}
                  className="bg-emerald-500 text-slate-950 font-bold px-6 py-2 rounded-lg">Done</button>
              </div>
            ) : (
              <>
                <h3 className="text-white font-bold text-lg mb-1">Make an Offer</h3>
                <p className="text-slate-400 text-sm mb-4 truncate">{offerModal.address}</p>
                <div className="bg-slate-800 rounded-lg p-3 mb-4">
                  <p className="text-xs text-slate-500 mb-1">Asking Price</p>
                  <p className="text-white font-bold text-xl">{fmt$(offerModal.askingPrice)}</p>
                </div>
                <label className="text-xs text-slate-400 mb-1 block">Your Offer ($)</label>
                <input type="number" value={offerAmount} onChange={e => setOfferAmount(e.target.value)}
                  placeholder={`e.g. ${Math.round((offerModal.askingPrice || 0) * 0.95).toLocaleString()}`}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm mb-3 focus:outline-none focus:border-emerald-500" />
                <label className="text-xs text-slate-400 mb-1 block">Message to Seller (optional)</label>
                <textarea value={offerMsg} onChange={e => setOfferMsg(e.target.value)}
                  placeholder="I'm a cash buyer, can close in 30 days…"
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm mb-4 focus:outline-none focus:border-emerald-500 resize-none h-20" />
                <div className="flex gap-2">
                  <button onClick={() => setOfferModal(null)} className="flex-1 border border-slate-700 text-slate-400 rounded-lg py-2 text-sm">Cancel</button>
                  <button onClick={makeOffer} className="flex-1 bg-emerald-500 text-slate-950 font-bold rounded-lg py-2 text-sm">Submit Offer →</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="max-w-screen-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-black text-white">🤝 Investor Marketplace</h1>
            <p className="text-slate-400 text-sm mt-1">Buy and sell tax deeds, liens, REO, and foreclosure assets — investor to investor.</p>
          </div>
          {tier === 'elite' && (
            <Link href="/marketplace/new"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2 rounded-xl text-sm flex items-center gap-2 transition-colors">
              <Crown size={16} /> List a Property
            </Link>
          )}
          {tier !== 'elite' && (
            <button onClick={() => { setUpgradeFeature('Listing properties (Elite only)'); setShowUpgrade(true) }}
              className="border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 px-5 py-2 rounded-xl text-sm flex items-center gap-2 transition-colors">
              <Crown size={16} /> List a Property
              <span className="text-xs bg-amber-500/20 px-1.5 py-0.5 rounded">Elite</span>
            </button>
          )}
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6 bg-slate-900 border border-slate-800 rounded-xl p-4">
          <select value={filters.state} onChange={e => f('state', e.target.value)}
            className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500">
            <option value="">All States</option>
            {US_STATES.map(s => <option key={s}>{s}</option>)}
          </select>
          <select value={filters.listingType} onChange={e => f('listingType', e.target.value)}
            className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500">
            {LISTING_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
          <input type="number" placeholder="Min Price ($)" value={filters.minPrice} onChange={e => f('minPrice', e.target.value)}
            className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm w-36 focus:outline-none focus:border-emerald-500 placeholder:text-slate-600" />
          <input type="number" placeholder="Max Price ($)" value={filters.maxPrice} onChange={e => f('maxPrice', e.target.value)}
            className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm w-36 focus:outline-none focus:border-emerald-500 placeholder:text-slate-600" />
          <select value={filters.sort} onChange={e => f('sort', e.target.value)}
            className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500">
            <option value="newest">Newest First</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="roi_desc">Highest ROI</option>
          </select>
          <div className="ml-auto text-slate-500 text-sm">
            <span className="text-white font-semibold">{total.toLocaleString()}</span> listings
          </div>
        </div>

        {/* Free tier banner */}
        {tier === 'free' && (
          <div className="mb-6 bg-gradient-to-r from-violet-900/40 to-violet-800/20 border border-violet-500/20 rounded-2xl p-5 flex items-center gap-4">
            <Lock className="text-violet-400 shrink-0" size={24} />
            <div className="flex-1">
              <p className="text-white font-semibold">Upgrade to view full property details and make offers</p>
              <p className="text-slate-400 text-sm">Free users see blurred listings. Pro & Elite unlock everything.</p>
            </div>
            <button onClick={() => { setUpgradeFeature('Marketplace full access'); setShowUpgrade(true) }}
              className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-5 py-2 rounded-lg text-sm transition-colors shrink-0">
              Upgrade →
            </button>
          </div>
        )}

        {/* Listings grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-64 bg-slate-900 border border-slate-800 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : listings.length === 0 ? (
          <div className="text-center py-24 bg-slate-900/40 rounded-2xl border border-slate-800">
            <div className="text-5xl mb-4">🤝</div>
            <p className="text-slate-400 font-semibold text-lg">No listings yet</p>
            <p className="text-slate-600 text-sm mt-1 mb-4">Elite members can list tax deeds, liens, and REO properties here.</p>
            {tier === 'elite' ? (
              <Link href="/marketplace/new" className="inline-block bg-amber-500 text-slate-950 font-bold px-6 py-2 rounded-xl text-sm hover:bg-amber-400 transition-colors">
                Be the First to List →
              </Link>
            ) : (
              <button onClick={() => { setUpgradeFeature('Listing properties'); setShowUpgrade(true) }}
                className="bg-amber-500 text-slate-950 font-bold px-6 py-2 rounded-xl text-sm hover:bg-amber-400 transition-colors">
                Upgrade to Elite to List →
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listings.map(l => (
              <div key={l.id}
                className={`bg-slate-900 border rounded-2xl overflow-hidden transition-all group ${l.blurred ? 'border-slate-800' : 'border-slate-700 hover:border-slate-500'}`}>
                {/* Photo or placeholder */}
                <div className="h-40 bg-slate-800 flex items-center justify-center relative overflow-hidden">
                  {l.photos && l.photos[0] && !l.blurred ? (
                    <img src={l.photos[0]} alt={l.address} className="w-full h-full object-cover" />
                  ) : (
                    <Home size={32} className="text-slate-700" />
                  )}
                  {l.blurred && (
                    <div className="absolute inset-0 backdrop-blur-md flex items-center justify-center bg-slate-900/50">
                      <div className="text-center">
                        <Lock size={20} className="text-slate-400 mx-auto mb-1" />
                        <p className="text-slate-400 text-xs">Pro to view</p>
                      </div>
                    </div>
                  )}
                  {/* Type badge */}
                  <span className="absolute top-3 left-3 text-xs font-bold bg-slate-900/90 border border-slate-700 text-slate-300 px-2 py-1 rounded-full">
                    {listingTypeLabel(l.listingType)}
                  </span>
                  {l.offerCount > 0 && (
                    <span className="absolute top-3 right-3 text-xs font-bold bg-emerald-500 text-slate-950 px-2 py-1 rounded-full">
                      {l.offerCount} offer{l.offerCount !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <p className={`font-bold text-sm truncate ${l.blurred ? 'text-slate-500' : 'text-white'}`}>
                        {l.blurred ? `📍 ${l.state}` : l.address}
                      </p>
                      <p className="text-slate-500 text-xs">{l.city}, {l.state} {l.zip || ''}</p>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <p className="text-emerald-400 font-black text-lg">{fmt$(l.askingPrice)}</p>
                      {l.estimatedValue && <p className="text-slate-500 text-xs">est. {fmt$(l.estimatedValue)}</p>}
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    {l.bedrooms && <span>{l.bedrooms}bd</span>}
                    {l.bathrooms && <span>{l.bathrooms}ba</span>}
                    {l.sqft && <span>{l.sqft.toLocaleString()} sqft</span>}
                    {l.yearBuilt && <span>Built {l.yearBuilt}</span>}
                  </div>

                  {/* ROI / Equity */}
                  {(l.equityPct != null || l.estimatedRoi != null) && (
                    <div className="flex items-center gap-2 mb-3">
                      {l.equityPct != null && (
                        <span className="flex items-center gap-1 text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-1 rounded-lg">
                          <TrendingUp size={10} /> {fmtPct(l.equityPct)} equity
                        </span>
                      )}
                      {l.estimatedRoi != null && (
                        <span className="flex items-center gap-1 text-xs bg-sky-500/10 border border-sky-500/20 text-sky-400 px-2 py-1 rounded-lg">
                          <Tag size={10} /> {fmtPct(l.estimatedRoi)} ROI
                        </span>
                      )}
                    </div>
                  )}

                  {/* Days on market */}
                  <p className="text-slate-600 text-xs mb-3">{l.daysOnMarket} days on market</p>

                  {/* CTA */}
                  {l.blurred ? (
                    <button onClick={() => { setUpgradeFeature('Marketplace full access'); setShowUpgrade(true) }}
                      className="w-full flex items-center justify-center gap-2 bg-violet-600/20 border border-violet-500/20 text-violet-400 hover:bg-violet-600/30 font-semibold py-2 rounded-lg text-sm transition-colors">
                      <Lock size={12} /> Unlock to View
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <Link href={`/marketplace/${l.id}`}
                        className="flex-1 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold py-2 rounded-lg text-sm text-center transition-colors">
                        View Details
                      </Link>
                      <button onClick={() => { setOfferModal(l); setOfferAmount(''); setOfferMsg(''); setOfferDone(false) }}
                        className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2 rounded-lg text-sm transition-colors">
                        Make Offer
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Elite CTA for non-elite users */}
        {tier !== 'elite' && listings.length > 0 && (
          <div className="mt-10 bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-orange-900/30 border border-amber-500/20 rounded-2xl p-8 text-center">
            <Crown className="text-amber-400 mx-auto mb-3" size={36} />
            <h3 className="text-white font-black text-xl mb-2">Have a deal to sell?</h3>
            <p className="text-slate-400 max-w-md mx-auto mb-4 text-sm">
              Elite members list properties <strong className="text-white">for free</strong> — you only pay a 2.5% transaction fee on close. The marketplace is your exit ramp.
            </p>
            <button onClick={() => { setUpgradeFeature('Listing on the Marketplace (Elite plan)'); setShowUpgrade(true) }}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-3 rounded-xl text-base transition-colors">
              Upgrade to Elite — $79/mo →
            </button>
            <p className="text-slate-600 text-xs mt-3">No listing fee. Pay 2.5% only when you close.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function MarketplacePage() {
  return <Suspense><MarketplaceContent /></Suspense>
}
