import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Westchester County Foreclosure Listings: NY Judicial Process Guide',
  description: 'Browse Westchester County foreclosure listings. Learn the process, auction dates, and how to buy.',
  alternates: { canonical: 'https://forclos.com/foreclosures/westchester-county-ny' },
  openGraph: {
    title: 'Westchester County Foreclosure Listings: NY Judicial Process Guide',
    description: 'Browse Westchester County foreclosure listings. Learn the process, auction dates, and how to buy.',
    url: 'https://forclos.com/foreclosures/westchester-county-ny',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Westchester County Foreclosure Listings: NY Judicial Process Guide',
    description: 'Browse Westchester County foreclosure listings. Learn the process, auction dates, and how to buy.',
  },
}

const schemaOrg = [{"@context": "https://schema.org", "@type": "Article", "headline": "Westchester County Foreclosure Listings: NY Judicial Process Guide", "description": "Browse Westchester County foreclosure listings. Learn the process, auction dates, and how to buy.", "url": "https://forclos.com/foreclosures/westchester-county-ny", "publisher": {"@type": "Organization", "name": "Forclos", "url": "https://forclos.com"}, "mainEntityOfPage": {"@type": "WebPage", "@id": "https://forclos.com/foreclosures/westchester-county-ny"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How long does foreclosure take in Westchester County, NY?", "acceptedAnswer": {"@type": "Answer", "text": "The typical timeline for a Westchester County judicial foreclosure is 18 to 36 months from the initial filing to the referee auction, though complex cases involving contested litigation, multiple settlement conferences, or title issues can extend beyond three years. New York's mandatory settlement conference requirement (CPLR \u00a73408) and the court's active docket management both influence the timeline."}}, {"@type": "Question", "name": "Can a Westchester homeowner stop a foreclosure after a judgment is entered?", "acceptedAnswer": {"@type": "Answer", "text": "Yes \u2014 up until the moment of the actual auction sale. Under RPAPL \u00a71341, a borrower may redeem the property (pay off the full debt plus costs) any time before the Referee's hammer falls. This is called the equity of redemption. After the sale is confirmed, the equity of redemption is extinguished and there is no post-sale right of redemption under New York law."}}, {"@type": "Question", "name": "What deposit do buyers need at a Westchester County foreclosure auction?", "acceptedAnswer": {"@type": "Answer", "text": "Buyers typically must bring a certified check or bank check equal to 10% of their bid amount, made payable to the court-appointed Referee. Personal checks, cash, and credit cards are generally not accepted. The balance of the purchase price is due within 30 days of the auction date, or as otherwise directed by the Referee."}}, {"@type": "Question", "name": "What happens to surplus funds after a Westchester foreclosure auction?", "acceptedAnswer": {"@type": "Answer", "text": "If the auction price exceeds the total mortgage debt, costs, and fees, the surplus belongs first to junior lienholders (in priority order) and then to the former property owner. Pursuant to CPLR \u00a72601, surplus funds are deposited with the Westchester County Commissioner of Finance and held in trust with interest until a court order directs their release. The former owner or any junior lienholder must file a motion in the Supreme Court to claim surplus funds."}}, {"@type": "Question", "name": "Is there a right of first refusal or redemption period after a NY foreclosure sale?", "acceptedAnswer": {"@type": "Answer", "text": "No. New York does not provide a statutory post-sale redemption period for residential mortgage foreclosures. Once the property is sold at the Referee's auction and the sale is confirmed by the court, the former owner's right to reclaim the property is permanently extinguished. This is a significant difference from some other states that allow post-sale redemption windows."}}]}]

export default function WestchesterNyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <NavBar />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/foreclosures/ny" className="hover:text-slate-300 transition-colors">New York foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Westchester County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Westchester County Foreclosure Listings: NY Judicial Process Guide
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 20, 2026 &middot; Forclos Editorial</p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-10">
          <strong>Important:</strong> Foreclosure law varies by jurisdiction and changes frequently. Consult a licensed real estate attorney before bidding. This guide is for informational purposes only.
        </div>

        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Meta Title:</strong> Westchester County Foreclosure Listings | NY Judicial Process Guide</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Meta Description:</strong> Browse Westchester County foreclosure listings and learn the full New York judicial foreclosure process — from lis pendens through referee auction to surplus funds. Official sources only.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Target Keyword:</strong> westchester county foreclosure listings</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Word Count Target:</strong> 1,600–2,100 words</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">YMYL:</strong> Yes — real estate/legal/financial content</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Westchester County Foreclosure Listings: A Complete Guide to New York&apos;s Judicial Process</h2>
        <p className="text-slate-300 leading-relaxed mb-4">If you&apos;re searching for <strong className="text-white">Westchester County foreclosure listings</strong>, you&apos;re entering one of the most regulated real estate markets in New York State. Westchester County, a suburban county of roughly one million residents bordering New York City to the north, handles all residential mortgage foreclosures through the New York Supreme Court — a fully judicial process governed by the Real Property Actions and Proceedings Law (RPAPL) Article 13. Whether you&apos;re a buyer seeking auction opportunities, a homeowner facing default, or an investor researching distressed properties, understanding how Westchester County&apos;s foreclosure pipeline works is essential before taking any action.</p>
        <p className="text-slate-300 leading-relaxed mb-4">This guide draws exclusively from official sources: the Westchester County Clerk&apos;s office (westchesterclerkny.gov), the New York State Unified Court System (nycourts.gov), the NY Department of Financial Services (dfs.ny.gov), the Westchester County Department of Finance, and the governing statutes of New York State.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Why New York Foreclosure Is Different</h2>
        <p className="text-slate-300 leading-relaxed mb-4">New York is a <strong className="text-white">judicial foreclosure state</strong>. Unlike non-judicial states where lenders can sell a property through a private trustee process in a matter of months, every foreclosure in Westchester County must go through the New York Supreme Court. This means:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300">A lender must file a lawsuit and serve the borrower.</li>
        <li className="text-slate-300">A judge oversees the entire case.</li>
        <li className="text-slate-300">Homeowners have multiple court-enforced opportunities to negotiate or cure the default.</li>
        <li className="text-slate-300">The process can take <strong className="text-white">18 to 36 months</strong> — sometimes longer — from initial filing to public auction.</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4">This longer timeline creates a larger pool of <strong className="text-white">westchester county foreclosure listings</strong> at various stages of the pipeline at any given time, from early lis pendens filings to properties actively scheduled for referee auction.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">The 6-Step Westchester County Judicial Foreclosure Process</h2>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 1: Default and Mandatory 90-Day Pre-Foreclosure Notice</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Before any court action can begin, New York law requires the lender to send the borrower a <strong className="text-white">90-day pre-foreclosure notice</strong> (RPAPL §1304). This notice must be sent by both registered mail and first-class mail to the borrower at the property address and any other known address. The notice must include a list of at least five housing counseling organizations in New York.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Simultaneously, lenders typically file a <strong className="text-white">Notice of Pendency (lis pendens)</strong> with the Westchester County Clerk (Thomas M. Roach). The lis pendens is a public record that clouds the property&apos;s title, alerting any potential buyer or lender that litigation is pending. Lis pendens filings are searchable through the Westchester County Clerk&apos;s online court records portal at westchesterclerkny.gov. Tracking new lis pendens filings is one of the earliest ways to identify properties entering the <strong className="text-white">westchester county foreclosure listings</strong> pipeline.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 2: Summons, Complaint, and Filing with NY Supreme Court</h3>
        <p className="text-slate-300 leading-relaxed mb-4">After the 90-day period, the lender files a <strong className="text-white">Summons and Complaint</strong> in the New York Supreme Court, Westchester County (located at 111 Dr. Martin Luther King Jr. Blvd., White Plains, NY 10601). The case is assigned an index number and entered into the NY State Courts Electronic Filing System (NYSCEF), which Westchester uses for foreclosure actions.</p>
        <p className="text-slate-300 leading-relaxed mb-4">The complaint must name all parties with an interest in the property, including the borrower(s), any co-mortgagors, junior lienholders (second mortgages, home equity lines, mechanics&apos; liens), and tenants of record. Defendants generally have <strong className="text-white">20 to 30 days</strong> after service to file an answer with the court.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 3: Mandatory Foreclosure Settlement Conference (CPLR §3408)</h3>
        <p className="text-slate-300 leading-relaxed mb-4">This step is unique to New York and critical for homeowners. For any <strong className="text-white">owner-occupied residential property</strong>, New York&apos;s Civil Practice Law and Rules §3408 mandates an automatic <strong className="text-white">foreclosure settlement conference</strong> before the case can proceed to judgment.</p>
        <p className="text-slate-300 leading-relaxed mb-4">The Westchester Supreme Court maintains a dedicated <strong className="text-white">Foreclosure Settlement Conference Part</strong> for this purpose. The court mails both parties a conference date — typically within the first two months after the plaintiff files proof of service. Both lender and borrower must appear and negotiate <strong className="text-white">in good faith</strong> toward a resolution, which may include:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300"><strong className="text-white">Loan modification</strong> (reducing interest rate, extending term, capitalizing arrears)</li>
        <li className="text-slate-300"><strong className="text-white">Repayment plan</strong> (catching up on missed payments over time)</li>
        <li className="text-slate-300"><strong className="text-white">Short sale or deed-in-lieu of foreclosure</strong></li>
        <li className="text-slate-300"><strong className="text-white">Forbearance agreement</strong></li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4">The NY Department of Financial Services (DFS) monitors lender compliance with good-faith negotiation requirements. If a settlement is reached, the foreclosure action may be discontinued or placed in abeyance. If not, the court issues a certificate releasing the case from the settlement conference part, allowing it to proceed to judgment.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">For homeowners:</strong> Free or low-cost legal assistance may be available through local legal aid organizations. Westchester County urges residents at risk of foreclosure to contact a HUD-approved housing counseling agency before missing conference dates.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 4: Judgment of Foreclosure and Sale (RPAPL §1351)</h3>
        <p className="text-slate-300 leading-relaxed mb-4">If no resolution is reached at the settlement conference stage, the lender moves for a <strong className="text-white">Judgment of Foreclosure and Sale</strong>. Under RPAPL §1351, the court&apos;s judgment directs that the mortgaged property — or enough of it to satisfy the mortgage debt, interest, and costs — be sold at public auction.</p>
        <p className="text-slate-300 leading-relaxed mb-4">The court appoints a <strong className="text-white">Referee</strong> to conduct the sale. The Referee is an attorney or other qualified individual authorized to receive bids, take the deposit, issue a Referee&apos;s Deed, and distribute proceeds.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Critical homeowner right:</strong> Under RPAPL §1341, the borrower retains the <strong className="text-white">equity of redemption</strong> — the legal right to pay off the entire mortgage debt plus accrued interest, costs, and fees — up until the actual moment the foreclosure sale is conducted. Once the gavel falls at auction, this right is permanently extinguished. There is <strong className="text-white">no statutory post-sale right of redemption</strong> in New York.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 5: Referee Auction — Public Sale</h3>
        <p className="text-slate-300 leading-relaxed mb-4">The Referee publishes a <strong className="text-white">Notice of Sale</strong> in a court-designated newspaper for four consecutive weeks before the sale date. Notices are also filed with the Westchester County Clerk and appear in the public record.</p>
        <p className="text-slate-300 leading-relaxed mb-4">The auction is typically held at the Westchester County Courthouse in White Plains. Key buyer requirements:</p>
        <div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-slate-700"><th className="text-left py-2 px-3 text-white font-semibold">Item</th><th className="text-left py-2 px-3 text-white font-semibold">Requirement</th></tr></thead><tbody><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Deposit at auction</td><td className="py-2 px-3 text-slate-300">10% of bid price (certified or bank check)</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Payable to</td><td className="py-2 px-3 text-slate-300">The court-appointed Referee</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Closing deadline</td><td className="py-2 px-3 text-slate-300">Balance due within 30 days of sale (or as directed)</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Title conveyed</td><td className="py-2 px-3 text-slate-300">Referee&apos;s Deed — extinguishes subordinate liens</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Publication requirement</td><td className="py-2 px-3 text-slate-300">4 consecutive weeks in designated newspaper</td></tr></tbody></table></div>
        <p className="text-slate-300 leading-relaxed mb-4">Buyers at Westchester County foreclosure auctions should conduct thorough due diligence before bidding. Properties are sold <strong className="text-white">as-is</strong> with no representations or warranties by the Referee or lender. Outstanding property taxes are the buyer&apos;s responsibility. Title insurance is strongly recommended.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 6: Distribution of Proceeds and Surplus Funds (RPAPL §1354)</h3>
        <p className="text-slate-300 leading-relaxed mb-4">After the sale, the Referee distributes proceeds in the following priority order under RPAPL §1354:</p>
        <ol className="space-y-2 mb-4 pl-4 list-decimal">
        <li className="text-slate-300"><strong className="text-white">Expenses of sale</strong> (Referee fees, publication costs, etc.)</li>
        <li className="text-slate-300"><strong className="text-white">Plaintiff&apos;s judgment</strong> (mortgage principal, interest, attorneys&apos; fees, costs)</li>
        <li className="text-slate-300"><strong className="text-white">Junior lienholders</strong> (second mortgages, mechanics&apos; liens, etc.) in order of priority</li>
        <li className="text-slate-300"><strong className="text-white">Former owner</strong> — any remaining surplus</li>
        </ol>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Surplus funds</strong> are a critical and often overlooked aspect of Westchester County foreclosure listings. If the auction price exceeds the total debt plus costs, the <strong className="text-white">former homeowner is entitled to the surplus</strong>. Under CPLR §2601, all court-ordered funds — including foreclosure auction surplus — are deposited with and held by the <strong className="text-white">Westchester County Commissioner of Finance</strong> (finance.westchestercountyny.gov). The funds are held in trust and earn interest until released by court order. Former owners or junior lienholders must file a motion with the court to obtain their share.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Costs and Fees Reference Table</h2>
        <div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-slate-700"><th className="text-left py-2 px-3 text-white font-semibold">Fee/Cost</th><th className="text-left py-2 px-3 text-white font-semibold">Typical Amount</th></tr></thead><tbody><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Lis pendens filing (County Clerk)</td><td className="py-2 px-3 text-slate-300">~$30–$45</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Court index number / filing fee</td><td className="py-2 px-3 text-slate-300">~$210</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Service of process</td><td className="py-2 px-3 text-slate-300">$50–$200+</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Referee fee at auction</td><td className="py-2 px-3 text-slate-300">$350–$750+ (court-regulated)</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Sale publication (4 weeks)</td><td className="py-2 px-3 text-slate-300">$200–$600</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Buyer&apos;s deposit at auction</td><td className="py-2 px-3 text-slate-300">10% of bid (certified check)</td></tr><tr className="border-b border-slate-800"><td className="py-2 px-3 text-slate-300">Balance due after sale</td><td className="py-2 px-3 text-slate-300">Within 30 days of auction</td></tr></tbody></table></div>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">How to Find Westchester County Foreclosure Listings</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Official channels for locating active <strong className="text-white">westchester county foreclosure listings</strong> include:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300"><strong className="text-white">Westchester County Clerk</strong> (westchesterclerkny.gov) — Search court records for lis pendens filings, judgments of foreclosure, and notices of sale.</li>
        <li className="text-slate-300"><strong className="text-white">NYSCEF</strong> (iapps.courts.state.ny.us) — NY&apos;s electronic filing system for Supreme Court cases, including active Westchester foreclosure actions.</li>
        <li className="text-slate-300"><strong className="text-white">Westchester Supreme Court Foreclosure Part</strong> — The court publishes calendars for settlement conferences and active foreclosure cases.</li>
        <li className="text-slate-300"><strong className="text-white">Designated newspapers</strong> — Notices of sale are published in county-designated newspapers four weeks before each auction.</li>
        </ul>
        <hr className="border-slate-700 my-8" />
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">How long does foreclosure take in Westchester County, NY?</p>
              <p className="text-slate-400 text-sm">The typical timeline for a Westchester County judicial foreclosure is 18 to 36 months from the initial filing to the referee auction, though complex cases involving contested litigation, multiple settlement conferences, or title issues can extend beyond three years. New York&apos;s mandatory settlement conference requirement (CPLR §3408) and the court&apos;s active docket management both influence the timeline.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Can a Westchester homeowner stop a foreclosure after a judgment is entered?</p>
              <p className="text-slate-400 text-sm">Yes — up until the moment of the actual auction sale. Under RPAPL §1341, a borrower may redeem the property (pay off the full debt plus costs) any time before the Referee&apos;s hammer falls. This is called the equity of redemption. After the sale is confirmed, the equity of redemption is extinguished and there is no post-sale right of redemption under New York law.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">What deposit do buyers need at a Westchester County foreclosure auction?</p>
              <p className="text-slate-400 text-sm">Buyers typically must bring a certified check or bank check equal to 10% of their bid amount, made payable to the court-appointed Referee. Personal checks, cash, and credit cards are generally not accepted. The balance of the purchase price is due within 30 days of the auction date, or as otherwise directed by the Referee.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">What happens to surplus funds after a Westchester foreclosure auction?</p>
              <p className="text-slate-400 text-sm">If the auction price exceeds the total mortgage debt, costs, and fees, the surplus belongs first to junior lienholders (in priority order) and then to the former property owner. Pursuant to CPLR §2601, surplus funds are deposited with the Westchester County Commissioner of Finance and held in trust with interest until a court order directs their release. The former owner or any junior lienholder must file a motion in the Supreme Court to claim surplus funds.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Is there a right of first refusal or redemption period after a NY foreclosure sale?</p>
              <p className="text-slate-400 text-sm">No. New York does not provide a statutory post-sale redemption period for residential mortgage foreclosures. Once the property is sold at the Referee&apos;s auction and the sale is confirmed by the court, the former owner&apos;s right to reclaim the property is permanently extinguished. This is a significant difference from some other states that allow post-sale redemption windows.</p>
            </div>
          </div>
        </section>
        

        <section className="border-t border-slate-800 pt-8 mt-8">
          <p className="text-slate-500 text-xs">This page is for informational purposes only and does not constitute legal or financial advice. Always verify current requirements with official county and state sources.</p>
        </section>
      </main>
    </div>
  )
}
