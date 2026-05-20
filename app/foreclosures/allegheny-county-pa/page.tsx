import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Allegheny County Foreclosure Listings: Complete Buyer\'s Guide to PA Sheriff Sales',
  description: 'Browse Allegheny County foreclosure listings. Learn the process, auction dates, and how to buy.',
  alternates: { canonical: 'https://forclos.com/foreclosures/allegheny-county-pa' },
  openGraph: {
    title: 'Allegheny County Foreclosure Listings: Complete Buyer\'s Guide to PA Sheriff Sales',
    description: 'Browse Allegheny County foreclosure listings. Learn the process, auction dates, and how to buy.',
    url: 'https://forclos.com/foreclosures/allegheny-county-pa',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allegheny County Foreclosure Listings: Complete Buyer\'s Guide to PA Sheriff Sales',
    description: 'Browse Allegheny County foreclosure listings. Learn the process, auction dates, and how to buy.',
  },
}

const schemaOrg = [{"@context": "https://schema.org", "@type": "Article", "headline": "Allegheny County Foreclosure Listings: Complete Buyer's Guide to PA Sheriff Sales", "description": "Browse Allegheny County foreclosure listings. Learn the process, auction dates, and how to buy.", "url": "https://forclos.com/foreclosures/allegheny-county-pa", "publisher": {"@type": "Organization", "name": "Forclos", "url": "https://forclos.com"}, "mainEntityOfPage": {"@type": "WebPage", "@id": "https://forclos.com/foreclosures/allegheny-county-pa"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How often does Allegheny County hold sheriff sales?", "acceptedAnswer": {"@type": "Answer", "text": "Monthly \u2014 the first Monday of each month. When a holiday falls on Monday, the sale is held on Tuesday. The Sheriff's Office publishes a full calendar at sheriffalleghenycounty.com."}}, {"@type": "Question", "name": "Can I inspect a property before bidding?", "acceptedAnswer": {"@type": "Answer", "text": "The Sheriff's Office does not arrange property inspections. You can conduct an exterior drive-by and review county property records, but interior access typically requires the property owner's consent. Bid with that uncertainty priced into your offer."}}, {"@type": "Question", "name": "Are there redemption rights in Pennsylvania after a sheriff sale?", "acceptedAnswer": {"@type": "Answer", "text": "Pennsylvania does not provide a statutory post-sale right of redemption for mortgage foreclosures (unlike some states). Once the Sheriff's Deed is issued and the sale is confirmed, the prior owner generally cannot redeem the property."}}, {"@type": "Question", "name": "What happens if the opening bid exceeds the property's market value?", "acceptedAnswer": {"@type": "Answer", "text": "If no third-party bids exceed the plaintiff's opening bid, the foreclosing lender takes title to the property. These bank-owned (REO) properties may later appear on the market through traditional listing channels."}}, {"@type": "Question", "name": "Who handles Pittsburgh City property tax sales separately?", "acceptedAnswer": {"@type": "Answer", "text": "The City of Pittsburgh Treasurer's Office manages sales for City of Pittsburgh and Pittsburgh School District tax delinquencies. Contact them directly at 412-255-2300."}}]}]

export default function AlleghenyPaPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <NavBar />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/foreclosures/pa" className="hover:text-slate-300 transition-colors">Pennsylvania foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Allegheny County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Allegheny County Foreclosure Listings: Complete Buyer&apos;s Guide to PA Sheriff Sales
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 20, 2026 &middot; Forclos Editorial</p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-10">
          <strong>Important:</strong> Foreclosure law varies by jurisdiction and changes frequently. Consult a licensed real estate attorney before bidding. This guide is for informational purposes only.
        </div>

        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Meta Title:</strong> Allegheny County Foreclosure Listings | Sheriff Sales Guide 2025</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Meta Description:</strong> Browse Allegheny County foreclosure listings and learn how Pennsylvania&apos;s judicial process works — from Act 6 notices to virtual sheriff sales in Pittsburgh. Step-by-step bidding guide included.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Slug:</strong> /foreclosures/allegheny-county-pa</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Target Keyword:</strong> allegheny county foreclosure listings</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Word Count:</strong> ~1,800</p>
        <hr className="border-slate-700 my-8" />
        <p className="text-slate-300 leading-relaxed mb-4">Allegheny County foreclosure listings draw buyers from across western Pennsylvania — and for good reason. With a median home price around $252,000 and an active sheriff sale calendar running every month, the Pittsburgh metro offers real purchasing opportunities for investors and owner-occupants alike. But buying a foreclosure here is nothing like buying a traditional home. Pennsylvania&apos;s judicial foreclosure process, the county&apos;s virtual bidding system, and strict payment deadlines all require preparation before you raise your virtual hand at a sale.</p>
        <p className="text-slate-300 leading-relaxed mb-4">This guide walks you through everything you need to know: where to find current Allegheny County foreclosure listings, how the Pennsylvania foreclosure process unfolds step by step, exactly how bidding and payment work at the Allegheny County Sheriff&apos;s Sale, and how to protect yourself before putting down a single dollar.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">What Is the Allegheny County Sheriff&apos;s Sale?</h2>
        <p className="text-slate-300 leading-relaxed mb-4">The Allegheny County Sheriff&apos;s Sale is the public auction where foreclosed properties are sold to satisfy unpaid mortgage judgments and delinquent property taxes. The Allegheny County Sheriff&apos;s Office — currently led by Sheriff Kevin M. Kraus — administers these sales under Pennsylvania law.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Sales are held <strong className="text-white">on the first Monday of every month</strong> (Tuesday if a holiday). Since August 2020, all Allegheny County sheriff sales have been conducted <strong className="text-white">virtually via Microsoft Teams</strong>, meaning you can participate from anywhere without appearing in person.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Two categories of property appear on the sheriff sale list:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300"><strong className="text-white">Mortgage foreclosures</strong> — properties where a lender has obtained a court judgment after a borrower defaulted</li>
        <li className="text-slate-300"><strong className="text-white">Tax delinquent properties</strong> — properties sold by the county, local municipality, or school district for unpaid real estate taxes</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4">The City of Pittsburgh Treasurer&apos;s Office (412-255-2300) runs a separate sale for City of Pittsburgh and school district tax delinquencies; those properties do not appear on the sheriff&apos;s list.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Where to Find Allegheny County Foreclosure Listings</h2>
        <p className="text-slate-300 leading-relaxed mb-4">The <strong className="text-white">official source</strong> for all Allegheny County foreclosure listings is the Allegheny County Sheriff&apos;s Office website:</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white"><a href="https://sheriffalleghenycounty.com/real-estate/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">sheriffalleghenycounty.com/real-estate</a></strong></p>
        <p className="text-slate-300 leading-relaxed mb-4">From there you can access:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300">Current sale lists (properties scheduled for upcoming monthly sales)</li>
        <li className="text-slate-300">Postponement notices</li>
        <li className="text-slate-300">Bid lists</li>
        <li className="text-slate-300">Past sale results</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mb-4">Properties are advertised publicly in the <strong className="text-white">New Pittsburgh Courier</strong> (the last three Wednesdays before each sale) and the <strong className="text-white">Pittsburgh Legal Journal</strong> (the last three Fridays before each sale). If you want to track listings before they appear on the sheriff&apos;s website, monitoring these publications gives you an early look.</p>
        <p className="text-slate-300 leading-relaxed mb-4">To inquire about a specific property, call the Sheriff&apos;s Office during regular business hours. Have the property address, sale number, or owner name ready — properties are not indexed by lot and block number.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">How Pennsylvania&apos;s Judicial Foreclosure Process Works</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Pennsylvania is a <strong className="text-white">judicial foreclosure state</strong>, which means every foreclosure must proceed through the court system. There are no non-judicial "power of sale" shortcuts here. The process typically takes <strong className="text-white">six months to a year</strong> from the first missed payment to the actual sheriff sale. Here&apos;s the sequence:</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 1 — Pre-Foreclosure Notices (Act 6 and Act 91)</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Before a lender can file a foreclosure complaint, Pennsylvania law requires two specific notices be sent to the homeowner:</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Act 6 — Notice of Intention to Foreclose:</strong> Required for most loans under $50,000. Sent by certified or registered mail to the property address and the borrower&apos;s last known mailing address.</p>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Act 91 — Homeowner&apos;s Emergency Mortgage Assistance Notice (HEMAP):</strong> Required for VA and conventional loans over $50,000. Sent by regular mail with certificate of mailing. This notice informs the homeowner about Pennsylvania&apos;s HEMAP program, which can provide emergency mortgage assistance — a genuine opportunity to halt foreclosure before it advances.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 2 — Complaint Filed and Served</h3>
        <p className="text-slate-300 leading-relaxed mb-4">After notices are sent, the lender orders a title search (typically 10–20 business days) and then files a foreclosure complaint in the Court of Common Pleas. The Sheriff has <strong className="text-white">30 days</strong> to serve the complaint on the defendant; service usually happens within 20 days of filing.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 3 — Defendant&apos;s Response Window</h3>
        <p className="text-slate-300 leading-relaxed mb-4">After being served, the defendant has <strong className="text-white">20 days</strong> to file a response — either preliminary objections or an answer to the complaint. This is the last opportunity to raise legal defenses, dispute the amount owed, or negotiate directly with the lender.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 4 — 10-Day Notice and Default Judgment</h3>
        <p className="text-slate-300 leading-relaxed mb-4">If the defendant does not respond, the plaintiff must send a <strong className="text-white">10-Day Notice</strong> — a formal warning that judgment will be entered unless the defendant acts within 10 days. If no action is taken, the court enters a <strong className="text-white">judgment for mortgage foreclosure</strong>.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 5 — Writ of Execution and Sheriff&apos;s Sale Scheduling</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Once judgment is entered, a Writ of Execution is issued and the property is placed on the sheriff sale calendar. All lien holders — including junior mortgage holders and tax authorities — must be notified by mail <strong className="text-white">at least 30 days before the sale date</strong>. The defendant must also receive personal notice of the sale at least 30 days prior.</p>
        <p className="text-slate-300 leading-relaxed mb-4">From the time the Writ is filed to the actual sale date, expect <strong className="text-white">2 to 4 months</strong>.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 6 — Sheriff&apos;s Sale</h3>
        <p className="text-slate-300 leading-relaxed mb-4">The property is auctioned at the monthly virtual sale. Opening bids are typically set by the plaintiff&apos;s attorney and usually represent the total of outstanding judgment, accrued taxes, and fees to bring the property to sale. A typical opening bid might be $32,000 in judgment + $1,200 in fees + applicable taxes.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 7 — Post-Sale and Sheriff&apos;s Deed</h3>
        <p className="text-slate-300 leading-relaxed mb-4">The winning bidder has <strong className="text-white">30 days</strong> to complete payment to the Sheriff, or the sale can be declared null and void. Once all payments are received, the Sheriff prepares a <strong className="text-white">Sheriff&apos;s Deed</strong> transferring title. The Sheriff then distributes the collected funds to recorded lien holders in priority order.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Step 8 — Ejectment (If Occupied)</h3>
        <p className="text-slate-300 leading-relaxed mb-4">If the prior owner or occupants refuse to vacate, the new owner may need to pursue ejectment proceedings. After a Writ of Possession is served, occupants have <strong className="text-white">20 days</strong> to leave. If they don&apos;t, the Sheriff schedules a lockout, usually 30 to 90 days after judgment.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">How to Bid at an Allegheny County Sheriff Sale</h2>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Register Before the Sale</h3>
        <p className="text-slate-300 leading-relaxed mb-4">You cannot walk into (or log into) a Allegheny County sheriff sale and start bidding. You must first obtain a <strong className="text-white">Bidder Registration Number</strong> through the Sheriff&apos;s virtual sale portal. Registration closes before each monthly sale date — check the current deadline at <a href="https://sheriffalleghenycounty.com/virtual-sheriffs-sale/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">sheriffalleghenycounty.com/virtual-sheriffs-sale</a>.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Attend Virtually (Microsoft Teams)</h3>
        <p className="text-slate-300 leading-relaxed mb-4">Sales are conducted virtually via Microsoft Teams. Once registered, you&apos;ll receive access credentials or join instructions. The sale proceeds property by property; you&apos;ll bid in real time against other registered participants.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Deposit and Payment Schedule</h3>
        <p className="text-slate-300 leading-relaxed mb-4">If you are the winning bidder, payment is due on a strict two-step schedule:</p>
        <ol className="space-y-2 mb-4 pl-4 list-decimal">
        <li className="text-slate-300"><strong className="text-white">Day after the sale:</strong> Bring <strong className="text-white">10% of your winning bid price</strong></li>
        <li className="text-slate-300"><strong className="text-white">The following Monday, before 10:00 AM:</strong> Pay the remaining balance in full</li>
        </ol>
        <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Accepted payment methods:</strong> Cash, cashier&apos;s checks, or money orders — all made payable to the <strong className="text-white">Treasurer of Allegheny County</strong>. Personal checks are not accepted under any circumstances.</p>
        <p className="text-slate-300 leading-relaxed mb-4">If you win a bid and fail to complete payment, your deposit is forfeited and the property is relisted as a <strong className="text-white">Forfeiture Sale</strong>.</p>
        <h3 className="text-lg font-semibold text-white mb-2 mt-6">Do Your Due Diligence First</h3>
        <p className="text-slate-300 leading-relaxed mb-4">The Sheriff&apos;s Office bears no responsibility for the condition or title status of properties sold. That means:</p>
        <ul className="space-y-2 mb-4 pl-4 list-disc">
        <li className="text-slate-300"><strong className="text-white">Run your own title search</strong> — junior liens, IRS liens, and municipal assessments may survive the sheriff sale or complicate title transfer</li>
        <li className="text-slate-300"><strong className="text-white">Drive by the property</strong> — the exterior is usually accessible; interior access may not be</li>
        <li className="text-slate-300"><strong className="text-white">Research zoning and code violations</strong> with Allegheny County&apos;s Department of Economic Development</li>
        <li className="text-slate-300"><strong className="text-white">Consult a real estate attorney</strong> familiar with Pennsylvania sheriff sales before bidding on any property</li>
        </ul>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">What Can Stop or Postpone an Allegheny County Sheriff Sale?</h2>
        <p className="text-slate-300 leading-relaxed mb-4">A scheduled sale can be halted by:</p>
        <ol className="space-y-2 mb-4 pl-4 list-decimal">
        <li className="text-slate-300"><strong className="text-white">Stay of writ</strong> — all proceedings stopped by court action</li>
        <li className="text-slate-300"><strong className="text-white">Court order</strong> — judge intervenes for any procedural reason</li>
        <li className="text-slate-300"><strong className="text-white">Bankruptcy filing</strong> — an automatic stay halts all collection activity</li>
        <li className="text-slate-300"><strong className="text-white">Full payoff</strong> — borrower pays everything owed before the gavel falls</li>
        </ol>
        <p className="text-slate-300 leading-relaxed mb-4">Sales can be <strong className="text-white">postponed up to 130 days</strong> without a court order. A postponed property keeps its original sale date and sale number, so always track that original number when monitoring a specific property.</p>
        <hr className="border-slate-700 my-8" />
        <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Allegheny County Real Estate Market Context</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Foreclosure buyers in Allegheny County are operating in a market that has shown steady appreciation. As of Q1 2026, the median home sale price in Allegheny County is <strong className="text-white">$252,000</strong> — up 4% from Q1 2025 (Sotheby&apos;s International Realty). Average days on market sit at 65 days, meaning properties that are priced right move relatively quickly.</p>
        <p className="text-slate-300 leading-relaxed mb-4">For investors, this context matters: sheriff sale opening bids are often set near the distressed value of the debt, not the market value of the property. When those numbers diverge — as they often do in Pittsburgh&apos;s revitalizing neighborhoods — the gap represents the opportunity.</p>
        <p className="text-slate-300 leading-relaxed mb-4">Pittsburgh&apos;s broader affordability (well below national metro averages) and its growing tech and healthcare employment base make Allegheny County&apos;s foreclosure inventory worth watching closely.</p>
        <hr className="border-slate-700 my-8" />
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">How often does Allegheny County hold sheriff sales?</p>
              <p className="text-slate-400 text-sm">Monthly — the first Monday of each month. When a holiday falls on Monday, the sale is held on Tuesday. The Sheriff&apos;s Office publishes a full calendar at sheriffalleghenycounty.com.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Can I inspect a property before bidding?</p>
              <p className="text-slate-400 text-sm">The Sheriff&apos;s Office does not arrange property inspections. You can conduct an exterior drive-by and review county property records, but interior access typically requires the property owner&apos;s consent. Bid with that uncertainty priced into your offer.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Are there redemption rights in Pennsylvania after a sheriff sale?</p>
              <p className="text-slate-400 text-sm">Pennsylvania does not provide a statutory post-sale right of redemption for mortgage foreclosures (unlike some states). Once the Sheriff&apos;s Deed is issued and the sale is confirmed, the prior owner generally cannot redeem the property.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">What happens if the opening bid exceeds the property&apos;s market value?</p>
              <p className="text-slate-400 text-sm">If no third-party bids exceed the plaintiff&apos;s opening bid, the foreclosing lender takes title to the property. These bank-owned (REO) properties may later appear on the market through traditional listing channels.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Who handles Pittsburgh City property tax sales separately?</p>
              <p className="text-slate-400 text-sm">The City of Pittsburgh Treasurer&apos;s Office manages sales for City of Pittsburgh and Pittsburgh School District tax delinquencies. Contact them directly at 412-255-2300.</p>
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
