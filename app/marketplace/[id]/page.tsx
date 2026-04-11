'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft, MapPin, Home, DollarSign, TrendingUp, Tag, Crown, Lock,
  MessageSquare, Send, User, CheckCircle, ExternalLink, Share2,
} from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { UpgradeModal } from '@/components/UpgradeModal'

function fmt$(n?: number | null) {
  if (n == null) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}
function fmtDate(d?: string | null) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const TYPE_LABELS: Record<string, string> = {
  'tax-deed': '📋 Tax Deed',
  'tax-lien': '🏷️ Tax Lien',
  'reo': '🏦 REO',
  'foreclosure': '🏚️ Foreclosure',
  'mechanic-lien': '🔧 Mechanic Lien',
  'judgment-lien': '⚖️ Judgment Lien',
}

export default function MarketplaceListingDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const [listing, setListing] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [upgradeFeature, setUpgradeFeature] = useState('')

  // Offer state
  const [offerAmount, setOfferAmount] = useState('')
  const [offerMsg, setOfferMsg] = useState('')
  const [offerDone, setOfferDone] = useState(false)
  const [offerLoading, setOfferLoading] = useState(false)

  // Message state
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<any[]>([])
  const [msgLoading, setMsgLoading] = useState(false)

  useEffect(() => {
    loadListing()
  }, [id])

  const loadListing = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/marketplace/listings/${id}`)
      if (!res.ok) { setNotFound(true); return }
      const data = await res.json()
      if (!data.listing) { setNotFound(true); return }
      setListing(data.listing)

      // Load messages (if pro+)
      if (data.listing.tier !== 'free') {
        const msgRes = await fetch(`/api/marketplace/messages?listingId=${id}`)
        const msgData = await msgRes.json()
        setMessages(msgData.messages || [])
      }
    } finally {
      setLoading(false)
    }
  }

  const makeOffer = async () => {
    if (!offerAmount) return
    setOfferLoading(true)
    try {
      const res = await fetch('/api/marketplace/offers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listingId: id, offerAmount: parseFloat(offerAmount), message: offerMsg }),
      })
      const data = await res.json()
      if (data.error === 'Pro plan required to make offers') {
        setUpgradeFeature('Making offers on the Marketplace')
        setShowUpgrade(true)
        return
      }
      if (data.offer) setOfferDone(true)
    } finally {
      setOfferLoading(false)
    }
  }

  const sendMessage = async () => {
    if (!message.trim()) return
    setMsgLoading(true)
    try {
      const res = await fetch('/api/marketplace/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listingId: id, body: message }),
      })
      const data = await res.json()
      if (data.message) {
        setMessages(m => [...m, data.message])
        setMessage('')
      }
    } finally {
      setMsgLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <NavBar />
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="h-8 bg-slate-800 rounded-lg w-48 mb-6 animate-pulse" />
          <div className="h-80 bg-slate-900 border border-slate-800 rounded-2xl animate-pulse" />
        </div>
      </div>
    )
  }

  if (notFound || !listing) {
    return (
      <div className="min-h-screen bg-slate-950">
        <NavBar />
        <div className="text-center py-24">
          <p className="text-5xl mb-4">🤝</p>
          <h1 className="text-white font-bold text-2xl mb-2">Listing not found</h1>
          <Link href="/marketplace" className="bg-emerald-500 text-slate-950 font-bold px-6 py-3 rounded-xl hover:bg-emerald-400">
            Back to Marketplace →
          </Link>
        </div>
      </div>
    )
  }

  const canSee = !listing.blurred

  return (
    <div className="min-h-screen bg-slate-950">
      <NavBar />
      {showUpgrade && <UpgradeModal feature={upgradeFeature} onClose={() => setShowUpgrade(false)} />}

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/marketplace" className="hover:text-white flex items-center gap-1"><ArrowLeft size={14} /> Marketplace</Link>
          <span>/</span>
          <span className="text-slate-300 truncate">{canSee ? listing.address : `${listing.city}, ${listing.state}`}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main */}
          <div className="lg:col-span-2 space-y-5">

            {/* Photo / Hero */}
            <div className="relative h-64 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              {listing.photos?.[0] && canSee ? (
                <img src={listing.photos[0]} alt={listing.address} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Home size={48} className="text-slate-700" />
                </div>
              )}
              {!canSee && (
                <div className="absolute inset-0 backdrop-blur-lg flex items-center justify-center bg-slate-900/70">
                  <div className="text-center">
                    <Lock size={32} className="text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-300 font-semibold">Pro plan required to view details</p>
                    <button onClick={() => { setUpgradeFeature('Full marketplace access'); setShowUpgrade(true) }}
                      className="mt-3 bg-violet-600 hover:bg-violet-500 text-white font-bold px-5 py-2 rounded-xl text-sm transition-colors">
                      Upgrade to Pro →
                    </button>
                  </div>
                </div>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="text-xs font-bold bg-slate-900/90 border border-slate-700 text-slate-300 px-2.5 py-1 rounded-full">
                  {TYPE_LABELS[listing.listingType] || listing.listingType}
                </span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  listing.status === 'active' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {listing.status}
                </span>
              </div>
              {listing.offerCount > 0 && (
                <span className="absolute top-4 right-4 text-xs font-bold bg-amber-500 text-slate-950 px-2.5 py-1 rounded-full">
                  {listing.offerCount} offer{listing.offerCount !== 1 ? 's' : ''}
                </span>
              )}
            </div>

            {/* Header */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-xl font-black text-white">
                    {canSee ? listing.address : `📍 ${listing.city}, ${listing.state}`}
                  </h1>
                  <p className="text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin size={13} /> {canSee ? `${listing.city}, ${listing.state} ${listing.zip || ''}` : `${listing.state}`}
                    {canSee && listing.county && ` · ${listing.county} County`}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-3xl font-black text-emerald-400">{fmt$(listing.askingPrice)}</p>
                  {listing.estimatedValue && <p className="text-slate-500 text-sm">est. {fmt$(listing.estimatedValue)}</p>}
                </div>
              </div>

              {/* Property details */}
              {(listing.bedrooms || listing.bathrooms || listing.sqft || listing.yearBuilt) && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 mt-4 border-t border-slate-800">
                  {[
                    listing.propertyType && { label: 'Type', value: listing.propertyType },
                    listing.bedrooms && { label: 'Beds', value: `${listing.bedrooms} bd` },
                    listing.bathrooms && { label: 'Baths', value: `${listing.bathrooms} ba` },
                    listing.sqft && { label: 'Sqft', value: listing.sqft.toLocaleString() },
                    listing.yearBuilt && { label: 'Built', value: listing.yearBuilt },
                    listing.lotSizeAcres && { label: 'Lot', value: `${listing.lotSizeAcres.toFixed(2)} ac` },
                  ].filter(Boolean).map((spec: any) => (
                    <div key={spec.label} className="bg-slate-800 rounded-xl p-3">
                      <p className="text-slate-500 text-xs mb-0.5">{spec.label}</p>
                      <p className="text-white font-semibold text-sm">{spec.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Deal financials */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-white font-bold mb-4 flex items-center gap-2">
                <DollarSign size={16} className="text-emerald-400" /> Deal Financials
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Asking Price', value: fmt$(listing.askingPrice), highlight: true },
                  { label: 'Estimated Value', value: fmt$(listing.estimatedValue) },
                  canSee && listing.purchasePricePaid && { label: 'Paid', value: fmt$(listing.purchasePricePaid) },
                  listing.equityPct != null && { label: 'Equity %', value: `${listing.equityPct.toFixed(1)}%`, color: 'text-emerald-400' },
                  listing.estimatedRoi != null && { label: 'Est. ROI', value: `${listing.estimatedRoi.toFixed(1)}%`, color: 'text-sky-400' },
                  { label: 'Days on Market', value: `${listing.daysOnMarket} days` },
                ].filter(Boolean).map((item: any) => item && (
                  <div key={item.label} className={`rounded-xl p-3 ${item.highlight ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-slate-800'}`}>
                    <p className="text-slate-500 text-xs mb-0.5">{item.label}</p>
                    <p className={`font-bold text-sm ${item.color || (item.highlight ? 'text-emerald-400' : 'text-slate-200')}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            {canSee && listing.description && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-white font-bold mb-3">About This Deal</h2>
                <p className="text-slate-300 text-sm leading-relaxed">{listing.description}</p>
                {listing.reasonForSelling && (
                  <div className="mt-4 bg-slate-800 rounded-xl p-4">
                    <p className="text-slate-500 text-xs mb-1">Why Selling</p>
                    <p className="text-slate-300 text-sm">{listing.reasonForSelling}</p>
                  </div>
                )}
              </div>
            )}

            {/* Messages thread */}
            {canSee && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-white font-bold mb-4 flex items-center gap-2">
                  <MessageSquare size={16} className="text-violet-400" /> Messages
                </h2>
                {messages.length === 0 ? (
                  <p className="text-slate-500 text-sm">No messages yet. Ask the seller a question.</p>
                ) : (
                  <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                    {messages.map(m => (
                      <div key={m.id} className="bg-slate-800 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <User size={12} className="text-slate-500" />
                          <span className="text-slate-500 text-xs">{m.sender?.name || m.sender?.email || 'User'}</span>
                          <span className="text-slate-600 text-xs ml-auto">{fmtDate(m.createdAt)}</span>
                        </div>
                        <p className="text-slate-300 text-sm">{m.body}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex gap-2">
                  <input
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && sendMessage()}
                    placeholder="Ask the seller a question…"
                    className="flex-1 bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 placeholder:text-slate-600"
                  />
                  <button onClick={sendMessage} disabled={!message.trim() || msgLoading}
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl transition-colors disabled:opacity-50">
                    <Send size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Seller */}
            {canSee && listing.seller && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Seller</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center">
                    <User size={18} className="text-slate-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{listing.seller.name || 'Anonymous'}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                      listing.seller.tier === 'elite' ? 'bg-amber-500/20 text-amber-400' : 'bg-violet-500/20 text-violet-400'
                    }`}>
                      {listing.seller.tier === 'elite' ? '👑 Elite' : 'Pro'} Member
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Make Offer */}
            {canSee && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Make an Offer</h3>
                {offerDone ? (
                  <div className="text-center py-4">
                    <CheckCircle className="text-emerald-400 mx-auto mb-2" size={32} />
                    <p className="text-white font-bold">Offer Submitted!</p>
                    <p className="text-slate-400 text-xs mt-1">The seller will be notified.</p>
                  </div>
                ) : listing.myOffer ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
                    <p className="text-emerald-400 text-sm font-semibold">Your offer: {fmt$(listing.myOffer.offerAmount)}</p>
                    <p className="text-slate-500 text-xs">Status: {listing.myOffer.status}</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-slate-800 rounded-lg p-3">
                      <p className="text-xs text-slate-500">Asking Price</p>
                      <p className="text-white font-black text-xl">{fmt$(listing.askingPrice)}</p>
                    </div>
                    <input
                      type="number"
                      value={offerAmount}
                      onChange={e => setOfferAmount(e.target.value)}
                      placeholder={`Your offer ($)`}
                      className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-500"
                    />
                    <textarea
                      value={offerMsg}
                      onChange={e => setOfferMsg(e.target.value)}
                      placeholder="Message to seller (optional)"
                      className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-500 resize-none h-20"
                    />
                    <button onClick={makeOffer} disabled={!offerAmount || offerLoading}
                      className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 rounded-xl text-sm transition-colors disabled:opacity-50">
                      {offerLoading ? 'Submitting…' : 'Submit Offer →'}
                    </button>
                    <p className="text-slate-600 text-xs text-center">Offers are non-binding until accepted</p>
                  </div>
                )}
              </div>
            )}

            {/* Blurred CTA */}
            {!canSee && (
              <div className="bg-gradient-to-br from-violet-900/40 to-violet-800/20 border border-violet-500/20 rounded-2xl p-5">
                <Lock className="text-violet-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">Upgrade to View</h3>
                <p className="text-slate-400 text-xs mb-3">Pro plan unlocks full property details, seller info, and the ability to make offers.</p>
                <button onClick={() => { setUpgradeFeature('Full marketplace access'); setShowUpgrade(true) }}
                  className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-2.5 rounded-xl text-sm transition-colors">
                  Upgrade to Pro →
                </button>
              </div>
            )}

            {/* Transaction fee note */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <p className="text-slate-500 text-xs leading-relaxed">
                Forclos charges a <strong className="text-amber-400">2.5% transaction fee</strong> on closed deals — paid by the seller at close.
              </p>
            </div>

            <Link href="/marketplace"
              className="flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold py-2.5 rounded-xl text-sm transition-colors">
              <ArrowLeft size={14} /> Back to Marketplace
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
