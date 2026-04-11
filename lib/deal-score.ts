// Forclos Proprietary Deal Score (1-100)
// Equity%(40) + delinquency(20) + location(20) + timing(10) + property type(10)

export interface ScoreInput {
  equityPct?: number | null
  estimatedRoi?: number | null
  yearsDelinquent?: number | null
  interestRate?: number | null
  state?: string | null
  auctionDate?: string | Date | null
  saleDate?: string | Date | null
  propertyType?: string | null
  openingBid?: number | null
  estimatedValue?: number | null
  lienAmount?: number | null
}

export interface ScoreResult {
  score: number
  grade: 'hot' | 'warm' | 'cold'
  color: string   // tailwind class
  emoji: string
  breakdown: {
    equity: number      // 0-40
    delinquency: number // 0-20
    location: number    // 0-20
    timing: number      // 0-10
    propertyType: number // 0-10
  }
}

const HOT_STATES  = new Set(['FL','GA','TX','AZ','NV','IL','IN','OH','PA','NJ','SC','TN'])
const WARM_STATES = new Set(['CA','NY','CO','WA','NC','AL','MS','LA','MO','MI','MD','VA'])

const TYPE_SCORES: Record<string, number> = {
  SingleFamily: 10, MultiFamily: 9, Condo: 8, Commercial: 7, MobileHome: 6, Land: 4,
}

export function calcDealScore(input: ScoreInput): ScoreResult {
  // 1. Equity (0–40)
  const rawEquity = input.equityPct != null
    ? input.equityPct
    : input.estimatedRoi != null
    ? input.estimatedRoi
    : (() => {
        const bid = input.openingBid ?? input.lienAmount
        const val = input.estimatedValue
        if (bid && val && val > 0) return ((val - bid) / val) * 100
        return 0
      })()
  const equityPts = Math.min(40, Math.max(0, (rawEquity / 80) * 40)) // 80%+ equity = max

  // 2. Delinquency (0–20) — more years = bigger opportunity
  const yrs = input.yearsDelinquent ?? 0
  const delinqPts = Math.min(20, yrs * 4)

  // 3. Location (0–20)
  const st = (input.state || '').toUpperCase()
  const locationPts = HOT_STATES.has(st) ? 20 : WARM_STATES.has(st) ? 12 : 6

  // 4. Timing (0–10)
  const dateVal = input.auctionDate ?? input.saleDate
  let timingPts = 5
  if (dateVal) {
    const days = (new Date(dateVal).getTime() - Date.now()) / 86400000
    if (days > 0 && days <= 7)   timingPts = 10
    else if (days <= 30)          timingPts = 8
    else if (days <= 90)          timingPts = 6
    else if (days > 90)           timingPts = 4
    else                          timingPts = 2  // past
  }

  // 5. Property type (0–10)
  const typePts = TYPE_SCORES[input.propertyType ?? ''] ?? 5

  const total = equityPts + delinqPts + locationPts + timingPts + typePts
  const score = Math.round(Math.min(100, Math.max(1, total)))

  const grade: ScoreResult['grade'] = score >= 71 ? 'hot' : score >= 41 ? 'warm' : 'cold'

  return {
    score,
    grade,
    color: grade === 'hot' ? 'text-emerald-400' : grade === 'warm' ? 'text-amber-400' : 'text-red-400',
    emoji: grade === 'hot' ? '🟢' : grade === 'warm' ? '🟡' : '🔴',
    breakdown: {
      equity:       Math.round(equityPts),
      delinquency:  Math.round(delinqPts),
      location:     locationPts,
      timing:       timingPts,
      propertyType: typePts,
    },
  }
}
