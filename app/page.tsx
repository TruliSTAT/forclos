import Link from 'next/link'
import { Search, TrendingUp, Shield, Clock, Crown, Zap, ArrowRight } from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { TrinityHomepageSection } from '@/components/Trinity'

const stats = [
  { label: 'Active Listings',   value: '47,392',  change: '+1,204 today' },
  { label: 'Counties Covered',  value: '1,847',   change: 'Across 50 states' },
  { label: 'Tax Liens',         value: '28,103',  change: 'Available now' },
  { label: 'Foreclosures',      value: '19,289',  change: 'Scheduled auctions' },
]

const features = [
  { icon: Search,     title: '30+ Investor Filters',   desc: 'Equity %, ROI, lien rate, redemption period, auction platform — every filter serious investors need.' },
  { icon: TrendingUp, title: 'AI Deal Score (1u201390100)',   desc: 'Every listing scored on equity, delinquency, location, timing, and property type. One number. One click.' },
  { icon: Shield,     title: 'Verified Daily Data',     desc: 'Scraped every 24h from 500+ county portals, RealAuction, GovEase, Bid4Assets, SRI, and more.' },
  { icon: Clock,      title: 'Saved Searches + Alerts', desc: 'Save your filters and get emailed the moment matching properties hit the database.' },
  { icon: Crown,      title: 'Investor Marketplace',    desc: 'Buy and sell tax deeds, liens, and REO from other investors. Your deal exit ramp.' },
  { icon: Zap,        title: 'API Access (Elite)',       desc: 'Programmatic access to the full database. Build your own tools on top of Forclos.' },
]

const tabs = [
  { href: '/search?tab=foreclosure', emoji: '🏚️', label: 'Foreclosures',  desc: 'Sheriff sales, judicial & non-judicial, bank REO' },
  { href: '/search?tab=tax-lien',    emoji: '🏷️', label: 'Tax Liens',     desc: 'Certificates, interest rates, redemption windows' },
  { href: '/search?tab=deed-lien',   emoji: '📋', label: 'Deeds & Liens', desc: 'Tax deeds, mechanic liens, judgment liens' },
  { href: '/marketplace',            emoji: '🤝', label: 'Marketplace',   desc: 'Buy & sell investor-owned deals directly' },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <NavBar />

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          Updated daily from 500+ county sources
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
          Find the Deal.<br />
          <span className="text-emerald-400">Before Anyone Else.</span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          The investor command center for foreclosure auctions, tax liens, and tax deed sales.
          30+ filters. Live data. Deal analyzer. Nationwide.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link href="/search" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-xl text-lg transition-colors flex items-center gap-2">
            Search All Listings <ArrowRight size={18} />
          </Link>
          <Link href="/signup" className="border border-slate-700 hover:border-slate-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
            Start Free →
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(s => (
            <div key={s.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="text-3xl font-black text-white mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-slate-300 mb-1">{s.label}</div>
              <div className="text-xs text-emerald-400">{s.change}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 tabs callout */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-6">One Platform. Four Markets.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tabs.map(t => (
            <Link key={t.href} href={t.href}
              className="bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-2xl p-5 text-center group transition-all hover:-translate-y-0.5">
              <div className="text-3xl mb-2">{t.emoji}</div>
              <h3 className="text-white font-bold text-base mb-1 group-hover:text-emerald-400 transition-colors">{t.label}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{t.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Trinity section */}
      <TrinityHomepageSection />

      {/* Features */}
      <div className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Built for serious investors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(f => (
            <div key={f.title} className="bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-2xl p-6 transition-colors">
              <f.icon size={22} className="text-emerald-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing teaser */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-r from-slate-900 via-violet-900/20 to-slate-900 border border-slate-800 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Start free. Upgrade when you&apos;re ready.</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Free tier includes 10 searches/day. Pro unlocks all filters, deal analyzer, and saved searches.
            Elite adds the Marketplace, API, and team seats.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <Link href="/signup" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-3 rounded-xl transition-colors">
              Start Free →
            </Link>
            <Link href="/pricing" className="border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold px-8 py-3 rounded-xl transition-colors">
              View Pricing
            </Link>
          </div>
          <p className="text-slate-600 text-sm">Pro $29/mo · Elite $79/mo · Cancel any time</p>
        </div>
      </div>

      <footer className="border-t border-slate-800 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-emerald-500 rounded-md flex items-center justify-center font-black text-slate-950 text-xs">F</div>
            <span className="font-bold text-white">Forclos</span>
            <span className="text-slate-600 text-xs ml-2">© 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/search" className="hover:text-white transition-colors">Search</Link>
            <Link href="/marketplace" className="hover:text-white transition-colors">Marketplace</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/admin" className="hover:text-white transition-colors">Admin</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
