#!/usr/bin/env tsx
// Run with: npx tsx scripts/send-alerts.ts
// Cron: 0 7 * * * (daily at 7am)

import { sendSavedSearchAlerts } from '../lib/email-alerts'

async function main() {
  console.log('Forclos Alert Runner starting…')
  await sendSavedSearchAlerts()
  console.log('Done.')
  process.exit(0)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
