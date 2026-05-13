import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Fulton County Foreclosure Listings: Complete Guide to Atlanta-Area Sales',
  description: 'Complete guide to fulton county foreclosure listings — GA non-judicial power-of-sale process, O.C.G.A. §44-14-162, courthouse steps at 136 Pryor St SW, first-Tuesday sales.',
  alternates: { canonical: 'https://forclos.com/foreclosures/fulton-county-ga' },
  openGraph: {
    title: 'Fulton County Foreclosure Listings: Complete Guide to Atlanta-Area Sales',
    description: 'GA non-judicial power-of-sale foreclosure, O.C.G.A. §44-14-162, 136 Pryor St SW courthouse steps, first-Tuesday auctions, tax lien vs mortgage comparison.',
    url: 'https://forclos.com/foreclosures/fulton-county-ga',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fulton County Foreclosure Listings: Complete Guide to Atlanta-Area Sales',
    description: 'GA non-judicial power-of-sale foreclosure, O.C.G.A. §44-14-162, first-Tuesday courthouse steps auctions.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fulton County Foreclosure Listings: Your Complete Guide to Atlanta-Area Sales',
    description: 'Complete guide to fulton county foreclosure listings — GA non-judicial power-of-sale, O.C.G.A. §§44-14-160/162/162.2, courthouse steps at 136 Pryor St SW, first-Tuesday sales.',
    url: 'https://forclos.com/foreclosures/fulton-county-ga',
    datePublished: '2026-05-12',
    dateModified: '2026-05-13',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/fulton-county-ga' },
    about: {
      '@type': 'Place',
      name: 'Fulton County',
      address: { '@type': 'PostalAddress', addressLocality: 'Atlanta', addressRegion: 'GA', addressCountry: 'US' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where do Fulton County foreclosure sales take place?',
        acceptedAnswer: { '@type': 'Answer', text: 'All sales are held on the courthouse steps at 136 Pryor Street SW, Atlanta, GA 30303, on the first Tuesday of each month between 10:00 a.m. and 4:00 p.m.' },
      },
      {
        '@type': 'Question',
        name: 'Is there a redemption period after a mortgage foreclosure in Fulton County?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Georgia\'s non-judicial mortgage foreclosures carry no statutory post-sale right of redemption. Title transfers to the winning bidder immediately upon recording of the Deed Under Power of Sale.' },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a tax lien sale and a mortgage foreclosure in Fulton County?',
        acceptedAnswer: { '@type': 'Answer', text: 'A mortgage foreclosure (power of sale) transfers title immediately with no redemption period. A tax lien sale grants the original owner 12 months to redeem the property by paying the purchase price plus a 20% premium and accrued costs.' },
      },
      {
        '@type': 'Question',
        name: 'How many Fulton County foreclosure listings are active right now?',
        acceptedAnswer: { '@type': 'Answer', text: 'Inventory fluctuates monthly. Foreclosure.com currently aggregates over 2,400 Fulton County listings spanning pre-foreclosure, sheriff\'s sale, and bank-owned (REO) categories.' },
      },
      {
        '@type': 'Question',
        name: 'Do I need a real estate license to bid at the Fulton County courthouse steps?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Any individual may bid as a private purchaser. However, consulting a licensed Georgia real estate attorney before bidding is strongly recommended given the as-is, no-warranty nature of these sales.' },
      },
    ],
  },
]

export default function FultonCountyGAPage() {
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
          <Link href="/foreclosures/georgia" className="hover:text-slate-300 transition-colors">Georgia foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Fulton County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Fulton County Foreclosure Listings: Your Complete Guide to Atlanta-Area Sales
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 2026 · Forclos Editorial</p>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-400 text-sm mb-8">
          <strong className="text-slate-300">Disclaimer:</strong> This page is for informational purposes only and does not constitute legal or financial advice.
          Always verify current sale schedules with the Fulton County Sheriff&apos;s Office and consult a licensed Georgia attorney before making any purchasing decisions.
        </div>

        <p className="text-slate-300 leading-relaxed mb-8">
          If you&apos;re searching for <strong className="text-white">fulton county foreclosure listings</strong>, you&apos;re tapping into one of Georgia&apos;s most active real estate markets.
          Fulton County — home to Atlanta and nearly 1.1 million residents — processes mortgage and tax foreclosure sales every month under Georgia&apos;s streamlined non-judicial process.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Georgia Foreclosure Works: Power of Sale</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Georgia is a <strong className="text-white">non-judicial foreclosure state</strong>, meaning lenders can foreclose without a court order by exercising a &ldquo;power of sale&rdquo; clause written
            into the deed to secure debt. The process is governed by <strong className="text-white">O.C.G.A. §§ 44-14-160 through 44-14-162.2</strong> — one of the faster foreclosure timelines
            in the country, typically <strong className="text-white">30–60 days from default notice to courthouse steps</strong>.
          </p>

          <div className="space-y-4 mb-6">
            {[
              { n: 1, t: 'Notice to Borrower', d: 'At least 30 days before the scheduled sale, the lender must send written notice to the borrower by certified mail or personal delivery under O.C.G.A. §44-14-162.2.' },
              { n: 2, t: 'Legal Advertisement', d: 'The lender must publish a foreclosure notice in the Fulton County Daily Report once per week for four consecutive weeks (O.C.G.A. §44-14-162). These notices are the primary source for tracking upcoming listings.' },
              { n: 3, t: 'Sale Date Confirmed', d: 'All Fulton County mortgage and tax lien sales occur on the first Tuesday of each month between 10:00 a.m. and 4:00 p.m. If the first Tuesday falls on a state holiday, the sale moves to the following business day.' },
              { n: 4, t: 'Courthouse Steps Auction', d: 'The auction is held at the Fulton County Courthouse, 136 Pryor Street SW, Atlanta, GA 30303. Open, public outcry — any qualified bidder may participate.' },
              { n: 5, t: 'Winning Bid & Payment', d: 'The highest bidder wins. Payment — cash or certified/cashier\'s check — is required immediately. Personal checks and financing contingencies are not accepted.' },
              { n: 6, t: 'Deed Under Power Recorded', d: 'After payment, a Deed Under Power of Sale is recorded with the Fulton County Superior Court Clerk. For mortgage foreclosures, title transfers immediately to the winning bidder with no post-sale right of redemption under Georgia law.' },
            ].map(item => (
              <div key={item.n} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">Step {item.n}: {item.t}</p>
                <p className="text-slate-400 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Tax Lien Sales vs. Mortgage Foreclosures</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Sale Type</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Governing Law</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Post-Sale Redemption?</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Title Transfer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr className="bg-slate-900/50">
                  <td className="px-4 py-3 text-slate-300">Mortgage (power of sale)</td>
                  <td className="px-4 py-3 text-slate-300">O.C.G.A. §§44-14-160 to 44-14-162.2</td>
                  <td className="px-4 py-3 text-emerald-400 font-semibold">No — immediate</td>
                  <td className="px-4 py-3 text-slate-300">Deed Under Power</td>
                </tr>
                <tr className="bg-slate-900/50">
                  <td className="px-4 py-3 text-slate-300">Tax lien sale</td>
                  <td className="px-4 py-3 text-slate-300">O.C.G.A. §§48-4-40 et seq.</td>
                  <td className="px-4 py-3 text-amber-400 font-semibold">Yes — 12 months</td>
                  <td className="px-4 py-3 text-slate-300">Sheriff&apos;s deed (after barment)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-xs mt-2">
            In a tax lien sale, the original owner retains a 12-month statutory right to redeem by repaying the bid amount plus a 20% premium plus taxes and costs.
            If no redemption occurs within 12 months, the buyer must bring a barment action in Superior Court to clear title.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Where to Find Official Fulton County Foreclosure Listings</h2>
          <ul className="space-y-3 pl-4">
            <li className="text-slate-300">
              <strong className="text-white">Fulton County Sheriff&apos;s Office — Tax Sales:</strong>{' '}
              <a href="https://www.fultoncountyga.gov/inside-fulton-county/fulton-county-departments/sheriff/tax-sales" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">
                fultoncountyga.gov/sheriff/tax-sales
              </a>
            </li>
            <li className="text-slate-300">
              <strong className="text-white">Fulton County Daily Report:</strong> Official legal advertising organ — all power-of-sale notices under O.C.G.A. §44-14-162 must run here
            </li>
            <li className="text-slate-300">
              <strong className="text-white">Fulton County Superior Court Clerk:</strong>{' '}
              <a href="https://www.fultoncountyclerk.org" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">
                fultoncountyclerk.org
              </a>{' '}
              — search recorded lis pendens filings and deeds under power
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Fulton County Foreclosure FAQs</h2>
          <div className="space-y-6">
            {[
              { q: 'Where do Fulton County foreclosure sales take place?', a: 'All sales are held on the courthouse steps at 136 Pryor Street SW, Atlanta, GA 30303, on the first Tuesday of each month between 10:00 a.m. and 4:00 p.m.' },
              { q: 'Is there a redemption period after a mortgage foreclosure in Fulton County?', a: 'No. Georgia\'s non-judicial mortgage foreclosures carry no statutory post-sale right of redemption. Title transfers to the winning bidder immediately upon recording of the Deed Under Power of Sale.' },
              { q: 'What is the difference between a tax lien sale and a mortgage foreclosure in Fulton County?', a: 'A mortgage foreclosure transfers title immediately with no redemption period. A tax lien sale grants the original owner 12 months to redeem by paying the purchase price plus a 20% premium and accrued costs.' },
              { q: 'How many Fulton County foreclosure listings are active right now?', a: 'Inventory fluctuates monthly. Foreclosure.com aggregates over 2,400 Fulton County listings spanning pre-foreclosure, sheriff\'s sale, and bank-owned (REO) categories.' },
              { q: 'Do I need a real estate license to bid at the Fulton County courthouse steps?', a: 'No. Any individual may bid as a private purchaser. Consulting a licensed Georgia real estate attorney before bidding is strongly recommended given the as-is, no-warranty nature of these sales.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">Explore Nearby Georgia Foreclosure Markets</h2>
          <ul className="space-y-2 pl-4">
            <li><Link href="/foreclosures/dekalb-county-ga" className="text-emerald-400 hover:underline">DeKalb County Foreclosure Listings</Link> — eastern Atlanta suburbs and Decatur corridor</li>
            <li><Link href="/foreclosures/gwinnett-county-ga" className="text-emerald-400 hover:underline">Gwinnett County Foreclosure Listings</Link> — northeast of Atlanta</li>
          </ul>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://www.fultoncountyga.gov/inside-fulton-county/fulton-county-departments/sheriff/tax-sales" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Fulton County Sheriff — Tax Sales</a></li>
            <li>2. <a href="https://www.fultoncountyclerk.org" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Fulton County Superior Court Clerk</a></li>
            <li>3. O.C.G.A. §§ 44-14-160, 44-14-162, 44-14-162.2, 48-4-40</li>
          </ol>
        </section>
      </main>
    </div>
  )
}
