export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const q = searchParams.get('q') || ''
  const state = searchParams.get('state') || ''
  const county = searchParams.get('county') || ''
  const type = searchParams.get('type') || ''
  const minBid = parseFloat(searchParams.get('minBid') || '0') || 0
  const maxBid = parseFloat(searchParams.get('maxBid') || '0') || 0
  const status = searchParams.get('status') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '25')
  const format = searchParams.get('format') || 'json'
  const skip = (page - 1) * limit

  // Build property filter
  const propertyWhere: Record<string, unknown> = {}
  if (state) propertyWhere.state = state.toUpperCase()
  if (county) propertyWhere.county = { contains: county, mode: 'insensitive' }
  if (q) {
    propertyWhere.OR = [
      { address: { contains: q, mode: 'insensitive' } },
      { city: { contains: q, mode: 'insensitive' } },
      { county: { contains: q, mode: 'insensitive' } },
      { parcelId: { contains: q, mode: 'insensitive' } },
    ]
  }

  const listings: unknown[] = []
  let total = 0

  if (!type || type === 'foreclosure') {
    const fcWhere: Record<string, unknown> = { property: propertyWhere }
    if (status) fcWhere.status = status
    if (minBid) fcWhere.openingBid = { gte: minBid }
    if (maxBid && maxBid > 0) {
      fcWhere.openingBid = { ...(fcWhere.openingBid as object || {}), lte: maxBid }
    }

    const [fcListings, fcCount] = await Promise.all([
      db.foreclosureListing.findMany({
        where: fcWhere as any,
        include: { property: true },
        orderBy: { auctionDate: 'asc' },
        skip: type === 'foreclosure' ? skip : 0,
        take: type === 'foreclosure' ? limit : Math.floor(limit / 2),
      }),
      db.foreclosureListing.count({ where: fcWhere as any }),
    ])

    listings.push(...fcListings.map(f => ({
      id: f.id,
      type: 'foreclosure',
      address: f.property.address,
      city: f.property.city,
      county: f.property.county,
      state: f.property.state,
      zip: f.property.zip,
      parcelId: f.property.parcelId,
      propertyType: f.property.propertyType,
      auctionDate: f.auctionDate?.toISOString(),
      openingBid: f.openingBid,
      status: f.status,
      lender: f.lender,
      caseNumber: f.caseNumber,
      sourceUrl: f.sourceUrl,
      scrapedAt: f.scrapedAt.toISOString(),
    })))
    total += fcCount
  }

  if (!type || type === 'tax-lien' || type === 'tax-deed') {
    const txWhere: Record<string, unknown> = { property: propertyWhere }
    if (type === 'tax-lien') txWhere.saleType = 'lien'
    else if (type === 'tax-deed') txWhere.saleType = 'deed'
    if (status) txWhere.status = status
    if (minBid) txWhere.lienAmount = { gte: minBid }
    if (maxBid && maxBid > 0) {
      txWhere.lienAmount = { ...(txWhere.lienAmount as object || {}), lte: maxBid }
    }

    const [txListings, txCount] = await Promise.all([
      db.taxSaleListing.findMany({
        where: txWhere as any,
        include: { property: true },
        orderBy: { saleDate: 'asc' },
        skip: (type === 'tax-lien' || type === 'tax-deed') ? skip : 0,
        take: (type === 'tax-lien' || type === 'tax-deed') ? limit : Math.ceil(limit / 2),
      }),
      db.taxSaleListing.count({ where: txWhere as any }),
    ])

    listings.push(...txListings.map(t => ({
      id: t.id,
      type: t.saleType === 'lien' ? 'tax-lien' : 'tax-deed',
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
      certificateNumber: t.certificateNumber,
      yearOfTax: t.yearOfTax,
      status: t.status,
      sourceUrl: t.sourceUrl,
      scrapedAt: t.scrapedAt.toISOString(),
    })))
    total += txCount
  }

  // CSV export
  if (format === 'csv') {
    const headers = ['Type', 'Address', 'City', 'County', 'State', 'ZIP', 'Parcel ID', 'Amount', 'Date', 'Status', 'Source URL']
    const rows = listings.map((l: any) => [
      l.type, l.address, l.city, l.county, l.state, l.zip || '', l.parcelId || '',
      l.openingBid ?? l.lienAmount ?? '',
      l.auctionDate ?? l.saleDate ?? '',
      l.status, l.sourceUrl || '',
    ].map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))

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
  })
}
