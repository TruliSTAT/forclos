export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession, TIER_LIMITS } from '@/lib/auth'

function p(v: string | null) { return parseFloat(v || '0') || 0 }
function pi(v: string | null) { return parseInt(v || '0') || 0 }

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const user = await getSession()
  const tier = user?.tier || 'free'
  const limits = TIER_LIMITS[tier]

  // Rate limiting for free users
  if (tier === 'free' && user) {
    const now = new Date()
    const dbUser = await db.user.findUnique({ where: { id: user.id } })
    if (dbUser) {
      const resetDay = new Date(dbUser.searchResetAt)
      const sameDay = resetDay.toDateString() === now.toDateString()
      const count = sameDay ? dbUser.searchCount : 0
      if (count >= limits.searchesPerDay) {
        return NextResponse.json({ error: 'Daily search limit reached', upgrade: true }, { status: 429 })
      }
      await db.user.update({
        where: { id: user.id },
        data: {
          searchCount: sameDay ? { increment: 1 } : 1,
          searchResetAt: sameDay ? undefined : now,
        },
      })
    }
  }

  // ─── Base params ───
  const q         = searchParams.get('q') || ''
  const state     = searchParams.get('state') || ''
  const county    = searchParams.get('county') || ''
  const city      = searchParams.get('city') || ''
  const zip       = searchParams.get('zip') || ''
  const type      = searchParams.get('type') || '' // foreclosure | tax-lien | deed-lien | ''
  const status    = searchParams.get('status') || ''
  const page      = Math.max(1, pi(searchParams.get('page')))
  const limit     = Math.min(50, Math.max(1, pi(searchParams.get('limit')) || 25))
  const skip      = (page - 1) * limit
  const sortBy    = searchParams.get('sort') || 'equity_desc'
  const format    = searchParams.get('format') || 'json'

  // ─── Property filters ───
  const propType   = searchParams.get('propType') || ''
  const minBeds    = p(searchParams.get('minBeds'))
  const maxBeds    = p(searchParams.get('maxBeds'))
  const minBaths   = p(searchParams.get('minBaths'))
  const maxBaths   = p(searchParams.get('maxBaths'))
  const minSqft    = p(searchParams.get('minSqft'))
  const maxSqft    = p(searchParams.get('maxSqft'))
  const minLot     = p(searchParams.get('minLot'))
  const maxLot     = p(searchParams.get('maxLot'))
  const minYearBlt = p(searchParams.get('minYearBlt'))
  const maxYearBlt = p(searchParams.get('maxYearBlt'))
  const garage     = searchParams.get('garage') // 'true'|'false'|''
  const pool       = searchParams.get('pool')

  // ─── Financial filters (Pro only) ───
  const minBid     = p(searchParams.get('minBid'))
  const maxBid     = p(searchParams.get('maxBid'))
  const minVal     = p(searchParams.get('minVal'))
  const maxVal     = p(searchParams.get('maxVal'))
  const minEquity  = limits.advancedFilters ? p(searchParams.get('minEquity')) : 0
  const minRoi     = limits.advancedFilters ? p(searchParams.get('minRoi')) : 0
  const minRate    = limits.advancedFilters ? p(searchParams.get('minRate')) : 0
  const maxRate    = limits.advancedFilters ? p(searchParams.get('maxRate')) : 0
  const minRedempt = limits.advancedFilters ? p(searchParams.get('minRedempt')) : 0
  const maxRedempt = limits.advancedFilters ? p(searchParams.get('maxRedempt')) : 0

  // ─── Auction filters ───
  const dateFrom     = searchParams.get('dateFrom') || ''
  const dateTo       = searchParams.get('dateTo') || ''
  const auctionType  = searchParams.get('auctionType') || ''
  const platform     = searchParams.get('platform') || ''

  // ─── Foreclosure specific ───
  const fcType     = searchParams.get('fcType') || ''
  const lender     = searchParams.get('lender') || ''
  const minDefault = p(searchParams.get('minDefault'))
  const maxDaysFiled = p(searchParams.get('maxDaysFiled'))

  // ─── Tax lien specific ───
  const lienMinYears  = p(searchParams.get('lienMinYears'))
  const lienMaxYears  = p(searchParams.get('lienMaxYears'))
  const overbid       = searchParams.get('overbid') // 'true'|'false'|''
  const subsequent    = searchParams.get('subsequent')

  // ─── Sort ───
  type OrderBy = Record<string, unknown>
  function getOrderBy(sort: string): OrderBy {
    switch (sort) {
      case 'equity_desc':   return { equityPct: 'desc' }
      case 'bid_asc':       return { openingBid: 'asc' }
      case 'bid_desc':      return { openingBid: 'desc' }
      case 'date_asc':      return { auctionDate: 'asc' }
      case 'date_desc':     return { auctionDate: 'desc' }
      case 'scraped_desc':  return { scrapedAt: 'desc' }
      default:              return { auctionDate: 'asc' }
    }
  }
  function getTaxOrderBy(sort: string): OrderBy {
    switch (sort) {
      case 'equity_desc':   return { estimatedRoi: 'desc' }
      case 'bid_asc':       return { lienAmount: 'asc' }
      case 'bid_desc':      return { lienAmount: 'desc' }
      case 'date_asc':      return { saleDate: 'asc' }
      case 'date_desc':     return { saleDate: 'desc' }
      case 'roi_desc':      return { estimatedRoi: 'desc' }
      case 'rate_desc':     return { interestRate: 'desc' }
      case 'scraped_desc':  return { scrapedAt: 'desc' }
      default:              return { saleDate: 'asc' }
    }
  }

  // ─── Property WHERE ───
  function buildPropertyWhere() {
    const w: Record<string, unknown> = {}
    if (state) w.state = state.toUpperCase()
    if (county) w.county = { contains: county, mode: 'insensitive' }
    if (city) w.city = { contains: city, mode: 'insensitive' }
    if (zip) w.zip = zip
    if (propType) w.propertyType = propType
    if (garage === 'true') w.garage = true
    if (garage === 'false') w.garage = false
    if (pool === 'true') w.pool = true
    if (pool === 'false') w.pool = false
    if (minBeds) w.bedrooms = { ...(w.bedrooms as object || {}), gte: minBeds }
    if (maxBeds) w.bedrooms = { ...(w.bedrooms as object || {}), lte: maxBeds }
    if (minBaths) w.bathrooms = { ...(w.bathrooms as object || {}), gte: minBaths }
    if (maxBaths) w.bathrooms = { ...(w.bathrooms as object || {}), lte: maxBaths }
    if (minSqft) w.sqft = { ...(w.sqft as object || {}), gte: minSqft }
    if (maxSqft) w.sqft = { ...(w.sqft as object || {}), lte: maxSqft }
    if (minLot) w.lotSizeAcres = { ...(w.lotSizeAcres as object || {}), gte: minLot }
    if (maxLot) w.lotSizeAcres = { ...(w.lotSizeAcres as object || {}), lte: maxLot }
    if (minYearBlt) w.yearBuilt = { ...(w.yearBuilt as object || {}), gte: minYearBlt }
    if (maxYearBlt) w.yearBuilt = { ...(w.yearBuilt as object || {}), lte: maxYearBlt }
    if (q) {
      w.OR = [
        { address: { contains: q, mode: 'insensitive' } },
        { city: { contains: q, mode: 'insensitive' } },
        { county: { contains: q, mode: 'insensitive' } },
        { parcelId: { contains: q, mode: 'insensitive' } },
      ]
    }
    return w
  }

  const listings: unknown[] = []
  let total = 0

  // ─── FORECLOSURES ───
  if (!type || type === 'foreclosure') {
    const propWhere = buildPropertyWhere()
    const w: Record<string, unknown> = { property: propWhere }
    if (status) w.status = status
    if (fcType) w.foreclosureType = fcType
    if (lender) w.lender = { contains: lender, mode: 'insensitive' }
    if (auctionType) w.auctionType = auctionType
    if (platform) w.auctionPlatform = platform
    if (minBid) w.openingBid = { ...(w.openingBid as object || {}), gte: minBid }
    if (maxBid) w.openingBid = { ...(w.openingBid as object || {}), lte: maxBid }
    if (minVal) w.estimatedValue = { ...(w.estimatedValue as object || {}), gte: minVal }
    if (maxVal) w.estimatedValue = { ...(w.estimatedValue as object || {}), lte: maxVal }
    if (minEquity) w.equityPct = { ...(w.equityPct as object || {}), gte: minEquity }
    if (minDefault) w.defaultAmount = { gte: minDefault }
    if (maxDaysFiled) w.daysSinceFiling = { lte: maxDaysFiled }
    if (dateFrom) w.auctionDate = { ...(w.auctionDate as object || {}), gte: new Date(dateFrom) }
    if (dateTo) w.auctionDate = { ...(w.auctionDate as object || {}), lte: new Date(dateTo) }

    const onlyFC = type === 'foreclosure'
    const [rows, count] = await Promise.all([
      db.foreclosureListing.findMany({
        where: w as any,
        include: { property: true },
        orderBy: getOrderBy(sortBy),
        skip: onlyFC ? skip : 0,
        take: onlyFC ? limit : Math.floor(limit / 3),
      }),
      db.foreclosureListing.count({ where: w as any }),
    ])

    listings.push(...rows.map(f => ({
      id: f.id,
      type: 'foreclosure',
      address: f.property.address,
      city: f.property.city,
      county: f.property.county,
      state: f.property.state,
      zip: f.property.zip,
      parcelId: f.property.parcelId,
      propertyType: f.property.propertyType,
      bedrooms: f.property.bedrooms,
      bathrooms: f.property.bathrooms,
      sqft: f.property.sqft,
      yearBuilt: f.property.yearBuilt,
      auctionDate: f.auctionDate?.toISOString(),
      openingBid: f.openingBid,
      estimatedValue: f.estimatedValue,
      assessedValue: f.assessedValue,
      equityPct: f.equityPct,
      defaultAmount: f.defaultAmount,
      originalLoanAmount: f.originalLoanAmount,
      status: f.status,
      foreclosureType: f.foreclosureType,
      lender: f.lender,
      auctionType: f.auctionType,
      auctionPlatform: f.auctionPlatform,
      caseNumber: f.caseNumber,
      daysSinceFiling: f.daysSinceFiling,
      sourceUrl: f.sourceUrl,
      scrapedAt: f.scrapedAt.toISOString(),
    })))
    total += count
  }

  // ─── TAX LIENS ───
  if (!type || type === 'tax-lien') {
    const propWhere = buildPropertyWhere()
    const w: Record<string, unknown> = { property: propWhere, saleType: 'lien' }
    if (status) w.status = status
    if (auctionType) w.auctionType = auctionType
    if (platform) w.auctionPlatform = platform
    if (minBid) w.lienAmount = { ...(w.lienAmount as object || {}), gte: minBid }
    if (maxBid) w.lienAmount = { ...(w.lienAmount as object || {}), lte: maxBid }
    if (minRate) w.interestRate = { ...(w.interestRate as object || {}), gte: minRate }
    if (maxRate) w.interestRate = { ...(w.interestRate as object || {}), lte: maxRate }
    if (minRoi) w.estimatedRoi = { gte: minRoi }
    if (lienMinYears) w.yearsDelinquent = { ...(w.yearsDelinquent as object || {}), gte: lienMinYears }
    if (lienMaxYears) w.yearsDelinquent = { ...(w.yearsDelinquent as object || {}), lte: lienMaxYears }
    if (minRedempt) w.redemptionPeriodMonths = { ...(w.redemptionPeriodMonths as object || {}), gte: minRedempt }
    if (maxRedempt) w.redemptionPeriodMonths = { ...(w.redemptionPeriodMonths as object || {}), lte: maxRedempt }
    if (overbid === 'true') w.overbidAllowed = true
    if (overbid === 'false') w.overbidAllowed = false
    if (subsequent === 'true') w.subsequentTaxesAllowed = true
    if (dateFrom) w.saleDate = { ...(w.saleDate as object || {}), gte: new Date(dateFrom) }
    if (dateTo) w.saleDate = { ...(w.saleDate as object || {}), lte: new Date(dateTo) }

    const onlyTL = type === 'tax-lien'
    const [rows, count] = await Promise.all([
      db.taxSaleListing.findMany({
        where: w as any,
        include: { property: true },
        orderBy: getTaxOrderBy(sortBy),
        skip: onlyTL ? skip : 0,
        take: onlyTL ? limit : Math.floor(limit / 3),
      }),
      db.taxSaleListing.count({ where: w as any }),
    ])

    listings.push(...rows.map(t => ({
      id: t.id,
      type: 'tax-lien',
      address: t.property.address,
      city: t.property.city,
      county: t.property.county,
      state: t.property.state,
      zip: t.property.zip,
      parcelId: t.property.parcelId,
      propertyType: t.property.propertyType,
      bedrooms: t.property.bedrooms,
      bathrooms: t.property.bathrooms,
      sqft: t.property.sqft,
      yearBuilt: t.property.yearBuilt,
      saleDate: t.saleDate?.toISOString(),
      lienAmount: t.lienAmount,
      taxDelinquencyAmount: t.taxDelinquencyAmount,
      yearsDelinquent: t.yearsDelinquent,
      interestRate: t.interestRate,
      certificateRate: t.certificateRate,
      penaltyRate: t.penaltyRate,
      redemptionPeriodMonths: t.redemptionPeriodMonths,
      overbidAllowed: t.overbidAllowed,
      subsequentTaxesAllowed: t.subsequentTaxesAllowed,
      estimatedValue: t.estimatedValue,
      estimatedRoi: t.estimatedRoi,
      status: t.status,
      auctionType: t.auctionType,
      auctionPlatform: t.auctionPlatform,
      certificateNumber: t.certificateNumber,
      yearOfTax: t.yearOfTax,
      sourceUrl: t.sourceUrl,
      scrapedAt: t.scrapedAt.toISOString(),
    })))
    total += count
  }

  // ─── DEEDS & LIENS ───
  if (!type || type === 'deed-lien') {
    const propWhere = buildPropertyWhere()
    const w: Record<string, unknown> = { property: propWhere, saleType: { in: ['deed', 'mechanic_lien', 'judgment_lien'] } }
    if (status) w.status = status
    if (minBid) w.lienAmount = { ...(w.lienAmount as object || {}), gte: minBid }
    if (maxBid) w.lienAmount = { ...(w.lienAmount as object || {}), lte: maxBid }
    if (dateFrom) w.saleDate = { ...(w.saleDate as object || {}), gte: new Date(dateFrom) }
    if (dateTo) w.saleDate = { ...(w.saleDate as object || {}), lte: new Date(dateTo) }
    if (platform) w.auctionPlatform = platform

    const onlyDL = type === 'deed-lien'
    const [rows, count] = await Promise.all([
      db.taxSaleListing.findMany({
        where: w as any,
        include: { property: true },
        orderBy: getTaxOrderBy(sortBy),
        skip: onlyDL ? skip : 0,
        take: onlyDL ? limit : Math.floor(limit / 3),
      }),
      db.taxSaleListing.count({ where: w as any }),
    ])

    listings.push(...rows.map(t => ({
      id: t.id,
      type: 'deed-lien',
      address: t.property.address,
      city: t.property.city,
      county: t.property.county,
      state: t.property.state,
      zip: t.property.zip,
      parcelId: t.property.parcelId,
      propertyType: t.property.propertyType,
      saleDate: t.saleDate?.toISOString(),
      lienAmount: t.lienAmount,
      interestRate: t.interestRate,
      estimatedValue: t.estimatedValue,
      estimatedRoi: t.estimatedRoi,
      status: t.status,
      auctionPlatform: t.auctionPlatform,
      sourceUrl: t.sourceUrl,
      scrapedAt: t.scrapedAt.toISOString(),
    })))
    total += count
  }

  // CSV export (Pro+)
  if (format === 'csv') {
    if (!TIER_LIMITS[tier].csvExport) {
      return NextResponse.json({ error: 'Pro plan required for CSV export', upgrade: true }, { status: 403 })
    }
    const headers = ['Type','Address','City','County','State','ZIP','Parcel ID','Beds','Baths','Sqft',
      'Opening Bid','Est. Value','Equity %','Interest Rate','Est. ROI','Date','Status','Platform','Source URL']
    const rows = (listings as any[]).map(l => [
      l.type, l.address, l.city, l.county, l.state, l.zip||'', l.parcelId||'',
      l.bedrooms||'', l.bathrooms||'', l.sqft||'',
      l.openingBid??l.lienAmount??'', l.estimatedValue??'', l.equityPct??l.estimatedRoi??'',
      l.interestRate??'', l.estimatedRoi??'',
      l.auctionDate??l.saleDate??'', l.status, l.auctionPlatform??'', l.sourceUrl??'',
    ].map(v => `"${String(v).replace(/"/g,'""')}"`).join(','))
    const csv = [headers.join(','), ...rows].join('\n')
    return new Response(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="lienscope-export.csv"',
      },
    })
  }

  return NextResponse.json({
    listings: listings.slice(0, limit),
    total,
    page,
    pages: Math.ceil(total / limit),
    tier,
    limits: {
      advancedFilters: limits.advancedFilters,
      csvExport: limits.csvExport,
      dealAnalyzer: limits.dealAnalyzer,
      savedSearches: limits.savedSearches,
    },
  })
}
