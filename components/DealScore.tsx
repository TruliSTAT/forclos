'use client'
import { calcDealScore, type ScoreInput } from '@/lib/deal-score'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Lock } from 'lucide-react'

interface Props {
  listing: ScoreInput
  showBreakdown?: boolean
  canSeeBreakdown?: boolean
  size?: 'sm' | 'md' | 'lg'
  onUpgrade?: () => void
}

export function DealScoreBadge({ listing, showBreakdown, canSeeBreakdown = true, size = 'md', onUpgrade }: Props) {
  const result = calcDealScore(listing)
  const [open, setOpen] = useState(false)

  const sizeMap = {
    sm: { outer: 'px-2 py-1', score: 'text-base', label: 'text-xs' },
    md: { outer: 'px-3 py-2', score: 'text-2xl', label: 'text-xs' },
    lg: { outer: 'px-4 py-3', score: 'text-4xl', label: 'text-sm' },
  }
  const sz = sizeMap[size]

  const bgMap = { hot: 'bg-emerald-500/10 border-emerald-500/20', warm: 'bg-amber-500/10 border-amber-500/20', cold: 'bg-red-500/10 border-red-500/20' }

  return (
    <div className="inline-flex flex-col gap-1">
      <div className={`flex items-center gap-2 ${sz.outer} rounded-xl border ${bgMap[result.grade]}`}>
        <span className={`font-black ${sz.score} ${result.color}`}>{result.score}</span>
        <div>
          <p className={`font-semibold ${sz.label} ${result.color}`}>{result.emoji} {result.grade.toUpperCase()}</p>
          <p className={`${sz.label} text-slate-500`}>Deal Score</p>
        </div>
        {showBreakdown && (
          <button onClick={() => canSeeBreakdown ? setOpen(o => !o) : onUpgrade?.()}
            className="text-slate-500 hover:text-white transition-colors">
            {canSeeBreakdown
              ? (open ? <ChevronUp size={14} /> : <ChevronDown size={14} />)
              : <Lock size={12} />}
          </button>
        )}
      </div>

      {open && canSeeBreakdown && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs space-y-1.5 w-full min-w-[200px]">
          <p className="text-slate-400 font-semibold mb-2">Score Breakdown</p>
          {([
            ['Equity / ROI',     result.breakdown.equity,       40],
            ['Delinquency',      result.breakdown.delinquency,  20],
            ['Location Grade',   result.breakdown.location,     20],
            ['Auction Timing',   result.breakdown.timing,       10],
            ['Property Type',    result.breakdown.propertyType, 10],
          ] as const).map(([label, pts, max]) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-slate-500 w-28 shrink-0">{label}</span>
              <div className="flex-1 bg-slate-800 rounded-full h-1.5">
                <div className={`h-1.5 rounded-full ${result.color.replace('text-', 'bg-')}`}
                  style={{ width: `${(pts / max) * 100}%` }} />
              </div>
              <span className="text-slate-400 w-12 text-right">{pts}/{max}</span>
            </div>
          ))}
          <div className="border-t border-slate-800 pt-1.5 flex justify-between">
            <span className="text-slate-500">Total</span>
            <span className={`font-bold ${result.color}`}>{result.score}/100</span>
          </div>
        </div>
      )}
    </div>
  )
}
