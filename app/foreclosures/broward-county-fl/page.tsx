import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Broward County Foreclosure Listings — Complete Buyer\'s Guide (2026)',
  description: 'Broward County foreclosure listings explained — 19,147 distressed properties, auction rules, deposit deadlines, doc stamp taxes, and certificate of title timeline.',
  alternates: { canonical: 'https://forclos.com/foreclosures/broward-county-fl' },
  openGraph: {
    title: 'Broward County Foreclosure Listings — Complete Buyer\'s Guide (2026)',
    description: 'Broward County foreclosure listings explained — 19,147 distressed properties, auction rules, deposit deadlines, doc stamp taxes, and certificate of title timeline.',
    url: 'https://forclos.com/foreclosures/broward-county-fl',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Broward County Foreclosure Listings — Complete Buyer\'s Guide (2026)',
    description: 'Broward County foreclosure listings explained — 19,147 distressed properties, auction rules, deposit deadlines, doc stamp taxes, and certificate of title timeline.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Broward County Foreclosure Listings: What 19,147 Properties vs. 60 MLS Listings Really Means',
    description: 'Complete guide to Broward County foreclosure listings: Florida\'s judicial foreclosure process, how to bid on broward.realforeclose.com, deposit rules, doc stamp taxes, Certificate of Title timeline, and homeowner rights.',
    url: 'https://forclos.com/foreclosures/broward-county-fl',
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/broward-county-fl' },
    about: {
      '@type': 'Place',
      name: 'Broward County',
      address: { '@type': 'PostalAddress', addressRegion: 'FL', addressCountry: 'US' },
    },
    keywords: 'broward county foreclosure listings, broward foreclosure auction, florida judicial foreclosure, realforeclose.com broward, broward county sheriff sale',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I have to be physically present to bid on Broward County foreclosures?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. All Broward County judicial foreclosure auctions are conducted exclusively online at broward.realforeclose.com. You can bid from anywhere with an internet connection, as long as you have registered in advance and submitted your deposit by the 3 PM deadline the previous business day.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I win a property and cannot pay by noon the next business day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your deposit is forfeited in full. The Clerk will also assess a non-refundable registry fee. The property will be re-scheduled for sale. There is no hardship exception or payment plan option under Fla. Stat. § 45.035(3).',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I calculate the documentary stamp tax on my winning bid?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Multiply your winning bid by 0.007. For example, a $200,000 bid × 0.007 = $1,400 in doc stamps. This amount is due to the Broward County Board of County Commissioners (not the Clerk) within 15 days of Certificate of Title issuance. Email rttcet@broward.org to arrange wire payment in advance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a homeowner take back the property after I win at auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No — not after the auction closes. Florida\'s right of redemption under Fla. Stat. § 45.0315 expires when the Certificate of Sale is issued at the conclusion of the auction. The 10-day objection period that follows does not revive redemption rights.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does foreclosure.com show 19,000+ properties when Zillow only shows 60?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 19,000+ figure includes properties at every stage of Florida\'s judicial foreclosure pipeline — lis pendens filings, court judgments, and properties scheduled for sale. Only a small fraction of those will ever reach the MLS as bank-owned listings. Most are still in active litigation or pre-auction status.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I assign my winning bid to a different entity like an LLC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can, but the assignment must be filed with the Clerk before the sale date, and the plaintiff must update the winning bidder\'s name on the RealAuction platform in advance. Documentary stamp taxes are still owed even if the assignee entity would normally qualify for an exemption.',
        },
      },
    ],
  },
]

export default function BrowardCountyFLPage() {
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
          <Link href="/foreclosures/florida" className="hover:text-slate-300 transition-colors">Florida foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Broward County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Broward County Foreclosure Listings: What 19,147 Properties vs. 60 MLS Listings Really Means
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 7, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-6">
          Search for Broward County foreclosures on Zillow and you&apos;ll see roughly <strong>60 properties</strong>. Search foreclosure.com and you&apos;ll find <strong>19,147</strong>. That gap isn&apos;t a data glitch — it&apos;s a window into how Florida&apos;s judicial foreclosure process works, and understanding it is the first step to buying distressed properties profitably in one of South Florida&apos;s most competitive markets.
        </p>
        <p className="text-slate-300 leading-relaxed mb-8">
          The 19,000+ figure includes pre-foreclosure filings, lis pendens notices, and properties at various stages of the court pipeline. The 60 you see on Zillow are already bank-owned and listed on the MLS. Most investors never see the early-stage inventory. This guide gives you the full picture — including the exact deposit rules, payment deadlines, and hidden costs that trip up first-time bidders at Broward County&apos;s online auction.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Broward County&apos;s Foreclosure Pipeline: The Real Numbers</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Broward County&apos;s foreclosure market is one of the deepest in Florida. Here&apos;s where the inventory actually sits as of mid-2026:
          </p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm mb-4">
            <ul className="space-y-1">
              <li><strong className="text-white">foreclosure.com:</strong> 19,147 distressed properties</li>
              <li><strong className="text-white">foreclosurelistings.com:</strong> 25,961 listings</li>
              <li><strong className="text-white">Zillow (MLS-listed):</strong> ~60</li>
              <li><strong className="text-white">auction.com (bank-owned):</strong> ~55</li>
              <li><strong className="text-white">browardhomeauctions.com:</strong> 162 active monthly auctions</li>
            </ul>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            The MLS-listed properties are the end of a long journey through Florida&apos;s judicial foreclosure system. To access the larger inventory — properties still in the court pipeline — you need to track lis pendens filings at the <strong>Broward County Clerk of Courts</strong> (201 SE 6th Street, Fort Lauderdale, FL 33301; (954) 831-6565) and monitor auction schedules at{' '}
            <a href="https://broward.realforeclose.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">broward.realforeclose.com</a>.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Florida is a <strong>judicial foreclosure state</strong>, which means a lender cannot auction a property without first filing suit and obtaining a court judgment in the 17th Judicial Circuit Court. That process can take months or years, which is why so many properties sit in the pipeline before reaching auction. For buyers willing to do the homework, that pre-sale window is where deals are found. Compare this dynamic to{' '}
            <Link href="/foreclosures/miami-dade-county-fl" className="text-emerald-400 hover:underline">Miami-Dade County</Link>, which operates the same judicial system one county south.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Broward Foreclosure Auctions Work</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            All Broward County foreclosure auctions are conducted <strong>exclusively online</strong> through{' '}
            <a href="https://broward.realforeclose.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">broward.realforeclose.com</a>. There is no in-person courthouse auction.
          </p>

          <div className="space-y-3">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 1: Register before sale day</p>
              <p>Registration is free, but must be completed before the auction date — no walk-in or same-day registration is accepted. Once registered, you&apos;ll receive a Username, Password, and bidder number.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 2: Review the auction calendar</p>
              <p>Auctions are scheduled by the plaintiff (lender). Each scheduled or rescheduled sale triggers a $70 fee paid by the plaintiff via the e-Portal under Senate Bill 2506 / Fla. Stat. § 45.035(3). Check the calendar regularly — properties are frequently postponed.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 3: Post your deposit</p>
              <p>Before you can bid, you must submit a deposit for each property you intend to bid on. The deadline is <strong>3:00 PM EST the previous business day</strong> — not the morning of the sale.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 4: Bid online</p>
              <p>Bidding is conducted online during the scheduled sale window. The platform is straightforward once registered, but the financial stakes are significant — missed deadlines carry real penalties.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 5: Track your Certificate of Title</p>
              <p>After winning, you&apos;ll wait through a 10-day objection period before the Certificate of Title is issued. Track issuance at{' '}
              <a href="https://officialrecords.broward.org/CETTrackWeb/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">officialrecords.broward.org/CETTrackWeb/</a>.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Deposit Rules: The 3 PM Deadline That Trips Up First-Time Bidders</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            This is where most new investors make their first expensive mistake. Broward County&apos;s deposit rules are strict, and the timing is counterintuitive.
          </p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm mb-4">
            <ul className="space-y-2">
              <li><strong className="text-white">Required deposit:</strong> 5% of your estimated highest bid per property</li>
              <li><strong className="text-white">Deadline:</strong> 3:00 PM EST the previous business day before the auction</li>
              <li><strong className="text-white">Payment methods:</strong> Wire transfer (most common); in-person cash, cashier&apos;s check, or money order</li>
            </ul>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-4">
            <strong>Wire transfer warning:</strong> Wires don&apos;t settle instantly. If you initiate a wire at 2:45 PM, there&apos;s a real risk it won&apos;t clear by 3:00 PM. Build in at least a half-day buffer and confirm with your bank on typical outgoing wire settlement times.
          </div>
          <p className="text-slate-300 leading-relaxed">
            If you miss the deposit deadline, you cannot bid on that property — period. The registration remains valid for other properties, but the deposit requirement is per-property and the deadline is absolute. For comparison, <Link href="/foreclosures/miami-dade-county-fl" className="text-emerald-400 hover:underline">Miami-Dade County</Link> auctions — which also run through the realforeclose.com platform — use the same structure.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Winning Bid: Costs Beyond the Bid Amount</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Winning at auction is just the beginning. Broward County buyers should budget for three additional cost layers beyond their winning bid.</p>

          <h3 className="text-xl font-semibold text-white mb-3">1. Court Registry Fees</h3>
          <p className="text-slate-300 leading-relaxed mb-2">Collected by the Broward County Clerk of Courts upon payment of the full balance:</p>
          <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
            <li>3% of the first $500</li>
            <li>1.5% of each $100 thereafter</li>
          </ul>
          <p className="text-slate-300 leading-relaxed mb-4">
            On a $250,000 winning bid, that works out to roughly <strong>$3,727.50 in registry fees</strong>. On a $500,000 bid, approximately <strong>$7,477.50</strong>. Include this in your max-bid calculations before the auction opens.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">2. Documentary Stamp Tax</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Florida charges <strong>$0.70 per $100 of the bid amount</strong> under Fla. Stat. § 201.01. On a $300,000 winning bid: <strong>$2,100 in doc stamps.</strong>
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-4">
            <strong>Critical detail:</strong> Doc stamp tax is paid to the <strong>Broward County Board of County Commissioners</strong> — NOT to the Clerk of Courts. Payment is due within <strong>15 calendar days</strong> of Certificate of Title issuance. Contact rttcet@broward.org to arrange wire transfer in advance.
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">3. Full Balance Payment Deadline</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The remaining balance (winning bid + court registry fees) is due by <strong>12:00 PM EST the next business day</strong> following the sale, or by the deadline specified in the court judgment — whichever comes first.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm">
            <strong>Missed payment penalty:</strong> Your deposit is forfeited, and the Clerk assesses an additional non-refundable registry fee. There is no grace period and no appeals process for late payment. This is governed by Fla. Stat. § 45.035(3).
          </div>

          <p className="text-slate-300 leading-relaxed mt-4">
            For buyers evaluating other high-CPC judicial foreclosure markets, our <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL foreclosure guide</Link> and <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">Los Angeles County, CA guide</Link> break down how deposit and payment rules compare across different judicial systems.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Certificate of Title: The 10-Day Wait</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            After the auction closes and you&apos;re the winning bidder, the property is not legally yours yet. Florida law requires a <strong>10-calendar-day objection period</strong> before the Certificate of Title (CET) can be issued. During this window, interested parties — including the former homeowner or junior lienholders — can file objections with the court.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Once the 10 days pass without a sustained objection, the Certificate of Title is issued. Track issuance status at{' '}
            <a href="https://officialrecords.broward.org/CETTrackWeb/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">officialrecords.broward.org/CETTrackWeb/</a>. From that issuance date, you have 15 calendar days to submit your documentary stamp tax payment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Homeowner Rights: Redemption and Surplus Funds</h2>

          <h3 className="text-xl font-semibold text-white mb-3">Right of Redemption</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Under <strong>Fla. Stat. § 45.0315</strong>, a homeowner can redeem the property — pay off the full judgment amount — up until the <strong>Certificate of Sale is issued</strong> at the close of the auction. Once the Certificate of Sale is issued, the right of redemption is permanently extinguished. A homeowner cannot reclaim the property after the sale concludes, even during the 10-day objection period.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Surplus Funds</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            If your winning bid exceeds the Final Judgment amount, the surplus belongs — first — to junior lienholders and then to the former homeowner, under <strong>Fla. Stat. § 45.035</strong>. The former homeowner has a <strong>10-day window from Certificate of Sale issuance</strong> to file a claim. No attorney is required to file, but a $50 court reopening fee applies.
          </p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <p>Homeowners facing foreclosure in Broward County can contact <strong>Legal Aid Service of Broward County</strong> at (954) 765-8950 for free legal assistance.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Neighboring County Markets</h2>
          <p className="text-slate-300 leading-relaxed">
            For a non-judicial contrast, see our{' '}
            <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County, TX foreclosure guide</Link>, where auctions move on a fixed monthly schedule with different deposit mechanics. For other major Florida and national markets, see{' '}
            <Link href="/foreclosures/miami-dade-county-fl" className="text-emerald-400 hover:underline">Miami-Dade County, FL</Link>,{' '}
            <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL</Link>, and{' '}
            <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">Los Angeles County, CA</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Do I have to be physically present to bid on Broward County foreclosures?</h3>
              <p className="text-slate-300 leading-relaxed">No. All Broward County judicial foreclosure auctions are conducted exclusively online at broward.realforeclose.com. You can bid from anywhere with an internet connection, as long as you&apos;ve registered in advance and submitted your deposit by the 3 PM deadline the previous business day.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What happens if I win a property and can&apos;t pay by noon the next business day?</h3>
              <p className="text-slate-300 leading-relaxed">Your deposit is forfeited in full. The Clerk will also assess a non-refundable registry fee. The property will be re-scheduled for sale. There is no hardship exception or payment plan option under <strong>Fla. Stat. § 45.035(3)</strong>.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">How do I calculate the documentary stamp tax on my winning bid?</h3>
              <p className="text-slate-300 leading-relaxed">Multiply your winning bid by 0.007. For example, a $200,000 bid × 0.007 = $1,400 in doc stamps. This amount is due to the Broward County Board of County Commissioners (not the Clerk) within 15 days of Certificate of Title issuance. Email rttcet@broward.org to arrange wire payment in advance.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Can a homeowner take back the property after I win at auction?</h3>
              <p className="text-slate-300 leading-relaxed">No — not after the auction closes. Florida&apos;s right of redemption under <strong>Fla. Stat. § 45.0315</strong> expires when the Certificate of Sale is issued at the conclusion of the auction. The 10-day objection period that follows does not revive redemption rights.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Why does foreclosure.com show 19,000+ properties when Zillow only shows 60?</h3>
              <p className="text-slate-300 leading-relaxed">The 19,000+ figure includes properties at every stage of Florida&apos;s judicial foreclosure pipeline — lis pendens filings, court judgments, and properties scheduled for sale. Only a small fraction of those will ever reach the MLS as bank-owned listings. Most are still in active litigation or pre-auction status.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What is the $70 rescheduling fee, and does it affect me as a bidder?</h3>
              <p className="text-slate-300 leading-relaxed">The $70 fee is paid by the plaintiff (lender), not the bidder, each time a sale is scheduled or rescheduled via the e-Portal under Senate Bill 2506 / Fla. Stat. § 45.035(3). It explains why auctions are frequently postponed — plaintiffs weigh whether to delay based on this fee and ongoing negotiation with the borrower.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <p className="text-slate-300 leading-relaxed mb-4">
            Forclos tracks Broward County lis pendens filings, Final Judgment auctions on realforeclose.com, and REO listings in one interface. Cross-shop other major markets:{' '}
            <Link href="/foreclosures/miami-dade-county-fl" className="text-emerald-400 hover:underline">Miami-Dade County, FL</Link>,{' '}
            <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL</Link>,{' '}
            <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County, TX</Link>, and{' '}
            <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">Los Angeles County, CA</Link>.
          </p>
          <Link
            href="/foreclosures/broward-county-fl"
            className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Browse Broward County foreclosure listings →
          </Link>
        </section>

        {/* Sources */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://www.flsenate.gov/Laws/Statutes/2023/45.035" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Florida Statute § 45.035 — Judicial Sale Procedure &amp; Registry Fees</a></li>
            <li>2. <a href="https://www.flsenate.gov/Laws/Statutes/2023/45.0315" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Florida Statute § 45.0315 — Right of Redemption</a></li>
            <li>3. <a href="https://www.flsenate.gov/Laws/Statutes/2023/201.01" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Florida Statute § 201.01 — Documentary Stamp Tax</a></li>
            <li>4. <a href="https://broward.realforeclose.com" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Broward County Foreclosure Auction Platform — realforeclose.com</a></li>
            <li>5. <a href="https://officialrecords.broward.org/CETTrackWeb/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Broward County Official Records — Certificate of Title Tracker</a></li>
            <li>6. <a href="https://www.broward.org/clerk" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Broward County Clerk of Courts — 201 SE 6th Street, Fort Lauderdale FL 33301</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
