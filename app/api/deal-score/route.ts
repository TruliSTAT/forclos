import { NextResponse } from 'next/server'
import { calcDealScore } from '@/lib/deal-score'

export async function POST(req: Request) {
  const body = await req.json()
  return NextResponse.json(calcDealScore(body))
}
