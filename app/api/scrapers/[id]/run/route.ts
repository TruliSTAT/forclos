export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { runScraper } from '@/lib/scrapers/registry'

export async function POST(_req: Request, { params }: { params: { id: string } }) {
  try {
    const result = await runScraper(params.id)
    return NextResponse.json({ success: true, ...result })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Scraper failed' },
      { status: 500 }
    )
  }
}
