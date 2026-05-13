import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Duval County Foreclosure Auction: Complete Bidder\'s Guide (Jacksonville, FL)',
  description: 'Duval County foreclosure auction guide: FL judicial process, duval.realforeclose.com online bidding, 6-step auction guide, tax deed vs. judicial comparison.',
  alternates: { canonical: 'https://forclos.com/foreclosures/duval-county-fl' },
  openGraph: {
    title: 'Duval County Foreclosure Auction: Complete Bidder\'s Guide (Jacksonville, FL)',
    description: 'Online bidding at duval.realforeclose.com, FL §45.031 judicial process, 6-step auction guide, proxy bidding, tax deed vs. judicial comparison.',
    url: 'https://forclos.com/foreclosures/duval-county-fl',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duval County Foreclosure Auction: Complete Bidder\'s Guide (Jacksonville, FL)',
    description: 'Online bidding at duval.realforeclose.com, FL §45.031 judicial process, 6-step auction guide.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Duval County Foreclosure Auction: Complete Bidder\'s Guide (Jacksonville, FL)',
    description: 'Duval County foreclosure auction guide: FL judicial process, online bidding at duval.realforeclose.com, 6-step auction guide, tax deed vs. judicial comparison.',
    url: 'https://forclos.com/foreclosures/duval-county-fl',
    datePublished: '2026-05-12',
    dateModified: '2026-05-13',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/duval-county-fl' },
    about: {
      '@type': 'Place',
      name: 'Duval County',
      address: { '@type': 'PostalAddress', addressLocality: 'Jacksonville', addressRegion: 'FL', addressCountry: 'US' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need to attend the Duval County foreclosure auction in person?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. All Duval County foreclosure auctions are conducted entirely online at duval.realforeclose.com. You can bid from anywhere with an internet connection.' },
      },
      {
        '@type': 'Question',
        name: 'How much is the deposit to bid at a Duval County foreclosure auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'The required deposit is typically 5% of your intended maximum bid, with a minimum of $200. Deposits are funded electronically through your RealForeclose bidder account before the auction opens.' },
      },
      {
        '@type': 'Question',
        name: 'Can I inspect a property before bidding at the Duval County foreclosure auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'There is no guaranteed right of inspection. Properties are sold as-is. You may drive by and view the exterior, but interior access is not arranged by the Clerk. Bidders assume all risk regarding property condition.' },
      },
      {
        '@type': 'Question',
        name: 'What happens after I win a Duval County foreclosure auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pay your full balance by close of business on auction day. The Clerk issues a Certificate of Sale, followed by a 10-day objection period. If no valid objection is filed, you receive the Certificate of Title. Florida law (§45.0315) provides no post-sale redemption right once the Certificate of Sale is issued.' },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between the foreclosure auction and the tax deed auction in Duval County?',
        acceptedAnswer: { '@type': 'Answer', text: 'Judicial foreclosure auctions arise from mortgage defaults and are governed by FL Stat §45.031. Tax deed sales arise from unpaid property taxes and are governed by FL Stat §197.502. Both are listed at duval.realforeclose.com under separate sections. Tax deeds may require a quiet title action — consult a real estate attorney before bidding on tax deeds.' },
      },
    ],
  },
]

export default function DuvalCountyFLPage() {
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
          <Link href="/foreclosures/florida" className="hover:text-slate-300 transition-colors">Florida foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Duval County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Duval County Foreclosure Auction: Complete Bidder&apos;s Guide (Jacksonville, FL)
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 2026 · Forclos Editorial</p>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-400 text-sm mb-8">
          <strong className="text-slate-300">Disclaimer:</strong> This page is for general informational purposes only and does not constitute legal or financial advice.
          Foreclosure laws can change; always verify current procedures with the Duval County Clerk&apos;s Office before bidding.
        </div>

        <p className="text-slate-300 leading-relaxed mb-8">
          If you&apos;re searching for a <strong className="text-white">Duval County foreclosure auction</strong>, you&apos;ve landed in one of Florida&apos;s most active markets.
          Jacksonville — the state&apos;s largest city by land area and Duval County&apos;s seat — consistently generates thousands of foreclosure filings each year,
          making its auction calendar a go-to destination for real estate investors and first-time buyers alike.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Duval County Foreclosure Auctions Work</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Florida is a <strong className="text-white">judicial foreclosure state</strong>, meaning every foreclosure must pass through the court system before a property can be sold at auction.
            In Duval County, cases are handled by the <strong className="text-white">Fourth Judicial Circuit Court</strong> (<a href="https://www.jud4.org" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">jud4.org</a>),
            which issues a Final Judgment of Foreclosure authorizing the Clerk to schedule and conduct the public sale.
          </p>
          <p className="text-slate-300 leading-relaxed">
            All Duval County foreclosure auctions are conducted <strong className="text-white">online</strong> at{' '}
            <a href="https://duval.realforeclose.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">duval.realforeclose.com</a>,
            the official auction platform operated by Realauction.com LLC in partnership with Jody Phillips, Clerk of the Circuit Court &amp; Comptroller.
            You do not need to be physically present — all bidding happens through the web portal.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">6-Step Duval County Foreclosure Auction Process</h2>
          <div className="space-y-4">
            {[
              { step: 1, title: 'Lis Pendens & Lawsuit Filed', desc: 'The lender files a foreclosure complaint in the Fourth Judicial Circuit Court. A Lis Pendens is recorded in Duval County official records, providing public notice that foreclosure proceedings have begun.' },
              { step: 2, title: 'Court Enters Final Judgment of Foreclosure', desc: 'After the case proceeds, the judge issues a Final Judgment of Foreclosure setting the total debt amount and scheduling a sale date.' },
              { step: 3, title: 'Clerk Publishes Auction on RealForeclose', desc: 'Pursuant to FL Stat §45.031(10), the Clerk posts the sale on duval.realforeclose.com. Property details, case numbers, and scheduled auction dates are listed publicly.' },
              { step: 4, title: 'Bidders Register & Fund Accounts', desc: 'Create a free account at duval.realforeclose.com, deposit funds electronically into your RealForeclose bidder account, and have a minimum deposit of 5% of your maximum bid (or $200, whichever is greater) on file.' },
              { step: 5, title: 'Online Auction Opens & Closes', desc: 'Auctions open at 8:00 a.m. ET and close at 11:00 a.m. ET on the scheduled sale date. The system uses proxy bidding — you set your maximum and the platform bids on your behalf.' },
              { step: 6, title: 'Winner Pays Balance & Receives Title', desc: 'Pay the full balance by close of business on the day of the sale. The Clerk issues a Certificate of Sale and, after a 10-day objection period, the Certificate of Title. Per FL Stat §45.0315, there is no right of redemption after the Certificate of Sale is issued.' },
            ].map(item => (
              <div key={item.step} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">Step {item.step}: {item.title}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Tax Deed Sales vs. Judicial Foreclosure Auctions</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold"></th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Judicial Foreclosure</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Tax Deed Sale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {[
                  { label: 'Trigger', a: 'Mortgage default → court judgment', b: 'Unpaid property taxes → tax certificate' },
                  { label: 'Governed by', a: 'FL Stat §45.031', b: 'FL Stat §197.502' },
                  { label: 'Platform', a: 'duval.realforeclose.com (Foreclosure)', b: 'duval.realforeclose.com (Tax Deed)' },
                  { label: 'Title quality', a: 'Fee simple (after objection period)', b: 'Tax deed; may need quiet title' },
                ].map(row => (
                  <tr key={row.label} className="bg-slate-900/50">
                    <td className="px-4 py-3 font-semibold text-white">{row.label}</td>
                    <td className="px-4 py-3 text-slate-300">{row.a}</td>
                    <td className="px-4 py-3 text-slate-300">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-xs mt-2">Both types are listed at duval.realforeclose.com — make sure you&apos;re on the correct tab (Foreclosure vs. Tax Deed).</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Duval County Foreclosure FAQs</h2>
          <div className="space-y-6">
            {[
              { q: 'Do I need to attend the Duval County foreclosure auction in person?', a: 'No. All auctions are conducted entirely online at duval.realforeclose.com.' },
              { q: 'How much is the deposit to bid?', a: 'Typically 5% of your intended maximum bid, minimum $200. Funded electronically through your RealForeclose account before the auction opens.' },
              { q: 'Can I inspect a property before bidding?', a: 'No guaranteed right of inspection. Properties are sold as-is. You may drive by for an exterior view only.' },
              { q: 'What happens after I win?', a: 'Pay the full balance by close of business on auction day. After a 10-day objection period, you receive the Certificate of Title. Florida §45.0315 provides no post-sale redemption right.' },
              { q: 'What is the difference between the foreclosure auction and the tax deed auction?', a: 'Judicial foreclosure auctions arise from mortgage defaults (FL §45.031). Tax deed sales arise from unpaid taxes (FL §197.502). Both are listed at duval.realforeclose.com under separate tabs. Tax deeds may require quiet title — consult a real estate attorney.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Explore More Florida Foreclosure Markets</h2>
          <ul className="space-y-2 pl-4">
            <li><Link href="/foreclosures/palm-beach-county-fl" className="text-emerald-400 hover:underline">Palm Beach County Foreclosure Auction</Link></li>
            <li><Link href="/foreclosures/pinellas-county-fl" className="text-emerald-400 hover:underline">Pinellas County Foreclosure Listings</Link></li>
            <li><Link href="/foreclosures/hillsborough-county-fl" className="text-emerald-400 hover:underline">Hillsborough County Foreclosure Listings</Link></li>
            <li><Link href="/foreclosures/miami-dade-county-fl" className="text-emerald-400 hover:underline">Miami-Dade Foreclosure Listings</Link></li>
          </ul>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://www.duvalclerk.com/departments/civil-court-services/foreclosure" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Duval County Clerk — Foreclosure</a></li>
            <li>2. <a href="https://duval.realforeclose.com" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">duval.realforeclose.com — Online Auction Portal</a></li>
            <li>3. <a href="https://www.jud4.org/foreclosure-division" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Fourth Judicial Circuit — Foreclosure Division</a></li>
            <li>4. <a href="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099%2F0045%2FSections%2F0045.031.html" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">FL Statute §45.031</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
