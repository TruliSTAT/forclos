import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Franklin County Ohio Foreclosure Listings: Sheriff Sales & Auction Guide 2026',
  description: 'Find Franklin County Ohio foreclosure listings at the official sheriff sale auction. ORC Chapter 2329 process, online bidding at RealForeclose, right of redemption rules.',
  alternates: { canonical: 'https://forclos.com/foreclosures/franklin-county-oh' },
  openGraph: {
    title: 'Franklin County Ohio Foreclosure Listings: Sheriff Sales & Auction Guide 2026',
    description: 'Columbus area foreclosures: ORC §2329 judicial process, online bidding at franklin.sheriffsaleauction.ohio.gov, ORC §2329.33 redemption rules explained.',
    url: 'https://forclos.com/foreclosures/franklin-county-oh',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franklin County Ohio Foreclosure Listings: Sheriff Sales & Auction Guide 2026',
    description: 'Columbus area foreclosures: ORC §2329 judicial process, online bidding, ORC §2329.33 redemption rules explained.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Buy Franklin County Ohio Foreclosure Listings at Sheriff Sale',
    description: 'Step-by-step guide to finding and bidding on Franklin County Ohio foreclosure listings at the official online sheriff sale auction.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Find Active Listings', text: 'Browse active listings at franklin.sheriffsaleauction.ohio.gov. Review the auction calendar, opening bids, and required deposits.' },
      { '@type': 'HowToStep', position: 2, name: 'Register and Set Up Deposit Account', text: 'Create an account and set up a Primary ACH Deposit Account. Allow time for ACH clearing before the auction week.' },
      { '@type': 'HowToStep', position: 3, name: 'Submit Deposit', text: 'Submit the required deposit before the deadline for the auction week. Each listing shows the specific deposit amount.' },
      { '@type': 'HowToStep', position: 4, name: 'Place Proxy Bids', text: 'Enter your maximum bid. The system bids on your behalf up to that amount. An overtime period prevents last-second sniping.' },
      { '@type': 'HowToStep', position: 5, name: 'Monitor Court Confirmation', text: 'After winning, monitor court confirmation (typically 30–60 days). Under ORC §2329.33, the homeowner can redeem the property until confirmation.' },
      { '@type': 'HowToStep', position: 6, name: 'Receive Sheriff\'s Deed', text: '14 days after confirmation, the Sheriff\'s deed is issued. File for a writ of possession to take control of the property.' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where can I find current Franklin County Ohio foreclosure listings?',
        acceptedAnswer: { '@type': 'Answer', text: 'Active sheriff sale listings are posted at franklin.sheriffsaleauction.ohio.gov, the official RealForeclose portal operated under the Franklin County Sheriff\'s Office.' },
      },
      {
        '@type': 'Question',
        name: 'Do I need to attend the auction in person?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Franklin County sheriff sales are conducted entirely online through the RealForeclose platform per ORC §2329.153. You can bid from any device with internet access.' },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum bid at a Franklin County sheriff sale?',
        acceptedAnswer: { '@type': 'Answer', text: 'Opening bids are typically set at two-thirds of the court-ordered appraised value for the first listing. If unsold, it may be relisted with a lower minimum.' },
      },
      {
        '@type': 'Question',
        name: 'Can the former homeowner take the property back after I win?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, until the court confirms the sale. ORC §2329.33 gives the judgment debtor the right to redeem before confirmation by paying the full judgment amount, costs, and 8% annual interest on the purchase price. Confirmation typically happens 30–60 days after auction.' },
      },
      {
        '@type': 'Question',
        name: 'Does a Franklin County sheriff sale guarantee clear title?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. The Sheriff explicitly states it does not guarantee clear title. The foreclosure extinguishes the foreclosed mortgage, but federal tax liens, certain HOA assessments, and mechanic\'s liens may survive. A professional title search and title insurance are strongly recommended.' },
      },
    ],
  },
]

export default function FranklinCountyOHPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <NavBar />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/foreclosures/ohio" className="hover:text-slate-300 transition-colors">Ohio foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Franklin County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Franklin County Ohio Foreclosure Listings: Sheriff Sales &amp; Auction Guide 2026
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 2026 · Forclos Editorial</p>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-400 text-sm mb-8">
          <strong className="text-slate-300">Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal or financial advice.
          Franklin County foreclosure auctions involve significant legal and financial risk. Consult a licensed Ohio real estate attorney and conduct thorough due diligence before bidding.
        </div>

        <p className="text-slate-300 leading-relaxed mb-8">
          Franklin County Ohio foreclosure listings give buyers access to some of the most competitively priced real estate in the Columbus metro area.
          Whether you&apos;re an investor hunting for below-market deals or a first-time buyer exploring every option, understanding how Franklin County&apos;s
          sheriff sale system works — and where to find active listings — is the essential first step.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Ohio&apos;s Judicial Foreclosure Process Works</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Ohio is a <strong className="text-white">judicial foreclosure state</strong>. Every residential foreclosure must pass through the court system before a sheriff sale can occur.
            The governing law is <strong className="text-white">Ohio Revised Code (ORC) Chapter 2329</strong>.
          </p>
          <ol className="space-y-3 pl-4">
            {[
              { n: 1, t: 'Missed payments (Days 30–90)', d: 'The homeowner falls behind on mortgage payments.' },
              { n: 2, t: 'Complaint filed', d: 'The lender files a foreclosure complaint in Franklin County Court of Common Pleas.' },
              { n: 3, t: 'Owner served (28-day response window)', d: 'The homeowner has 28 days from receipt of the complaint to respond or file an answer.' },
              { n: 4, t: 'Default judgment', d: 'If no answer is filed, the court issues a judgment decree in foreclosure.' },
              { n: 5, t: 'Praecipe filed', d: 'The lender\'s attorney files a praecipe with the Franklin County Clerk of Courts, ordering the sheriff to sell the property.' },
              { n: 6, t: 'Appraisal and scheduling', d: 'Over roughly 3 months, an appraisal is ordered, a sale date is set, and the property is advertised per ORC §2329.26.' },
              { n: 7, t: 'Sheriff\'s auction', d: 'The property is sold to the highest bidder online at franklin.sheriffsaleauction.ohio.gov.' },
              { n: 8, t: 'Confirmation of sale', d: 'Within 30–60 days of the auction, the court confirms the sale.' },
              { n: 9, t: 'Sheriff\'s deed', d: '14 days after confirmation, the Sheriff\'s deed is issued to the new owner.' },
              { n: 10, t: 'Possession', d: 'The new owner files for a writ of possession. The former owner typically has 10–14 days to vacate.' },
            ].map(item => (
              <li key={item.n} className="text-slate-300">
                <strong className="text-white">{item.n}. {item.t}</strong> — {item.d}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Finding Franklin County Ohio Foreclosure Listings</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            All Franklin County sheriff sales are conducted <strong className="text-white">entirely online</strong> through the RealForeclose platform, authorized under <strong className="text-white">ORC §2329.153</strong>:
          </p>
          <div className="bg-slate-900 border border-emerald-500/30 rounded-lg p-4 mb-4">
            <p className="text-emerald-400 font-mono text-sm">
              <a href="https://franklin.sheriffsaleauction.ohio.gov/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                https://franklin.sheriffsaleauction.ohio.gov/
              </a>
            </p>
            <p className="text-slate-400 text-sm mt-1">Auction calendar, opening bids, deposit requirements, and foreclosure file numbers.</p>
          </div>
          <p className="text-slate-300 leading-relaxed">
            The <strong className="text-white">Franklin County Sheriff&apos;s Office</strong> manages the civil real estate sale process at 373 S. High Street, Second Floor, Columbus, Ohio 43215 (Mon–Fri, 7:00 a.m. – 3:00 p.m.).
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Ohio&apos;s Right of Redemption: What Every Bidder Must Know</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Under <strong className="text-white">ORC §2329.33</strong>, Ohio grants the original homeowner a <strong className="text-white">right of redemption that persists until the court confirms the sale</strong>.
            Before confirmation, the judgment debtor can redeem by depositing with the Clerk:
          </p>
          <ul className="space-y-2 mb-4 pl-4">
            <li className="text-slate-300">The full judgment amount</li>
            <li className="text-slate-300">All costs, including poundage</li>
            <li className="text-slate-300"><strong className="text-white">8% per annum interest</strong> on the purchase price from sale date to deposit date</li>
          </ul>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm">
            <strong>Practical impact:</strong> Your winning bid is not fully secured until after court confirmation (typically 30–60 days post-auction).
            Factor this into your due diligence and financing timeline. Do not begin renovations before confirmation.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Franklin County vs. Bank-Owned Properties</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold"></th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Sheriff Sale</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Bank-Owned (REO)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {[
                  { l: 'Sold by', a: 'Franklin County Sheriff', b: 'Bank/lender directly' },
                  { l: 'Where', a: 'franklin.sheriffsaleauction.ohio.gov', b: 'MLS, bank portals' },
                  { l: 'Title', a: 'No guarantee', b: 'Typically clear title' },
                  { l: 'Redemption risk', a: 'Yes, until confirmation', b: 'No' },
                  { l: 'Opening bid', a: '2/3 appraised value', b: 'Negotiable' },
                ].map(row => (
                  <tr key={row.l} className="bg-slate-900/50">
                    <td className="px-4 py-3 font-semibold text-white">{row.l}</td>
                    <td className="px-4 py-3 text-slate-300">{row.a}</td>
                    <td className="px-4 py-3 text-slate-300">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed mt-4">
            Compare neighboring counties:{' '}
            <Link href="/foreclosures/cuyahoga-county-oh" className="text-emerald-400 hover:underline">Cuyahoga County Ohio</Link>{' '}
            (Cleveland area) and{' '}
            <Link href="/foreclosures/hamilton-county-oh" className="text-emerald-400 hover:underline">Hamilton County Ohio</Link>{' '}
            (Cincinnati area).
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Franklin County Ohio Foreclosure FAQs</h2>
          <div className="space-y-6">
            {[
              { q: 'Where can I find current Franklin County Ohio foreclosure listings?', a: 'Active sheriff sale listings are posted at franklin.sheriffsaleauction.ohio.gov, operated under the Franklin County Sheriff\'s Office.' },
              { q: 'Do I need to attend the auction in person?', a: 'No. Franklin County sheriff sales are conducted entirely online through RealForeclose per ORC §2329.153.' },
              { q: 'What is the minimum bid at a Franklin County sheriff sale?', a: 'Opening bids are typically set at two-thirds of the court-ordered appraised value for the first listing.' },
              { q: 'Can the former homeowner take the property back after I win?', a: 'Yes, until the court confirms the sale. ORC §2329.33 grants the right to redeem by paying the full judgment plus costs and 8% annual interest on the purchase price. Confirmation typically happens 30–60 days post-auction.' },
              { q: 'Does a Franklin County sheriff sale guarantee clear title?', a: 'No. The Sheriff does not guarantee clear title. Federal tax liens, certain HOA assessments, and mechanic\'s liens may survive. A professional title search and title insurance are strongly recommended.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://franklin.sheriffsaleauction.ohio.gov/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Franklin County Sheriff — RealForeclose Portal</a></li>
            <li>2. <a href="https://sheriff.franklincountyohio.gov/Services/Real-Estate-Sales" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Franklin County Sheriff — Real Estate Sales</a></li>
            <li>3. <a href="https://treasurer.franklincountyohio.gov/Foreclosures-Land-Bank/Foreclosure-Timeline" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Franklin County Treasurer — Foreclosure Timeline</a></li>
            <li>4. <a href="https://codes.ohio.gov/ohio-revised-code/chapter-2329" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Ohio Revised Code Chapter 2329</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
