export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get('type') || 'foreclosure'
  const id = params.id

  try {
    if (type === 'foreclosure') {
      const listing = await db.foreclosureListing.findUnique({
        where: { id },
        include: { property: true },
      })
      if (!listing) return NextResponse.json({ error: 'Not found' }, { status: 404 })

      return NextResponse.json({
        listing: {
          id: listing.id,
          type: 'foreclosure',
          address: listing.property.address,
          city: listing.property.city,
          county: listing.property.county,
          state: listing.property.state,
          zip: listing.property.zip,
          parcelId: listing.property.parcelId,
          propertyType: listing.property.propertyType,
          bedrooms: listing.property.bedrooms,
          bathrooms: listing.property.bathrooms,
          sqft: listing.property.sqft,
          yearBuilt: listing.property.yearBuilt,
          lotSizeAcres: listing.property.lotSizeAcres,
          lat: listing.property.lat,
          lng: listing.property.lng,
          caseNumber: listing.caseNumber,
          auctionDate: listing.auctionDate?.toISOString(),
          openingBid: listing.openingBid,
          assessedValue: listing.assessedValue,
          estimatedValue: listing.estimatedValue,
          equityPct: listing.equityPct,
          status: listing.status,
          foreclosureType: listing.foreclosureType,
          defaultAmount: listing.defaultAmount,
          originalLoanAmount: listing.originalLoanAmount,
          lender: listing.lender,
          attorney: listing.attorney,
          plaintiff: listing.plaintiff,
          auctionType: listing.auctionType,
          auctionPlatform: listing.auctionPlatform,
          filingDate: listing.filingDate?.toISOString(),
          daysSinceFiling: listing.daysSinceFiling,
          sourceUrl: listing.sourceUrl,
          scrapedAt: listing.scrapedAt.toISOString(),
        },
      })
    }

    // Tax lien / tax deed / deed-lien
    const listing = await db.taxSaleListing.findUnique({
      where: { id },
      include: { property: true },
    })
    if (!listing) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    return NextResponse.json({
      listing: {
        id: listing.id,
        type: listing.saleType === 'lien' ? 'tax-lien' : 'deed-lien',
        address: listing.property.address,
        city: listing.property.city,
        county: listing.property.county,
        state: listing.property.state,
        zip: listing.property.zip,
        parcelId: listing.property.parcelId,
        propertyType: listing.property.propertyType,
        bedrooms: listing.property.bedrooms,
        bathrooms: listing.property.bathrooms,
        sqft: listing.property.sqft,
        yearBuilt: listing.property.yearBuilt,
        lotSizeAcres: listing.property.lotSizeAcres,
        lat: listing.property.lat,
        lng: listing.property.lng,
        saleType: listing.saleType,
        certificateNumber: listing.certificateNumber,
        yearOfTax: listing.yearOfTax,
        lienAmount: listing.lienAmount,
        taxDelinquencyAmount: listing.taxDelinquencyAmount,
        yearsDelinquent: listing.yearsDelinquent,
        interestRate: listing.interestRate,
        certificateRate: listing.certificateRate,
        stateInterestRate: listing.stateInterestRate,
        penaltyRate: listing.penaltyRate,
        redemptionPeriodMonths: listing.redemptionPeriodMonths,
        overbidAllowed: listing.overbidAllowed,
        subsequentTaxesAllowed: listing.subsequentTaxesAllowed,
        saleDate: listing.saleDate?.toISOString(),
        assessedValue: listing.assessedValue,
        estimatedValue: listing.estimatedValue,
        estimatedRoi: listing.estimatedRoi,
        status: listing.status,
        auctionType: listing.auctionType,
        auctionPlatform: listing.auctionPlatform,
        sourceUrl: listing.sourceUrl,
        scrapedAt: listing.scrapedAt.toISOString(),
      },
    })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
