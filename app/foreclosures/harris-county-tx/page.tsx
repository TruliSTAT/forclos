import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Harris County Foreclosure Auction: Complete Buyer\'s Guide for Houston Investors',
  description: 'Everything investors need about the Harris County foreclosure auction — trustee sales vs. tax sales, Bayou City Event Center location, bidder registration, redemption periods, and due diligence checklist.',
  alternates: { canonical: 'https://forclos.com/foreclosures/harris-county-tx' },
  openGraph: {
    title: 'Harris County Foreclosure Auction Guide for Houston Investors',
    description: 'Trustee sales vs. tax sales, auction location, registration requirements, redemption periods, and full due diligence guide for the Harris County, TX foreclosure auction.',
    url: 'https://forclos.com/foreclosures/harris-county-tx',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harris County Foreclosure Auction Guide',
    description: 'Trustee sales, tax sales, Bayou City Event Center, redemption periods, and due diligence for Houston investors.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Harris County Foreclosure Auction: Complete Buyer\'s Guide for Houston Investors',
    description: 'Everything investors need about the Harris County foreclosure auction — trustee vs. tax sales, auction location at Bayou City Event Center, bidder registration, redemption periods, and due diligence.',
    url: 'https://forclos.com/foreclosures/harris-county-tx',
    datePublished: '2026-05-05',
    dateModified: '2026-05-05',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: { '@type': 'Organization', name: 'Forclos', logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/harris-county-tx' },
    keywords: 'harris county foreclosure auction, houston foreclosure auction, texas trustee sale, harris county tax sale, bayou city event center auction',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I inspect a property before bidding at the Harris County auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'Generally, no. Properties are sold without any right of inspection. You bid based on your exterior drive-by, publicly available tax records, and any prior listing history. This buyer-beware condition is standard across all Texas foreclosure auctions.' },
      },
      {
        '@type': 'Question',
        name: 'Where is the Harris County foreclosure auction held?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auctions are held at the Bayou City Event Center, 9401 Knight Road, Houston, TX 77045. Arrive early — parking is $5 cash only and regularly fills by 9:30 AM. Auctions run from 10:00 AM to 4:00 PM on the first Tuesday of each month.' },
      },
      {
        '@type': 'Question',
        name: 'What is the redemption period for Harris County tax sale properties?',
        acceptedAnswer: { '@type': 'Answer', text: 'Under Texas Tax Code § 34.21, prior owners of homestead properties have a 2-year right of redemption after a tax sale (25% penalty year 1, 50% year 2). Non-homestead properties have a 180-day window with the same 25% penalty. Trustee (mortgage) sales have no statutory redemption period in Texas.' },
      },
      {
        '@type': 'Question',
        name: 'Do I need to register before bidding at a Harris County tax sale?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Annual registration is required under Texas Property Code § 34.011. You must have no delinquent Harris County property taxes, complete registration at hctax.net, bring a valid photo ID, and be prepared to pay in full on the day of sale.' },
      },
      {
        '@type': 'Question',
        name: 'What happens if no one bids on a Harris County tax sale property?',
        acceptedAnswer: { '@type': 'Answer', text: 'The property becomes available for tax resale, typically at a lower minimum bid. The Harris County Tax Office administers these resale properties at hctax.net.' },
      },
    ],
  },
]

export default function HarrisCountyTXPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <NavBar />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/foreclosures/texas" className="hover:text-slate-300 transition-colors">Texas foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Harris County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Harris County Foreclosure Auction: Complete Buyer&apos;s Guide for Houston Investors
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 5, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-6">
          Harris County hosts one of the largest <strong className="text-white">harris county foreclosure auction</strong> markets in the United States.
          The county&apos;s 4.8 million residents, massive housing stock, and Texas&apos;s non-judicial foreclosure framework create a steady,
          high-volume auction pipeline. In 2025 alone, Harris County recorded 9,574 foreclosure filings — a 45.36% jump over 2024 —
          putting it alongside{' '}
          <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL</Link> and{' '}
          <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">Maricopa County, AZ</Link>{' '}
          as one of the busiest auction markets in the country.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Foreclosure Auctions Work in Harris County, Texas</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Texas operates under a <strong className="text-white">non-judicial foreclosure</strong> system governed by Texas Property Code Chapter 51.
            Lenders foreclose without court approval by following a statutory process:
          </p>
          <ol className="space-y-3 pl-4 list-decimal list-outside text-slate-300 mb-4">
            <li><strong className="text-white">Default and Notice of Default:</strong> Lender sends formal Notice of Default, giving the borrower 20 days to cure.</li>
            <li><strong className="text-white">Notice of Trustee&apos;s Sale:</strong> Filed with the Harris County Clerk (201 Caroline St, 3rd floor) at least 21 calendar days before the scheduled sale, sent via certified mail to the borrower, and posted publicly.</li>
            <li><strong className="text-white">Auction Day:</strong> Properties sold to the highest bidder, cash-only, no contingencies, no inspection rights.</li>
          </ol>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <strong className="text-white">Two auctions run simultaneously:</strong> Mortgage (trustee) sales and delinquent tax sales occur on the same day at the same venue but are separate processes. Knowing which one applies to your target property is essential before you bid.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Tax Sales vs. Mortgage Foreclosure Auctions</h2>

          <h3 className="text-lg font-semibold text-white mb-2">Mortgage (Trustee) Sales</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Initiated by private lenders after a borrower defaults. A substitute trustee — typically a law firm or foreclosure services
            company — conducts the sale. The opening bid is usually the outstanding loan balance plus fees. Texas grants{' '}
            <strong className="text-white">no right of redemption</strong> after a non-judicial trustee sale. Full payment is required on the day of sale.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Delinquent Tax Sales</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Conducted by the <strong className="text-white">Harris County Constable&apos;s office</strong> when property taxes go unpaid. Opening bids represent
            back taxes, penalties, interest, and court costs — often well below market value. Annual bidder registration is required
            under Texas Property Code § 34.011.
          </p>
          <div className="bg-slate-900 border border-amber-800 rounded-lg p-4 text-slate-300 text-sm mb-4">
            <strong className="text-amber-400">Redemption risk on tax sales:</strong> Under Texas Tax Code § 34.21, prior owners of{' '}
            <strong className="text-white">homestead properties</strong> retain a <strong className="text-white">2-year right of redemption</strong> after a tax sale
            (25% penalty year 1, 50% year 2). <strong className="text-white">Non-homestead properties</strong> have a 180-day window.
            This is the most underestimated risk in the Harris County auction market.
          </div>

          <h3 className="text-lg font-semibold text-white mb-2">Tax Resales</h3>
          <p className="text-slate-300 leading-relaxed">
            Properties that didn&apos;t sell at a prior tax auction go to tax resale at lower minimum bids. Due diligence requirements
            are identical and redemption risks are unchanged.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Where and When Auctions Are Held</h2>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-5 mb-4">
            <p className="text-white font-semibold mb-1">Bayou City Event Center</p>
            <p className="text-slate-300">9401 Knight Road, Houston, TX 77045</p>
            <p className="text-slate-400 text-sm mt-1">Parking: $5 cash only. Arrive before 9:30 AM — lot fills quickly.</p>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            Auctions are held on the <strong className="text-white">first Tuesday of each month</strong>, running from{' '}
            <strong className="text-white">10:00 AM to 4:00 PM</strong>. If the first Tuesday falls on a federal holiday, the sale moves to the following Wednesday.
          </p>
          <h3 className="text-lg font-semibold text-white mb-2">Finding the Auction List</h3>
          <ul className="space-y-2 pl-4 text-slate-300">
            <li>Harris County Clerk foreclosure search: <a href="https://www.cclerk.hctx.net" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">cclerk.hctx.net</a></li>
            <li>Harris County Tax Office: <a href="https://www.hctax.net" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">hctax.net/Property/TaxSales</a></li>
            <li>Paid listing service with equity data: <a href="https://fls.foreclosehouston.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">fls.foreclosehouston.com</a></li>
            <li>Daily Court Review (tax sale publications)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Bidder Requirements</h2>
          <h3 className="text-lg font-semibold text-white mb-2">For Tax Sales (Annual Registration Required)</h3>
          <ul className="space-y-2 pl-4 mb-4 text-slate-300">
            <li>No delinquent property taxes owed in Harris County</li>
            <li>Complete registration at hctax.net prior to sale date</li>
            <li>Valid government-issued photo ID on auction day</li>
            <li>Pay in full, on the day of sale — no exceptions</li>
          </ul>
          <h3 className="text-lg font-semibold text-white mb-2">For Trustee Sales (No Pre-Registration)</h3>
          <ul className="space-y-2 pl-4 text-slate-300">
            <li>Bring cashier&apos;s checks payable to yourself — endorse over to trustee upon winning</li>
            <li>No personal checks, credit cards, debit cards, or money orders accepted</li>
            <li>Multiple checks in varying denominations recommended (cover different bid scenarios)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Surviving Liens and Other Due Diligence Risks</h2>
          <div className="space-y-3">
            {[
              { title: 'IRS Tax Liens', body: 'Federal tax liens survive both trustee and tax sales in certain circumstances. A 120-day redemption right applies to IRS-liened properties.' },
              { title: 'HOA Liens', body: 'Texas HOA super-liens can survive a foreclosure sale and attach to the new owner.' },
              { title: 'Post-Judgment Taxes', body: 'At a tax sale, taxes accruing after the judgment date are the buyer\'s responsibility — not reflected in the opening bid.' },
              { title: 'Mechanics and Materialmen\'s Liens', body: 'Can survive depending on lien priority relative to the foreclosing lien.' },
              { title: 'Title Insurance Seasoning', body: 'After a tax sale, most title insurers require a 2–3 year seasoning period before issuing a policy. Budget accordingly.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.title}</p>
                <p className="text-slate-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Can I inspect a property before bidding at the Harris County auction?', a: 'Generally, no. Properties are sold without any right of inspection. You bid based on exterior drive-by, tax records, and prior listing history. Experienced investors always include a buffer in their maximum bid to account for unknown interior condition.' },
              { q: 'Where is the Harris County foreclosure auction held?', a: 'Bayou City Event Center, 9401 Knight Road, Houston, TX 77045. Auctions run 10:00 AM to 4:00 PM on the first Tuesday of each month. Arrive early — parking fills by 9:30 AM.' },
              { q: 'What is the redemption period for tax sale properties?', a: 'Homestead properties: 2-year redemption right (25% penalty year 1, 50% year 2). Non-homestead: 180 days (25% penalty). Trustee (mortgage) sales: no redemption period in Texas.' },
              { q: 'Do I need to register before bidding at a Harris County tax sale?', a: 'Yes — annual registration required under Texas Property Code § 34.011. Must have no delinquent taxes, register at hctax.net, bring photo ID, and pay in full on auction day.' },
              { q: 'What happens if no one bids on a Harris County tax sale property?', a: 'It becomes available for tax resale at a lower minimum bid, administered by the Harris County Tax Office at hctax.net.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <p className="text-slate-300 leading-relaxed">
            For cross-market comparison, Forclos also covers{' '}
            <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">Los Angeles County, CA</Link>,{' '}
            <Link href="/foreclosures/wayne-county-mi" className="text-emerald-400 hover:underline">Wayne County, MI</Link>,{' '}
            <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">Maricopa County, AZ</Link>, and{' '}
            <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL</Link>.
          </p>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://www.cclerk.hctx.net" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Harris County Clerk — Foreclosure Records (cclerk.hctx.net)</a></li>
            <li>2. <a href="https://www.hctax.net" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Harris County Tax Office — Tax Sales (hctax.net)</a></li>
            <li>3. <a href="https://fls.foreclosehouston.com" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">ForecloseHouston.com — Auction Listings</a></li>
            <li>4. Texas Tax Code § 34.21 — Right of Redemption</li>
            <li>5. Texas Property Code § 34.011 — Bidder Registration</li>
          </ol>
        </section>
      </main>
    </div>
  )
}
