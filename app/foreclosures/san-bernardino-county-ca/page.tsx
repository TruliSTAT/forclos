import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: "San Bernardino County Foreclosure Auction Guide: How to Buy in America's Largest County",
  description: "San Bernardino County foreclosure auction: how California trustee sales work, where SB County auctions are held, inventory breakdown, and buyer protections.",
  alternates: { canonical: 'https://forclos.com/foreclosures/san-bernardino-county-ca' },
  openGraph: {
    title: "San Bernardino County Foreclosure Auction Guide: How to Buy in America's Largest County",
    description: "San Bernardino County foreclosure auction: how California trustee sales work, where SB County auctions are held, inventory breakdown, and buyer protections.",
    url: 'https://forclos.com/foreclosures/san-bernardino-county-ca',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "San Bernardino County Foreclosure Auction Guide: How to Buy in America's Largest County",
    description: "San Bernardino County foreclosure auction: how California trustee sales work, where SB County auctions are held, inventory breakdown, and buyer protections.",
  },
}

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "San Bernardino County Foreclosure Auction Guide: How to Buy in America's Largest County",
      "description": "How to find, research, and bid at San Bernardino County trustee sales — covering the non-judicial foreclosure process, auction locations, sub-region market dynamics, and California buyer protections.",
      "author": { "@type": "Organization", "name": "Forclos" },
      "publisher": { "@type": "Organization", "name": "Forclos" },
      "datePublished": "2026-05-08",
      "url": "https://forclos.com/foreclosures/san-bernardino-county-ca"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a trustee sale in San Bernardino County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A trustee sale is a public auction where a lender's designated trustee sells a foreclosed property to recover the unpaid mortgage balance. In California, the process is non-judicial and governed by Civil Code sections 2924 through 2924m. No court approval is required, and there is no post-sale redemption period for the prior owner."
          }
        },
        {
          "@type": "Question",
          "name": "Where are San Bernardino County foreclosure auctions held?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In-person trustee sales typically take place at 303 W. 3rd Street, San Bernardino — the Hall of Records. A growing share of trustees now conduct sales online through platforms including Auction.com, NDEX West, and Hubzu. The specific location is stated in the Notice of Trustee Sale filed with the county recorder."
          }
        },
        {
          "@type": "Question",
          "name": "How do I find upcoming San Bernardino County trustee sales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Search the San Bernardino County Recorder at recorder.sbcounty.gov for recently filed Notices of Trustee Sale. City News Group publishes court-mandated legal notices for San Bernardino County. PropertyShark provides a calendar-based view of confirmed upcoming auction dates."
          }
        },
        {
          "@type": "Question",
          "name": "What is SB 1079 and does it apply to San Bernardino County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. SB 1079 is a California statewide law effective January 2021. It grants tenants and qualified non-profit organizations a 45-day window after a trustee sale to match the final winning bid price. The right applies to all California counties, including San Bernardino. Bidders on occupied properties should account for this in their underwriting."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a trustee sale and a tax sale in San Bernardino County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A trustee sale is conducted by a lender's trustee when a mortgage obligation goes delinquent. A tax defaulted property sale is conducted by San Bernardino County when property taxes remain unpaid for five or more years. Tax defaulted sales may carry a one-year redemption right for the prior owner. Trustee sales carry none. The county's tax defaulted property program is at sbcounty.mytaxsale.com."
          }
        }
      ]
    }
  ]
}

export default function SanBernardinoCountyCAPage() {
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
          <Link href="/foreclosures/california" className="hover:text-slate-300 transition-colors">California foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">San Bernardino County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          San Bernardino County Foreclosure Auction Guide: How to Buy in America&apos;s Largest County
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 8, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-6">
          San Bernardino County is the largest county by area in the contiguous United States — 20,105 square miles, bigger than nine individual states. Every <strong className="text-white">san bernardino county foreclosure auction</strong> takes place under California&apos;s non-judicial trustee sale framework, but the county&apos;s sheer scale creates wildly different markets within its borders: fierce investor competition in the Inland Empire core, thin bidding in the high desert, and near-silence near the Nevada border. Before you place a bid, you need to understand which market you&apos;re actually in.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Why San Bernardino County&apos;s Foreclosure Market Is Unlike Anywhere Else in California</h2>
          <p className="text-slate-300 leading-relaxed mb-4">California has 58 counties. San Bernardino is the largest. Its approximately 2.2 million residents live across radically different economic environments — from Rancho Cucamonga, where home values approach Los Angeles metro levels, to Needles on the Arizona border, where properties sell for tens of thousands of dollars.</p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-2 pr-4 text-white">Source</th>
                  <th className="text-left py-2 pr-4 text-white">Count</th>
                  <th className="text-left py-2 text-white">What It Represents</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr><td className="py-2 pr-4">Foreclosurelistings.com</td><td className="py-2 pr-4">10,795</td><td className="py-2">All preforeclosure stages — broadest, least immediately actionable</td></tr>
                <tr><td className="py-2 pr-4">Foreclosure.com</td><td className="py-2 pr-4">3,490</td><td className="py-2">Preforeclosures + bank-owned REO + HUD/VA/Fannie Mae inventory</td></tr>
                <tr><td className="py-2 pr-4">Auction.com</td><td className="py-2 pr-4">155</td><td className="py-2">Active bank-owned and confirmed auction properties</td></tr>
                <tr><td className="py-2 pr-4">PropertyShark</td><td className="py-2 pr-4">18</td><td className="py-2">Confirmed upcoming trustee sale auction dates</td></tr>
                <tr><td className="py-2 pr-4">Zillow (MLS)</td><td className="py-2 pr-4">91</td><td className="py-2">Bank-owned properties listed at retail on the open market</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">The 18 near-term auction properties and the 186 in the trustee sale pipeline are the numbers that matter most to auction buyers. Everything else represents earlier foreclosure stages or post-auction retail inventory.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Sub-Region Snapshot: Not One Market, Four</h2>

          <h3 className="text-lg font-semibold text-white mb-2 mt-6">Inland Empire Core — High Competition, Urban Dynamics</h3>
          <p className="text-slate-300 leading-relaxed mb-4">The western corridor anchored by <strong className="text-white">Fontana, Ontario, Rancho Cucamonga, Rialto, San Bernardino, Colton, and Redlands</strong> is where foreclosure activity concentrates and investor competition runs highest. Opening bids in this zone routinely attract multiple bidders. Buyers should benchmark against the county immediately to the south — <Link href="/foreclosures/riverside-county-ca" className="text-emerald-400 hover:underline">Riverside County foreclosure listings</Link> follow the same California non-judicial process and cover the southern half of the Inland Empire.</p>

          <h3 className="text-lg font-semibold text-white mb-2 mt-6">High Desert — Lower Prices, Different Risk Profile</h3>
          <p className="text-slate-300 leading-relaxed mb-4">The I-15 corridor northward through Victorville, Hesperia, and Apple Valley, and east to Barstow, offers considerably lower opening bids. The tradeoff is distance: a due-diligence drive from Los Angeles to Barstow runs 90+ minutes each way. Remote parcels more frequently present easement disputes and utility access gaps.</p>

          <h3 className="text-lg font-semibold text-white mb-2 mt-6">Mountain Communities — Specialty and Seasonal</h3>
          <p className="text-slate-300 leading-relaxed mb-4">Big Bear Lake, Lake Arrowhead, and Wrightwood operate in a vacation and seasonal rental market. Foreclosure inventory is thin but can offer meaningful returns for short-term rental operators. Mountain properties carry HOA layers and winter carrying costs that urban investors consistently underestimate.</p>

          <h3 className="text-lg font-semibold text-white mb-2 mt-6">Far East — Needles, 29 Palms, and Joshua Tree Fringe</h3>
          <p className="text-slate-300 leading-relaxed mb-4">At the county&apos;s eastern extreme, properties appear at prices that seem implausibly low. Some carry title problems — delinquent taxes, recorded easements, ambiguous prior ownership chains — that make cheap parcels effectively unbuyable. Title insurance is non-negotiable in this zone. Properties on the western edge share a border with <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">Los Angeles County foreclosure listings</Link> but follow entirely different liquidity dynamics.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">California&apos;s Non-Judicial Foreclosure Process: Step by Step</h2>
          <p className="text-slate-300 leading-relaxed mb-4">California is a <strong className="text-white">non-judicial foreclosure state</strong>. The lender does not sue the borrower in court to take the property. Every property at a San Bernardino County foreclosure auction has passed through these exact stages:</p>

          <div className="space-y-3">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Stage 1: Notice of Default</p>
              <p>When a borrower falls behind, the trustee records a <strong>Notice of Default (NOD)</strong> at the San Bernardino County Recorder&apos;s office at <a href="https://recorder.sbcounty.gov" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">recorder.sbcounty.gov</a>. Filing the NOD starts the foreclosure clock.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Stage 2: 90-Day Reinstatement Window</p>
              <p>For 90 days after the NOD, the borrower can stop the foreclosure by paying all outstanding arrears. Properties in this phase appear in preforeclosure databases but are not yet available at auction.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Stage 3: Notice of Trustee Sale + 21-Day Minimum</p>
              <p>If the borrower does not reinstate, the trustee records a <strong>Notice of Trustee Sale (NTS)</strong>, posts it on the property, and publishes it in a county-approved newspaper. At least 21 days must pass before the auction.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Stage 4: Trustee Sale Auction</p>
              <p>The auction takes place as a public sale open to registered bidders. The winning bidder pays in cash or cashier&apos;s check. This is a competitive bidding event with binding immediate commitment.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Stage 5: No Post-Sale Redemption + Trustee&apos;s Deed</p>
              <p>California&apos;s non-judicial foreclosure process provides <strong>no post-sale redemption period</strong>. The buyer receives a Trustee&apos;s Deed Upon Sale, which conveys title and extinguishes junior liens. Compare this with <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County foreclosure listings</Link> in Illinois, where judicial process and statutory redemption rights can extend timelines by months.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Where San Bernardino County Auctions Actually Take Place</h2>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">In-person auctions</strong> are traditionally held at the <strong className="text-white">Hall of Records, 303 W. 3rd Street, San Bernardino, CA 92415</strong>. Most in-person sales occur on weekday mornings.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Online auctions</strong> are increasingly common — NDEX West, First American Title Insurance Company, Auction.com, and Hubzu all conduct California trustee sales through their platforms. Auction.com currently lists 155 active bank-owned and foreclosure auction properties in the county.</p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <p className="font-semibold text-white mb-2">How to confirm venue before auction day:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Pull the recorded NTS from recorder.sbcounty.gov using the property address or APN</li>
              <li>Identify the named trustee and their contact information</li>
              <li>Check the trustee&apos;s website or call to confirm platform (in-person vs. online)</li>
              <li>Verify the sale has not been postponed — postponements happen regularly</li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Tax Defaulted Property Sales vs. Trustee Sales: Two Separate Systems</h2>
          <p className="text-slate-300 leading-relaxed mb-4">San Bernardino County also holds <strong className="text-white">tax defaulted property sales</strong> administered through <a href="https://sbcounty.mytaxsale.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">sbcounty.mytaxsale.com</a>. These are entirely separate from mortgage foreclosure trustee sales:</p>
          <ul className="space-y-2 mb-4 pl-4 list-disc">
            <li className="text-slate-300"><strong className="text-white">Trustee sale:</strong> Lender enforces a deed of trust when mortgage payments go delinquent</li>
            <li className="text-slate-300"><strong className="text-white">Tax defaulted sale:</strong> County enforces a tax lien when property taxes remain unpaid for five or more years</li>
            <li className="text-slate-300">Tax sales may include a <strong className="text-white">1-year right of redemption</strong> for the prior owner — a significant difference from the zero-redemption trustee sale</li>
          </ul>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm">
            The county&apos;s next tax defaulted property sale date was not announced as of this writing — check sbcounty.mytaxsale.com for current scheduling. Do not confuse the two auction types.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Buyer Checklist Before You Bid</h2>
          <div className="space-y-3">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Title and lien research</p>
              <p>Pull the NTS from the county recorder and identify every lien recorded before the foreclosed deed of trust — those liens survive the sale. Order a preliminary title report. For high-desert and remote far-east properties, run especially thorough searches for easements and prior tax delinquency.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">California tenant protections</p>
              <p><strong>SB 1079</strong> gives tenants and qualified non-profits a 45-day window after the trustee sale to match your winning bid. <strong>AB 2424</strong> requires tenants receive a 3-day notice before the sale date. Factor occupancy status into your strategy.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Funds and logistics</p>
              <p>Trustee sales require cashier&apos;s checks — no financing, no contingencies. San Bernardino County spans 180 miles from the auction site to the farthest properties. Budget time for due diligence drives realistically.</p>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed mt-4">Investors comparing California&apos;s process with other major markets should review <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">Maricopa County foreclosure listings</Link> for Arizona&apos;s trustee sale framework, and <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County foreclosure auction</Link> for Texas&apos;s monthly courthouse-steps format.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What is a trustee sale in San Bernardino County?</h3>
              <p className="text-slate-300 leading-relaxed">A trustee sale is a public auction where a lender&apos;s designated trustee sells a foreclosed property to recover the unpaid mortgage balance. In California, the process is non-judicial and governed by Civil Code sections 2924 through 2924m. No court approval is required, and there is no post-sale redemption period for the prior owner.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Where are San Bernardino County foreclosure auctions held?</h3>
              <p className="text-slate-300 leading-relaxed">In-person trustee sales typically take place at <strong className="text-white">303 W. 3rd Street, San Bernardino</strong> — the Hall of Records. A growing share of trustees now conduct sales online through Auction.com, NDEX West, and Hubzu. The specific location for any individual property is stated in the Notice of Trustee Sale filed with the county recorder.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">How do I find upcoming San Bernardino County trustee sales?</h3>
              <p className="text-slate-300 leading-relaxed">Search the San Bernardino County Recorder at <a href="https://recorder.sbcounty.gov" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">recorder.sbcounty.gov</a> for recently filed Notices of Trustee Sale. City News Group publishes court-mandated legal notices. PropertyShark provides a calendar-based view of confirmed upcoming auction dates.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What is SB 1079 and does it apply to San Bernardino County?</h3>
              <p className="text-slate-300 leading-relaxed">Yes. SB 1079 is a California statewide law effective January 2021. It grants tenants and qualified non-profit organizations a 45-day window after a trustee sale to match the final winning bid price. The right applies to all California counties, including San Bernardino.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What is the difference between a trustee sale and a tax sale in San Bernardino County?</h3>
              <p className="text-slate-300 leading-relaxed">A trustee sale is conducted by a lender&apos;s trustee when a mortgage obligation goes delinquent. A tax defaulted property sale is conducted by the county when property taxes remain unpaid for five or more years. Tax defaulted sales may carry a one-year redemption right for the prior owner. Trustee sales carry none.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
