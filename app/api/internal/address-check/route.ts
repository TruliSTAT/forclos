import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

const INTERNAL_KEY = process.env.FORCLOS_INTERNAL_KEY || ''

/**
 * POST /api/internal/address-check
 * Internal endpoint for CitaHome bridge — checks if an address has
 * any foreclosure filings, tax liens, or tax deed records in Forclos.
 *
 * Protected by x-internal-key header.
 */
export async function POST(req: Request) {
  // Auth check
  const key = req.headers.get('x-internal-key')
  if (!INTERNAL_KEY || key !== INTERNAL_KEY) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  let body: { address?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const { address } = body
  if (!address || typeof address !== 'string' || address.trim().length < 5) {
    return NextResponse.json({ error: 'address required (min 5 chars)' }, { status: 400 })
  }

  // Normalize: strip punctuation, collapse whitespace, uppercase for matching
  const norm = address.toUpperCase().replace(/[^A-Z0-9\s]/g, '').replace(/\s+/g, ' ').trim()

  try {
    // Search foreclosure listings by property address
    const foreclosures = await db.foreclosureListing.findMany({
      where: {
        property: {
          address: { contains: norm, mode: 'insensitive' },
        },
      },
      include: { property: true },
      take: 5,
    })

    // Search tax sale listings (liens + deeds) by property address
    const taxSales = await db.taxSaleListing.findMany({
      where: {
        property: {
          address: { contains: norm, mode: 'insensitive' },
        },
      },
      include: { property: true },
      take: 5,
    })

    const records = [
      ...foreclosures.map(f => ({
        type: f.foreclosureType || 'foreclosure',
        date: f.filingDate?.toISOString() ?? f.auctionDate?.toISOString() ?? null,
        amount: f.defaultAmount ?? f.openingBid ?? null,
        status: f.status,
        county: f.property.county,
        state: f.property.state,
      })),
      ...taxSales.map(t => ({
        type: t.saleType === 'deed' ? 'tax-deed' : 'tax-lien',
        date: t.saleDate?.toISOString() ?? null,
        amount: t.lienAmount ?? t.taxDelinquencyAmount ?? null,
        status: t.status,
        county: t.county,
        state: t.state,
      })),
    ]

    return NextResponse.json({
      found: records.length > 0,
      count: records.length,
      records,
    })
  } catch (err) {
    console.error('[forclos/address-check] DB error:', err)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}
