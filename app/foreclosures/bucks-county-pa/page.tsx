import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Bucks County PA Foreclosure Auction: Complete Bidder\'s Guide | Forclos',
  description: 'How to buy at the Bucks County PA foreclosure auction. Sheriff sales every 2nd Friday in Doylestown. Deposits, registration, liens, and post-sale rights explained.',
  alternates: { canonical: 'https://forclos.com/foreclosures/bucks-county-pa' },
  openGraph: {
    title: 'Bucks County PA Foreclosure Auction: Complete Bidder\'s Guide',
    description: 'How to buy at the Bucks County PA foreclosure auction. Sheriff sales every 2nd Friday in Doylestown. Deposits, registration, liens, and post-sale rights explained.',
    url: 'https://forclos.com/foreclosures/bucks-county-pa',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bucks County PA Foreclosure Auction: Complete Bidder\'s Guide',
    description: 'How to buy at the Bucks County PA foreclosure auction. Sheriff sales every 2nd Friday in Doylestown. Deposits, registration, liens, and post-sale rights explained.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bucks County PA Foreclosure Auction: Complete Bidder\'s Guide',
    description: 'How to buy at the Bucks County PA foreclosure auction. Sheriff sales every 2nd Friday in Doylestown. Deposits, registration, liens, and post-sale rights explained.',
    url: 'https://forclos.com/foreclosures/bucks-county-pa',
    datePublished: '2026-05-19',
    dateModified: '2026-05-19',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/bucks-county-pa' },
    about: {
      '@type': 'Place',
      name: 'Bucks County',
      address: { '@type': 'PostalAddress', addressRegion: 'PA', addressCountry: 'US' },
    },
    keywords: 'bucks county pa foreclosure auction, sheriff sale bucks county, doylestown sheriff sale, pennsylvania judicial foreclosure',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I find the list of upcoming Bucks County PA foreclosure auction properties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Sheriff\'s Sales Listings are published on the official Bucks County website at buckscounty.gov under the Sheriff\'s Office section. Lists are also advertised in the Bucks County Law Reporter and local newspapers approximately three weeks before each sale. Some properties appear on Bid4Assets for online bidding.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I inspect a property before bidding at the Bucks County sheriff sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The Bucks County Sheriff\'s Office explicitly prohibits inspection of sale properties. Properties are sold "as-is" and buyers must rely on exterior viewing, public records, and any due diligence they can conduct without entering the property.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I win the bid but can\'t pay in full on sale day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You must have cash or a certified check ready on auction day. Failure to complete payment can result in forfeiture of any deposit paid and potential legal liability. There is no financing contingency.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there any redemption rights after buying at a Bucks County PA foreclosure auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Pennsylvania does not provide a post-sale statutory redemption right for the former homeowner. Once confirmed by the court and the deed is transferred, the sale is final.',
        },
      },
      {
        '@type': 'Question',
        name: 'What liens survive a sheriff sale in Bucks County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not all liens are extinguished at the sheriff sale. Municipal utility charges, certain tax liens, and other priority claims may survive. A thorough title search through the Bucks County Recorder of Deeds, Prothonotary, Tax Claim Bureau, and local tax offices is essential before placing any bid.',
        },
      },
    ],
  },
]

export default function BucksCountyPAPage() {
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
          <Link href="/foreclosures/pennsylvania" className="hover:text-slate-300 transition-colors">Pennsylvania foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Bucks County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Bucks County PA Foreclosure Auction: Complete Bidder&apos;s Guide
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 19, 2026 · Forclos Editorial</p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-8">
          <strong className="text-amber-300">YMYL Notice:</strong> This guide is for informational purposes only and does not constitute legal advice. Foreclosure laws change; consult a licensed Pennsylvania real estate attorney before participating in any sheriff sale.
        </div>

        <p className="text-slate-300 leading-relaxed mb-8">
          If you&apos;re looking to buy property at a <strong className="text-white">Bucks County PA foreclosure auction</strong>, understanding the sheriff sale process is essential before you place your first bid. Bucks County runs a judicial foreclosure system governed by Pennsylvania state law, with monthly sales open to the public at the county seat in Doylestown. This guide covers every step — from the legal notice requirements that trigger foreclosure to what happens after the gavel falls.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Pennsylvania&apos;s Judicial Foreclosure Process Works</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Pennsylvania is a <strong className="text-white">judicial foreclosure state</strong>, meaning every residential mortgage foreclosure must pass through the Court of Common Pleas before a property can be auctioned. There is no non-judicial (trustee-sale) shortcut available to lenders. This court involvement gives homeowners more time to respond, cure the default, or pursue alternatives — but it also means the timeline from first missed payment to sheriff sale can stretch 12 to 18 months or longer.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">PA Act 6 and Act 91 Pre-Foreclosure Notices</h3>
          <p className="text-slate-300 leading-relaxed mb-4">Before filing suit, Pennsylvania law requires lenders to send formal pre-foreclosure notices:</p>
          <ul className="space-y-3 mb-6">
            <li className="text-slate-300">
              <strong className="text-white">Act 6 Notice</strong> (41 P.S. §§ 101–605): Applies to most residential mortgage loans. The lender must send a written notice giving the borrower at least <strong className="text-white">30 days</strong> to cure the default before a complaint is filed.
            </li>
            <li className="text-slate-300">
              <strong className="text-white">Act 91 Notice</strong> (35 P.S. §§ 1680.401c et seq.): Required for owner-occupied residential properties. It informs the homeowner of their right to apply for assistance through Pennsylvania&apos;s <strong className="text-white">Homeowner Assistance Fund (HAF)</strong>. The borrower has 30 days to apply before foreclosure can proceed.
            </li>
          </ul>
          <p className="text-slate-300 leading-relaxed mb-4">Failure by the lender to properly serve these notices can be grounds to challenge the foreclosure in court.</p>

          <h3 className="text-xl font-semibold text-white mb-3">Filing the Foreclosure Complaint</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Once pre-foreclosure notice requirements are satisfied, the lender files a <strong className="text-white">Complaint in Mortgage Foreclosure</strong> with the Bucks County Court of Common Pleas. The defendant has <strong className="text-white">20 days</strong> to file a written response. Upon entry of judgment, the plaintiff files a <strong className="text-white">Writ of Execution</strong>, directing the Bucks County Sheriff to schedule and conduct a public sale.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The Bucks County Sheriff Sale: What Bidders Need to Know</h2>

          <h3 className="text-xl font-semibold text-white mb-3">When and Where Sales Are Held</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Sheriff&apos;s Sales take place on the <strong className="text-white">second Friday of each month at 11:00 AM</strong> at:
          </p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm mb-6">
            <p className="font-semibold text-white mb-1">Bucks County Administration Building</p>
            <p>55 E. Court Street, Doylestown, PA 18901</p>
            <p className="mt-2 font-semibold text-white">Bucks County Justice Center (registration inquiries)</p>
            <p>100 N Main Street, Floor B2, Doylestown, PA 18901</p>
            <p>Phone: <strong className="text-white">215-348-6124</strong> · Mon–Fri 8 AM–4:30 PM</p>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            Sales are advertised in the <strong className="text-white">Bucks County Law Reporter</strong> and a local newspaper once per week for three consecutive weeks prior to the sale, and by posting sheriff handbills on the subject property.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Registration Requirements</h3>
          <p className="text-slate-300 leading-relaxed mb-4">In-person registration is <strong className="text-white">required</strong>. Registration opens at <strong className="text-white">10:00 AM</strong> — one hour before the sale. Bring:</p>
          <ul className="space-y-2 mb-6">
            <li className="text-slate-300">Government-issued <strong className="text-white">photo ID</strong></li>
            <li className="text-slate-300"><strong className="text-white">Proof of funds</strong> (cash or certified check)</li>
            <li className="text-slate-300">A completed <strong className="text-white">Real Estate Sale Bid Registration Form</strong></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Costs, Deposits, and Bidding at the Auction</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-white font-semibold">Item</th>
                  <th className="text-left px-4 py-3 text-white font-semibold">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Plaintiff&apos;s required deposit</td><td className="px-4 py-3 text-slate-300">$2,500</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Acceptable payment forms</td><td className="px-4 py-3 text-slate-300">Cash or certified check</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Upset price</td><td className="px-4 py-3 text-slate-300">Minimum bid announced at the sale</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Property condition</td><td className="px-4 py-3 text-slate-300">Sold strictly &quot;as-is&quot; — no warranties</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Property inspection</td><td className="px-4 py-3 text-slate-300">NOT permitted prior to sale</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">What &quot;AS-IS&quot; Really Means</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Every property at a Bucks County sheriff sale is sold with <strong className="text-white">no warranties whatsoever</strong>. Buyers are strongly encouraged to conduct a title search, review municipal liens, check zoning, and consult a <strong className="text-white">real estate attorney</strong> before committing to a bid. Some debts and liens <strong className="text-white">survive the sheriff sale</strong> and become the buyer&apos;s responsibility.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Online Bidding via Bid4Assets</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Bucks County has also listed select sheriff sale properties on <strong className="text-white">Bid4Assets</strong> (<a href="https://bid4assets.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">bid4assets.com</a>). Check both the Bucks County Sheriff&apos;s Sale Listings page and Bid4Assets to ensure you don&apos;t miss active auctions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Adjournments, Post-Sale Rights, and Obligations</h2>

          <p className="text-slate-300 leading-relaxed mb-4">
            Not every property that appears on the sale list will actually be auctioned. Properties can be <strong className="text-white">postponed</strong> (up to 130 days from original sale date, up to two postponements without a court order), <strong className="text-white">stayed</strong> (halted by bankruptcy or loan modification), or <strong className="text-white">removed</strong> entirely. Arrive on sale day prepared for the list to change.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">No Statutory Right of Redemption</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Pennsylvania <strong className="text-white">does not grant homeowners a statutory right of redemption</strong> after a sheriff sale. Once the sale is confirmed and the deed is transferred, the former owner cannot reclaim the property by repaying the debt.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Cost Summary</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-white font-semibold">Stage</th>
                  <th className="text-left px-4 py-3 text-white font-semibold">Approximate Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Title search (recommended)</td><td className="px-4 py-3 text-slate-300">$200–$600</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Attorney consultation</td><td className="px-4 py-3 text-slate-300">$150–$400/hr</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Deed recording fee</td><td className="px-4 py-3 text-slate-300">~$90–$200</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Transfer tax</td><td className="px-4 py-3 text-slate-300">2% of sale price (1% state + 1% local)</td></tr>
                <tr className="bg-slate-900/50"><td className="px-4 py-3 text-slate-300">Property inspection (third-party)</td><td className="px-4 py-3 text-slate-300">$300–$600 (if accessible)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I find the list of upcoming Bucks County PA foreclosure auction properties?',
                a: "The Sheriff's Sales Listings are published on the official Bucks County website at buckscounty.gov under the Sheriff's Office section. Lists are also advertised in the Bucks County Law Reporter and local newspapers approximately three weeks before each sale. Some properties appear on Bid4Assets for online bidding.",
              },
              {
                q: 'Can I inspect a property before bidding at the Bucks County sheriff sale?',
                a: 'No. The Bucks County Sheriff\'s Office explicitly prohibits inspection of sale properties. Properties are sold "as-is" and buyers must rely on exterior viewing, public records, and any due diligence they can conduct without entering the property.',
              },
              {
                q: "What happens if I win the bid but can't pay in full on sale day?",
                a: 'You must have cash or a certified check ready on auction day. Failure to complete payment can result in forfeiture of any deposit paid and potential legal liability. There is no financing contingency — come prepared with funds in hand.',
              },
              {
                q: 'Are there any redemption rights after buying at a Bucks County PA foreclosure auction?',
                a: 'No. Pennsylvania does not provide a post-sale statutory redemption right for the former homeowner. Once confirmed by the court and the deed is transferred, the sale is final.',
              },
              {
                q: 'What liens survive a sheriff sale in Bucks County?',
                a: 'Not all liens are extinguished at the sheriff sale. Municipal utility charges, certain tax liens, and other priority claims may survive. A thorough title search through the Bucks County Recorder of Deeds, Prothonotary, Tax Claim Bureau, and local tax offices is essential before placing any bid.',
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
          <p className="text-slate-400 text-sm mb-4">Related Pennsylvania county foreclosure auction guides:</p>
          <ul className="space-y-2">
            <li><Link href="/foreclosures/montgomery-county-pa" className="text-emerald-400 hover:underline">Montgomery County PA Foreclosure Auction</Link></li>
            <li><Link href="/foreclosures/philadelphia-county-pa" className="text-emerald-400 hover:underline">Philadelphia County Sheriff Sale Guide</Link></li>
            <li><Link href="/foreclosures/delaware-county-pa" className="text-emerald-400 hover:underline">Delaware County PA Foreclosure Auction</Link></li>
            <li><Link href="/foreclosures/chester-county-pa" className="text-emerald-400 hover:underline">Chester County PA Sheriff Sale</Link></li>
            <li><Link href="/foreclosures/lehigh-county-pa" className="text-emerald-400 hover:underline">Lehigh County PA Foreclosure Auction</Link></li>
            <li><Link href="/foreclosures/lancaster-county-pa" className="text-emerald-400 hover:underline">Lancaster County PA Foreclosure Auction</Link></li>
          </ul>
        </section>
      </main>
    </div>
  )
}
