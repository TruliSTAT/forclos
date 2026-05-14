import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: "Essex County NJ Foreclosure Auction: Complete Buyer's Guide (2026)",
  description: 'Find Essex County NJ foreclosure auction listings, sheriff sale dates, bidding rules, and the full NJ judicial foreclosure process explained for investors.',
  alternates: { canonical: 'https://forclos.com/foreclosures/essex-county-nj' },
  openGraph: {
    title: "Essex County NJ Foreclosure Auction: Complete Buyer's Guide (2026)",
    description: 'NJ judicial foreclosure, Essex County sheriff sales at 60 W. Market St Newark, CivilView County ID 2, 172 active listings May 2026, 20% deposit requirement.',
    url: 'https://forclos.com/foreclosures/essex-county-nj',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Essex County NJ Foreclosure Auction: Complete Buyer's Guide (2026)",
    description: 'Essex County NJ sheriff sales: 172 active listings, bi-weekly Tuesdays at 1:30 PM, 20% deposit, 10-day objection window, adjournment rules explained.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Essex County NJ Foreclosure Auction: Complete Buyer's Guide (2026)",
    description: 'How to find listings, bid, and take title at the Essex County NJ foreclosure auction. Covers sheriff sale process, NJ judicial foreclosure law, deposit requirements, and FAQs.',
    url: 'https://forclos.com/foreclosures/essex-county-nj',
    datePublished: '2026-05-14',
    dateModified: '2026-05-14',
    publisher: { '@type': 'Organization', name: 'Forclos', url: 'https://forclos.com' },
    author: { '@type': 'Organization', name: 'Forclos Editorial Team' },
    about: {
      '@type': 'Place',
      name: 'Essex County, New Jersey',
      containedInPlace: { '@type': 'State', name: 'New Jersey' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How often are Essex County NJ foreclosure auctions held?',
        acceptedAnswer: { '@type': 'Answer', text: 'As of August 2022, Essex County sheriff sales are held bi-weekly on Tuesdays at 1:30 PM at 60 West Market Street, 14th Floor, Newark, NJ. Always confirm the current schedule at salesweb.civilview.com before attending.' },
      },
      {
        '@type': 'Question',
        name: 'Where is the Essex County sheriff sale held?',
        acceptedAnswer: { '@type': 'Answer', text: 'At the Leroy F. Smith, Jr. Public Safety Building, 60 West Market Street, 14th Floor Conference Room, Newark, NJ 07102.' },
      },
      {
        '@type': 'Question',
        name: 'How much deposit do I need for an Essex County foreclosure auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'You need 20% of your winning bid amount, payable immediately in cash or certified check. The remaining 80% is typically due within 30 days.' },
      },
      {
        '@type': 'Question',
        name: 'Can the homeowner stop the Essex County sheriff sale?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Before the sale: by paying off the full debt, filing bankruptcy, or requesting up to two 28-day adjournments ($28 each). After the sale but before deed delivery: by filing a motion to set aside the sale during the 10-day objection window under N.J. Ct. R. 4:65-5.' },
      },
      {
        '@type': 'Question',
        name: 'What is the upset price at a NJ sheriff sale?',
        acceptedAnswer: { '@type': 'Answer', text: "The upset price is the lender's opening bid, set at the total judgment amount including principal, accrued interest, attorney's fees, and court costs. If no bidder exceeds this, the lender takes the property as REO." },
      },
      {
        '@type': 'Question',
        name: 'How long does NJ foreclosure take before auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'New Jersey typically takes 2 to 4 years from first missed payment to sheriff sale — one of the longest foreclosure timelines in the United States.' },
      },
      {
        '@type': 'Question',
        name: 'Is Essex County NJ a good market for foreclosure investing?',
        acceptedAnswer: { '@type': 'Answer', text: 'Essex County includes Newark, East Orange, Irvington, Montclair, and West Orange, offering diverse property types and 170+ active sheriff sale listings as of May 2026. Consult a licensed NJ attorney and financial advisor before bidding.' },
      },
    ],
  },
]

export default function EssexCountyNJPage() {
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
          <Link href="/foreclosures/new-jersey" className="hover:text-slate-300 transition-colors">New Jersey foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Essex County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Essex County NJ Foreclosure Auction: Complete Buyer&apos;s Guide (2026)
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 2026 · Forclos Editorial</p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-8">
          <strong>Legal Disclaimer:</strong> Foreclosure law changes frequently. The information on this page is for general educational purposes only and does not constitute legal or financial advice. Always consult a licensed NJ attorney before bidding at a sheriff sale. Laws, fees, and procedures referenced here are current as of 2026 but may be updated by the courts or legislature.
        </div>

        <p className="text-slate-300 leading-relaxed mb-8">
          Essex County, New Jersey holds one of the most active foreclosure auction markets in the tri-state area. With 172 properties currently scheduled for sheriff sale and weekly auctions running through 2026, the <strong className="text-white">Essex County NJ foreclosure auction</strong> attracts investors, attorneys, and owner-occupants looking to buy at below-market prices. This guide covers everything you need to know — from finding listings and understanding NJ&apos;s judicial process to placing a bid and taking title.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How New Jersey Foreclosure Works</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            New Jersey is a <strong className="text-white">judicial foreclosure state</strong>. That means a lender cannot sell your property without first going to court. The process is court-supervised from start to finish and governed primarily by the <strong className="text-white">New Jersey Fair Foreclosure Act (N.J.S.A. 2A:50-1 et seq.)</strong> and <strong className="text-white">N.J. Court Rule 4:65</strong>, which controls the actual sheriff sale auction.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">The Step-by-Step NJ Foreclosure Process</h3>
          <div className="space-y-4">
            {[
              { n: 1, title: 'Default and Notice of Intent', desc: 'When a borrower misses payments, the lender must serve a Notice of Intent to Foreclose at least 30 days before filing suit, per the Fair Foreclosure Act.' },
              { n: 2, title: 'Complaint Filed in Superior Court', desc: "The lender files a foreclosure complaint in the NJ Superior Court, Chancery Division. For Essex County, that's Essex County Superior Court in Newark." },
              { n: 3, title: 'Lis Pendens Recorded', desc: "A lis pendens (notice of pending litigation) is recorded in the Essex County Clerk's Office, alerting the public that the property is subject to foreclosure proceedings." },
              { n: 4, title: 'Final Judgment of Foreclosure', desc: "After the court process concludes — which can take anywhere from 18 months to 4+ years in New Jersey, one of the longest timelines in the country — the court enters a Final Judgment of Foreclosure." },
              { n: 5, title: 'Writ of Execution', desc: 'Once judgment is entered, the court issues a Writ of Execution commanding the Essex County Sheriff to conduct a public auction. Under N.J.S.A. 2A:50-64, the sheriff must schedule the sale within 150 days of receiving the Writ.' },
              { n: 6, title: 'Public Notice', desc: 'The Essex County Sheriff must publish notice of the foreclosure auction in at least two newspapers serving the county for four consecutive weeks before the sale.' },
              { n: 7, title: 'Essex County NJ Foreclosure Auction', desc: 'The public sale takes place at the scheduled date and time. The highest bidder wins, subject to a 10-day objection period.' },
              { n: 8, title: '10-Day Objection Window and Deed Delivery', desc: 'Under N.J. Court Rule 4:65-5, there is a mandatory 10-day period after the sale during which any party may file a motion to object. If no valid objection is filed, the sheriff delivers the deed to the winning bidder.' },
            ].map((item) => (
              <div key={item.n} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.n}. {item.title}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Essex County Sheriff Sales: When, Where, and How to Find Listings</h2>

          <h3 className="text-xl font-semibold text-white mb-3">Auction Schedule</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Essex County NJ foreclosure auctions are held <strong className="text-white">every Tuesday at 1:30 PM</strong> (bi-weekly as of August 2022) at:
          </p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <p className="text-white font-semibold">Leroy F. Smith, Jr. Public Safety Building</p>
            <p className="text-slate-300">60 West Market Street, 14th Floor Conference Room</p>
            <p className="text-slate-300">Newark, New Jersey 07102</p>
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">
            The Essex County Sheriff&apos;s Office is led by Sheriff <strong className="text-white">Amir D. Jones</strong>. Contact: <strong className="text-white">973-621-4111</strong>.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Upcoming Sale Dates (2026)</h3>
          <ul className="space-y-1 mb-6 pl-4">
            {['May 2026: May 17, 22, 24, 26', 'June 2026: June 6, 9, 11, 12, 17, 19, 23, 24', 'July 2026: July 1, 2, 7, 8, 17, 21, 29', 'August 2026: August 4, August 30'].map((d) => (
              <li key={d} className="text-slate-300">• {d}</li>
            ))}
          </ul>
          <p className="text-slate-400 text-sm mb-6">Dates change frequently due to adjournments. Always verify at the official portal before attending.</p>

          <h3 className="text-xl font-semibold text-white mb-3">How to Find Essex County Foreclosure Auction Listings</h3>
          <ol className="space-y-4 pl-4 mb-4">
            <li className="text-slate-300">
              <strong className="text-white">1. Official CivilView Portal:</strong> The Essex County Sheriff&apos;s Office publishes all scheduled sales at{' '}
              <a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=2" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">salesweb.civilview.com (County ID = 2)</a>. Updated every 30 minutes 9 AM–4 PM Mon–Fri. As of May 2026, <strong className="text-white">172 properties</strong> are actively scheduled.
            </li>
            <li className="text-slate-300">
              <strong className="text-white">2. Essex County Sheriff&apos;s Office Website:</strong> The official listings page at <strong className="text-white">essexsheriff.com/foreclosure-listings/</strong> provides summary information and links to the CivilView portal.
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Bidding at Essex County NJ Foreclosure Auction</h2>

          <h3 className="text-xl font-semibold text-white mb-3">The Upset Price</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The lender&apos;s attorney will open bidding at the <strong className="text-white">upset price</strong> — the total amount owed by the defendant, including principal, accrued interest, legal fees, and court costs. If no third-party bidder exceeds the upset price, the property reverts to the lender as <strong className="text-white">REO (Real Estate Owned)</strong>.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Deposit Requirements</h3>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6">
            <p className="text-slate-300">Pay <strong className="text-white">20% of the purchase price immediately</strong> in cash or certified check. The remaining 80% is typically due within <strong className="text-white">30 days</strong>. <strong className="text-white">No financing contingency.</strong></p>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">What You&apos;re Buying</h3>
          <p className="text-slate-300 leading-relaxed mb-4">Sheriff sales convey title via a <strong className="text-white">sheriff&apos;s deed</strong> — as-is, no warranties. Critical pre-bid considerations:</p>
          <ul className="space-y-2 pl-4 mb-4">
            {[
              'Title search: Superior liens (unpaid taxes, municipal water/sewer, certain HOA liens) survive the foreclosure and become the buyer\'s responsibility.',
              'Property condition: You typically cannot access the interior before the auction. Drive-bys and county tax records are your primary research tools.',
              'Occupied properties: The property may still be occupied. You will need to go through the court to evict after deed delivery — self-help eviction is illegal in NJ.',
            ].map((item) => (
              <li key={item} className="text-slate-300">• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Adjournments: Why Sale Dates Change</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Under NJ law, a defendant homeowner is entitled to <strong className="text-white">two statutory adjournments</strong>, each for a period of <strong className="text-white">28 days</strong>.
          </p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <p className="text-slate-300 mb-2"><strong className="text-white">Adjournment rules:</strong></p>
            <ul className="space-y-1 text-slate-400 text-sm">
              <li>• Fee: <strong className="text-white">$28.00 per adjournment</strong> (money orders or attorney checks only; no cash, no personal checks)</li>
              <li>• Must be requested in person by the defendant, their attorney, or someone with Power of Attorney</li>
              <li>• Deadline: <strong className="text-white">12:00 PM on the day of the sale</strong></li>
            </ul>
          </div>
          <p className="text-slate-400 text-sm">Always check the CivilView portal the morning of the auction to confirm the sale is still proceeding.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Post-Sale Rights: What Happens After the Auction</h2>

          <h3 className="text-xl font-semibold text-white mb-3">The 10-Day Objection Period</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Under <strong className="text-white">N.J. Ct. R. 4:65-5</strong>, any interested party may file a motion to set aside the sale on grounds such as procedural defects, fraud, or gross inadequacy of price. If no timely objection is filed, the sheriff delivers the deed.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Surplus Funds</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            If the property sells for <strong className="text-white">more than the total debt</strong>, the excess — called <strong className="text-white">surplus funds</strong> — must be paid into court. Junior lienholders have priority claims; any remaining surplus goes to the former homeowner.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Taking Possession</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            After receiving the sheriff&apos;s deed, the new owner has legal title but may need to file a summary dispossess proceeding in the Special Civil Part of the NJ Superior Court to remove holdover occupants.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Essex County NJ Foreclosure Auction: FAQs</h2>
          <div className="space-y-6">
            {[
              { q: 'How often are Essex County NJ foreclosure auctions held?', a: 'Bi-weekly Tuesdays at 1:30 PM at 60 West Market Street, 14th Floor, Newark. Confirm schedule at salesweb.civilview.com before attending.' },
              { q: 'Where is the Essex County sheriff sale held?', a: 'Leroy F. Smith, Jr. Public Safety Building, 60 West Market Street, 14th Floor Conference Room, Newark, NJ 07102. Changed from the former Veterans Courthouse location.' },
              { q: 'How much deposit do I need to bring?', a: '20% of your winning bid, payable immediately in cash or certified check. Remaining 80% due within 30 days. No financing contingencies.' },
              { q: 'Can the homeowner stop the sale?', a: 'Before the sale: by paying off the full debt, filing bankruptcy, or requesting up to two 28-day adjournments ($28 each). After the sale but before deed delivery: by filing a motion to set aside the sale during the 10-day objection window.' },
              { q: 'What is the upset price at a NJ sheriff sale?', a: "The lender's opening bid, set at the total judgment amount — principal, accrued interest, attorney fees, and court costs. If no bidder exceeds this amount, the lender takes the property as REO." },
              { q: 'How long does the NJ foreclosure process take?', a: 'New Jersey has one of the longest foreclosure timelines in the country — typically 2 to 4 years from first missed payment to auction.' },
              { q: 'Is Essex County NJ a good market for foreclosure investing?', a: 'Essex County (Newark, East Orange, Irvington, Montclair, West Orange) offers 170+ active sheriff sale listings. Consult a licensed NJ real estate attorney and financial advisor before bidding.' },
            ].map((item) => (
              <div key={item.q} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Essex County NJ Foreclosure Auction at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Auction type', 'Public sheriff sale (judicial)'],
                  ['Frequency', 'Bi-weekly Tuesdays, 1:30 PM'],
                  ['Location', '60 W. Market St., 14th Floor, Newark NJ 07102'],
                  ['Official listings', 'salesweb.civilview.com (County ID 2)'],
                  ['Deposit required', '20% cash or certified check, day of sale'],
                  ['Balance due', 'Typically 30 days'],
                  ['Adjournments allowed', '2 × 28 days ($28 fee each)'],
                  ['Post-sale objection window', '10 days (N.J. Ct. R. 4:65-5)'],
                  ['Governing law', 'N.J.S.A. 2A:50 (Fair Foreclosure Act); N.J. Ct. R. 4:65'],
                  ["Sheriff's Office phone", '973-621-4111'],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-slate-800">
                    <td className="py-2 pr-4 text-slate-400 font-medium">{label}</td>
                    <td className="py-2 text-slate-300">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">Nearby NJ &amp; NY Foreclosure Markets</h2>
          <ul className="space-y-2 pl-4">
            <li><Link href="/foreclosures/bergen-county-nj" className="text-emerald-400 hover:underline">Bergen County NJ Foreclosure Listings</Link> — Essex&apos;s northern neighbor</li>
            <li><Link href="/foreclosures/nassau-county-ny" className="text-emerald-400 hover:underline">Nassau County NY Foreclosure Listings</Link> — Long Island, similar judicial process</li>
            <li><Link href="/foreclosures/suffolk-county-ny" className="text-emerald-400 hover:underline">Suffolk County NY Foreclosure Listings</Link> — Eastern Long Island</li>
            <li><Link href="/foreclosures/kings-county-ny" className="text-emerald-400 hover:underline">Kings County (Brooklyn) Foreclosure Listings</Link> — NYC borough across the Hudson</li>
            <li><Link href="/foreclosures/queens-county-ny" className="text-emerald-400 hover:underline">Queens County NY Foreclosure Listings</Link></li>
          </ul>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://www.essexsheriff.com/foreclosure-listings/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Essex County Sheriff&apos;s Office — Foreclosure Listings</a></li>
            <li>2. <a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=2" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">CivilView — Essex County Sheriff Sale Listings (County ID 2)</a></li>
            <li>3. N.J.S.A. 2A:50-1 et seq. — New Jersey Fair Foreclosure Act</li>
            <li>4. N.J.S.A. 2A:50-64 — Sheriff sale scheduling</li>
            <li>5. N.J. Court Rule 4:65 — Sheriff sales</li>
            <li>6. N.J. Court Rule 4:65-5 — Post-sale objection period</li>
          </ol>
          <p className="text-xs text-slate-600 mt-4">
            YMYL advisory: Foreclosure auctions involve significant legal and financial risk. Consult a licensed NJ real estate attorney before bidding.
          </p>
        </section>
      </main>
    </div>
  )
}
