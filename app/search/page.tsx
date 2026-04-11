'use client'
import { useState, useEffect } from 'react'
import { Search, Filter, Download, Map as MapIcon, List, SlidersHorizontal, Database } from 'lucide-react'
import Link from 'next/link'

interface Listing {
  id: string
  type: 'foreclosure' | 'tax-lien' | 'tax-deed'
  address: string
  city: string
  county: string
  state: string
  zip?: string
  parcelId?: string
  propertyType?: string
  auctionDate?: string
  openingBid?: number
  lienAmount?: number
  interestRate?: number
  status: string
  scrapedAt: string
  sourceUrl?: string
  lender?: string
  saleType?: string
}

const TYPE_STYLES: Record<string, { label: string; color: string; bg: string }> = {
  foreclosure: { label: 'Foreclosure', color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20' },
  'tax-lien': { label: 'Tax Lien', color: 'text-sky-400', bg: 'bg-sky-400/10 border-sky-400/20' },
  'tax-deed': { label: 'Tax Deed', color: 'text-violet-400', bg: 'bg-violet-400/10 border-violet-400/20' },
}

const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC']

function formatCurrency(n?: number | null) {
  if (n == null) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function formatDate(s?: string | null) {
  if (!s) return '—'
  return new Date(s).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    scheduled: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    available: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    sold: 'bg-slate-700 text-slate-400 border-slate-600',
    cancelled: 'bg-red-400/10 text-red-400 border-red-400/20',
    postponed: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    redeemed: 'bg-slate-700 text-slate-400 border-slate-600',
  }
  return (
    <span className={`inline-block border px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${map[status] || 'bg-slate-700 text-slate-400 border-slate-600'}`}>
      {status}
    </span>
  )
}

export default function SearchPage() {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [view, setView] = useState<'list' | 'grid'>('list')
  const [showFilters, setShowFilters] = useState(false)

  const [filters, setFilters] = useState({
    q: '',
    state: '',
    county: '',
    type: '',
    minBid: '',
    maxBid: '',
    dateFrom: '',
    dateTo: '',
    status: '',
  })

  const fetchListings = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        ...Object.fromEntries(Object.entries(filters).filter(([, v]) => v)),
        page: String(page),
        limit: '25',
      })
      const res = await fetch(`/api/listings?${params}`)
      const data = await res.json()
      setListings(data.listings || [])
      setTotal(data.total || 0)
    } catch {
      setListings([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchListings() }, [filters, page])

  const updateFilter = (key: string, value: string) => {
    setFilters(f => ({ ...f, [key]: value }))
    setPage(1)
  }

  const exportCSV = async () => {
    const params = new URLSearchParams({ ...Object.fromEntries(Object.entries(filters).filter(([, v]) => v)), format: 'csv' })
    window.open(`/api/listings?${params}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top Nav */}
      <nav className="border-b border-slate-800 px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-emerald-500 rounded-md flex items-center justify-center font-black text-slate-950 text-xs">LS</div>
          <span className="font-bold text-white">LienScope</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/admin" className="text-slate-400 hover:text-white text-sm transition-colors">Admin</Link>
          <button onClick={exportCSV} className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
            <Download size={14} /> Export CSV
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="flex gap-3 mb-4">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search by address, parcel ID, county, city..."
              value={filters.q}
              onChange={e => updateFilter('q', e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 text-sm"
            />
          </div>
          <button
            onClick={() => setShowFilters(f => !f)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${showFilters ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'}`}
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
          <div className="flex border border-slate-700 rounded-xl overflow-hidden">
            <button onClick={() => setView('list')} className={`px-3 py-3 ${view === 'list' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-300'} transition-colors`}>
              <List size={16} />
            </button>
            <button onClick={() => setView('grid')} className={`px-3 py-3 ${view === 'grid' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-300'} transition-colors`}>
              <MapIcon size={16} />
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 mb-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <select value={filters.state} onChange={e => updateFilter('state', e.target.value)} className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500">
              <option value="">All States</option>
              {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>

            <input placeholder="County" value={filters.county} onChange={e => updateFilter('county', e.target.value)} className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 placeholder:text-slate-500" />

            <select value={filters.type} onChange={e => updateFilter('type', e.target.value)} className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500">
              <option value="">All Types</option>
              <option value="foreclosure">Foreclosure</option>
              <option value="tax-lien">Tax Lien</option>
              <option value="tax-deed">Tax Deed</option>
            </select>

            <input placeholder="Min Bid ($)" type="number" value={filters.minBid} onChange={e => updateFilter('minBid', e.target.value)} className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 placeholder:text-slate-500" />

            <input placeholder="Max Bid ($)" type="number" value={filters.maxBid} onChange={e => updateFilter('maxBid', e.target.value)} className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 placeholder:text-slate-500" />

            <select value={filters.status} onChange={e => updateFilter('status', e.target.value)} className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500">
              <option value="">All Statuses</option>
              <option value="scheduled">Scheduled</option>
              <option value="available">Available</option>
              <option value="sold">Sold</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-slate-400 text-sm">
            {loading ? 'Loading...' : <><span className="text-white font-semibold">{total.toLocaleString()}</span> listings found</>}
          </p>
          <div className="flex gap-2">
            {Object.entries(TYPE_STYLES).map(([type, style]) => (
              <button
                key={type}
                onClick={() => updateFilter('type', filters.type === type ? '' : type)}
                className={`text-xs font-semibold border px-3 py-1 rounded-full transition-colors ${filters.type === type ? style.bg + ' ' + style.color : 'border-slate-700 text-slate-400 hover:border-slate-500'}`}
              >
                {style.label}
              </button>
            ))}
          </div>
        </div>

        {/* Listings */}
        {loading ? (
          <div className="space-y-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-20 bg-slate-900 border border-slate-800 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : listings.length === 0 ? (
          <div className="text-center py-24">
            <Database size={48} className="text-slate-700 mx-auto mb-4" />
            <p className="text-slate-400 text-lg font-semibold">No listings found</p>
            <p className="text-slate-600 text-sm mt-2">Try adjusting your search filters or run a scraper in the Admin panel</p>
            <Link href="/admin" className="inline-block mt-4 bg-emerald-500 text-slate-950 font-semibold px-6 py-2 rounded-lg text-sm hover:bg-emerald-400 transition-colors">
              Go to Admin →
            </Link>
          </div>
        ) : (
          <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-2'}>
            {listings.map(listing => {
              const typeStyle = TYPE_STYLES[listing.type] || TYPE_STYLES['foreclosure']
              const amount = listing.openingBid ?? listing.lienAmount
              const date = listing.auctionDate ?? (listing as any).saleDate

              if (view === 'grid') {
                return (
                  <div key={listing.id} className="bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-xl p-5 transition-colors group">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs font-semibold border px-2 py-0.5 rounded-full ${typeStyle.bg} ${typeStyle.color}`}>{typeStyle.label}</span>
                      <StatusBadge status={listing.status} />
                    </div>
                    <p className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-emerald-400 transition-colors">{listing.address}</p>
                    <p className="text-slate-400 text-xs mb-3">{listing.city}, {listing.county} County, {listing.state} {listing.zip}</p>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-emerald-400 font-bold text-xl">{formatCurrency(amount)}</p>
                        {listing.type === 'tax-lien' && listing.interestRate && (
                          <p className="text-amber-400 text-xs">{listing.interestRate}% interest rate</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-slate-500 text-xs">{listing.type === 'foreclosure' ? 'Auction' : 'Sale'}</p>
                        <p className="text-slate-300 text-xs font-medium">{formatDate(date)}</p>
                      </div>
                    </div>
                    {listing.sourceUrl && (
                      <a href={listing.sourceUrl} target="_blank" rel="noopener noreferrer" className="block mt-3 text-xs text-slate-500 hover:text-emerald-400 transition-colors">
                        View Source →
                      </a>
                    )}
                  </div>
                )
              }

              return (
                <div key={listing.id} className="bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-xl px-5 py-4 flex items-center gap-4 transition-colors group">
                  <span className={`hidden md:inline-block text-xs font-semibold border px-2 py-0.5 rounded-full whitespace-nowrap ${typeStyle.bg} ${typeStyle.color}`}>
                    {typeStyle.label}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm truncate group-hover:text-emerald-400 transition-colors">{listing.address}</p>
                    <p className="text-slate-500 text-xs">{listing.city}, {listing.county} Co., {listing.state} {listing.zip}</p>
                  </div>
                  {listing.parcelId && <p className="hidden lg:block text-slate-600 text-xs font-mono truncate max-w-[120px]">{listing.parcelId}</p>}
                  <StatusBadge status={listing.status} />
                  <div className="text-right hidden sm:block">
                    <p className="text-slate-400 text-xs">{listing.type === 'foreclosure' ? 'Auction' : 'Sale'}</p>
                    <p className="text-slate-300 text-xs">{formatDate(date)}</p>
                  </div>
                  <div className="text-right min-w-[90px]">
                    <p className="text-emerald-400 font-bold text-base">{formatCurrency(amount)}</p>
                    {listing.type === 'tax-lien' && listing.interestRate && (
                      <p className="text-amber-400 text-xs">{listing.interestRate}%</p>
                    )}
                  </div>
                  {listing.sourceUrl && (
                    <a href={listing.sourceUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="hidden md:block text-slate-600 hover:text-emerald-400 transition-colors text-xs">→</a>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Pagination */}
        {total > 25 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="border border-slate-700 disabled:opacity-30 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors">← Prev</button>
            <span className="text-slate-400 text-sm">Page {page} of {Math.ceil(total / 25)}</span>
            <button onClick={() => setPage(p => p + 1)} disabled={page >= Math.ceil(total / 25)} className="border border-slate-700 disabled:opacity-30 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors">Next →</button>
          </div>
        )}
      </div>
    </div>
  )
}
