import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: "Hudson County NJ Foreclosure Auction: Complete Buyer's Guide (2026)",
  description:
    'Hudson County NJ foreclosure auction guide: bid at Jersey City sheriff sales, 20% deposit rules, 10-day redemption window, CivilView listings, and tax sale certificates explained.',
  alternates: { canonical: 'https://forclos.com/foreclosures/hudson-county-nj' },
  openGraph: {
    title: "Hudson County NJ Foreclosure Auction: Complete Buyer's Guide (2026)",
    description:
      'Jersey City, Bayonne, Hoboken sheriff sales: CivilView County ID 10, bi-weekly Thursdays 2 PM, 20% certified check deposit, 6.5% interest from day 11, N.J.S.A. 2A:50 process.',
    url: 'https://forclos.com/foreclosures/hudson-county-nj',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hudson County NJ Foreclosure Auction: Complete Buyer's Guide (2026)",
    description:
      'Hudson County NJ foreclosure auction: official CivilView portal, bi-weekly Thursday sales at 595 Newark Ave Jersey City, 20% deposit, 10-day redemption, tax sale certificates.',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: "Hudson County NJ Foreclosure Auction: Complete Buyer's Guide (2026)",
      description:
        'How to find listings, bid, and take title at the Hudson County NJ foreclosure auction. Covers NJ judicial foreclosure law, deposit rules, redemption rights, and tax sale certificates.',
      url: 'https://forclos.com/foreclosures/hudson-county-nj',
      datePublished: '2026-05-14',
      dateModified: '2026-05-14',
      publisher: { '@type': 'Organization', name: 'Forclos', url: 'https://forclos.com' },
      author: { '@type': 'Organization', name: 'Forclos Editorial Team' },
      about: {
        '@type': 'Place',
        name: 'Hudson County, New Jersey',
        containedInPlace: { '@type': 'State', name: 'New Jersey' },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where exactly is the Hudson County foreclosure auction held?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sales are held in Room 201B of the Hudson County Administration Building at 595 Newark Avenue, Jersey City, NJ 07306. Registration opens at 1:00 PM; bidding starts at 2:00 PM sharp.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much money do I need to bring to bid at a Hudson County sheriff sale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You must bring certified or cashier\'s bank checks totaling at least 20% of your intended maximum bid. Checks must be dated within 90 days. The remaining 80% is due between day 11 and day 30 after the sale, with 6.5% annual interest accruing on any unpaid balance starting day 11.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can the previous homeowner take back the property after the Hudson County auction?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. For 10 days after the sheriff\'s sale, the former owner or any junior lienholder may redeem the property by paying the full bid amount. After that 10-day window closes and the deed is delivered, the sale is final and redemption is no longer available.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a NJ Tax Sale Certificate and how is it different from a sheriff\'s sale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Tax Sale Certificate (TSC) is a lien on property for unpaid municipal taxes, sold at auction under N.J.S.A. 54:5-1. It does not transfer ownership immediately. The TSC holder must wait at least two years, then file a foreclosure action in Superior Court. A sheriff\'s sale results from a mortgage foreclosure judgment and sells the property directly at public auction.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I find a list of upcoming Hudson County NJ foreclosure auction properties?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The official portal is salesweb.civilview.com/Sales/SalesSearch?countyId=10, maintained by the Hudson County Sheriff\'s Office. Updated in real time. Legal notices are also published in county newspapers as required by N.J.S.A. 2A:17-1.',
          },
        },
      ],
    },
  ],
}

export default function HudsonCountyNJPage() {
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
          <span className="text-slate-400">Hudson County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Hudson County NJ Foreclosure Auction: Complete Buyer&apos;s Guide (2026)
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 2026 · Forclos Editorial</p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-8">
          <strong>Legal Disclaimer:</strong> New Jersey foreclosure law is complex and subject to change. This page is for educational purposes only and does not constitute legal or financial advice. Consult a licensed NJ real estate attorney before bidding at any sheriff sale.
        </div>

        <p className="text-slate-300 leading-relaxed mb-8">
          Hudson County is one of New Jersey&apos;s most active foreclosure markets, serving densely populated communities including Jersey City, Bayonne, Hoboken, Union City, and Weehawken. The <strong className="text-white">Hudson County NJ foreclosure auction</strong> calendar runs year-round, making this one of the state&apos;s busiest sheriff&apos;s sale venues. This guide covers the full NJ judicial process, sheriff sale logistics, bidding requirements, redemption rights, and tax sale certificates — all with verified official sources.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How NJ Foreclosure Works: A Judicial Process</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            New Jersey is a <strong className="text-white">judicial foreclosure state</strong>, meaning every residential mortgage foreclosure must proceed through the Superior Court system. Lenders cannot seize a property without a Final Judgment of Foreclosure. The governing statutes are <strong className="text-white">N.J.S.A. 2A:50</strong> (Mortgage Foreclosure) and New Jersey Court Rule 4:64.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">The NJ Foreclosure Timeline</h3>
          <div className="space-y-3 mb-4">
            {[
              { n: 1, title: 'Default and Notice of Intent', desc: 'Lender sends Notice of Intent to Foreclose at least 30 days before filing suit (N.J.S.A. 2A:50-56). Must state the cure amount and deadline.' },
              { n: 2, title: 'Foreclosure Complaint Filed', desc: 'Lender files complaint in Hudson County Superior Court, Chancery Division.' },
              { n: 3, title: 'Lis Pendens Recorded', desc: "Filed with the Hudson County Clerk's Office, putting the public on notice that the property is subject to pending foreclosure litigation." },
              { n: 4, title: 'Service and Answer Period', desc: 'Borrower is served and has 35 days to file an answer contesting the foreclosure.' },
              { n: 5, title: 'Final Judgment of Foreclosure', desc: 'Court enters Final Judgment including total debt, court costs, and attorney fees. Borrower loses right to cure but retains right to redeem.' },
              { n: 6, title: 'Writ of Execution', desc: 'Court issues Writ of Execution directing the Hudson County Sheriff to conduct a sale within 150 days.' },
              { n: 7, title: "Sheriff's Sale", desc: 'Property auctioned publicly. Sale advertised in county newspaper for four consecutive weeks (N.J.S.A. 2A:17-1).' },
              { n: 8, title: '10-Day Objection Period', desc: "Under N.J. Ct. R. 4:65-5, any party may file objections. Former owner may still redeem. After 10 days, the sheriff's deed is delivered." },
            ].map((item) => (
              <div key={item.n} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold text-sm mb-1">{item.n}. {item.title}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm">
            The entire process — from first missed payment to sheriff&apos;s sale — typically takes <strong className="text-white">12 to 36 months</strong> in New Jersey, depending on court backlog and contested proceedings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Hudson County Sheriff Sale: Logistics</h2>

          <h3 className="text-xl font-semibold text-white mb-3">Location</h3>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <p className="text-white font-semibold">Room 201B, Hudson County Administration Building</p>
            <p className="text-slate-300">595 Newark Avenue, Jersey City, NJ 07306</p>
            <p className="text-slate-400 text-sm mt-2">Note: Different from the Sheriff&apos;s main business office (Hudson Plaza, 257 Cornelison Avenue). Parking near 595 Newark Avenue is limited — arrive early.</p>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">Schedule</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Hudson County foreclosure auctions are held <strong className="text-white">twice per month, on Thursdays, at 2:00 PM</strong>. Registration opens at 1:00 PM and closes promptly at 2:00 PM. No bidders are permitted in the auction area before 1:00 PM. Sales not completed by 4:30 PM may be adjourned to the next scheduled date.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Active Listings</h3>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <p className="text-white font-semibold mb-1">🔗 Official Hudson County Sheriff Sale Listings</p>
            <a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=10" className="text-emerald-400 hover:underline text-sm" target="_blank" rel="noopener noreferrer">salesweb.civilview.com/Sales/SalesSearch?countyId=10</a>
            <p className="text-slate-400 text-sm mt-2">Each listing includes property address, case number, upset price, and scheduled sale date. Also available at <a href="https://www.hudsoncountysheriff.com/foreclosures-sales" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">hudsoncountysheriff.com</a> or by calling (201) 795-6300, ext. 7233.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Bidding at the Hudson County NJ Foreclosure Auction</h2>

          <h3 className="text-xl font-semibold text-white mb-3">Deposit Requirements</h3>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <ul className="space-y-1 text-sm">
              <li className="text-slate-300"><strong className="text-white">Amount:</strong> 20% of total bid price — required immediately when the gavel falls</li>
              <li className="text-slate-300"><strong className="text-white">Form:</strong> Certified or Cashier&apos;s Bank Check only. Cash, personal checks, credit cards, company checks, and trust checks are NOT accepted.</li>
              <li className="text-slate-300"><strong className="text-white">Check age:</strong> Cannot be older than 90 days from date of issue</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">Balance Payment Window</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The remaining 80% is due between the <strong className="text-white">11th and 30th calendar day</strong> after the sale. You cannot pay during the first 10 days — that window is reserved for the defendant&apos;s Right of Redemption. Starting day 11, <strong className="text-white">interest accrues at 6.5% per annum</strong> on any unpaid balance. To avoid interest, pay on day 11.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">What You&apos;re Buying</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Every <strong className="text-white">Hudson County NJ foreclosure auction</strong> sale is strictly as-is, buyer-beware. Properties are sold subject to all restrictions of record — easements, deed restrictions — plus unpaid taxes, water bills, sewer assessments, and municipal liens. The Sheriff&apos;s Office provides no title guarantee. Conduct a full title search before bidding.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Redemption Rights: The 10-Day Window</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Under <strong className="text-white">N.J.S.A. 2A:50-4</strong>, the foreclosed homeowner retains the right to redeem (reclaim) the property by paying the full judgment amount up until the sheriff&apos;s sale is completed. After the gavel falls, a <strong className="text-white">10-day post-sale redemption period</strong> applies:
          </p>
          <ul className="space-y-2 pl-4 mb-4">
            {[
              'The winning bidder cannot receive a deed or take possession during this window',
              'The former owner — or any junior lienholder — may redeem by paying the full bid price plus allowable costs',
              'Balance payments from the winning bidder are not accepted until day 11',
            ].map((item) => (
              <li key={item} className="text-slate-300">• {item}</li>
            ))}
          </ul>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm">
            <strong>Bankruptcy stays:</strong> A Chapter 7, 11, or 13 bankruptcy filing by the homeowner before the gavel falls triggers an automatic stay, halting the sale immediately. The lender must obtain relief from the bankruptcy court before the Hudson County NJ foreclosure auction can proceed.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Tax Sale Certificates in Hudson County</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            A second pathway to distressed property in Hudson County runs through the <strong className="text-white">New Jersey Tax Sale Law, N.J.S.A. 54:5-1 et seq.</strong> This is entirely separate from mortgage foreclosure and creates a distinct investment type.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">How Tax Sale Certificates Work</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            When a Hudson County property owner fails to pay municipal taxes, the municipality holds a public tax lien auction. Investors <strong className="text-white">bid on the interest rate</strong> they accept on the certificate — bidding starts at 18% and descends. The lowest rate wins. In competitive markets like Jersey City, rates often reach 0% or even negative (investor pays a premium above face value).
          </p>
          <div className="space-y-3 mb-4">
            {[
              { title: 'Certificate Acquired', desc: 'TSC holder acquires the right to collect delinquent taxes plus interest — not immediate ownership.' },
              { title: '2-Year Wait Required', desc: 'Under N.J.S.A. 54:5-86, the TSC holder must wait at least two years from the tax sale date before initiating foreclosure.' },
              { title: 'File in Superior Court', desc: 'TSC holder files a tax lien foreclosure action in county Superior Court, with proper notice to the owner and all lienholders.' },
              { title: 'Owner Can Redeem Anytime Until Judgment', desc: 'Property owner retains the right to redeem under N.J.S.A. 54:5-54 by paying the full certificate amount plus interest at any time before final judgment.' },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Hudson County NJ Foreclosure Auction: FAQs</h2>
          <div className="space-y-5">
            {[
              {
                q: 'Where exactly is the Hudson County foreclosure auction held?',
                a: 'Room 201B, Hudson County Administration Building, 595 Newark Avenue, Jersey City, NJ 07306. Registration opens 1:00 PM; bidding starts 2:00 PM sharp. This is NOT the Sheriff\'s main office.',
              },
              {
                q: 'How much money do I need to bring to bid at a Hudson County sheriff sale?',
                a: "20% of your intended maximum bid in certified or cashier's bank checks dated within 90 days. The remaining 80% is due days 11–30 post-sale. Interest accrues at 6.5% per annum on any balance starting day 11.",
              },
              {
                q: 'Can the previous homeowner take back the property after the auction?',
                a: 'Yes. During the 10-day post-sale redemption period, the former owner or any junior lienholder may redeem by paying the full bid amount. After 10 days, the sale is final and the sheriff\'s deed is delivered.',
              },
              {
                q: "What is a NJ Tax Sale Certificate and how is it different from a sheriff's sale?",
                a: "A Tax Sale Certificate (TSC) is a lien on property for unpaid taxes sold at auction under N.J.S.A. 54:5. It does not transfer ownership immediately. The holder must wait 2 years then foreclose in Superior Court. A sheriff's sale results from a mortgage foreclosure judgment and transfers title directly at auction.",
              },
              {
                q: 'Where can I find a list of upcoming Hudson County NJ foreclosure auction properties?',
                a: 'The official portal is salesweb.civilview.com/Sales/SalesSearch?countyId=10. Also available at hudsoncountysheriff.com or by calling (201) 795-6300, ext. 7233. Legal notices published in county newspapers per N.J.S.A. 2A:17-1.',
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
          <h2 className="text-xl font-semibold text-white mb-3">Explore Neighboring NJ Foreclosure Markets</h2>
          <ul className="space-y-2 pl-4">
            <li><Link href="/foreclosures/essex-county-nj" className="text-emerald-400 hover:underline">Essex County NJ Foreclosure Auction</Link> — Newark, Montclair, Irvington; 172 active listings</li>
            <li><Link href="/foreclosures/bergen-county-nj" className="text-emerald-400 hover:underline">Bergen County NJ Foreclosure Listings</Link> — Hackensack, Ridgewood, Fort Lee; 106 active listings</li>
            <li><Link href="/foreclosures/middlesex-county-nj" className="text-emerald-400 hover:underline">Middlesex County NJ Foreclosure Listings</Link> — Edison, New Brunswick, Woodbridge</li>
            <li><Link href="/foreclosures/kings-county-ny" className="text-emerald-400 hover:underline">Kings County (Brooklyn) Foreclosure Listings</Link> — NYC borough across the Hudson</li>
          </ul>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Official Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://www.hudsoncountysheriff.com/foreclosures-sales" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Hudson County Sheriff&apos;s Office — Foreclosure Sales</a></li>
            <li>2. <a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=10" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">CivilView — Hudson County Sheriff Sale Listings (County ID 10)</a></li>
            <li>3. <a href="https://www.njcourts.gov/self-help/foreclosure" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">NJ Courts — Foreclosure Self-Help</a></li>
            <li>4. N.J.S.A. 2A:50-1 et seq. — New Jersey Fair Foreclosure Act</li>
            <li>5. N.J.S.A. 2A:50-4 — Right of Redemption</li>
            <li>6. N.J.S.A. 54:5-1 et seq. — New Jersey Tax Sale Law</li>
            <li>7. N.J. Court Rule 4:65 — Sheriff Sales</li>
          </ol>
          <p className="text-xs text-slate-600 mt-4">
            YMYL advisory: Foreclosure auctions involve significant legal and financial risk. Consult a licensed NJ real estate attorney before bidding.
          </p>
        </section>
      </main>
    </div>
  )
}
