import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Wayne County Michigan Foreclosure Auction — Complete Investor Guide to the Annual Tax Sale',
  description: 'Complete investor guide to the Wayne County Michigan foreclosure auction: PA 123 tax timeline, September vs. October auction, registration requirements, quit claim deed risks, Rafaeli ruling, and Detroit Land Bank.',
  alternates: { canonical: 'https://forclos.com/foreclosures/wayne-county-mi' },
  openGraph: {
    title: 'Wayne County Michigan Foreclosure Auction — Investor Guide',
    description: 'PA 123 tax foreclosure timeline, September vs October auction, QCD title risks, Rafaeli ruling, and DLBA channel for Detroit area investors.',
    url: 'https://forclos.com/foreclosures/wayne-county-mi',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wayne County Michigan Foreclosure Auction — Investor Guide',
    description: 'PA 123 timeline, September vs October auction, QCD title risks, Rafaeli ruling, DLBA — complete Wayne County investor guide.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wayne County Michigan Foreclosure Auction — The Complete Investor\'s Guide to the Annual Tax Sale',
    description: 'Complete investor guide to the Wayne County Michigan foreclosure auction: PA 123 tax timeline, September vs. October auction mechanics, registration, quit claim deed risks, Rafaeli ruling, and Detroit Land Bank.',
    keywords: 'wayne county michigan foreclosure auction, wayne county tax foreclosure, detroit foreclosure auction, PA 123 michigan, wayne county treasurer auction',
    url: 'https://forclos.com/foreclosures/wayne-county-mi',
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: { '@type': 'Organization', name: 'Forclos', url: 'https://forclos.com' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When does the Wayne County foreclosure auction happen each year?',
        acceptedAnswer: { '@type': 'Answer', text: 'Wayne County runs two rounds: the September auction (minimum bid = full delinquent tax debt) and the October auction (unsold properties from September, lower minimums). Exact dates are posted annually at waynecountytreasurermi.com.' },
      },
      {
        '@type': 'Question',
        name: 'How much do I need to deposit to bid at the Wayne County tax auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'The registration fee is $50 non-refundable. The deposit is $1,000 for one property or $10,000 for multiple properties. You must have no delinquent Wayne County taxes to register.' },
      },
      {
        '@type': 'Question',
        name: 'What kind of deed do I get from the Wayne County tax auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'You receive a Quit Claim Deed with no title warranty. Traditional title insurance often requires a quiet title action ($1,500–$4,000) before it can be issued. Most experienced investors budget for this step.' },
      },
      {
        '@type': 'Question',
        name: 'Can the former owner get the property back after the Wayne County auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. The redemption deadline is March 31 — before the April 1 title transfer to the county. There is no post-auction redemption right on the tax track. Former owners may file surplus proceeds claims under MCL 211.78t if the property sold for more than the tax debt.' },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between the September and October Wayne County auctions?',
        acceptedAnswer: { '@type': 'Answer', text: 'September auction: minimum bid equals the full delinquent tax debt plus fees. October auction: features unsold September properties with lower minimums, sometimes $500 or less. October inventory is typically more distressed with deeper discounts but higher risk.' },
      },
      {
        '@type': 'Question',
        name: 'What is the Rafaeli ruling and does it affect buyers?',
        acceptedAnswer: { '@type': 'Answer', text: 'The 2020 Michigan Supreme Court ruling in Rafaeli v. Oakland County established that counties cannot retain surplus auction proceeds beyond the tax debt owed. As a buyer this affects the Treasurer\'s liability, not your title — but due diligence on surplus proceeds claims is recommended.' },
      },
      {
        '@type': 'Question',
        name: 'Is the Detroit Land Bank the same as the Wayne County tax auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. The Detroit Land Bank Authority (DLBA) is a separate city agency selling city-owned properties through its own programs: Own-It-Now, auction, Side Lot, and Rehabbed & Ready. Both channels operate simultaneously with overlapping but distinct inventory.' },
      },
    ],
  },
]

export default function WayneCountyMIPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <NavBar />
      <main className="max-w-3xl mx-auto px-6 py-16">
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
        <p className="text-slate-400 text-sm mb-8">Updated May 6, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-6">
          The <strong className="text-white">Wayne County Michigan foreclosure auction</strong> is the largest tax foreclosure sale in the state —
          historically putting thousands of Detroit-area properties on the block at prices that bear little resemblance to market value.
          This guide covers everything: the PA 123 / MCL 211.78 tax foreclosure timeline, September vs. October auction mechanics,
          registration and deposit requirements, quit claim deed title risk, the Rafaeli ruling, the parallel mortgage foreclosure track,
          Detroit Land Bank as an alternative channel, and current volume context.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Michigan&apos;s Two Foreclosure Tracks</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Tax Foreclosure (PA 123 / MCL 211.78)</p>
              <p className="text-slate-300 text-sm">The county treasurer forecloses on properties with delinquent property taxes. This is the system behind the annual WCTO online auction — what most investors mean when they search &ldquo;wayne county foreclosure auction.&rdquo;</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white font-semibold mb-1">Mortgage Foreclosure by Advertisement (Sheriff Sales)</p>
              <p className="text-slate-300 text-sm">Non-judicial foreclosure on defaulted mortgage debt. Results in Sheriff Sales — yes, Michigan has actual sheriff sales, unlike California&apos;s trustee sales. Governed by MCL 600.3201 et seq.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">PA 123 Tax Foreclosure: The Full 3-Year Timeline</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Michigan Public Act 123 of 1999 (MCL 211.78) established a three-year timeline designed to give property owners
            multiple opportunities to cure. A property typically goes to auction approximately 2.5 to 3 years after the first missed tax payment.
          </p>
          <div className="space-y-4">
            {[
              { year: 'Year 1 — Delinquency', body: 'Taxes unpaid by March 1 become delinquent and transfer to the Wayne County Treasurer. A 4% admin fee and 1% per month interest apply. By Oct 1, an additional $15 collection fee per parcel is added.' },
              { year: 'Year 2 — Forfeiture', body: 'If still unpaid by March 1, the property is forfeited to the Wayne County Treasurer. A $175 forfeiture fee, ~$30 recording fees, and interest jumps to 1.5% per month retroactive. Notices of Show Cause and Judicial Foreclosure Hearings are served Oct–Dec.' },
              { year: 'Year 3 — Foreclosure', body: 'Show Cause Hearings in January (via Zoom). Judicial Foreclosure Hearings in February. Circuit Court enters judgment of foreclosure in March. Redemption deadline: March 31. On April 1, title passes to the Wayne County Treasurer. Properties enter the annual public auction.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 rounded-lg p-4">
                <p className="text-white font-semibold mb-2">{item.year}</p>
                <p className="text-slate-300 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">September vs. October Auction — Know the Difference</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Wayne County&apos;s online auction is hosted at{' '}
            <a href="https://www.waynecountytreasurermi.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">waynecountytreasurermi.com</a>.
            It runs in two rounds with meaningfully different strategies.
          </p>
          <div className="grid gap-4">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">September Auction</h3>
              <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Minimum bid:</strong> Full delinquent tax debt + interest + penalties + Treasurer&apos;s costs. The real bid — can be substantial even on modest properties.</p>
              <p className="text-slate-300 text-sm"><strong className="text-white">Strategy:</strong> Properties with lower tax debts relative to market value offer the best opportunities. More desirable municipalities (Dearborn, Westland, Taylor) attract competitive September bidding.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">October Auction</h3>
              <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Minimum bid:</strong> Often as low as $500. Properties that did not sell in September.</p>
              <p className="text-slate-300 text-sm"><strong className="text-white">Strategy:</strong> Deepest discounts for experienced Detroit operators — but proportionally higher risks: occupied properties requiring eviction, environmental concerns, or neighborhoods with suppressed rents.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Registration and Deposit Requirements</h2>
          <ul className="space-y-2 pl-4 text-slate-300">
            <li>Must be 18 or older</li>
            <li><strong className="text-white">$50 non-refundable</strong> registration fee per registration</li>
            <li><strong className="text-white">$1,000 deposit</strong> to bid on one property; <strong className="text-white">$10,000</strong> for multiple properties</li>
            <li>Deposit via Visa/MC/Discover pre-authorization OR certified funds</li>
            <li>No delinquent Wayne County taxes allowed — enforced at registration</li>
            <li>State of Michigan, county, and local municipality hold right of first refusal at minimum bid before public bidding</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Quit Claim Deed and Title Risks</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            When Wayne County sells a property at auction, the buyer receives a <strong className="text-white">Quit Claim Deed (QCD)</strong> — conveying
            whatever interest the Treasurer holds, with <strong className="text-white">no title warranty whatsoever</strong>.
          </p>
          <div className="space-y-3 mb-4">
            {[
              { title: 'No guarantee of clear title', body: 'Prior encumbrances not extinguished by tax foreclosure may survive.' },
              { title: 'IRS federal tax liens', body: 'Federal liens have a 120-day redemption right after the tax sale. The government can reclaim the property within that window.' },
              { title: 'Environmental liens', body: 'Contamination liens on commercial or industrial parcels can survive and represent significant liability.' },
              { title: 'Occupied properties', body: 'You must pursue eviction proceedings under Michigan law — can take months.' },
              { title: 'Title insurance difficulty', body: 'Many traditional insurers won\'t issue a standard policy on a tax-auction QCD without a quiet title action.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-amber-600 pl-4">
                <p className="text-white font-semibold mb-1">{item.title}</p>
                <p className="text-slate-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-900 border border-emerald-800 rounded-lg p-4 text-slate-300 text-sm">
            <strong className="text-emerald-400">The quiet title recommendation:</strong> Most experienced Wayne County investors pursue a quiet title action post-purchase — especially for refinancing or resale. Typical cost: $1,500–$4,000 in legal fees, 3–6 months timeline.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The Rafaeli Ruling</h2>
          <p className="text-slate-300 leading-relaxed">
            In 2020, the Michigan Supreme Court ruled in <em>Rafaeli, LLC v. Oakland County</em> that counties{' '}
            <strong className="text-white">cannot retain surplus auction proceeds</strong> beyond what was owed in delinquent taxes, interest, and fees.
            If a property sells for $50,000 and the tax debt was $5,000, the former owner may be entitled to the $45,000 surplus.
            As a buyer, this affects the Treasurer&apos;s liability — not your title — but reinforces the importance of full due diligence
            on properties with potential surplus-proceeds complexity. Former owners must file claims under MCL 211.78t (deadline: July 1
            following the foreclosure year).
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Mortgage Foreclosure by Advertisement (Sheriff Sales)</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Separate from the tax track, Michigan also uses <strong className="text-white">mortgage foreclosure by advertisement</strong> (MCL 600.3201 et seq.):
          </p>
          <ul className="space-y-2 pl-4 text-slate-300">
            <li>Lender publishes foreclosure notice for <strong className="text-white">4 consecutive weeks</strong> in a Wayne County newspaper</li>
            <li>A <strong className="text-white">Sheriff Sale</strong> is scheduled — Michigan&apos;s sheriff actually conducts the sale (unlike California)</li>
            <li>Prior owner has a <strong className="text-white">6-month statutory redemption period</strong> to reclaim the property (1 year if &lt; 2/3 of loan was outstanding at foreclosure; 30 days if property is abandoned residential)</li>
          </ul>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm mt-4">
            <strong className="text-white">Investor note:</strong> The 6-month redemption period means you cannot take possession — or substantially improve the property — during the window. Most Michigan investors treat Sheriff Sale purchases as extended options, with possession expected only after redemption period expiration.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Detroit Land Bank: The Parallel Channel</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The <strong className="text-white">Detroit Land Bank Authority (DLBA)</strong> at{' '}
            <a href="https://www.detroitlandbank.org" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">detroitlandbank.org</a>{' '}
            is a separate city agency that sells city-owned properties through four programs:
          </p>
          <ul className="space-y-2 pl-4 text-slate-300">
            <li><strong className="text-white">Own-It-Now:</strong> Fixed-price sales of vacant land and blighted structures, often at $1,000 or below</li>
            <li><strong className="text-white">Auction:</strong> Online competitive bidding for higher-quality inventory</li>
            <li><strong className="text-white">Side Lot Program:</strong> Neighboring homeowners purchase adjacent vacant lots at subsidized prices</li>
            <li><strong className="text-white">Rehabbed &amp; Ready:</strong> Move-in-ready properties rehabbed by DLBA partners</li>
          </ul>
          <p className="text-slate-300 leading-relaxed mt-4">
            In 2025, approximately 360 Detroit properties — roughly 17% of potential WCTO auction volume — were acquired or offered
            through the DLBA pipeline before reaching the county auction. For Detroit-focused investors, DLBA is not an afterthought.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Current Market Context: 85% Volume Reduction from Peak</h2>
          <p className="text-slate-300 leading-relaxed">
            Wayne County&apos;s tax foreclosure auction peaked during the mid-2010s with 5,000 to 20,000+ properties annually — a product
            of the 2008 financial crisis, Detroit&apos;s municipal bankruptcy, and population decline. By 2025, the WCTO auction featured
            approximately <strong className="text-white">370 Detroit homeowner properties</strong> — an approximately{' '}
            <strong className="text-white">85% reduction</strong> from peak years. Causes: state intervention programs (Pay as You Stay),
            DLBA absorption, population stabilization, and rising values in recovering corridors.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            For cross-market comparison, Forclos also tracks{' '}
            <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL</Link>,{' '}
            <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">Los Angeles County, CA</Link>,{' '}
            <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County, TX</Link>,{' '}
            <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">Maricopa County, AZ</Link>, and{' '}
            <Link href="/foreclosures/cuyahoga-county-oh" className="text-emerald-400 hover:underline">Cuyahoga County, OH</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'When does the Wayne County foreclosure auction happen each year?', a: 'Two rounds: September auction (minimum bid = full delinquent tax debt) and October auction (unsold September properties, lower minimums). Dates posted annually at waynecountytreasurermi.com.' },
              { q: 'How much do I need to deposit to bid?', a: '$50 non-refundable registration fee. $1,000 deposit for one property; $10,000 for multiple. Must have no delinquent Wayne County taxes to register.' },
              { q: 'What kind of deed do I get?', a: 'A Quit Claim Deed with no title warranty. Most experienced investors budget for a quiet title action ($1,500–$4,000) before refinancing or reselling.' },
              { q: 'Can the former owner get the property back after auction?', a: 'No. Redemption deadline is March 31, before the April 1 title transfer. No post-auction redemption right on the tax track. Former owners may file surplus proceeds claims under MCL 211.78t.' },
              { q: 'What is the difference between September and October auctions?', a: 'September: minimum bid = full tax debt plus fees. October: unsold September properties, minimums sometimes $500 or less. October offers deeper discounts with proportionally higher risk.' },
              { q: 'What is the Rafaeli ruling and does it affect buyers?', a: 'The 2020 Michigan Supreme Court ruling established counties cannot retain surplus auction proceeds. As a buyer it affects the Treasurer\'s liability, not your title — but check whether a surplus claim has been filed on target properties.' },
              { q: 'Is the Detroit Land Bank the same as the Wayne County tax auction?', a: 'No. DLBA is a separate city agency selling city-owned properties through Own-It-Now, auction, Side Lot, and Rehabbed & Ready programs. Both channels run simultaneously with distinct inventory.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://www.waynecountytreasurermi.com" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Wayne County Treasurer — Annual Auction</a></li>
            <li>2. Michigan Public Act 123 of 1999 (MCL 211.78) — Tax Foreclosure</li>
            <li>3. MCL 600.3201 et seq. — Foreclosure by Advertisement (Sheriff Sales)</li>
            <li>4. <em>Rafaeli, LLC v. Oakland County</em>, Mich. Supreme Court (2020)</li>
            <li>5. MCL 211.78t — Surplus Proceeds Claims</li>
            <li>6. <a href="https://www.detroitlandbank.org" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Detroit Land Bank Authority</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
