import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Bergen County NJ Foreclosure Listings: The Official Guide to Sheriff Sales',
  description: 'Find Bergen County NJ foreclosure listings on the official sheriff sale portal. Upcoming 2026 sale dates, NJ foreclosure law explained, upset price, bidding rules, and more.',
  alternates: { canonical: 'https://forclos.com/foreclosures/bergen-county-nj' },
  openGraph: {
    title: 'Bergen County NJ Foreclosure Listings: The Official Guide to Sheriff Sales',
    description: 'Bergen County NJ sheriff sales: 106 active listings May 2026, CivilView County ID=7, Hackensack courthouse, NJ Fair Foreclosure Act, no post-sale redemption.',
    url: 'https://forclos.com/foreclosures/bergen-county-nj',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bergen County NJ Foreclosure Listings: The Official Guide to Sheriff Sales',
    description: 'Bergen County NJ foreclosure listings: official CivilView portal, sheriff sale schedule, payment rules (no Fridays), upset price, NJ judicial foreclosure process.',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Bergen County NJ Foreclosure Listings: The Official Guide to Sheriff Sales',
      description: 'How to find Bergen County NJ foreclosure listings, understand NJ judicial foreclosure law, and bid at Bergen County sheriff sales. Official sources, 2026 sale dates, payment rules.',
      url: 'https://forclos.com/foreclosures/bergen-county-nj',
      dateModified: '2026-05-14',
      author: { '@type': 'Organization', name: 'Forclos' },
      publisher: { '@type': 'Organization', name: 'Forclos', url: 'https://forclos.com' },
      about: {
        '@type': 'Place',
        name: 'Bergen County, New Jersey',
        containedInPlace: { '@type': 'State', name: 'New Jersey' },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I find Bergen County NJ foreclosure listings for upcoming sheriff sales?',
          acceptedAnswer: { '@type': 'Answer', text: 'The official source is the Bergen County Sheriff Sale Listings portal at salesweb.civilview.com/Sales/SalesSearch?countyId=7. As of May 2026, there are 106 open listings.' },
        },
        {
          '@type': 'Question',
          name: 'When are Bergen County sheriff sales held in 2026?',
          acceptedAnswer: { '@type': 'Answer', text: 'Upcoming 2026 Bergen County sheriff sale dates include June 12, June 26, July 10, August 7, and August 14, 2026. Always confirm at bcsd.us as sales can be adjourned.' },
        },
        {
          '@type': 'Question',
          name: 'What payment is accepted at Bergen County sheriff sales?',
          acceptedAnswer: { '@type': 'Answer', text: "Cashier's checks or certified checks only. Deed payments must be made at the Sheriff's Office, 2nd floor, 2 Bergen County Plaza, Hackensack — not in the sale conference room. No Friday disbursements; hours are Monday–Thursday before 4:00 PM." },
        },
        {
          '@type': 'Question',
          name: 'What is the upset price at a NJ sheriff sale?',
          acceptedAnswer: { '@type': 'Answer', text: "The upset price is the minimum bid at a New Jersey sheriff sale. It represents the total amount owed to the foreclosing lender, including principal, interest, attorney fees, court costs, and any taxes or insurance advances." },
        },
        {
          '@type': 'Question',
          name: 'Can the homeowner get the property back after a Bergen County sheriff sale?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. New Jersey does not have a post-sale right of redemption. Once the 10-day objection window under N.J. Court Rule 4:65-5 closes and the sheriff\'s deed is delivered, the homeowner\'s rights to the property are extinguished.' },
        },
        {
          '@type': 'Question',
          name: 'Is New Jersey a judicial foreclosure state?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. New Jersey requires every residential foreclosure to proceed through the Superior Court system. A Final Judgment of Foreclosure must be entered by a judge under N.J. Court Rule 4:64 before a sheriff sale can be scheduled.' },
        },
        {
          '@type': 'Question',
          name: 'How long does the NJ foreclosure process take?',
          acceptedAnswer: { '@type': 'Answer', text: 'New Jersey foreclosure timelines typically run 24 to 36 months or more from the first missed payment to final deed transfer, making it one of the longest foreclosure timelines in the United States.' },
        },
      ],
    },
  ],
}

export default function BergenCountyNJPage() {
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
          <span className="text-slate-400">Bergen County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Bergen County NJ Foreclosure Listings: The Official Guide to Sheriff Sales
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 2026 · Forclos Editorial</p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-8">
          <strong>Legal Notice:</strong> New Jersey foreclosure law is complex. This page is educational only and does not constitute legal advice. Laws change — always verify current statute text and consult a licensed NJ real estate attorney before bidding at any sheriff sale.
        </div>

        <p className="text-slate-300 leading-relaxed mb-8">
          <strong className="text-white">Bergen County NJ foreclosure listings</strong> represent some of the most actively traded distressed properties in the New York metropolitan area. With a median home sale price of approximately $758,000 and one of the most densely populated suburban counties in the nation, Bergen County&apos;s foreclosure market attracts both local investors and buyers looking to enter a competitive real estate market at a discount. This guide covers everything you need to know: how to find active listings, what happens at a NJ sheriff sale, and what you need to bring when the gavel drops.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How NJ Foreclosure Works: A Judicial State</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            New Jersey is a <strong className="text-white">judicial foreclosure state</strong>, which means every residential foreclosure must proceed through the Superior Court system. NJ requires a Final Judgment of Foreclosure signed by a Superior Court judge before any sheriff sale can be scheduled. This is one reason New Jersey consistently ranks among the states with the longest foreclosure timelines — often <strong className="text-white">24 to 36 months or more</strong> from first missed payment to final deed transfer.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">The NJ Foreclosure Timeline</h3>
          <div className="space-y-3">
            {[
              { n: 1, title: 'Default', desc: 'Borrower misses payments (typically 90+ days before formal action begins)' },
              { n: 2, title: 'Pre-Foreclosure Notice', desc: 'Under the Fair Foreclosure Act (N.J.S.A. 2A:50-56), the lender must send formal notice at least 30 days before filing' },
              { n: 3, title: 'Lis Pendens Filed', desc: "The lender files a Lis Pendens with the Superior Court Clerk, \"clouding\" the title and putting the public on legal notice" },
              { n: 4, title: 'Foreclosure Complaint', desc: 'Filed in Bergen County Superior Court in Hackensack, governed by N.J. Court Rule 4:64' },
              { n: 5, title: 'Service and Response Period', desc: 'The homeowner, co-borrowers, and junior lien holders are served; the homeowner has the right to contest' },
              { n: 6, title: 'Foreclosure Mediation', desc: 'The NJ Office of Foreclosure offers a mediation program for loan modifications or alternatives' },
              { n: 7, title: 'Final Judgment of Foreclosure', desc: 'The Superior Court enters a Final Judgment authorizing the sheriff to sell the property' },
              { n: 8, title: "Sheriff's Sale Scheduled", desc: 'The county sheriff schedules a sale date, typically within 4–6 weeks of the Final Judgment' },
              { n: 9, title: 'Notice Publication', desc: 'Under N.J. Court Rule 4:65-3, notice must be published in a county newspaper for four consecutive weeks' },
              { n: 10, title: 'Certified Mail Notice', desc: 'Under N.J. Court Rule 4:65-2, all parties must receive notice by registered or certified mail at least 10 days before the sale' },
              { n: 11, title: "Sheriff's Sale", desc: 'Open auction at the Bergen County courthouse' },
              { n: 12, title: '10-Day Objection Period', desc: 'Under N.J. Court Rule 4:65-5, any party may file objections within 10 days' },
              { n: 13, title: 'Deed Delivered', desc: "If no objections are sustained, the sheriff's deed is issued to the winning bidder" },
              { n: 14, title: 'Deed Recorded', desc: "The buyer records the deed with the Bergen County Clerk's office to perfect title" },
            ].map((item) => (
              <div key={item.n} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold text-sm mb-1">{item.n}. {item.title}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Bergen County Sheriff Sales Explained</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Bergen County sheriff sales are conducted by the <strong className="text-white">Bergen County Sheriff&apos;s Office</strong>, located at <strong className="text-white">2 Bergen County Plaza, Hackensack, NJ 07601</strong> (phone: 201-336-3500). Sales are typically held <strong className="text-white">every two weeks</strong> throughout the year.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Active Listings and Sale Dates</h3>
          <p className="text-slate-300 leading-relaxed mb-3">
            All current Bergen County foreclosure listings scheduled for sheriff sale are at the official NJ Sheriff Sales portal:
          </p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <p className="text-white font-semibold mb-1">🔗 Official Bergen County Sheriff Sale Listings</p>
            <a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=7" className="text-emerald-400 hover:underline text-sm" target="_blank" rel="noopener noreferrer">salesweb.civilview.com/Sales/SalesSearch?countyId=7</a>
          </div>
          <p className="text-slate-300 leading-relaxed mb-3">
            As of May 2026, there are <strong className="text-white">106 active open listings</strong>. Upcoming 2026 sale dates:
          </p>
          <ul className="space-y-1 mb-4 pl-4">
            {['June 12, 2026', 'June 26, 2026', 'July 10, 2026', 'August 7, 2026', 'August 14, 2026'].map((d) => (
              <li key={d} className="text-slate-300">• {d}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3">What Is the Upset Price?</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The <strong className="text-white">upset price</strong> is the minimum bid — the total amount owed to the foreclosing lender including principal, accrued interest, attorney fees, court costs, property taxes advanced, and sheriff&apos;s fees. The foreclosing lender typically submits a <strong className="text-white">credit bid</strong> equal to the upset price. A third-party buyer must outbid the lender with cash or certified funds. Any amount above the upset price — the <strong className="text-white">surplus</strong> — is paid into court for junior lienholders or the former homeowner.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How to Find Bergen County Foreclosure Listings</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">1. Official Sheriff Sale Listings (Most Reliable)</p>
              <p className="text-slate-400 text-sm">
                <a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=7" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">salesweb.civilview.com (County ID = 7)</a> — Free, no account required. Filter by sale date, plaintiff, defendant, or city. 60+ Bergen County municipalities covered including Hackensack, Fort Lee, Paramus, Teaneck, Fair Lawn, Ridgewood, Englewood, Garfield, Mahwah.
              </p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">2. NJ Superior Court Records (Pre-Foreclosure / Lis Pendens)</p>
              <p className="text-slate-400 text-sm">
                <a href="https://njcourts.gov" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">njcourts.gov</a> — Search for foreclosure matters filed in Bergen County. Lis pendens filings at the Bergen County Clerk&apos;s Office show properties in pre-foreclosure before they reach the auction stage.
              </p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">3. Third-Party Aggregators (Use With Caution)</p>
              <p className="text-slate-400 text-sm">Sites like foreclosure.com and RealtyTrac aggregate NJ data but often include outdated listings. Always cross-reference with the official CivilView portal before attending a sale.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Bidding at Bergen County Sheriff Sales</h2>

          <h3 className="text-xl font-semibold text-white mb-3">Before the Sale</h3>
          <ul className="space-y-2 pl-4 mb-6">
            {[
              'Research the property thoroughly. Bergen County sheriff sales do NOT allow interior inspections.',
              'Obtain a title search to understand what liens, judgments, and encumbrances exist.',
              'Understand the upset price — available in the court file and on CivilView before the sale.',
              'Prepare your funds. Payment must be by cashier\'s check or certified check only. No cash, personal checks, or credit cards.',
            ].map((item) => (
              <li key={item} className="text-slate-300">• {item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3">After the Sale — Paying for Your Deed</h3>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-4">
            <strong>Bergen County-specific rule:</strong> Deed payments must be made at the <strong>Sheriff&apos;s Office, 2nd floor, 2 Bergen County Plaza, Hackensack</strong>. Payments will NOT be accepted in the conference room where the sale is held.
            <ul className="mt-2 space-y-1">
              <li>• <strong>No Friday deed disbursements</strong> — staff not available on Fridays</li>
              <li>• <strong>Monday–Thursday only, before 4:00 PM</strong></li>
              <li>• <strong>Cashier&apos;s check or certified check only</strong></li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">No Post-Sale Redemption Right</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">New Jersey homeowners do NOT have a post-sale right of redemption</strong> once the 10-day objection period closes and the sheriff&apos;s deed is delivered. The homeowner&apos;s only right to redeem exists <em>before</em> the sale occurs. This differs from states like certain Midwest states that allow post-sale redemption.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Bergen County Foreclosure Market Context</h2>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <ul className="space-y-1 text-sm">
              <li className="text-slate-300"><strong className="text-white">Median home sale price:</strong> ~$758,000 (early 2026, Redfin — up 1.3% YoY)</li>
              <li className="text-slate-300"><strong className="text-white">Median price per sq ft:</strong> $450 (up 5.6% YoY)</li>
              <li className="text-slate-300"><strong className="text-white">Closed sales:</strong> 317 in March 2026, +5.7% vs March 2025 (NJ REALTORS®)</li>
              <li className="text-slate-300"><strong className="text-white">Active foreclosure listings:</strong> 106 as of May 2026</li>
            </ul>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm">
            In a market where modest single-family homes regularly command $600,000–$900,000, even an upset price of $450,000–$550,000 can represent significant equity. Competitive investor interest means Bergen County sheriff sales often see multiple bidders in desirable towns like Ridgewood, Tenafly, and Franklin Lakes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Bergen County NJ Foreclosure FAQs</h2>
          <div className="space-y-5">
            {[
              { q: 'Where can I find Bergen County NJ foreclosure listings?', a: 'salesweb.civilview.com/Sales/SalesSearch?countyId=7 — maintained by the Bergen County Sheriff\'s Office. 106 open listings as of May 2026.' },
              { q: 'When are Bergen County sheriff sales held in 2026?', a: 'Upcoming: June 12, June 26, July 10, August 7, August 14, 2026. Confirm at bcsd.us as sales can be adjourned.' },
              { q: 'What payment is accepted at Bergen County sheriff sales?', a: "Cashier's or certified checks only. Deed payments at Sheriff's Office, 2nd floor, 2 Bergen County Plaza, Hackensack. No Friday disbursements; Monday–Thursday before 4 PM." },
              { q: 'What is the upset price at a NJ sheriff sale?', a: 'Minimum bid = total owed to foreclosing lender including principal, interest, fees, court costs, and tax advances. Third-party bidders must exceed this with certified funds.' },
              { q: 'Can the homeowner get the property back after the sale?', a: "No. NJ has no post-sale right of redemption. Once the 10-day objection window closes and the sheriff's deed is delivered, the homeowner's rights are extinguished." },
              { q: 'Is NJ a judicial foreclosure state?', a: 'Yes. Every NJ foreclosure requires a Superior Court Final Judgment of Foreclosure (N.J. Court Rule 4:64) and the Fair Foreclosure Act (N.J.S.A. 2A:50-53 et seq.).' },
              { q: 'How long does the NJ foreclosure process take?', a: 'Typically 24–36+ months from first missed payment to deed transfer — one of the longest timelines in the US.' },
            ].map((item) => (
              <div key={item.q} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">Explore Neighboring County Foreclosure Markets</h2>
          <ul className="space-y-2 pl-4">
            <li><Link href="/foreclosures/essex-county-nj" className="text-emerald-400 hover:underline">Essex County NJ Foreclosure Listings</Link> — Newark, Montclair, Irvington, and 20 other municipalities</li>
            <li><Link href="/foreclosures/hudson-county-nj" className="text-emerald-400 hover:underline">Hudson County NJ Foreclosure Listings</Link> — Jersey City, Hoboken, Bayonne</li>
            <li><Link href="/foreclosures/middlesex-county-nj" className="text-emerald-400 hover:underline">Middlesex County NJ Foreclosure Listings</Link> — Edison, New Brunswick, Woodbridge</li>
            <li><Link href="/foreclosures/kings-county-ny" className="text-emerald-400 hover:underline">Kings County (Brooklyn) Foreclosure Listings</Link> — NYC borough just across the GWB</li>
          </ul>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://bcsd.us/sheriff-sales" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Bergen County Sheriff&apos;s Office — Sheriff Sales</a></li>
            <li>2. <a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=7" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">CivilView — Bergen County Sheriff Sale Listings (County ID 7)</a></li>
            <li>3. <a href="https://www.njcourts.gov/self-help/foreclosure" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">NJ Courts — Foreclosure Self-Help</a></li>
            <li>4. N.J. Court Rule 4:64 — Foreclosure of Mortgages</li>
            <li>5. N.J. Court Rule 4:65 — Sheriff Sales</li>
            <li>6. Fair Foreclosure Act: N.J.S.A. 2A:50-53 through 2A:50-73</li>
            <li>7. NJ REALTORS® Local Market Update, March 2026 (Bergen County)</li>
          </ol>
          <p className="text-xs text-slate-600 mt-4">
            YMYL advisory: Foreclosure auctions involve significant legal and financial risk. Consult a licensed NJ real estate attorney before bidding.
          </p>
        </section>
      </main>
    </div>
  )
}
