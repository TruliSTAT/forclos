import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Union County NJ Foreclosure Listings: Complete Buyer\'s Guide',
  description: 'Find Union County NJ foreclosure listings at CivilView salesweb.civilview.com. NJ judicial process, sheriff sale bidding rules, 20% deposit, cost table, and post-sale rights explained.',
  alternates: { canonical: 'https://forclos.com/foreclosures/union-county-nj' },
  openGraph: {
    title: 'Union County NJ Foreclosure Listings: Complete Buyer\'s Guide',
    description: 'Union County NJ foreclosure listings — sheriff sale schedule, bidding requirements, Fair Foreclosure Act process, and costs for Elizabeth, Plainfield, and Westfield investors.',
    url: 'https://forclos.com/foreclosures/union-county-nj',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Union County NJ Foreclosure Listings: Complete Buyer\'s Guide',
    description: 'Union County NJ foreclosure listings — sheriff sale schedule, bidding requirements, Fair Foreclosure Act process, and costs for Elizabeth, Plainfield, and Westfield investors.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Union County NJ Foreclosure Listings: Complete Buyer\'s Guide',
    description: 'Find Union County NJ foreclosure listings at CivilView salesweb.civilview.com. NJ judicial process, sheriff sale bidding rules, 20% deposit, cost table, and post-sale rights explained.',
    url: 'https://forclos.com/foreclosures/union-county-nj',
    datePublished: '2026-05-16',
    dateModified: '2026-05-16',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/union-county-nj' },
    about: {
      '@type': 'Place',
      name: 'Union County',
      address: { '@type': 'PostalAddress', addressRegion: 'NJ', addressCountry: 'US' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How often are Union County NJ sheriff\'s sales held?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As of May 2026, Union County Sheriff\'s Foreclosure Sales are held every other Wednesday (bi-weekly) at the Union County Courthouse, 2 Broad Street, Elizabeth, NJ 07201. Sale dates are posted on the CivilView listings portal and on the Union County Sheriff\'s Office website.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I find the current list of Union County NJ foreclosure properties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The official and most current listing is maintained at salesweb.civilview.com/Sales/SalesSearch?countyId=15. The page is updated by the Sheriff\'s Office and shows open and sold/cancelled listings by municipality, plaintiff, and sale date.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deposit is required to bid at a Union County NJ sheriff\'s sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The winning bidder must pay 20% of the final bid amount at the close of the auction (same day), by cash or certified check. The remaining 80% must be paid within 30 days of the auction date. Failure to complete payment results in forfeiture of the deposit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I get a clean title when I buy at a Union County NJ sheriff\'s sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not necessarily. The sheriff\'s deed conveys whatever interest the court authorized, but certain liens — including unpaid property taxes, municipal utilities, and federal tax liens — may survive. A professional title search and title insurance are strongly recommended before bidding.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the homeowner still stop the foreclosure before the Union County sheriff\'s sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Under the New Jersey Fair Foreclosure Act (N.J.S.A. §§ 2A:50-53 to 2A:50-73), a homeowner has the right to cure the default up until entry of final judgment. After final judgment, the homeowner may redeem by paying the full judgment amount before the court confirms the sheriff\'s sale.',
        },
      },
    ],
  },
]

export default function UnionCountyNJPage() {
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
          <span className="text-slate-400">Union County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Union County NJ Foreclosure Listings: Complete Buyer&apos;s Guide
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 16, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-6">
          If you&apos;re searching for <strong className="text-white">union county nj foreclosure listings</strong>, you&apos;ve come to the right
          place. Union County sits in the heart of northeastern New Jersey, encompassing 21 municipalities —
          from Elizabeth and Plainfield to Summit and Westfield — and its judicial foreclosure pipeline produces
          some of the most active sheriff&apos;s sale calendars in the state. This guide walks you through how to find
          listings, how to bid, what it costs, and what happens after the sale.
        </p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-10">
          <strong>Important:</strong> Foreclosure law varies by jurisdiction and changes frequently. Consult a
          licensed real estate attorney before bidding at any foreclosure auction. This guide is for informational
          purposes only.
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Where to Find Union County NJ Foreclosure Listings</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The Union County Sheriff&apos;s Office maintains the official foreclosure listings portal through{' '}
            <strong className="text-white">CivilView</strong>, a state-adopted platform used by multiple New Jersey counties:
          </p>
          <ul className="space-y-2 mb-4 pl-4">
            <li className="text-slate-300">
              <strong className="text-white">Official listings portal:</strong>{' '}
              <a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=15" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">salesweb.civilview.com</a>{' '}
              (Union County ID: 15)
            </li>
            <li className="text-slate-300">
              <strong className="text-white">Sheriff&apos;s Office information page:</strong>{' '}
              <a href="https://ucnj.org/sheriff/functions/sheriffs-sale-information/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">ucnj.org/sheriff</a>
            </li>
            <li className="text-slate-300">
              <strong className="text-white">Sale reservation system:</strong>{' '}
              <a href="https://ucnj.org/sheriff/sheriffs-sale-reservation/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">ucnj.org/sheriff/sheriffs-sale-reservation/</a>
            </li>
          </ul>
          <p className="text-slate-300 leading-relaxed mb-4">
            As of May 2026, the CivilView portal listed <strong className="text-white">66 active Union County foreclosure properties</strong>,
            spanning municipalities including Elizabeth, Plainfield, Westfield, Rahway, Linden, Scotch Plains, and Clark.
          </p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <strong className="text-white">Sale schedule:</strong> Beginning May 6, 2026, Union County Sheriff&apos;s
            Foreclosure Sales are held <strong className="text-white">every other Wednesday</strong> at the Union County Courthouse,
            2 Broad Street, Elizabeth, NJ 07201.
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The NJ Judicial Foreclosure Process: Step by Step</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            New Jersey is a <strong className="text-white">judicial foreclosure state</strong>, meaning every residential foreclosure must
            proceed through the court system under <strong className="text-white">N.J. Stat. Ann. § 2A:50</strong> (the Fair Foreclosure Act).
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 1 — Loan Default</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The foreclosure clock starts when a borrower misses a mortgage payment. The formal process cannot
            begin for at least 120 days from the first missed payment.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 2 — Notice of Intention to Foreclose (NOI)</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Before filing a lawsuit, the lender must send a <strong className="text-white">Notice of Intention to Foreclose</strong> no sooner
            than 3 months after the first missed payment and at least 30 days before the complaint is filed. The
            NOI must include the exact amount to cure the default and notice of the borrower&apos;s right to mediation.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 3 — Foreclosure Complaint Filed</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The lender files a foreclosure complaint in Superior Court. The case is assigned to the{' '}
            <strong className="text-white">Office of Foreclosure</strong> in Trenton, which handles uncontested matters statewide.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 4 — Service of Complaint and Mediation Papers</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The borrower must be served with the summons and complaint. Attached is information about the{' '}
            <strong className="text-white">NJ Foreclosure Mediation Program</strong> — a free court-based mediation service available to homeowners.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 5 — Borrower&apos;s Answer Period</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Once served, the borrower has <strong className="text-white">35 days</strong> to file a formal answer. Filing an answer converts the
            case to a contested foreclosure, which may take considerably longer to resolve.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 6 — Final Judgment of Foreclosure</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            If no answer is filed, the Office of Foreclosure enters a <strong className="text-white">Final Judgment of Foreclosure</strong>.
            The judgment amount includes outstanding principal, accrued interest, and the lender&apos;s attorney&apos;s fees.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 7 — Sheriff&apos;s Sale Ordered and Advertised</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The court issues a <strong className="text-white">Writ of Execution</strong> directing the Union County Sheriff to conduct a public
            auction. The property must be <strong className="text-white">advertised in a county-circulation newspaper once per week for
            four consecutive weeks</strong> before the sale date.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 8 — Sheriff&apos;s Auction and Deed</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The auction is conducted at the courthouse. The highest bidder above the upset price wins. The deed
            is recorded with the <strong className="text-white">Union County Clerk&apos;s Office</strong>.
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <strong className="text-white">Timeline reality check:</strong> In New Jersey, an uncontested residential
            foreclosure typically takes <strong className="text-white">12 to 24 months</strong> from first missed payment to sheriff&apos;s sale.
            Contested cases can run significantly longer.
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Bidding at a Union County Sheriff&apos;s Sale</h2>

          <h3 className="text-lg font-semibold text-white mb-2">Before You Bid</h3>
          <ol className="space-y-2 pl-4 mb-6">
            {[
              'Search active listings at CivilView and note the sheriff case number and scheduled sale date.',
              'Review the public notice — each listing includes the upset price and property address.',
              'Do your own title search. Purchasing at sheriff\'s sale does not guarantee a clean title. Consult a real estate attorney before bidding.',
              'Inspect the property — Union County does not permit inspection of occupied foreclosure properties prior to auction. Drive-by due diligence is the standard.',
            ].map((step, i) => (
              <li key={i} className="text-slate-300">{i + 1}. {step}</li>
            ))}
          </ol>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Item</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {[
                  ['Deposit required', '20% of winning bid, due at the close of auction (cash or certified check)'],
                  ['Balance due', 'Full balance within 30 days of the auction date'],
                  ['Failure to pay balance', 'Deposit is forfeited; property may be re-listed for sale'],
                  ['Bidding platform', 'In-person only at Union County Courthouse, Elizabeth NJ'],
                  ['Sale reservation', 'Available via ucnj.org/sheriff/sheriffs-sale-reservation/'],
                ].map(([item, detail]) => (
                  <tr key={item} className="bg-slate-900/50">
                    <td className="px-4 py-3 text-slate-300">{item}</td>
                    <td className="px-4 py-3 text-slate-300">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-white mb-2">Upset Price</h3>
          <p className="text-slate-300 leading-relaxed">
            The upset price is set by the court in the final judgment. It typically represents the total amount of
            the foreclosing lender&apos;s judgment, not the fair market value of the property.
          </p>
        </section>

        {/* Section 4 - Costs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Costs and Fees Table</h2>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Cost Item</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Estimated Amount</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {[
                  ['Deposit at auction', '20% of winning bid', 'Due same day; certified check or cash'],
                  ['Balance of purchase price', 'Remainder', 'Due within 30 days of auction'],
                  ['Sheriff\'s deed fee', '~$135–$200', 'Union County recording fee'],
                  ['Transfer/realty transfer tax', 'Varies by price', 'NJ imposes transfer tax; see N.J.S.A. 46:15-7'],
                  ['Title search / title insurance', '$500–$2,500+', 'Strongly recommended'],
                  ['Property tax arrears', 'Variable', 'Outstanding taxes may survive sheriff\'s sale'],
                  ['Municipal liens', 'Variable', 'Water, sewer, code violations may survive'],
                  ['Attorney fees', '$1,500–$5,000+', 'Recommended for all foreclosure purchases'],
                ].map(([item, amount, notes]) => (
                  <tr key={item} className="bg-slate-900/50">
                    <td className="px-4 py-3 text-slate-300">{item}</td>
                    <td className="px-4 py-3 text-slate-300">{amount}</td>
                    <td className="px-4 py-3 text-slate-400">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Post-Sale Rights and Redemption</h2>

          <h3 className="text-lg font-semibold text-white mb-2">Right to Redeem Before Confirmation</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Under New Jersey law, the mortgagor may redeem the property (pay off the full debt){' '}
            <strong className="text-white">at any time before the court confirms the sale</strong>. Sale confirmation typically occurs within
            a few weeks after the auction.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Surplus Funds</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            If the winning bid exceeds the total judgment amount, the <strong className="text-white">surplus funds</strong> are deposited with
            the Superior Court. The former owner may petition the court for those surplus funds. Junior lienholders
            may also claim from the surplus in priority order.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Occupancy / Eviction</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Winning bidders do not gain immediate possession. If the property is occupied, the new owner must
            pursue formal eviction proceedings through the Superior Court, Landlord-Tenant Part.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Community Wealth Preservation Program</h3>
          <p className="text-slate-300 leading-relaxed">
            Union County offers a <strong className="text-white">Community Wealth Preservation Program</strong> for homeowners facing foreclosure
            who may qualify to keep their homes. Owners must submit required documentation to the Sheriff&apos;s Office
            at least one day before the scheduled sale date.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How often are Union County NJ sheriff\'s sales held?',
                a: 'As of May 2026, Union County Sheriff\'s Foreclosure Sales are held every other Wednesday (bi-weekly). Sale dates are posted on the CivilView listings portal and on the Union County Sheriff\'s Office website at ucnj.org/sheriff.',
              },
              {
                q: 'How do I find the current list of Union County foreclosure properties?',
                a: 'The official and most current listing is maintained at salesweb.civilview.com/Sales/SalesSearch?countyId=15. The page is updated by the Sheriff\'s Office and shows open and sold/cancelled listings by municipality, plaintiff, and sale date.',
              },
              {
                q: 'What deposit is required to bid at a Union County sheriff\'s sale?',
                a: 'The winning bidder must pay 20% of the final bid amount at the close of the auction (same day), by cash or certified check. The remaining 80% must be paid within 30 days of the auction date. Failure to complete payment results in forfeiture of the deposit.',
              },
              {
                q: 'Do I get a clean title when I buy at a Union County sheriff\'s sale?',
                a: 'Not necessarily. The sheriff\'s deed conveys whatever interest the court has authorized, but certain liens — including unpaid property taxes, municipal utilities, and federal tax liens — may survive the foreclosure sale. A professional title search and title insurance are strongly recommended before bidding.',
              },
              {
                q: 'Can the homeowner still stop the foreclosure before the sheriff\'s sale?',
                a: 'Yes. Under the New Jersey Fair Foreclosure Act, a homeowner has the right to cure the default up until the entry of final judgment. After final judgment, the homeowner may redeem by paying the full judgment amount before the court confirms the sale. The Union County Sheriff\'s Office also administers a Community Wealth Preservation Program for qualifying homeowners.',
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
          <h2 className="text-2xl font-semibold text-white mb-4">Related NJ County Foreclosure Pages</h2>
          <ul className="space-y-2 pl-4">
            <li className="text-slate-300"><Link href="/foreclosures/ocean-county-nj" className="text-emerald-400 hover:underline">Ocean County NJ Foreclosure Auction</Link> — Toms River / Shore area</li>
            <li className="text-slate-300"><Link href="/foreclosures/essex-county-nj" className="text-emerald-400 hover:underline">Essex County NJ Foreclosure Listings</Link> — Newark metro, high-volume judicial pipeline</li>
            <li className="text-slate-300"><Link href="/foreclosures/bergen-county-nj" className="text-emerald-400 hover:underline">Bergen County NJ Foreclosure Listings</Link> — Northern NJ, active suburban market</li>
            <li className="text-slate-300"><Link href="/foreclosures/hudson-county-nj" className="text-emerald-400 hover:underline">Hudson County NJ Foreclosure Listings</Link> — Jersey City / Hoboken corridor</li>
            <li className="text-slate-300"><Link href="/foreclosures/middlesex-county-nj" className="text-emerald-400 hover:underline">Middlesex County NJ Foreclosure Listings</Link> — Central NJ, Edison/New Brunswick area</li>
          </ul>
        </section>

        {/* Sources */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Official Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://ucnj.org/sheriff/functions/sheriffs-sale-information/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Union County Sheriff&apos;s Office – Sheriff Sale Information</a></li>
            <li>2. <a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=15" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Union County Foreclosure Sales Listing (CivilView)</a></li>
            <li>3. <a href="https://law.justia.com/codes/new-jersey/title-2a/section-2a-50-2/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">N.J. Stat. Ann. § 2A:50-2 (Order of Proceedings)</a></li>
            <li>4. <a href="https://www.lsnjlaw.org/Housing/Home-Ownership/Foreclosure/Pages/Foreclosure-Process.aspx" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Legal Services of NJ – Foreclosure Timeline</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
