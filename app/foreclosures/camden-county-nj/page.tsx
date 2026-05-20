import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Camden County NJ Foreclosure Auction: Complete Buyer\'s Guide',
  description: 'Browse Camden County foreclosure listings. Learn the process, auction dates, and how to buy.',
  alternates: { canonical: 'https://forclos.com/foreclosures/camden-county-nj' },
  openGraph: {
    title: 'Camden County NJ Foreclosure Auction: Complete Buyer\'s Guide',
    description: 'Browse Camden County foreclosure listings. Learn the process, auction dates, and how to buy.',
    url: 'https://forclos.com/foreclosures/camden-county-nj',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camden County NJ Foreclosure Auction: Complete Buyer\'s Guide',
    description: 'Browse Camden County foreclosure listings. Learn the process, auction dates, and how to buy.',
  },
}

const schemaOrg = [{"@context": "https://schema.org", "@type": "Article", "headline": "Camden County NJ Foreclosure Auction: Complete Buyer's Guide", "description": "Browse Camden County foreclosure listings. Learn the process, auction dates, and how to buy.", "url": "https://forclos.com/foreclosures/camden-county-nj", "publisher": {"@type": "Organization", "name": "Forclos", "url": "https://forclos.com"}, "mainEntityOfPage": {"@type": "WebPage", "@id": "https://forclos.com/foreclosures/camden-county-nj"}}]

export default function CamdenNjPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <NavBar />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/foreclosures/nj" className="hover:text-slate-300 transition-colors">New Jersey foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Camden County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Camden County NJ Foreclosure Auction: Complete Buyer&apos;s Guide
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 20, 2026 &middot; Forclos Editorial</p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-10">
          <strong>Important:</strong> Foreclosure law varies by jurisdiction and changes frequently. Consult a licensed real estate attorney before bidding. This guide is for informational purposes only.
        </div>

        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Slug:</strong> /foreclosures/camden-county-nj</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Target Keyword:</strong> camden county nj foreclosure auction</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Word Count Target:</strong> 1,600–2,100 words</p>
        <hr className="border-slate-700 my-8" />
        <p className="text-slate-300 leading-relaxed mb-4">If you are researching a Camden County NJ foreclosure auction, you are entering one of New Jersey&apos;s most active sheriff sale markets. Camden County conducts public foreclosure auctions twice a month, and hundreds of properties cycle through the system each year. This guide explains every step of the New Jersey judicial foreclosure process as it applies to Camden County, shows you how to find listings on the official Civil View portal, and outlines the exact deposit and settlement requirements before you bid.</p>
        <blockquote className="border-l-2 border-amber-500 pl-4 my-4 text-amber-200 text-sm"><strong className="text-white">Legal disclaimer:</strong> This page is for general informational purposes only and does not constitute legal or financial advice. Purchasing property at a sheriff&apos;s sale involves significant legal and financial risk. Consult a licensed New Jersey attorney who specializes in foreclosure law before bidding.</blockquote>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">How New Jersey Foreclosure Works: The 6-Step Judicial Process</h2>
        <p className="text-slate-300 leading-relaxed mb-4">New Jersey is a <strong className="text-white">judicial foreclosure state</strong>, meaning every residential mortgage foreclosure must proceed through the Superior Court before a property can be sold. Under <strong className="text-white">N.J. Court Rule R.4:64</strong> and the <strong className="text-white">Mortgage Foreclosure Act (N.J.S.A. 2A:50)</strong>, the process follows a defined sequence that typically takes 12–36 months from first default to sheriff sale.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 1 – Default and Notice of Intent to Foreclose</h3>
        <p className="text-slate-300 leading-relaxed mb-4">A foreclosure begins when a borrower falls behind on mortgage payments. Before the lender can file a lawsuit, <strong className="text-white">N.J.S.A. 2A:50-56</strong> requires the lender to send a written <strong className="text-white">Notice of Intent to Foreclose</strong> at least 30 days before filing. This notice must inform the borrower of the amount needed to cure the default and provide contact information for housing counseling resources. If the borrower pays the arrears within 30 days, the foreclosure is halted.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 2 – Foreclosure Complaint Filed in Superior Court</h3>
        <p className="text-slate-300 leading-relaxed mb-4">If the borrower does not cure, the lender files a <strong className="text-white">Foreclosure Complaint</strong> in the NJ Superior Court, Chancery Division. Under <strong className="text-white">R.4:64-1</strong>, the complaint must include a title search certification, identify all parties with a lien or interest in the property (including municipalities, the State of New Jersey, and the federal government), and attach the mortgage and note. All defendants are served with process and have the opportunity to file an answer.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 3 – Service of Process and Opportunity to Answer</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Each named defendant is formally served with the complaint. In contested cases, the case is managed by a Superior Court judge. In uncontested cases — the majority of residential foreclosures — the file is transferred to the <strong className="text-white">New Jersey Office of Foreclosure</strong>, a specialized unit within the Superior Court Clerk&apos;s Office that processes routine cases without requiring a courtroom appearance.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 4 – Final Judgment of Foreclosure</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Once the case is resolved (either by default or court order), the court enters a <strong className="text-white">Final Judgment of Foreclosure</strong>. The judgment sets the total amount owed — principal, accrued interest, attorney&apos;s fees, and any advances made by the lender — and directs the county sheriff to sell the property at public auction to satisfy the debt. The Final Judgment is the pivotal document in the Camden County NJ foreclosure auction process.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 5 – Writ of Execution and Sale Scheduling</h3>
        <p className="text-slate-300 leading-relaxed mb-4">After Final Judgment, the lender&apos;s attorney obtains a <strong className="text-white">Writ of Execution</strong> directing the Camden County Sheriff to proceed with the sale. The Sheriff&apos;s Civil Process Unit schedules the auction date, publishes a public notice in a local newspaper for at least four consecutive weeks, and posts the listing on the official <strong className="text-white">Civil View sales portal</strong> at <a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=1" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">salesweb.civilview.com</a>. Each listing is assigned a unique Sheriff number (e.g., FR-25000373) and includes plaintiff, defendant, and property address.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 6 – The Sheriff Sale and Post-Sale Period</h3>
        <p className="text-slate-300 leading-relaxed mb-4">The auction is conducted by the Camden County Sheriff at the date and time specified in the notice. The highest bidder must immediately meet all deposit requirements (detailed below). After the sale, there is a <strong className="text-white">10-day upset bid period</strong> under <strong className="text-white">NJ Court Rule R.4:65-2</strong> during which any interested party may submit a higher bid. If no upset bid is received, the Sheriff prepares the deed and delivers it to the purchaser approximately 30 days after the sale date.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">When and Where Camden County Foreclosure Auctions Are Held</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Camden County sheriff sales are conducted by the <strong className="text-white">Camden County Sheriff&apos;s Office, Civil Process Unit</strong>.</p>
        <div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-slate-700"><th className="text-left py-2 px-3 text-white font-semibold">Detail</th><th className="text-left py-2 px-3 text-white font-semibold">Information</th></tr></thead><tbody><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Frequency</strong></td><td className="py-2 px-3 text-slate-300">1st and 3rd Wednesday of each month (excluding holidays)</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Time</strong></td><td className="py-2 px-3 text-slate-300">12:00 PM (noon)</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Location</strong></td><td className="py-2 px-3 text-slate-300">Camden City Council Chambers, 520 Market Street, 2nd Floor – City Hall, Camden, NJ 08102</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Phone</strong></td><td className="py-2 px-3 text-slate-300">(856) 225-5531 or (856) 225-5551</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Online Listings</strong></td><td className="py-2 px-3 text-slate-300"><a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=1" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">salesweb.civilview.com – Camden County</a></td></tr></tbody></table></div>
        <p className="text-slate-300 leading-relaxed mb-4">Sales are posted at the Sheriff&apos;s Office (Room 200, City Hall) and updated online. Note that scheduled sales change frequently as cases are adjourned or settled — always verify the current status on the Civil View portal close to the auction date.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">How to Search Listings on Civil View</h2>
        <p className="text-slate-300 leading-relaxed mb-4">The <strong className="text-white">Civil View portal</strong> is the official online system used by Camden County to publish foreclosure sale listings. To search:</p>
        <ol className="space-y-2 mb-4 pl-4 list-decimal">
        <li className="text-slate-300">Navigate to <a href="https://salesweb.civilview.com/Sales/SalesSearch?countyId=1" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">salesweb.civilview.com/Sales/SalesSearch?countyId=1</a></li>
        <li className="text-slate-300">Filter by <strong className="text-white">Sales Date</strong>, <strong className="text-white">Status</strong> (Open or Sold/Cancelled), plaintiff name, defendant name, address, or municipality</li>
        <li className="text-slate-300">Click <strong className="text-white">View Details</strong> on any listing to see the Sheriff number, full legal description, and scheduled date</li>
        <li className="text-slate-300">Cross-reference the property address with county tax records and conduct a title search before bidding</li>
        </ol>
        <p className="text-slate-300 leading-relaxed mb-4">As of May 2026, there are over 218 active listings covering municipalities across Camden County including Camden City, Cherry Hill, Gloucester Township, Voorhees, Pennsauken, Haddonfield, and more.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Deposit Requirements and Cost Table</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Every Camden County NJ foreclosure auction purchase is subject to strict immediate payment requirements. Review these before attending any sale.</p>
        <div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-slate-700"><th className="text-left py-2 px-3 text-white font-semibold">Requirement</th><th className="text-left py-2 px-3 text-white font-semibold">Amount / Detail</th></tr></thead><tbody><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Deposit due at auction</strong></td><td className="py-2 px-3 text-slate-300">20% of the winning bid</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Maximum cash allowed</strong></td><td className="py-2 px-3 text-slate-300">$500 (remainder must be certified/treasurer&apos;s check)</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Accepted deposit forms</strong></td><td className="py-2 px-3 text-slate-300">Cash (up to $500), certified check, or treasurer&apos;s check</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Balance due</strong></td><td className="py-2 px-3 text-slate-300">Within 30 days of the auction date</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Deed delivery</strong></td><td className="py-2 px-3 text-slate-300">30 days from sale, Sheriff&apos;s Office Room 200, 520 Market St., Camden</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Deed delivery location</strong></td><td className="py-2 px-3 text-slate-300">Sheriff&apos;s Office, 520 Market Street, Room 200, Camden, NJ 08102</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Sheriff&apos;s fees</strong></td><td className="py-2 px-3 text-slate-300">Deducted from the struck-off purchase price</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300"><strong className="text-white">Superior liens</strong></td><td className="py-2 px-3 text-slate-300">Sale subject to first mortgage (if any) and municipal, state, or federal liens</td></tr></tbody></table></div>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Important:</strong> If you win a bid and fail to pay the 20% deposit immediately, the Sheriff may re-open bidding. If you fail to pay the 30-day balance, you forfeit your deposit and may be held liable for any deficiency if the property sells for less at a subsequent auction.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Right of Redemption in New Jersey</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Unlike some states, New Jersey does <strong className="text-white">not</strong> provide a post-sale statutory redemption period for mortgage foreclosures. Under <strong className="text-white">N.J.S.A. 2A:50-4</strong>, the former owner&apos;s equitable right of redemption is extinguished when the sheriff&apos;s sale is confirmed. This means once you receive a deed as the winning bidder, the prior owner generally cannot reclaim the property by paying off the debt after the fact.</p>
        <p className="text-slate-300 leading-relaxed mb-4">*Note:* Tax sale certificate foreclosures follow different rules and carry a <strong className="text-white">2-year redemption period</strong> under N.J.S.A. 54:5-54. The process described on this page applies to <strong className="text-white">mortgage foreclosures only</strong>.</p>
        <p className="text-slate-300 leading-relaxed mb-4">The 10-day upset bid window (R.4:65-2) is not a redemption right — it is an opportunity for any bidder (including the prior owner or a third party) to submit a higher offer before the sale is finalized.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">What Camden County Buyers Must Know Before Bidding</h2>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Properties Are Sold As-Is</h3>
        <p className="text-slate-300 leading-relaxed mb-4">The Camden County Sheriff&apos;s Office does not warrant the condition of any structure on the property. Prospective buyers cannot enter or inspect structures before the sale. You must conduct all due diligence — including drive-by inspection, title search, and review of any municipal code violations or tax liens — without physical access to the interior.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Title Search Is Essential</h3>
        <p className="text-slate-300 leading-relaxed mb-4">All Camden County NJ foreclosure auction sales are subject to any liens that survive the foreclosure, including certain municipal liens, IRS tax liens filed before the foreclosure complaint, and condominium/HOA arrears in some circumstances. A qualified NJ real estate attorney should conduct a title search before you bid.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Seek Legal Counsel</h3>
        <p className="text-slate-300 leading-relaxed mb-4">The Camden County Sheriff&apos;s Office recommends consulting an attorney who specializes in real estate foreclosure law before participating in any sale. The office is <strong className="text-white">not able to provide legal advice</strong> to prospective bidders.</p>
        <hr className="border-slate-700 my-8" />
        
        

        <section className="border-t border-slate-800 pt-8 mt-8">
          <p className="text-slate-500 text-xs">This page is for informational purposes only and does not constitute legal or financial advice. Always verify current requirements with official county and state sources.</p>
        </section>
      </main>
    </div>
  )
}
