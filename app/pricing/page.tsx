'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Crown, Zap, Search } from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import Link from 'next/link'

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    icon: Search,
    color: 'border-slate-700',
    btnCls: 'bg-slate-700 hover:bg-slate-600 text-white',
    features: [
      '10 searches / day',
      'Basic filters (state, county, type)',
      'View marketplace listings (blurred)',
      'No saved searches',
      'No deal analyzer',
      'No CSV export',
      'No email alerts',
    ],
    disabled: ['No saved searches','No deal analyzer','No CSV export','No email alerts'] as string[],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    icon: Zap,
    color: 'border-violet-500',
    btnCls: 'bg-violet-600 hover:bg-violet-500 text-white',
    badge: 'Most Popular',
    features: [
      'Unlimited searches',
      'All 30+ filters (equity %, ROI, rate…)',
      'Deal analyzer (profit / ROI / cash-on-cash)',
      '25 saved searches + email alerts',
      'CSV / bulk export',
      'Full marketplace access + make offers',
      '3 property detail views → unlimited',
    ],
    disabled: [] as string[],
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 79,
    icon: Crown,
    color: 'border-amber-500',
    btnCls: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950',
    badge: 'Full Platform',
    features: [
      'Everything in Pro',
      'API access (10k req/day)',
      'Bulk export (no row limit)',
      'Priority scraper updates',
      '3 team seats',
      '🤝 LIST properties on Marketplace (free)',
      '2.5% transaction fee on close only',
      'Dedicated onboarding call',
    ],
    disabled: [] as string[],
  },
]

export default function PricingPage() {
  const router = useRouter()
  const [currentTier, setCurrentTier] = useState('free')
  const [loading, setLoading] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/auth/me').then(r => r.json()).then(d => {
      if (d.user) setCurrentTier(d.user.tier)
    })
  }, [])

  const subscribe = async (tier: string) => {
    if (tier === 'free') return
    setLoading(tier)
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tier }),
    })
    const data = await res.json()
    setLoading(null)
    if (data.url) window.location.href = data.url
    else if (data.error === 'Login required') router.push('/signup')
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <NavBar />
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-3">Find the Deal. Before Anyone Else.</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Choose the plan that matches your investment strategy. Upgrade or cancel any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(plan => {
            const Icon = plan.icon
            const isCurrent = currentTier === plan.id
            return (
              <div key={plan.id}
                className={`relative bg-slate-900 border-2 rounded-2xl p-6 flex flex-col ${plan.color} ${isCurrent ? 'ring-2 ring-emerald-500 ring-offset-2 ring-offset-slate-950' : ''}`}>
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full bg-violet-600 text-white">
                    {plan.badge}
                  </span>
                )}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={20} className={plan.id === 'elite' ? 'text-amber-400' : plan.id === 'pro' ? 'text-violet-400' : 'text-slate-400'} />
                    <span className="text-white font-bold text-lg">{plan.name}</span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-white font-black text-4xl">${plan.price}</span>
                    {plan.price > 0 && <span className="text-slate-400 text-sm mb-1">/month</span>}
                    {plan.price === 0 && <span className="text-slate-400 text-sm mb-1">forever</span>}
                  </div>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map(feat => (
                    <li key={feat} className={`flex items-start gap-2 text-sm ${plan.disabled?.includes(feat) ? 'text-slate-600 line-through' : 'text-slate-300'}`}>
                      <Check size={14} className={`mt-0.5 shrink-0 ${plan.disabled?.includes(feat) ? 'text-slate-700' : 'text-emerald-400'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>

                {isCurrent ? (
                  <div className="w-full text-center py-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold rounded-xl text-sm">
                    ✓ Current Plan
                  </div>
                ) : (
                  <button onClick={() => subscribe(plan.id)} disabled={!!loading}
                    className={`w-full py-3 rounded-xl font-bold text-sm transition-all disabled:opacity-60 ${plan.btnCls}`}>
                    {loading === plan.id ? 'Loading…' : plan.price === 0 ? 'Get Started Free' : `Upgrade to ${plan.name} →`}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* Transaction fee note */}
        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
          <h3 className="text-white font-semibold mb-2">Marketplace Transaction Fee</h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Elite members can list properties for <strong className="text-white">free</strong>. Forclos charges a{' '}
            <strong className="text-amber-400">2.5% transaction fee</strong> only when a deal closes.
            No upfront costs, no monthly listing fees.
          </p>
        </div>

        <p className="text-center text-slate-600 text-sm mt-6">
          Questions? <Link href="mailto:support@forclos.com" className="text-emerald-400 hover:text-emerald-300">support@forclos.com</Link>
        </p>
      </div>
    </div>
  )
}
