import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

const partners = [
  {
    id: 'seed-lima-one',
    name: 'Lima One Capital',
    types: ['hard-money', 'bridge'],
    minLoan: 75000, maxLoan: 5000000,
    rateFrom: 8.5, rateTo: 12.0,
    states: ['FL','GA','TX','NC','SC','VA','TN','OH','PA','AZ','NV','CO','MD','DC'],
    applyUrl: 'https://limaone.com',
    description: 'Leading national hard money & bridge lender for fix-and-flip, rental, and bridge loans. Fast approvals.',
  },
  {
    id: 'seed-groundfloor',
    name: 'Groundfloor',
    types: ['hard-money'],
    minLoan: 75000, maxLoan: 2000000,
    rateFrom: 7.5, rateTo: 14.0,
    states: ['AL','CA','CO','CT','DC','FL','GA','IL','IN','KY','MA','MD','MI','MN','MO','NC','NJ','NM','NV','NY','OH','OR','PA','SC','TN','TX','UT','VA','WA','WI','WY'],
    applyUrl: 'https://groundfloor.us',
    description: 'Short-term hard money loans for residential investment properties. Competitive rates, no prepayment penalty.',
  },
  {
    id: 'seed-kiavi',
    name: 'Kiavi',
    types: ['bridge', 'dscr'],
    minLoan: 100000, maxLoan: 3000000,
    rateFrom: 8.0, rateTo: 11.5,
    states: ['AZ','CA','CO','CT','FL','GA','IL','IN','KY','MA','MD','MI','MN','MO','NC','NJ','NM','NV','NY','OH','OR','PA','SC','TN','TX','UT','VA','WA','WI','WY'],
    applyUrl: 'https://kiavi.com',
    description: 'Technology-driven bridge and DSCR loans for real estate investors. Data-driven underwriting = faster closings.',
  },
  {
    id: 'seed-rcn',
    name: 'RCN Capital',
    types: ['hard-money', 'bridge', 'dscr'],
    minLoan: 50000, maxLoan: 2500000,
    rateFrom: 9.0, rateTo: 13.5,
    states: ['CT','FL','GA','IL','MA','MD','MI','MN','NJ','NY','OH','PA','SC','TX','VA','WA'],
    applyUrl: 'https://rcncapital.com',
    description: 'Nationwide direct lender specializing in fix-and-flip, bridge, and DSCR rental loans.',
  },
  {
    id: 'seed-visio',
    name: 'Visio Lending',
    types: ['dscr'],
    minLoan: 100000, maxLoan: 2000000,
    rateFrom: 7.0, rateTo: 10.5,
    states: ['AL','AZ','CA','CO','DC','FL','GA','ID','IL','IN','KY','LA','MD','MI','MN','MO','MS','NC','NJ','NM','NV','NY','OH','OK','OR','PA','SC','TN','TX','UT','VA','WA','WI'],
    applyUrl: 'https://visiolending.com',
    description: 'DSCR rental portfolio loans. No income verification required. Perfect for portfolio investors.',
  },
]

async function main() {
  console.log('Seeding funding partners…')
  for (const p of partners) {
    await db.fundingPartner.upsert({
      where: { id: p.id },
      update: { ...p, id: undefined },
      create: p,
    })
    console.log(`  ✓ ${p.name}`)
  }
  console.log('Done.')
}

main().catch(e => { console.error(e); process.exit(1) }).finally(() => db.$disconnect())
