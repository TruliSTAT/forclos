export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const user = await getSession()
  const tier = user?.tier || 'free'

  const state       = searchParams.get('state') || ''
  const listingType = searchParams.get('listingType') || ''
  const minPrice    = parseFloat(searchParams.get('minPrice') || '0') || 0
  const maxPrice    = parseFloat(searchParams.get('maxPrice') || '0') || 0
  const sort        = searchParams.get('sort') || 'newest'
  const page        = Math.max(1, parseInt(searchParams.get('page') || '1'))
  const limit       = 24
  const skip        = (page - 1) * limit

  const where: Record<string, unknown> = { status: 'active' }
  if (state) where.state = state.toUpperCase()
  if (listingType) where.listingType = listingType
  if (minPrice) where.askingPrice = { gte: minPrice }
  if (maxPrice) where.askingPrice = { ...(where.askingPrice as object || {}), lte: maxPrice }

  const orderBy: Record<string, string> =
    sort === 'price_asc' ? { askingPrice: 'asc' } :
    sort === 'price_desc' ? { askingPrice: 'desc' } :
    sort === 'roi_desc' ? { estimatedRoi: 'desc' } :
    { createdAt: 'desc' }

  const [rawListings, total] = await Promise.all([
    db.marketplaceListing.findMany({
      where,
      orderBy,
      skip,
      take: limit,
      include: {
        seller: { select: { id: true, name: true, tier: true } },
        _count: { select: { offers: true } },
      },
    }),
    db.marketplaceListing.count({ where }),
  ])

  // Blur details for free users
  const listings = rawListings.map(l => {
    const canSeeDetails = tier === 'pro' || tier === 'elite'
    return {
      id: l.id,
      state: l.state,
      city: canSeeDetails ? l.city : '●●●●●',
      county: canSeeDetails ? l.county : '●●●●●',
      address: canSeeDetails ? l.address : `${l.city}, ${l.state}`,
      propertyType: l.propertyType,
      listingType: l.listingType,
      bedrooms: l.bedrooms,
      bathrooms: l.bathrooms,
      sqft: l.sqft,
      yearBuilt: l.yearBuilt,
      askingPrice: l.askingPrice,
      estimatedValue: l.estimatedValue,
      estimatedRoi: l.estimatedRoi,
      equityPct: l.equityPct,
      purchasePricePaid: canSeeDetails ? l.purchasePricePaid : null,
      description: canSeeDetails ? l.description : null,
      reasonForSelling: canSeeDetails ? l.reasonForSelling : null,
      photos: canSeeDetails ? l.photos : [],
      daysOnMarket: l.daysOnMarket,
      offerCount: l._count.offers,
      seller: canSeeDetails ? { name: l.seller.name, tier: l.seller.tier } : null,
      blurred: !canSeeDetails,
      createdAt: l.createdAt,
    }
  })

  return NextResponse.json({ listings, total, page, pages: Math.ceil(total / limit), tier })
}

export async function POST(req: Request) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: 'Login required' }, { status: 401 })
  if (user.tier !== 'elite') {
    return NextResponse.json({ error: 'Elite plan required to list properties', upgrade: true }, { status: 403 })
  }

  try {
    const body = await req.json()
    const {
      address, city, county, state, zip, propertyType,
      bedrooms, bathrooms, sqft, yearBuilt, lotSizeAcres,
      listingType, purchasePricePaid, askingPrice, estimatedValue,
      description, reasonForSelling, photos, documents,
    } = body

    if (!address || !city || !state || !askingPrice || !listingType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const equityPct = estimatedValue && askingPrice
      ? ((estimatedValue - askingPrice) / estimatedValue) * 100
      : null

    const listing = await db.marketplaceListing.create({
      data: {
        sellerId: user.id,
        address, city, county: county || '', state: state.toUpperCase(), zip,
        propertyType, bedrooms, bathrooms, sqft, yearBuilt, lotSizeAcres,
        listingType, purchasePricePaid, askingPrice, estimatedValue,
        equityPct,
        description, reasonForSelling,
        photos: photos || [],
        documents: documents || [],
        status: 'pending', // requires admin approval
      },
    })

    return NextResponse.json({ listing }, { status: 201 })
  } catch (e) {
    console.error('Marketplace create error:', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
