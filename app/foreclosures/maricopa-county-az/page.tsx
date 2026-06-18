import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Maricopa County Foreclosure Listings — Active Trustee Sales & Auction Calendar',
  description: 'Browse Maricopa County foreclosure listings and understand Arizona\'s non-judicial trustee sale process, daily courthouse auctions, deposit rules, and due diligence checklist for investors.',
  alternates: { canonical: 'https://forclos.com/foreclosures/maricopa-county-az' },
  openGraph: {
    title: 'Maricopa County Foreclosure Listings & Trustee Sale Guide',
    description: 'Active listings, daily courthouse auctions, 91-day NTS timeline, and investor due diligence guide for Maricopa County, AZ.',
    url: 'https://forclos.com/foreclosures/maricopa-county-az',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maricopa County Foreclosure Listings & Trustee Sale Guide',
    description: 'Active listings, daily courthouse auctions, 91-day NTS timeline, and investor due diligence guide for Maricopa County, AZ.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Maricopa County Foreclosure Listings — Active Trustee Sales & Auction Calendar',
    description: 'Complete guide to Maricopa County foreclosure listings, including Arizona\'s non-judicial trustee sale process, auction locations, due diligence requirements, and free search tools.',
    url: 'https://forclos.com/foreclosures/maricopa-county-az',
    datePublished: '2026-05-05',
    dateModified: '2026-05-05',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: { '@type': 'Organization', name: 'Forclos', logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/maricopa-county-az' },
    keywords: 'maricopa county foreclosure listings, arizona trustee sale, maricopa county foreclosure auction, notice of trustee sale maricopa, phoenix foreclosure',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where are Maricopa County trustee sale auctions held?',
        acceptedAnswer: { '@type': 'Answer', text: 'Trustee sales take place at the Maricopa County Courthouse, 201 W. Jefferson St., Phoenix, AZ 85003. Auctions run every weekday in three sessions: 10:00 a.m., 12:00 noon, and 2:00 p.m. The session time is noted in each property\'s Notice of Trustee\'s Sale.' },
      },
      {
        '@type': 'Question',
        name: 'How long does the Arizona foreclosure process take in Maricopa County?',
        acceptedAnswer: { '@type': 'Answer', text: 'Under Ariz. Rev. Stat. § 33-808(C)(1), the sale date cannot be set sooner than 91 days after the Notice of Trustee\'s Sale is recorded. In practice, the full timeline from initial default to completed auction is often four to six months.' },
      },
      {
        '@type': 'Question',
        name: 'Do I need cash to buy at a Maricopa County trustee sale?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Conventional financing is not available. You need cash or a hard money loan with same-day funding. The minimum cashier\'s check to bid is $10,000; the full balance is due by 5:00 p.m. the following business day.' },
      },
      {
        '@type': 'Question',
        name: 'How do I search upcoming Maricopa County trustee sales for free?',
        acceptedAnswer: { '@type': 'Answer', text: 'The Maricopa County Recorder at recorder.maricopa.gov/recdocdata/ publishes all Notices of Trustee Sale. Search by document type — no paywall, same data third-party aggregators use.' },
      },
      {
        '@type': 'Question',
        name: 'What happens if no one bids at a Maricopa County trustee sale?',
        acceptedAnswer: { '@type': 'Answer', text: 'The property reverts to the lender as real estate owned (REO). The lender takes title via trustee\'s deed, then eventually lists it through a real estate agent on MLS.' },
      },
    ],
  },
]

export default function MaricopaCountyAZPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <NavBar />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/foreclosures/arizona" className="hover:text-slate-300 transition-colors">Arizona foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Maricopa County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Maricopa County Foreclosure Listings — Active Trustee Sales &amp; Auction Calendar
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 5, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-6">
          Maricopa County foreclosure listings attract serious investor attention for good reason: Arizona&apos;s non-judicial process is fast,
          the auction market is active every business day, and distressed properties continue to cycle through the trustee sale pipeline
          even in a lower-inventory environment. As of March 2025, 461 residential Notice of Trustee Sale filings were recorded with
          the Maricopa County Recorder — up roughly 47% from 313 filings in March 2024. For context, at the peak of the Great Recession
          in March 2009, metro Phoenix saw more than 10,500 homes enter pre-foreclosure in a single month. Today&apos;s market is an
          opportunity for prepared buyers — not a crisis signal.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Foreclosures Work in Maricopa County</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Arizona is a <strong className="text-white">non-judicial foreclosure state</strong>, meaning lenders foreclose through a trustee sale process
            without court involvement. The authority comes from a deed of trust and is governed by{' '}
            <strong className="text-white">Ariz. Rev. Stat. §§ 33-801 through 33-821</strong>.
          </p>
          <ol className="space-y-3 mb-4 pl-4 list-decimal list-outside text-slate-300">
            <li><strong className="text-white">Default:</strong> Borrower misses payments; lender instructs trustee (typically a title company or attorney) to begin foreclosure.</li>
            <li><strong className="text-white">Notice of Trustee&apos;s Sale (NTS):</strong> Recorded with the Maricopa County Recorder, posted on the property for 20+ days, and published in a newspaper once per week for four consecutive weeks.</li>
            <li><strong className="text-white">91-Day Minimum Waiting Period:</strong> Under Ariz. Rev. Stat. § 33-808(C)(1), the sale cannot be set sooner than 91 days after NTS recording. Borrowers can cure the default, negotiate a loan mod, arrange a short sale, or file bankruptcy.</li>
            <li><strong className="text-white">Trustee Sale (Auction):</strong> Property goes to public auction. Sells to highest bidder above the lender&apos;s opening bid (typically outstanding loan balance plus fees).</li>
            <li><strong className="text-white">Post-Sale:</strong> Winning bidder receives a trustee&apos;s deed recorded electronically with Maricopa County, typically within one to two weeks.</li>
          </ol>
          <div className="bg-slate-900 border border-amber-800 rounded-lg p-4 text-slate-300 text-sm">
            <strong className="text-amber-400">Important:</strong> Approximately 96% of properties auctioned at Maricopa County trustee sales revert to the lender as REO because no third-party bidder outbids the bank&apos;s opening. Properties that sell to outside investors are the minority — but they represent real opportunity for prepared buyers.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Types of Foreclosure Properties Available</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Pre-Foreclosures (NTS Filed, Not Yet Auctioned)</h3>
              <p className="text-slate-300 leading-relaxed">NTS recorded but property hasn&apos;t gone to auction. Owner may still be occupying and open to short sale or direct negotiation. Earliest — and most complex — stage of the pipeline.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Trustee Sale / Auction Properties</h3>
              <p className="text-slate-300 leading-relaxed">Scheduled for public auction at the Maricopa County Courthouse. Cash-only, sold as-is, no inspection contingency. High risk, potentially high reward with proper preparation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Bank-Owned (REO) Properties</h3>
              <p className="text-slate-300 leading-relaxed">After the bank wins back the property at auction, it eventually lists via a real estate agent on MLS. Cleaner title, financing usually available, inspection opportunity. Redfin shows roughly 100 active foreclosure listings in Maricopa County at any given time.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Where to Find Maricopa County Foreclosure Listings</h2>
          <ul className="space-y-3 mb-4">
            <li className="text-slate-300">
              <strong className="text-white">Maricopa County Recorder&apos;s Office</strong> — Free, authoritative source. Visit{' '}
              <a href="https://recorder.maricopa.gov/recdocdata/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">recorder.maricopa.gov/recdocdata/</a>{' '}
              and search by document type &ldquo;Notice of Trustee Sale.&rdquo; Every NTS in the county is searchable here with no paywall.
            </li>
            <li className="text-slate-300">
              <strong className="text-white">Forclos</strong> — Aggregates NTS filings, REO listings, and auction calendar data into a single searchable interface, updated daily.
            </li>
            <li className="text-slate-300">
              <strong className="text-white">MLS / Real Estate Portals</strong> — Redfin and Zillow surface REO (bank-owned) properties once listed by an agent. Useful for traditional buyers; limited for investors wanting earlier-stage inventory.
            </li>
            <li className="text-slate-300">
              <strong className="text-white">Auction.com</strong> — Operates its own platform for a subset of Maricopa County REO inventory after the auction cycle completes.
            </li>
          </ul>
          <p className="text-slate-300 leading-relaxed">
            For comparable county-level foreclosure data across major markets, Forclos also covers{' '}
            <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL</Link>,{' '}
            <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County, TX</Link>,{' '}
            <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">Los Angeles County, CA</Link>, and{' '}
            <Link href="/foreclosures/wayne-county-mi" className="text-emerald-400 hover:underline">Wayne County, MI</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The Trustee Sale Auction Process — Step by Step</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Maricopa County trustee sales are held <strong className="text-white">every weekday</strong> at the{' '}
            <strong className="text-white">Maricopa County Courthouse, 201 W. Jefferson St., Phoenix, AZ 85003</strong>, in three sessions:
            10:00 a.m., 12:00 noon, and 2:00 p.m. Each property&apos;s session is noted in its NTS filing.
          </p>
          <h3 className="text-lg font-semibold text-white mb-2">Before You Arrive</h3>
          <ul className="space-y-2 mb-4 pl-4 text-slate-300">
            <li>Bring a <strong className="text-white">cashier&apos;s check for at least $10,000</strong> — the minimum required to qualify as a bidder. Most investors bring multiple checks in varying denominations.</li>
            <li>Conventional mortgage financing is <strong className="text-white">not available</strong>. You need cash or a pre-arranged hard money loan with same-day funding.</li>
            <li>Complete due diligence before the auction — no inspection contingencies, no title warranties.</li>
          </ul>
          <h3 className="text-lg font-semibold text-white mb-2">At the Auction</h3>
          <ul className="space-y-2 mb-4 pl-4 text-slate-300">
            <li>The trustee announces properties, opens bidding, and conducts the sale.</li>
            <li>If you win, your $10,000 check is applied to the purchase price. The <strong className="text-white">full remaining balance is due by 5:00 p.m. the following business day</strong>.</li>
            <li>After full payment, the trustee issues a deed recorded electronically with Maricopa County.</li>
          </ul>
          <h3 className="text-lg font-semibold text-white mb-2">After the Sale</h3>
          <p className="text-slate-300 leading-relaxed">
            You receive a trustee&apos;s deed — not a warranty deed. You have no seller representations about condition or title history.
            If the property is occupied, you will need to initiate eviction proceedings under Arizona law.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Due Diligence Checklist Before You Bid</h2>
          <div className="space-y-3">
            {[
              { title: 'Title Search', body: 'Order a preliminary title report. Identify junior liens (second mortgages, HELOCs, mechanic\'s liens, HOA liens) that may survive and transfer to you.' },
              { title: 'Property Condition', body: 'You cannot enter before buying. Do a careful drive-by. Factor a conservative rehab estimate into your maximum bid.' },
              { title: 'Outstanding Property Taxes', body: 'Delinquent Maricopa County property taxes are a senior lien and transfer to you. Search the Assessor and Treasurer records.' },
              { title: 'HOA Dues', body: 'Arizona law caps HOA lien priority at six months of unpaid assessments, but ongoing dues become your responsibility as new owner.' },
              { title: 'IRS and State Tax Liens', body: 'Federal tax liens have a 120-day right of redemption post-sale. A thorough title search will surface these.' },
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
              {
                q: 'Where are Maricopa County trustee sale auctions held?',
                a: 'Maricopa County Courthouse, 201 W. Jefferson St., Phoenix, AZ 85003. Auctions run every weekday in three sessions: 10:00 a.m., 12:00 noon, and 2:00 p.m. The session for each property is specified in its Notice of Trustee\'s Sale.',
              },
              {
                q: 'How long does the Arizona foreclosure process take in Maricopa County?',
                a: 'Under Ariz. Rev. Stat. § 33-808(C)(1), the sale date must be set no sooner than 91 days after the NTS is recorded. In practice, the full timeline from initial default to auction is often four to six months.',
              },
              {
                q: 'Do I need cash to buy at a Maricopa County trustee sale?',
                a: 'Yes. Conventional mortgage financing is not available. You need cash or a hard money loan with confirmed same-day funding. The minimum cashier\'s check to bid is $10,000; full balance is due by 5:00 p.m. the following business day.',
              },
              {
                q: 'How do I search upcoming trustee sales in Maricopa County for free?',
                a: 'The Maricopa County Recorder at recorder.maricopa.gov/recdocdata/ has all recorded Notices of Trustee Sale. Search by document type — free, no paywall, same data third-party providers use.',
              },
              {
                q: 'What happens if no one bids at a Maricopa County trustee sale?',
                a: 'The property reverts to the lender as real estate owned (REO). The lender takes title via trustee\'s deed and eventually lists it through a real estate agent — at which point it appears on MLS.',
              },
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
            <li>1. <a href="https://recorder.maricopa.gov/recdocdata/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Maricopa County Recorder — Document Search</a></li>
            <li>2. <a href="https://www.azleg.gov/ars/33/00808.htm" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Ariz. Rev. Stat. § 33-808 — Notice of Trustee\'s Sale</a></li>
            <li>3. <a href="https://www.redfin.com/county/2117/AZ/Maricopa-County/foreclosures" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Redfin — Maricopa County Foreclosures</a></li>
            <li>4. <a href="https://www.foreclosurelistings.com/list/AZ/MARICOPA/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">ForeclosureListings.com — Maricopa County</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
