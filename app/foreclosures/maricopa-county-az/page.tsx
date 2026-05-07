import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Maricopa County Foreclosure Listings & Trustee Sales',
  description: 'Browse maricopa county foreclosure listings — active trustee sales, REO properties & auction calendar. Includes the complete Arizona non-judicial foreclosure guide.',
  alternates: { canonical: 'https://forclos.com/foreclosures/maricopa-county-az' },
  openGraph: {
    title: 'Maricopa County Foreclosure Listings & Trustee Sales',
    description: 'Browse maricopa county foreclosure listings — active trustee sales, REO properties & auction calendar. Includes the complete Arizona non-judicial foreclosure guide.',
    url: 'https://forclos.com/foreclosures/maricopa-county-az',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maricopa County Foreclosure Listings & Trustee Sales',
    description: 'Browse maricopa county foreclosure listings — active trustee sales, REO properties & auction calendar. Includes the complete Arizona non-judicial foreclosure guide.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Maricopa County Foreclosure Listings — Active Trustee Sales & Auction Calendar',
    description: 'Complete guide to Maricopa County foreclosure listings, including how Arizona\'s non-judicial trustee sale process works, where auctions are held, due diligence requirements, and how to search upcoming sales using the Maricopa County Recorder\'s Office.',
    url: 'https://forclos.com/foreclosures/maricopa-county-az',
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/maricopa-county-az' },
    about: {
      '@type': 'Place',
      name: 'Maricopa County',
      address: { '@type': 'PostalAddress', addressRegion: 'AZ', addressCountry: 'US' },
    },
    keywords: 'maricopa county foreclosure listings, arizona trustee sale, arizona non-judicial foreclosure, maricopa county recorder, trustee sale auction phoenix',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where are Maricopa County trustee sale auctions held?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trustee sales take place at the Maricopa County Courthouse, 201 W. Jefferson St., Phoenix, AZ 85003. Auctions run every weekday in three sessions: 10:00 a.m., 12:00 noon, and 2:00 p.m. The session time for each property is specified in the recorded Notice of Trustee\'s Sale.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the Arizona foreclosure process take in Maricopa County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under Ariz. Rev. Stat. § 33-808(C)(1), the sale date must be set no sooner than 91 days after the Notice of Trustee\'s Sale is recorded. In practice, the full timeline from initial default to auction is often four to six months.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need cash to buy a property at a Maricopa County trustee sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Conventional mortgage financing is not available for trustee sale purchases. You need either cash or a hard money loan with confirmed same-day funding capability. The minimum cashier\'s check to bid is $10,000, and the full purchase balance must be paid by 5:00 p.m. the following business day.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I search for upcoming trustee sales in Maricopa County for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Maricopa County Recorder\'s Office maintains a publicly searchable database at recorder.maricopa.gov/recdocdata/. Search by document type "Notice of Trustee Sale" to see all upcoming auctions at no cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if no one bids at a Maricopa County trustee sale auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If no third-party bidder exceeds the lender\'s opening bid, the property reverts to the lender as real estate owned (REO). The lender then takes title via a trustee\'s deed and eventually lists it through a real estate agent on MLS.',
        },
      },
    ],
  },
]

export default function MaricopaCountyAZPage() {
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
          <Link href="/foreclosures/arizona" className="hover:text-slate-300 transition-colors">Arizona foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Maricopa County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Maricopa County Foreclosure Listings — Active Trustee Sales &amp; Auction Calendar
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 7, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-8">
          Maricopa County foreclosure listings attract serious attention for good reason: Arizona&apos;s non-judicial process is fast, the auction market is active every business day, and even in a low-inventory environment, distressed properties continue to cycle through the trustee sale pipeline. Whether you&apos;re an experienced investor who knows the courthouse steps or a first-time buyer exploring below-market opportunities, understanding how <strong>maricopa county foreclosure listings</strong> actually work — not just where to find them — is what separates the prepared buyer from the one who shows up empty-handed.
        </p>
        <p className="text-slate-300 leading-relaxed mb-8">
          Maricopa County is the fourth most populous county in the United States, home to Phoenix, Scottsdale, Tempe, Mesa, and Chandler. With that size comes a consistent — if currently modest — stream of foreclosure activity. As of March 2025, 461 residential Notice of Trustee Sale filings were recorded with the Maricopa County Recorder, up roughly 47% from 313 filings in March 2024. These numbers sound significant until you zoom out: at the peak of the Great Recession in March 2009, metro Phoenix saw more than 10,500 homes enter pre-foreclosure in a single month. Today&apos;s market is an opportunity for prepared buyers — not a crisis signal.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Foreclosures Work in Maricopa County</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Arizona is a <strong>non-judicial foreclosure state</strong>, which means lenders can foreclose through a trustee sale process without filing a lawsuit or obtaining a court order. The authority comes from a deed of trust — the instrument Arizona uses instead of a traditional mortgage — and the process is governed by <strong>Ariz. Rev. Stat. §§ 33-801 through 33-821</strong>.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">Here&apos;s how it unfolds:</p>
          <ol className="space-y-3 text-slate-300 leading-relaxed mb-4 list-decimal list-inside">
            <li><strong>Default:</strong> The borrower misses payments. After internal loss mitigation attempts, the lender instructs the trustee to begin the foreclosure process.</li>
            <li><strong>Notice of Trustee&apos;s Sale (NTS):</strong> The trustee records an NTS with the Maricopa County Recorder. This is also posted on the property for a minimum of 20 days and published in a qualified local newspaper once per week for four consecutive weeks — with the final publication no less than 10 days before the scheduled sale date.</li>
            <li><strong>91-Day Minimum Waiting Period:</strong> Under <strong>Ariz. Rev. Stat. § 33-808(C)(1)</strong>, the sale date cannot be set sooner than 91 days after the NTS recording date. This mandatory window gives borrowers time to cure the default, negotiate a loan modification, arrange a short sale, or file for bankruptcy protection.</li>
            <li><strong>Trustee Sale (Auction):</strong> If the default is not resolved, the property goes to public auction on the scheduled date. The property sells to the highest bidder above the lender&apos;s opening bid (typically the outstanding loan balance plus fees).</li>
            <li><strong>Post-Sale:</strong> The winning bidder receives a trustee&apos;s deed, which is recorded electronically with Maricopa County, typically within one to two weeks of the sale.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed">
            One critical reality: approximately 96% of properties auctioned at Maricopa County trustee sales revert to the lender as <strong>real estate owned (REO)</strong> because no third-party bidder outbids the bank&apos;s opening. The properties that do sell to outside investors represent the minority — but they represent real opportunity for buyers who come prepared.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Types of Foreclosure Properties Available</h2>
          <p className="text-slate-300 leading-relaxed mb-4">The Maricopa County foreclosure market has three distinct entry points, each at a different stage of the distressed property pipeline:</p>
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Pre-Foreclosures (Notice of Trustee Sale Filed)</p>
              <p>These properties have an NTS recorded but haven&apos;t yet gone to auction. The owner may still be occupying the home and may be open to a short sale or direct negotiation. This is the earliest — and most complex — stage of the pipeline.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Trustee Sale / Auction Properties</p>
              <p>Properties scheduled for public auction at the Maricopa County Courthouse. Competitive, cash-only, sold as-is with no inspection contingency. High risk, potentially high reward if you&apos;ve done your homework.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Bank-Owned (REO) Properties</p>
              <p>After the bank wins back the property at auction, it eventually lists the home through a real estate agent, typically on MLS. These listings are closest to a traditional purchase — title is cleaner, financing is usually available, and there&apos;s at least some opportunity for inspection. REO inventory in Maricopa County fluctuates; Redfin currently shows roughly 100 active foreclosure listings at any time across the county.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Where to Find Maricopa County Foreclosure Listings</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>Maricopa County Recorder&apos;s Office</strong> — the authoritative, free source. Visit{' '}
            <a href="https://recorder.maricopa.gov/recdocdata/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">recorder.maricopa.gov/recdocdata/</a>{' '}
            and search by document type &quot;Notice of Trustee Sale.&quot; This gives you the complete, unfiltered pipeline of upcoming auction properties directly from the public record. Every NTS filed in the county is searchable here — no paywall, no subscription, no teaser listings.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>Forclos</strong> — the fastest way to browse active Maricopa County foreclosure listings without navigating the Recorder&apos;s raw document search. Forclos aggregates NTS filings, REO listings, and auction calendar data into a single searchable interface, updated daily.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>MLS / Real Estate Portals</strong> — Redfin and Zillow surface REO (bank-owned) properties once they&apos;re listed by an agent, which is after the auction cycle has already completed. These are the &quot;cleaned-up&quot; end of the pipeline. Useful for traditional buyers; limited for investors who want earlier-stage inventory.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>Third-Party Auction Platforms</strong> — Auction.com operates its own platform for bank-owned properties. It covers a subset of Maricopa County REO inventory — not all bank-owned properties flow through it.
          </p>
          <p className="text-slate-300 leading-relaxed">
            If you&apos;re looking for comparable county-level foreclosure data in other major markets, Forclos also covers{' '}
            <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL foreclosure listings</Link>,{' '}
            <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County, TX foreclosure listings</Link>,{' '}
            <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">Los Angeles County, CA foreclosure listings</Link>, and{' '}
            <Link href="/foreclosures/wayne-county-mi" className="text-emerald-400 hover:underline">Wayne County, MI foreclosure listings</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The Trustee Sale Auction Process — Step by Step</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Maricopa County trustee sales are held <strong>every weekday</strong> at the <strong>Maricopa County Courthouse, 201 W. Jefferson St., Phoenix, AZ 85003</strong>. Sales are conducted in three sessions:
          </p>
          <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
            <li><strong>10:00 a.m.</strong></li>
            <li><strong>12:00 noon</strong></li>
            <li><strong>2:00 p.m.</strong></li>
          </ul>
          <p className="text-slate-300 leading-relaxed mb-4">Each property&apos;s specific session is noted on its NTS filing. Here&apos;s what the auction day process looks like:</p>
          <div className="space-y-4 mb-4">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Before You Arrive</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Obtain a <strong>cashier&apos;s check for at least $10,000</strong> — this is the minimum required to qualify as a bidder.</li>
                <li>Conventional mortgage financing is <strong>not available</strong> for trustee sale purchases. You need cash or a pre-arranged hard money loan with same-day funding capability.</li>
                <li>Complete your due diligence before the auction. There are no inspection contingencies and no warranties on title.</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">At the Auction</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>The trustee or their representative announces properties, opens bidding, and conducts the sale.</li>
                <li>If no third-party bidder exceeds the lender&apos;s opening bid, the lender wins back the property (~96% of the time).</li>
                <li>If you win, your $10,000 cashier&apos;s check is applied to the purchase price. The <strong>full remaining balance is due by 5:00 p.m. the following business day</strong>.</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">After the Sale</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>You receive a trustee&apos;s deed — not a warranty deed. No seller representations or warranties about the property&apos;s condition or title history.</li>
                <li>If the property is occupied, you will need to initiate the eviction process under Arizona law.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Risks and Due Diligence Before You Bid</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Buying at a Maricopa County trustee sale is an as-is, buyer-beware transaction. The following due diligence is non-negotiable if you want to avoid costly surprises:
          </p>
          <div className="space-y-3">
            <div>
              <p className="text-slate-300 leading-relaxed mb-1"><strong className="text-white">Title Search:</strong> Order a preliminary title report from a title company before the auction. You need to identify junior liens (second mortgages, HELOCs, mechanic&apos;s liens, HOA liens) that may survive the foreclosure and transfer to you as the new owner.</p>
            </div>
            <div>
              <p className="text-slate-300 leading-relaxed mb-1"><strong className="text-white">Property Condition Assessment:</strong> You cannot enter the property before buying it at auction. Do a careful drive-by. Look for deferred maintenance, evidence of vandalism, signs of structural issues visible from the street. Factor a conservative rehab estimate into your maximum bid.</p>
            </div>
            <div>
              <p className="text-slate-300 leading-relaxed mb-1"><strong className="text-white">Outstanding Property Taxes:</strong> Delinquent Maricopa County property taxes are a senior lien and will transfer to you. Search the Maricopa County Assessor&apos;s Office and Treasurer&apos;s records for any unpaid tax balance.</p>
            </div>
            <div>
              <p className="text-slate-300 leading-relaxed mb-1"><strong className="text-white">HOA Dues:</strong> Arizona law caps HOA lien priority at six months of unpaid assessments, but ongoing dues become your responsibility as the new owner. Contact the HOA to understand the account status.</p>
            </div>
            <div>
              <p className="text-slate-300 leading-relaxed mb-1"><strong className="text-white">IRS and State Tax Liens:</strong> Federal tax liens have a 120-day right of redemption post-sale. State tax liens have their own priority rules. A thorough title search will surface these.</p>
            </div>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mt-4">
            The cost of proper due diligence — typically a few hundred dollars for a preliminary title report — is trivial compared to the cost of inheriting an unexpected $40,000 HOA judgment or a federal tax lien.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Where are Maricopa County trustee sale auctions held?</h3>
              <p className="text-slate-300 leading-relaxed">Trustee sales take place at the Maricopa County Courthouse, 201 W. Jefferson St., Phoenix, AZ 85003. Auctions run every weekday in three sessions: 10:00 a.m., 12:00 noon, and 2:00 p.m. The session time for each property is specified in the recorded Notice of Trustee&apos;s Sale.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">How long does the Arizona foreclosure process take in Maricopa County?</h3>
              <p className="text-slate-300 leading-relaxed">Under Ariz. Rev. Stat. § 33-808(C)(1), the sale date must be set no sooner than 91 days after the Notice of Trustee&apos;s Sale is recorded. In practice, the full timeline from initial default to auction is often four to six months when you factor in lender processing time and the publication requirements. Arizona&apos;s non-judicial process is meaningfully faster than judicial foreclosure states, where timelines can stretch to one to three years.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Do I need cash to buy a property at a Maricopa County trustee sale?</h3>
              <p className="text-slate-300 leading-relaxed">Yes. Conventional mortgage financing is not available for trustee sale purchases. You need either cash or a hard money loan with confirmed same-day funding capability. The minimum cashier&apos;s check to bid is $10,000, and the full purchase balance must be paid by 5:00 p.m. the following business day.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">How do I search for upcoming trustee sales in Maricopa County for free?</h3>
              <p className="text-slate-300 leading-relaxed">The Maricopa County Recorder&apos;s Office maintains a publicly searchable database of all recorded documents at <a href="https://recorder.maricopa.gov/recdocdata/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">recorder.maricopa.gov/recdocdata/</a>. Search by document type &quot;Notice of Trustee Sale&quot; to see all upcoming auctions. This is the same source that third-party data providers use — going directly to the Recorder gives you the most current, unfiltered information at no cost.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What happens if no one bids at the auction?</h3>
              <p className="text-slate-300 leading-relaxed">If no third-party bidder exceeds the lender&apos;s opening bid (which is typically set at or near the outstanding loan balance), the property reverts to the lender as real estate owned (REO). The lender then takes title via a trustee&apos;s deed, manages the property, and eventually lists it through a real estate agent — at which point it appears on MLS as a standard bank-owned listing.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Browse Maricopa County Foreclosure Listings on Forclos</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Maricopa County&apos;s foreclosure market rewards preparation. The 91-day NTS window gives informed buyers time to identify properties, complete their due diligence, and arrive at the courthouse steps with a clear bid ceiling and a cashier&apos;s check in hand. The buyers who struggle are the ones who show up without a title report, without a rehab estimate, and without a firm understanding of the lien stack.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Forclos gives you the full Maricopa County foreclosure picture in one place: active NTS filings, upcoming auction dates, REO listings, and market context — updated daily so you&apos;re never working from stale data.
          </p>
          <Link href="/foreclosures/maricopa-county-az" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg transition-colors">
            Browse Maricopa County foreclosure listings →
          </Link>
        </section>

        {/* Sources */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://www.azleg.gov/ars/33/00808.htm" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Arizona Revised Statutes § 33-808 — Notice of Sale; time; place; postponement</a></li>
            <li>2. <a href="https://recorder.maricopa.gov/recdocdata/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Maricopa County Recorder — Official Document Search</a></li>
            <li>3. <a href="https://www.azleg.gov/ars/33/00801.htm" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Arizona Revised Statutes §§ 33-801 through 33-821 — Trust Deeds</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
