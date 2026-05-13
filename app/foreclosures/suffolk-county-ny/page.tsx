import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Suffolk County NY Foreclosure Listings | Buyer\'s Guide to Long Island Foreclosures',
  description: 'Find Suffolk County NY foreclosure listings. Learn how NY judicial foreclosures work, search court records, and bid at the county tax auction on Long Island.',
  alternates: { canonical: 'https://forclos.com/foreclosures/suffolk-county-ny' },
  openGraph: {
    title: 'Suffolk County NY Foreclosure Listings | Buyer\'s Guide to Long Island Foreclosures',
    description: 'NY RPAPL Article 13 judicial foreclosure, CPLR §3408, Suffolk County Supreme Court at 400 Carleton Ave Central Islip, annual tax deed auction at suffolk.ny.realforeclose.com.',
    url: 'https://forclos.com/foreclosures/suffolk-county-ny',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suffolk County NY Foreclosure Listings | Buyer\'s Guide to Long Island Foreclosures',
    description: 'NY judicial foreclosure guide: RPAPL Article 13, CPLR §3408, Suffolk County Supreme Court, annual tax deed auction.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Buy at a Suffolk County NY Foreclosure Auction',
    description: 'Step-by-step guide to researching, registering, and bidding on foreclosed properties at Suffolk County Supreme Court judicial auctions and the county\'s annual tax property auction.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Search the Public Record', text: 'Visit clerk.suffolkcountyny.gov or NYSCEF (nyscef.ny.gov) to search for lis pendens filings and active foreclosure cases in Suffolk County Supreme Court.' },
      { '@type': 'HowToStep', position: 2, name: 'Conduct a Title Search', text: 'Order a full title search and lien report before bidding. Foreclosure properties sell as-is; prior liens may survive the sale.' },
      { '@type': 'HowToStep', position: 3, name: 'Review Property Tax Status', text: 'Check the Suffolk County Assessor for outstanding property taxes and any additional municipal liens that will be your responsibility as the new owner.' },
      { '@type': 'HowToStep', position: 4, name: 'Register to Bid', text: 'For judicial auctions, confirm the referee\'s sale date and location (usually 400 Carleton Ave, Central Islip). For the county tax auction, register at suffolk.ny.realforeclose.com before the registration deadline.' },
      { '@type': 'HowToStep', position: 5, name: 'Prepare Certified Funds', text: 'Bring a certified bank check for the required deposit — typically 10% of your bid — to the judicial auction.' },
      { '@type': 'HowToStep', position: 6, name: 'Submit Your Bid', text: 'At the referee\'s sale, bidding is open and competitive. State your bid amount clearly. The highest bidder wins.' },
      { '@type': 'HowToStep', position: 7, name: 'Close and Take Title', text: 'After winning, work with a NY real estate attorney to complete closing, record the deed with the Suffolk County Clerk, and ensure title insurance is issued.' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Suffolk County a judicial or non-judicial foreclosure state?',
        acceptedAnswer: { '@type': 'Answer', text: 'New York — including Suffolk County — is a judicial foreclosure state. All mortgage foreclosures must be filed as lawsuits in Suffolk County Supreme Court under RPAPL Article 13. There is no non-judicial process in New York.' },
      },
      {
        '@type': 'Question',
        name: 'How long does foreclosure take in Suffolk County?',
        acceptedAnswer: { '@type': 'Answer', text: 'The typical timeline is 12 to 18 months from the initial court filing to the referee\'s auction sale. Contested cases can take 24 to 36 months.' },
      },
      {
        '@type': 'Question',
        name: 'Where is the Suffolk County Supreme Court that handles foreclosures?',
        acceptedAnswer: { '@type': 'Answer', text: 'Suffolk County Supreme Court is located at 400 Carleton Ave, Central Islip, NY 11722. Electronic filings go through NYSCEF at nyscef.ny.gov.' },
      },
      {
        '@type': 'Question',
        name: 'Does Suffolk County hold tax lien or tax deed sales?',
        acceptedAnswer: { '@type': 'Answer', text: 'Suffolk County conducts tax deed auctions, not tax lien certificate sales. The county auctions tax-delinquent properties outright via suffolk.ny.realforeclose.com, transferring a deed to the winning bidder.' },
      },
      {
        '@type': 'Question',
        name: 'How do I find pre-foreclosures in Suffolk County before they go to auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'Search for newly filed lis pendens on the Suffolk County Clerk\'s website (clerk.suffolkcountyny.gov) or new foreclosure case filings on NYSCEF (nyscef.ny.gov). These records are public and updated regularly.' },
      },
    ],
  },
]

export default function SuffolkCountyNYPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <NavBar />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/foreclosures/new-york" className="hover:text-slate-300 transition-colors">New York foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Suffolk County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Suffolk County NY Foreclosure Listings | Buyer&apos;s Guide to Long Island Foreclosures
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-8">
          Suffolk County is one of the most active foreclosure markets in New York State. With nearly 1.5 million residents spread across 10 towns from Babylon to Southold,
          the county produces a steady stream of foreclosure opportunities — and a uniquely complex process for buyers to navigate. This guide covers both main channels:
          judicial mortgage foreclosures and the county&apos;s annual tax property auction.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Understanding New York&apos;s Judicial Foreclosure Process</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            New York&apos;s foreclosure process is governed by two primary laws:{' '}
            <strong className="text-white">RPAPL Article 13</strong> (Real Property Actions and Proceedings Law, §§1301–1391) and{' '}
            <strong className="text-white">CPLR §3408</strong> (mandatory settlement conferences in residential cases).
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Under RPAPL §1304, lenders must provide a <strong className="text-white">90-day pre-foreclosure notice</strong> to homeowners before filing suit on a residential mortgage.
            This grace period creates the &ldquo;pre-foreclosure&rdquo; window that many listing services track.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">The Suffolk County Foreclosure Timeline</h3>
          <ol className="space-y-2 pl-4 mb-4">
            {[
              { n: 1, t: 'Default', d: 'Borrower misses mortgage payments; lender sends default notice' },
              { n: 2, t: '90-Day Notice (RPAPL §1304)', d: 'Mandatory pre-foreclosure notice mailed to borrower' },
              { n: 3, t: 'Lis Pendens Filed', d: 'Lender files notice of pending litigation with the Suffolk County Clerk (clerk.suffolkcountyny.gov) — earliest buyers can identify properties' },
              { n: 4, t: 'Summons & Complaint', d: 'Formal foreclosure action filed in Suffolk County Supreme Court' },
              { n: 5, t: 'Settlement Conference (CPLR §3408)', d: 'Court schedules mandatory conference for residential properties' },
              { n: 6, t: 'Judgment of Foreclosure and Sale', d: 'Court enters judgment authorizing the auction' },
              { n: 7, t: 'Referee\'s Sale / Public Auction', d: 'Property sold at public auction, typically at the courthouse or designated location' },
            ].map(item => (
              <li key={item.n} className="text-slate-300">
                <strong className="text-white">{item.n}. {item.t}</strong> — {item.d}
              </li>
            ))}
          </ol>
          <p className="text-slate-300 leading-relaxed">
            <strong className="text-white">Typical timeline: 12 to 18 months</strong> from initial filing to auction. Contested cases can run 24–36 months.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Suffolk County Tax Property Auction</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Beyond mortgage foreclosures, Suffolk County holds an <strong className="text-white">annual Real Property Tax Auction</strong> for parcels where the owner has failed to pay property taxes.
            These are <strong className="text-white">tax-deed sales</strong> (not tax-lien certificates) — meaning the winning bidder receives a deed to the property.
          </p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <p className="text-slate-300 text-sm mb-2"><strong className="text-white">2024 Tax Auction (most recent):</strong></p>
            <ul className="space-y-1 text-slate-400 text-sm pl-4">
              <li>Platform:{' '}<a href="https://suffolk.ny.realforeclose.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">suffolk.ny.realforeclose.com</a></li>
              <li>Auction date: November 20, 2024, starting at 9:30 a.m.</li>
              <li>Parcels available: Approximately 65 properties</li>
              <li>Registration deadline: November 15, 2024</li>
            </ul>
          </div>
          <p className="text-slate-300 leading-relaxed">
            The county typically announces the annual auction in September or October. Monitor{' '}
            <a href="https://suffolkcountyny.gov/Departments/Finance" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">suffolkcountyny.gov/Departments/Finance</a>{' '}
            for the upcoming year&apos;s announcement.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How to Find Suffolk County NY Foreclosure Listings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Source</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">What You Find</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {[
                  { s: 'Suffolk County Clerk', url: 'https://clerk.suffolkcountyny.gov', w: 'Lis pendens, judgments, deed history' },
                  { s: 'NYSCEF', url: 'https://nyscef.ny.gov', w: 'Active court cases' },
                  { s: 'RealForeclose (county auction)', url: 'https://suffolk.ny.realforeclose.com', w: 'Tax-deed auction parcels' },
                  { s: 'Suffolk County GIS', url: 'https://gis.suffolkcountyny.gov', w: 'Parcel maps & tax status' },
                ].map(row => (
                  <tr key={row.s} className="bg-slate-900/50">
                    <td className="px-4 py-3"><a href={row.url} className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">{row.s}</a></td>
                    <td className="px-4 py-3 text-slate-400">{row.w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Suffolk County NY Foreclosure FAQs</h2>
          <div className="space-y-6">
            {[
              { q: 'Is Suffolk County a judicial or non-judicial foreclosure state?', a: 'New York — including Suffolk County — is a judicial foreclosure state. All mortgage foreclosures must be filed as lawsuits in Suffolk County Supreme Court under RPAPL Article 13. There is no non-judicial process in New York.' },
              { q: 'How long does foreclosure take in Suffolk County?', a: 'The typical timeline is 12 to 18 months from the initial court filing to the referee\'s auction sale. Contested cases with active defenses can take 24 to 36 months or longer.' },
              { q: 'Where is the Suffolk County Supreme Court that handles foreclosures?', a: 'Suffolk County Supreme Court is located at 400 Carleton Ave, Central Islip, NY 11722. Electronic filings go through NYSCEF at nyscef.ny.gov.' },
              { q: 'Does Suffolk County hold tax lien or tax deed sales?', a: 'Suffolk County conducts tax deed auctions, not tax lien certificate sales. The county auctions tax-delinquent properties outright via suffolk.ny.realforeclose.com, transferring a deed to the winning bidder.' },
              { q: 'How do I find pre-foreclosures in Suffolk County before they go to auction?', a: 'Search for newly filed lis pendens on the Suffolk County Clerk\'s website (clerk.suffolkcountyny.gov) or new foreclosure case filings on NYSCEF (nyscef.ny.gov). These records are public and give investors a 12+ month window before the auction date is set.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">Compare Nearby Long Island &amp; NYC Markets</h2>
          <ul className="space-y-2 pl-4">
            <li><Link href="/foreclosures/nassau-county-ny" className="text-emerald-400 hover:underline">Nassau County NY Foreclosure Listings</Link> — Nassau&apos;s western neighbor; higher price points, western Long Island</li>
            <li><Link href="/foreclosures/queens-county-ny" className="text-emerald-400 hover:underline">Queens County NY Foreclosure Listings</Link> — NYC borough adjacent to Nassau; same judicial process</li>
            <li><Link href="/foreclosures/kings-county-ny" className="text-emerald-400 hover:underline">Kings County (Brooklyn) Foreclosure Listings</Link> — extremely high property values, competitive auctions</li>
            <li><Link href="/foreclosures/bronx-county-ny" className="text-emerald-400 hover:underline">Bronx County NY Foreclosure Listings</Link> — different market dynamics and price tiers</li>
          </ul>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://clerk.suffolkcountyny.gov" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Suffolk County Clerk</a></li>
            <li>2. <a href="https://nyscef.ny.gov" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">NYSCEF — NY eCourts</a></li>
            <li>3. <a href="https://suffolk.ny.realforeclose.com" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">suffolk.ny.realforeclose.com — Tax Deed Auction</a></li>
            <li>4. <a href="https://gis.suffolkcountyny.gov" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Suffolk County GIS Dashboard</a></li>
            <li>5. Real Property Actions and Proceedings Law (RPAPL) Article 13; CPLR §3408</li>
          </ol>
          <p className="text-xs text-slate-600 mt-4">
            YMYL advisory: Foreclosure auctions carry significant financial risk. Consult a licensed New York real estate attorney before purchasing property at auction.
          </p>
        </section>
      </main>
    </div>
  )
}
