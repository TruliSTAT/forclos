import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Wayne County MI Foreclosure Auction — Investor\'s Guide',
  description: 'Wayne County Michigan foreclosure auction guide: PA 123 timeline, September vs October sale, $1,000 deposit, quit claim deed risks, and Rafaeli ruling explained.',
  alternates: { canonical: 'https://forclos.com/foreclosures/wayne-county-mi' },
  openGraph: {
    title: 'Wayne County MI Foreclosure Auction — Investor\'s Guide',
    description: 'Wayne County Michigan foreclosure auction guide: PA 123 timeline, September vs October sale, $1,000 deposit, quit claim deed risks, and Rafaeli ruling explained.',
    url: 'https://forclos.com/foreclosures/wayne-county-mi',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wayne County MI Foreclosure Auction — Investor\'s Guide',
    description: 'Wayne County Michigan foreclosure auction guide: PA 123 timeline, September vs October sale, $1,000 deposit, quit claim deed risks, and Rafaeli ruling explained.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wayne County Michigan Foreclosure Auction — The Complete Investor\'s Guide to the Annual Tax Sale',
    description: 'Complete investor guide to the Wayne County Michigan foreclosure auction: PA 123 tax timeline, September vs October auction, registration requirements, quit claim deed risks, Rafaeli ruling, and Detroit Land Bank.',
    url: 'https://forclos.com/foreclosures/wayne-county-mi',
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/wayne-county-mi' },
    about: {
      '@type': 'Place',
      name: 'Wayne County',
      address: { '@type': 'PostalAddress', addressRegion: 'MI', addressCountry: 'US' },
    },
    keywords: 'wayne county michigan foreclosure auction, wayne county tax foreclosure, detroit foreclosure auction, PA 123 michigan, wayne county treasurer auction',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When does the Wayne County foreclosure auction happen each year?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wayne County runs two rounds: the September auction (minimum bid = full delinquent tax debt) and the October auction (unsold properties, lower minimums). Exact dates are posted annually at waynecountytreasurermi.com.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much do I need to deposit to bid at the Wayne County tax auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The registration fee is $50 non-refundable. The deposit is $1,000 for one property or $10,000 for multiple properties. You must have no delinquent Wayne County taxes to register.',
        },
      },
      {
        '@type': 'Question',
        name: 'What kind of deed do I get from the Wayne County tax auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You receive a Quit Claim Deed with no title warranty. Traditional title insurance may require a quiet title action ($1,500–$4,000) before it can be issued. Most experienced investors budget for this step.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the former owner get the property back after the Wayne County auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The redemption deadline is March 31, before the April 1 title transfer to the county. There is no post-auction redemption right on the tax track. Former owners may file surplus proceeds claims under MCL 211.78t if the property sold for more than the tax debt.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between the September and October Wayne County auctions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'September auction minimum bid equals the full delinquent tax debt plus fees. October auction features unsold September properties with lower minimums, sometimes $500 or less. October inventory is typically more distressed with deeper discounts but higher risk.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Rafaeli ruling and does it affect buyers at the Wayne County auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 2020 Michigan Supreme Court ruling in Rafaeli v. Oakland County established that counties cannot retain surplus auction proceeds beyond the tax debt owed. As a buyer this affects the Treasurer\'s liability, not your title, but due diligence on surplus proceeds claims is recommended.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the Detroit Land Bank the same as the Wayne County tax auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The Detroit Land Bank Authority (DLBA) is a separate city agency selling city-owned properties through its own programs including Own-It-Now, auction, and Side Lot. Both channels operate simultaneously with overlapping but distinct inventory.',
        },
      },
    ],
  },
]

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

        <p className="text-slate-300 leading-relaxed mb-8">
          The <strong>Wayne County Michigan foreclosure auction</strong> is the largest tax foreclosure sale in the state — historically putting thousands of Detroit-area properties on the block at prices that bear little resemblance to market value. If you&apos;re an investor, a first-time buyer seeking an entry into the Detroit market, or a real estate professional trying to understand how Michigan&apos;s dual-track foreclosure system works, this guide is your foundation.
        </p>
        <p className="text-slate-300 leading-relaxed mb-8">
          We&apos;ll walk through everything: the PA 123 / MCL 211.78 tax foreclosure timeline, the September vs. October auction mechanics, registration and deposit requirements, the quit claim deed title risk profile, the Rafaeli ruling&apos;s ongoing impact, the parallel mortgage foreclosure track, Detroit Land Bank as an alternative channel, and current volume context that manages expectations without dismissing the opportunity.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Michigan&apos;s Two Foreclosure Tracks</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Wayne County has two parallel foreclosure systems that serve completely different creditor types:</p>
          <div className="space-y-3">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">1. Tax Foreclosure (PA 123 / MCL 211.78)</p>
              <p>The county treasurer forecloses on properties with delinquent property taxes. This is the system behind the annual WCTO online auction — and it&apos;s what most investors mean when they search &quot;wayne county foreclosure auction.&quot;</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">2. Mortgage Foreclosure by Advertisement</p>
              <p>Non-judicial foreclosure on defaulted mortgage debt, resulting in Sheriff Sales (yes, Michigan has actual sheriff sales, unlike California&apos;s trustee sales). Governed by MCL 600.3201 et seq.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">PA 123 Tax Foreclosure: The Full 3-Year Timeline</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Michigan Public Act 123 of 1999 (MCL 211.78) established a three-year tax foreclosure timeline. In practice, a property typically goes to auction approximately <strong>2.5 to 3 years after the first missed tax payment</strong>.
          </p>
          <div className="space-y-3">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Year 1 — Delinquency</p>
              <p>If property taxes are unpaid by March 1 of the following year, the taxes become <strong>delinquent</strong> and are forwarded to the Wayne County Treasurer&apos;s office. A 4% administration fee and 1% per month interest are applied.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Year 2 — Forfeiture</p>
              <p>If taxes remain unpaid by March 1 of Year+2, the property is <strong>forfeited</strong> to the Wayne County Treasurer. A $175 forfeiture fee, ~$30 in recording fees, and interest jumps to 1.5% per month retroactive to March 1. The Treasurer serves Notices of Show Cause and Judicial Foreclosure Hearings between October and December of Year+2.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Year 3 — Foreclosure</p>
              <p>Show Cause Hearings are held in January. Judicial Foreclosure Hearings proceed in February. By March, the Circuit Court enters a <strong>judgment of foreclosure</strong>. The redemption deadline is <strong>March 31</strong>. On April 1, title formally <strong>passes to the Wayne County Treasurer</strong>. The property is now county-owned and will be offered at the annual public auction.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The Annual Auction: September vs. October — Know the Difference</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Wayne County&apos;s online auction is hosted at{' '}
            <a href="https://waynecountytreasurermi.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">waynecountytreasurermi.com</a>. It runs in two rounds, and understanding the distinction between them can significantly affect your acquisition strategy.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">September Auction</h3>
              <p className="text-slate-300 leading-relaxed mb-2"><strong>Minimum bid:</strong> The full amount of delinquent taxes + accumulated interest + penalties + the Treasurer&apos;s costs.</p>
              <p className="text-slate-300 leading-relaxed mb-2"><strong>Inventory:</strong> All county-owned properties that have completed the PA 123 three-year process — residential, commercial, and vacant land.</p>
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
                Properties with lower tax debts relative to their market value offer the best September auction opportunities. Properties in more desirable municipalities (Dearborn, Westland, Taylor) tend to attract more competitive September bidding.
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">October Auction</h3>
              <p className="text-slate-300 leading-relaxed mb-2"><strong>Minimum bid:</strong> Lower than September — often as low as $500 on distressed vacant or blighted properties.</p>
              <p className="text-slate-300 leading-relaxed mb-2"><strong>Inventory:</strong> Properties that did not sell at September auction. By definition, these are the harder cases — higher debts relative to value, more distress, more challenging neighborhoods, or more problematic title situations.</p>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm">
                October auctions are where institutional investors and experienced Detroit market operators often find the deepest discounts. The risks are proportionally higher: occupied properties requiring eviction, environmental concerns, extensive rehabilitation needed, or neighborhoods with suppressed rents.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Registration and Deposit Requirements</h2>
          <p className="text-slate-300 leading-relaxed mb-2">To participate in either auction, register in advance at waynecountytreasurermi.com. Requirements:</p>
          <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
            <li><strong>Age:</strong> Must be 18 or older</li>
            <li><strong>Registration fee:</strong> <strong>$50 non-refundable</strong> — paid per registration, not per property bid</li>
            <li><strong>Deposit: $1,000</strong> if bidding on a single property; <strong>$10,000</strong> if bidding on multiple properties</li>
            <li>Deposit accepted via Visa/Mastercard/Discover credit card pre-authorization OR certified funds</li>
            <li><strong>No delinquent taxes:</strong> You cannot register if you owe delinquent taxes in Wayne County</li>
            <li><strong>Government right of first refusal:</strong> State, county, and local municipality may acquire any property at minimum bid before it goes to public bidding</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">What You Actually Get: Quit Claim Deed and Title Risks</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            This is where many investors get burned. When the Wayne County Treasurer sells a property at auction, the buyer receives a <strong>Quit Claim Deed (QCD)</strong>. A QCD conveys whatever interest the grantor holds, with <strong>no warranty of title whatsoever</strong>:
          </p>
          <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
            <li><strong>No guarantee of clear title:</strong> Prior encumbrances not extinguished by the tax foreclosure may survive</li>
            <li><strong>IRS federal tax liens:</strong> Federal liens have a redemption right of 120 days after the tax sale</li>
            <li><strong>Environmental liens:</strong> Contamination liens on commercial or industrial parcels can survive and represent significant liability</li>
            <li><strong>Occupied properties:</strong> If the property is occupied, you&apos;ll need to pursue eviction proceedings — this can take months</li>
            <li><strong>Title insurance difficulty:</strong> Many traditional title insurers will not issue a standard policy without a <strong>quiet title action</strong></li>
          </ul>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <p className="font-semibold text-white mb-1">Quiet Title Recommendation</p>
            <p>Most experienced Wayne County investors pursue a quiet title action after purchase, particularly if they intend to refinance, sell with conventional financing, or resell. A quiet title action typically costs <strong>$1,500–$4,000</strong> in legal fees and takes 3–6 months.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The Rafaeli Ruling: What It Means for Investors</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            In 2020, the Michigan Supreme Court issued its landmark decision in <em>Rafaeli, LLC v. Oakland County</em>, ruling that counties <strong>cannot retain surplus auction proceeds</strong> beyond what was owed in delinquent taxes, interest, and fees. If a tax-foreclosed property sells at auction for $50,000 and the tax debt was $5,000, the former owner may be entitled to the $45,000 surplus.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong>Impact on Wayne County:</strong></p>
          <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
            <li>WCTO faces hundreds of millions in potential surplus claims from pre-2021 auctions</li>
            <li>Former owners of properties auctioned before 2021 may be owed money — they must file claims under MCL 211.78t (deadline: July 1 following the year of foreclosure)</li>
            <li>For <strong>buyers</strong>, the Rafaeli ruling is largely a background issue — it affects the Treasurer&apos;s liability, not your title. But it reinforces the importance of full due diligence on any property with potential surplus-proceeds complexity</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Mortgage Foreclosure by Advertisement (Sheriff Sales)</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Separate from the tax track, Wayne County also sees regular <strong>mortgage foreclosure by advertisement</strong> — Michigan&apos;s non-judicial foreclosure process for defaulted mortgages. Under MCL 600.3201 et seq.:
          </p>
          <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
            <li>Lender publishes a foreclosure notice for <strong>4 consecutive weeks</strong> in a Wayne County newspaper</li>
            <li>A <strong>Sheriff Sale</strong> is scheduled (Michigan sheriff sales are conducted by the county sheriff, unlike California&apos;s trustee sales)</li>
            <li>A <strong>6-month statutory redemption period</strong> gives the prior owner time to reclaim the property (or 1 year if less than 2/3 of the original loan was outstanding at foreclosure; 30 days if the property is abandoned residential)</li>
          </ul>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm">
            For investors: the 6-month redemption period is critical. The winning bidder at Sheriff Sale cannot take possession — or substantially improve the property — during the redemption window. Most Michigan investors treat Sheriff Sale purchases as extended options, with possession expected only after redemption period expiration.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Detroit Land Bank: The Parallel Channel</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The <strong>Detroit Land Bank Authority (DLBA)</strong> at{' '}
            <a href="https://detroitlandbank.org" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">detroitlandbank.org</a>{' '}
            is a separate, parallel acquisition channel that sophisticated Detroit investors use alongside the WCTO auction. The DLBA acquires city-owned properties and sells them through several programs:
          </p>
          <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
            <li><strong>Own-It-Now:</strong> Fixed-price direct sales of vacant land and blighted structures, often at $1,000 or below</li>
            <li><strong>Auction:</strong> Online competitive bidding for higher-quality inventory</li>
            <li><strong>Side Lot Program:</strong> Neighboring homeowners can purchase adjacent vacant lots at subsidized prices</li>
            <li><strong>Rehabbed &amp; Ready:</strong> Move-in-ready properties rehabbed by DLBA partners</li>
          </ul>
          <p className="text-slate-300 leading-relaxed">In 2025, approximately 360 Detroit properties — roughly 17% of potential WCTO auction volume — were acquired or offered through the DLBA pipeline before reaching the county auction. For investors focused on Detroit specifically, DLBA is not an afterthought.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Current Market Context: 85% Volume Reduction from Peak</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            It&apos;s important to calibrate expectations with current data. Wayne County&apos;s tax foreclosure auction was, during the mid-2010s, a pipeline of 5,000 to 20,000+ properties annually — a product of the 2008 financial crisis, Detroit&apos;s municipal bankruptcy, and decades of population decline. That era is largely over.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            By 2025, the WCTO auction featured approximately <strong>370 Detroit homeowner properties</strong> — still an approximately <strong>85% reduction</strong> from peak years. The causes: state intervention programs, DLBA absorption of inventory, population stabilization, and rising property values in Detroit&apos;s recovering corridors.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-4">
            <strong>Pay as You Stay sunset risk:</strong> This state program, which allowed retroactive tax debt reduction for qualifying low-income homeowners, was scheduled to sunset in 2025. If it expires without replacement, foreclosure volume may increase in subsequent auction years.
          </div>
          <p className="text-slate-300 leading-relaxed">
            For cross-market comparison, investors who watch Wayne County alongside{' '}
            <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL foreclosure auction</Link>,{' '}
            <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">Los Angeles County, CA foreclosure listings</Link>,{' '}
            <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County, TX foreclosure auction</Link>, and{' '}
            <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">Maricopa County, AZ foreclosure listings</Link> develop the most nuanced regional arbitrage strategies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">When does the Wayne County foreclosure auction happen each year?</h3>
              <p className="text-slate-300 leading-relaxed">Wayne County runs two auction rounds: the <strong>September auction</strong> (primary, minimum bid = full delinquent tax debt) and the <strong>October auction</strong> (unsold properties from September, lower minimum bids). Exact dates are posted annually at <a href="https://waynecountytreasurermi.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">waynecountytreasurermi.com</a>. Registration opens several weeks before each auction.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">How much do I need to deposit to bid at the Wayne County tax auction?</h3>
              <p className="text-slate-300 leading-relaxed">The registration fee is <strong>$50 non-refundable</strong>. The deposit is <strong>$1,000</strong> if bidding on one property, <strong>$10,000</strong> for multiple properties. Higher thresholds may apply for certain properties. Deposits can be made by credit card pre-authorization or certified funds. You must have no delinquent Wayne County taxes to register.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What kind of deed do I get, and is there title insurance available?</h3>
              <p className="text-slate-300 leading-relaxed">You receive a <strong>Quit Claim Deed</strong> — the Wayne County Treasurer conveys whatever interest it holds with no title warranty. Traditional title insurance is often difficult to obtain without a quiet title action. Most experienced investors budget for a quiet title proceeding ($1,500–$4,000) after purchase, especially if they plan to sell or finance the property.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Can the former owner get the property back after the auction?</h3>
              <p className="text-slate-300 leading-relaxed">No — for tax foreclosure, the <strong>redemption deadline is March 31</strong> immediately following the Circuit Court judgment, which is before the April 1 title transfer to the county. There is no post-auction redemption right on the tax track. However, former owners may have <strong>surplus proceeds claims</strong> under MCL 211.78t if the property sold for more than the tax debt, per the Rafaeli ruling.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What is the difference between the September and October Wayne County auctions?</h3>
              <p className="text-slate-300 leading-relaxed">The September auction requires a minimum bid equal to the full delinquent tax debt plus fees. The October auction features properties that received no bids in September, with significantly lower minimums (sometimes $500 or less). October inventory tends to be more distressed, in more challenged neighborhoods, and carries higher risk — but also deeper discounts for investors who do their homework.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What is the Rafaeli ruling and does it affect me as a buyer?</h3>
              <p className="text-slate-300 leading-relaxed">The 2020 Michigan Supreme Court ruling in <em>Rafaeli v. Oakland County</em> established that counties cannot retain auction proceeds beyond what was owed in tax debt. Former owners may claim surplus proceeds. As a <strong>buyer</strong>, this affects the Treasurer&apos;s liability, not your title — but it reinforces the importance of due diligence. Check whether any former owner has filed a surplus proceeds claim on a property before you bid.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Is the Detroit Land Bank the same as the Wayne County tax auction?</h3>
              <p className="text-slate-300 leading-relaxed">No — the <strong>Detroit Land Bank Authority (DLBA)</strong> is a separate city agency that sells city-owned properties through its own programs (Own-It-Now, auction, Side Lot, Rehabbed &amp; Ready). DLBA acquires many properties before they would reach the county auction. Both channels are active simultaneously and serve overlapping but distinct inventory.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <p className="text-slate-300 leading-relaxed mb-4">
            Forclos aggregates Wayne County tax auction inventory, Sheriff Sale filings, and REO listings in one searchable interface. Set alerts by municipality, property type, or estimated debt threshold. Get early visibility on properties before the auction opens, research ownership history, and monitor DLBA pipeline inventory.
          </p>
          <Link href="/foreclosures/wayne-county-mi" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg transition-colors">
            Browse Wayne County foreclosure listings →
          </Link>
        </section>

        {/* Sources */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://www.legislature.mi.gov/mileg.aspx?page=getObject&objectName=mcl-211-78" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Michigan Compiled Law 211.78 — General Property Tax Act (PA 123 of 1999)</a></li>
            <li>2. <a href="https://courts.michigan.gov/opinions_orders/opinions_orders/Documents/2020/2020-07-17_s158877_45_rafaeli-opn.pdf" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Rafaeli, LLC v. Oakland County, Michigan Supreme Court (2020)</a></li>
            <li>3. <a href="https://www.legislature.mi.gov/mileg.aspx?page=getObject&objectName=mcl-211-78t" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">MCL 211.78t — Notice of Intent to Claim Remaining Proceeds</a></li>
            <li>4. <a href="https://waynecountytreasurermi.com" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Wayne County Treasurer — Annual Tax Auction Portal</a></li>
            <li>5. <a href="https://detroitlandbank.org" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Detroit Land Bank Authority</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
