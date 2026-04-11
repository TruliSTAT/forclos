'use client'
import { useState, useEffect, Suspense } from 'react'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft, MapPin, Calendar, DollarSign, TrendingUp, Home, Tag,
  ExternalLink, Plus, Star, Share2, Copy, Check, AlertTriangle, Zap,
} from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { UpgradeModal } from '@/components/UpgradeModal'
import { DealScoreBadge } from '@/components/DealScore'

function fmt$(n?: number | null) {
  if (n == null) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}
function fmtDate(d?: string | null) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function ListingDetailContent() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = params.id as string
  const type = searchParams.get('type') || 'foreclosure'

  const [listing, setListing] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [upgradeFeature, setUpgradeFeature] = useState('')
  const [copied, setCopied] = useState(false)
  const [addedToPortfolio, setAddedToPortfolio] = useState(false)
  const [similar, setSimilar] = useState<any[]>([])

  useEffect(() => {
    loadListing()
  }, [id, type])

  const loadListing = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/listings/${id}?type=${type}`)
      if (!res.ok) { setNotFound(true); return }
      const data = await res.json()
      if (!data.listing) { setNotFound(true); return }
      setListing(data.listing)

      // Load similar listings
      const simRes = await fetch(`/api/listings?state=${data.listing.state}&type=${type}&limit=4`)
      const simData = await simRes.json()
      setSimilar((simData.listings || []).filter((l: any) => l.id !== id).slice(0, 3))
    } finally {
      setLoading(false)
    }
  }

  const copyAddress = async () => {
    if (!listing) return
    await navigator.clipboard.writeText(`${listing.address}, ${listing.city}, ${listing.state} ${listing.zip || ''}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const addToPortfolio = async () => {
    const res = await fetch('/api/portfolio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        address: listing.address,
        city: listing.city,
        state: listing.state,
        county: listing.county,
        zip: listing.zip,
        propertyType: listing.propertyType,
        listingType: type === 'foreclosure' ? 'foreclosure' : type === 'tax-lien' ? 'tax-lien' : 'tax-deed',
        purchasePrice: listing.openingBid ?? listing.lienAmount ?? 0,
        interestRate: listing.interestRate,
        redemptionPeriodMonths: listing.redemptionPeriodMonths,
        certNumber: listing.certificateNumber,
      }),
    })
    const data = await res.json()
    if (data.error === 'Elite plan required') {
      setUpgradeFeature('Portfolio Tracker (Elite plan)')
      setShowUpgrade(true)
      return
    }
    if (data.property) {
      setAddedToPortfolio(true)
      setTimeout(() => setAddedToPortfolio(false), 3000)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <NavBar />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="h-8 bg-slate-800 rounded-lg w-48 mb-6 animate-pulse" />
          <div className="h-64 bg-slate-900 border border-slate-800 rounded-2xl animate-pulse" />
        </div>
      </div>
    )
  }

  if (notFound || !listing) {
    return (
      <div className="min-h-screen bg-slate-950">
        <NavBar />
        <div className="text-center py-24">
          <p className="text-5xl mb-4">🏚️</p>
          <h1 className="text-white font-bold text-2xl mb-2">Listing not found</h1>
          <p className="text-slate-400 mb-6">This property may have been removed or sold.</p>
          <Link href="/search" className="bg-emerald-500 text-slate-950 font-bold px-6 py-3 rounded-xl hover:bg-emerald-400">
            Back to Search →
          </Link>
        </div>
      </div>
    )
  }

  const amount = listing.openingBid ?? listing.lienAmount
  const typeLabel = type === 'foreclosure' ? '🏚️ Foreclosure' : type === 'tax-lien' ? '🏷️ Tax Lien' : '📋 Tax Deed'

  const daysToAuction = listing.auctionDate || listing.saleDate
    ? Math.ceil((new Date(listing.auctionDate || listing.saleDate).getTime() - Date.now()) / 86400000)
    : null

  return (
    <div className="min-h-screen bg-slate-950">
      <NavBar />
      {showUpgrade && <UpgradeModal feature={upgradeFeature} onClose={() => setShowUpgrade(false)} />}

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/search" className="hover:text-white flex items-center gap-1 transition-colors">
            <ArrowLeft size={14} /> Search
          </Link>
          <span>/</span>
          <span>{listing.state}</span>
          <span>/</span>
          <span className="text-slate-300 truncate max-w-[200px]">{listing.address}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-5">

            {/* Header card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-slate-800 border border-slate-700 text-slate-300 px-2 py-1 rounded-full font-semibold">
                      {typeLabel}
                    </span>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      listing.status === 'scheduled' || listing.status === 'available'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}>
                      {listing.status}
                    </span>
                    {daysToAuction != null && daysToAuction > 0 && daysToAuction <= 7 && (
                      <span className="text-xs font-bold bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-1 rounded-full flex items-center gap-1">
                        <AlertTriangle size={10} /> {daysToAuction}d left
                      </span>
                    )}
                  </div>
                  <h1 className="text-xl font-black text-white">{listing.address}</h1>
                  <p className="text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin size={13} /> {listing.city}, {listing.state} {listing.zip || ''} · {listing.county} County
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-3xl font-black text-white">{fmt$(amount)}</p>
                  {listing.estimatedValue && (
                    <p className="text-slate-500 text-sm">est. value {fmt$(listing.estimatedValue)}</p>
                  )}
                </div>
              </div>

              {/* Property specs */}
              {(listing.bedrooms || listing.bathrooms || listing.sqft || listing.yearBuilt || listing.propertyType) && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
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

            {/* Financial details */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-white font-bold mb-4 flex items-center gap-2">
                <DollarSign size={16} className="text-emerald-400" /> Financial Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  type === 'foreclosure' && { label: 'Opening Bid', value: fmt$(listing.openingBid), highlight: true },
                  type !== 'foreclosure' && { label: 'Lien Amount', value: fmt$(listing.lienAmount), highlight: true },
                  { label: 'Estimated Value', value: fmt$(listing.estimatedValue) },
                  { label: 'Assessed Value', value: fmt$(listing.assessedValue) },
                  listing.equityPct != null && { label: 'Equity %', value: `${listing.equityPct.toFixed(1)}%`, color: 'text-emerald-400' },
                  listing.estimatedRoi != null && { label: 'Est. ROI', value: `${listing.estimatedRoi.toFixed(1)}%`, color: 'text-emerald-400' },
                  listing.interestRate && { label: 'Interest Rate', value: `${listing.interestRate}%`, color: 'text-sky-400' },
                  listing.penaltyRate && { label: 'Penalty Rate', value: `${listing.penaltyRate}%` },
                  listing.defaultAmount && { label: 'Default Amount', value: fmt$(listing.defaultAmount) },
                  listing.originalLoanAmount && { label: 'Orig. Loan', value: fmt$(listing.originalLoanAmount) },
                  listing.taxDelinquencyAmount && { label: 'Delinquency', value: fmt$(listing.taxDelinquencyAmount) },
                  listing.yearsDelinquent && { label: 'Yrs Delinquent', value: `${listing.yearsDelinquent} yrs` },
                  listing.redemptionPeriodMonths && { label: 'Redemption', value: `${listing.redemptionPeriodMonths} mo` },
                ].filter(Boolean).map((item: any) => (
                  <div key={item.label} className="bg-slate-800 rounded-xl p-3">
                    <p className="text-slate-500 text-xs mb-0.5">{item.label}</p>
                    <p className={`font-bold text-sm ${item.color || (item.highlight ? 'text-white text-base' : 'text-slate-200')}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Auction/Sale Details */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-white font-bold mb-4 flex items-center gap-2">
                <Calendar size={16} className="text-violet-400" /> Auction Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  listing.auctionDate && { label: 'Auction Date', value: fmtDate(listing.auctionDate), highlight: daysToAuction != null && daysToAuction <= 30 },
                  listing.saleDate && { label: 'Sale Date', value: fmtDate(listing.saleDate) },
                  listing.auctionType && { label: 'Auction Type', value: listing.auctionType },
                  listing.auctionPlatform && { label: 'Platform', value: listing.auctionPlatform },
                  listing.foreclosureType && { label: 'FC Type', value: listing.foreclosureType },
                  listing.caseNumber && { label: 'Case #', value: listing.caseNumber },
                  listing.certificateNumber && { label: 'Cert #', value: listing.certificateNumber },
                  listing.lender && { label: 'Lender', value: listing.lender },
                  listing.plaintiff && { label: 'Plaintiff', value: listing.plaintiff },
                  listing.filingDate && { label: 'Filed', value: fmtDate(listing.filingDate) },
                  listing.daysSinceFiling && { label: 'Days Filed', value: `${listing.daysSinceFiling} days` },
                  listing.overbidAllowed != null && { label: 'Overbid', value: listing.overbidAllowed ? '✓ Allowed' : '✗ No' },
                  listing.yearOfTax && { label: 'Tax Year', value: listing.yearOfTax },
                ].filter(Boolean).map((item: any) => (
                  <div key={item.label} className={`rounded-xl p-3 ${item.highlight ? 'bg-red-500/10 border border-red-500/20' : 'bg-slate-800'}`}>
                    <p className="text-slate-500 text-xs mb-0.5">{item.label}</p>
                    <p className={`font-semibold text-sm ${item.highlight ? 'text-red-400' : 'text-slate-200'}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {listing.sourceUrl && (
                <a href={listing.sourceUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                  <ExternalLink size={14} /> View original source listing
                </a>
              )}
            </div>

            {/* Similar listings */}
            {similar.length > 0 && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-white font-bold mb-4">Similar in {listing.state}</h2>
                <div className="space-y-2">
                  {similar.map(l => (
                    <Link key={l.id} href={`/listings/${l.id}?type=${l.type}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors group">
                      <span className="text-lg">{l.type === 'foreclosure' ? '🏚️' : '🏷️'}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-slate-300 text-sm font-medium truncate group-hover:text-white">{l.address}</p>
                        <p className="text-slate-500 text-xs">{l.city}, {l.state}</p>
                      </div>
                      <p className="text-white font-bold text-sm shrink-0">
                        {fmt$(l.openingBid ?? l.lienAmount)}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Deal Score */}
            {listing && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">AI Deal Score</p>
                <DealScoreBadge
                  listing={{
                    equityPct: listing.equityPct,
                    estimatedRoi: listing.estimatedRoi,
                    yearsDelinquent: listing.yearsDelinquent,
                    interestRate: listing.interestRate,
                    state: listing.state,
                    auctionDate: listing.auctionDate,
                    saleDate: listing.saleDate,
                    propertyType: listing.propertyType,
                    openingBid: listing.openingBid,
                    estimatedValue: listing.estimatedValue,
                    lienAmount: listing.lienAmount,
                  }}
                  size="lg"
                  showBreakdown
                  canSeeBreakdown
                />
              </div>
            )}

            {/* Actions */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
              <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Actions</h3>

              {listing.sourceUrl && (
                <a href={listing.sourceUrl} target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl text-sm transition-colors">
                  <ExternalLink size={14} /> Bid / View Source
                </a>
              )}

              <button onClick={addToPortfolio}
                className={`w-full flex items-center justify-center gap-2 border font-semibold py-2.5 rounded-xl text-sm transition-colors ${
                  addedToPortfolio
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'border-slate-700 hover:border-emerald-500/30 hover:text-emerald-400 text-slate-300'
                }`}>
                {addedToPortfolio ? <><Check size={14} /> Added to Portfolio</> : <><Plus size={14} /> Add to Portfolio</>}
              </button>

              <button onClick={copyAddress}
                className="w-full flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold py-2.5 rounded-xl text-sm transition-colors">
                {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy Address</>}
              </button>

              <Link href={`/search?state=${listing.state}&type=${type}`}
                className="w-full flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                <Tag size={14} /> More in {listing.state}
              </Link>
            </div>

            {/* Get funding */}
            <div className="bg-gradient-to-br from-sky-900/30 to-blue-900/20 border border-sky-500/20 rounded-2xl p-5">
              <TrendingUp className="text-sky-400 mb-2" size={20} />
              <h3 className="text-white font-bold mb-1">Need Funding?</h3>
              <p className="text-slate-400 text-xs mb-3 leading-relaxed">
                Hard money, bridge, and DSCR lenders for investors. Apply in minutes.
              </p>
              <Link href="/funding" className="flex items-center justify-center gap-2 bg-sky-600/30 border border-sky-500/30 hover:bg-sky-600/50 text-sky-300 font-semibold py-2 rounded-xl text-sm transition-colors">
                View Lenders →
              </Link>
            </div>

            {/* Scrap metadata */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <p className="text-slate-600 text-xs">Scraped {fmtDate(listing.scrapedAt)}</p>
              {listing.parcelId && <p className="text-slate-600 text-xs mt-1">Parcel: {listing.parcelId}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ListingDetailPage() {
  return <Suspense fallback={<div className="min-h-screen bg-slate-950" />}><ListingDetailContent /></Suspense>
}
