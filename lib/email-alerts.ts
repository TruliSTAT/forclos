// Forclos Email Alert System
// Runs saved searches and emails users when new matching listings appear
// Designed to run as a cron job: node scripts/send-alerts.ts

import { db } from './db'
import { calcDealScore } from './deal-score'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM_EMAIL = 'alerts@forclos.com'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://forclos.com'

interface AlertListing {
  id: string
  type: string
  address: string
  city: string
  state: string
  amount: number | null
  estimatedValue: number | null
  equityPct: number | null
  interestRate: number | null
  score: number
  grade: string
}

export async function sendSavedSearchAlerts() {
  if (!RESEND_API_KEY) {
    console.log('No RESEND_API_KEY configured, skipping email alerts')
    return
  }

  // Find all active saved searches with alerts enabled
  const searches = await db.savedSearch.findMany({
    where: { alertsOn: true },
    include: { user: { select: { email: true, name: true, tier: true } } },
  })

  console.log(`Processing ${searches.length} alert subscriptions…`)

  for (const search of searches) {
    try {
      // Only Pro+ users get email alerts
      if (search.user.tier === 'free') continue

      const filters = search.filters as Record<string, string>
      const since = search.lastAlert || new Date(Date.now() - 24 * 60 * 60 * 1000) // last 24h

      const matches = await findMatchingListings(filters, since, search.tab)
      if (matches.length === 0) continue

      // Send email
      await sendAlertEmail(search.user.email, search.user.name, search.name, matches)

      // Update lastAlert
      await db.savedSearch.update({
        where: { id: search.id },
        data: { lastAlert: new Date() },
      })

      console.log(`Sent alert to ${search.user.email}: ${matches.length} matches for "${search.name}"`)
    } catch (e) {
      console.error(`Alert error for search ${search.id}:`, e)
    }
  }
}

async function findMatchingListings(
  filters: Record<string, string>,
  since: Date,
  tab: string
): Promise<AlertListing[]> {
  const results: AlertListing[] = []

  const state = filters.state || ''
  const county = filters.county || ''
  const minBid = parseFloat(filters.minBid || '0') || 0
  const maxBid = parseFloat(filters.maxBid || '0') || 0
  const minEquity = parseFloat(filters.minEquity || '0') || 0

  if (tab === 'foreclosure' || tab === '' || !tab) {
    const fcWhere: any = {
      scrapedAt: { gte: since },
      property: {} as Record<string, unknown>,
    }
    if (state) fcWhere.property.state = state.toUpperCase()
    if (county) fcWhere.property.county = { contains: county, mode: 'insensitive' }
    if (minBid) fcWhere.openingBid = { gte: minBid }
    if (maxBid) fcWhere.openingBid = { ...(fcWhere.openingBid || {}), lte: maxBid }
    if (minEquity) fcWhere.equityPct = { gte: minEquity }

    const rows = await db.foreclosureListing.findMany({
      where: fcWhere,
      include: { property: true },
      take: 10,
      orderBy: { equityPct: 'desc' },
    })

    results.push(...rows.map(f => {
      const scoreResult = calcDealScore({
        equityPct: f.equityPct, state: f.property.state,
        auctionDate: f.auctionDate, propertyType: f.property.propertyType,
        openingBid: f.openingBid, estimatedValue: f.estimatedValue,
      })
      return {
        id: f.id, type: 'foreclosure',
        address: f.property.address, city: f.property.city, state: f.property.state,
        amount: f.openingBid, estimatedValue: f.estimatedValue, equityPct: f.equityPct,
        interestRate: null, score: scoreResult.score, grade: scoreResult.grade,
      }
    }))
  }

  if (tab === 'tax-lien' || tab === '' || !tab) {
    const txWhere: any = {
      scrapedAt: { gte: since },
      saleType: 'lien',
      property: {} as Record<string, unknown>,
    }
    if (state) txWhere.property.state = state.toUpperCase()
    if (county) txWhere.property.county = { contains: county, mode: 'insensitive' }
    if (minBid) txWhere.lienAmount = { gte: minBid }
    if (maxBid) txWhere.lienAmount = { ...(txWhere.lienAmount || {}), lte: maxBid }

    const rows = await db.taxSaleListing.findMany({
      where: txWhere,
      include: { property: true },
      take: 10,
      orderBy: { estimatedRoi: 'desc' },
    })

    results.push(...rows.map(t => {
      const scoreResult = calcDealScore({
        estimatedRoi: t.estimatedRoi, yearsDelinquent: t.yearsDelinquent,
        interestRate: t.interestRate, state: t.property.state,
        saleDate: t.saleDate, propertyType: t.property.propertyType,
        lienAmount: t.lienAmount, estimatedValue: t.estimatedValue,
      })
      return {
        id: t.id, type: 'tax-lien',
        address: t.property.address, city: t.property.city, state: t.property.state,
        amount: t.lienAmount, estimatedValue: t.estimatedValue, equityPct: t.estimatedRoi,
        interestRate: t.interestRate, score: scoreResult.score, grade: scoreResult.grade,
      }
    }))
  }

  // Sort by score descending, take top 10
  return results.sort((a, b) => b.score - a.score).slice(0, 10)
}

function fmt$(n: number | null) {
  if (n == null) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

async function sendAlertEmail(
  email: string,
  name: string | null,
  searchName: string,
  listings: AlertListing[]
) {
  const rows = listings.map(l => `
    <tr>
      <td style="padding:12px 8px;border-bottom:1px solid #1e293b;">
        <a href="${SITE_URL}/listings/${l.id}?type=${l.type}" style="color:#34d399;text-decoration:none;font-weight:600;">
          ${l.address}
        </a>
        <div style="color:#64748b;font-size:12px;margin-top:2px;">${l.city}, ${l.state}</div>
      </td>
      <td style="padding:12px 8px;border-bottom:1px solid #1e293b;text-align:right;color:#e2e8f0;font-weight:600;">
        ${fmt$(l.amount)}
      </td>
      <td style="padding:12px 8px;border-bottom:1px solid #1e293b;text-align:right;color:${l.equityPct != null && l.equityPct > 30 ? '#34d399' : '#94a3b8'};">
        ${l.equityPct != null ? `${l.equityPct.toFixed(0)}%` : '—'}
      </td>
      <td style="padding:12px 8px;border-bottom:1px solid #1e293b;text-align:center;">
        <span style="display:inline-block;padding:2px 8px;border-radius:999px;font-size:11px;font-weight:700;background:${l.grade === 'hot' ? '#065f46' : l.grade === 'warm' ? '#78350f' : '#450a0a'};color:${l.grade === 'hot' ? '#34d399' : l.grade === 'warm' ? '#fbbf24' : '#f87171'};">
          ${l.score} ${l.grade.toUpperCase()}
        </span>
      </td>
    </tr>
  `).join('')

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#020617;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:32px 16px;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:32px;">
      <div style="width:36px;height:36px;background:#10b981;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:900;color:#020617;font-size:18px;">F</div>
      <span style="color:#ffffff;font-weight:900;font-size:20px;">Forclos</span>
    </div>

    <h1 style="color:#ffffff;font-size:22px;font-weight:900;margin:0 0 8px;">
      🔔 ${listings.length} new match${listings.length !== 1 ? 'es' : ''} for "${searchName}"
    </h1>
    <p style="color:#94a3b8;margin:0 0 28px;font-size:15px;">
      Hi ${name || 'Investor'}, here are the freshest listings matching your saved search.
    </p>

    <div style="background:#0f172a;border:1px solid #1e293b;border-radius:16px;overflow:hidden;margin-bottom:24px;">
      <table style="width:100%;border-collapse:collapse;">
        <thead>
          <tr style="background:#1e293b;">
            <th style="padding:10px 8px;text-align:left;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;">Property</th>
            <th style="padding:10px 8px;text-align:right;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;">Bid/Lien</th>
            <th style="padding:10px 8px;text-align:right;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;">Equity</th>
            <th style="padding:10px 8px;text-align:center;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;">Score</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>

    <a href="${SITE_URL}/search" style="display:block;background:#10b981;color:#020617;font-weight:900;text-align:center;padding:14px 24px;border-radius:12px;text-decoration:none;font-size:15px;margin-bottom:28px;">
      Search All Listings →
    </a>

    <div style="border-top:1px solid #1e293b;padding-top:20px;text-align:center;">
      <p style="color:#475569;font-size:12px;margin:0 0 8px;">
        You're receiving this because you have email alerts enabled for "${searchName}".
      </p>
      <a href="${SITE_URL}/search" style="color:#34d399;font-size:12px;">Manage alerts</a>
    </div>
  </div>
</body>
</html>`

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Forclos Alerts <${FROM_EMAIL}>`,
      to: [email],
      subject: `🔔 ${listings.length} new listing${listings.length !== 1 ? 's' : ''} match your search: ${searchName}`,
      html,
    }),
  })
}
