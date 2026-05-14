import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Middlesex County NJ Foreclosure Listings: Complete Buyer\'s Guide (2026)',
  description:
    'Find Middlesex County NJ foreclosure listings for Edison, New Brunswick, Woodbridge sheriff sales. CivilView portal, 20% deposit rules, redemption rights, and tax lien vs mortgage foreclosure explained.',
  alternates: { canonical: 'https://forclos.com/foreclosures/middlesex-county-nj' },
  openGraph: {
    title: 'Middlesex County NJ Foreclosure Listings: Complete Buyer\'s Guide (2026)',
    description:
      'Middlesex County NJ sheriff sales: CivilView County ID 73, New Brunswick courthouse, NJ judicial foreclosure 7-step process, 10-day redemption, tax sale vs mortgage comparison.',
    url: 'https://forclos.com/foreclosures/middlesex-county-nj',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Middlesex County NJ Foreclosure Listings: Complete Buyer\'s Guide (2026)',
    description:
      'Middlesex County NJ foreclosure listings: official CivilView portal, sheriff sales at New Brunswick courthouse, 20% deposit, NJ mediation program, tenant protections explained.',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: "Middlesex County NJ Foreclosure Listings: Complete Buyer's Guide (2026)",
      description:
        'How to find Middlesex County NJ foreclosure listings, understand NJ judicial foreclosure law, bid at sheriff sales, and understand redemption rights. Official sources only.',
      url: 'https://forclos.com/foreclosures/middlesex-county-nj',
      datePublished: '2026-05-14',
      dateModified: '2026-05-14',
      publisher: { '@type': 'Organization', name: 'Forclos', url: 'https://forclos.com' },
      author: { '@type': 'Organization', name: 'Forclos Editorial Team' },
      about: {
        '@type': 'Place',
        name: 'Middlesex County, New Jersey',
        containedInPlace: { '@type': 'State', name: 'New Jersey' },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I find current Middlesex County NJ foreclosure listings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The official source is salesweb.civilview.com/Sales/SalesSearch?countyId=73 (Middlesex County Sheriff CivilView portal), searchable by address, sale date, or case number. Also listed at middlesexcountynj.gov/government/departments/department-of-public-safety-and-health/office-of-the-county-sheriff/foreclosures.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I walk through a property before bidding at a Middlesex County sheriff sale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generally, no. Properties are sold strictly as-is with no right of inspection. Investors typically drive by to assess exterior condition. Do not trespass on occupied properties. You must accept the risk of unknown interior conditions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if the property has existing tenants after I buy it at a sheriff sale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'New Jersey law and federal law (the Protecting Tenants at Foreclosure Act, PTFA) protect tenants. If a tenant has a valid lease, the new owner must generally honor it through its term. For month-to-month tenants, the new owner must provide 90 days\' notice to vacate. You may not simply change the locks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there any liens that survive a Middlesex County sheriff sale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Municipal property tax liens, condominium association liens (under certain conditions), properly filed IRS and NJ state tax liens, and any liens senior to the foreclosed mortgage survive the sale and transfer to the buyer. A thorough title search before bidding is essential.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the Middlesex County NJ foreclosure mediation program work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After being served with a foreclosure complaint, a homeowner has 60 days to request free mediation through the NJ Courts Foreclosure Mediation Program. A trained mediator facilitates a meeting between borrower and lender to explore alternatives — loan modification, short sale, deed in lieu, or repayment plan. Mediation is voluntary; lenders must participate in good faith but are not required to agree to any particular outcome.',
          },
        },
      ],
    },
  ],
}

export default function MiddlesexCountyNJPage() {
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
          <span className="text-slate-400">Middlesex County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Middlesex County NJ Foreclosure Listings: Complete Buyer&apos;s Guide (2026)
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 2026 · Forclos Editorial</p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-8">
          <strong>Legal Disclaimer:</strong> New Jersey foreclosure law is complex. This page is for educational purposes only and does not constitute legal or financial advice. Always verify current procedures with the Middlesex County Sheriff&apos;s Office and consult a licensed NJ attorney before bidding.
        </div>

        <p className="text-slate-300 leading-relaxed mb-8">
          If you&apos;re searching for <strong className="text-white">Middlesex County NJ foreclosure listings</strong>, you&apos;ve landed in one of New Jersey&apos;s most active real estate markets. Middlesex County spans more than 300 square miles of central New Jersey, encompassing municipalities from New Brunswick and Edison to Woodbridge and Old Bridge. Foreclosure properties range from modest single-family homes in Carteret to larger suburban houses in East Brunswick — and the sheriff&apos;s sale calendar runs on a predictable schedule year-round.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How NJ Judicial Foreclosure Works</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            New Jersey is a <strong className="text-white">judicial foreclosure state</strong> — every mortgage foreclosure must go through the Superior Court system. There is no non-judicial (trustee sale) option. Governed by <strong className="text-white">N.J.S.A. 2A:50-1 et seq.</strong> and administered through the Office of Foreclosure in Trenton for uncontested matters.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">The 7-Step NJ Foreclosure Process</h3>
          <div className="space-y-3 mb-4">
            {[
              { n: 1, title: 'Default and Notice of Intent (NOI)', desc: 'Lender must send NOI at least 30 days before filing — but no sooner than 3 months after first missed payment. Must state cure amount and deadline.' },
              { n: 2, title: 'Foreclosure Complaint Filed', desc: 'Lender files complaint in Superior Court no sooner than 30 days after NOI and 120 days after first missed payment.' },
              { n: 3, title: 'Service, Answer Period, and Mediation', desc: 'Borrower served and has 35 days to answer, 60 days to request free NJ Courts mediation. Mediation request does not pause the foreclosure.' },
              { n: 4, title: 'Entry of Default and Final Judgment', desc: 'If unchallenged, lender obtains Final Judgment through the Office of Foreclosure. Borrower loses right to cure but retains right to redeem.' },
              { n: 5, title: 'Writ of Execution', desc: "Court issues Writ of Execution to the Middlesex County Sheriff. Sheriff must schedule sale within 150 days of receiving the writ." },
              { n: 6, title: "Sheriff's Sale", desc: 'Property sold at public auction at the Middlesex County Courthouse. Notice published in county newspaper and posted on property.' },
              { n: 7, title: 'Post-Sale Redemption Period', desc: 'For 10 days following the sale, the former owner retains the right to redeem by paying the full final judgment amount. After that, the sheriff records the deed.' },
            ].map((item) => (
              <div key={item.n} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold text-sm mb-1">{item.n}. {item.title}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm">
            Uncontested cases typically run <strong className="text-white">12 to 24 months</strong> from first missed payment to deed transfer — longer if contested or bankruptcy is filed.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Middlesex County Sheriff Sales: When, Where, and How to Find Listings</h2>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <ul className="space-y-1 text-sm">
              <li className="text-slate-300"><strong className="text-white">Location:</strong> Middlesex County Courthouse, New Brunswick, NJ 08901</li>
              <li className="text-slate-300"><strong className="text-white">Start time:</strong> 1:30 PM sharp; attendees must sign in upon arrival</li>
              <li className="text-slate-300"><strong className="text-white">Frequency:</strong> Approximately monthly throughout the year</li>
              <li className="text-slate-300"><strong className="text-white">Official listings:</strong> <a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=73" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">salesweb.civilview.com (County ID 73)</a></li>
            </ul>
          </div>

          <p className="text-slate-300 leading-relaxed mb-4">
            The CivilView portal lets you search active <strong className="text-white">Middlesex County NJ foreclosure listings</strong> by sheriff number, sale date, plaintiff, defendant, address, and municipality — covering Edison, Woodbridge, Perth Amboy, Piscataway, South Brunswick, New Brunswick, and Old Bridge, among others. Approximately <strong className="text-white">100–150 cases</strong> are on the docket at any given time.
          </p>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm">
            <strong>Always verify before attending.</strong> Properties frequently get postponed or cancelled due to borrower bankruptcy (automatic stay), borrower-requested adjournments (two 30-day stays permitted by right under NJ court rules), last-minute loan modifications, or court-ordered delays. Check CivilView the day before the scheduled sale.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Bidding at a Middlesex County Sheriff Sale</h2>

          <h3 className="text-xl font-semibold text-white mb-3">What to Bring</h3>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <ul className="space-y-1 text-sm">
              <li className="text-slate-300"><strong className="text-white">Deposit:</strong> 20% of winning bid — required immediately, by certified check, bank check, or cash. Personal checks not accepted.</li>
              <li className="text-slate-300"><strong className="text-white">Balance:</strong> Typically due within 30 days of sale</li>
              <li className="text-slate-300"><strong className="text-white">Opening bid:</strong> Set by plaintiff (lender) — usually the outstanding mortgage balance plus legal fees and costs</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">As-Is Condition and Title Risks</h3>
          <ul className="space-y-2 pl-4 mb-4">
            {[
              'Sheriff sale properties are sold strictly as-is. No seller disclosures, no home inspection contingencies, no warranties.',
              'Purchasing extinguishes the foreclosed mortgage and most junior liens (second mortgages, judgment liens) — but NOT municipal tax liens, IRS liens with proper notice, or senior liens.',
              'Title insurance is strongly recommended. Conduct a full lien search before bidding.',
              'Interior access is generally not possible pre-auction. Exterior drive-by and county tax records are primary research tools.',
            ].map((item) => (
              <li key={item} className="text-slate-300">• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Redemption Rights in New Jersey</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            New Jersey provides <strong className="text-white">two distinct opportunities</strong> to stop or reverse a foreclosure:
          </p>
          <div className="space-y-3 mb-4">
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">1. Right to Cure (Reinstatement)</p>
              <p className="text-slate-400 text-sm">Before Final Judgment, the borrower may reinstate the mortgage by paying all missed payments, late fees, and lender costs. Once Final Judgment enters, this right is extinguished.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">2. Right to Redeem (Post-Judgment)</p>
              <p className="text-slate-400 text-sm">After Final Judgment and up to 10 days post-sale, the borrower or any party with an interest may redeem by paying the <strong className="text-white">full final judgment amount</strong> — the entire outstanding loan balance plus attorney fees and court costs. See N.J.S.A. 2A:50-4. Once the 10-day window closes and the deed transfers, redemption is no longer available.</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm">
            For buyers: the 10-day redemption window means you should not begin improvements or move-in costs until that period has passed.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Tax Sale Foreclosures vs. Mortgage Foreclosures</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Middlesex County also sees properties proceed through the <strong className="text-white">tax sale certificate (TSC) process</strong> under N.J.S.A. 54:5-1 et seq. — entirely different from mortgage foreclosure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <p className="text-white font-semibold mb-2">Mortgage Foreclosure (N.J.S.A. 2A:50)</p>
              <ul className="space-y-1 text-slate-400 text-sm">
                <li>• Filed by mortgage lender</li>
                <li>• Court-supervised judicial process</li>
                <li>• Property sold at sheriff&apos;s auction</li>
                <li>• 10-day post-sale redemption window</li>
                <li>• Typical timeline: 12–24 months</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <p className="text-white font-semibold mb-2">Tax Sale Foreclosure (N.J.S.A. 54:5)</p>
              <ul className="space-y-1 text-slate-400 text-sm">
                <li>• Filed by TSC holder or municipality</li>
                <li>• Also Superior Court (in rem action)</li>
                <li>• 2-year wait before filing required</li>
                <li>• <strong className="text-white">Redemption before final judgment only</strong></li>
                <li>• Typical timeline: 6–18 months</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-400 text-sm">
            Both pathways go through Middlesex County Superior Court. Key difference: TSC holders bid on <em>interest rates</em> (starting 18%, descending) at the municipal tax lien auction; property doesn&apos;t transfer immediately.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Middlesex County NJ Foreclosure Listings: FAQs</h2>
          <div className="space-y-5">
            {[
              {
                q: 'Where can I find current Middlesex County NJ foreclosure listings?',
                a: 'The official source is salesweb.civilview.com/Sales/SalesSearch?countyId=73 — searchable by address, case number, or sale date. Also listed at the Middlesex County Sheriff\'s Office page on middlesexcountynj.gov.',
              },
              {
                q: 'Can I walk through a property before bidding at a Middlesex County sheriff sale?',
                a: 'Generally no. Properties are sold as-is with no right of inspection. Investors drive by to assess exterior condition. Do not trespass on occupied properties. Accept the risk of unknown interior conditions.',
              },
              {
                q: 'What happens if the property has existing tenants after I buy it at a sheriff sale?',
                a: "Federal law (PTFA) and NJ law protect tenants. If a tenant has a valid lease, the new owner must generally honor it through its term. For month-to-month tenants, 90 days' notice to vacate is required. Changing locks without court process is illegal.",
              },
              {
                q: 'Are there any liens that survive a Middlesex County sheriff sale?',
                a: 'Yes — municipal tax liens, properly filed IRS and NJ state tax liens, HOA liens (under certain conditions), and any liens senior to the foreclosed mortgage survive and become the buyer\'s obligation. A title search before bidding is essential.',
              },
              {
                q: 'How does the NJ foreclosure mediation program work for Middlesex County homeowners?',
                a: 'After being served with a foreclosure complaint, homeowners have 60 days to request free mediation through the NJ Courts Foreclosure Mediation Program. A trained mediator facilitates a meeting to explore alternatives — loan modification, short sale, deed in lieu, or repayment plan. Lenders must participate in good faith.',
              },
            ].map((item) => (
              <div key={item.q} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">Explore Neighboring NJ &amp; NY Foreclosure Markets</h2>
          <ul className="space-y-2 pl-4">
            <li><Link href="/foreclosures/essex-county-nj" className="text-emerald-400 hover:underline">Essex County NJ Foreclosure Auction</Link> — Newark, Montclair, Irvington</li>
            <li><Link href="/foreclosures/bergen-county-nj" className="text-emerald-400 hover:underline">Bergen County NJ Foreclosure Listings</Link> — Hackensack, Fort Lee, Ridgewood</li>
            <li><Link href="/foreclosures/hudson-county-nj" className="text-emerald-400 hover:underline">Hudson County NJ Foreclosure Auction</Link> — Jersey City, Bayonne, Hoboken</li>
            <li><Link href="/foreclosures/suffolk-county-ma" className="text-emerald-400 hover:underline">Suffolk County MA Foreclosure Auction</Link> — Boston metro, M.G.L. c.244 power-of-sale</li>
          </ul>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Official Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://www.middlesexcountynj.gov/government/departments/department-of-public-safety-and-health/office-of-the-county-sheriff/foreclosures" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Middlesex County Sheriff&apos;s Office — Foreclosures</a></li>
            <li>2. <a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=73" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">CivilView — Middlesex County Sheriff Sale Listings (County ID 73)</a></li>
            <li>3. <a href="https://www.njcourts.gov/self-help/foreclosure" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">NJ Courts — Foreclosure Self-Help &amp; Mediation</a></li>
            <li>4. N.J.S.A. 2A:50-1 et seq. — New Jersey Fair Foreclosure Act</li>
            <li>5. N.J.S.A. 2A:50-4 — Right of Redemption</li>
            <li>6. N.J.S.A. 54:5-1 et seq. — New Jersey Tax Sale Law</li>
            <li>7. <a href="https://lsnjlaw.org" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Legal Services of NJ — Foreclosure Resources (lsnjlaw.org)</a></li>
          </ol>
          <p className="text-xs text-slate-600 mt-4">
            YMYL advisory: Foreclosure auctions involve significant legal and financial risk. Consult a licensed NJ real estate attorney before bidding.
          </p>
        </section>
      </main>
    </div>
  )
}
