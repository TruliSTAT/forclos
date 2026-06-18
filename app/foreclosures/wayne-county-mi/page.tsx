import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Wayne County Michigan Foreclosure Auction — Complete Investor\u2019s Guide 2026',
  description: 'Complete investor guide to the Wayne County Michigan foreclosure auction: PA 123 tax timeline, September vs October auction, registration, quit claim deed risks, and Rafaeli ruling.',
  alternates: { canonical: 'https://forclos.com/foreclosures/wayne-county-mi' },
  openGraph: {
    title: 'Wayne County Michigan Foreclosure Auction — Complete Investor\u2019s Guide 2026',
    description: 'Complete investor guide to the Wayne County Michigan foreclosure auction: PA 123 tax timeline, September vs October auction, registration, quit claim deed risks, and Rafaeli ruling.',
    url: 'https://forclos.com/foreclosures/wayne-county-mi',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wayne County Michigan Foreclosure Auction — Complete Investor\u2019s Guide 2026',
    description: 'Complete investor guide to the Wayne County Michigan foreclosure auction: PA 123 tax timeline, September vs October auction, registration, quit claim deed risks, and Rafaeli ruling.',
  },
}

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Wayne County Michigan Foreclosure Auction \u2014 The Complete Investor\u2019s Guide to the Annual Tax Sale",
      "description": "Complete investor guide to the Wayne County Michigan foreclosure auction: PA 123 tax timeline, September vs October auction, registration requirements, quit claim deed risks, Rafaeli ruling, and Detroit Land Bank.",
      "keywords": "wayne county michigan foreclosure auction, wayne county tax foreclosure, detroit foreclosure auction, PA 123 michigan, wayne county treasurer auction",
      "url": "https://forclos.com/foreclosures/wayne-county-mi",
      "datePublished": "2026-05-06",
      "dateModified": "2026-05-06",
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
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When does the Wayne County foreclosure auction happen each year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wayne County runs two rounds: the September auction (minimum bid = full delinquent tax debt) and the October auction (unsold properties, lower minimums). Exact dates are posted annually at waynecountytreasurermi.com."
          }
        },
        {
          "@type": "Question",
          "name": "How much do I need to deposit to bid at the Wayne County tax auction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The registration fee is $50 non-refundable. The deposit is $1,000 for one property or $10,000 for multiple properties. You must have no delinquent Wayne County taxes to register."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of deed do I get from the Wayne County tax auction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You receive a Quit Claim Deed with no title warranty. Traditional title insurance may require a quiet title action ($1,500\u2013$4,000) before it can be issued. Most experienced investors budget for this step."
          }
        },
        {
          "@type": "Question",
          "name": "Can the former owner get the property back after the Wayne County auction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The redemption deadline is March 31, before the April 1 title transfer to the county. There is no post-auction redemption right on the tax track. Former owners may file surplus proceeds claims under MCL 211.78t if the property sold for more than the tax debt."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between the September and October Wayne County auctions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "September auction minimum bid equals the full delinquent tax debt plus fees. October auction features unsold September properties with lower minimums, sometimes $500 or less. October inventory is typically more distressed with deeper discounts but higher risk."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Rafaeli ruling and does it affect buyers at the Wayne County auction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 2020 Michigan Supreme Court ruling in Rafaeli v. Oakland County established that counties cannot retain surplus auction proceeds beyond the tax debt owed. As a buyer this affects the Treasurer's liability, not your title, but due diligence on surplus proceeds claims is recommended."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Detroit Land Bank the same as the Wayne County tax auction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Detroit Land Bank Authority (DLBA) is a separate city agency selling city-owned properties through its own programs including Own-It-Now, auction, and Side Lot. Both channels operate simultaneously with overlapping but distinct inventory."
          }
        }
      ]
    }
  ]
}

export default function WayneCountyMIPage() {
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
          <Link href="/foreclosures/michigan" className="hover:text-slate-300 transition-colors">Michigan foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Wayne County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Wayne County Michigan Foreclosure Auction — The Complete Investor&apos;s Guide to the Annual Tax Sale
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 7, 2026 · Forclos Editorial</p>

        <div className="mb-10">
          <p className="text-slate-300 leading-relaxed mb-4">The <strong className="text-white">Wayne County Michigan foreclosure auction</strong> is the largest tax foreclosure sale in the state — historically putting thousands of Detroit-area properties on the block at prices that bear little resemblance to market value. If you're an investor, a first-time buyer seeking an entry into the Detroit market, or a real estate professional trying to understand how Michigan's dual-track foreclosure system works, this guide is your foundation.</p>
          <p className="text-slate-300 leading-relaxed mb-4">We'll walk through everything: the PA 123 / MCL 211.78 tax foreclosure timeline, the September vs. October auction mechanics, registration and deposit requirements, the quit claim deed title risk profile, the Rafaeli ruling's ongoing impact, the parallel mortgage foreclosure track, Detroit Land Bank as an alternative channel, and current volume context that manages expectations without dismissing the opportunity.</p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Michigan's Two Foreclosure Tracks</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Wayne County has two parallel foreclosure systems that serve completely different creditor types:</p>
          <ol className="list-decimal pl-6 space-y-2 mb-4"><li className="text-slate-300 mb-2"><strong className="text-white">Tax Foreclosure (PA 123 / MCL 211.78):</strong> The county treasurer forecloses on properties with delinquent property taxes. This is the system behind the annual WCTO online auction — and it's what most investors mean when they search "wayne county foreclosure auction."</li></ol>
          <ol className="list-decimal pl-6 space-y-2 mb-4"><li className="text-slate-300 mb-2"><strong className="text-white">Mortgage Foreclosure by Advertisement:</strong> Non-judicial foreclosure on defaulted mortgage debt, resulting in Sheriff Sales (yes, Michigan has actual sheriff sales, unlike California's trustee sales). Governed by MCL 600.3201 et seq.</li></ol>
          <p className="text-slate-300 leading-relaxed mb-4">Both matter. Investors who master both tracks have far more deal flow than those who only watch one.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">PA 123 Tax Foreclosure: The Full 3-Year Timeline</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Michigan Public Act 123 of 1999 (MCL 211.78) established a three-year tax foreclosure timeline designed to give property owners multiple opportunities to cure before losing the property. In practice, this means a property typically goes to auction approximately <strong className="text-white">2.5 to 3 years after the first missed tax payment</strong>. Here's the complete sequence:</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Year 1 — Delinquency:</strong> Property taxes are billed in July and December of the tax year. If unpaid by March 1 of the following year, the taxes become <strong className="text-white">delinquent</strong> and are forwarded to the Wayne County Treasurer's office. A 4% administration fee and 1% per month interest are applied. By October 1 of Year+1, an additional $15 collection fee per parcel is added.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Year 2 — Forfeiture:</strong> If taxes remain unpaid by March 1 of Year+2, the property is <strong className="text-white">forfeited</strong> to the Wayne County Treasurer. Key financial escalations at this stage: a $175 forfeiture fee, approximately $30 in recording fees, and interest jumps to 1.5% per month retroactive to March 1. This is a significant inflection point — the cost of redemption accelerates rapidly.</p>
          <p className="text-slate-300 leading-relaxed mb-4">Between October and December of Year+2, the Treasurer serves and publishes <strong className="text-white">Notices of Show Cause and Judicial Foreclosure Hearings</strong>. Property owners and lienholders are put on formal notice.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Year 3 — Foreclosure:</strong> In January, Show Cause Hearings are held (currently conducted via Zoom). In February, Judicial Foreclosure Hearings proceed. By March, the Circuit Court enters a <strong className="text-white">judgment of foreclosure</strong>. The redemption deadline is <strong className="text-white">March 31</strong> — property owners have until this date to pay all outstanding taxes, fees, interest, and costs to retain the property.</p>
          <p className="text-slate-300 leading-relaxed mb-4">On April 1, for properties that have not been redeemed, title formally <strong className="text-white">passes to the Wayne County Treasurer</strong>. The property is now county-owned and will be offered at the annual public auction.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">July 1</strong> is the deadline for prior owners to file a <strong className="text-white">Notice of Intent to Claim Remaining Proceeds</strong> under MCL 211.78t (see Rafaeli section below).</p>
          <p className="text-slate-300 leading-relaxed mb-4">The September and October auctions follow.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The Annual Auction: September vs. October — Know the Difference</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Wayne County's online auction is hosted at <strong className="text-white">waynecountytreasurermi.com</strong>. It runs in two rounds, and understanding the distinction between them can significantly affect your acquisition strategy.</p>
          <h3 className="text-lg font-semibold text-white mb-2 mt-6">September Auction</h3>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Minimum bid:</strong> The full amount of delinquent taxes + accumulated interest + penalties + the Treasurer's costs. This is the real bid — it often represents several years' worth of tax debt plus fees and can be substantial on even modest properties.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Inventory:</strong> All county-owned properties that have completed the PA 123 three-year process — residential, commercial, and vacant land.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Strategic note:</strong> Properties with lower tax debts relative to their market value offer the best September auction opportunities. Properties in more desirable municipalities (Dearborn, Westland, Taylor) tend to attract more competitive September bidding.</p>
          <h3 className="text-lg font-semibold text-white mb-2 mt-6">October Auction</h3>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Minimum bid:</strong> Lower than September — often as low as $500 on distressed vacant or blighted properties. Specific minimum bids are posted by the Treasurer prior to auction.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Inventory:</strong> Properties that did not sell at September auction (no bidder exceeded the minimum). By definition, these are the harder cases — higher debts relative to value, more distress, more challenging neighborhoods, or more problematic title situations.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Strategic note:</strong> October auctions are where institutional investors and experienced Detroit market operators often find the deepest discounts. The risks are proportionally higher: occupied properties requiring eviction, environmental concerns, extensive rehabilitation needed, or neighborhoods with suppressed rents.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Registration and Deposit Requirements</h2>
          <p className="text-slate-300 leading-relaxed mb-4">To participate in either auction, you must register in advance at waynecountytreasurermi.com. Requirements:</p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300"><strong className="text-white">Age:</strong> Must be 18 or older</li><li className="text-slate-300"><strong className="text-white">Registration fee:</strong> <strong className="text-white">$50 non-refundable</strong> — paid per registration, not per property bid</li><li className="text-slate-300"><strong className="text-white">Deposit:</strong> - <strong className="text-white">$1,000</strong> if you plan to bid on a single property - <strong className="text-white">$10,000</strong> if you plan to bid on multiple properties - Higher deposit thresholds may apply for "premium" properties - Deposit accepted via Visa/Mastercard/Discover credit card pre-authorization OR certified funds</li><li className="text-slate-300"><strong className="text-white">No delinquent taxes:</strong> You cannot register if you owe delinquent taxes in Wayne County — this is enforced at the registration stage</li><li className="text-slate-300"><strong className="text-white">Government right of first refusal:</strong> The State of Michigan, county, and local municipality may acquire any property at the minimum bid price before it goes to public bidding. Properties acquired this way are removed from the public auction</li></ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">What You Actually Get: Quit Claim Deed and Title Risks</h2>
          <p className="text-slate-300 leading-relaxed mb-4">This is where many investors get burned — especially those buying their first Wayne County tax auction properties.</p>
          <p className="text-slate-300 leading-relaxed mb-4">When the Wayne County Treasurer sells a property at auction, the buyer receives a <strong className="text-white">Quit Claim Deed (QCD)</strong>. A QCD conveys whatever interest the grantor (the Treasurer) has in the property, with <strong className="text-white">no warranty of title whatsoever</strong>. Specifically:</p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300"><strong className="text-white">No guarantee of clear title:</strong> Prior encumbrances that were not extinguished by the tax foreclosure may survive</li><li className="text-slate-300"><strong className="text-white">IRS federal tax liens:</strong> Federal liens have a redemption right of 120 days after the tax sale. If an IRS lien was on the property, the federal government can reclaim it within 120 days by paying the auction price</li><li className="text-slate-300"><strong className="text-white">Environmental liens:</strong> Environmental contamination liens, particularly on commercial or industrial parcels, can survive and represent significant liability</li><li className="text-slate-300"><strong className="text-white">Occupied properties:</strong> If the property is occupied, you'll need to pursue eviction proceedings. Michigan's landlord-tenant and trespass laws apply — this can take months</li><li className="text-slate-300"><strong className="text-white">Title insurance difficulty:</strong> Many traditional title insurers will not issue a standard policy on a tax-auction QCD without a <strong className="text-white">quiet title action</strong></li></ul>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">The quiet title recommendation:</strong> Most experienced Wayne County investors pursue a quiet title action after purchase, particularly if they intend to refinance, sell with conventional financing, or resell. A quiet title action, conducted by a Michigan real estate attorney, establishes clean title through the courts. It typically costs $1,500–$4,000 in legal fees and takes 3–6 months.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The Rafaeli Ruling: What It Means for Investors</h2>
          <p className="text-slate-300 leading-relaxed mb-4">In 2020, the Michigan Supreme Court issued its landmark decision in *Rafaeli, LLC v. Oakland County*, ruling that counties <strong className="text-white">cannot retain surplus auction proceeds</strong> beyond what was owed in delinquent taxes, interest, and fees. In other words, if a tax-foreclosed property sells at auction for $50,000 and the tax debt was $5,000, the former owner may be entitled to the $45,000 surplus.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Impact on Wayne County:</strong></p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300">WCTO faces hundreds of millions in potential surplus claims from pre-2021 auctions</li><li className="text-slate-300">Ongoing litigation has affected budgeting and operations</li><li className="text-slate-300">Former owners of properties auctioned before 2021 may be owed money — they must file claims under MCL 211.78t (deadline: July 1 following the year of foreclosure)</li><li className="text-slate-300">For <strong className="text-white">buyers</strong>, the Rafaeli ruling is largely a background issue — it affects the Treasurer's liability, not your title. But it reinforces the importance of full due diligence on any property with potential surplus-proceeds complexity</li></ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Mortgage Foreclosure by Advertisement (Sheriff Sales)</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Separate from the tax track, Wayne County also sees regular <strong className="text-white">mortgage foreclosure by advertisement</strong> — Michigan's non-judicial foreclosure process for defaulted mortgages.</p>
          <p className="text-slate-300 leading-relaxed mb-4">Under MCL 600.3201 et seq.:</p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300">Lender publishes a foreclosure notice for <strong className="text-white">4 consecutive weeks</strong> in a Wayne County newspaper</li><li className="text-slate-300">A <strong className="text-white">Sheriff Sale</strong> is scheduled (unlike California's trustee sales, Michigan sheriff sales are conducted by the county sheriff)</li><li className="text-slate-300">The property is sold at the Sheriff Sale, with a <strong className="text-white">6-month statutory redemption period</strong> for the prior owner to reclaim the property by paying the full debt (or 1 year if less than 2/3 of the original loan was outstanding at foreclosure; 30 days if the property is abandoned residential)</li></ul>
          <p className="text-slate-300 leading-relaxed mb-4">For investors: the 6-month redemption period is critical. The winning bidder at Sheriff Sale cannot take possession — or substantially improve the property — during the redemption window. Most Michigan investors treat Sheriff Sale purchases as extended options, with possession expected only after redemption period expiration.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Detroit Land Bank: The Parallel Channel</h2>
          <p className="text-slate-300 leading-relaxed mb-4">The <strong className="text-white">Detroit Land Bank Authority (DLBA)</strong> at detroitlandbank.org is a separate, parallel acquisition channel that sophisticated Detroit investors use alongside the WCTO auction. The DLBA acquires city-owned properties (many cycling back through tax foreclosure) and sells them through several programs:</p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300"><strong className="text-white">Own-It-Now:</strong> Fixed-price direct sales of vacant land and blighted structures, often at $1,000 or below</li><li className="text-slate-300"><strong className="text-white">Auction:</strong> Online competitive bidding for higher-quality inventory</li><li className="text-slate-300"><strong className="text-white">Side Lot Program:</strong> Neighboring homeowners can purchase adjacent vacant lots at subsidized prices</li><li className="text-slate-300"><strong className="text-white">Rehabbed & Ready:</strong> Move-in-ready properties rehabbed by DLBA partners</li></ul>
          <p className="text-slate-300 leading-relaxed mb-4">In 2025, approximately 360 Detroit properties — roughly 17% of potential WCTO auction volume — were acquired or offered through the DLBA pipeline before reaching the county auction. For investors focused on Detroit specifically, DLBA is not an afterthought.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Current Market Context: 85% Volume Reduction from Peak</h2>
          <p className="text-slate-300 leading-relaxed mb-4">It's important to calibrate expectations with current data. Wayne County's tax foreclosure auction was, during the mid-2010s, a pipeline of 5,000 to 20,000+ properties annually — a product of the 2008 financial crisis, Detroit's municipal bankruptcy, and decades of population decline compressing property values below tax liabilities.</p>
          <p className="text-slate-300 leading-relaxed mb-4">That era is largely over.</p>
          <p className="text-slate-300 leading-relaxed mb-4">By 2025, the WCTO auction featured approximately <strong className="text-white">370 Detroit homeowner properties</strong> — compared to roughly 170 in 2024 — but still an approximately <strong className="text-white">85% reduction</strong> from peak years. The causes: state intervention programs (the Pay as You Stay low-income tax reduction program), DLBA absorption of inventory, population stabilization in some neighborhoods, and rising property values in Detroit's recovering corridors.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Pay as You Stay sunset risk:</strong> This state program, which allowed retroactive tax debt reduction for qualifying low-income homeowners, was scheduled to sunset in 2025. If it expires without replacement, foreclosure volume may increase in subsequent auction years.</p>
          <p className="text-slate-300 leading-relaxed mb-4">Key municipalities with the highest concentration of auction properties historically: <strong className="text-white">Detroit</strong> (dominant share), Inkster, Ecorse, River Rouge, Lincoln Park, Romulus, and Taylor.</p>
          <p className="text-slate-300 leading-relaxed mb-4">For cross-market comparison, investors who watch Wayne County alongside <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County Illinois foreclosure auction</Link> (IL judicial foreclosure), <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">Los Angeles County California foreclosure listings</Link> (CA nonjudicial trustee sales), <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County Texas foreclosure auction</Link> (TX first-Tuesday courthouse auctions), and <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">Maricopa County Arizona foreclosure listings</Link> develop the most nuanced regional arbitrage strategies. Forclos also tracks <Link href="/foreclosures/cuyahoga-county-oh" className="text-emerald-400 hover:underline">Cuyahoga County Ohio foreclosure auction</Link> for Great Lakes market comparison.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Forclos Tracks Wayne County Foreclosures</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Forclos aggregates Wayne County tax auction inventory, Sheriff Sale filings, and REO listings in one searchable interface. Set alerts by municipality, property type, or estimated debt threshold. Get early visibility on properties before the auction opens, research ownership history, and monitor DLBA pipeline inventory.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Ready to search Wayne County foreclosure listings?</strong> <a href="#" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Browse current inventory on Forclos →</a></p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: When does the Wayne County foreclosure auction happen each year?</strong> A: Wayne County runs two auction rounds: the <strong className="text-white">September auction</strong> (primary, minimum bid = full delinquent tax debt) and the <strong className="text-white">October auction</strong> (unsold properties from September, lower minimum bids). Exact dates are posted annually at waynecountytreasurermi.com. Registration opens several weeks before each auction.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: How much do I need to deposit to bid at the Wayne County tax auction?</strong> A: The registration fee is <strong className="text-white">$50 non-refundable</strong>. The deposit is <strong className="text-white">$1,000</strong> if bidding on one property, <strong className="text-white">$10,000</strong> for multiple properties. Higher thresholds may apply for certain properties. Deposits can be made by credit card pre-authorization or certified funds. You must have no delinquent Wayne County taxes to register.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: What kind of deed do I get, and is there title insurance available?</strong> A: You receive a <strong className="text-white">Quit Claim Deed</strong> — the Wayne County Treasurer conveys whatever interest it holds with no title warranty. Traditional title insurance is often difficult to obtain without a quiet title action. Most experienced investors budget for a quiet title proceeding ($1,500–$4,000) after purchase, especially if they plan to sell or finance the property.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: Can the former owner get the property back after the auction?</strong> A: No — for tax foreclosure, the <strong className="text-white">redemption deadline is March 31</strong> immediately following the Circuit Court judgment, which is before the April 1 title transfer to the county. There is no post-auction redemption right on the tax track. However, former owners may have <strong className="text-white">surplus proceeds claims</strong> under MCL 211.78t (deadline: July 1 following the foreclosure year) if the property sold for more than the tax debt, per the Rafaeli ruling.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: What is the difference between the September and October Wayne County auctions?</strong> A: The September auction requires a minimum bid equal to the full delinquent tax debt plus fees — these properties still have value relative to their debt. The October auction features properties that received no bids in September, with significantly lower minimums (sometimes $500 or less). October inventory tends to be more distressed, in more challenged neighborhoods, and carries higher risk — but also deeper discounts for investors who do their homework.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: What is the Rafaeli ruling and does it affect me as a buyer?</strong> A: The 2020 Michigan Supreme Court ruling in *Rafaeli v. Oakland County* established that counties cannot retain auction proceeds beyond what was owed in tax debt. Former owners may claim surplus proceeds. As a <strong className="text-white">buyer</strong>, this affects the Treasurer's liability, not your title — but it reinforces the importance of due diligence. Check whether any former owner has filed a surplus proceeds claim on a property before you bid.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: Is the Detroit Land Bank the same as the Wayne County tax auction?</strong> A: No — the <strong className="text-white">Detroit Land Bank Authority (DLBA)</strong> is a separate city agency that sells city-owned properties through its own programs (Own-It-Now, auction, Side Lot, Rehabbed & Ready). DLBA acquires many properties before they would reach the county auction. Both channels are active simultaneously and serve overlapping but distinct inventory.</p>
        </section>
      </main>
    </div>
  )
}
