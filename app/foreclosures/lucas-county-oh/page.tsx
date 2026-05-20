import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Lucas County Ohio Foreclosure Listings | Sheriff Sale Auction Guide',
  description: 'Browse Lucas County foreclosure listings. Learn the process, auction dates, and how to buy.',
  alternates: { canonical: 'https://forclos.com/foreclosures/lucas-county-oh' },
  openGraph: {
    title: 'Lucas County Ohio Foreclosure Listings | Sheriff Sale Auction Guide',
    description: 'Browse Lucas County foreclosure listings. Learn the process, auction dates, and how to buy.',
    url: 'https://forclos.com/foreclosures/lucas-county-oh',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas County Ohio Foreclosure Listings | Sheriff Sale Auction Guide',
    description: 'Browse Lucas County foreclosure listings. Learn the process, auction dates, and how to buy.',
  },
}

const schemaOrg = [{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I need an attorney to bid at a Lucas County foreclosure auction?", "acceptedAnswer": {"@type": "Answer", "text": "No \u2014 individuals can register and bid on their own at lucas.sheriffsaleauction.ohio.gov. However, consulting a real estate attorney before bidding is strongly advisable to review the court file for title issues, IRS liens, or other encumbrances."}}, {"@type": "Question", "name": "What happens if the winning bid is below two-thirds of the appraised value?", "acceptedAnswer": {"@type": "Answer", "text": "Ohio law (ORC \u00a72329.20) requires the sale price to equal at least two-thirds of the appraised value. If no qualifying bid is received, the property is not sold and may be rescheduled at a future auction."}}, {"@type": "Question", "name": "Can I inspect a Lucas County foreclosure property before bidding?", "acceptedAnswer": {"@type": "Answer", "text": "There is no legal right to inspect a foreclosure property before auction. Researching via the Lucas County Auditor's records and driving by the exterior is your best due diligence option."}}, {"@type": "Question", "name": "Are there liens on foreclosure properties I should know about?", "acceptedAnswer": {"@type": "Answer", "text": "Possibly. A sheriff's sale extinguishes the foreclosing mortgage but may not clear all liens. Federal IRS tax liens, for example, have a 120-day redemption period post-sale under 28 U.S.C. \u00a72410. Always order a title search before bidding."}}, {"@type": "Question", "name": "How do I find the appraised value for a Lucas County foreclosure auction?", "acceptedAnswer": {"@type": "Answer", "text": "The appraised value is listed in the case file at the Lucas County Clerk of Courts, published in the legal notice, and typically appears on the RealAuction property detail page at lucas.sheriffsaleauction.ohio.gov."}}]}]

export default function LucasOhPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <NavBar />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/foreclosures/oh" className="hover:text-slate-300 transition-colors">Ohio foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Lucas County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Lucas County Ohio Foreclosure Listings | Sheriff Sale Auction Guide
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 20, 2026 &middot; Forclos Editorial</p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-10">
          <strong>Important:</strong> Foreclosure law varies by jurisdiction and changes frequently. Consult a licensed real estate attorney before bidding. This guide is for informational purposes only.
        </div>

        <p className="text-slate-300 leading-relaxed mb-4">Lucas County runs one of northwestern Ohio&apos;s most active sheriff sale markets. Whether you&apos;re an investor hunting below-market properties or a first-time buyer looking to stretch your budget, understanding how Lucas County foreclosure auctions work — and where to find listings — is your first step toward a successful purchase.</p>
        <p className="text-slate-300 leading-relaxed mb-4">This guide covers everything: the official listing sources, the step-by-step auction process, deposit rules, costs, and what happens after you win.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">How Lucas County Foreclosure Auctions Work</h2>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Ohio Is a Judicial Foreclosure State</h3>
        <p className="text-slate-300 leading-relaxed mb-4">All foreclosures in Ohio proceed through the court system under Ohio Revised Code (ORC) Chapter 2329. A lender cannot foreclose without filing a lawsuit in Lucas County Common Pleas Court and obtaining a court decree. This judicial process takes <strong className="text-white">six months to two years</strong> from the first missed payment to the auction date.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step-by-Step Process</h3>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Step 1 — Default (Days 1–120)</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">After a borrower misses payments, most lenders wait approximately three months before filing. During this window, lenders attempt outreach and loss mitigation. If you receive a foreclosure complaint, you have <strong className="text-white">28 days</strong> to file a written answer with the court.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Step 2 — Court Filing (Days 120–180)</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">The lender files a foreclosure complaint in Lucas County Common Pleas Court. The borrower is served with the complaint. Failure to respond results in a default judgment for the lender.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Step 3 — Decree of Foreclosure</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">After the court issues judgment, it enters a Decree of Foreclosure ordering the property sold at sheriff&apos;s sale. The court also orders an independent property appraisal.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Step 4 — Appraisal &amp; Notice of Sale</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">The property is appraised by a court-appointed appraiser. Properties cannot sell for less than two-thirds of the appraised value at the initial auction. The sale is advertised in a local legal newspaper for three consecutive weeks.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Step 5 — Online Auction</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">Lucas County sheriff&apos;s sales are conducted <strong className="text-white">exclusively online</strong> through the Official Public Sheriff&apos;s Sale Website at <strong className="text-white">lucas.sheriffsaleauction.ohio.gov</strong>, operated by RealAuction. Effective March 12, 2026, this platform handles both mortgage foreclosure and tax foreclosure sales. Auctions open at <strong className="text-white">10:00 a.m.</strong> on the scheduled sale date.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Step 6 — Confirmation Hearing</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">After the auction, the court holds a confirmation hearing (typically 2–4 weeks later). The judge reviews the sale and may confirm or vacate it. Confirmed sales proceed to deed transfer.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Step 7 — Sheriff&apos;s Deed</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">Once confirmed, the court orders a sheriff&apos;s deed issued to the buyer under ORC §2329.36. The deed is recorded with the Lucas County Recorder&apos;s Office, and the buyer takes title.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Where to Find Lucas County Foreclosure Listings</h2>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">1. Official Auction Portal (Primary Source)</h3>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">https://lucas.sheriffsaleauction.ohio.gov/</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">This is the authoritative source for all upcoming Lucas County sheriff&apos;s sales. You can view active auctions, upcoming sale dates, property details, and register to bid — all in one place. Use this before any third-party site.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">2. Lucas County Foreclosure Search Tool</h3>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">https://lucapps.co.lucas.oh.us/foreclosure/</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">The county&apos;s own search tool lists scheduled sale dates for both non-tax and tax delinquent auctions. You can filter by sale date and view case-level details.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">3. Lucas County Sheriff&apos;s Office</h3>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">https://lucascountysheriff.org/resources/sheriffs-sales</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">The Sheriff&apos;s Office page provides policy updates, registration instructions, and links to the official auction platform. Check here for procedural notices and any changes to requirements.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">4. Lucas County Treasurer (Tax Sales)</h3>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">https://www.lucascountytreasurer.org/sheriff-sales</strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">Tax foreclosure sheriff&apos;s sales — for properties with severely delinquent property taxes — are also listed here. Note that tax sale bidders must submit a Delinquent Tax Affidavit under ORC §5721.19(J) (effective April 9, 2025).</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">5. Third-Party Aggregators</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Sites like Zillow, RealtyTrac, and Auction.com aggregate some Lucas County listings, but these are often incomplete or delayed. Always verify on the official portal before acting.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">How to Register and Bid</h2>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Registration</h3>
        <p className="text-slate-300 leading-relaxed mb-4">All prospective bidders must register at <strong className="text-white">lucas.sheriffsaleauction.ohio.gov</strong> before participating. Registration is free. You&apos;ll need to create an account, provide identity information, and link a payment method for your deposit.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Submitting Your Deposit</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Deposits are submitted via <strong className="text-white">Wire Transfer or ACH Debit</strong> directly through the RealAuction platform prior to bidding. You must have your deposit on file before you can place any bid. The deposit amount is determined by court order, but under ORC §2329.211, the standard is typically <strong className="text-white">$5,000 or 5% of the property&apos;s appraised value</strong>, whichever is greater.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Bidding</h3>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300">Auctions go live at 10:00 a.m. on the scheduled sale date</li>
        <li className="text-slate-300">You bid online in real time from any device</li>
        <li className="text-slate-300">The highest bidder wins, subject to the two-thirds minimum (of appraised value)</li>
        <li className="text-slate-300">If no qualifying bid is received, the property may be relisted at a future sale</li>
        </ul>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Winning the Auction</h3>
        <p className="text-slate-300 leading-relaxed mb-4">After winning, you wait for the court&apos;s confirmation hearing. Do not make any arrangements regarding the property until the sale is confirmed — the court can reject a sale if procedural issues arise.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Costs and Fees</h2>
        <div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-slate-700"><th className="text-left py-2 px-3 text-white font-semibold">Cost Item</th><th className="text-left py-2 px-3 text-white font-semibold">Amount/Notes</th></tr></thead><tbody><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Deposit</td><td className="py-2 px-3 text-slate-300">$5,000 or ~5% of appraised value (via ACH/Wire)</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Full balance due</td><td className="py-2 px-3 text-slate-300">Within 30 days of court confirmation</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Transfer tax</td><td className="py-2 px-3 text-slate-300">Varies; Lucas County conveyance fee applies</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Recording fee</td><td className="py-2 px-3 text-slate-300">Lucas County Recorder&apos;s Office fee</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Deed preparation</td><td className="py-2 px-3 text-slate-300">Included in sheriff sale process</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Title insurance</td><td className="py-2 px-3 text-slate-300">Highly recommended; not required but strongly advised</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Back taxes</td><td className="py-2 px-3 text-slate-300">Buyer assumes any unpaid property taxes not covered by sale proceeds</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Property condition</td><td className="py-2 px-3 text-slate-300">Sold <strong className="text-white">as-is, where-is</strong> — no inspections or contingencies</td></tr></tbody></table></div>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Important:</strong> If you fail to complete payment within 30 days of confirmation, your deposit is forfeited and the property may be re-auctioned. Budget carefully before bidding.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Post-Sale Rights</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Ohio law does not provide a post-sale right of redemption after the court confirms the sale. Under ORC §2329.33, the former owner may redeem the property (pay off the debt) <strong className="text-white">only before</strong> the court confirms the auction — not after. Once the judge signs the confirmation entry, the sale is final.</p>
        <p className="text-slate-300 leading-relaxed mb-4">If the former owner or tenants remain in the property after confirmation, the new owner (you) may seek a <strong className="text-white">writ of possession</strong> through the court to compel vacating. This is a separate legal proceeding and timelines vary.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Always perform due diligence before bidding: verify lien status at the Lucas County Recorder&apos;s Office, check tax status with the Treasurer&apos;s Office, and consult a title company about any title risks.</p>
        <hr className="border-slate-700 my-8" />
        
        

        <section className="border-t border-slate-800 pt-8 mt-8">
          <p className="text-slate-500 text-xs">This page is for informational purposes only and does not constitute legal or financial advice. Always verify current requirements with official county and state sources.</p>
        </section>
      </main>
    </div>
  )
}
