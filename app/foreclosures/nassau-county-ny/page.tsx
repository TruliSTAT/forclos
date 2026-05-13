import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Nassau County Foreclosure Listings: Complete Buyer\'s Guide to Long Island Judicial Sales',
  description: 'Browse Nassau County foreclosure listings — pre-foreclosures, referee auction sales, and bank-owned homes. Complete buyer guide to NY judicial foreclosures.',
  alternates: { canonical: 'https://forclos.com/foreclosures/nassau-county-ny' },
  openGraph: {
    title: 'Nassau County Foreclosure Listings: Complete Buyer\'s Guide to Long Island Judicial Sales',
    description: 'NY RPAPL Article 13 judicial foreclosure, §1304 90-day notice, referee sales at 100 Supreme Court Dr Mineola, Nassau County Annual Tax Lien Sale guide.',
    url: 'https://forclos.com/foreclosures/nassau-county-ny',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nassau County Foreclosure Listings: Complete Buyer\'s Guide to Long Island Judicial Sales',
    description: 'NY judicial foreclosure guide: RPAPL Article 13, referee sales, 10% deposit, Nassau County Annual Tax Lien Sale.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Buy a Nassau County Foreclosure Listing',
    description: 'Step-by-step guide to purchasing a foreclosure property at a Nassau County, NY referee auction sale.',
    totalTime: 'PT60D',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Monitor Pre-Foreclosure Lis Pendens Filings', text: 'Track lis pendens filings with the Nassau County Clerk\'s Office at 240 Old Country Road, Mineola, NY, or through third-party aggregators like PropertyShark and RealtyTrac.' },
      { '@type': 'HowToStep', position: 2, name: 'Research Properties in NY eCourts (NYSCEF)', text: 'Search Nassau County Supreme Court case records via NYSCEF to see current litigation stage, referee appointments, and scheduled auction dates.' },
      { '@type': 'HowToStep', position: 3, name: 'Locate Upcoming Auction Listings', text: 'Check the Nassau County 10th Judicial District auction PDFs posted weekly at nycourts.gov. Confirm listings directly as auctions may be adjourned.' },
      { '@type': 'HowToStep', position: 4, name: 'Conduct Due Diligence on Title and Liens', text: 'Order a title search through a Nassau County title company. Verify outstanding liens, property tax status with the Nassau County Treasurer, and exterior property condition.' },
      { '@type': 'HowToStep', position: 5, name: 'Attend the Referee Auction', text: 'Bring a certified or bank check for 10% of your maximum bid to the Nassau County Supreme Court Courthouse, 100 Supreme Court Drive, Mineola, NY 11501.' },
      { '@type': 'HowToStep', position: 6, name: 'Close Within 30 Days', text: 'Pay the full balance within 30 days of court confirmation. Work with a real estate attorney experienced in Nassau County referee deed closings.' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where are Nassau County foreclosure auctions held?',
        acceptedAnswer: { '@type': 'Answer', text: 'Most mortgage foreclosure auctions (referee sales) are held at the Nassau County Supreme Court Courthouse, 100 Supreme Court Drive, Mineola, NY 11501.' },
      },
      {
        '@type': 'Question',
        name: 'How much deposit do I need at a Nassau County foreclosure auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'Typically 10% of your winning bid, payable by certified or bank check at the time of auction. Balance is due within 30 days after court confirmation.' },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a pre-foreclosure and a Nassau County auction listing?',
        acceptedAnswer: { '@type': 'Answer', text: 'A pre-foreclosure (lis pendens) means a court action has been filed but no auction date is set. An auction listing means a Judgment of Foreclosure and Sale has been entered and an auction date is scheduled.' },
      },
      {
        '@type': 'Question',
        name: 'Can I inspect a property before bidding at a Nassau County foreclosure auction?',
        acceptedAnswer: { '@type': 'Answer', text: 'Interior access is generally not available. Properties are sold as-is. Conduct exterior inspection and order a title search before bidding.' },
      },
      {
        '@type': 'Question',
        name: 'Does Nassau County have a separate tax lien sale?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Nassau County\'s Annual Tax Lien Sale, run by the Nassau County Treasurer, is separate from mortgage foreclosures and involves different timelines, risks, and legal procedures.' },
      },
    ],
  },
]

export default function NassauCountyNYPage() {
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
          <span className="text-slate-400">Nassau County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Nassau County Foreclosure Listings: Complete Buyer&apos;s Guide to Long Island Judicial Sales
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-8">
          Nassau County sits at the western tip of Long Island, just east of Queens — one of New York&apos;s highest-value real estate markets and one of its most active
          foreclosure corridors. If you&apos;re searching <strong className="text-white">nassau county foreclosure listings</strong>, you&apos;re entering a legally complex,
          court-supervised process that works very differently from non-judicial states like California or Texas.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Nassau County Foreclosures Work: NY&apos;s Judicial Process</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            New York is a <strong className="text-white">judicial foreclosure state</strong>. Under <strong className="text-white">RPAPL Article 13</strong>, every residential mortgage foreclosure must pass
            through the New York Supreme Court system. Nassau County Supreme Court, located at{' '}
            <strong className="text-white">100 Supreme Court Drive, Mineola, NY 11501</strong>, is where those cases are filed and decided.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            A Nassau County foreclosure commonly runs <strong className="text-white">18 to 36 months</strong> from the lender&apos;s first filing to the auction date, partly due to court backlog in the 10th Judicial District.
          </p>

          <h3 className="text-xl font-semibold text-white mb-2">RPAPL §1304: The 90-Day Pre-Foreclosure Notice</h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            Before a lender can file a foreclosure action, New York law requires a <strong className="text-white">90-day pre-foreclosure notice</strong> to the borrower under <strong className="text-white">RPAPL §1304</strong>.
            This notice period is a critical early-warning window for buyers tracking pre-foreclosures.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Stages of a Nassau County Foreclosure</h2>
          <div className="space-y-6">
            {[
              { stage: 'Stage 1: Pre-Foreclosure (Lis Pendens)', desc: 'When the lender files a foreclosure Summons & Complaint, it simultaneously records a Notice of Pendency (lis pendens) with the Nassau County Clerk\'s Office at 240 Old Country Road, Mineola, NY 11501. This public record is the first official signal that a property is in foreclosure.' },
              { stage: 'Stage 2: Mandatory Settlement Conferences (CPLR §3408)', desc: 'New York law requires mandatory settlement conferences in all residential foreclosure cases under CPLR §3408. The court actively tries to broker a resolution — loan modification, repayment plan, or short sale. These conferences extend Nassau County timelines but also create additional windows for buyers to work with a motivated seller.' },
              { stage: 'Stage 3: Referee Computation and Judgment of Foreclosure', desc: 'If no settlement is reached, the court appoints a referee to compute the total amount owed (RPAPL §1341). After confirming the debt, the court enters a Judgment of Foreclosure and Sale (RPAPL §1351) authorizing the property to be auctioned.' },
              { stage: 'Stage 4: The Referee Sale (Foreclosure Auction)', desc: 'The court-appointed referee conducts the sale, typically published in a local newspaper and on the Nassau County courts\' foreclosure listing page at nycourts.gov. Bring a 10% deposit (certified or bank check). Winning bidder has 30 days to close after court confirmation. Properties sold as-is.' },
              { stage: 'Stage 5: REO (Bank-Owned)', desc: 'If no bidder meets the minimum at auction, the lender takes title. The property becomes REO and may be listed through traditional real estate channels.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.stage}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The Nassau County Tax Lien Sale: A Separate Pathway</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Beyond mortgage foreclosures, <strong className="text-white">Nassau County holds an Annual Tax Lien Sale</strong> administered by the Nassau County Treasurer.
            When property owners fall delinquent on real estate taxes, the county sells tax lien certificates to investors at a public auction.
          </p>
          <ul className="space-y-2 mb-4 pl-4">
            <li className="text-slate-300">Investors purchase liens and earn <strong className="text-white">interest</strong> on the redemption amount (up to applicable NY statutory rates)</li>
            <li className="text-slate-300">The property owner has a <strong className="text-white">redemption period</strong> to pay off the lien plus interest</li>
            <li className="text-slate-300">If the lien is not redeemed, the lienholder can commence a <strong className="text-white">tax lien foreclosure</strong> — a separate judicial proceeding</li>
          </ul>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm">
            Tax lien investing is a separate skill set from buying mortgage foreclosures. The risk profile, timeline, and legal process differ significantly.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">6 Steps to Buy a Nassau County Foreclosure Listing</h2>
          <ol className="space-y-4 pl-4">
            {[
              'Monitor lis pendens filings with the Nassau County Clerk\'s Office (240 Old Country Road, Mineola) or via PropertyShark/RealtyTrac',
              'Research active litigation via NYSCEF at iapps.courts.state.ny.us — shows current case stage, referee appointments, scheduled hearings',
              'Locate upcoming auctions from the Nassau County 10th Judicial District weekly auction PDFs at nycourts.gov',
              'Conduct title search and due diligence: identify superior liens, check property tax status, assess exterior condition',
              'Attend the auction at Nassau County Supreme Court, 100 Supreme Court Drive, Mineola, NY 11501. Bring a certified check for 10% of your maximum bid.',
              'Close within 30 days of court confirmation. Work with a NY real estate attorney experienced in referee deed closings.',
            ].map((step, i) => (
              <li key={i} className="text-slate-300">
                <strong className="text-white">{i + 1}.</strong> {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Nassau County Foreclosure FAQs</h2>
          <div className="space-y-6">
            {[
              { q: 'Where are Nassau County foreclosure auctions held?', a: 'Most mortgage foreclosure auctions (referee sales) are conducted at the Nassau County Supreme Court Courthouse, 100 Supreme Court Drive, Mineola, NY 11501. Auction dates are posted by the 10th Judicial District on NYCourts.gov.' },
              { q: 'How much deposit do I need at a Nassau County foreclosure auction?', a: 'Typically 10% of your winning bid, payable by certified or bank check at the time of auction. The balance is due within 30 days after court confirmation.' },
              { q: 'What is the difference between a pre-foreclosure and a Nassau County auction listing?', a: 'A pre-foreclosure (lis pendens) means a court action has been filed but no auction is scheduled yet. An auction listing means a Judgment of Foreclosure and Sale has been entered with a set auction date.' },
              { q: 'Can I inspect a property before bidding?', a: 'Generally no. Properties are sold as-is; interior access is rarely granted before the referee sale. Conduct exterior inspection and order a property report from the Nassau County Assessor.' },
              { q: 'Does Nassau County have a separate tax lien sale?', a: 'Yes. Nassau County\'s Annual Tax Lien Sale, run by the Nassau County Treasurer, allows investors to buy tax certificates. This is an entirely separate process from mortgage foreclosure.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">Nassau County vs. Neighboring Counties</h2>
          <ul className="space-y-2 pl-4">
            <li><Link href="/foreclosures/suffolk-county-ny" className="text-emerald-400 hover:underline">Suffolk County NY Foreclosure Listings</Link> — Nassau&apos;s eastern neighbor; generally lower price points, higher inventory</li>
            <li><Link href="/foreclosures/queens-county-ny" className="text-emerald-400 hover:underline">Queens County Foreclosure Listings</Link> — NYC borough immediately west; same judicial process</li>
            <li><Link href="/foreclosures/kings-county-ny" className="text-emerald-400 hover:underline">Kings County (Brooklyn) Foreclosure Listings</Link> — extremely high property values, very competitive auctions</li>
            <li><Link href="/foreclosures/bronx-county-ny" className="text-emerald-400 hover:underline">Bronx County Foreclosure Listings</Link> — different market dynamics and price tiers</li>
          </ul>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. Nassau County Clerk&apos;s Office — 240 Old Country Road, Mineola, NY 11501</li>
            <li>2. <a href="https://iapps.courts.state.ny.us" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">NYSCEF — NY eCourts</a></li>
            <li>3. <a href="https://www.nycourts.gov" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">NYCourts.gov — 10th Judicial District foreclosure listings</a></li>
            <li>4. Real Property Actions and Proceedings Law (RPAPL) Article 13, §§1301–1391</li>
            <li>5. Civil Practice Law and Rules (CPLR) §3408</li>
          </ol>
          <p className="text-xs text-slate-600 mt-4">
            YMYL advisory: Foreclosure auctions involve significant legal and financial risk. Consult a licensed NY real estate attorney before bidding.
          </p>
        </section>
      </main>
    </div>
  )
}
