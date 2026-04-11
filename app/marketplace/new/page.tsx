'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { NavBar } from '@/components/NavBar'
import { Crown, ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const LISTING_TYPES = ['tax-deed','tax-lien','reo','foreclosure','mechanic-lien','judgment-lien']
const PROP_TYPES = ['SingleFamily','MultiFamily','Commercial','Land','MobileHome','Condo']
const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC']

const inputCls = 'w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20'
const selectCls = 'w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500'

export default function NewMarketplaceListing() {
  const router = useRouter()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    address: '', city: '', county: '', state: '', zip: '',
    propertyType: '', bedrooms: '', bathrooms: '', sqft: '', yearBuilt: '',
    listingType: 'tax-deed',
    purchasePricePaid: '', askingPrice: '', estimatedValue: '',
    description: '', reasonForSelling: '',
  })
  const f = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  const submit = async () => {
    if (!form.address || !form.city || !form.state || !form.askingPrice || !form.listingType) {
      setError('Please fill in all required fields.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/marketplace/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          bedrooms: form.bedrooms ? parseInt(form.bedrooms) : undefined,
          bathrooms: form.bathrooms ? parseFloat(form.bathrooms) : undefined,
          sqft: form.sqft ? parseInt(form.sqft) : undefined,
          yearBuilt: form.yearBuilt ? parseInt(form.yearBuilt) : undefined,
          purchasePricePaid: form.purchasePricePaid ? parseFloat(form.purchasePricePaid) : undefined,
          askingPrice: parseFloat(form.askingPrice),
          estimatedValue: form.estimatedValue ? parseFloat(form.estimatedValue) : undefined,
        }),
      })
      const data = await res.json()
      if (data.error) {
        if (data.upgrade) router.push('/pricing')
        else setError(data.error)
        return
      }
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950">
        <NavBar />
        <div className="max-w-lg mx-auto px-4 py-24 text-center">
          <CheckCircle size={56} className="text-emerald-400 mx-auto mb-4" />
          <h2 className="text-white font-black text-2xl mb-2">Listing Submitted!</h2>
          <p className="text-slate-400 mb-6">Your property is pending admin review and will go live within 24 hours.</p>
          <Link href="/marketplace" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl inline-block transition-colors">
            Back to Marketplace →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <NavBar />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/marketplace" className="text-slate-500 hover:text-white transition-colors"><ArrowLeft size={20} /></Link>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <Crown className="text-amber-400" size={18} />
              <span className="text-amber-400 text-sm font-semibold">Elite Member Listing</span>
            </div>
            <h1 className="text-white font-black text-2xl">List a Property</h1>
          </div>
        </div>

        {/* Elite perk callout */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-6 text-sm">
          <p className="text-amber-300 font-semibold mb-1">🎁 Elite Benefit: Free Listings</p>
          <p className="text-slate-400">No listing fee. You only pay a <strong className="text-white">2.5% transaction fee</strong> when you close. Keep 97.5% of your sale price.</p>
        </div>

        <div className="space-y-6">
          {/* Property location */}
          <Section title="📍 Property Location">
            <input placeholder="Street Address *" value={form.address} onChange={e => f('address', e.target.value)} className={inputCls} />
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="City *" value={form.city} onChange={e => f('city', e.target.value)} className={inputCls} />
              <input placeholder="County" value={form.county} onChange={e => f('county', e.target.value)} className={inputCls} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <select value={form.state} onChange={e => f('state', e.target.value)} className={selectCls}>
                <option value="">State *</option>
                {US_STATES.map(s => <option key={s}>{s}</option>)}
              </select>
              <input placeholder="ZIP" value={form.zip} onChange={e => f('zip', e.target.value)} className={inputCls} />
            </div>
          </Section>

          {/* Property details */}
          <Section title="🏠 Property Details">
            <div className="grid grid-cols-2 gap-3">
              <select value={form.propertyType} onChange={e => f('propertyType', e.target.value)} className={selectCls}>
                <option value="">Property Type</option>
                {PROP_TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
              <select value={form.listingType} onChange={e => f('listingType', e.target.value)} className={selectCls}>
                <option value="">Listing Type *</option>
                {LISTING_TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
              <input placeholder="Bedrooms" type="number" value={form.bedrooms} onChange={e => f('bedrooms', e.target.value)} className={inputCls} />
              <input placeholder="Bathrooms" type="number" step="0.5" value={form.bathrooms} onChange={e => f('bathrooms', e.target.value)} className={inputCls} />
              <input placeholder="Square Footage" type="number" value={form.sqft} onChange={e => f('sqft', e.target.value)} className={inputCls} />
              <input placeholder="Year Built" type="number" value={form.yearBuilt} onChange={e => f('yearBuilt', e.target.value)} className={inputCls} />
            </div>
          </Section>

          {/* Pricing */}
          <Section title="💰 Pricing & Deal Info">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Purchase Price Paid ($)</label>
                <input placeholder="What you paid" type="number" value={form.purchasePricePaid} onChange={e => f('purchasePricePaid', e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Asking Price ($) *</label>
                <input placeholder="Your listing price" type="number" value={form.askingPrice} onChange={e => f('askingPrice', e.target.value)} className={inputCls} />
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">Estimated Market Value ($)</label>
              <input placeholder="ARV / current market value" type="number" value={form.estimatedValue} onChange={e => f('estimatedValue', e.target.value)} className={inputCls} />
            </div>
            {form.askingPrice && form.estimatedValue && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 text-sm">
                <span className="text-slate-400">Implied equity for buyer: </span>
                <span className="text-emerald-400 font-bold">
                  {(((parseFloat(form.estimatedValue) - parseFloat(form.askingPrice)) / parseFloat(form.estimatedValue)) * 100).toFixed(1)}%
                </span>
              </div>
            )}
          </Section>

          {/* Description */}
          <Section title="📝 Description">
            <textarea value={form.description} onChange={e => f('description', e.target.value)}
              placeholder="Describe the property and deal — title status, condition, liens, liens cleared, redemption period, etc."
              className={inputCls + ' h-28 resize-none'} />
            <textarea value={form.reasonForSelling} onChange={e => f('reasonForSelling', e.target.value)}
              placeholder="Why are you selling? (e.g. capital deployment, portfolio cleanup, need liquidity)"
              className={inputCls + ' h-20 resize-none'} />
          </Section>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl p-4 text-sm">{error}</div>
          )}

          <button onClick={submit} disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-black py-4 rounded-xl text-base transition-colors">
            {loading ? 'Submitting…' : 'Submit for Review →'}
          </button>
          <p className="text-slate-600 text-xs text-center">Listings are reviewed within 24 hours. You&apos;ll be notified when live.</p>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5">
      <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}
