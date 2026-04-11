'use client'
import { useState, useEffect, useCallback, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Search, SlidersHorizontal, Download, BookmarkPlus, X, ChevronDown, ChevronUp, TrendingUp, Lock, Zap } from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { UpgradeModal } from '@/components/UpgradeModal'
import Link from 'next/link'

const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC']

type Tab = 'foreclosure' | 'tax-lien' | 'deed-lien'

interface Limits { advancedFilters: boolean; csvExport: boolean; dealAnalyzer: boolean; savedSearches: number }
interface Listing { [k: string]: any }

function fmt$(n?: number | null) {
  if (n == null) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}
function fmtPct(n?: number | null) {
  if (n == null) return '—'
  return `${n.toFixed(1)}%`
}
function fmtDate(s?: string | null) {
  if (!s) return '—'
  return new Date(s).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const TAB_CONFIG = {
  'foreclosure': { label: '🏚️ Foreclosures', color: 'text-red-400', border: 'border-red-500', bg: 'bg-red-500/10' },
  'tax-lien':    { label: '🏷️ Tax Liens',    color: 'text-sky-400', border: 'border-sky-500', bg: 'bg-sky-500/10' },
  'deed-lien':   { label: '📋 Deeds & Liens', color: 'text-violet-400', border: 'border-violet-500', bg: 'bg-violet-500/10' },
}

const STATUS_OPTS: Record<Tab, string[]> = {
  'foreclosure': ['scheduled','active','postponed','sold','redeemed','reo'],
  'tax-lien':    ['available','sold','redeemed'],
  'deed-lien':   ['available','sold','redeemed'],
}

const initFilters = () => ({
  q: '', state: '', county: '', city: '', zip: '',
  propType: '', minBeds: '', maxBeds: '', minBaths: '', maxBaths: '',
  minSqft: '', maxSqft: '', minLot: '', maxLot: '', minYearBlt: '', maxYearBlt: '',
  garage: '', pool: '',
  minBid: '', maxBid: '', minVal: '', maxVal: '',
  minEquity: '', minRoi: '', minRate: '', maxRate: '',
  minRedempt: '', maxRedempt: '',
  dateFrom: '', dateTo: '', auctionType: '', platform: '', status: '',
  fcType: '', lender: '', maxDaysFiled: '',
  lienMinYears: '', lienMaxYears: '', overbid: '', subsequent: '',
  sort: 'equity_desc',
})

function SearchContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [tab, setTab] = useState<Tab>((searchParams.get('tab') as Tab) || 'foreclosure')
  const [filters, setFilters] = useState(initFilters)
  const [listings, setListings] = useState<Listing[]>([])
  const [total, setTotal] = useState(0)
  const [pages, setPages] = useState(1)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [limits, setLimits] = useState<Limits>({ advancedFilters: false, csvExport: false, dealAnalyzer: false, savedSearches: 0 })
  const [showFilters, setShowFilters] = useState(true)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [upgradeFeature, setUpgradeFeature] = useState('')
  const [saveModalOpen, setSaveModalOpen] = useState(false)
  const [saveName, setSaveName] = useState('')
  const [saveAlerts, setSaveAlerts] = useState(false)
  const [dealListing, setDealListing] = useState<Listing | null>(null)
  const [repairCost, setRepairCost] = useState('')
  const [dealResults, setDealResults] = useState<null | { profit: number; roi: number; coc: number }>(null)
  const [upgradeMsg, setUpgradeMsg] = useState('')

  const f = (key: string, val: string) => setFilters(p => ({ ...p, [key]: val }))

  const fetchListings = useCallback(async (pg = 1) => {
    setLoading(true)
    try {
      const params = new URLSearchParams({ type: tab, page: String(pg), limit: '25', ...Object.fromEntries(Object.entries(filters).filter(([, v]) => v)) })
      const res = await fetch(`/api/listings?${params}`)
      const data = await res.json()
      if (data.error === 'Daily search limit reached') {
        setUpgradeFeature('Unlimited searches')
        setShowUpgrade(true)
        return
      }
      setListings(data.listings || [])
      setTotal(data.total || 0)
      setPages(data.pages || 1)
      setPage(pg)
      if (data.limits) setLimits(data.limits)
    } finally {
      setLoading(false)
    }
  }, [tab, filters])

  useEffect(() => { fetchListings(1) }, [tab, filters])

  const switchTab = (t: Tab) => {
    setTab(t)
    setPage(1)
    setFilters(initFilters())
    router.push(`/search?tab=${t}`, { scroll: false })
  }

  const guardPro = (feature: string) => {
    if (!limits.advancedFilters) {
      setUpgradeFeature(feature)
      setShowUpgrade(true)
      return false
    }
    return true
  }

  const exportCSV = async () => {
    if (!limits.csvExport) { setUpgradeFeature('CSV Export'); setShowUpgrade(true); return }
    const params = new URLSearchParams({ type: tab, format: 'csv', ...Object.fromEntries(Object.entries(filters).filter(([, v]) => v)) })
    window.open(`/api/listings?${params}`, '_blank')
  }

  const saveSearch = async () => {
    if (!limits.savedSearches) { setUpgradeFeature('Saved Searches'); setShowUpgrade(true); return }
    if (!saveName) return
    const res = await fetch('/api/saved-searches', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: saveName, filters, tab, alertsOn: saveAlerts }),
    })
    const data = await res.json()
    if (data.error) { setUpgradeMsg(data.error); return }
    setSaveModalOpen(false)
    setSaveName('')
    setSaveAlerts(false)
  }

  const openDealAnalyzer = (l: Listing) => {
    if (!limits.dealAnalyzer) { setUpgradeFeature('Deal Analyzer'); setShowUpgrade(true); return }
    setDealListing(l)
    setRepairCost('')
    setDealResults(null)
  }

  const calcDeal = () => {
    if (!dealListing) return
    const arv = dealListing.estimatedValue || 0
    const bid = dealListing.openingBid || dealListing.lienAmount || 0
    const repair = parseFloat(repairCost) || 0
    const totalIn = bid + repair
    const profit = arv - totalIn
    const roi = totalIn > 0 ? (profit / totalIn) * 100 : 0
    const coc = totalIn > 0 ? (profit / bid) * 100 : 0
    setDealResults({ profit, roi, coc })
  }

  const amountField = (l: Listing) => l.openingBid ?? l.lienAmount
  const dateField   = (l: Listing) => l.auctionDate ?? l.saleDate

  return (
    <div className="min-h-screen bg-slate-950">
      <NavBar />

      {showUpgrade && <UpgradeModal feature={upgradeFeature} onClose={() => setShowUpgrade(false)} />}

      {/* Deal Analyzer Modal */}
      {dealListing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setDealListing(null)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-lg w-full shadow-2xl">
            <button onClick={() => setDealListing(null)} className="absolute top-4 right-4 text-slate-500 hover:text-white"><X size={18} /></button>
            <h3 className="text-white font-bold text-lg mb-1">💰 Deal Analyzer</h3>
            <p className="text-slate-400 text-sm mb-4 truncate">{dealListing.address}</p>
            <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
              <div className="bg-slate-800 rounded-lg p-3"><p className="text-slate-400 text-xs mb-1">Opening Bid / Lien</p><p className="text-white font-bold">{fmt$(amountField(dealListing))}</p></div>
              <div className="bg-slate-800 rounded-lg p-3"><p className="text-slate-400 text-xs mb-1">Est. Market Value</p><p className="text-white font-bold">{fmt$(dealListing.estimatedValue)}</p></div>
              <div className="bg-slate-800 rounded-lg p-3"><p className="text-slate-400 text-xs mb-1">Equity</p><p className="text-emerald-400 font-bold">{fmtPct(dealListing.equityPct ?? dealListing.estimatedRoi)}</p></div>
              <div className="bg-slate-800 rounded-lg p-3"><p className="text-slate-400 text-xs mb-1">Property</p><p className="text-white font-bold text-xs">{dealListing.propertyType || 'Unknown'}</p></div>
            </div>
            <div className="mb-4">
              <label className="text-slate-400 text-xs mb-1 block">Estimated Repair Cost ($)</label>
              <input type="number" value={repairCost} onChange={e => setRepairCost(e.target.value)}
                placeholder="e.g. 35000"
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500" />
            </div>
            <button onClick={calcDeal} className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2 rounded-lg mb-4 transition-colors">
              Calculate Deal →
            </button>
            {dealResults && (
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className={`rounded-lg p-3 ${dealResults.profit > 0 ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                  <p className="text-xs text-slate-400 mb-1">Est. Profit</p>
                  <p className={`font-black text-base ${dealResults.profit > 0 ? 'text-emerald-400' : 'text-red-400'}`}>{fmt$(dealResults.profit)}</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-1">ROI</p>
                  <p className="font-black text-base text-white">{fmtPct(dealResults.roi)}</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-1">Cash-on-Cash</p>
                  <p className="font-black text-base text-white">{fmtPct(dealResults.coc)}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Save Search Modal */}
      {saveModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSaveModalOpen(false)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-white font-bold text-lg mb-4">Save Search</h3>
            <input value={saveName} onChange={e => setSaveName(e.target.value)}
              placeholder="e.g. FL Single Family under $50k"
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm mb-3 focus:outline-none focus:border-emerald-500" />
            <label className="flex items-center gap-2 text-sm text-slate-300 mb-4 cursor-pointer">
              <input type="checkbox" checked={saveAlerts} onChange={e => setSaveAlerts(e.target.checked)} className="rounded" />
              Email me when new properties match
            </label>
            {upgradeMsg && <p className="text-red-400 text-xs mb-2">{upgradeMsg}</p>}
            <div className="flex gap-2">
              <button onClick={() => setSaveModalOpen(false)} className="flex-1 border border-slate-700 text-slate-400 rounded-lg py-2 text-sm">Cancel</button>
              <button onClick={saveSearch} className="flex-1 bg-emerald-500 text-slate-950 font-bold rounded-lg py-2 text-sm">Save</button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-screen-2xl mx-auto px-4 py-4">
        {/* Tab bar */}
        <div className="flex items-center gap-1 mb-4 overflow-x-auto">
          {(Object.entries(TAB_CONFIG) as [Tab, typeof TAB_CONFIG[Tab]][]).map(([key, cfg]) => (
            <button key={key} onClick={() => switchTab(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                tab === key
                  ? `${cfg.bg} ${cfg.color} border ${cfg.border}`
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cfg.label}
              {tab === key && total > 0 && (
                <span className="text-xs opacity-70">{total.toLocaleString()}</span>
              )}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          {/* ── Filter Panel ── */}
          {showFilters && (
            <aside className="w-72 shrink-0 space-y-4">
              {/* Quick search */}
              <div className="relative">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input type="text" placeholder="Address, parcel, city…" value={filters.q}
                  onChange={e => f('q', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500" />
              </div>

              {/* Location */}
              <FilterSection title="📍 Location">
                <select value={filters.state} onChange={e => f('state', e.target.value)} className={selectCls}>
                  <option value="">All States</option>
                  {US_STATES.map(s => <option key={s}>{s}</option>)}
                </select>
                <input placeholder="County" value={filters.county} onChange={e => f('county', e.target.value)} className={inputCls} />
                <input placeholder="City" value={filters.city} onChange={e => f('city', e.target.value)} className={inputCls} />
                <input placeholder="ZIP" value={filters.zip} onChange={e => f('zip', e.target.value)} className={inputCls} />
              </FilterSection>

              {/* Property */}
              <FilterSection title="🏠 Property">
                <select value={filters.propType} onChange={e => f('propType', e.target.value)} className={selectCls}>
                  <option value="">All Types</option>
                  {['SingleFamily','MultiFamily','Commercial','Land','MobileHome','Condo'].map(t => <option key={t}>{t}</option>)}
                </select>
                <div className="grid grid-cols-2 gap-2">
                  <input placeholder="Min Beds" type="number" value={filters.minBeds} onChange={e => f('minBeds', e.target.value)} className={inputCls} />
                  <input placeholder="Max Beds" type="number" value={filters.maxBeds} onChange={e => f('maxBeds', e.target.value)} className={inputCls} />
                  <input placeholder="Min Sqft" type="number" value={filters.minSqft} onChange={e => f('minSqft', e.target.value)} className={inputCls} />
                  <input placeholder="Max Sqft" type="number" value={filters.maxSqft} onChange={e => f('maxSqft', e.target.value)} className={inputCls} />
                  <input placeholder="Min Year" type="number" value={filters.minYearBlt} onChange={e => f('minYearBlt', e.target.value)} className={inputCls} />
                  <input placeholder="Max Year" type="number" value={filters.maxYearBlt} onChange={e => f('maxYearBlt', e.target.value)} className={inputCls} />
                </div>
                <div className="flex gap-2">
                  <select value={filters.garage} onChange={e => f('garage', e.target.value)} className={selectCls + ' flex-1'}>
                    <option value="">Garage?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                  <select value={filters.pool} onChange={e => f('pool', e.target.value)} className={selectCls + ' flex-1'}>
                    <option value="">Pool?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </FilterSection>

              {/* Financial */}
              <FilterSection title="💰 Financial">
                <div className="grid grid-cols-2 gap-2">
                  <input placeholder="Min Bid ($)" type="number" value={filters.minBid} onChange={e => f('minBid', e.target.value)} className={inputCls} />
                  <input placeholder="Max Bid ($)" type="number" value={filters.maxBid} onChange={e => f('maxBid', e.target.value)} className={inputCls} />
                  <input placeholder="Min Value ($)" type="number" value={filters.minVal} onChange={e => f('minVal', e.target.value)} className={inputCls} />
                  <input placeholder="Max Value ($)" type="number" value={filters.maxVal} onChange={e => f('maxVal', e.target.value)} className={inputCls} />
                </div>
                {/* Pro-only filters */}
                <div className={`space-y-2 ${!limits.advancedFilters ? 'opacity-50' : ''}`}>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                    {!limits.advancedFilters && <Lock size={10} />}
                    <span>Advanced (Pro)</span>
                  </div>
                  <input placeholder="Min Equity %" type="number" value={filters.minEquity}
                    onChange={e => limits.advancedFilters ? f('minEquity', e.target.value) : (() => { setUpgradeFeature('Equity % filter'); setShowUpgrade(true) })()}
                    className={inputCls} readOnly={!limits.advancedFilters} />
                  {tab === 'tax-lien' && <>
                    <div className="grid grid-cols-2 gap-2">
                      <input placeholder="Min Rate %" type="number" value={filters.minRate}
                        onChange={e => limits.advancedFilters ? f('minRate', e.target.value) : (() => { setUpgradeFeature('Rate filter'); setShowUpgrade(true) })()}
                        className={inputCls} readOnly={!limits.advancedFilters} />
                      <input placeholder="Max Rate %" type="number" value={filters.maxRate}
                        onChange={e => limits.advancedFilters ? f('maxRate', e.target.value) : (() => { setUpgradeFeature('Rate filter'); setShowUpgrade(true) })()}
                        className={inputCls} readOnly={!limits.advancedFilters} />
                    </div>
                    <input placeholder="Min ROI %" type="number" value={filters.minRoi}
                      onChange={e => limits.advancedFilters ? f('minRoi', e.target.value) : (() => { setUpgradeFeature('ROI filter'); setShowUpgrade(true) })()}
                      className={inputCls} readOnly={!limits.advancedFilters} />
                  </>}
                </div>
              </FilterSection>

              {/* Auction */}
              <FilterSection title="🔨 Auction">
                <div className="grid grid-cols-2 gap-2">
                  <input type="date" value={filters.dateFrom} onChange={e => f('dateFrom', e.target.value)} className={inputCls} />
                  <input type="date" value={filters.dateTo} onChange={e => f('dateTo', e.target.value)} className={inputCls} />
                </div>
                <select value={filters.auctionType} onChange={e => f('auctionType', e.target.value)} className={selectCls}>
                  <option value="">All Auction Types</option>
                  <option>Online</option><option>InPerson</option><option>Hybrid</option>
                </select>
                <select value={filters.platform} onChange={e => f('platform', e.target.value)} className={selectCls}>
                  <option value="">All Platforms</option>
                  <option>RealAuction</option><option>GovEase</option><option>Bid4Assets</option>
                  <option>SRI</option><option>CountyDirect</option>
                </select>
                <select value={filters.status} onChange={e => f('status', e.target.value)} className={selectCls}>
                  <option value="">All Statuses</option>
                  {STATUS_OPTS[tab].map(s => <option key={s}>{s}</option>)}
                </select>
              </FilterSection>

              {/* Tab-specific */}
              {tab === 'foreclosure' && (
                <FilterSection title="⚖️ Foreclosure">
                  <select value={filters.fcType} onChange={e => f('fcType', e.target.value)} className={selectCls}>
                    <option value="">All Types</option>
                    <option>Judicial</option><option>NonJudicial</option><option>TaxDeed</option>
                  </select>
                  <input placeholder="Lender name" value={filters.lender} onChange={e => f('lender', e.target.value)} className={inputCls} />
                  <input placeholder="Max days since filing" type="number" value={filters.maxDaysFiled} onChange={e => f('maxDaysFiled', e.target.value)} className={inputCls} />
                </FilterSection>
              )}

              {tab === 'tax-lien' && (
                <FilterSection title="🏷️ Tax Lien">
                  <div className="grid grid-cols-2 gap-2">
                    <input placeholder="Min yrs delinq." type="number" value={filters.lienMinYears} onChange={e => f('lienMinYears', e.target.value)} className={inputCls} />
                    <input placeholder="Max yrs delinq." type="number" value={filters.lienMaxYears} onChange={e => f('lienMaxYears', e.target.value)} className={inputCls} />
                    <input placeholder="Min redemption (mo)" type="number" value={filters.minRedempt}
                      onChange={e => limits.advancedFilters ? f('minRedempt', e.target.value) : (() => { setUpgradeFeature('Redemption filter'); setShowUpgrade(true) })()}
                      className={inputCls} readOnly={!limits.advancedFilters} />
                    <input placeholder="Max redemption (mo)" type="number" value={filters.maxRedempt}
                      onChange={e => limits.advancedFilters ? f('maxRedempt', e.target.value) : (() => { setUpgradeFeature('Redemption filter'); setShowUpgrade(true) })()}
                      className={inputCls} readOnly={!limits.advancedFilters} />
                  </div>
                  <div className="flex gap-2">
                    <select value={filters.overbid} onChange={e => f('overbid', e.target.value)} className={selectCls + ' flex-1'}>
                      <option value="">Overbid?</option>
                      <option value="true">Yes</option><option value="false">No</option>
                    </select>
                    <select value={filters.subsequent} onChange={e => f('subsequent', e.target.value)} className={selectCls + ' flex-1'}>
                      <option value="">Sub. Taxes?</option>
                      <option value="true">Yes</option><option value="false">No</option>
                    </select>
                  </div>
                </FilterSection>
              )}

              {/* Sort */}
              <FilterSection title="↕️ Sort By">
                <select value={filters.sort} onChange={e => f('sort', e.target.value)} className={selectCls}>
                  <option value="equity_desc">Highest Equity % (default)</option>
                  <option value="bid_asc">Lowest Bid First</option>
                  <option value="bid_desc">Highest Bid First</option>
                  <option value="date_asc">Auction Date (soonest)</option>
                  <option value="date_desc">Auction Date (latest)</option>
                  {tab === 'tax-lien' && <option value="roi_desc">Highest ROI First</option>}
                  {tab === 'tax-lien' && <option value="rate_desc">Highest Rate First</option>}
                  <option value="scraped_desc">Most Recently Added</option>
                </select>
              </FilterSection>

              <button onClick={() => setFilters(initFilters())}
                className="w-full text-xs text-slate-500 hover:text-slate-300 py-1 transition-colors">
                Clear All Filters
              </button>
            </aside>
          )}

          {/* ── Results ── */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center gap-2 mb-4">
              <button onClick={() => setShowFilters(f => !f)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${showFilters ? 'bg-slate-800 border-slate-600 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'}`}>
                <SlidersHorizontal size={14} />
                {showFilters ? 'Hide' : 'Filters'}
              </button>
              <p className="text-slate-500 text-sm flex-1">
                {loading ? 'Searching…' : <><span className="text-white font-semibold">{total.toLocaleString()}</span> results</>}
              </p>
              <button onClick={() => setSaveModalOpen(true)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm transition-colors ${limits.savedSearches ? 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-500' : 'border-slate-800 text-slate-600 cursor-not-allowed'}`}>
                {!limits.savedSearches && <Lock size={12} />}
                <BookmarkPlus size={14} /> Save
              </button>
              <button onClick={exportCSV}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm transition-colors ${limits.csvExport ? 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-500' : 'border-slate-800 text-slate-600 cursor-not-allowed'}`}>
                {!limits.csvExport && <Lock size={12} />}
                <Download size={14} /> CSV
              </button>
            </div>

            {/* Results list */}
            {loading ? (
              <div className="space-y-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="h-24 bg-slate-900 border border-slate-800 rounded-xl animate-pulse" />
                ))}
              </div>
            ) : listings.length === 0 ? (
              <div className="text-center py-24 bg-slate-900/40 rounded-2xl border border-slate-800">
                <TrendingUp size={40} className="text-slate-700 mx-auto mb-3" />
                <p className="text-slate-400 font-semibold">No listings match your filters</p>
                <p className="text-slate-600 text-sm mt-1">Try expanding your search or run a scraper</p>
                <Link href="/admin" className="inline-block mt-4 bg-emerald-500 text-slate-950 font-bold px-5 py-2 rounded-lg text-sm hover:bg-emerald-400 transition-colors">
                  Scraper Dashboard →
                </Link>
              </div>
            ) : (
              <div className="space-y-2">
                {listings.map(l => {
                  const cfg = TAB_CONFIG[tab]
                  const amount = amountField(l)
                  const date = dateField(l)
                  return (
                    <div key={l.id}
                      className="group bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-xl px-5 py-4 flex items-center gap-4 transition-all cursor-pointer"
                      onClick={() => openDealAnalyzer(l)}
                    >
                      {/* Type badge */}
                      <span className={`shrink-0 hidden sm:block text-xs font-bold px-2 py-0.5 rounded-full border ${cfg.bg} ${cfg.color} ${cfg.border}`}>
                        {tab === 'foreclosure' ? '🏚️' : tab === 'tax-lien' ? '🏷️' : '📋'}
                      </span>

                      {/* Address */}
                      <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-sm truncate group-hover:${cfg.color} transition-colors`} style={{ color: 'white' }}>
                          {l.address}
                        </p>
                        <p className="text-slate-500 text-xs truncate">
                          {l.city}, {l.county} Co, {l.state} {l.zip}
                          {l.propertyType && ` · ${l.propertyType}`}
                          {l.bedrooms && ` · ${l.bedrooms}bd`}
                          {l.bathrooms && `/${l.bathrooms}ba`}
                          {l.sqft && ` · ${l.sqft.toLocaleString()} sqft`}
                        </p>
                      </div>

                      {/* Equity / ROI badge */}
                      {(l.equityPct != null || l.estimatedRoi != null) && (
                        <div className="hidden lg:flex flex-col items-center bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-1.5 shrink-0">
                          <span className="text-emerald-400 font-black text-base">{fmtPct(l.equityPct ?? l.estimatedRoi)}</span>
                          <span className="text-emerald-600 text-xs">{l.equityPct != null ? 'Equity' : 'ROI'}</span>
                        </div>
                      )}

                      {/* Tax lien details */}
                      {tab === 'tax-lien' && l.interestRate != null && (
                        <div className="hidden lg:flex flex-col items-center bg-sky-500/10 border border-sky-500/20 rounded-lg px-3 py-1.5 shrink-0">
                          <span className="text-sky-400 font-black text-base">{fmtPct(l.interestRate)}</span>
                          <span className="text-sky-600 text-xs">Rate</span>
                        </div>
                      )}

                      {/* Date */}
                      <div className="hidden md:block text-right shrink-0">
                        <p className="text-slate-500 text-xs">{l.auctionDate ? 'Auction' : 'Sale'}</p>
                        <p className="text-slate-300 text-xs font-medium">{fmtDate(date)}</p>
                        {l.auctionPlatform && <p className="text-slate-600 text-xs">{l.auctionPlatform}</p>}
                      </div>

                      {/* Amount */}
                      <div className="text-right shrink-0 min-w-[90px]">
                        <p className="text-emerald-400 font-black text-lg">{fmt$(amount)}</p>
                        {l.estimatedValue && (
                          <p className="text-slate-500 text-xs">est. {fmt$(l.estimatedValue)}</p>
                        )}
                      </div>

                      {/* Status */}
                      <StatusBadge status={l.status} />

                      {/* Deal analyzer hint + detail link */}
                      <div className="hidden xl:flex items-center gap-1">
                        <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-colors ${limits.dealAnalyzer ? 'text-slate-600 group-hover:text-emerald-400 group-hover:bg-emerald-500/10' : 'text-slate-700'}`}>
                          {!limits.dealAnalyzer && <Lock size={10} />}
                          <TrendingUp size={12} />
                        </div>
                        <Link href={`/listings/${l.id}?type=${l.type}`}
                          onClick={e => e.stopPropagation()}
                          className="text-xs text-slate-600 hover:text-emerald-400 px-2 py-1 rounded-lg hover:bg-emerald-500/10 transition-colors whitespace-nowrap">
                          Details →
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Pagination */}
            {pages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <button onClick={() => fetchListings(page - 1)} disabled={page <= 1}
                  className="border border-slate-700 disabled:opacity-30 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  ← Prev
                </button>
                <span className="text-slate-400 text-sm">Page {page} of {pages}</span>
                <button onClick={() => fetchListings(page + 1)} disabled={page >= pages}
                  className="border border-slate-700 disabled:opacity-30 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Next →
                </button>
              </div>
            )}

            {/* Free tier upgrade nudge */}
            {!limits.advancedFilters && total > 0 && (
              <div className="mt-6 bg-gradient-to-r from-violet-900/40 to-violet-800/20 border border-violet-500/20 rounded-2xl p-5 flex items-center gap-4">
                <Zap className="text-violet-400 shrink-0" size={24} />
                <div className="flex-1">
                  <p className="text-white font-semibold">You&apos;re on the Free plan</p>
                  <p className="text-slate-400 text-sm">Unlock equity %, ROI filters, deal analyzer, CSV export and saved searches.</p>
                </div>
                <button onClick={() => { setUpgradeFeature('Pro features'); setShowUpgrade(true) }}
                  className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-5 py-2 rounded-lg text-sm transition-colors shrink-0">
                  Upgrade to Pro →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
        {title}
        {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
      </button>
      {open && <div className="px-4 pb-4 space-y-2">{children}</div>}
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    scheduled: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    active:    'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    available: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    sold:      'bg-slate-700 text-slate-400 border-slate-600',
    redeemed:  'bg-slate-700 text-slate-400 border-slate-600',
    postponed: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    reo:       'bg-purple-400/10 text-purple-400 border-purple-400/20',
  }
  return (
    <span className={`shrink-0 text-xs font-semibold border px-2 py-0.5 rounded-full capitalize ${map[status] || 'bg-slate-700 text-slate-400 border-slate-600'}`}>
      {status}
    </span>
  )
}

const selectCls = 'w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-2.5 py-2 text-xs focus:outline-none focus:border-emerald-500'
const inputCls  = 'w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-2.5 py-2 text-xs placeholder:text-slate-600 focus:outline-none focus:border-emerald-500'

export default function SearchPage() {
  return (
    <Suspense>
      <SearchContent />
    </Suspense>
  )
}
