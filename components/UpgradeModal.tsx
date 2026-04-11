'use client'
import { X, Zap, Crown } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Props {
  onClose: () => void
  feature?: string
}

export function UpgradeModal({ onClose, feature }: Props) {
  const router = useRouter()

  const upgrade = async (tier: 'pro' | 'elite') => {
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tier }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
    else router.push('/pricing')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white">
          <X size={18} />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Zap className="text-emerald-400" size={24} />
          </div>
          <h2 className="text-white font-bold text-xl mb-1">Unlock This Feature</h2>
          <p className="text-slate-400 text-sm">
            {feature
              ? `${feature} requires a paid plan.`
              : 'This feature requires a paid plan.'}
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => upgrade('pro')}
            className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-between transition-colors group"
          >
            <div className="text-left">
              <div className="flex items-center gap-2"><Zap size={14} /> Pro Plan</div>
              <div className="text-xs text-violet-300 mt-0.5">Unlimited searches · All filters · Deal analyzer · CSV export</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-black">$29</div>
              <div className="text-xs text-violet-300">/month</div>
            </div>
          </button>

          <button
            onClick={() => upgrade('elite')}
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-between transition-all group"
          >
            <div className="text-left">
              <div className="flex items-center gap-2"><Crown size={14} /> Elite Plan</div>
              <div className="text-xs text-amber-200 mt-0.5">Everything in Pro · API · Marketplace listings · Team seats</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-black">$79</div>
              <div className="text-xs text-amber-200">/month</div>
            </div>
          </button>
        </div>

        <p className="text-center text-slate-500 text-xs mt-4">Cancel anytime. No contracts.</p>
      </div>
    </div>
  )
}
