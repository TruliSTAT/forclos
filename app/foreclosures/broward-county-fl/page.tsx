import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Broward County Foreclosure Listings — Judicial Auction Guide 2026',
  description: 'Broward County foreclosure listings explained: 19,147 distressed properties, RealForeclose auction rules, 3 PM deposit deadline, doc stamp taxes, and certificate of title timeline.',
  alternates: { canonical: 'https://forclos.com/foreclosures/broward-county-fl' },
  openGraph: {
    title: 'Broward County Foreclosure Listings — Judicial Auction Guide 2026',
    description: 'Broward County foreclosure listings explained: 19,147 distressed properties, RealForeclose auction rules, 3 PM deposit deadline, doc stamp taxes, and certificate of title timeline.',
    url: 'https://forclos.com/foreclosures/broward-county-fl',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Broward County Foreclosure Listings — Judicial Auction Guide 2026',
    description: 'Broward County foreclosure listings explained: 19,147 distressed properties, RealForeclose auction rules, 3 PM deposit deadline, doc stamp taxes, and certificate of title timeline.',
  },
}

const schemaOrg = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Broward County Foreclosure Listings: What 19,147 Properties vs. 60 MLS Listings Really Means",
    "description": "Complete guide to Broward County foreclosure listings: RealForeclose auction rules, 5% deposit deadlines, documentary stamp tax, certificate of title timeline, and homeowner rights.",
    "url": "https://forclos.com/foreclosures/broward-county-fl",
    "datePublished": "2026-05-07",
    "dateModified": "2026-05-07",
    "author": {
      "@type": "Organization",
      "name": "Forclos"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Forclos",
      "url": "https://forclos.com"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I have to be physically present to bid on Broward County foreclosures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All Broward County judicial foreclosure auctions are conducted exclusively online at broward.realforeclose.com."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I win a property and can't pay by noon the next business day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your deposit is forfeited in full. The Clerk will also assess a non-refundable registry fee. There is no hardship exception under Fla. Stat. \u00a7 45.035(3)."
        }
      },
      {
        "@type": "Question",
        "name": "Can a homeowner take back the property after I win at auction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No \u2014 Florida's right of redemption under Fla. Stat. \u00a7 45.0315 expires when the Certificate of Sale is issued at the conclusion of the auction."
        }
      }
    ]
  }
]

export default function BrowardCountyFLPage() {
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
          <Link href="/foreclosures/florida" className="hover:text-slate-300 transition-colors">Florida foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Broward County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Broward County Foreclosure Listings: What 19,147 Properties vs. 60 MLS Listings Really Means
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 7, 2026 · Forclos Editorial</p>

        <div className="mb-10">
          <p className="text-slate-300 leading-relaxed mb-4">If you search for Broward County foreclosures on Zillow, you'll see roughly 60 properties. Search foreclosure.com and you'll find 19,147. That gap isn't a data glitch — it's a window into how Florida's judicial foreclosure process works, and understanding it is the first step to buying distressed properties profitably in one of South Florida's most competitive markets.</p>
          <p className="text-slate-300 leading-relaxed mb-4">The 19,000+ figure includes pre-foreclosure filings, lis pendens notices, and properties at various stages of the court pipeline. The 60 you see on Zillow are already bank-owned and listed on the MLS. Most investors never see the early-stage inventory. This guide gives you the full picture — including the exact deposit rules, payment deadlines, and hidden costs that trip up first-time bidders at Broward County's online auction.</p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Broward County's Foreclosure Pipeline: The Real Numbers</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Broward County's foreclosure market is one of the deepest in Florida. Here's where the inventory actually sits as of mid-2026:</p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300"><strong className="text-white">foreclosure.com:</strong> 19,147 distressed properties</li><li className="text-slate-300"><strong className="text-white">foreclosurelistings.com:</strong> 25,961 listings</li><li className="text-slate-300"><strong className="text-white">Zillow (MLS-listed foreclosures):</strong> ~60</li><li className="text-slate-300"><strong className="text-white">auction.com (bank-owned):</strong> ~55</li><li className="text-slate-300"><strong className="text-white">browardhomeauctions.com:</strong> 162 active monthly auctions (historical peak: 103,081)</li></ul>
          <p className="text-slate-300 leading-relaxed mb-4">The MLS-listed properties are the end of a long journey through Florida's judicial foreclosure system. To access the larger inventory — properties still in the court pipeline — you need to track lis pendens filings at the Broward County Clerk of Courts (201 SE 6th Street, Fort Lauderdale, FL 33301; (954) 831-6565) and monitor auction schedules at <strong className="text-white">broward.realforeclose.com</strong>.</p>
          <p className="text-slate-300 leading-relaxed mb-4">Florida is a <strong className="text-white">judicial foreclosure state</strong>, which means a lender cannot auction a property without first filing suit and obtaining a court judgment in the 17th Judicial Circuit Court, Circuit Civil Division. That process can take months or years, which is why so many properties sit in the pipeline before reaching auction. For buyers willing to do the homework, that pre-sale window is where deals are found.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Broward Foreclosure Auctions Work</h2>
          <p className="text-slate-300 leading-relaxed mb-4">All Broward County foreclosure auctions are conducted <strong className="text-white">exclusively online</strong> through <a href="https://broward.realforeclose.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">broward.realforeclose.com</a>. There is no in-person courthouse auction. Here's the step-by-step process:</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Step 1: Register before sale day.</strong> Registration is free, but you must complete it before the auction date — no walk-in or same-day registration is accepted. Once registered, you'll receive a Username, Password, and bidder number.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Step 2: Review the auction calendar.</strong> Auctions are scheduled by the plaintiff (lender). Each scheduled or rescheduled sale triggers a $70 fee paid by the plaintiff via the e-Portal under Senate Bill 2506 / Fla. Stat. § 45.035(3). Check the calendar regularly — properties are frequently postponed.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Step 3: Post your deposit.</strong> Before you can bid, you must submit a deposit for each property you intend to bid on. See the full deposit rules below.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Step 4: Bid.</strong> Bidding is conducted online during the scheduled sale window. The platform is straightforward once you're registered, but the financial stakes are not — missed deadlines carry real penalties.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Step 5: Track your Certificate of Title.</strong> After winning, you'll wait through a 10-day objection period before the Certificate of Title is issued. Track issuance at <strong className="text-white">officialrecords.broward.org/CETTrackWeb/</strong>.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Deposit Rules: The 3 PM Deadline That Trips Up First-Time Bidders</h2>
          <p className="text-slate-300 leading-relaxed mb-4">This is where most new investors make their first expensive mistake. Broward County's deposit rules are strict, and the timing is counterintuitive.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Required deposit:</strong> 5% of your estimated highest bid per property.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Deadline:</strong> Deposits must be received by <strong className="text-white">3:00 PM EST the previous business day</strong> before the auction — not the morning of the sale. If a property auctions on a Tuesday, your deposit must arrive by 3:00 PM Monday.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Payment methods accepted:</strong></p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300">Wire transfer (most common)</li><li className="text-slate-300">In-person cash, cashier's check, or money order</li></ul>
          <p className="text-slate-300 leading-relaxed mb-4">Wire transfers don't settle instantly. If you initiate a wire at 2:45 PM, there's a real risk it won't clear by 3:00 PM. Build in at least a half-day buffer, and confirm with your bank how long outgoing wires typically take.</p>
          <p className="text-slate-300 leading-relaxed mb-4">If you miss the deposit deadline, you cannot bid on that property — period. The registration remains valid for other properties, but the deposit requirement is per-property and deadline is absolute.</p>
          <p className="text-slate-300 leading-relaxed mb-4">For comparison, Miami-Dade County auctions — which also run through the realforeclose.com platform — use the same structure. If you're bidding across both counties, see our <Link href="/foreclosures/miami-dade-county-fl" className="text-emerald-400 hover:underline">Miami-Dade County foreclosure listings guide</Link> for how the rules parallel each other.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Winning Bid: Costs Beyond the Bid Amount</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Winning at auction is just the beginning. Broward County buyers should budget for three additional cost layers beyond their winning bid.</p>
          <h3 className="text-lg font-semibold text-white mb-2 mt-6">1. Court Registry Fees</h3>
          <p className="text-slate-300 leading-relaxed mb-4">Collected by the Broward County Clerk of Courts upon payment of the full balance:</p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300"><strong className="text-white">3% of the first $500</strong></li><li className="text-slate-300"><strong className="text-white">1.5% of each $100 thereafter</strong></li></ul>
          <p className="text-slate-300 leading-relaxed mb-4">On a $250,000 winning bid, that works out to roughly $3,727.50 in registry fees. On a $500,000 bid, approximately $7,477.50. Include this in your max-bid calculations before the auction opens.</p>
          <h3 className="text-lg font-semibold text-white mb-2 mt-6">2. Documentary Stamp Tax</h3>
          <p className="text-slate-300 leading-relaxed mb-4">This is the cost most buyers miss. Florida charges <strong className="text-white">$0.70 per $100 of the bid amount</strong> under Fla. Stat. § 201.01.</p>
          <p className="text-slate-300 leading-relaxed mb-4">On a $300,000 winning bid: <strong className="text-white">$2,100 in doc stamps.</strong></p>
          <p className="text-slate-300 leading-relaxed mb-4">Critical detail: the doc stamp tax is paid to the <strong className="text-white">Broward County Board of County Commissioners</strong> — NOT to the Clerk of Courts. Payment is due within <strong className="text-white">15 calendar days</strong> of Certificate of Title issuance. Contact rttcet@broward.org to set up wire transfer or escrow arrangements before the auction if you're planning to move quickly.</p>
          <p className="text-slate-300 leading-relaxed mb-4">If you're assigning your bid to another entity, note that doc stamps are still owed even if the assignee would normally be exempt — and the assignment must be filed with the Clerk *before* the sale, with the plaintiff updating the name on the RealAuction platform.</p>
          <h3 className="text-lg font-semibold text-white mb-2 mt-6">3. Full Balance Payment Deadline</h3>
          <p className="text-slate-300 leading-relaxed mb-4">The remaining balance (winning bid + court registry fees) is due by <strong className="text-white">12:00 PM EST the next business day</strong> following the sale, or by the deadline specified in the court judgment — whichever comes first.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Missed payment penalty:</strong> Your deposit is forfeited, and the Clerk assesses an additional non-refundable registry fee. There is no grace period and no appeals process for late payment. This is governed by Fla. Stat. § 45.035(3).</p>
          <p className="text-slate-300 leading-relaxed mb-4">For buyers evaluating other high-CPC judicial foreclosure markets, our <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL foreclosure guide</Link> and <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">Los Angeles County, CA guide</Link> break down how deposit and payment rules compare across different judicial systems.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Certificate of Title: The 10-Day Wait</h2>
          <p className="text-slate-300 leading-relaxed mb-4">After the auction closes and you're the winning bidder, the property is not legally yours yet. Florida law requires a <strong className="text-white">10-calendar-day objection period</strong> before the Certificate of Title (CET) can be issued. During this window, interested parties — including the former homeowner or junior lienholders — can file objections with the court.</p>
          <p className="text-slate-300 leading-relaxed mb-4">Once the 10 days pass without a sustained objection, the Certificate of Title is issued. Track issuance status at <strong className="text-white">officialrecords.broward.org/CETTrackWeb/</strong>. From that issuance date, you have 15 calendar days to submit your documentary stamp tax payment.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Homeowner Rights: Redemption and Surplus Funds</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Broward County foreclosure buyers should understand the rights homeowners retain — not to discourage bidding, but because these rights affect deal timelines and occasionally surplus proceeds.</p>
          <h3 className="text-lg font-semibold text-white mb-2 mt-6">Right of Redemption</h3>
          <p className="text-slate-300 leading-relaxed mb-4">Under Fla. Stat. § 45.0315, a homeowner can redeem the property (pay off the full judgment amount) up until the <strong className="text-white">Certificate of Sale is issued</strong> — which happens at the close of the auction. Once the Certificate of Sale is issued, the right of redemption is permanently extinguished. This means a homeowner cannot reclaim the property after the sale concludes, even during the 10-day objection period.</p>
          <h3 className="text-lg font-semibold text-white mb-2 mt-6">Surplus Funds</h3>
          <p className="text-slate-300 leading-relaxed mb-4">If your winning bid exceeds the Final Judgment amount, the surplus belongs — first — to junior lienholders and then to the former homeowner, under Fla. Stat. § 45.035. The former homeowner has a <strong className="text-white">10-day window from Certificate of Sale issuance</strong> to file a claim. No attorney is required to file, but a $50 court reopening fee applies.</p>
          <p className="text-slate-300 leading-relaxed mb-4">As a buyer, surplus funds don't affect your title — but they do signal you paid above judgment value, which is worth tracking for future bidding strategy.</p>
          <p className="text-slate-300 leading-relaxed mb-4">Homeowners facing foreclosure in Broward County can contact <strong className="text-white">Legal Aid Service of Broward County at (954) 765-8950</strong> for free legal assistance.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Neighboring County Markets</h2>
          <p className="text-slate-300 leading-relaxed mb-4">If you're expanding beyond Broward, <Link href="/foreclosures/palm-beach-county-fl" className="text-emerald-400 hover:underline">Palm Beach County foreclosure listings</Link> *(upcoming)* covers the adjacent market to the north, also on the judicial foreclosure track. For a non-judicial contrast, see our <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County, TX foreclosure guide</Link>, where auctions move on a fixed monthly schedule with different deposit mechanics.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: Do I have to be physically present to bid on Broward County foreclosures?</strong> No. All Broward County judicial foreclosure auctions are conducted exclusively online at broward.realforeclose.com. You can bid from anywhere with an internet connection, as long as you've registered in advance and submitted your deposit by the 3 PM deadline the previous business day.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: What happens if I win a property and can't pay by noon the next business day?</strong> Your deposit is forfeited in full. The Clerk will also assess a non-refundable registry fee. The property will be re-scheduled for sale. There is no hardship exception or payment plan option under Fla. Stat. § 45.035(3).</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: How do I calculate the documentary stamp tax on my winning bid?</strong> Multiply your winning bid by 0.007. For example, a $200,000 bid × 0.007 = $1,400 in doc stamps. This amount is due to the Broward County Board of County Commissioners (not the Clerk) within 15 days of Certificate of Title issuance. Email rttcet@broward.org to arrange wire payment in advance.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: Can a homeowner take back the property after I win at auction?</strong> No — not after the auction closes. Florida's right of redemption under Fla. Stat. § 45.0315 expires when the Certificate of Sale is issued at the conclusion of the auction. The 10-day objection period that follows does not revive redemption rights.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: Why does foreclosure.com show 19,000+ properties when Zillow only shows 60?</strong> The 19,000+ figure includes properties at every stage of Florida's judicial foreclosure pipeline — lis pendens filings, court judgments, and properties scheduled for sale. Only a small fraction of those will ever reach the MLS as bank-owned listings. Most are still in active litigation or pre-auction status.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: What is the $70 rescheduling fee, and does it affect me as a bidder?</strong> The $70 fee is paid by the plaintiff (lender), not the bidder, each time a sale is scheduled or rescheduled via the e-Portal. It doesn't cost you anything directly, but it explains why auctions are frequently postponed — plaintiffs weigh whether to delay based on this fee and ongoing negotiation with the borrower.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: Can I assign my winning bid to a different entity — like an LLC?</strong> You can, but the assignment must be filed with the Clerk *before* the sale date, and the plaintiff must update the winning bidder's name on the RealAuction platform in advance. Documentary stamp taxes are still owed even if the assignee entity would normally qualify for an exemption.</p>
        </section>
      </main>
    </div>
  )
}
