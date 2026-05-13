import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Mecklenburg County Foreclosure Auctions: Complete Buyer\'s Guide [2026]',
  description: 'mecklenburg county foreclosure auction guide: NC power-of-sale G.S. Chapter 45, tax foreclosure NCGS §105-374/375, upset bid mechanics, Charlotte courthouse steps.',
  alternates: { canonical: 'https://forclos.com/foreclosures/mecklenburg-county-nc' },
  openGraph: {
    title: 'Mecklenburg County Foreclosure Auctions: Complete Buyer\'s Guide [2026]',
    description: 'NC dual-track foreclosure guide: power-of-sale G.S. §45-21, tax foreclosure NCGS §105-374/375, 10-day upset bid period, Charlotte courthouse 832 E 4th St.',
    url: 'https://forclos.com/foreclosures/mecklenburg-county-nc',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mecklenburg County Foreclosure Auctions: Complete Buyer\'s Guide [2026]',
    description: 'NC dual-track foreclosure, upset bid mechanics, Charlotte courthouse steps.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Buy at a Mecklenburg County Foreclosure Auction',
    description: 'Step-by-step guide to participating in Mecklenburg County, NC foreclosure auctions, covering the power-of-sale process under G.S. Chapter 45 and tax foreclosures under NCGS §105-374/375.',
    step: [
      { '@type': 'HowToStep', name: 'Find Active Listings', text: 'Browse active Mecklenburg County foreclosure listings on the county tax collector\'s website (tax.mecknc.gov), Kania Law Firm, Ruff Bond Cobb Wade Bethune, and the county\'s ArcGIS interactive map.' },
      { '@type': 'HowToStep', name: 'Research the Property', text: 'Properties are sold AS-IS. Run a title search, check for outstanding liens, and visit the property before bidding. Do not rely solely on county or attorney listing information.' },
      { '@type': 'HowToStep', name: 'Arrange Cash Financing', text: 'Foreclosure auctions in Mecklenburg County require cash or certified funds. Arrange funding before the auction date.' },
      { '@type': 'HowToStep', name: 'Attend and Bid at Auction', text: 'Auctions are held publicly at the Mecklenburg County Courthouse, 832 East 4th Street, Charlotte, NC 28202. Bid openly; the highest bid becomes the reported sale price.' },
      { '@type': 'HowToStep', name: 'Monitor the 10-Day Upset Bid Period', text: 'Under G.S. §45-21.27, any person may submit an upset bid (minimum 5% above the last reported sale price) within 10 days of the sale.' },
      { '@type': 'HowToStep', name: 'Receive Deed', text: 'Once the 10-day upset bid period expires with no new bids, the trustee delivers a deed transferring ownership to the winning bidder.' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need a real estate agent to buy at a Mecklenburg County foreclosure auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Foreclosure auctions are open to the public. However, working with a real estate attorney who specializes in foreclosures is strongly recommended, particularly for your first purchase.' },
      },
      {
        '@type': 'Question',
        name: 'Can I finance a Mecklenburg County foreclosure auction purchase with a mortgage?',
        acceptedAnswer: { '@type': 'Answer', text: 'Generally no — not at the auction itself. Foreclosure auctions require cash or certified funds at the time of sale. Some buyers purchase with cash and refinance afterward, or use hard-money loans arranged in advance.' },
      },
      {
        '@type': 'Question',
        name: 'Is there a redemption period after a Mecklenburg County foreclosure auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. North Carolina does not provide a statutory post-sale redemption period for power-of-sale (deed of trust) foreclosures. Once the upset bid period expires and the deed is recorded, the sale is final.' },
      },
      {
        '@type': 'Question',
        name: 'What if there are existing liens on a property I buy at auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'Tax foreclosure sales under NCGS §105-374/375 typically extinguish most other liens. Power-of-sale foreclosures extinguish liens junior to the foreclosing deed of trust but may leave senior liens intact. Always conduct a thorough title search before bidding.' },
      },
      {
        '@type': 'Question',
        name: 'How do I find out when the next Mecklenburg County foreclosure auction is scheduled?',
        acceptedAnswer: { '@type': 'Answer', text: 'Best sources: Kania Law Firm (kanialawfirm.com), Ruff Bond Cobb Wade Bethune (rbcwb.com), the County Attorney\'s in rem listing page at tax.mecknc.gov/service/rem-foreclosures, the NC Courts Portal, and charlotte.realforeclose.com.' },
      },
    ],
  },
]

export default function MecklenburgCountyNCPage() {
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
          <Link href="/foreclosures/north-carolina" className="hover:text-slate-300 transition-colors">North Carolina foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Mecklenburg County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Mecklenburg County Foreclosure Auctions: Complete Buyer&apos;s Guide [2026]
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 2026 · Forclos Editorial</p>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-400 text-sm mb-8">
          <strong className="text-slate-300">Disclaimer:</strong> This page is for general informational purposes only and does not constitute legal or financial advice.
          Foreclosure investing involves significant legal and financial risk. Consult a licensed North Carolina real estate attorney before bidding on any property.
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Two Types of Foreclosure Auctions in Mecklenburg County</h2>

          <h3 className="text-xl font-semibold text-white mb-3">1. Power-of-Sale Foreclosure (Deed of Trust Default)</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            North Carolina is primarily a <strong className="text-white">non-judicial foreclosure state</strong>. The process is governed by <strong className="text-white">G.S. Chapter 45, Article 2A</strong>:
          </p>
          <ol className="space-y-2 mb-6 pl-4">
            <li className="text-slate-300"><strong className="text-white">1.</strong> Trustee files a notice with the Clerk of Superior Court for Mecklenburg County (G.S. §45-21.16)</li>
            <li className="text-slate-300"><strong className="text-white">2.</strong> Clerk&apos;s Hearing to verify foreclosure grounds; borrower may appear and contest</li>
            <li className="text-slate-300"><strong className="text-white">3.</strong> Public Auction at the Mecklenburg County Courthouse, <strong className="text-white">832 East 4th Street, Charlotte, NC 28202</strong></li>
            <li className="text-slate-300"><strong className="text-white">4.</strong> 10-day upset bid window opens after sale is reported to the clerk (see below)</li>
            <li className="text-slate-300"><strong className="text-white">5.</strong> Once upset bid period expires, deed is delivered to winning bidder</li>
          </ol>
          <p className="text-slate-300 leading-relaxed mb-6">
            <strong className="text-white">North Carolina does not have a post-sale redemption period</strong> for power-of-sale foreclosures. Once the deed is delivered, the transaction is complete.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">2. Tax Foreclosure (Delinquent Property Taxes)</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Mecklenburg County pursues tax foreclosure under either:
          </p>
          <ul className="space-y-2 mb-4 pl-4">
            <li className="text-slate-300"><strong className="text-white">NCGS §105-374</strong> — handled by{' '}
              <a href="https://kanialawfirm.com/tax-foreclosures/foreclosure-listings/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Kania Law Firm</a>{' '}
              and{' '}
              <a href="https://www.rbcwb.com/tax-foreclosure-listings/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Ruff, Bond, Cobb, Wade &amp; Bethune</a>
            </li>
            <li className="text-slate-300"><strong className="text-white">NCGS §105-375</strong> (in rem) — handled in-house by the County Attorney at the{' '}
              <a href="https://tax.mecknc.gov/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Office of the Tax Collector</a>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The Upset Bid Period (G.S. §45-21.27)</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            This is the feature of NC foreclosure auctions that surprises most first-time buyers. After the auction, the sale enters a <strong className="text-white">10-day upset bid period</strong>:
          </p>
          <ul className="space-y-2 mb-4 pl-4">
            <li className="text-slate-300">Any person may submit an upset bid exceeding the last reported sale price by a minimum of <strong className="text-white">5%</strong> (or at least $750, whichever is greater)</li>
            <li className="text-slate-300">If an upset bid is received, the 10-day clock <strong className="text-white">resets</strong></li>
            <li className="text-slate-300">This continues until a full 10 days pass with no new upset bid</li>
            <li className="text-slate-300">Only then is the sale final and the deed delivered</li>
          </ul>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm">
            <strong>Practical implication:</strong> The property you &ldquo;win&rdquo; at auction may not be yours until 10–30+ days later if competitive upset bids keep coming in.
            Submit your upset bids promptly through the law firm or Clerk of Superior Court handling the case.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How to Find Active Mecklenburg County Foreclosure Listings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Source</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">What&apos;s Listed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {[
                  { s: 'Mecklenburg County Tax Collector', l: 'https://tax.mecknc.gov/services/tax-foreclosure-properties', w: 'Tax foreclosure properties (both styles)' },
                  { s: 'Kania Law Firm', l: 'https://kanialawfirm.com/tax-foreclosures/foreclosure-listings/', w: 'NCGS §105-374 tax foreclosure listings' },
                  { s: 'Ruff, Bond, Cobb, Wade & Bethune', l: 'https://www.rbcwb.com/tax-foreclosure-listings/', w: 'NCGS §105-374 tax foreclosure listings' },
                  { s: 'charlotte.realforeclose.com', l: 'https://charlotte.realforeclose.com', w: 'Online/hybrid auction calendar' },
                ].map(row => (
                  <tr key={row.s} className="bg-slate-900/50">
                    <td className="px-4 py-3 text-slate-300">
                      <a href={row.l} className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">{row.s}</a>
                    </td>
                    <td className="px-4 py-3 text-slate-400">{row.w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed mt-4">
            Mecklenburg County also provides an{' '}
            <a href="https://experience.arcgis.com/experience/640b8534655c4397b75f1d5a9cbad201" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">ArcGIS interactive map</a>{' '}
            showing upcoming foreclosure sale locations — one of the best free tools for visualizing active properties across Charlotte.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Mecklenburg County Foreclosure FAQs</h2>
          <div className="space-y-6">
            {[
              { q: 'Do I need a real estate agent to buy at a Mecklenburg County foreclosure auction?', a: 'No. Foreclosure auctions are open to the public. However, a real estate attorney specializing in NC foreclosures is strongly recommended, particularly for your first purchase.' },
              { q: 'Can I finance a Mecklenburg County foreclosure auction purchase with a mortgage?', a: 'Generally no — not at the auction itself. Foreclosure auctions require cash or certified funds. Some buyers use hard-money loans arranged in advance.' },
              { q: 'Is there a redemption period after a Mecklenburg County foreclosure auction?', a: 'No. North Carolina does not provide a statutory post-sale redemption period for power-of-sale foreclosures. Once the upset bid period expires and the deed is recorded, the sale is final.' },
              { q: 'What if there are existing liens on a property I buy at auction?', a: 'Tax foreclosure sales under NCGS §105-374/375 typically extinguish most other liens. Power-of-sale foreclosures extinguish liens junior to the foreclosing deed of trust but may leave senior liens intact. Always conduct a title search before bidding.' },
              { q: 'How do I find out when the next Mecklenburg County foreclosure auction is scheduled?', a: 'Best sources: Kania Law Firm (kanialawfirm.com), Ruff Bond Cobb Wade Bethune (rbcwb.com), the County Attorney\'s in rem listing page at tax.mecknc.gov/service/rem-foreclosures, and charlotte.realforeclose.com.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <p className="text-slate-300 leading-relaxed">
            Compare adjacent markets:{' '}
            <Link href="/foreclosures/wake-county-nc" className="text-emerald-400 hover:underline">Wake County NC foreclosures</Link>{' '}
            and{' '}
            <Link href="/foreclosures/guilford-county-nc" className="text-emerald-400 hover:underline">Guilford County NC foreclosures</Link>{' '}
            follow the same NC statutes but with different county-specific logistics.
          </p>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://tax.mecknc.gov/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Mecklenburg County Tax Collector — Official tax foreclosure listings</a></li>
            <li>2. <a href="https://www.nccourts.gov/help-topics/housing/foreclosures" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">NC Judicial Branch — Foreclosures overview</a></li>
            <li>3. <a href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_45/Article_2A.html" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">NC General Statutes Chapter 45 — Article 2A</a></li>
            <li>4. <a href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_105/GS_105-374.html" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">NCGS §105-374</a></li>
            <li>5. <a href="https://www.ncleg.net/enactedlegislation/statutes/html/bysection/chapter_105/gs_105-375.html" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">NCGS §105-375</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
