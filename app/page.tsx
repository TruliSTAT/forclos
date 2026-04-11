import Link from 'next/link'
import { Search, Map, Database, TrendingUp, Shield, Clock } from 'lucide-react'

const stats = [
  { label: 'Active Listings', value: '47,392', change: '+1,204 today' },
  { label: 'Counties Covered', value: '1,847', change: 'Across 50 states' },
  { label: 'Tax Liens', value: '28,103', change: 'Available now' },
  { label: 'Foreclosures', value: '19,289', change: 'Scheduled auctions' },
]

const features = [
  { icon: Search, title: 'Full-Text Search', desc: 'Search by address, parcel ID, county, or state across all listing types.' },
  { icon: Map, title: 'Interactive Map', desc: 'Visualize listings geographically. Find clusters by county and filter on the fly.' },
  { icon: Database, title: '500+ Sources', desc: 'Scraped daily from RealAuction, GovEase, Bid4Assets, SRI, and county portals.' },
  { icon: TrendingUp, title: 'Market Insights', desc: 'Track bid trends, average opening bids, and ROI data by county.' },
  { icon: Shield, title: 'Verified Data', desc: 'Cross-referenced with county assessor records. Duplicate detection built in.' },
  { icon: Clock, title: 'Real-Time Alerts', desc: 'Email alerts when new listings match your saved search criteria.' },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Nav */}
      <nav className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-slate-950 text-sm">LS</div>
            <span className="font-bold text-white text-lg">LienScope</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/search" className="text-slate-400 hover:text-white transition-colors text-sm">Search</Link>
            <Link href="/admin" className="text-slate-400 hover:text-white transition-colors text-sm">Admin</Link>
            <Link href="/search" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition-colors">
              Search Listings →
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          Updated daily from 500+ county sources
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
          Every Foreclosure.<br />
          <span className="text-emerald-400">Every Tax Sale.</span><br />
          One Database.
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Nationwide coverage of foreclosure auctions, tax lien certificates, and tax deed sales — scraped daily from all US municipalities.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/search" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg transition-colors">
            Search All Listings →
          </Link>
          <Link href="/admin" className="border border-slate-700 hover:border-slate-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
            Scraper Dashboard
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats.map(stat => (
            <div key={stat.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-slate-300 mb-1">{stat.label}</div>
              <div className="text-xs text-emerald-400">{stat.change}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Built for serious investors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-colors">
              <f.icon size={24} className="text-emerald-400 mb-4" />
              <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8 text-center">
        <p className="text-slate-500 text-sm">© 2026 LienScope. Data sourced from public municipal records.</p>
      </footer>
    </div>
  )
}
