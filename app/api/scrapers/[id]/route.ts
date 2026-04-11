export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json()
  const scraper = await db.scraper.update({
    where: { id: params.id },
    data: body,
  })
  return NextResponse.json({ scraper })
}
