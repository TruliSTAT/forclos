import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Pasco County Foreclosure Listings: Complete Buyer\'s Guide',
  description: 'Find and bid on Pasco County foreclosure listings at pasco.realforeclose.com. Florida judicial process, deposit rules, cost table, and FAQ for New Port Richey and Wesley Chapel investors.',
  alternates: { canonical: 'https://forclos.com/foreclosures/pasco-county-fl' },
  openGraph: {
    title: 'Pasco County Foreclosure Listings: Complete Buyer\'s Guide',
    description: 'Pasco County foreclosure listings guide — RealForeclose platform, 6-step judicial process, cost breakdown, and post-sale rights.',
    url: 'https://forclos.com/foreclosures/pasco-county-fl',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pasco County Foreclosure Listings: Complete Buyer\'s Guide',
    description: 'Pasco County foreclosure listings guide — RealForeclose platform, 6-step judicial process, cost breakdown, and post-sale rights.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pasco County Foreclosure Listings: Complete Buyer\'s Guide',
    description: 'Find and bid on Pasco County foreclosure listings at pasco.realforeclose.com. Florida judicial process, deposit rules, cost table, and FAQ for New Port Richey and Wesley Chapel investors.',
    url: 'https://forclos.com/foreclosures/pasco-county-fl',
    datePublished: '2026-05-16',
    dateModified: '2026-05-16',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/pasco-county-fl' },
    about: {
      '@type': 'Place',
      name: 'Pasco County',
      address: { '@type': 'PostalAddress', addressRegion: 'FL', addressCountry: 'US' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where can I find a complete list of upcoming Pasco County foreclosure listings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All scheduled judicial sales are listed on the Pasco County RealForeclose auction calendar at pasco.realforeclose.com. Each listing includes the court case number, legal description, and sale date. You can browse without registering, but you must create an account and fund a deposit to bid.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I have to appear in person to bid at a Pasco County foreclosure auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. All Pasco County judicial foreclosure auctions are conducted entirely online through pasco.realforeclose.com. You can participate from anywhere, provided your deposit account is funded before the sale opens at 11:00 a.m. ET.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deposit do I need to bid on Pasco County foreclosure listings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You need a deposit of at least 5% of your estimated high bid for each property you plan to bid on. Deposits can be made by ACH (allow four business days to clear), cash, cashier\'s check, or wire transfer.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a redemption period after I win a foreclosure auction in Pasco County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Florida mortgage foreclosures do not carry a post-sale redemption right. Once the Certificate of Title is issued after the 10-day objection period, ownership transfers are final. However, a pending or undisclosed bankruptcy filing can retroactively void a sale.',
        },
      },
      {
        '@type': 'Question',
        name: 'What fees do I pay as the winning bidder at a Pasco County foreclosure auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As the winning bidder, you pay: the remaining balance above your 5% deposit (due by 4:00 p.m. the day of sale), court registry fees (3% of first $500 + 1.5% of remaining balance), and documentary stamps ($0.70 per $100 of the purchase price).',
        },
      },
    ],
  },
]

export default function PascoCountyFLPage() {
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
          <Link href="/foreclosures/florida" className="hover:text-slate-300 transition-colors">{/* forward-looking */}Florida foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Pasco County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Pasco County Foreclosure Listings: Complete Buyer&apos;s Guide
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 16, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-6">
          Pasco County foreclosure listings attract investors and homebuyers drawn to one of Florida&apos;s
          fastest-growing corridors — stretching from the waterfront streets of New Port Richey west to the
          booming master-planned communities of Wesley Chapel. With hundreds of judicial sales processed
          through the Pasco County Clerk &amp; Comptroller each year and an active online auction platform at{' '}
          <a href="https://www.pasco.realforeclose.com/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">pasco.realforeclose.com</a>,
          the county offers consistent deal flow for buyers who understand how Florida&apos;s judicial foreclosure
          process works.
        </p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-10">
          <strong>Important:</strong> Foreclosure law varies by jurisdiction and changes frequently. Consult a
          licensed real estate attorney before bidding at any foreclosure auction. This guide is for informational
          purposes only.
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Why Pasco County?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Pasco County sits in the Tampa Bay metro region, bordered by Hillsborough County to the south,
            Pinellas County to the southwest, and Hernando County to the north. The county seat, New Port Richey,
            hosts the West Pasco Judicial Center — the hub for most foreclosure case filings. Wesley Chapel,
            the county&apos;s fastest-growing city, has seen explosive residential development over the past decade.
          </p>
          <ul className="space-y-2 mb-4 pl-4">
            <li className="text-slate-300">Pasco County regularly carries <strong className="text-white">1,000+ active foreclosure listings</strong> across all stages of the judicial pipeline</li>
            <li className="text-slate-300">New Port Richey alone accounts for nearly 200 foreclosure listings at any given time</li>
            <li className="text-slate-300">Circuit Court handles foreclosure actions over $50,000 (the vast majority of residential cases)</li>
            <li className="text-slate-300">All judicial sales are conducted entirely online — no in-person attendance required</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The 6-Step Judicial Foreclosure Process in Pasco County</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Florida is a judicial foreclosure state, meaning every residential foreclosure in Pasco County must
            move through the courts under <strong className="text-white">Florida Statutes Chapter 45</strong> before a property can be sold at auction.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 1 — Lis Pendens Filed</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            When a lender files a foreclosure lawsuit, a Notice of Lis Pendens is recorded in the Pasco County
            official records. This public notice warns all subsequent buyers and lienholders that the title is in
            litigation. Once recorded, the property appears in public records searches — making it visible to
            investors tracking early-stage pasco county foreclosure listings.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 2 — Lawsuit Served and Answered</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The lender files the complaint in Circuit Court. The borrower and all parties named in the action are
            served with process. Defendants have 20 days to respond. If no response is filed, the court enters a
            default.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 3 — Summary Judgment or Trial</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            If the case is uncontested, the lender moves for a summary final judgment of foreclosure. The court
            reviews the evidence and, if satisfied, signs a Final Judgment of Foreclosure that includes the amount
            owed and a date, time, and place for the judicial sale.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 4 — Judicial Sale Scheduled on RealForeclose</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Once the Final Judgment is entered, the Clerk &amp; Comptroller schedules the property for online auction
            at <strong className="text-white">pasco.realforeclose.com</strong>. Pasco County judicial sales run{' '}
            <strong className="text-white">Monday through Friday, beginning at 11:00 a.m. ET</strong>, excluding legal holidays.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 5 — Online Auction</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Registered bidders compete online. The lender typically opens bidding at the judgment amount.
            Third-party bidders may bid above that amount. Full payment — minus the 5% deposit already on
            account — must be received by the Clerk &amp; Comptroller no later than{' '}
            <strong className="text-white">4:00 p.m. ET on the day of the sale</strong>.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Step 6 — Certificate of Sale and Certificate of Title</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            After the Clerk confirms full payment, a <strong className="text-white">Certificate of Sale</strong> is issued. Any party may file an
            objection within 10 days. If no objections are sustained, the Clerk issues the{' '}
            <strong className="text-white">Certificate of Title</strong> — transferring ownership and recording it in the official records.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How to Bid on Pasco County Foreclosure Listings via RealForeclose</h2>
          <ol className="space-y-3 pl-4 mb-6">
            {[
              { n: 1, title: 'Create an account', desc: 'at pasco.realforeclose.com. Establish your username and password before delivering any deposit funds.' },
              { n: 2, title: 'Fund your deposit account', desc: 'Before placing any bids, you need a minimum deposit equal to at least 5% of your estimated high bid for each property.' },
              { n: 3, title: 'Choose your deposit method', desc: 'Accepted methods include ACH (electronic check — allow four full business days to settle), cash, cashier\'s check, or wire transfer.' },
              { n: 4, title: 'Browse the auction calendar', desc: 'Each listed property shows the court case number, legal description, and scheduled auction date.' },
              { n: 5, title: 'Bid on auction day', desc: 'Auctions open at 11:00 a.m. ET. Log in and place your bids through the platform.' },
              { n: 6, title: 'Complete payment by 4:00 p.m.', desc: 'If you win, your 5% deposit is applied to the total. Pay the remaining balance via wire transfer, cash, or cashier\'s check. ACH payments and personal checks are not accepted for winning bid payments.' },
            ].map(item => (
              <li key={item.n} className="text-slate-300">
                <strong className="text-white">{item.n}. {item.title}</strong> — {item.desc}
              </li>
            ))}
          </ol>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <strong className="text-white">Note:</strong> Pasco County RealForeclose funds cannot be used for Tax
            Deed Sales, which are managed on a separate platform (pasco.realtaxdeed.com).
          </div>
        </section>

        {/* Section 4 - Cost Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Pasco County Foreclosure Costs and Deposit Table</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Cost Item</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Amount / Rate</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {[
                  ['Clerk service fee', '$70', 'Paid by plaintiff before sale'],
                  ['Electronic sale fee', '$70', 'Paid by plaintiff'],
                  ['Bidder deposit (required)', '5% of estimated high bid', 'Applied to purchase if you win; forfeited if you default'],
                  ['Court registry fee', '3% of first $500 + 1.5% of balance', 'Per FL Statute §28.24(10); paid by winning bidder'],
                  ['Documentary stamps', '$0.70 per $100 of purchase price', 'State transfer tax on Certificate of Title'],
                  ['Payment deadline', '4:00 p.m. ET day of sale', 'Miss it = deposit forfeited'],
                  ['Certificate of Title delay', '10 full days minimum', 'Issued only after objection period clears'],
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

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <strong className="text-white">Example:</strong> A winning bid of $200,000 would require approximately:
            5% deposit ($10,000 pre-funded), court registry fee (~$3,075), and documentary stamps ($1,400) —
            total acquisition cost approximately <strong className="text-white">$204,475</strong> before property-level costs.
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Post-Sale Rights: What Happens After You Win</h2>

          <h3 className="text-lg font-semibold text-white mb-2">Bankruptcy Risk</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            If a named defendant filed for federal bankruptcy protection before the sale — even if the plaintiff and
            Clerk were unaware — the foreclosure sale can be set aside as void under automatic stay rules.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Redemption</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Florida does not have a statutory post-sale redemption period for mortgage foreclosures. Once the
            10-day objection window closes and the Certificate of Title is issued, ownership transfers are final.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Surplus Funds</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            If the auction price exceeds the judgment amount, the prior owner of record may file an Owner&apos;s Claim
            for Surplus Funds before the Clerk reports those funds as unclaimed. A $50 statutory reopen fee applies
            if the case has been closed more than 90 days.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">5 Frequently Asked Questions About Pasco County Foreclosure Listings</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Where can I find a complete list of upcoming Pasco County foreclosure listings?',
                a: 'All scheduled judicial sales are listed on the Pasco County RealForeclose auction calendar at pasco.realforeclose.com. Each listing includes the court case number, legal description, and sale date.',
              },
              {
                q: 'Do I have to appear in person to bid at a Pasco County foreclosure auction?',
                a: 'No. All Pasco County judicial foreclosure auctions are conducted entirely online through pasco.realforeclose.com. You can participate from anywhere, provided your deposit account is funded before the sale opens at 11:00 a.m. ET.',
              },
              {
                q: 'What deposit do I need to bid on Pasco County foreclosure listings?',
                a: 'You need a deposit of at least 5% of your estimated high bid for each property you plan to bid on. Deposits can be made by ACH (allow four business days to clear), cash, cashier\'s check, or wire transfer. Deposits must be in the Clerk\'s account before the sale begins.',
              },
              {
                q: 'Is there a redemption period after I win a foreclosure auction in Pasco County?',
                a: 'No. Florida mortgage foreclosures do not carry a post-sale redemption right. Once the Certificate of Title is issued after the 10-day objection period, ownership transfers are final. However, a pending or undisclosed bankruptcy filing can retroactively void a sale, which is why title insurance is strongly recommended.',
              },
              {
                q: 'What fees do I pay as the winning bidder?',
                a: 'As the winning bidder, you pay: the remaining balance above your 5% deposit (due by 4:00 p.m. the day of sale), court registry fees (3% of first $500 + 1.5% of remaining balance), and documentary stamps ($0.70 per $100 of the purchase price).',
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Contact and Resources</h2>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm mb-4">
            <p className="font-semibold text-white mb-2">Pasco County Clerk &amp; Comptroller — West Pasco Judicial Center</p>
            <p>7530 Little Road, Suite 105 · New Port Richey, FL 34654 · (727) 847-8031</p>
            <p className="mt-2 font-semibold text-white">Robert D. Sumner Judicial Center</p>
            <p>38053 Live Oak Avenue, Suite 207 · Dade City, FL 33523 · (352) 521-4542</p>
            <p className="mt-2 text-slate-400">Office Hours: Monday–Friday, 8:30 a.m.–5:00 p.m. ET</p>
          </div>
          <ul className="space-y-2 pl-4">
            <li className="text-slate-300">Pasco County Foreclosure Sales: <a href="https://www.pasco.realforeclose.com/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">pasco.realforeclose.com</a></li>
            <li className="text-slate-300">Pasco County Clerk Foreclosures Page: <a href="https://www.pascoclerk.com/158/Foreclosures" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">pascoclerk.com/158/Foreclosures</a></li>
          </ul>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Related Florida Foreclosure Guides</h2>
          <ul className="space-y-2 pl-4">
            <li className="text-slate-300"><Link href="/foreclosures/polk-county-fl" className="text-emerald-400 hover:underline">Polk County FL Foreclosure Listings</Link> — Highest foreclosure rate in the nation</li>
            <li className="text-slate-300"><Link href="/foreclosures/volusia-county-fl" className="text-emerald-400 hover:underline">Volusia County FL Foreclosure Auction</Link> — Daytona Beach corridor</li>
            <li className="text-slate-300"><Link href="/foreclosures/osceola-county-fl" className="text-emerald-400 hover:underline">Osceola County FL Foreclosure Auction</Link> — Central Florida / Kissimmee</li>
            <li className="text-slate-300"><Link href="/foreclosures/hillsborough-county-fl" className="text-emerald-400 hover:underline">Hillsborough County Foreclosure Listings</Link> — Tampa metro</li>
            <li className="text-slate-300"><Link href="/foreclosures/broward-county-fl" className="text-emerald-400 hover:underline">Broward County Foreclosure Listings</Link> — Fort Lauderdale area</li>
          </ul>
        </section>

        {/* Sources */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://www.pasco.realforeclose.com/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">pasco.realforeclose.com</a></li>
            <li>2. <a href="https://www.pascoclerk.com/158/Foreclosures" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Pasco County Clerk — Foreclosures</a></li>
            <li>3. <a href="https://www.pascoclerk.com/162/Sale-and-Bidding-Information" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Pasco County Clerk — Sale and Bidding Information</a></li>
            <li>4. <a href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0045/0045.html" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Florida Statutes Chapter 45</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
