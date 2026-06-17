import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Cook County IL Foreclosure Listings: Active Auctions, Sheriff Sales & Investor Guide',
  description: 'Browse Cook County IL foreclosure listings and learn how Sheriff sales, TJSC auctions, and the Illinois redemption period work. Investor-focused process guide.',
  alternates: { canonical: 'https://forclos.com/foreclosures/cook-county-il' },
  openGraph: {
    title: 'Cook County IL Foreclosure Listings & Auction Guide',
    description: 'Active foreclosure listings, Sheriff sale schedules, TJSC auction details, and Illinois redemption period rules for Cook County investors.',
    url: 'https://forclos.com/foreclosures/cook-county-il',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cook County IL Foreclosure Listings & Auction Guide',
    description: 'Active foreclosure listings, Sheriff sale schedules, TJSC auction details, and Illinois redemption period rules for Cook County investors.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cook County IL Foreclosure Listings: Active Auctions, Sheriff Sales & Investor Guide',
    description: 'Browse Cook County IL foreclosure listings and learn how Sheriff sales, TJSC auctions, and the Illinois redemption period work. Investor-focused process guide.',
    url: 'https://forclos.com/foreclosures/cook-county-il',
    datePublished: '2026-05-03',
    dateModified: '2026-05-03',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/cook-county-il' },
    about: {
      '@type': 'Place',
      name: 'Cook County',
      address: { '@type': 'PostalAddress', addressRegion: 'IL', addressCountry: 'US' },
    },
    keywords: 'cook county il foreclosure listings, sheriff sale cook county, TJSC foreclosure auction, illinois redemption period, cook county foreclosure process',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Cook County',
    description: 'Cook County, Illinois — home to Chicago and the largest county by population in Illinois. Site of one of the Midwest\'s most active judicial foreclosure markets.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 41.8781, longitude: -87.6298 },
    url: 'https://forclos.com/foreclosures/cook-county-il',
    containedInPlace: { '@type': 'State', name: 'Illinois' },
  },
]

export default function CookCountyILPage() {
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
          <Link href="/foreclosures/illinois" className="hover:text-slate-300 transition-colors">Illinois foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Cook County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Cook County IL Foreclosure Listings: Active Auctions, Sheriff Sales &amp; Investor Guide
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 3, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-8">
          Cook County runs one of the largest foreclosure markets in the Midwest. With roughly 349 active
          foreclosure listings at a median asking price of $349,000{' '}
          <a href="https://www.redfin.com/county/727/IL/Cook-County/foreclosures" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">[15]</a>{' '}
          and another 6,800+ properties in some stage of pre-foreclosure{' '}
          <a href="https://www.foreclosurelistings.com/list/IL/COOK/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">[19]</a>,
          there&apos;s consistent inventory for buyers who know where to look — and how the process works.
        </p>
        <p className="text-slate-300 leading-relaxed mb-10">
          This page covers both: where to find current cook county il foreclosure listings, and how the
          county&apos;s dual-track sale system actually operates so you&apos;re not caught off guard at the auction table.
        </p>

        {/* ── Section 1 ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Browse Active Cook County IL Foreclosure Listings</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Active foreclosure inventory in Cook County is tracked across several platforms:
          </p>
          <ul className="space-y-2 mb-4 pl-4">
            <li className="text-slate-300"><strong className="text-white">Zillow</strong> lists approximately 234 active foreclosure homes county-wide <a href="https://www.zillow.com/cook-county-il/foreclosures/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">[16]</a></li>
            <li className="text-slate-300"><strong className="text-white">Redfin</strong> shows 349 foreclosure listings with a median price of $349,000 and an average of 45 days on market, typically receiving around 4 offers per property <a href="https://www.redfin.com/county/727/IL/Cook-County/foreclosures" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">[15]</a></li>
            <li className="text-slate-300"><strong className="text-white">ILFLS.com</strong> publishes free daily auction lists with case numbers, sale dates, and assigned selling officer <a href="https://ilfls.com/free-daily-auction-lists/cook/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">[17]</a></li>
            <li className="text-slate-300"><strong className="text-white">ForeclosureListings.com</strong> maintains a broader database of 47,530 total distressed properties in Cook County, including pre-foreclosures <a href="https://www.foreclosurelistings.com/list/IL/COOK/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">[19]</a></li>
          </ul>
          <p className="text-slate-300 leading-relaxed">
            For auction-specific inventory — properties that have already gone through judgment and are
            scheduled for sale — the most reliable sources are the{' '}
            <a href="https://www.tjsc.com/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">TJSC calendar</a>{' '}
            and the{' '}
            <a href="https://cookcountysheriffil.gov/departments/courts/civil-services/foreclosure-property-sale/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Cook County Sheriff&apos;s civil services page</a>.
            These show properties with confirmed sale dates rather than estimated timelines.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Investors targeting{' '}
            <Link href="/foreclosures/illinois" className="text-emerald-400 hover:underline">Illinois foreclosures</Link>{' '}
            statewide will find Cook County accounts for a disproportionate share of judicial sale volume
            given its population and court docket.
          </p>
        </section>

        {/* ── Section 2 ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Cook County Foreclosure Sales Work: Sheriff vs. TJSC</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            This is the piece most buyers get wrong about Cook County: not all foreclosure auctions are
            Sheriff&apos;s sales. Cook County runs a <strong className="text-white">dual-track system</strong>, and knowing which track a
            specific property is on determines where you show up and when.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Track 1 — Cook County Sheriff&apos;s Sale</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The Sheriff conducts sales at the Richard J. Daley Center, Lower Level Room 06, 50 W. Washington,
            Chicago, IL 60602{' '}
            <a href="https://cookcountysheriffil.gov/departments/courts/civil-services/foreclosure-property-sale/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">[1]</a>.
            Sales run Monday through Friday (excluding holidays) at 1:00 PM. To bid, you need a cashier&apos;s
            or certified check for 10% of your intended maximum bid at time of sale. The remaining balance
            is due within 24 hours. The plaintiff&apos;s attorney pays the Sheriff $265.00 per property for
            conducting the sale.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Track 2 — Private Selling Officers (TJSC, Intercounty)</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Under 735 ILCS 5/15-1506(f)(3), Illinois law allows the foreclosing lender to designate a
            private entity — rather than the Sheriff — to conduct the sale. The Judicial Sales Corporation
            (TJSC) is the most common such entity in Cook County. Founded in 1991 as a subsidiary of
            Attorneys&apos; Title Guaranty Fund, Inc. (ATG), TJSC runs morning sales that begin at 10:30 AM,
            with registration doors opening at 10:00 AM{' '}
            <a href="https://www.tjsc.com/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">[2]</a>.
            Intercounty Sales Corporation, located at 120 W. Madison St., Suite 718A, Chicago, IL 60602,
            is the other primary private selling officer operating in the county.
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <strong className="text-white">How to know which track applies:</strong>{' '}
            Check the foreclosure case on ILFLS.com using the case number. The listing will identify whether
            the sale is assigned to the Sheriff, TJSC, or Intercounty. You can also find this in the court&apos;s
            public case management system through the{' '}
            <a href="https://www.cookcountycourtil.gov/case-type/foreclosure" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Circuit Court of Cook County</a>.
          </div>
        </section>

        {/* ── Section 3 ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The Illinois Foreclosure Timeline: From Lis Pendens to Deed</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Illinois is a judicial foreclosure state, meaning every foreclosure goes through the court system.
            Here&apos;s the sequence:
          </p>
          <ol className="space-y-3 pl-4 mb-6">
            {[
              { n: 1, title: 'Lis pendens filed', desc: 'When the lender files suit, a lis pendens is recorded with the Cook County Clerk\'s Office under 735 ILCS 5/2-1901. This is public notice that the property is in litigation. You can search recorded lis pendens filings by PIN or grantor/grantee at cookcountyclerkil.gov.' },
              { n: 2, title: 'Lawsuit and service', desc: 'The borrower is served with summons. The date of service starts the clock on the statutory redemption period.' },
              { n: 3, title: 'Judgment of foreclosure', desc: 'If the borrower doesn\'t cure the default or the case isn\'t settled, the court enters judgment. This also starts an alternative redemption clock.' },
              { n: 4, title: 'Redemption period', desc: 'The borrower retains rights to redeem the property during the statutory period (see next section).' },
              { n: 5, title: 'Sale', desc: 'Once the redemption period has run, the property is sold at auction by the Sheriff or private selling officer.' },
              { n: 6, title: 'Judicial confirmation', desc: 'After the sale, the plaintiff\'s attorney files a motion to approve the sale. A judge must grant the motion before the sale is final. The Report of Sale, Certificate of Sale, and Receipt of Sale must be executed by the Sheriff\'s Office at least 4 days before the scheduled court confirmation date.' },
            ].map(item => (
              <li key={item.n} className="text-slate-300">
                <strong className="text-white">{item.n}. {item.title}</strong> — {item.desc}
              </li>
            ))}
            <li className="text-slate-300">
              <strong className="text-white">7. Deed recording</strong> — After court confirmation, the purchaser prepares the deed. The Sheriff executes it for a $15.00 fee. The purchaser then records the deed with the Cook County Clerk&apos;s Office.{' '}
              <Link href="/guides/foreclosure-auction" className="text-emerald-400 hover:underline">Our foreclosure auction guide</Link>{' '}
              covers the post-sale documentation process in detail.
            </li>
          </ol>
        </section>

        {/* ── Section 4 ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Understanding the Illinois Redemption Period (735 ILCS 5/15-1603)</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The redemption period is the most investor-critical legal concept in Illinois foreclosure law.
            Get it wrong and a completed sale can unwind on you.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Under{' '}
            <a href="https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=073500050K15-1603" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">735 ILCS 5/15-1603</a>,
            the redemption period for residential real estate ends on the <strong className="text-white">later</strong> of: (a) 7 months from
            the date the mortgagor was served with summons or otherwise submitted to the court&apos;s jurisdiction,
            or (b) 3 months from the date of entry of the judgment of foreclosure.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            In practice, most Cook County residential foreclosures run on the 7-month-from-service clock. This
            means the prior owner can pay off the outstanding debt plus costs and reclaim the property even
            after a winning bidder has paid at auction — up until that 7-month window closes.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Three statutory exceptions that shorten the period</h3>
          <ul className="space-y-2 mb-4 pl-4">
            <li className="text-slate-300"><strong className="text-white">Underwater + waiver:</strong> If the property&apos;s fair market value is less than 90% of the judgment amount AND the mortgagee waives deficiency rights, the redemption period ends 60 days after judgment entry.</li>
            <li className="text-slate-300"><strong className="text-white">Abandonment finding:</strong> If the court finds the property abandoned, the period ends 30 days after judgment entry.</li>
            <li className="text-slate-300"><strong className="text-white">Non-residential:</strong> Commercial properties carry a 6-month redemption period rather than 7.</li>
          </ul>

          <p className="text-slate-300 leading-relaxed mb-4">
            For investors working adjacent markets, the same statute applies — see our pages on{' '}
            <Link href="/foreclosures/dupage-county-il" className="text-emerald-400 hover:underline">DuPage County</Link>,{' '}
            <Link href="/foreclosures/lake-county-il" className="text-emerald-400 hover:underline">Lake County</Link>, and{' '}
            <Link href="/foreclosures/will-county-il" className="text-emerald-400 hover:underline">Will County</Link>{' '}
            for local sale logistics.
          </p>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm">
            <strong>Practical implication:</strong> Don&apos;t schedule contractors or plan a resale timeline until the
            redemption period has lapsed and the court has confirmed the sale.
          </div>
        </section>

        {/* ── Section 5 ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Top Cook County ZIP Codes for Foreclosure Activity</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Foreclosure activity in Cook County is heavily concentrated on the South and West sides of Chicago.
            The following ZIP codes show the highest distressed-property volume based on active listing data
            across multiple platforms.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">ZIP Code</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">City / Neighborhood</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {[
                  { zip: '60620', area: 'Auburn Gresham / Washington Heights', note: 'Consistently highest volume; South Side concentration' },
                  { zip: '60617', area: 'South Chicago / Calumet Heights', note: 'Second-highest active foreclosure listings' },
                  { zip: '60628', area: 'Roseland / Pullman', note: 'Active inventory across multiple platforms' },
                  { zip: '60619', area: 'Chatham / Greater Grand Crossing', note: 'Pre-foreclosure pipeline strong' },
                  { zip: '60623', area: 'Lawndale / Little Village', note: 'West Side distress concentration' },
                ].map(row => (
                  <tr key={row.zip} className="bg-slate-900/50">
                    <td className="px-4 py-3 font-mono text-emerald-400">{row.zip}</td>
                    <td className="px-4 py-3 text-slate-300">{row.area}</td>
                    <td className="px-4 py-3 text-slate-400">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-2">
            Median list prices across the county run approximately $349,000, but South and West side ZIP codes
            frequently see foreclosure listings in the $80,000–$180,000 range.
          </p>
        </section>

        {/* ── Section 6 ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How to Find and Research Pre-Foreclosures in Cook County</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Investors who want to get ahead of the auction calendar have three primary tools:
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">1. Lis pendens search at the Cook County Clerk&apos;s Office</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The Clerk&apos;s Recordings Division maintains a searchable database of all recorded lis pendens
            filings at{' '}
            <a href="https://www.cookcountyclerkil.gov/recordings/search-recordings" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">cookcountyclerkil.gov</a>.
            Search by PIN (property index number) or grantor/grantee name. A lis pendens does not mean a
            property is scheduled for auction — it means foreclosure litigation has been filed.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">2. ILFLS.com daily auction lists</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            <a href="https://ilfls.com/free-daily-auction-lists/cook/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">ILFLS</a>{' '}
            publishes daily scheduled foreclosure auctions for Cook County with case numbers, property
            addresses, and assigned selling officer. This is the most direct way to monitor what&apos;s actually
            hitting the auction block each week.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">3. TJSC and Sheriff&apos;s Office calendars</h3>
          <p className="text-slate-300 leading-relaxed">
            The Judicial Sales Corporation posts sale schedules at{' '}
            <a href="https://www.tjsc.com/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">tjsc.com</a>.
            The Cook County Sheriff&apos;s civil services page lists Sheriff-conducted sales. Cross-referencing
            both gives you full auction visibility for the week.
          </p>
        </section>

        {/* ── Section 7 ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Cook County Foreclosure FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What payment is required to bid at a Cook County Sheriff\'s sale?',
                a: 'A cashier\'s or certified check for 10% of your maximum intended bid at time of sale. Remaining balance due within 24 hours.',
              },
              {
                q: 'Can a sale be rejected after I win the bid?',
                a: 'Yes. Every judicial sale requires court confirmation — the plaintiff\'s attorney files a motion and the judge must approve it. Grounds for rejection include inadequate sale price or procedural defects. Don\'t schedule contractors until confirmation is granted.',
              },
              {
                q: 'What is the redemption period risk for investors?',
                a: 'The prior owner retains the right to pay off the debt and reclaim the property for up to 7 months from service of summons. If they redeem, the sale unwinds. Don\'t close on title or begin renovations until the redemption period has lapsed and the court has confirmed the sale.',
              },
              {
                q: 'Where are Cook County judicial foreclosure cases filed?',
                a: 'The Chancery Division of the Circuit Court of Cook County, Mortgage Foreclosure Section.',
              },
              {
                q: 'What is TJSC and why do some sales go through them instead of the Sheriff?',
                a: 'TJSC is a private selling officer authorized under 735 ILCS 5/15-1506(f)(3). Lenders choose their selling officer when the foreclosure is initiated. TJSC runs morning sales (10:30 AM); the Sheriff runs afternoon sales (1:00 PM).',
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sources ── */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://cookcountysheriffil.gov/departments/courts/civil-services/foreclosure-property-sale/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Cook County Sheriff — Foreclosure Property Sale</a></li>
            <li>2. <a href="https://www.tjsc.com/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">The Judicial Sales Corporation (TJSC)</a></li>
            <li>4. <a href="https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=073500050K15-1603" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">735 ILCS 5/15-1603 — Redemption Period</a></li>
            <li>7. <a href="https://www.cookcountyclerkil.gov/recordings/search-recordings" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Cook County Clerk — Recordings Search</a></li>
            <li>9. <a href="https://www.cookcountycourtil.gov/case-type/foreclosure" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Circuit Court of Cook County — Foreclosure</a></li>
            <li>15. <a href="https://www.redfin.com/county/727/IL/Cook-County/foreclosures" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Redfin — Cook County Foreclosures</a></li>
            <li>16. <a href="https://www.zillow.com/cook-county-il/foreclosures/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Zillow — Cook County Foreclosures</a></li>
            <li>17. <a href="https://ilfls.com/free-daily-auction-lists/cook/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">ILFLS — Cook County Daily Auction List</a></li>
            <li>18. <a href="https://www.housingstudies.org/data-portal/browse/?indicator=total-foreclosure-activity&area=cook-county-regions" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">DePaul Institute for Housing Studies — Data Portal</a></li>
            <li>19. <a href="https://www.foreclosurelistings.com/list/IL/COOK/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">ForeclosureListings.com — Cook County</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
