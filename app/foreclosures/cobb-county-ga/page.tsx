import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Cobb County GA Foreclosure Auction: Complete Investor\'s Guide (2025)',
  description: 'Your complete guide to the Cobb County GA foreclosure auction — when it happens, where to go, how Georgia\'s 37-day non-judicial process works, and how to find listings before the sale.',
  alternates: { canonical: 'https://forclos.com/foreclosures/cobb-county-ga' },
  openGraph: {
    title: 'Cobb County GA Foreclosure Auction: Complete Investor\'s Guide (2025)',
    description: 'Your complete guide to the Cobb County GA foreclosure auction — when it happens, where to go, how Georgia\'s 37-day non-judicial process works, and how to find listings before the sale.',
    url: 'https://forclos.com/foreclosures/cobb-county-ga',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobb County GA Foreclosure Auction: Complete Investor\'s Guide (2025)',
    description: 'Your complete guide to the Cobb County GA foreclosure auction — when it happens, where to go, how Georgia\'s 37-day non-judicial process works, and how to find listings before the sale.',
  },
}

const schemaOrg = [{"@context": "https://schema.org", "@type": "Article", "headline": "Cobb County GA Foreclosure Auction: Complete Investor's Guide (2025)", "description": "Your complete guide to the Cobb County GA foreclosure auction \u2014 when it happens, where to go, how Georgia's 37-day non-judicial process works, and how to find listings before the sale.", "author": {"@type": "Organization", "name": "Forclos", "url": "https://forclos.com"}, "publisher": {"@type": "Organization", "name": "Forclos", "url": "https://forclos.com", "logo": {"@type": "ImageObject", "url": "https://forclos.com/logo.png"}}, "about": {"@type": "Place", "name": "Cobb County, Georgia", "address": {"@type": "PostalAddress", "addressLocality": "Marietta", "addressRegion": "GA", "postalCode": "30090", "addressCountry": "US"}}, "mainEntityOfPage": {"@type": "WebPage", "@id": "https://forclos.com/foreclosures/cobb-county-ga"}, "dateModified": "2025-08-01", "keywords": ["cobb county ga foreclosure auction", "cobb county foreclosure", "marietta ga foreclosure auction", "georgia non-judicial foreclosure", "first tuesday auction georgia"]}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "When is the Cobb County GA foreclosure auction held?", "acceptedAnswer": {"@type": "Answer", "text": "The Cobb County foreclosure auction takes place on the first Tuesday of every month at the Cobb County Courthouse, 70 Haynes Street, Marietta, GA 30090."}}, {"@type": "Question", "name": "How do I find out what properties are on the Cobb County auction list?", "acceptedAnswer": {"@type": "Answer", "text": "Foreclosure notices are legally required to be published in the Marietta Daily Journal for four consecutive weeks before the sale date. You can also search Forclos for current Cobb County distressed listings."}}, {"@type": "Question", "name": "Does Georgia have a right of redemption after a mortgage foreclosure sale?", "acceptedAnswer": {"@type": "Answer", "text": "No. Georgia does not give homeowners a right to redeem their property after a mortgage foreclosure sale. The sale is final. Tax sales in Georgia do carry a one-year redemption period \u2014 but this is a separate process."}}, {"@type": "Question", "name": "What payment is required at the Cobb County foreclosure auction?", "acceptedAnswer": {"@type": "Answer", "text": "You must pay the full bid amount immediately using certified funds \u2014 typically a cashier's check. Personal checks and cash are generally not accepted."}}, {"@type": "Question", "name": "What liens survive a Cobb County foreclosure auction?", "acceptedAnswer": {"@type": "Answer", "text": "The foreclosure of a senior mortgage wipes out junior liens. However, IRS tax liens (with a 120-day redemption right), certain HOA liens, and other super-priority liens may survive. Always run a title search before bidding."}}]}]

export default function CobbGaPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <NavBar />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/foreclosures/ga" className="hover:text-slate-300 transition-colors">Georgia foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Cobb County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Cobb County GA Foreclosure Auction: Complete Investor&apos;s Guide (2025)
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 20, 2026 &middot; Forclos Editorial</p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-10">
          <strong>Important:</strong> Foreclosure law varies by jurisdiction and changes frequently. Consult a licensed real estate attorney before bidding. This guide is for informational purposes only.
        </div>

        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Meta description:</strong> Your complete guide to the Cobb County GA foreclosure auction — when it happens, where to go, how Georgia&apos;s 37-day non-judicial process works, and how to find listings before the sale.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">What Is the Cobb County GA Foreclosure Auction?</h2>
        <p className="text-slate-300 leading-relaxed mb-4">The <strong className="text-white">cobb county ga foreclosure auction</strong> is a public property sale held on the <strong className="text-white">first Tuesday of every month</strong> on the steps of the Cobb County Courthouse in Marietta. It is where mortgage lenders, attorneys, and the Cobb County Tax Commissioner sell distressed properties after a borrower defaults — and where real estate investors can acquire properties at below-market prices, provided they do their homework first.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Understanding how this auction works — and how Georgia law governs it — is the difference between a good deal and an expensive mistake. This guide breaks down every step.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Georgia&apos;s Non-Judicial Foreclosure Process: What Makes It Different</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Georgia is a <strong className="text-white">non-judicial foreclosure state</strong>. That means lenders do not have to file a lawsuit or get a judge&apos;s approval to foreclose. Instead, the process is governed by a <strong className="text-white">power of sale</strong> clause built into the mortgage deed — and it moves fast.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Under <strong className="text-white">OCGA § 44-14-162</strong>, here is how a Georgia mortgage foreclosure unfolds:</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 1: Notice of Sale</h3>
        <p className="text-slate-300 leading-relaxed mb-4">When a borrower defaults, the lender (or its attorney) must:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300">Send <strong className="text-white">written notice</strong> to the borrower at least <strong className="text-white">30 days</strong> before the scheduled sale date (OCGA § 44-14-162.2)</li>
        <li className="text-slate-300">Publish a notice of foreclosure in the county&apos;s official legal newspaper <strong className="text-white">for 4 consecutive weeks</strong> before the sale</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4">In Cobb County, the official legal newspaper is the <strong className="text-white">Marietta Daily Journal</strong>. This is where foreclosure auction notices are legally required to be published — and where savvy investors look first.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 2: The 37-Day Timeline</h3>
        <p className="text-slate-300 leading-relaxed mb-4">From the notice of sale to the courthouse-steps auction, Georgia&apos;s process takes as little as <strong className="text-white">37 days</strong> — one of the shortest foreclosure timelines in the United States. There is no mandatory waiting period beyond the 30-day notice and 4-week publication requirement.</p>
        <p className="text-slate-300 leading-relaxed mb-4">For investors, this speed creates opportunity: properties move to auction quickly, and motivated buyers who track the Marietta Daily Journal can identify auction candidates weeks before the sale.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 3: The Auction — First Tuesday at the Courthouse</h3>
        <p className="text-slate-300 leading-relaxed mb-4">The Cobb County foreclosure auction takes place:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300"><strong className="text-white">When:</strong> First Tuesday of every month (e.g., January 7, April 1, May 6, June 3, July 1, August 5, 2025)</li>
        <li className="text-slate-300"><strong className="text-white">Where:</strong> Cobb County Courthouse steps — <strong className="text-white">70 Haynes Street, Marietta, GA 30090</strong></li>
        <li className="text-slate-300"><strong className="text-white">Time:</strong> Generally mid-morning; confirm specific timing for each sale with the foreclosing attorney or lender</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4">This is a live, public auction. Anyone can attend and bid. The winning bidder must typically pay <strong className="text-white">in full immediately</strong> using cashier&apos;s check or certified funds. Personal checks and cash are generally not accepted.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 4: No Right of Redemption</h3>
        <p className="text-slate-300 leading-relaxed mb-4">One critical fact every Cobb County auction bidder must know: <strong className="text-white">Georgia does not grant homeowners a right of redemption after a mortgage foreclosure sale.</strong> Once the gavel falls and the deed transfers, the previous owner has no legal right to reclaim the property by repaying the debt.</p>
        <p className="text-slate-300 leading-relaxed mb-4">This is different from Georgia&apos;s tax sales, which do carry a one-year redemption period. Mortgage foreclosures at the courthouse steps are final.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Mortgage Foreclosure vs. Tax Sale Auctions in Cobb County</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Cobb County holds <strong className="text-white">two distinct types</strong> of foreclosure auctions. Many buyers confuse them.</p>
        <div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-slate-700"><th className="text-left py-2 px-3 text-white font-semibold">Mortgage Foreclosure</th><th className="text-left py-2 px-3 text-white font-semibold">Tax Sale</th></tr></thead><tbody><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Authority</strong></td><td className="py-2 px-3 text-slate-300">Lender / foreclosing attorney</td><td className="py-2 px-3 text-slate-300">Cobb County Tax Commissioner</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Governing Law</strong></td><td className="py-2 px-3 text-slate-300">OCGA § 44-14-162</td><td className="py-2 px-3 text-slate-300">OCGA § 48-4</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">When</strong></td><td className="py-2 px-3 text-slate-300">First Tuesday of the month</td><td className="py-2 px-3 text-slate-300">Announced separately</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Right of Redemption</strong></td><td className="py-2 px-3 text-slate-300">None</td><td className="py-2 px-3 text-slate-300">1 year</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Listings Published</strong></td><td className="py-2 px-3 text-slate-300">Marietta Daily Journal (4 weeks)</td><td className="py-2 px-3 text-slate-300">Marietta Daily Journal (Fridays before sale)</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Where to Track</strong></td><td className="py-2 px-3 text-slate-300">cobbtax.gov</td><td className="py-2 px-3 text-slate-300">cobbtax.gov/property/tax_sale/</td></tr></tbody></table></div>
        <p className="text-slate-300 leading-relaxed mb-4">For <strong className="text-white">tax sales</strong>, the Cobb County Tax Commissioner publishes available properties at <a href="https://www.cobbtax.gov/property/tax_sale/index.php" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">cobbtax.gov</a>. Any property with unpaid taxes past the October 15 due date may be subject to levy and tax sale.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">How to Find Cobb County Foreclosure Listings Before the Auction</h2>
        <p className="text-slate-300 leading-relaxed mb-4">The best investors don&apos;t show up on auction day hoping for a deal — they track listings weeks in advance.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">1. Marietta Daily Journal</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Required by Georgia law (OCGA § 44-14-162), foreclosure notices must be published here for 4 weeks before the sale. Physical or digital subscription gives you the earliest legal notice of upcoming Cobb County auction properties.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">2. Foreclos — Live Cobb County Listings</h3>
        <p className="text-slate-300 leading-relaxed mb-4"><Link href="/" className="text-emerald-400 hover:underline">Forclos</Link> aggregates active Cobb County distressed property listings, pre-foreclosure notices, and auction data in one searchable interface — updated regularly. Browse listings by city, zip code, or price range across metro Cobb County. Explore nearby county data as well:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300"><Link href="/foreclosures/gwinnett-county-ga" className="text-emerald-400 hover:underline">Gwinnett County foreclosure auction →</Link></li>
        <li className="text-slate-300"><Link href="/foreclosures/fulton-county-ga" className="text-emerald-400 hover:underline">Fulton County foreclosure auction →</Link></li>
        <li className="text-slate-300"><Link href="/foreclosures/dekalb-county-ga" className="text-emerald-400 hover:underline">DeKalb County foreclosure auction →</Link></li>
        <li className="text-slate-300"><Link href="/foreclosures/georgia" className="text-emerald-400 hover:underline">All Georgia foreclosure listings →</Link></li>
        </ul>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">3. Cobb County Superior Court Clerk</h3>
        <p className="text-slate-300 leading-relaxed mb-4">After the foreclosure sale, the deed is recorded with the <strong className="text-white">Cobb County Superior Court Clerk</strong> at 70 Haynes St., Marietta, GA 30090. Tracking recently filed deeds can help investors identify patterns in foreclosure activity by lender or neighborhood.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">4. ForeclosureBidsList.com</h3>
        <p className="text-slate-300 leading-relaxed mb-4">A subscription-based service that publishes monthly Cobb County auction bid lists with opening bids, attorney names, and active/dropped status. Useful for pre-auction research on specific properties.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">What to Bring to the Cobb County Foreclosure Auction</h2>
        <p className="text-slate-300 leading-relaxed mb-4">If you plan to bid, prepare before you arrive:</p>
        <ol className="space-y-2 mb-4 pl-4 list-decimal">
        <li className="text-slate-300"><strong className="text-white">Certified funds / cashier&apos;s check</strong> — Payment is typically due immediately upon winning. Bring multiple cashier&apos;s checks in different denominations so you can tender the exact bid amount. Most lenders do not accept personal checks or cash.</li>
        <li className="text-slate-300"><strong className="text-white">Title research</strong> — Properties sell "as-is" with no warranty. Run a title search before bidding to identify any junior liens, IRS liens, HOA delinquencies, or easements that survive the foreclosure sale.</li>
        <li className="text-slate-300"><strong className="text-white">Property inspection</strong> (if possible) — You generally cannot enter an occupied property before the auction. Drive-by inspections and public records (building permits, code violations) are your due diligence tools.</li>
        <li className="text-slate-300"><strong className="text-white">Legal counsel</strong> — For high-value purchases, having a Georgia real estate attorney review the foreclosure notice and title abstract before auction day is worth every dollar.</li>
        </ol>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Risks Every Cobb County Auction Buyer Should Know</h2>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Junior Liens May Survive</h3>
        <p className="text-slate-300 leading-relaxed mb-4">A mortgage foreclosure wipes out junior liens (second mortgages, HELOCs), but <strong className="text-white">some liens survive</strong> the foreclosure of a first mortgage, including:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300">IRS tax liens (IRS has a 120-day right of redemption after the sale)</li>
        <li className="text-slate-300">HOA liens (in some cases)</li>
        <li className="text-slate-300">Mechanic&apos;s liens filed before the senior mortgage</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4">Always conduct a <strong className="text-white">full title search</strong> before bidding.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Occupancy Risk</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Winning a foreclosure auction does not automatically give you possession. If the prior owner (or a tenant) is still in the property, you may need to go through formal eviction proceedings. Georgia&apos;s dispossessory process can take weeks.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Overbidding</h3>
        <p className="text-slate-300 leading-relaxed mb-4">The opening bid is set by the lender at roughly the outstanding loan balance plus fees. In a competitive Cobb County market, multiple bidders can drive the price above market value — eliminating the discount. Know your maximum bid before the auction starts.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Cobb County Real Estate Market: Why It Matters</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Cobb County is one of the most active real estate markets in Georgia, with approximately <strong className="text-white">780,000 residents</strong> across cities including Marietta, Smyrna, Kennesaw, Acworth, and Powder Springs. Its proximity to Atlanta, strong employment base (The Battery/Truist Park, Dobbins Air Reserve Base, WellStar Health System), and well-regarded school districts make it a prime target for both homebuyers and investors.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Foreclosure activity in Cobb County tracks closely with regional economic cycles. In 2024–2025, monthly first-Tuesday auctions have run consistently, with auction dates in every month of the year. Distressed inventory ranges from condominiums in Smyrna to single-family homes in Acworth — across a wide range of price points.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Cobb County Foreclosure Auction: Quick Reference</h2>
        <div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-slate-700"><th className="text-left py-2 px-3 text-white font-semibold">Item</th><th className="text-left py-2 px-3 text-white font-semibold">Detail</th></tr></thead><tbody><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Auction Day</strong></td><td className="py-2 px-3 text-slate-300">First Tuesday of every month</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Location</strong></td><td className="py-2 px-3 text-slate-300">70 Haynes Street, Marietta, GA 30090</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Notice Requirement</strong></td><td className="py-2 px-3 text-slate-300">4 weeks in Marietta Daily Journal</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Governing Statute</strong></td><td className="py-2 px-3 text-slate-300">OCGA § 44-14-162</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Right of Redemption</strong></td><td className="py-2 px-3 text-slate-300">None (mortgage foreclosures)</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Payment Required</strong></td><td className="py-2 px-3 text-slate-300">Certified funds / cashier&apos;s check</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Tax Sale Info</strong></td><td className="py-2 px-3 text-slate-300">cobbtax.gov/property/tax_sale/</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Superior Court Clerk</strong></td><td className="py-2 px-3 text-slate-300">cobbsuperiorcourtclerk.com</td></tr></tbody></table></div>
        <hr className="border-slate-700 my-8" />
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">When is the Cobb County GA foreclosure auction held?</p>
              <p className="text-slate-400 text-sm">The Cobb County foreclosure auction takes place on the first Tuesday of every month at the Cobb County Courthouse, 70 Haynes Street, Marietta, GA 30090.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">How do I find out what properties are on the Cobb County auction list?</p>
              <p className="text-slate-400 text-sm">Foreclosure notices are legally required to be published in the Marietta Daily Journal for four consecutive weeks before the sale date. You can also search Forclos for current Cobb County distressed listings.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Does Georgia have a right of redemption after a mortgage foreclosure sale?</p>
              <p className="text-slate-400 text-sm">No. Georgia does not give homeowners a right to redeem their property after a mortgage foreclosure sale. The sale is final. Tax sales in Georgia do carry a one-year redemption period — but this is a separate process.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">What payment is required at the Cobb County foreclosure auction?</p>
              <p className="text-slate-400 text-sm">You must pay the full bid amount immediately using certified funds — typically a cashier&apos;s check. Personal checks and cash are generally not accepted.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">What liens survive a Cobb County foreclosure auction?</p>
              <p className="text-slate-400 text-sm">The foreclosure of a senior mortgage wipes out junior liens. However, IRS tax liens (with a 120-day redemption right), certain HOA liens, and other super-priority liens may survive. Always run a title search before bidding.</p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Related County Foreclosure Pages</h2>
          <ul className="space-y-2 pl-4 list-disc">
            <li><Link href="/foreclosures/gwinnett-county-ga" className="text-emerald-400 hover:underline">Gwinnett County foreclosure auction</Link></li>
            <li><Link href="/foreclosures/fulton-county-ga" className="text-emerald-400 hover:underline">Fulton County foreclosure auction</Link></li>
            <li><Link href="/foreclosures/dekalb-county-ga" className="text-emerald-400 hover:underline">DeKalb County foreclosure auction</Link></li>
            <li><Link href="/foreclosures/georgia" className="text-emerald-400 hover:underline">All Georgia foreclosure listings</Link></li>
            <li><Link href="/" className="text-emerald-400 hover:underline">Forclos</Link></li>
          </ul>
        </section>

        <section className="border-t border-slate-800 pt-8 mt-8">
          <p className="text-slate-500 text-xs">This page is for informational purposes only and does not constitute legal or financial advice. Always verify current requirements with official county and state sources.</p>
        </section>
      </main>
    </div>
  )
}
