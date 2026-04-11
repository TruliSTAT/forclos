'use client'
import dynamic from 'next/dynamic'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { NavBar } from '@/components/NavBar'
import { calcDealScore } from '@/lib/deal-score'
import { List, Grid3X3, Map as MapIcon, SlidersHorizontal } from 'lucide-react'

// Leaflet must be dynamically imported (no SSR)
const MapContainer = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false })
const TileLayer    = dynamic(() => import('react-leaflet').then(m => m.TileLayer),    { ssr: false })
const Marker       = dynamic(() => import('react-leaflet').then(m => m.Marker),       { ssr: false })
const Popup        = dynamic(() => import('react-leaflet').then(m => m.Popup),        { ssr: false })
const CircleMarker = dynamic(() => import('react-leaflet').then(m => m.CircleMarker), { ssr: false })

const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC']

function fmt$(n?: number | null) {
  if (n == null) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function MapContent() {
  const searchParams = useSearchParams()
  const [listings, setListings] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState<'map' | 'list' | 'grid'>('map')
  const [mapLoaded, setMapLoaded] = useState(false)

  const [filters, setFilters] = useState({
    state: searchParams.get('state') || '',
    county: '',
    type: searchParams.get('type') || '',
    minBid: '',
    maxBid: '',
    minEquity: '',
  })
  const f = (k: string, v: string) => setFilters(p => ({ ...p, [k]: v }))
  const [showFilters, setShowFilters] = useState(false)

  const fetch_ = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({ limit: '200', ...Object.fromEntries(Object.entries(filters).filter(([, v]) => v)) })
      const res = await fetch(`/api/listings?${params}`)
      const data = await res.json()
      setListings((data.listings || []).filter((l: any) => l.lat && l.lng))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetch_() }, [filters])
  useEffect(() => { setMapLoaded(true) }, [])

  const scored = listings.map(l => ({ ...l, _score: calcDealScore(l) }))

  const dotColor = (grade: string) =>
    grade === 'hot' ? '#10b981' : grade === 'warm' ? '#f59e0b' : '#ef4444'

  const center: [number, number] = [38.5, -96]

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <NavBar />

      {/* Toolbar */}
      <div className="border-b border-slate-800 px-4 py-3 flex items-center gap-3 bg-slate-900/80">
        <div className="flex border border-slate-700 rounded-lg overflow-hidden">
          {([['map', 'map'], ['list', 'list'], ['grid', 'grid']] as const).map(([v]) => (
            <button key={v} onClick={() => setView(v as any)}
              className={`px-3 py-2 text-sm transition-colors ${view === v ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-white'}`}>
              {v === 'map' ? <MapIcon size={15} /> : v === 'list' ? <List size={15} /> : <Grid3X3 size={15} />}
            </button>
          ))}
        </div>
        <button onClick={() => setShowFilters(f => !f)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm transition-colors ${showFilters ? 'bg-slate-800 border-slate-600 text-white' : 'border-slate-700 text-slate-400'}`}>
          <SlidersHorizontal size={14} /> Filters
        </button>

        {showFilters && (
          <div className="flex items-center gap-2 flex-wrap">
            <select value={filters.state} onChange={e => f('state', e.target.value)}
              className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm">
              <option value="">All States</option>
              {US_STATES.map(s => <option key={s}>{s}</option>)}
            </select>
            <input placeholder="County" value={filters.county} onChange={e => f('county', e.target.value)}
              className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm w-32 placeholder:text-slate-600" />
            <select value={filters.type} onChange={e => f('type', e.target.value)}
              className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm">
              <option value="">All Types</option>
              <option value="foreclosure">Foreclosure</option>
              <option value="tax-lien">Tax Lien</option>
              <option value="deed-lien">Deed / Lien</option>
            </select>
            <input type="number" placeholder="Min Equity %" value={filters.minEquity} onChange={e => f('minEquity', e.target.value)}
              className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm w-32 placeholder:text-slate-600" />
          </div>
        )}

        <div className="ml-auto flex items-center gap-3 text-sm text-slate-500">
          {loading ? 'Loading…' : <><span className="text-white font-semibold">{scored.length}</span> pinned</>}
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" /> Hot 71+</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Warm 41-70</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" /> Cold 0-40</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 relative">
        {view === 'map' && mapLoaded && (
          <div className="absolute inset-0">
            <MapContainer
              center={center}
              zoom={4}
              style={{ height: '100%', width: '100%', background: '#0f172a' }}
              className="z-0"
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
                maxZoom={19}
              />
              {scored.map(l => (
                <CircleMarker
                  key={l.id}
                  center={[l.lat, l.lng]}
                  radius={8}
                  pathOptions={{
                    fillColor: dotColor(l._score.grade),
                    fillOpacity: 0.85,
                    color: dotColor(l._score.grade),
                    weight: 1,
                  }}
                >
                  <Popup>
                    <div style={{ minWidth: 220, color: '#1e293b' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ fontWeight: 700, fontSize: 13 }}>
                          {l._score.emoji} Deal Score: <span style={{ color: dotColor(l._score.grade) }}>{l._score.score}</span>
                        </span>
                        <span style={{ fontSize: 11, background: '#f1f5f9', padding: '2px 6px', borderRadius: 4 }}>
                          {l.type}
                        </span>
                      </div>
                      <p style={{ fontWeight: 600, fontSize: 12, margin: '0 0 2px' }}>{l.address}</p>
                      <p style={{ fontSize: 11, color: '#64748b', margin: '0 0 8px' }}>{l.city}, {l.county} Co, {l.state}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, fontSize: 12 }}>
                        <div>
                          <p style={{ color: '#64748b', margin: 0 }}>Bid / Lien</p>
                          <p style={{ fontWeight: 700, color: '#059669', margin: 0 }}>{fmt$(l.openingBid ?? l.lienAmount)}</p>
                        </div>
                        <div>
                          <p style={{ color: '#64748b', margin: 0 }}>Est. Value</p>
                          <p style={{ fontWeight: 700, margin: 0 }}>{fmt$(l.estimatedValue)}</p>
                        </div>
                      </div>
                      {l.auctionDate && (
                        <p style={{ fontSize: 11, color: '#64748b', marginTop: 6 }}>
                          Auction: {new Date(l.auctionDate).toLocaleDateString()}
                        </p>
                      )}
                      {l.sourceUrl && (
                        <a href={l.sourceUrl} target="_blank" rel="noopener noreferrer"
                          style={{ display: 'block', marginTop: 8, fontSize: 11, color: '#059669', textDecoration: 'none' }}>
                          View Source →
                        </a>
                      )}
                    </div>
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>
        )}

        {view !== 'map' && (
          <div className="max-w-screen-2xl mx-auto px-4 py-4">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => <div key={i} className="h-40 bg-slate-900 border border-slate-800 rounded-xl animate-pulse" />)}
              </div>
            ) : (
              <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-2'}>
                {scored.map(l => <ListingCard key={l.id} l={l} view={view} />)}
              </div>
            )}
          </div>
        )}

        {view === 'map' && scored.length === 0 && !loading && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-6 text-center">
              <p className="text-slate-300 font-semibold">No geocoded listings found</p>
              <p className="text-slate-500 text-sm mt-1">Most listings don&apos;t yet have lat/lng — add geocoding to scrapers</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function ListingCard({ l, view }: { l: any, view: 'list' | 'grid' }) {
  const score = l._score
  if (view === 'list') {
    return (
      <div className="bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-xl px-5 py-4 flex items-center gap-4 transition-all">
        <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl ${score.grade === 'hot' ? 'bg-emerald-500/10' : score.grade === 'warm' ? 'bg-amber-500/10' : 'bg-red-500/10'}`}>
          <span className={score.color}>{score.score}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm truncate">{l.address}</p>
          <p className="text-slate-500 text-xs">{l.city}, {l.county} Co, {l.state} · {l.type}</p>
        </div>
        <p className="text-emerald-400 font-black text-lg shrink-0">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(l.openingBid ?? l.lienAmount ?? 0)}
        </p>
      </div>
    )
  }
  return (
    <div className="bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-2xl p-5 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl ${score.grade === 'hot' ? 'bg-emerald-500/10 border border-emerald-500/20' : score.grade === 'warm' ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
          <span className={`font-black text-2xl ${score.color}`}>{score.score}</span>
          <div className="text-xs">
            <p className={`font-semibold ${score.color}`}>{score.emoji} {score.grade.toUpperCase()}</p>
            <p className="text-slate-500">Deal Score</p>
          </div>
        </div>
        <span className="text-xs bg-slate-800 border border-slate-700 text-slate-400 px-2 py-1 rounded-full capitalize">{l.type}</span>
      </div>
      <p className="text-white font-semibold text-sm mb-1">{l.address}</p>
      <p className="text-slate-500 text-xs mb-3">{l.city}, {l.state}</p>
      <p className="text-emerald-400 font-black text-xl">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(l.openingBid ?? l.lienAmount ?? 0)}
      </p>
    </div>
  )
}

export default function MapPage() {
  return <Suspense><MapContent /></Suspense>
}
