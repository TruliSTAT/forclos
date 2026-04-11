export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { runAllActiveScrapers } from '@/lib/scrapers/registry'

export async function POST() {
  try {
    const results = await runAllActiveScrapers()
    return NextResponse.json({ success: true, results })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
