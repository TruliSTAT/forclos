import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Dallas County Foreclosure Listings: The Complete 2026 Buyer\'s Guide',
  description: 'dallas county foreclosure listings guide: Texas §51.002 timeline, first-Tuesday auction rules, no-redemption advantage, and 2026 auction dates for investors.',
  alternates: { canonical: 'https://forclos.com/foreclosures/dallas-county-tx' },
  openGraph: {
    title: 'Dallas County Foreclosure Listings: The Complete 2026 Buyer\'s Guide',
    description: 'Texas §51.002 non-judicial foreclosure, first-Tuesday auction, no-redemption advantage. 2026 auction dates and buyer checklist for Dallas County investors.',
    url: 'https://forclos.com/foreclosures/dallas-county-tx',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dallas County Foreclosure Listings: The Complete 2026 Buyer\'s Guide',
    description: 'Texas §51.002 non-judicial foreclosure, first-Tuesday auction, no-redemption advantage. 2026 auction dates for Dallas County investors.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dallas County Foreclosure Listings: The Complete 2026 Buyer\'s Guide',
    description: 'Complete guide to dallas county foreclosure listings — Texas §51.002 timeline, first-Tuesday auctions, no-redemption advantage, and 2026 auction dates for investors.',
    url: 'https://forclos.com/foreclosures/dallas-county-tx',
    datePublished: '2026-05-08',
    dateModified: '2026-05-13',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/dallas-county-tx' },
    about: {
      '@type': 'Place',
      name: 'Dallas County',
      address: { '@type': 'PostalAddress', addressRegion: 'TX', addressCountry: 'US' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When are Dallas County foreclosure auctions held?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dallas County foreclosure auctions are held on the first Tuesday of every month between 10:00 AM and 4:00 PM, per Texas Property Code §51.002(b). If the first Tuesday falls on a legal holiday, the auction moves to Wednesday. Auctions take place at or near the Dallas County Courthouse, 600 Commerce St, Dallas, TX 75202.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where can I find Dallas County foreclosure sale notices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Official Notice of Substitute Trustee Sale filings are recorded with the Dallas County Clerk, Recording Division, searchable at dallascounty.org/government/county-clerk/recording/foreclosures.php. Notices must be filed at least 21 days before the scheduled auction.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a redemption period after a Dallas County foreclosure auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No — for standard deed-of-trust (non-judicial) foreclosure sales, Texas does not provide a post-sale redemption period. The sale is final once completed. Tax foreclosure resales carry a 6-month redemption period (2 years for homestead or agricultural property). Consult a Texas real estate attorney before bidding.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a trustee sale and the Dallas County Sheriff\'s auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A trustee sale is a non-judicial foreclosure conducted by the substitute trustee named in a deed of trust, held on the first Tuesday at the courthouse. The Sheriff\'s auction refers to the county\'s tax foreclosure resale program, conducted online through Dallas County Public Works. Both are first-Tuesday events but involve different processes, minimum bids, and legal frameworks.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many foreclosures are currently listed in Dallas County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Approximately 2,886 properties are in some stage of pre-foreclosure in Dallas County, from Notice of Default through scheduled trustee sale. Approximately 72 properties appear on MLS platforms as active foreclosure or bank-owned listings. The large gap reflects that MLS listings only capture REO properties already taken back by banks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a real estate agent to buy at a Dallas County foreclosure auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No — trustee sales are public auctions open to any qualified buyer with certified funds. For REO properties post-auction, working with a licensed Texas real estate agent is standard. Consulting both a real estate agent and a Texas real estate attorney is strongly recommended.',
        },
      },
    ],
  },
]

export default function DallasCountyTXPage() {
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
          <Link href="/foreclosures/texas" className="hover:text-slate-300 transition-colors">Texas foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Dallas County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Dallas County Foreclosure Listings: The Complete 2026 Buyer&apos;s Guide
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-6">
          Texas runs the fastest non-judicial foreclosure pipeline in the country, and Dallas County sits at the center of it.
          If you&apos;re tracking <strong className="text-white">dallas county foreclosure listings</strong>, you need to understand one thing
          before anything else: Texas is a non-judicial, non-redemption state. Once the gavel drops at the first-Tuesday auction,
          the buyer owns the property — no waiting period, no redemption window, no last-minute surprises from the former owner.
          That structural advantage makes Dallas County one of the most investor-friendly foreclosure markets in the nation.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Dallas County Foreclosure Market at a Glance</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Dallas County is the third most populous county in Texas, home to roughly 2.7 million residents.
            At any given time, the market carries approximately <strong className="text-white">~2,886 properties</strong> in some stage
            of pre-foreclosure and <strong className="text-white">~72 MLS-listed</strong> foreclosure or bank-owned properties (median price ~$382,000).
          </p>
          <p className="text-slate-300 leading-relaxed">
            That 40-to-1 ratio between pre-foreclosure inventory and MLS listings reflects a fundamental reality of how foreclosure works
            in Texas. MLS listings only capture properties that have already completed the foreclosure process and are being resold by banks (REO).
            The pre-foreclosure pipeline — where the real opportunity is — never appears on Zillow until the bank has already taken title.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Texas Foreclosure Works: The §51.002 Timeline</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Texas Property Code §51.002 governs the non-judicial foreclosure process for properties purchased with a deed of trust.
            The entire process can move in as little as 60–90 days — far faster than judicial states like Florida or Michigan.
          </p>

          <ol className="space-y-4 mb-6">
            {[
              { n: 1, title: 'Notice of Default', desc: 'After a borrower misses payments, the lender sends a written Notice of Default. Texas law typically gives the borrower 30 days to cure.' },
              { n: 2, title: 'Notice of Acceleration', desc: 'If the default is not cured, the lender sends a Notice of Acceleration, declaring the entire remaining loan balance immediately due.' },
              { n: 3, title: '20-Day Cure Window', desc: 'After receiving the Notice of Acceleration, the borrower has 20 days to reinstate the loan by paying all past-due amounts, late fees, and allowable lender expenses.' },
              { n: 4, title: 'Notice of Trustee Sale Filed', desc: 'The lender\'s trustee files a Notice of Substitute Trustee Sale with the Dallas County Clerk (600 Commerce St) and posts it at the courthouse. Texas law requires a minimum of 21 days between filing and the auction date.' },
              { n: 5, title: 'The Auction', desc: 'The property sells at public auction on the first Tuesday of every month, per Texas Property Code §51.002(b). If the first Tuesday falls on a legal holiday, the auction moves to Wednesday.' },
            ].map(item => (
              <li key={item.n} className="text-slate-300">
                <strong className="text-white">{item.n}. {item.title}</strong> — {item.desc}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Dallas County Auction Specifics</h2>
          <ul className="space-y-2 mb-6 pl-4">
            <li className="text-slate-300"><strong className="text-white">When:</strong> First Tuesday of every month, 10:00 AM – 4:00 PM</li>
            <li className="text-slate-300"><strong className="text-white">Location:</strong> Dallas County Courthouse area, 600 Commerce St, Dallas, TX 75202 (trustee sales); online portal for Sheriff&apos;s tax resales</li>
            <li className="text-slate-300"><strong className="text-white">Notice search:</strong>{' '}
              <a href="https://dallascounty.org/government/county-clerk/recording/foreclosures.php" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Dallas County Clerk Recording Division
              </a>
            </li>
            <li className="text-slate-300"><strong className="text-white">Payment:</strong> Cash or certified funds required at auction or shortly after; terms vary by trustee and sale type</li>
          </ul>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-4">
            <strong>YMYL Notice:</strong> Foreclosure auction procedures, minimum bid amounts, and payment requirements can change.
            Always verify current rules directly with the Dallas County Clerk and the specific substitute trustee before bidding.
            We recommend consulting a licensed Texas real estate attorney before participating in any trustee sale or tax resale auction.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The No-Redemption Advantage: Why Texas Stands Apart</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">Texas has no post-sale redemption period for standard deed-of-trust foreclosures.</strong> Once
            the trustee sale is completed, the buyer&apos;s title is final. Compare that to:
          </p>
          <ul className="space-y-2 mb-4 pl-4">
            <li className="text-slate-300"><strong className="text-white">Michigan:</strong> 6-month statutory redemption period — see our{' '}
              <Link href="/foreclosures/wayne-county-mi" className="text-emerald-400 hover:underline">Wayne County Michigan foreclosure</Link>{' '}
              guide for the full picture</li>
            <li className="text-slate-300"><strong className="text-white">California:</strong> SB 1079 creates tenant and third-party purchase rights that complicate post-auction ownership</li>
            <li className="text-slate-300"><strong className="text-white">Ohio:</strong> 60–90 day redemption periods in most judicial cases</li>
          </ul>
          <p className="text-slate-300 leading-relaxed mb-4">
            The one exception: <strong className="text-white">tax foreclosure resales</strong> carry a <strong className="text-white">6-month redemption period</strong>{' '}
            (extended to 2 years for homestead or agricultural properties). For non-judicial trustee sales — the bulk of the Dallas County market — no such concern exists.
          </p>
          <p className="text-slate-300 leading-relaxed">
            For comparison, see how buyer rights differ in{' '}
            <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County TX</Link>,{' '}
            <Link href="/foreclosures/miami-dade-county-fl" className="text-emerald-400 hover:underline">Miami-Dade County FL</Link>, and{' '}
            <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">Maricopa County AZ</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Buyer&apos;s Checklist Before You Bid</h2>
          <ol className="space-y-3 pl-4">
            {[
              'Pull the Notice of Substitute Trustee Sale from the Dallas County Clerk\'s recording database — confirm address, trustee name, and auction date',
              'Run a title search — identify any senior liens (IRS, HOA, other mortgages) that survive the trustee sale',
              'Check tax status — delinquent property taxes are a lien senior to most deeds of trust; you inherit them',
              'Drive the property — exterior inspection only; assess condition, occupancy, and neighborhood',
              'Verify minimum bid — contact the substitute trustee before auction day; minimums are not publicly posted',
              'Confirm auction logistics — first-Tuesday location can shift; verify with the trustee or county clerk',
              'Have certified funds ready — most trustees require a cashier\'s check at or immediately after sale',
              'Know your exit — flip, rent, or wholesale? Your strategy affects your maximum bid',
            ].map((step, i) => (
              <li key={i} className="text-slate-300">
                <strong className="text-white">{i + 1}.</strong> {step}
              </li>
            ))}
          </ol>
          <p className="text-slate-300 leading-relaxed mt-4">
            For a West Coast contrast, see our{' '}
            <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">Los Angeles County foreclosures</Link>{' '}
            guide covering California&apos;s more complex buyer rights landscape.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">2026 Upcoming Dallas County Auction Dates</h2>
          <p className="text-slate-300 leading-relaxed mb-4">All dates are the first Tuesday of the month. If that date falls on a Texas state holiday, the auction moves to Wednesday.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Month</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Auction Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {[
                  { month: 'June 2026', date: 'June 3, 2026' },
                  { month: 'July 2026', date: 'July 1, 2026' },
                  { month: 'August 2026', date: 'August 4, 2026' },
                  { month: 'September 2026', date: 'September 2, 2026' },
                  { month: 'October 2026', date: 'October 7, 2026' },
                  { month: 'November 2026', date: 'November 4, 2026' },
                  { month: 'December 2026', date: 'December 2, 2026' },
                ].map(row => (
                  <tr key={row.month} className="bg-slate-900/50">
                    <td className="px-4 py-3 text-slate-300">{row.month}</td>
                    <td className="px-4 py-3 font-mono text-emerald-400">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Dallas County Foreclosure FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: 'When are Dallas County foreclosure auctions held?',
                a: 'The first Tuesday of every month between 10:00 AM and 4:00 PM, per Texas Property Code §51.002(b). If the first Tuesday falls on a legal holiday, the auction moves to Wednesday. Location: Dallas County Courthouse, 600 Commerce St, Dallas, TX 75202.',
              },
              {
                q: 'Where can I find Dallas County foreclosure sale notices?',
                a: 'Official Notice of Substitute Trustee Sale filings are recorded with the Dallas County Clerk, Recording Division, searchable at dallascounty.org. Notices must be filed at least 21 days before the scheduled auction.',
              },
              {
                q: 'Is there a redemption period after a Dallas County foreclosure auction?',
                a: 'No — for standard deed-of-trust (non-judicial) foreclosure sales, Texas provides no post-sale redemption period. Tax foreclosure resales carry a 6-month redemption period (2 years for homestead or agricultural property). Consult a Texas real estate attorney before bidding.',
              },
              {
                q: 'What is the difference between a trustee sale and the Dallas County Sheriff\'s auction?',
                a: 'A trustee sale is a non-judicial foreclosure conducted by the substitute trustee named in a deed of trust, held on the first Tuesday at the courthouse. The Sheriff\'s auction refers to the county\'s tax foreclosure resale program, conducted online through Dallas County Public Works.',
              },
              {
                q: 'How many foreclosures are currently listed in Dallas County?',
                a: 'Approximately 2,886 properties are in some stage of pre-foreclosure, and approximately 72 properties appear on MLS platforms as active foreclosure or bank-owned listings. The large gap reflects that MLS listings only capture REO properties already taken back by banks.',
              },
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
            <li>1. <a href="https://dallascounty.org/government/county-clerk/recording/foreclosures.php" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Dallas County Clerk — Foreclosure Notice Search</a></li>
            <li>2. <a href="https://dallascounty.org/departments/pubworks/property-division.php" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Dallas County Sheriff — Tax Resale</a></li>
            <li>3. <a href="https://statutes.capitol.texas.gov/Docs/PR/htm/PR.51.htm#51.002" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Texas Property Code §51.002 — Foreclosure Sales</a></li>
          </ol>
          <p className="text-xs text-slate-600 mt-4">
            The information on this page is provided for general informational purposes only and does not constitute legal or financial advice.
            Foreclosure laws, procedures, and timelines are subject to change. Always consult a licensed Texas real estate attorney before participating in any foreclosure auction.
          </p>
        </section>
      </main>
    </div>
  )
}
