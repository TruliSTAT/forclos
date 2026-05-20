import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Wake County Foreclosure Listings: Your Complete Guide to Buying in Raleigh\'s Market',
  description: 'Browse wake county foreclosure listings and learn NC\'s unique power-of-sale process — from clerk hearings to the 10-day upset bid window. Raleigh & beyond.',
  alternates: { canonical: 'https://forclos.com/foreclosures/wake-county-nc' },
  openGraph: {
    title: 'Wake County Foreclosure Listings: Your Complete Guide to Buying in Raleigh\'s Market',
    description: 'Browse wake county foreclosure listings and learn NC\'s unique power-of-sale process — from clerk hearings to the 10-day upset bid window. Raleigh & beyond.',
    url: 'https://forclos.com/foreclosures/wake-county-nc',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wake County Foreclosure Listings: Your Complete Guide to Buying in Raleigh\'s Market',
    description: 'Browse wake county foreclosure listings and learn NC\'s unique power-of-sale process — from clerk hearings to the 10-day upset bid window. Raleigh & beyond.',
  },
}

const schemaOrg = [{"@context": "https://schema.org", "@type": "Article", "headline": "Wake County Foreclosure Listings: Your Complete Guide to Buying in Raleigh's Market", "description": "Browse wake county foreclosure listings and learn NC's unique power-of-sale process \u2014 from clerk hearings to the 10-day upset bid window. Raleigh & beyond.", "keywords": "wake county foreclosure listings, Wake County NC foreclosures, Raleigh foreclosure listings, NC foreclosure process, upset bid NC", "author": {"@type": "Organization", "name": "Forclos", "url": "https://forclos.com"}, "publisher": {"@type": "Organization", "name": "Forclos", "url": "https://forclos.com", "logo": {"@type": "ImageObject", "url": "https://forclos.com/logo.png"}}, "about": {"@type": "Place", "name": "Wake County", "address": {"@type": "PostalAddress", "addressLocality": "Raleigh", "addressRegion": "NC", "postalCode": "27601", "addressCountry": "US"}}, "mainEntityOfPage": {"@type": "WebPage", "@id": "https://forclos.com/foreclosures/wake-county-nc"}, "dateModified": "2026-05-15"}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How do I find foreclosure listings in Wake County, NC?", "acceptedAnswer": {"@type": "Answer", "text": "Start with the official Wake County Tax Administration foreclosure page at wake.gov for tax-lien properties. For deed-of-trust foreclosures, search Auction.com, Forclos, or check recorded Substitute Trustee notices at the Wake County Register of Deeds (services.wake.gov/realestate). The NC Courts Portal also lists active foreclosure cases."}}, {"@type": "Question", "name": "What is the upset bid period in North Carolina?", "acceptedAnswer": {"@type": "Answer", "text": "Under N.C.G.S. \u00a7 45-21.27, anyone can place a higher bid on a Wake County foreclosure property within 10 days of the trustee's sale. The bid must exceed the sale price by at least 5% (minimum $750 increase). If a new upset bid is filed, another 10-day window opens. This continues until no bid is entered in the final 10-day period, at which point the highest bidder receives the deed."}}, {"@type": "Question", "name": "Does Wake County use judicial or nonjudicial foreclosure?", "acceptedAnswer": {"@type": "Answer", "text": "North Carolina uses a power-of-sale process under deeds of trust (Article 2A, Chapter 45 of NC General Statutes). It is technically nonjudicial but requires authorization from the Clerk of Superior Court before any sale proceeds \u2014 making it a hybrid process that provides more protection than pure nonjudicial states."}}, {"@type": "Question", "name": "Can I inspect a Wake County foreclosure property before bidding at auction?", "acceptedAnswer": {"@type": "Answer", "text": "Not typically. Courthouse-steps sales are as-is with no inspection contingency. You can drive by, review county tax records, and research the case at the NC Courts Portal. REO properties listed on the MLS post-foreclosure are more accessible to traditional buyers and inspections."}}, {"@type": "Question", "name": "Where are Wake County foreclosure auctions held?", "acceptedAnswer": {"@type": "Answer", "text": "Most trustee's sales are held at the Wake County Courthouse, 316 Fayetteville St, Raleigh, NC 27601. Lender-coordinated online auctions are often listed on Auction.com. Tax foreclosure auctions are announced through the Wake County Department of Tax Administration."}}]}]

export default function WakeNcPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <NavBar />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/foreclosures/nc" className="hover:text-slate-300 transition-colors">North Carolina foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Wake County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Wake County Foreclosure Listings: Your Complete Guide to Buying in Raleigh&apos;s Market
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 20, 2026 &middot; Forclos Editorial</p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-10">
          <strong>Important:</strong> Foreclosure law varies by jurisdiction and changes frequently. Consult a licensed real estate attorney before bidding. This guide is for informational purposes only.
        </div>

        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Meta description:</strong> Browse wake county foreclosure listings and learn how NC&apos;s unique power-of-sale process works — from clerk hearings to the 10-day upset bid window. Updated listings for Raleigh and beyond.</p>
        <hr className="border-slate-700 my-8" />
        <p className="text-slate-300 leading-relaxed mb-4">Wake County is one of North Carolina&apos;s most active real estate markets, anchored by Raleigh, Cary, Apex, and the Research Triangle&apos;s 50,000-plus employers. Even in a strong market, foreclosure activity continues — and for buyers who understand how NC&apos;s process works, these properties represent real opportunities. This guide covers every stage of Wake County foreclosure listings: where to find them, how the process works under state law, and the one NC-specific rule — the upset bid window — that most buyers completely miss.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">What Are Wake County Foreclosure Listings?</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Wake county foreclosure listings include properties at every stage of the distressed-sale pipeline: pre-foreclosure (notice of hearing filed), scheduled trustee&apos;s sale (auction), bank-owned REO (real estate owned), and tax-lien foreclosures administered by the county.</p>
        <p className="text-slate-300 leading-relaxed mb-4">As of May 2026, Wake County had approximately 75 upcoming foreclosure sales and 25 active upset-bid properties — a moderate volume for a county of 1.2 million residents. The median home price in Wake County sits near $445,000, which means even distressed properties typically carry significant equity potential.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Key cities where Wake County foreclosure listings appear:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300"><strong className="text-white">Raleigh</strong> (county seat, state capital)</li>
        <li className="text-slate-300"><strong className="text-white">Cary</strong></li>
        <li className="text-slate-300"><strong className="text-white">Apex</strong></li>
        <li className="text-slate-300"><strong className="text-white">Wake Forest</strong></li>
        <li className="text-slate-300"><strong className="text-white">Garner</strong></li>
        <li className="text-slate-300"><strong className="text-white">Morrisville</strong></li>
        <li className="text-slate-300"><strong className="text-white">Holly Springs</strong></li>
        <li className="text-slate-300"><strong className="text-white">Knightdale</strong></li>
        </ul>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">How North Carolina Foreclosure Works: The Legal Framework</h2>
        <p className="text-slate-300 leading-relaxed mb-4">North Carolina is primarily a <strong className="text-white">power-of-sale / deed-of-trust state</strong>, governed by <strong className="text-white">N.C. General Statutes Chapter 45, Article 2A</strong>. Unlike pure nonjudicial states, NC adds one critical layer: a <strong className="text-white">Clerk of Superior Court must authorize</strong> the sale before any auction proceeds.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 1: Default and Notice</h3>
        <p className="text-slate-300 leading-relaxed mb-4">When a borrower falls 30 or more days behind, the lender begins collection. At 90+ days delinquent, the lender assigns a foreclosure attorney. Two missed consecutive payments are typically enough to trigger formal proceedings. At this stage, partial payments are no longer accepted.</p>
        <p className="text-slate-300 leading-relaxed mb-4">The foreclosure attorney files a <strong className="text-white">Substitute Trustee Notice</strong> in the public records at the <strong className="text-white">Wake County Register of Deeds</strong> (Tammy L. Brunner, Register). You can search these filings online at <a href="https://services.wake.gov/realestate" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">services.wake.gov/realestate</a> — this is where pre-foreclosure listings originate.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 2: Notice of Hearing</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Under <strong className="text-white">N.C.G.S. § 45-21.16</strong>, the trustee must file a Notice of Hearing with the Clerk of Superior Court in the county where the property is located — in this case, Wake County Superior Court at 316 Fayetteville St, Raleigh, NC 27601. The notice is then served by the sheriff on all parties.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 3: Clerk of Superior Court Hearing</h3>
        <p className="text-slate-300 leading-relaxed mb-4">This is the step most national foreclosure guides skip entirely. In North Carolina, a <strong className="text-white">Clerk of Superior Court</strong> conducts a hearing to determine whether the trustee may proceed with the sale. The clerk evaluates specific factual and legal issues, including whether proper notice was given and whether a valid default occurred. If authorized, the trustee is permitted to schedule the sale.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Homeowners facing foreclosure may present limited defenses at this hearing. Broader legal challenges must be raised before a Superior Court judge.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 4: The Trustee&apos;s Sale (Auction)</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Authorized trustee&apos;s sales in Wake County are typically held at the Wake County Courthouse, 316 Fayetteville St, Raleigh NC 27601, or advertised on <strong className="text-white">Auction.com</strong> for lender-coordinated online sales. The property goes to the highest bidder above the lender&apos;s minimum upset-bid amount. Bidders generally must bring certified funds.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Tax foreclosure auctions are administered separately by the <strong className="text-white">Wake County Department of Tax Administration</strong> and can be viewed at <a href="https://www.wake.gov/departments-government/tax-administration/real-estate/foreclosures" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">wake.gov/departments-government/tax-administration/real-estate/foreclosures</a>.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 5: The NC Upset Bid Period — The Rule Most Buyers Miss</h3>
        <p className="text-slate-300 leading-relaxed mb-4">After the trustee&apos;s sale, North Carolina law allows a <strong className="text-white">10-day upset bid period</strong> under <strong className="text-white">N.C.G.S. § 45-21.27</strong>. During this window, any qualified buyer can submit a higher bid — typically 5% above the winning auction price, with a minimum increase of $750 — to the Clerk of Superior Court.</p>
        <p className="text-slate-300 leading-relaxed mb-4">If an upset bid is filed, a <strong className="text-white">new 10-day window opens</strong>, and the process continues until no additional bids are submitted within the final 10 days. Only then does the winning bidder receive the deed.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Why this matters for Wake County buyers:</strong> The upset bid period is unique to North Carolina and not available in most states. It means that if you miss the live auction, you still have a 10-day window to jump in with a higher offer — directly at the courthouse. Properties with upset bids active are publicly tracked; Wake County had 25 such properties in May 2026.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Where to Find Wake County Foreclosure Listings</h2>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Official Sources (Free)</h3>
        <div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-slate-700"><th className="text-left py-2 px-3 text-white font-semibold">Resource</th><th className="text-left py-2 px-3 text-white font-semibold">What It Shows</th><th className="text-left py-2 px-3 text-white font-semibold">URL</th></tr></thead><tbody><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Wake County Tax Administration</td><td className="py-2 px-3 text-slate-300">Tax-lien foreclosure properties</td><td className="py-2 px-3 text-slate-300">wake.gov/tax/foreclosures</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Wake County Real Estate Search</td><td className="py-2 px-3 text-slate-300">All recorded deeds, trustee notices</td><td className="py-2 px-3 text-slate-300">services.wake.gov/realestate</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Wake County Register of Deeds</td><td className="py-2 px-3 text-slate-300">Substitute trustee filings</td><td className="py-2 px-3 text-slate-300">wake.gov/register-deeds</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">NC Courts Portal</td><td className="py-2 px-3 text-slate-300">Active foreclosure case filings</td><td className="py-2 px-3 text-slate-300">portal-nc.tylertech.cloud</td></tr></tbody></table></div>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Auction Platforms</h3>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300"><strong className="text-white">Auction.com</strong> — Lists many lender-scheduled Wake County trustee sales; allows online bidding</li>
        <li className="text-slate-300"><strong className="text-white">Courthouse steps sales</strong> — Announced via legal notice (published in The News &amp; Observer as required by NC law)</li>
        </ul>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Foreclosure Listing Databases</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Sites like Forclos aggregate Wake County foreclosure listings by stage: pre-foreclosure, scheduled auction, REO/bank-owned, and upset-bid active. Forclos pulls from public records and auction platform data, updated regularly.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Buying a Foreclosure in Wake County: What You Need to Know</h2>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Due Diligence Is Critical</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Unlike a standard MLS purchase, foreclosure properties are typically sold <strong className="text-white">as-is</strong>. You generally cannot conduct a traditional inspection before a courthouse-steps sale. Research the property through:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300"><strong className="text-white">Wake County Real Estate records</strong> (services.wake.gov) — check for liens, unpaid taxes, ownership history</li>
        <li className="text-slate-300"><strong className="text-white">NC Courts Portal</strong> — review the active foreclosure case for any pending legal challenges</li>
        <li className="text-slate-300"><strong className="text-white">Drive-by inspections</strong> — the exterior is accessible; note condition of roof, foundation, lot</li>
        </ul>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Financing Foreclosures</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Courthouse-steps buyers must typically arrive with <strong className="text-white">certified funds</strong> (cashier&apos;s check). REO (bank-owned) properties after the sale are more accessible to financed buyers — these appear on the MLS and can be purchased with conventional, FHA, or VA loans, subject to property condition.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Title Considerations</h3>
        <p className="text-slate-300 leading-relaxed mb-4">A trustee&apos;s deed from a power-of-sale foreclosure generally extinguishes the mortgage lien, but may leave other encumbrances (IRS tax liens, HOA liens, judgment liens). Always obtain a <strong className="text-white">title search</strong> and purchase <strong className="text-white">title insurance</strong> before closing on any Wake County foreclosure.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Working With the Wake County Clerk&apos;s Office</h3>
        <p className="text-slate-300 leading-relaxed mb-4">For upset bid filings and hearing schedules, contact:</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Wake County Clerk of Superior Court</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">316 Fayetteville St, Raleigh, NC 27601</p>
        <p className="text-slate-300 leading-relaxed mb-4">Wake County Superior Court Division</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Wake County Foreclosure Market Context</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Wake County&apos;s foreclosure rate remains moderate compared to statewide averages, largely because the Research Triangle economy keeps unemployment low and home values rising. The median home price of ~$445,000 means most distressed sellers have options before reaching auction — yet properties do move through the pipeline regularly.</p>
        <p className="text-slate-300 leading-relaxed mb-4">The strongest opportunity areas in current Wake County foreclosure listings tend to be older neighborhoods in east Raleigh, portions of Garner, and some Wake Forest subdivisions developed during the 2005–2008 boom cycle. Newer construction in Apex and Morrisville rarely appears in foreclosure, reflecting the stronger equity cushion from recent appreciation.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Compare with nearby counties:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300"><Link href="/foreclosures/mecklenburg-county-nc" className="text-emerald-400 hover:underline">Mecklenburg County Foreclosure Listings</Link></li>
        <li className="text-slate-300"><Link href="/foreclosures/guilford-county-nc" className="text-emerald-400 hover:underline">Guilford County Foreclosure Listings</Link></li>
        <li className="text-slate-300"><Link href="/foreclosures/forsyth-county-nc" className="text-emerald-400 hover:underline">Forsyth County Foreclosure Listings</Link></li>
        <li className="text-slate-300"><Link href="/foreclosures/north-carolina" className="text-emerald-400 hover:underline">All North Carolina Foreclosure Listings</Link></li>
        <li className="text-slate-300"><Link href="/foreclosures/durham-county-nc" className="text-emerald-400 hover:underline">Durham County Foreclosure Listings</Link></li>
        </ul>
        <hr className="border-slate-700 my-8" />
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">How do I find foreclosure listings in Wake County, NC?</p>
              <p className="text-slate-400 text-sm">Start with the official Wake County Tax Administration foreclosure page at wake.gov for tax-lien properties. For deed-of-trust foreclosures, search Auction.com, Forclos, or check recorded Substitute Trustee notices at the Wake County Register of Deeds (services.wake.gov/realestate). The NC Courts Portal also lists active foreclosure cases.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">What is the upset bid period in North Carolina?</p>
              <p className="text-slate-400 text-sm">Under N.C.G.S. § 45-21.27, anyone can place a higher bid on a Wake County foreclosure property within 10 days of the trustee&apos;s sale. The bid must exceed the sale price by at least 5% (minimum $750 increase). If a new upset bid is filed, another 10-day window opens. This continues until no bid is entered in the final 10-day period, at which point the highest bidder receives the deed.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Does Wake County use judicial or nonjudicial foreclosure?</p>
              <p className="text-slate-400 text-sm">North Carolina uses a power-of-sale process under deeds of trust (Article 2A, Chapter 45 of NC General Statutes). It is technically nonjudicial but requires authorization from the Clerk of Superior Court before any sale proceeds — making it a hybrid process that provides more protection than pure nonjudicial states.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Can I inspect a Wake County foreclosure property before bidding at auction?</p>
              <p className="text-slate-400 text-sm">Not typically. Courthouse-steps sales are as-is with no inspection contingency. You can drive by, review county tax records, and research the case at the NC Courts Portal. REO properties listed on the MLS post-foreclosure are more accessible to traditional buyers and inspections.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Where are Wake County foreclosure auctions held?</p>
              <p className="text-slate-400 text-sm">Most trustee&apos;s sales are held at the Wake County Courthouse, 316 Fayetteville St, Raleigh, NC 27601. Lender-coordinated online auctions are often listed on Auction.com. Tax foreclosure auctions are announced through the Wake County Department of Tax Administration.</p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Related County Foreclosure Pages</h2>
          <ul className="space-y-2 pl-4 list-disc">
            <li><Link href="/foreclosures/mecklenburg-county-nc" className="text-emerald-400 hover:underline">Mecklenburg County Foreclosure Listings</Link></li>
            <li><Link href="/foreclosures/guilford-county-nc" className="text-emerald-400 hover:underline">Guilford County Foreclosure Listings</Link></li>
            <li><Link href="/foreclosures/forsyth-county-nc" className="text-emerald-400 hover:underline">Forsyth County Foreclosure Listings</Link></li>
            <li><Link href="/foreclosures/north-carolina" className="text-emerald-400 hover:underline">All North Carolina Foreclosure Listings</Link></li>
            <li><Link href="/foreclosures/durham-county-nc" className="text-emerald-400 hover:underline">Durham County Foreclosure Listings</Link></li>
          </ul>
        </section>

        <section className="border-t border-slate-800 pt-8 mt-8">
          <p className="text-slate-500 text-xs">This page is for informational purposes only and does not constitute legal or financial advice. Always verify current requirements with official county and state sources.</p>
        </section>
      </main>
    </div>
  )
}
