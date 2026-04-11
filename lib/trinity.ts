// Trinity — Forclos AI Engine
// Pattern-based intelligence layer. LLM integration hooks ready.

import { db } from './db'
import { calcDealScore } from './deal-score'

export type TrinityIntent =
  | 'search_listings'
  | 'deal_analysis'
  | 'market_intel'
  | 'portfolio_query'
  | 'redemption_alert'
  | 'education'
  | 'greeting'
  | 'unknown'

export interface TrinityMessage {
  role: 'user' | 'trinity'
  content: string
  listings?: TrinityListing[]
  searchUrl?: string
  score?: { score: number; grade: string; breakdown: Record<string, number> }
  timestamp: number
}

export interface TrinityListing {
  id: string
  type: string
  address: string
  city: string
  state: string
  amount: number | null
  estimatedValue: number | null
  equityPct: number | null
  interestRate: number | null
  auctionDate: string | null
  saleDate: string | null
  status: string
  dealScore?: number
  dealGrade?: string
}

// ─── Intent detection ───────────────────────────────────────────────────────

const STATE_ABBR: Record<string, string> = {
  alabama:'AL',alaska:'AK',arizona:'AZ',arkansas:'AR',california:'CA',
  colorado:'CO',connecticut:'CT',delaware:'DE',florida:'FL',georgia:'GA',
  hawaii:'HI',idaho:'ID',illinois:'IL',indiana:'IN',iowa:'IA',kansas:'KS',
  kentucky:'KY',louisiana:'LA',maine:'ME',maryland:'MD',massachusetts:'MA',
  michigan:'MI',minnesota:'MN',mississippi:'MS',missouri:'MO',montana:'MT',
  nebraska:'NE',nevada:'NV','new hampshire':'NH','new jersey':'NJ',
  'new mexico':'NM','new york':'NY','north carolina':'NC','north dakota':'ND',
  ohio:'OH',oklahoma:'OK',oregon:'OR',pennsylvania:'PA','rhode island':'RI',
  'south carolina':'SC','south dakota':'SD',tennessee:'TN',texas:'TX',
  utah:'UT',vermont:'VT',virginia:'VA',washington:'WA','west virginia':'WV',
  wisconsin:'WI',wyoming:'WY',
}

function extractState(text: string): string | null {
  const lower = text.toLowerCase()
  // Check full names first (longer match wins)
  for (const [name, abbr] of Object.entries(STATE_ABBR).sort((a,b) => b[0].length - a[0].length)) {
    if (lower.includes(name)) return abbr
  }
  // Check 2-letter abbr
  const m = text.match(/\b([A-Z]{2})\b/)
  if (m && Object.values(STATE_ABBR).includes(m[1])) return m[1]
  return null
}

function extractNumber(text: string, patterns: RegExp[]): number | null {
  for (const p of patterns) {
    const m = text.match(p)
    if (m) return parseFloat(m[1].replace(/,/g, ''))
  }
  return null
}

function extractCounty(text: string): string | null {
  const m = text.match(/(\w[\w\s]*?)\s+county/i)
  return m ? m[1].trim() : null
}

export function detectIntent(text: string): TrinityIntent {
  const lower = text.toLowerCase()

  if (/^(hi|hello|hey|sup|what can you|who are you|what are you|help)/i.test(lower.trim())) return 'greeting'

  if (/(find|search|show|look for|get me|list|any)\s.*(tax lien|foreclosure|lien|deed)/i.test(lower) ||
      /(tax lien|foreclosure|lien|deed).*(find|search|show|under|over|with|in|at)/i.test(lower)) return 'search_listings'

  if (/(is this|good deal|analyze|deal score|worth it|should i buy|evaluate|rate this)/i.test(lower)) return 'deal_analysis'

  if (/(best county|best state|market|trending|top counties|where should|which state|recommend)/i.test(lower)) return 'market_intel'

  if (/(my portfolio|my properties|my liens|total roi|how much have i|my investment)/i.test(lower)) return 'portfolio_query'

  if (/(remind|alert|notify|expir|deadline|redemption|when does)/i.test(lower)) return 'redemption_alert'

  if (/(how does|explain|what is|what are|how do|tell me about|teach|learn)/i.test(lower)) return 'education'

  if (/(tax lien|foreclosure|lien|deed|auction|interest rate|redemption|equity)/i.test(lower)) return 'search_listings'

  return 'unknown'
}

// ─── Query builders ─────────────────────────────────────────────────────────

export interface ParsedQuery {
  state?: string
  county?: string
  type?: string
  maxBid?: number
  minBid?: number
  minRate?: number
  maxRate?: number
  minEquity?: number
  saleType?: string
}

export function parseSearchQuery(text: string): ParsedQuery {
  const lower = text.toLowerCase()
  const q: ParsedQuery = {}

  const state = extractState(text)
  if (state) q.state = state

  const county = extractCounty(text)
  if (county) q.county = county

  // Type
  if (/tax deed/i.test(text)) q.type = 'deed-lien'
  else if (/tax lien/i.test(text)) q.type = 'tax-lien'
  else if (/foreclosure|sheriff sale/i.test(text)) q.type = 'foreclosure'

  // Amount filters
  const maxBid = extractNumber(text, [/under\s*\$?([\d,]+)/i, /less than\s*\$?([\d,]+)/i, /below\s*\$?([\d,]+)/i, /max.*?\$?([\d,]+)/i])
  if (maxBid) q.maxBid = maxBid

  const minBid = extractNumber(text, [/over\s*\$?([\d,]+)/i, /more than\s*\$?([\d,]+)/i, /above\s*\$?([\d,]+)/i, /min.*?\$?([\d,]+)/i])
  if (minBid) q.minBid = minBid

  // Interest rate
  const minRate = extractNumber(text, [/(?:over|above|at least|minimum)\s*([\d.]+)\s*%\s*(?:interest|rate)/i, /([\d.]+)\s*%\s*(?:or more|plus)\s*(?:interest|rate)/i])
  if (minRate) q.minRate = minRate

  // Equity
  const minEquity = extractNumber(text, [/([\d.]+)\s*%\s*(?:equity|or more equity)/i])
  if (minEquity) q.minEquity = minEquity

  return q
}

// ─── Response generators ─────────────────────────────────────────────────────

export async function handleSearch(query: ParsedQuery, limit = 5): Promise<{ listings: TrinityListing[]; total: number; searchUrl: string }> {
  const propWhere: Record<string, unknown> = {}
  if (query.state) propWhere.state = query.state
  if (query.county) propWhere.county = { contains: query.county, mode: 'insensitive' }

  const listings: TrinityListing[] = []
  let total = 0

  if (!query.type || query.type === 'foreclosure') {
    const where: Record<string, unknown> = { property: propWhere }
    if (query.maxBid) where.openingBid = { lte: query.maxBid }
    if (query.minBid) where.openingBid = { ...(where.openingBid as object||{}), gte: query.minBid }
    if (query.minEquity) where.equityPct = { gte: query.minEquity }

    const [rows, count] = await Promise.all([
      db.foreclosureListing.findMany({ where, include: { property: true }, orderBy: { equityPct: 'desc' }, take: limit }),
      db.foreclosureListing.count({ where }),
    ])
    total += count
    for (const r of rows) {
      const score = calcDealScore({ ...r, state: r.property.state, auctionDate: r.auctionDate })
      listings.push({ id: r.id, type: 'foreclosure', address: r.property.address, city: r.property.city, state: r.property.state, amount: r.openingBid, estimatedValue: r.estimatedValue, equityPct: r.equityPct, interestRate: null, auctionDate: r.auctionDate?.toISOString() || null, saleDate: null, status: r.status, dealScore: score.score, dealGrade: score.grade })
    }
  }

  if (!query.type || query.type === 'tax-lien') {
    const where: Record<string, unknown> = { property: propWhere, saleType: 'lien' }
    if (query.maxBid) where.lienAmount = { lte: query.maxBid }
    if (query.minBid) where.lienAmount = { ...(where.lienAmount as object||{}), gte: query.minBid }
    if (query.minRate) where.interestRate = { gte: query.minRate }

    const [rows, count] = await Promise.all([
      db.taxSaleListing.findMany({ where, include: { property: true }, orderBy: { interestRate: 'desc' }, take: limit }),
      db.taxSaleListing.count({ where }),
    ])
    total += count
    for (const r of rows) {
      const score = calcDealScore({ ...r, state: r.property.state, saleDate: r.saleDate })
      listings.push({ id: r.id, type: 'tax-lien', address: r.property.address, city: r.property.city, state: r.property.state, amount: r.lienAmount, estimatedValue: r.estimatedValue, equityPct: null, interestRate: r.interestRate, auctionDate: null, saleDate: r.saleDate?.toISOString() || null, status: r.status, dealScore: score.score, dealGrade: score.grade })
    }
  }

  if (!query.type || query.type === 'deed-lien') {
    const where: Record<string, unknown> = { property: propWhere, saleType: { in: ['deed','tax-deed'] } }
    if (query.maxBid) where.lienAmount = { lte: query.maxBid }

    const [rows, count] = await Promise.all([
      db.taxSaleListing.findMany({ where, include: { property: true }, orderBy: { estimatedRoi: 'desc' }, take: limit }),
      db.taxSaleListing.count({ where }),
    ])
    total += count
    for (const r of rows) {
      const score = calcDealScore({ ...r, state: r.property.state })
      listings.push({ id: r.id, type: 'deed-lien', address: r.property.address, city: r.property.city, state: r.property.state, amount: r.lienAmount, estimatedValue: r.estimatedValue, equityPct: r.estimatedRoi, interestRate: r.interestRate, auctionDate: null, saleDate: r.saleDate?.toISOString() || null, status: r.status, dealScore: score.score, dealGrade: score.grade })
    }
  }

  // Sort by deal score
  listings.sort((a, b) => (b.dealScore || 0) - (a.dealScore || 0))

  // Build search URL
  const params = new URLSearchParams()
  if (query.type) params.set('tab', query.type)
  else params.set('tab', 'tax-lien')
  if (query.state) params.set('state', query.state)
  if (query.county) params.set('county', query.county)
  if (query.maxBid) params.set('maxBid', String(query.maxBid))
  if (query.minBid) params.set('minBid', String(query.minBid))
  if (query.minRate) params.set('minRate', String(query.minRate))
  if (query.minEquity) params.set('minEquity', String(query.minEquity))

  return { listings: listings.slice(0, limit), total, searchUrl: `/search?${params}` }
}

export async function handleMarketIntel(text: string): Promise<string> {
  const state = extractState(text)

  if (state) {
    // Get top counties by listing count + avg interest rate
    const liens = await db.taxSaleListing.groupBy({
      by: ['county'],
      where: { state, saleType: 'lien', status: 'available' },
      _count: { id: true },
      _avg: { interestRate: true },
      orderBy: { _count: { id: 'desc' } },
      take: 5,
    })

    if (liens.length === 0) return `I don't have active tax lien data for ${state} yet — scrapers are still populating. Check back soon or try a neighboring state. — Trinity`

    const lines = liens.map((c, i) =>
      `${i+1}. **${c.county} County** — ${c._count.id} active liens${c._avg.interestRate ? `, avg ${c._avg.interestRate.toFixed(1)}% rate` : ''}`
    ).join('\n')

    return `Here are the hottest counties in ${state} right now:\n\n${lines}\n\nWant me to pull specific listings from any of these? — Trinity`
  }

  // General market overview
  const [fcCount, lienCount, topStates] = await Promise.all([
    db.foreclosureListing.count({ where: { status: { in: ['scheduled','active'] } } }),
    db.taxSaleListing.count({ where: { status: 'available', saleType: 'lien' } }),
    db.taxSaleListing.groupBy({
      by: ['state'],
      where: { saleType: 'lien', status: 'available' },
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } },
      take: 5,
    }),
  ])

  const stateList = topStates.map(s => `${s.state} (${s._count.id})`).join(', ')
  return `Current market snapshot:\n\n• **${fcCount.toLocaleString()}** active foreclosures\n• **${lienCount.toLocaleString()}** available tax liens\n• Top states by inventory: ${stateList}\n\nTell me which state you're targeting and I'll get specific. — Trinity`
}

export function handleEducation(text: string): string {
  const lower = text.toLowerCase()

  if (/tax lien/i.test(text)) {
    if (/georgia|ga\b/i.test(text)) return `**Tax Liens in Georgia 🍑**\n\nGeorgia is a tax deed state — counties sell tax deeds, not lien certificates. Key facts:\n• Minimum bid = back taxes owed\n• No redemption period after tax deed sale\n• Title is generally clear after sheriff's deed\n• Auctions held at courthouse steps, mostly in-person\n• Hot counties: Fulton, Gwinnett, DeKalb, Cobb\n\nWant me to pull active tax deeds in Georgia? — Trinity`
    if (/florida|fl\b/i.test(text)) return `**Tax Liens in Florida 🌴**\n\nFlorida is one of the best tax lien states:\n• Interest rate: up to **18% per year**\n• Redemption period: 2 years\n• Online auctions via RealAuction and county portals\n• Overbidding drives rate down (bid the rate, not the price)\n• Counties with most volume: Miami-Dade, Broward, Palm Beach\n\nFlash tip: Bid 0.25% to guarantee a return and still beat most competition.\n\nWant me to find active Florida liens? — Trinity`
    if (/texas|tx\b/i.test(text)) return `**Tax Liens in Texas 🤠**\n\nTexas is a tax deed state (not lien certificates):\n• Redeemable tax deeds — owner has 180 days (2 years for homestead) to redeem\n• Redemption penalty: 25% (year 1) or 50% (year 2)\n• That's effectively a 25-50% guaranteed return if redeemed\n• Sheriff sales and constable sales — in-person and online\n• High-volume counties: Harris, Tarrant, Dallas, Bexar\n\nWant me to search active Texas tax deed sales? — Trinity`
    return `**How Tax Lien Investing Works**\n\nWhen a property owner doesn't pay property taxes, the county sells a tax lien certificate to investors:\n\n1. **You pay** the delinquent taxes\n2. **You earn interest** (state-mandated rate) while the owner has a chance to redeem\n3. **If they don't redeem** within the redemption period — you can foreclose and take the property\n\nKey metrics to watch:\n• Interest rate (higher = better)\n• Redemption period (shorter = faster resolution)\n• Years delinquent (more = more motivated)\n• Property value vs lien amount (equity buffer)\n\nWhat state are you interested in? Each one has different rules. — Trinity`
  }

  if (/foreclosure/i.test(text)) {
    return `**How Foreclosure Investing Works**\n\nForeclosures happen when homeowners default on their mortgage:\n\n**Judicial states** (FL, NY, NJ, IL...): Court process, sheriff's sale at courthouse. Longer timeline (1-3 years).\n\n**Non-judicial states** (TX, CA, AZ, GA...): Trustee sale, faster (3-6 months). Less court involvement.\n\n**What investors target:**\n• Opening bid = mortgage balance + fees (often below market)\n• Equity = market value - opening bid\n• REO = bank already owns it (missed the auction)\n\n**Risk factors:** Liens that survive foreclosure, property condition, title issues.\n\nWant me to find foreclosures in a specific state? — Trinity`
  }

  if (/redemption period/i.test(text)) {
    return `**Redemption Periods by State**\n\nThe redemption period is how long the owner has to pay you back (plus interest/penalty):\n\n🟢 **Short (< 1 year):** Texas (180 days), Georgia (N/A - deed state)\n🟡 **Medium (1-2 years):** Florida (2 yrs), Illinois (2-3 yrs), Indiana (1 yr)\n🔴 **Long (2+ years):** Iowa (2 yrs), Kentucky (2 yrs), Alabama (3 yrs)\n\n**General rule:** Shorter redemption = faster you either get paid or get the deed. Longer = more time for compound interest to build.\n\nWhich state's rules do you want to dig into? — Trinity`
  }

  return `I can explain:\n• How **tax lien** investing works\n• How **foreclosure** auctions work\n• **Redemption periods** by state\n• State-specific rules (ask: "How do tax liens work in [state]?")\n• Deal analysis and what makes a good deal\n\nWhat do you want to learn? — Trinity`
}

// ─── Main handler ─────────────────────────────────────────────────────────────

export async function trinityRespond(message: string, userId?: string, userTier: string = 'free'): Promise<TrinityMessage> {
  const intent = detectIntent(message)
  const ts = Date.now()

  try {
    switch (intent) {
      case 'greeting': {
        return {
          role: 'trinity',
          content: `I'm Trinity. I see everything in this market — foreclosures, tax liens, deeds, deals.\n\nTell me what you're looking for and I'll surface it. Try:\n• "Find tax liens under $5K in Florida with 18% interest"\n• "What's hot in Texas right now?"\n• "Is a $12K lien on a $180K home in Ohio a good deal?"\n\nWhat are we hunting today? — Trinity`,
          timestamp: ts,
        }
      }

      case 'search_listings': {
        const parsed = parseSearchQuery(message)
        const { listings, total, searchUrl } = await handleSearch(parsed, 4)

        if (total === 0) {
          const hasFilters = Object.keys(parsed).length > 0
          return {
            role: 'trinity',
            content: hasFilters
              ? `Nothing in the database matches those exact criteria yet — scrapers are still building coverage. Try broadening: remove the county filter, or try a neighboring state. — Trinity`
              : `I can search, but I need more context. Try: "Find tax liens under $10K in Florida" or "Show foreclosures in Harris County Texas". — Trinity`,
            timestamp: ts,
          }
        }

        const filterDesc = [
          parsed.state,
          parsed.county ? `${parsed.county} County` : null,
          parsed.maxBid ? `under $${parsed.maxBid.toLocaleString()}` : null,
          parsed.minRate ? `${parsed.minRate}%+ rate` : null,
          parsed.minEquity ? `${parsed.minEquity}%+ equity` : null,
        ].filter(Boolean).join(', ')

        return {
          role: 'trinity',
          content: `Found **${total.toLocaleString()}** matches${filterDesc ? ` for ${filterDesc}` : ''}. Here are the top deals by score:`,
          listings,
          searchUrl,
          timestamp: ts,
        }
      }

      case 'deal_analysis': {
        // Extract address or numbers from message for basic scoring
        const state = extractState(message)
        const bidAmt = extractNumber(message, [/\$?([\d,]+(?:K|k)?)\s*(?:lien|bid|opening|price|cost)/i, /(?:lien|bid|paid|costs?)\s*\$?([\d,]+(?:K|k)?)/i])
        const val = extractNumber(message, [/\$?([\d,]+(?:K|k)?)\s*(?:home|house|value|property|worth)/i, /(?:home|house|value|worth)\s*\$?([\d,]+(?:K|k)?)/i])

        const bidNum = bidAmt ? (bidAmt > 1000 ? bidAmt : bidAmt * 1000) : null
        const valNum = val ? (val > 1000 ? val : val * 1000) : null
        const equity = bidNum && valNum && valNum > 0 ? ((valNum - bidNum) / valNum) * 100 : null

        const scoreInput = { state: state || undefined, equityPct: equity, estimatedValue: valNum, openingBid: bidNum }
        const score = calcDealScore(scoreInput)

        if (!bidNum && !valNum) {
          return {
            role: 'trinity',
            content: `Give me the numbers and I'll analyze it. Example:\n"Is a $8,500 lien on a $95,000 home in Ohio a good deal?"\n\nOr paste the address and I'll look it up. — Trinity`,
            timestamp: ts,
          }
        }

        const verdict = score.grade === 'hot'
          ? `This looks strong. ${equity ? `${equity.toFixed(0)}% equity buffer` : ''} — that's the kind of cushion that makes investors sleep well.`
          : score.grade === 'warm'
          ? `Solid deal with some upside. Not a home run, but workable.`
          : `Tight margins here. The numbers don't leave much room for error.`

        return {
          role: 'trinity',
          content: `**Deal Analysis**${state ? ` — ${state}` : ''}\n\n${verdict}\n\n${bidNum ? `Bid/Lien: **$${bidNum.toLocaleString()}**\n` : ''}${valNum ? `Est. Value: **$${valNum.toLocaleString()}**\n` : ''}${equity !== null ? `Equity: **${equity.toFixed(1)}%**\n` : ''}\nDeal Score: **${score.score}/100** ${score.emoji}`,
          score: score,
          timestamp: ts,
        }
      }

      case 'market_intel': {
        const response = await handleMarketIntel(message)
        return { role: 'trinity', content: response, timestamp: ts }
      }

      case 'portfolio_query': {
        if (!userId) {
          return { role: 'trinity', content: `Sign in to your Forclos account so I can pull your portfolio data. — Trinity`, timestamp: ts }
        }
        if (userTier !== 'elite') {
          return { role: 'trinity', content: `Portfolio tracking is an Elite feature. Upgrade at forclos.com/pricing and I can give you a full P&L breakdown, redemption countdowns, and ROI analysis. — Trinity`, timestamp: ts }
        }
        const props = await db.portfolioProperty.findMany({ where: { userId }, take: 20 })
        const total = props.reduce((s, p) => s + p.purchasePrice, 0)
        const active = props.filter(p => p.status === 'active').length
        const nearDeadline = props.filter(p => {
          if (!p.purchaseDeadline) return false
          return (new Date(p.purchaseDeadline).getTime() - Date.now()) / 86400000 < 30
        }).length

        return {
          role: 'trinity',
          content: `**Your Portfolio**\n\n• **${props.length}** properties tracked\n• **${active}** active positions\n• **$${total.toLocaleString()}** total invested\n${nearDeadline > 0 ? `• ⚠️ **${nearDeadline}** redemption deadline${nearDeadline > 1 ? 's' : ''} within 30 days\n` : ''}\nHead to your Portfolio page for full P&L and accrued interest. — Trinity`,
          timestamp: ts,
        }
      }

      case 'education': {
        return { role: 'trinity', content: handleEducation(message), timestamp: ts }
      }

      case 'redemption_alert': {
        return {
          role: 'trinity',
          content: `Redemption alerts are managed in your Portfolio Tracker (Elite feature).\n\nAdd your certificate details there and I'll flag anything expiring within 30, 7, or 1 day — before it's too late to act.\n\nUpgrade to Elite at forclos.com/pricing. — Trinity`,
          timestamp: ts,
        }
      }

      default: {
        // Try a search anyway if there's a state or property type
        const parsed = parseSearchQuery(message)
        if (parsed.state || parsed.type) {
          const { listings, total, searchUrl } = await handleSearch(parsed, 4)
          if (total > 0) {
            return {
              role: 'trinity',
              content: `Found **${total.toLocaleString()}** listings. Let me show you the top deals:`,
              listings,
              searchUrl,
              timestamp: ts,
            }
          }
        }
        return {
          role: 'trinity',
          content: `I'm built for real estate intel. Ask me to:\n• Find specific deals ("tax liens under $5K in Florida")\n• Analyze a deal ("Is $8K lien on a $90K home good?")\n• Explain strategy ("How do tax liens work in Texas?")\n• Check the market ("What's hot in Ohio right now?")\n\nWhat are we hunting? — Trinity`,
          timestamp: ts,
        }
      }
    }
  } catch (err) {
    console.error('Trinity error:', err)
    return {
      role: 'trinity',
      content: `I hit a snag on my end. The database might still be loading. Try again in a moment. — Trinity`,
      timestamp: ts,
    }
  }
}
