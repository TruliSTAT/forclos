import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Delaware County PA Foreclosure Listings: Complete Buyer\'s Guide | Forclos',
  description: 'Find Delaware County PA foreclosure listings and learn how to bid at sheriff sales in Media, PA. Deposits, deadlines, liens, and the 2026 $250 Act 48 fee explained.',
  alternates: { canonical: 'https://forclos.com/foreclosures/delaware-county-pa' },
  openGraph: {
    title: 'Delaware County PA Foreclosure Listings: Complete Buyer\'s Guide',
    description: 'Find Delaware County PA foreclosure listings and learn how to bid at sheriff sales in Media, PA. Deposits, deadlines, liens, and the 2026 $250 Act 48 fee explained.',
    url: 'https://forclos.com/foreclosures/delaware-county-pa',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delaware County PA Foreclosure Listings: Complete Buyer\'s Guide',
    description: 'Find Delaware County PA foreclosure listings and learn how to bid at sheriff sales in Media, PA. Deposits, deadlines, liens, and the 2026 $250 Act 48 fee explained.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Delaware County PA Foreclosure Listings: Complete Buyer\'s Guide',
    description: 'Find Delaware County PA foreclosure listings and learn how to bid at sheriff sales in Media, PA. Deposits, deadlines, liens, and the 2026 $250 Act 48 fee explained.',
    url: 'https://forclos.com/foreclosures/delaware-county-pa',
    datePublished: '2026-05-19',
    dateModified: '2026-05-19',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/delaware-county-pa' },
    about: {
      '@type': 'Place',
      name: 'Delaware County',
      address: { '@type': 'PostalAddress', addressRegion: 'PA', addressCountry: 'US' },
    },
    keywords: 'delaware county pa foreclosure listings, sheriff sale delaware county, media pa sheriff sale, pennsylvania foreclosure',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where can I find the current Delaware County PA foreclosure listings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visit delcopa.gov/sheriff and navigate to the Real Estate (Sheriff Sale) section. Lists are updated monthly. You can also call the Real Estate Department at 610-891-4305 or visit the Sheriff\'s Office at 201 W. Front St., Media, PA 19063.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I inspect a foreclosure property before the auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Delaware County sheriff sales are "as-is" — the properties are not open for inspection. Drive-by observation of the exterior is permitted. Interior access is not available until after you become the new owner.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is hand money, and how much do I need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hand money is the deposit you pay immediately when you win a bid. It must be a certified check. The amount is typically 10% of your winning bid. Always review the current Conditions of Sale document (available at delcopa.gov) before attending.',
        },
      },
      {
        '@type': 'Question',
        name: "What happens if I win but can't pay the balance in 10 days?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You forfeit your entire hand money deposit. The property is re-listed for a future sale. There are no extensions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Delaware County foreclosure auctions held online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As of 2026, Delaware County sheriff sales are conducted in person at the Government Center Building in Media, PA. They are not held on online platforms like Bid4Assets. Check delcopa.gov for any policy updates.',
        },
      },
    ],
  },
]

export default function DelawareCountyPAPage() {
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
          <Link href="/foreclosures/pennsylvania" className="hover:text-slate-300 transition-colors">Pennsylvania foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Delaware County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Delaware County PA Foreclosure Listings: Complete Buyer&apos;s Guide to Sheriff Sales
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 19, 2026 · Forclos Editorial</p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-8">
          <strong className="text-amber-300">YMYL Notice:</strong> This page is for educational purposes only and does not constitute legal advice. Foreclosure laws and county procedures change frequently. Always consult a licensed Pennsylvania real estate attorney before bidding at sheriff sale.
        </div>

        <p className="text-slate-300 leading-relaxed mb-8">
          If you&apos;re searching <strong className="text-white">Delaware County PA foreclosure listings</strong>, you&apos;ve landed in the right place. Delaware County — one of Pennsylvania&apos;s oldest settled regions, covering 184 square miles and 49 municipalities just southwest of Philadelphia — holds monthly sheriff sales that attract investors, first-time buyers, and real estate professionals from across the Philadelphia metro area.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Pennsylvania&apos;s Judicial Foreclosure Framework</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Pennsylvania is a <strong className="text-white">judicial foreclosure state</strong>, meaning every residential mortgage foreclosure must pass through the court system before a property can be sold at sheriff sale. The process is governed primarily by <strong className="text-white">42 Pa.C.S. §§ 8101–8153</strong> and Pennsylvania Rules of Civil Procedure 1141–1179.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Pre-Foreclosure Notice Requirements</h3>
          <ul className="space-y-3 mb-6">
            <li className="text-slate-300">
              <strong className="text-white">Act 91 Notice (1983):</strong> When a borrower falls 60+ days delinquent, the lender must send written notice giving the borrower <strong className="text-white">30 days</strong> to apply for assistance through the Pennsylvania Homeowner Assistance Fund (PHAF).
            </li>
            <li className="text-slate-300">
              <strong className="text-white">Act 6 Notice (1974):</strong> Provides the right to cure a default by paying all arrears at any time <strong className="text-white">up to one hour before</strong> the sheriff sale.
            </li>
          </ul>
          <p className="text-slate-300 leading-relaxed mb-4">
            The entire process typically takes <strong className="text-white">12 to 24 months</strong> in Pennsylvania.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Delaware County PA Foreclosure Listings: The Sheriff Sale Process</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Delaware County sheriff sales are conducted by the <strong className="text-white">Office of the Sheriff</strong>, based at Courthouse Room 101, 201 W. Front St., Media, PA 19063. The Real Estate Department can be reached at <strong className="text-white">610-891-4305</strong>.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">When and Where Sales Happen</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Delaware County holds sheriff sales on the <strong className="text-white">third Friday of each month at 11:00 AM</strong> in the <strong className="text-white">County Council Meeting Room, Government Center Building</strong>, Front Street &amp; Veterans Square, Media, PA.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-white font-semibold">Sale Date</th>
                  <th className="text-left px-4 py-3 text-white font-semibold">Writ Filing Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">May 15, 2026</td><td className="px-4 py-3 text-slate-300">February 17, 2026</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">June 18, 2026 (Thursday)</td><td className="px-4 py-3 text-slate-300">March 23, 2026</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">July 17, 2026</td><td className="px-4 py-3 text-slate-300">April 20, 2026</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">August 21, 2026</td><td className="px-4 py-3 text-slate-300">May 26, 2026</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">September 18, 2026</td><td className="px-4 py-3 text-slate-300">June 22, 2026</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Step-by-Step Guide to Bidding</h2>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 1 — Research the Property</p>
              <p>Check title at the Delaware County Recorder of Deeds, review tax status with the Tax Claim Bureau (610-891-8294), search municipal code violations, and drive by the exterior.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 2 — Attend Prepared</p>
              <p>Arrive before 11:00 AM with a <strong className="text-white">certified check</strong> for hand money (personal checks and cash not accepted), photo ID, and a firm maximum bid.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 3 — Pay Hand Money &amp; Balance</p>
              <p>Hand money (typically <strong className="text-white">10% of bid price</strong>) is due immediately by certified check. Balance is due within <strong className="text-white">ten calendar days</strong>. Missing the deadline forfeits your entire deposit.</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">Cost and Deposit Reference</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-white font-semibold">Item</th>
                  <th className="text-left px-4 py-3 text-white font-semibold">Amount / Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Hand money (deposit)</td><td className="px-4 py-3 text-slate-300">Certified check, typically 10% of bid</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Balance due</td><td className="px-4 py-3 text-slate-300">Within 10 calendar days, certified check</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Act 48 / Ordinance 2025-07 fee</td><td className="px-4 py-3 text-slate-300 font-semibold text-amber-300">$250 per parcel (effective January 1, 2026)</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Property list (day of sale)</td><td className="px-4 py-3 text-slate-300">$5.00</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Real Estate Dept. phone</td><td className="px-4 py-3 text-slate-300">610-891-4305</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-6">
            <strong className="text-amber-300">New in 2026:</strong> Pursuant to Pennsylvania Act 48 of 2024, Delaware County enacted Ordinance 2025-07 effective January 1, 2026. Every buyer at a sheriff sale or tax sale in Delaware County must pay an additional <strong className="text-amber-300">$250 fee per parcel</strong> on top of all other costs. Budget accordingly.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Post-Sale Rights: What Happens After the Auction</h2>

          <h3 className="text-xl font-semibold text-white mb-3">No Statutory Right of Redemption</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">Pennsylvania does not provide a post-sale statutory right of redemption</strong> for residential mortgage foreclosures. Once the sheriff sale is confirmed and the Sheriff&apos;s Deed is recorded, the former owner has no legal right to reclaim the property.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Lien Survival Warning</h3>
          <ul className="space-y-2 mb-6">
            <li className="text-slate-300">Municipal utility liens for water/sewer</li>
            <li className="text-slate-300">Real estate tax claims not properly joined in the foreclosure action</li>
            <li className="text-slate-300"><strong className="text-white">Federal tax liens</strong> (IRS has 120 days to redeem after a state foreclosure sale)</li>
            <li className="text-slate-300">HOA liens in some circumstances</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Where can I find the current Delaware County PA foreclosure listings?',
                a: "Visit delcopa.gov/sheriff and navigate to the Real Estate (Sheriff Sale) section. Lists are updated monthly. You can also call the Real Estate Department at 610-891-4305 or visit the Sheriff's Office at 201 W. Front St., Media, PA 19063.",
              },
              {
                q: 'Can I inspect a foreclosure property before the auction?',
                a: 'No. Delaware County sheriff sales are "as-is" — the properties are not open for inspection. Drive-by observation of the exterior is permitted. Interior access is not available until after you become the new owner.',
              },
              {
                q: 'What is hand money, and how much do I need?',
                a: 'Hand money is the deposit you pay immediately when you win a bid. It must be a certified check. The amount is typically 10% of your winning bid. Always review the current Conditions of Sale document (available at delcopa.gov) before attending.',
              },
              {
                q: "What happens if I win but can't pay the balance in 10 days?",
                a: 'You forfeit your entire hand money deposit. The property is re-listed for a future sale. There are no extensions.',
              },
              {
                q: 'Are Delaware County foreclosure auctions held online?',
                a: 'As of 2026, Delaware County sheriff sales are conducted in person at the Government Center Building in Media, PA. They are not held on online platforms like Bid4Assets. Check delcopa.gov for any policy updates.',
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
          <p className="text-slate-400 text-sm mb-4">Researching foreclosure auctions across the Philadelphia metro? Explore our guides to neighboring counties:</p>
          <ul className="space-y-2">
            <li><Link href="/foreclosures/montgomery-county-pa" className="text-emerald-400 hover:underline">Montgomery County PA Foreclosure Listings</Link></li>
            <li><Link href="/foreclosures/chester-county-pa" className="text-emerald-400 hover:underline">Chester County PA Foreclosure Listings</Link></li>
            <li><Link href="/foreclosures/philadelphia-county-pa" className="text-emerald-400 hover:underline">Philadelphia County Foreclosure Listings</Link></li>
            <li><Link href="/foreclosures/bucks-county-pa" className="text-emerald-400 hover:underline">Bucks County PA Foreclosure Listings</Link></li>
            <li><Link href="/foreclosures/pennsylvania" className="text-emerald-400 hover:underline">Pennsylvania Foreclosure Laws Overview</Link></li>
          </ul>
        </section>
      </main>
    </div>
  )
}
