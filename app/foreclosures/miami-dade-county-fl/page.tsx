import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Miami-Dade Foreclosure Listings — Complete Investor & Homeowner Guide',
  description: 'Miami-Dade foreclosure listings explained — 8,469 vs. 19 gap, how to bid on realforeclose.com, two auction tracks, redemption rights & surplus fund rules.',
  alternates: { canonical: 'https://forclos.com/foreclosures/miami-dade-county-fl' },
  openGraph: {
    title: 'Miami-Dade Foreclosure Listings — Complete Investor & Homeowner Guide',
    description: 'Miami-Dade foreclosure listings explained — 8,469 vs. 19 gap, how to bid on realforeclose.com, two auction tracks, redemption rights & surplus fund rules.',
    url: 'https://forclos.com/foreclosures/miami-dade-county-fl',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miami-Dade Foreclosure Listings — Complete Investor & Homeowner Guide',
    description: 'Miami-Dade foreclosure listings explained — 8,469 vs. 19 gap, how to bid on realforeclose.com, two auction tracks, redemption rights & surplus fund rules.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://forclos.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Florida foreclosures',
        item: 'https://forclos.com/foreclosures/florida',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Miami-Dade County',
        item: 'https://forclos.com/foreclosures/miami-dade-county-fl',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Miami-Dade Foreclosure Listings: The Complete Investor & Homeowner Guide',
    description: 'Complete guide to Miami-Dade foreclosure listings: Florida\'s judicial foreclosure process, how to bid on realforeclose.com, two auction tracks (mortgage vs. tax deed), redemption rights, surplus funds, and homeowner resources.',
    url: 'https://forclos.com/foreclosures/miami-dade-county-fl',
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/miami-dade-county-fl' },
    about: {
      '@type': 'Place',
      name: 'Miami-Dade County',
      address: { '@type': 'PostalAddress', addressRegion: 'FL', addressCountry: 'US' },
    },
    keywords: 'miami dade foreclosure listings, miami foreclosure auction, florida judicial foreclosure, realforeclose.com, miami-dade tax deed sale',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where are Miami-Dade foreclosure auctions held?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All mortgage foreclosure auctions are conducted exclusively online at miamidade.realforeclose.com. There are no in-person courthouse-steps auctions for mortgage foreclosures. Tax deed sales are managed through a separate Clerk\'s process.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much do I need to bid on a Miami-Dade foreclosure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The minimum bid is typically set by the plaintiff (lender) at the judgment amount. You\'ll need to pre-deposit 5% of your intended bid electronically before the auction, with the remaining balance due by 4:00 PM on auction day.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the former homeowner take back the property after the auction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Only until the Certificate of Sale is issued. Once the Clerk issues the Certificate of Sale to the winning bidder, Florida Statute § 45.0315 extinguishes the right of redemption.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Miami-Dade Foreclosure Registry and do I need to comply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Miami-Dade Ordinance No. 08-133 requires all properties subject to a lis pendens to be registered with the county within 30 days of the filing. This applies to lenders and banks, not auction buyers — but buyers should verify the prior owner registered. Contact (786) 315-2552 or visit bldgappl.miamidade.gov/foreclosureregistry/ for details.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens to surplus funds if the auction price exceeds the judgment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Surplus funds belong to the former homeowner or junior lienholders. To claim them, contact the Clerk\'s Foreclosure Unit within 10 days of the Certificate of Sale and pay a $50 reopening fee.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the bank sue me for the difference after foreclosure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On a 1-4 unit residential property, the lender has one year from the foreclosure judgment to pursue a deficiency judgment. Any deficiency is capped at the difference between fair market value and the unpaid debt — not the auction sale price.',
        },
      },
      {
        '@type': 'Question',
        name: "What's the difference between a mortgage foreclosure and a tax deed sale in Miami-Dade?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'They\'re entirely separate processes run by different Clerk\'s units. Mortgage foreclosures are lender-initiated court actions auctioned on realforeclose.com. Tax deed sales are initiated by tax certificate holders after prolonged non-payment of property taxes and are administered through a separate Tax Deed Unit.',
        },
      },
    ],
  },
]

export default function MiamiDadeCountyFLPage() {
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
          <Link href="/foreclosures/florida" className="hover:text-slate-300 transition-colors">Florida foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Miami-Dade County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Miami-Dade Foreclosure Listings: The Complete Investor &amp; Homeowner Guide
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 7, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-6">
          Search &quot;Miami-Dade foreclosure listings&quot; and you&apos;ll find a striking divide: aggregators like foreclosure.com show <strong>8,469 active properties</strong>. Zillow shows <strong>19</strong>. That 446-to-1 gap isn&apos;t a data glitch — it&apos;s the story of how Florida&apos;s judicial foreclosure system works, and understanding it is the difference between finding real deals and chasing phantom inventory.
        </p>
        <p className="text-slate-300 leading-relaxed mb-8">
          This guide explains why that gap exists, where Miami-Dade&apos;s actual foreclosure auction pipeline lives, how to bid on it step by step, and what rights homeowners retain throughout the process.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Why 8,469 vs. 19? Understanding the Inventory Gap</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Florida is a <strong>judicial foreclosure state</strong>, meaning every foreclosure requires a court judgment before a property can be auctioned. That process takes months — sometimes over a year. During that window, properties are in legal limbo: recorded as lis pendens (notice of lawsuit), tracked by courts, and indexed by data aggregators — but they haven&apos;t been sold yet and aren&apos;t listed on the MLS.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Zillow pulls from MLS feeds and active real estate listings. It sees 19 because only a trickle of REO (bank-owned) properties end up relisted there post-auction. The 8,469 figure aggregators show represents the entire <strong>pre-auction judicial pipeline</strong>: properties from the moment a lender files a complaint through final judgment, all the way to scheduled auction date.
          </p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <p className="font-semibold text-white mb-1">For investors: the real opportunity isn&apos;t on Zillow</p>
            <p>It&apos;s at the courthouse — or more precisely, online at <a href="https://miamidade.realforeclose.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">miamidade.realforeclose.com</a>, Miami-Dade&apos;s official electronic auction platform.</p>
          </div>
          <p className="text-slate-300 leading-relaxed mt-4">
            Compare this to non-judicial states: in <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">Maricopa County, AZ</Link>, lenders can bypass courts entirely and hold trustee sales within 90 days of default. Miami-Dade&apos;s pipeline moves slower but creates a larger visible inventory window for investors to work the lis pendens angle. Similarly, <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL</Link> is another judicial state where the pre-auction pipeline dwarfs MLS listings — the pattern holds across the Rust Belt and Southeast alike.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Two Separate Auction Tracks in Miami-Dade</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Miami-Dade runs two distinct foreclosure auction systems. Many guides treat them as one — they are not. Confusing them will cost you time and potentially money.</p>

          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-2">Track 1: Mortgage Foreclosure Auctions</p>
              <p className="mb-1"><strong>Administered by:</strong> Clerk&apos;s Foreclosure Unit</p>
              <p className="mb-1"><strong>Platform:</strong> <a href="https://miamidade.realforeclose.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">miamidade.realforeclose.com</a></p>
              <p><strong>What&apos;s sold:</strong> Properties where lenders have obtained a Final Judgment of Foreclosure. These are traditional bank-initiated foreclosures — the primary track for most residential foreclosures.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-2">Track 2: Tax Deed Sales</p>
              <p className="mb-1"><strong>Administered by:</strong> Clerk&apos;s Tax Deed Unit (separate department, separate process)</p>
              <p><strong>What&apos;s sold:</strong> Properties where owners have failed to pay property taxes for 2+ years, and a tax certificate holder has applied for a tax deed. Tax deed sales operate on a completely separate calendar and portal from mortgage foreclosures. For a comparison of tax mechanics in another major county, see our <Link href="/foreclosures/wayne-county-mi" className="text-emerald-400 hover:underline">Wayne County, MI guide</Link>.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How to Bid on Miami-Dade Foreclosures: Step by Step</h2>

          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 1: Register on realforeclose.com</p>
              <p>Registration is <strong>free</strong>. Go to <a href="https://miamidade.realforeclose.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">miamidade.realforeclose.com</a> and create an account. You&apos;ll need a valid email, contact information, and to agree to the platform&apos;s terms.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 2: Search Upcoming Auctions</p>
              <p>Browse scheduled auctions by date, address, or case number. Cross-reference case numbers with the court docket at <a href="https://miami-dadeclerk.com/courts_recorder.asp" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">miami-dadeclerk.com</a> to pull the full case history, including the lis pendens filing date, Final Judgment amount, and any junior liens.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 3: Pre-Deposit 5% of Your Intended Bid</p>
              <p>Before you can bid, you must deposit <strong>5% of your maximum intended bid</strong> via electronic payment through the platform. This is a <strong>per-auction</strong> requirement — if you plan to bid on three properties in one day, you need separate deposits for each. Deposits are returned electronically if you don&apos;t win.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 4: Bid in Real Time</p>
              <p>Miami-Dade&apos;s auctions run online in real time. You&apos;ll see opening bids (typically set by the plaintiff/lender at the judgment amount) and can bid competitively. Auctions typically run Monday through Friday during business hours.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 5: Pay the Balance by 4:00 PM Same Day</p>
              <p><strong>This is the hardest part for new investors.</strong> If you win, you must pay the <strong>remaining balance</strong> (total bid minus your 5% deposit) by <strong>4:00 PM that same day</strong> via electronic payment. There are no exceptions. Come unprepared and you forfeit your deposit and the property. Have your financing arranged, your wire transfer ready, or your hard money lender on standby before the auction clock runs.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Step 6: Receive Your Certificate of Sale</p>
              <p>After payment, the Clerk issues a <strong>Certificate of Sale</strong>. This starts the clock on the former owner&apos;s redemption window. After the redemption period expires with no redemption, you receive the Certificate of Title — and the property is legally yours.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Costs Beyond the Winning Bid</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Investors often undercount closing costs on foreclosure purchases. Miami-Dade add-ons include:</p>
          <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
            <li><strong>Documentary Stamp Tax:</strong> Florida imposes doc stamps on deeds at $0.70 per $100 of purchase price (Miami-Dade adds a $0.45 surtax per $100 on residential properties)</li>
            <li><strong>Recording Fees:</strong> Deed recording at the Clerk&apos;s office</li>
            <li><strong>Mandatory Foreclosure Registry Fee:</strong> Miami-Dade Ordinance No. 08-133 requires properties in foreclosure to be registered within 30 days of the lis pendens filing. Contact <strong>(786) 315-2552</strong> or visit <a href="https://bldgappl.miamidade.gov/foreclosureregistry/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">bldgappl.miamidade.gov/foreclosureregistry/</a> for details</li>
            <li><strong>Title search and insurance:</strong> Essential given lien complexity in judicial states</li>
          </ul>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm">
            Budget <strong>3–5% above your winning bid</strong> for total acquisition costs.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Homeowner Rights: Redemption, Surplus Funds &amp; Deficiency</h2>

          <h3 className="text-xl font-semibold text-white mb-3">Right of Redemption</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Under <strong>Florida Statute § 45.0315</strong>, a homeowner (or any party with legal interest) can redeem the property — pay off the full judgment amount plus costs — up until the <strong>Certificate of Sale is issued</strong>. Once the Certificate of Sale is in the new bidder&apos;s hands, redemption rights are extinguished. There is <strong>no post-sale redemption window</strong> in Florida for mortgage foreclosures.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Surplus Funds</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            If the winning bid <strong>exceeds</strong> the judgment amount, the difference is called surplus funds. Former homeowners — or junior lienholders — have a right to claim these funds under <strong>Florida Statute § 45.035(2)(a)</strong>.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-4">
            <strong>Critical deadline:</strong> You must contact the Clerk&apos;s Foreclosure Unit <strong>within 10 days of the Certificate of Sale</strong> and pay a <strong>$50 reopening fee</strong> to file a claim. Miss that window and you lose the right to those funds.
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">Deficiency Judgments</h3>
          <p className="text-slate-300 leading-relaxed mb-2">When the foreclosure auction price is less than what the borrower owes, lenders may pursue a deficiency judgment. Florida Statute § 702.06 governs this. Key limits:</p>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>For residential properties of <strong>four units or fewer</strong>, the statute of limitations is <strong>1 year</strong> from the foreclosure judgment date</li>
            <li>Courts are required to limit any deficiency to the <strong>difference between the fair market value (FMV) and the unpaid debt</strong> — not the difference between the auction sale price and the debt</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The Lis Pendens Strategy for Investors</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Sophisticated Miami-Dade investors don&apos;t wait for auction day — they work the <strong>lis pendens list</strong>.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            A lis pendens is recorded at the start of a foreclosure lawsuit, months or years before auction. Searching lis pendens filings at <a href="https://miami-dadeclerk.com/courts_recorder.asp" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">miami-dadeclerk.com</a> gives you early visibility into distressed properties. From there, investors can contact homeowners directly to explore pre-foreclosure purchases, perform title research early to understand lien stacks, and estimate redemption likelihood based on equity position.
          </p>
          <p className="text-slate-300 leading-relaxed">
            This is the same pipeline strategy used in major Sun Belt markets. In <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County, TX</Link> — a non-judicial state — investors work the Notice of Trustee Sale list in a similar early-stage fashion, though the timeline is dramatically compressed. Miami-Dade&apos;s judicial timeline gives more lead time, which sophisticated investors treat as an advantage. In high-CPC markets like <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">Los Angeles County, CA</Link>, the same lis pendens-first strategy is used, though California&apos;s non-judicial process and strong homeowner protections create a different operating environment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Resources for Homeowners Facing Foreclosure</h2>
          <p className="text-slate-300 leading-relaxed mb-4">If you are a homeowner facing foreclosure in Miami-Dade, you are not without options — and you don&apos;t have to navigate alone.</p>
          <div className="space-y-3">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white">Legal Services of Greater Miami</p>
              <p>📞 (305) 576-0080</p>
              <p className="text-slate-400 mt-1">Provides free legal assistance to income-qualifying homeowners facing foreclosure. Early contact — before a Final Judgment is entered — gives attorneys the most options.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white">HUD-Approved Housing Counselors</p>
              <p>Free foreclosure prevention counseling through HUD-certified agencies.</p>
              <p className="mt-1"><a href="https://www.hud.gov/find/counseling" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">hud.gov/find/counseling</a></p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white">Miami-Dade Surplus Real Properties</p>
              <p>Miami-Dade County also sells government-owned surplus properties through its Real Estate Division — a separate channel from judicial foreclosures.</p>
              <p className="mt-1"><a href="https://www.miamidade.gov/global/business/realestate/surplus-real-properties-for-sale.page" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">miamidade.gov surplus properties</a></p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Where are Miami-Dade foreclosure auctions held?</h3>
              <p className="text-slate-300 leading-relaxed">All mortgage foreclosure auctions are conducted exclusively online at <a href="https://miamidade.realforeclose.com" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">miamidade.realforeclose.com</a>. There are no in-person courthouse-steps auctions for mortgage foreclosures. Tax deed sales are managed through a separate Clerk&apos;s process.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">How much do I need to bid on a Miami-Dade foreclosure?</h3>
              <p className="text-slate-300 leading-relaxed">The minimum bid is typically set by the plaintiff (lender) at the judgment amount. You&apos;ll need to pre-deposit 5% of your intended bid electronically before the auction, with the remaining balance due by 4:00 PM on auction day.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Can the former homeowner take back the property after the auction?</h3>
              <p className="text-slate-300 leading-relaxed">Only until the Certificate of Sale is issued. Once the Clerk issues the Certificate of Sale to the winning bidder, <strong>Florida Statute § 45.0315</strong> extinguishes the right of redemption. Act quickly if you intend to redeem — there is no post-sale window.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What is the Miami-Dade Foreclosure Registry and do I need to comply?</h3>
              <p className="text-slate-300 leading-relaxed">Miami-Dade Ordinance No. 08-133 requires all properties subject to a lis pendens to be registered with the county within 30 days of the filing. This applies to lenders and banks, not auction buyers — but buyers should verify the prior owner registered. Contact <strong>(786) 315-2552</strong> or visit <a href="https://bldgappl.miamidade.gov/foreclosureregistry/" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">bldgappl.miamidade.gov/foreclosureregistry/</a> for details.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What happens to surplus funds if the auction price exceeds the judgment?</h3>
              <p className="text-slate-300 leading-relaxed">Surplus funds belong to the former homeowner or junior lienholders. To claim them, contact the Clerk&apos;s Foreclosure Unit within <strong>10 days of the Certificate of Sale</strong> and pay a $50 reopening fee. Don&apos;t delay — this window is strict.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Can the bank sue me for the difference after foreclosure?</h3>
              <p className="text-slate-300 leading-relaxed">On a 1-4 unit residential property, the lender has <strong>one year from the foreclosure judgment</strong> to pursue a deficiency judgment. Any deficiency is capped at the difference between fair market value and the unpaid debt — not the auction sale price. If that window has passed, the deficiency claim is time-barred.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What&apos;s the difference between a mortgage foreclosure and a tax deed sale in Miami-Dade?</h3>
              <p className="text-slate-300 leading-relaxed">They&apos;re entirely separate processes run by different Clerk&apos;s units. <strong>Mortgage foreclosures</strong> are lender-initiated court actions auctioned on realforeclose.com. <strong>Tax deed sales</strong> are initiated by tax certificate holders after prolonged non-payment of property taxes and are administered through a separate Tax Deed Unit. Both are worth monitoring, but require separate research tracks.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <p className="text-slate-300 leading-relaxed mb-4">
            Forclos tracks Miami-Dade lis pendens filings, Final Judgment auctions on realforeclose.com, and REO listings in one interface. Set alerts for specific zip codes, neighborhoods (Coral Gables, Hialeah, Homestead, Miami Gardens, Doral), or judgment amount thresholds. Cross-shop other major markets:{' '}
            <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County, TX foreclosure auction</Link>,{' '}
            <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">Maricopa County, AZ trustee sales</Link>,{' '}
            <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">LA County foreclosure listings</Link>, and{' '}
            <Link href="/foreclosures/wayne-county-mi" className="text-emerald-400 hover:underline">Wayne County, MI auction</Link>.
          </p>
          <Link href="/foreclosures/miami-dade-county-fl" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg transition-colors">
            Browse Miami-Dade foreclosure listings →
          </Link>
        </section>

        {/* Sources */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://www.flsenate.gov/Laws/Statutes/2023/45.0315" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Florida Statute § 45.0315 — Right of Redemption</a></li>
            <li>2. <a href="https://www.flsenate.gov/Laws/Statutes/2023/45.035" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Florida Statute § 45.035 — Surplus Funds</a></li>
            <li>3. <a href="https://www.flsenate.gov/Laws/Statutes/2023/702.06" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Florida Statute § 702.06 — Deficiency Decree</a></li>
            <li>4. <a href="https://miamidade.realforeclose.com" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Miami-Dade Foreclosure Auction Platform — realforeclose.com</a></li>
            <li>5. <a href="https://miami-dadeclerk.com/courts_recorder.asp" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Miami-Dade Clerk of Courts — Lis Pendens &amp; Court Records</a></li>
            <li>6. <a href="https://bldgappl.miamidade.gov/foreclosureregistry/" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Miami-Dade Foreclosure Registry — Ordinance 08-133</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
