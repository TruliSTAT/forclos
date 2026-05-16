import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Ocean County NJ Foreclosure Auction: Complete Buyer\'s Guide',
  description: 'How to find, bid on, and buy properties at the Ocean County NJ foreclosure auction (sheriff sale). Official process, deposit rules, fees, CWPP update, and post-sale rights explained.',
  alternates: { canonical: 'https://forclos.com/foreclosures/ocean-county-nj' },
  openGraph: {
    title: 'Ocean County NJ Foreclosure Auction: Complete Buyer\'s Guide',
    description: 'Ocean County NJ foreclosure auction — NJ judicial process, sheriff sale bidding in Toms River, $1,500 deposit, cost table, and CWPP update for investors.',
    url: 'https://forclos.com/foreclosures/ocean-county-nj',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ocean County NJ Foreclosure Auction: Complete Buyer\'s Guide',
    description: 'Ocean County NJ foreclosure auction — NJ judicial process, sheriff sale bidding in Toms River, $1,500 deposit, cost table, and CWPP update for investors.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ocean County NJ Foreclosure Auction: Complete Buyer\'s Guide',
    description: 'How to find, bid on, and buy properties at the Ocean County NJ foreclosure auction (sheriff sale). Official process, deposit rules, fees, CWPP update, and post-sale rights explained.',
    url: 'https://forclos.com/foreclosures/ocean-county-nj',
    datePublished: '2026-05-16',
    dateModified: '2026-05-16',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/ocean-county-nj' },
    about: {
      '@type': 'Place',
      name: 'Ocean County',
      address: { '@type': 'PostalAddress', addressRegion: 'NJ', addressCountry: 'US' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I find upcoming Ocean County NJ sheriff sale listings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Ocean County Sheriff\'s Office publishes a current foreclosure listing at sheriff.co.ocean.nj.us/frmForeclosures. You can also call the Foreclosure Unit at 732-929-2044. Sales are also advertised in the Asbury Park Press for four consecutive Thursdays before the sale date.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need cash at the Ocean County NJ sheriff sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You must bring a check payable to the Ocean County Sheriff\'s Office for the $1,500 deposit at time of purchase. The balance of your bid is due within the timeframe specified in the Conditions of Sale. Always confirm the current payment requirements with the Sheriff\'s Office before attending.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I inspect the property before bidding at an Ocean County NJ sheriff sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Properties sold at Ocean County sheriff sales are sold as-is with no right of inspection. You bid without physically entering the property. Conduct due diligence — drive-bys, title searches, lien searches — before the sale.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if the previous owner is still living in the property after the Ocean County auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The purchaser takes subject to occupancy. You are responsible for any eviction proceedings under NJ law. This typically requires filing an eviction (unlawful detainer) action in the Special Civil Part of Superior Court if occupants refuse to leave.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a mortgage foreclosure auction and a NJ tax sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A mortgage foreclosure sheriff sale results from a lender pursuing court judgment for nonpayment, governed by N.J.S.A. 2A:50. A tax sale certificate is sold by the municipality when property taxes are delinquent — the purchaser buys the right to collect taxes plus interest and can eventually foreclose. Both processes involve different legal mechanisms.',
        },
      },
    ],
  },
]

export default function OceanCountyNJPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <NavBar />

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/foreclosures/nj" className="hover:text-slate-300 transition-colors">{/* forward-looking */}New Jersey foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Ocean County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Ocean County NJ Foreclosure Auction: Complete Buyer&apos;s Guide
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 16, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-6">
          If you&apos;re looking to purchase property at an <strong className="text-white">ocean county nj foreclosure auction</strong>, you&apos;re
          navigating one of the most structured — and slowest — foreclosure systems in the country. New Jersey is
          a judicial foreclosure state, meaning every mortgage foreclosure must pass through the court system before
          a property reaches the sheriff&apos;s sale block. Understanding exactly how this process works in Ocean County
          is essential before you place a single bid.
        </p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-10">
          <strong>Important:</strong> Foreclosure law varies by jurisdiction and changes frequently. Consult a
          licensed real estate attorney before bidding at any foreclosure auction. This guide is for informational
          purposes only.
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How NJ Judicial Foreclosure Works: 6 Steps</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            New Jersey foreclosures are governed primarily by <strong className="text-white">N.J. Stat. Ann. § 2A:50</strong> (Fair Foreclosure
            Act) and court procedures overseen by the NJ Courts Office of Foreclosure (part of the Superior Court).
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 1 — Default &amp; Pre-Foreclosure Notice</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            After a borrower misses payments (typically 3–6 months), the lender must send a{' '}
            <strong className="text-white">Notice of Intention to Foreclose (NOI)</strong> under N.J.S.A. 2A:50-56. The NOI gives the
            homeowner 30 days to cure the default before the lender files in court. This is a mandatory step —
            skipping it is grounds to dismiss the action.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 2 — Complaint Filed &amp; Lis Pendens Recorded</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The lender files a foreclosure complaint in the NJ Superior Court, Chancery Division. Simultaneously, a{' '}
            <strong className="text-white">lis pendens</strong> is recorded with the Ocean County Clerk&apos;s Office, putting the public on
            notice that the property is encumbered by litigation.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 3 — Service of Process &amp; Answer Period</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The defendant (homeowner) is served with the complaint and has <strong className="text-white">35 days</strong> to file an answer.
            Most residential foreclosures in NJ proceed as uncontested matters and are handled through the{' '}
            <strong className="text-white">Residential Mortgage Foreclosure Mediation Program</strong>.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 4 — Entry of Default Judgment / Final Judgment</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            If uncontested, the lender moves for a default judgment. The Office of Foreclosure reviews uncontested
            cases and issues a <strong className="text-white">Final Judgment of Foreclosure</strong> setting the total amount owed and
            authorizing the sale.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 5 — Writ of Execution Issued to the Sheriff</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The lender applies for a <strong className="text-white">Writ of Execution</strong> directing the Ocean County Sheriff to sell the
            property. The sheriff schedules the sale and publishes notice in the{' '}
            <em>Asbury Park Press</em> and a local township newspaper on <strong className="text-white">four consecutive Thursdays</strong> before
            the sale.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 6 — Sheriff&apos;s Sale (Public Auction)</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The property is sold at public auction at the Ocean County Administration Building,{' '}
            <strong className="text-white">101 Hooper Avenue, Room 119, Toms River, NJ 08753</strong>, on Tuesdays at 2:00 PM. After the
            sale, the former owner has a <strong className="text-white">10-day redemption period</strong> to pay off the judgment. If no
            redemption occurs, the successful bidder receives a Sheriff&apos;s Deed.
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <strong className="text-white">Timeline note:</strong> The NJ foreclosure process historically takes{' '}
            <strong className="text-white">2 to 4 years</strong> from first missed payment to sheriff&apos;s deed. Ocean County cases often
            fall in the 2–3 year range for uncontested matters.
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How to Bid at Ocean County Sheriff Sales</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Ocean County sheriff sales are <strong className="text-white">live public auctions</strong> held weekly (except legal holidays) at:
          </p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm mb-6">
            <strong className="text-white">Ocean County Administration Building</strong><br />
            101 Hooper Avenue, Room 119 · Toms River, NJ 08753<br />
            📞 732-929-2044 · Sales begin at <strong className="text-white">2:00 PM on Tuesdays</strong>
          </div>

          <h3 className="text-lg font-semibold text-white mb-2">Check the Listing First</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Current scheduled sales appear on the{' '}
            <a href="http://www.co.ocean.nj.us//WebContentFiles//3ec14ac4-25a1-41cd-8c8b-d9996a9d686c.pdf" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Ocean County Sheriff&apos;s Office foreclosure listing</a>.
            Properties can be <strong className="text-white">adjourned, cancelled, or subject to bankruptcy filings at any time</strong> —
            even up to 2:00 PM on sale day. Always call 732-929-2044 to confirm a property is still scheduled.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Under N.J.S. 2A:17-36, a sale can be adjourned up to <strong className="text-white">five times total</strong>: two at the lender&apos;s
            request, two at the borrower&apos;s request, and one by mutual consent — each adjournment up to 30 days.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">The $1,500 Deposit</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Winning bidders at Ocean County sheriff sales must pay a <strong className="text-white">$1,500 deposit</strong> at the time of sale.
            Checks must be made payable to the <em>Ocean County Sheriff&apos;s Office</em>. The balance is typically due
            within 30 days (consult the Conditions of Sale document).
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">What You&apos;re Buying</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Title at sheriff&apos;s sale is governed by <strong className="text-white">N.J.S.A. 2A:17-41</strong> — the purchaser receives exactly
            the same title the debtor held before the sale; no more, no less. This means:
          </p>
          <ul className="space-y-2 mb-4 pl-4">
            <li className="text-slate-300"><strong className="text-white">Property is sold as-is.</strong> Inspection of the property is not permitted.</li>
            <li className="text-slate-300">Sales are subject to all outstanding liens, mortgages, and encumbrances not extinguished by the foreclosure judgment.</li>
            <li className="text-slate-300">If the property is occupied, it is the purchaser&apos;s responsibility to remove occupants.</li>
            <li className="text-slate-300">The Sheriff&apos;s Department has no information about whether structures occupy the property.</li>
          </ul>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <strong className="text-white">New owner notice requirement:</strong> Under P.L. 2011, c.222, any person
            who takes title through a sheriff&apos;s sale must provide their contact information to the municipality
            and any applicable homeowners association within <strong className="text-white">10 business days</strong>.
          </div>
        </section>

        {/* Section 3 - Costs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Costs, Fees &amp; Deposits</h2>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Cost Item</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Amount / Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {[
                  ['Bidder Deposit (due at sale)', '$1,500'],
                  ['Sheriff\'s Commission (on sums ≤ $5,000)', '6%'],
                  ['Sheriff\'s Commission (on excess above $5,000)', '4%'],
                  ['Minimum Sheriff\'s Commission', '$50.00'],
                  ['Settled Without Sale (≤ $5,000)', '3%'],
                  ['Settled Without Sale (excess)', '2%'],
                  ['Deed Recording Fee', 'Varies (Ocean County Clerk)'],
                  ['Title Search (recommended)', '$200–$500+ (attorney/title company)'],
                  ['Outstanding Liens & Taxes', 'Buyer\'s responsibility'],
                  ['Well Testing (if applicable)', 'Required under County Ordinance 87-1'],
                ].map(([item, amount]) => (
                  <tr key={item} className="bg-slate-900/50">
                    <td className="px-4 py-3 text-slate-300">{item}</td>
                    <td className="px-4 py-3 text-slate-300">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <strong className="text-white">Commission example:</strong> On a $200,000 bid, sheriff&apos;s commission
            would be approximately <strong className="text-white">$8,100</strong> ($300 on the first $5,000 at 6% + $7,800 on the remaining
            $195,000 at 4%).
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Post-Sale Rights &amp; Risks</h2>

          <h3 className="text-lg font-semibold text-white mb-2">Redemption Period</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The former property owner can reclaim the property by paying the full judgment amount (plus costs)
            within <strong className="text-white">10 days of the sale or until the Sheriff&apos;s Deed is delivered</strong>, whichever comes first.
            If redeemed, the successful bidder&apos;s deposit is returned.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Bankruptcy Risk</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            If a bankruptcy petition is filed after the property is sold at sheriff&apos;s sale, the purchaser&apos;s $1,500
            deposit will <strong className="text-white">not</strong> be returned until the court provides further direction. The deposit is
            held without interest.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Surplus Funds</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            If the winning bid exceeds the total judgment debt, the surplus money is deposited into the Superior Court
            Trust Fund. Prior lienholders and the former owner (in that priority order) may claim those funds through
            a court motion under Court Rules 4:64-3 and 4:57-2.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Defaulting Bidder</h3>
          <p className="text-slate-300 leading-relaxed">
            If a winning bidder fails to complete the requirements of sale, they may be held liable for sheriff&apos;s fees
            and penalties per court order, consistent with the Fair Foreclosure Act (N.J.S.A. 2A:50).
          </p>
        </section>

        {/* Section 5 - Market Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Ocean County Market Context</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Ocean County is one of New Jersey&apos;s largest counties by land area, stretching from the Toms River
            corridor inland to the barrier island communities of Long Beach Island, Seaside Heights, and
            Point Pleasant Beach.
          </p>
          <ul className="space-y-2 mb-4 pl-4">
            <li className="text-slate-300"><strong className="text-white">Toms River</strong> (county seat) dominates residential volume and typically produces the most sheriff sale listings.</li>
            <li className="text-slate-300"><strong className="text-white">Lakewood</strong> is one of NJ&apos;s fastest-growing municipalities and has seen elevated foreclosure activity given its large rental housing market.</li>
            <li className="text-slate-300"><strong className="text-white">Shore communities</strong> (Seaside Heights, Lavallette, Bay Head) contain a mix of year-round residents and seasonal/investment properties with additional regulatory complexity (CAFRA, flood zone, septic requirements).</li>
            <li className="text-slate-300"><strong className="text-white">Inland townships</strong> — Jackson, Barnegat, Manchester — are characterized by large retirement communities where estate-related foreclosures are not uncommon.</li>
          </ul>

          <h3 className="text-lg font-semibold text-white mb-2">CWPP Update (September 2024)</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Ocean County made regional news in mid-2024 when the Sheriff&apos;s Office{' '}
            <strong className="text-white">suspended all foreclosure sales</strong> pending judicial review of New Jersey&apos;s Community Wealth
            Preservation Program (CWPP). <strong className="text-white">Sales resumed September 3, 2024.</strong> As of that date, Ocean County
            does not recognize CWPP first/second right of refusal (except for the defendant homeowner&apos;s own right
            under CWPP). Buyers should monitor any further judicial rulings on CWPP as this remains an evolving
            legal question in NJ. See:{' '}
            <a href="https://njcourts.gov" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">njcourts.gov</a>{' '}
            for updates.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I find upcoming Ocean County sheriff sale listings?',
                a: 'The Ocean County Sheriff\'s Office publishes a current foreclosure listing at sheriff.co.ocean.nj.us/frmForeclosures. You can also call the Foreclosure Unit at 732-929-2044. Sales are also advertised in the Asbury Park Press for four consecutive Thursdays before the sale date.',
              },
              {
                q: 'Do I need cash at the Ocean County sheriff sale?',
                a: 'You must bring a check payable to the Ocean County Sheriff\'s Office for the $1,500 deposit at time of purchase. The balance of your bid is due within the timeframe specified in the Conditions of Sale. Always confirm current payment requirements with the Sheriff\'s Office before attending.',
              },
              {
                q: 'Can I inspect the property before bidding?',
                a: 'No. Properties sold at Ocean County sheriff sales are sold as-is with no right of inspection. You bid without physically entering the property. Conduct your due diligence — drive-bys, title searches, lien searches — before the sale.',
              },
              {
                q: 'What happens if the previous owner is still living in the property?',
                a: 'The purchaser takes subject to occupancy. You are responsible for any eviction proceedings under NJ law. This typically requires filing an eviction (unlawful detainer) action in the Special Civil Part of Superior Court if occupants refuse to leave.',
              },
              {
                q: 'What is the difference between a mortgage foreclosure auction and a NJ tax sale?',
                a: 'A mortgage foreclosure sheriff sale (covered on this page) results from a lender pursuing court judgment for nonpayment of a mortgage, governed by N.J.S.A. 2A:50. A tax sale certificate is sold by the municipality when property taxes are delinquent — the purchaser buys the right to collect taxes plus interest and can eventually foreclose if unpaid, governed by N.J.S.A. 54:5-1 et seq.',
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Nearby NJ County Foreclosure Resources</h2>
          <ul className="space-y-2 pl-4">
            <li className="text-slate-300"><Link href="/foreclosures/union-county-nj" className="text-emerald-400 hover:underline">Union County NJ Foreclosure Listings</Link> — Elizabeth / Westfield area, bi-weekly sheriff sales</li>
            <li className="text-slate-300"><Link href="/foreclosures/essex-county-nj" className="text-emerald-400 hover:underline">Essex County NJ Foreclosure Auction</Link> — Newark metro, highest foreclosure volume in NJ</li>
            <li className="text-slate-300"><Link href="/foreclosures/bergen-county-nj" className="text-emerald-400 hover:underline">Bergen County NJ Foreclosure Listings</Link> — Northern NJ, active suburban market</li>
            <li className="text-slate-300"><Link href="/foreclosures/monmouth-county-nj" className="text-emerald-400 hover:underline">Monmouth County NJ Foreclosure Auction</Link> — Freehold area, strong shore demand</li>
            <li className="text-slate-300"><Link href="/foreclosures/middlesex-county-nj" className="text-emerald-400 hover:underline">Middlesex County NJ Foreclosure Listings</Link> — Central NJ, high population density</li>
          </ul>
        </section>

        {/* Sources */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="http://www.co.ocean.nj.us/Sheriff" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Ocean County Sheriff&apos;s Office (sheriff.co.ocean.nj.us)</a></li>
            <li>2. <a href="https://njcourts.gov" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">NJ Courts Office of Foreclosure (njcourts.gov)</a></li>
            <li>3. N.J. Stat. Ann. § 2A:50 (Fair Foreclosure Act)</li>
            <li>4. N.J.S.A. 2A:17-36 (Adjournments) &amp; N.J.S.A. 2A:17-41 (Title at Sheriff&apos;s Sale)</li>
            <li>5. Ocean County Board of Health Ordinance 87-1 (amended June 6, 1990)</li>
            <li>6. P.L. 2011, c.222 (New Owner Notice Requirement)</li>
            <li>7. NJ Court Rules 4:64-3 and 4:57-2</li>
          </ol>
        </section>
      </main>
    </div>
  )
}
