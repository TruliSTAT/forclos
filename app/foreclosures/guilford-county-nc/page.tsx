import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Guilford County NC Foreclosure Auction: Your Step-by-Step Guide',
  description: 'Learn how the Guilford County NC foreclosure auction process works — from finding listings to bidding, upset bids, and getting your Commissioner\'s Deed. Step-by-step guide.',
  alternates: { canonical: 'https://forclos.com/foreclosures/guilford-county-nc' },
  openGraph: {
    title: 'Guilford County NC Foreclosure Auction: Your Step-by-Step Guide',
    description: 'Learn how the Guilford County NC foreclosure auction process works — from finding listings to bidding, upset bids, and getting your Commissioner\'s Deed. Step-by-step guide.',
    url: 'https://forclos.com/foreclosures/guilford-county-nc',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilford County NC Foreclosure Auction: Your Step-by-Step Guide',
    description: 'Learn how the Guilford County NC foreclosure auction process works — from finding listings to bidding, upset bids, and getting your Commissioner\'s Deed. Step-by-step guide.',
  },
}

const schemaOrg = [{"@context": "https://schema.org", "@type": "Article", "headline": "Guilford County NC Foreclosure Auction: Your Step-by-Step Guide", "description": "Learn how the Guilford County NC foreclosure auction process works \u2014 from finding listings to bidding, upset bids, and getting your Commissioner's Deed. Step-by-step guide.", "url": "https://forclos.com/foreclosures/guilford-county-nc", "publisher": {"@type": "Organization", "name": "Forclos", "url": "https://forclos.com"}, "about": {"@type": "Place", "name": "Guilford County", "address": {"@type": "PostalAddress", "addressLocality": "Greensboro", "addressRegion": "NC", "addressCountry": "US"}}, "mainEntity": {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I buy a tax lien certificate in Guilford County, NC?", "acceptedAnswer": {"@type": "Answer", "text": "No. North Carolina state law prohibits the sale of property tax lien certificates. In Guilford County (and across NC), you bid on the actual property at auction \u2014 not a lien."}}, {"@type": "Question", "name": "Where can I find upcoming Guilford County foreclosure auction dates?", "acceptedAnswer": {"@type": "Answer", "text": "Check ZLS-NC.COM (Zacchaeus Legal Services) for upcoming sale dates. You can also use the Guilford County GIS Foreclosure Dashboard at gcgis.guilfordcountync.gov to research properties currently in foreclosure."}}, {"@type": "Question", "name": "What happens if no one bids at a Guilford County tax foreclosure auction?", "acceptedAnswer": {"@type": "Answer", "text": "If no outside bidder appears, the county, city, or town will bid the minimum opening bid amount. The 10-day upset period still begins the day after the sale is recorded."}}, {"@type": "Question", "name": "Is the 10-day upset bid period negotiable or waivable?", "acceptedAnswer": {"@type": "Answer", "text": "No. The 10-day upset bid period is required by North Carolina law and cannot be waived. Any person \u2014 not just registered bidders \u2014 can file an upset bid at the Clerk of Court's Office."}}, {"@type": "Question", "name": "Do I need a real estate agent or attorney to bid at a Guilford County foreclosure auction?", "acceptedAnswer": {"@type": "Answer", "text": "You don't legally need one to bid, but buyers are strongly advised to consult a North Carolina real estate attorney before purchasing. A Commissioner's Deed does not come with title warranties, and an attorney can review the title chain, outstanding liens, and any issues in the foreclosure judgment before you commit."}}]}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I buy a tax lien certificate in Guilford County, NC?", "acceptedAnswer": {"@type": "Answer", "text": "No. North Carolina state law prohibits the sale of property tax lien certificates. In Guilford County (and across NC), you bid on the actual property at auction \u2014 not a lien."}}, {"@type": "Question", "name": "Where can I find upcoming Guilford County foreclosure auction dates?", "acceptedAnswer": {"@type": "Answer", "text": "Check ZLS-NC.COM (Zacchaeus Legal Services) for upcoming sale dates. You can also use the Guilford County GIS Foreclosure Dashboard at gcgis.guilfordcountync.gov to research properties currently in foreclosure."}}, {"@type": "Question", "name": "What happens if no one bids at a Guilford County tax foreclosure auction?", "acceptedAnswer": {"@type": "Answer", "text": "If no outside bidder appears, the county, city, or town will bid the minimum opening bid amount. The 10-day upset period still begins the day after the sale is recorded."}}, {"@type": "Question", "name": "Is the 10-day upset bid period negotiable or waivable?", "acceptedAnswer": {"@type": "Answer", "text": "No. The 10-day upset bid period is required by North Carolina law and cannot be waived. Any person \u2014 not just registered bidders \u2014 can file an upset bid at the Clerk of Court's Office."}}, {"@type": "Question", "name": "Do I need a real estate agent or attorney to bid at a Guilford County foreclosure auction?", "acceptedAnswer": {"@type": "Answer", "text": "You don't legally need one to bid, but buyers are strongly advised to consult a North Carolina real estate attorney before purchasing. A Commissioner's Deed does not come with title warranties, and an attorney can review the title chain, outstanding liens, and any issues in the foreclosure judgment before you commit."}}]}]

export default function GuilfordNcPage() {
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
          <span className="text-slate-400">Guilford County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Guilford County NC Foreclosure Auction: Your Step-by-Step Guide
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 20, 2026 &middot; Forclos Editorial</p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-10">
          <strong>Important:</strong> Foreclosure law varies by jurisdiction and changes frequently. Consult a licensed real estate attorney before bidding. This guide is for informational purposes only.
        </div>

        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Meta Description:</strong> Learn how the Guilford County NC foreclosure auction process works — from finding listings to bidding, upset bids, and getting your Commissioner&apos;s Deed. Step-by-step guide.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Guilford County NC Foreclosure Auction: Your Step-by-Step Guide</h2>
        <p className="text-slate-300 leading-relaxed mb-4">If you&apos;re looking to buy property at a <strong className="text-white">Guilford County NC foreclosure auction</strong>, you&apos;re entering one of North Carolina&apos;s most active real estate markets. Guilford County — home to both Greensboro and High Point — regularly conducts tax foreclosure auctions under state law, and knowing the exact local process is the difference between a winning bid and a costly mistake.</p>
        <p className="text-slate-300 leading-relaxed mb-4">This guide covers everything: how auctions are authorized, where and when they&apos;re held, how bidding works, the 10-day upset period, and what deed you&apos;ll receive at the end.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">What Is a Guilford County NC Foreclosure Auction?</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Guilford County holds two types of foreclosure auctions:</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">1. Tax Foreclosure Auctions</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">When property owners fail to pay property taxes, Guilford County initiates a tax foreclosure under <strong className="text-white">North Carolina General Statute § 105-374</strong>. The county contracts with <strong className="text-white">Zacchaeus Legal Services (ZLS)</strong> — a specialized NC tax foreclosure law firm operating at ZLS-NC.COM — to manage the collection and auction process on the county&apos;s behalf.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">2. Power of Sale (Mortgage/Deed of Trust) Foreclosures</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">When a borrower defaults on a mortgage or deed of trust, the lender or trustee may pursue a nonjudicial power-of-sale foreclosure under <strong className="text-white">NCGS Chapter 45, Article 2A</strong>. Before the auction can proceed, the trustee must file a notice of hearing with the <strong className="text-white">Clerk of Superior Court of Guilford County</strong>, as required by NCGS § 45-21.16. The Clerk reviews the case and authorizes or denies the sale.</p>
        <blockquote className="border-l-2 border-amber-500 pl-4 my-4 text-amber-200 text-sm"><strong className="text-white">Important:</strong> North Carolina law prohibits the sale of property tax lien certificates. You cannot buy a "lien" in Guilford County — you bid on the actual property at auction.</blockquote>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Where Are Guilford County Foreclosure Auctions Held?</h2>
        <p className="text-slate-300 leading-relaxed mb-4">All tax foreclosure auction sales in Guilford County take place at:</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Guilford County Courthouse</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">201 S. Eugene St.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Greensboro, NC 27401</p>
        <p className="text-slate-300 leading-relaxed mb-4">Sales are held <strong className="text-white">at noon</strong> on scheduled dates. The schedule is not fixed monthly — sale dates are determined as needed based on the foreclosure pipeline. To find upcoming sale dates, check <strong className="text-white">ZLS-NC.COM</strong> (Zacchaeus Legal Services) or use the Guilford County Tax Department&apos;s GIS foreclosure tools at gcgis.guilfordcountync.gov.</p>
        <p className="text-slate-300 leading-relaxed mb-4">For questions about the foreclosure process, contact the Guilford County Tax Department at <strong className="text-white">336-641-3812</strong> or email ethomps@guilfordcountync.gov.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Step 1: Research Properties Before the Auction</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Before you set foot in the Guilford County Courthouse, do your homework:</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Official Research Tools:</strong></p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300"><strong className="text-white">Guilford County GIS Foreclosure Dashboard</strong> — Search properties currently in the foreclosure pipeline: gcgis.guilfordcountync.gov/portal/apps/dashboards/2530a4f70ee3431bb0d561994b4b8eb0</li>
        <li className="text-slate-300"><strong className="text-white">Advanced Foreclosure Properties Map &amp; Search (new)</strong> — Guilford County&apos;s updated GIS tool (Experience Builder App) for foreclosure research</li>
        <li className="text-slate-300"><strong className="text-white">ZLS-NC.COM</strong> — Zacchaeus Legal Services lists upcoming auction properties and sale dates</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">What to Research:</strong></p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300">Outstanding taxes and liens not included in the judgment (you&apos;re responsible for these after purchase)</li>
        <li className="text-slate-300">Title history (Commissioner&apos;s Deeds do not provide the same warranty as general warranty deeds)</li>
        <li className="text-slate-300">Physical condition of the property (most auctioned properties cannot be inspected inside beforehand)</li>
        <li className="text-slate-300">Zoning, environmental issues, and HOA obligations</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4">Do not skip due diligence. A Commissioner&apos;s Deed conveys ownership but does not guarantee a clean title beyond what&apos;s covered in the judgment.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Step 2: Attend the Auction and Place Your Bid</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Guilford County tax foreclosure auctions are live, in-person events at the Guilford County Courthouse (201 S. Eugene St., Greensboro).</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Auction Day Requirements:</strong></p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300">Bring <strong className="text-white">cash or certified funds</strong> for your deposit</li>
        <li className="text-slate-300">The required deposit is <strong className="text-white">20% of your bid amount</strong>, payable to Zacchaeus Legal Services at the time of the sale</li>
        <li className="text-slate-300">Personal checks and credit cards are not accepted for deposits</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Bidding Process:</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">Bidding is competitive and open. The auction starts with a minimum opening bid (typically set to cover outstanding taxes, fees, and attorney costs). If no outside bidder appears, the county or municipality will bid the opening minimum. The highest bid wins, subject to the 10-day upset period.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Step 3: The 10-Day Upset Bid Period</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Winning the auction is not the end — it&apos;s the beginning of a <strong className="text-white">10-day upset bid period</strong>, one of the most misunderstood aspects of NC foreclosure law.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">How Upset Bids Work:</strong></p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300">After the sale is recorded, any person may submit a higher bid — called an "upset bid" — within 10 calendar days</li>
        <li className="text-slate-300">The upset bid must be at least <strong className="text-white">5% more than the current high bid</strong>, with a <strong className="text-white">minimum increase of $750</strong></li>
        <li className="text-slate-300">Upset bids must be submitted <strong className="text-white">in person</strong> at the <strong className="text-white">Clerk of Court&apos;s Office</strong>, Guilford County Courthouse, 201 S. Eugene St., Greensboro, NC 27401</li>
        <li className="text-slate-300">Each upset bid restarts the 10-day clock</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Counting the 10 Days:</strong></p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300">Day 1 is the day after the sale is recorded</li>
        <li className="text-slate-300">Weekends and holidays count toward the 10 days</li>
        <li className="text-slate-300">If Day 10 falls on a weekend or holiday, the next working day becomes Day 10</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Checking Close-Out Status:</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">To confirm whether the upset period has expired (and that you&apos;re the final bidder), you must check <strong className="text-white">in person</strong> at the Clerk of Court&apos;s Office. There is no online lookup for this status.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Step 4: Final Payment and Getting Your Commissioner&apos;s Deed</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Once the 10-day upset bid period closes with no further bids, you&apos;re the confirmed buyer.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Final Payment:</strong></p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300">Full payment is due <strong className="text-white">in the foreclosure attorney&apos;s office</strong> upon delivery of the Commissioner&apos;s Deed</li>
        <li className="text-slate-300">Payment must be made <strong className="text-white">no later than 30 days</strong> after the 10-day upset bid period closes</li>
        <li className="text-slate-300">Payment must be in certified funds</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">The Commissioner&apos;s Deed:</strong></p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300">You&apos;ll receive a <strong className="text-white">Commissioner&apos;s Deed</strong> — this is the standard deed issued in NC tax and judicial foreclosure sales</li>
        <li className="text-slate-300">The property is conveyed subject to all county and city taxes and assessments <strong className="text-white">not included in the judgment</strong></li>
        <li className="text-slate-300">A Commissioner&apos;s Deed is not a general warranty deed; title insurance is strongly recommended</li>
        </ul>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Guilford County Foreclosure Market: What Buyers Need to Know</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Guilford County is North Carolina&apos;s third-largest county by population, and its foreclosure market reflects a healthy but competitive real estate environment.</p>
        <p className="text-slate-300 leading-relaxed mb-4">According to the Greensboro Regional REALTORS® Association (data reported January 2025), Guilford County&apos;s Q4 2024 housing market showed:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300"><strong className="text-white">855 homes for sale</strong> — up 6.9% from Q4 2023</li>
        <li className="text-slate-300"><strong className="text-white">1,163 closed sales</strong> — up 6.7% year-over-year</li>
        <li className="text-slate-300">Months&apos; supply of inventory: <strong className="text-white">2.1</strong> (up 5% from prior year)</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4">The county&apos;s median home price is approximately <strong className="text-white">$309,378</strong> (RealtyTrac). With rising inventory and strong sales volume, competition at auction can be significant — particularly for properties in Greensboro&apos;s central neighborhoods and High Point&apos;s established residential areas.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Guilford County has historically been aggressive in its tax foreclosure program. The county contracts with Zacchaeus Legal Services annually to manage the pipeline, and the Board of Commissioners has consistently increased those contract amounts to keep pace with delinquent tax collections. This means auctions are held regularly throughout the year, not just seasonally.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Guilford County vs. Other NC Counties: Key Differences</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Every NC county handles the logistics of its foreclosure program differently, even though the state legal framework is the same. Here&apos;s what makes Guilford County specific:</p>
        <div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-slate-700"><th className="text-left py-2 px-3 text-white font-semibold">Feature</th><th className="text-left py-2 px-3 text-white font-semibold">Guilford County</th></tr></thead><tbody><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Auction attorney</td><td className="py-2 px-3 text-slate-300">Zacchaeus Legal Services (ZLS-NC.COM)</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Auction location</td><td className="py-2 px-3 text-slate-300">Guilford County Courthouse, Greensboro</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Listing source</td><td className="py-2 px-3 text-slate-300">ZLS-NC.COM + Guilford GIS Dashboard</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Deposit</td><td className="py-2 px-3 text-slate-300">20% by cash or certified funds</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Upset bid minimum increase</td><td className="py-2 px-3 text-slate-300">5% or $750, whichever is greater</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Deed type</td><td className="py-2 px-3 text-slate-300">Commissioner&apos;s Deed</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Final payment deadline</td><td className="py-2 px-3 text-slate-300">30 days after upset period closes</td></tr></tbody></table></div>
        <hr className="border-slate-700 my-8" />
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Can I buy a tax lien certificate in Guilford County, NC?</p>
              <p className="text-slate-400 text-sm">No. North Carolina state law prohibits the sale of property tax lien certificates. In Guilford County (and across NC), you bid on the actual property at auction — not a lien.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Where can I find upcoming Guilford County foreclosure auction dates?</p>
              <p className="text-slate-400 text-sm">Check ZLS-NC.COM (Zacchaeus Legal Services) for upcoming sale dates. You can also use the Guilford County GIS Foreclosure Dashboard at gcgis.guilfordcountync.gov to research properties currently in foreclosure.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">What happens if no one bids at a Guilford County tax foreclosure auction?</p>
              <p className="text-slate-400 text-sm">If no outside bidder appears, the county, city, or town will bid the minimum opening bid amount. The 10-day upset period still begins the day after the sale is recorded.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Is the 10-day upset bid period negotiable or waivable?</p>
              <p className="text-slate-400 text-sm">No. The 10-day upset bid period is required by North Carolina law and cannot be waived. Any person — not just registered bidders — can file an upset bid at the Clerk of Court&apos;s Office.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Do I need a real estate agent or attorney to bid at a Guilford County foreclosure auction?</p>
              <p className="text-slate-400 text-sm">You don&apos;t legally need one to bid, but buyers are strongly advised to consult a North Carolina real estate attorney before purchasing. A Commissioner&apos;s Deed does not come with title warranties, and an attorney can review the title chain, outstanding liens, and any issues in the foreclosure judgment before you commit.</p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Related County Foreclosure Pages</h2>
          <ul className="space-y-2 pl-4 list-disc">
            <li><Link href="/foreclosures/wake-county-nc" className="text-emerald-400 hover:underline">Wake County NC Foreclosure Auctions</Link></li>
            <li><Link href="/foreclosures/mecklenburg-county-nc" className="text-emerald-400 hover:underline">Mecklenburg County NC Foreclosure Auctions</Link></li>
            <li><Link href="/foreclosures/forsyth-county-nc" className="text-emerald-400 hover:underline">Forsyth County NC Foreclosure Auctions</Link></li>
            <li><Link href="/foreclosures/north-carolina" className="text-emerald-400 hover:underline">North Carolina Foreclosure Auctions</Link></li>
          </ul>
        </section>

        <section className="border-t border-slate-800 pt-8 mt-8">
          <p className="text-slate-500 text-xs">This page is for informational purposes only and does not constitute legal or financial advice. Always verify current requirements with official county and state sources.</p>
        </section>
      </main>
    </div>
  )
}
