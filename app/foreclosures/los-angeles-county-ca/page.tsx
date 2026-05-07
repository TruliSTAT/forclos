import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Los Angeles County Foreclosure Listings — Trustee Sales, REO & Complete CA Buyer\'s Guide',
  description: 'Comprehensive guide to Los Angeles County foreclosure listings: California nonjudicial foreclosure, AB 2424, SB 1079 post-auction rights, LA County Registrar-Recorder, trustee sales, and REO.',
  alternates: { canonical: 'https://forclos.com/foreclosures/los-angeles-county-ca' },
  openGraph: {
    title: 'Los Angeles County Foreclosure Listings & CA Buyer Guide',
    description: 'AB 2424, SB 1079, trustee sales, REO, and the LA County Registrar-Recorder — everything investors need for the LA County foreclosure market.',
    url: 'https://forclos.com/foreclosures/los-angeles-county-ca',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Los Angeles County Foreclosure Listings & CA Buyer Guide',
    description: 'AB 2424, SB 1079, trustee sales, REO, and the LA County Registrar-Recorder for investors.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Los Angeles County Foreclosure Listings — Trustee Sales, REO & the Complete CA Buyer\'s Guide',
    description: 'Comprehensive guide to LA County foreclosure listings covering California nonjudicial foreclosure, AB 2424, SB 1079, trustee sales, REO, and the LA County Registrar-Recorder.',
    keywords: 'los angeles county foreclosure listings, la county trustee sale, california nonjudicial foreclosure, AB 2424, SB 1079, REO los angeles',
    url: 'https://forclos.com/foreclosures/los-angeles-county-ca',
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
        name: 'Does California have a redemption period after a foreclosure sale?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. California\'s nonjudicial foreclosure process has no post-sale redemption period. Once the Trustee\'s Deed Upon Sale is recorded, the former owner has no right to reclaim the property.' },
      },
      {
        '@type': 'Question',
        name: 'What is AB 2424 and how does it affect buyers in 2025?',
        acceptedAnswer: { '@type': 'Answer', text: 'AB 2424, effective January 1, 2025, requires a trustee sale to be postponed a minimum of 45 days if the property is listed with an agent or under a purchase agreement. It also establishes a minimum sale price of 67% of fair market value when an eligible bidder is present at auction.' },
      },
      {
        '@type': 'Question',
        name: 'What is SB 1079 and can it help me buy a foreclosure as an owner-occupant?',
        acceptedAnswer: { '@type': 'Answer', text: 'SB 1079 grants tenants, prospective owner-occupants, and qualifying nonprofits a 45-day post-auction right of first refusal to match the winning bid at a trustee sale. Submit a Notice of Intent to Bid before the sale. If a third-party wins at auction, you have 45 days to match their price.' },
      },
      {
        '@type': 'Question',
        name: 'Is there a sheriff sale in California?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. California uses the nonjudicial foreclosure process with no court involvement. The auction is called a trustee\'s sale, conducted by a private trustee — not the county sheriff. This differs from judicial states like Illinois where sheriffs conduct sales.' },
      },
      {
        '@type': 'Question',
        name: 'What liens survive a California trustee sale?',
        acceptedAnswer: { '@type': 'Answer', text: 'Senior liens survive: most importantly delinquent property taxes (super-priority), certain IRS liens with redemption rights, and liens recorded before the deed of trust being foreclosed. Junior liens such as second mortgages are typically extinguished.' },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between the TTC auction and a trustee sale in LA County?',
        acceptedAnswer: { '@type': 'Answer', text: 'A trustee\'s sale is mortgage foreclosure by a private trustee on behalf of a lender. The LA County Treasurer and Tax Collector (TTC) auction, run through GovEase, sells properties in tax default. Entirely separate systems — different rules, properties, and registration requirements.' },
      },
      {
        '@type': 'Question',
        name: 'How do I search for NODs and trustee sale notices in LA County?',
        acceptedAnswer: { '@type': 'Answer', text: 'The official source is the LA County Registrar-Recorder/County Clerk at lavote.gov. You can search recorded Notices of Default and Notices of Trustee\'s Sale. Forclos aggregates these public records into an alert-enabled interface.' },
      },
    ],
  },
]

export default function LosAngelesCountyCAPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <NavBar />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/foreclosures/california" className="hover:text-slate-300 transition-colors">California foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Los Angeles County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Los Angeles County Foreclosure Listings — Trustee Sales, REO &amp; the Complete CA Buyer&apos;s Guide
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 6, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-4">
          If you&apos;re tracking <strong className="text-white">Los Angeles County foreclosure listings</strong>, you&apos;re navigating one of the most
          legally complex and financially high-stakes real estate markets in the United States. With a median foreclosure listing price
          around $975,000 and over 4,300 distressed properties spanning pre-foreclosure, trustee auction, and bank-owned stages,
          LA County offers real opportunity — but only to buyers who understand how California&apos;s nonjudicial foreclosure system actually works.
        </p>
        <p className="text-slate-300 leading-relaxed mb-8">
          This guide covers the Civil Code §§ 2924–2924n legal framework, the 2025 changes under AB 2424, SB 1079 post-auction
          bidding rights, how to search NOD and NTS filings through the LA County Registrar-Recorder, trustee sale mechanics,
          the TTC/GovEase tax-defaulted property system, and the due diligence steps that separate profitable purchases from expensive mistakes.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">California&apos;s Nonjudicial Foreclosure Process</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            California is a <strong className="text-white">nonjudicial foreclosure state</strong> — lenders foreclose without filing a lawsuit as long as
            a power-of-sale clause is in the deed of trust (standard in virtually all CA mortgages). Governed by{' '}
            <strong className="text-white">California Civil Code §§ 2924 through 2924n</strong>.
          </p>
          <ol className="space-y-3 pl-4 list-decimal list-outside text-slate-300">
            <li><strong className="text-white">120-Day CFPB Hold:</strong> Federal regs require lenders to wait 120 days of delinquency and explore loss mitigation before initiating foreclosure.</li>
            <li><strong className="text-white">Notice of Default (NOD):</strong> Recorded with the LA County Registrar-Recorder, triggering a mandatory 90-day cure period.</li>
            <li><strong className="text-white">Notice of Trustee&apos;s Sale (NTS):</strong> Filed after 90 days if uncured. Sale date set at least 21 days out. Posted on property, published three times over three weeks, mailed to borrower 20+ days before sale.</li>
            <li><strong className="text-white">AB 2424 Extension (Jan 1, 2025):</strong> If the property is listed with an agent or under a purchase agreement when the NTS is filed, the sale must be postponed a minimum of 45 days. A 67% FMV minimum bid floor applies when an &ldquo;eligible bidder&rdquo; is present.</li>
            <li><strong className="text-white">Trustee Sale Auction:</strong> Held at 111 N. Hill St., downtown LA (confirm exact location with trustee). Cash or cashier&apos;s check required at the time of winning bid. No financing contingencies, no inspection, as-is sale.</li>
            <li><strong className="text-white">SB 1079 — 45-Day Post-Auction Window:</strong> Eligible bidders (tenants, prospective owner-occupants, qualifying nonprofits) have 45 days to match the winning bid. Trustee cannot record the deed during this window.</li>
            <li><strong className="text-white">Trustee&apos;s Deed Upon Sale (TDUS):</strong> Recorded after the SB 1079 window closes. <strong className="text-white">No post-sale redemption period in California for nonjudicial foreclosures.</strong></li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">AB 2424: What Changed in January 2025</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            AB 2424 is the most significant California foreclosure reform in years — and nearly absent from most current competitor content.
          </p>
          <ul className="space-y-2 pl-4 text-slate-300">
            <li><strong className="text-white">45-day mandatory postponement</strong> if the property is listed for sale or under purchase agreement when the NTS is posted</li>
            <li><strong className="text-white">67% FMV minimum bid floor</strong> when an eligible bidder is present at the trustee sale</li>
            <li><strong className="text-white">Enhanced borrower notices</strong> — expanded notification requirements before the sale clock starts</li>
            <li><strong className="text-white">Civil Code § 2924m reporting</strong> — trustees must electronically report sale results to the California AG within 15 days</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">SB 1079: Post-Auction Right of First Refusal</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            SB 1079 (effective January 2021) created a powerful exception to the &ldquo;highest bidder wins&rdquo; rule:
          </p>
          <ul className="space-y-2 pl-4 mb-4 text-slate-300">
            <li>Eligible bidders — primarily <strong className="text-white">tenants in the property</strong>, <strong className="text-white">prospective owner-occupants</strong> (intending to live there as a primary residence), and <strong className="text-white">qualified nonprofits</strong> — may submit a written Notice of Intent to Bid before the sale.</li>
            <li>If a third-party (not the lender) wins at auction, eligible bidders have <strong className="text-white">45 days to match the winning bid</strong>.</li>
            <li>The trustee cannot record the deed to the winning bidder until the window closes.</li>
          </ul>
          <div className="bg-slate-900 border border-emerald-800 rounded-lg p-4 text-slate-300 text-sm">
            <strong className="text-emerald-400">Owner-occupant strategy:</strong> Submit your intent notice before the sale. If you lose at the courthouse steps, you have 45 days to match the winning price and take 45 days to line up financing — all at the auction price.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">LA County Government Resources</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">LA County Registrar-Recorder/County Clerk</h3>
              <p className="text-slate-300 leading-relaxed">
                Primary source for NODs, NTSes, and Trustee&apos;s Deeds. Search at{' '}
                <a href="https://www.lavote.gov/home/recorder/real-estate-records/viewing-real-estate-records/view-real-estate-records" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">lavote.gov</a>.
                Also administers the Homeowner Notification Program for enrolled owners.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">LA County Treasurer and Tax Collector (TTC) / GovEase</h3>
              <p className="text-slate-300 leading-relaxed">
                Separate from the mortgage trustee sale system. The TTC manages annual auctions of tax-defaulted properties through{' '}
                <a href="https://www.govease.com/los-angeles" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">GovEase</a>.
                Different rules, different properties, different buyer pool — register separately.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">LAHD Foreclosure Registry (City of LA Only)</h3>
              <p className="text-slate-300 leading-relaxed">
                Within the City of LA, lenders must register foreclosure properties with the{' '}
                <a href="https://housing.lacity.gov" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">LA Housing Department (LAHD)</a>{' '}
                within 30 days of NOD issuance. REO owners must also register post-foreclosure. Check LAHD compliance status as part of due diligence.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">LA County Foreclosure Market — Key Numbers</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Active MLS foreclosure listings', val: '~95–117 properties' },
              { label: 'Active NOD (pre-foreclosure) filings', val: '1,000+' },
              { label: 'Upcoming trustee sale auctions', val: '~225 properties' },
              { label: 'Total distress pool', val: '4,397+ across all stages' },
              { label: 'Median foreclosure list price', val: '~$975,000' },
              { label: 'County foreclosure rate', val: '1 per 3,538 units (#14 nationally)' },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900 rounded-lg p-3">
                <p className="text-emerald-400 font-semibold text-sm">{stat.val}</p>
                <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Due Diligence Checklist</h2>
          <div className="space-y-3">
            {[
              { title: 'Lien priority search', body: 'Pull all recorded docs at lavote.gov. Identify senior liens (property taxes, HOA assessments, mechanics liens) that survive the trustee sale.' },
              { title: 'TTC tax status', body: 'Check for delinquent property taxes at ttc.lacounty.gov — these pass to the buyer.' },
              { title: 'LAHD Registry (City of LA)', body: 'Check registration status and outstanding violations at housing.lacity.gov.' },
              { title: 'SB 1079 eligibility', body: 'Is the property occupied? Are there tenants with right-of-first-refusal status? Submit Notice of Intent before the sale if applicable.' },
              { title: 'AB 2424 status', body: 'Is there an active listing or purchase agreement? Confirm the scheduled sale reflects any mandatory 45-day postponement.' },
              { title: 'Property condition', body: 'No inspection contingency at trustee sale. Drive by, assess external condition, check public permit and code violation records.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.title}</p>
                <p className="text-slate-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Does California have a redemption period after a foreclosure sale?', a: 'No. California\'s nonjudicial foreclosure process has no post-sale redemption period. Once the Trustee\'s Deed Upon Sale is recorded, the former owner has no right to reclaim the property.' },
              { q: 'What is AB 2424 and how does it affect buyers in 2025?', a: 'AB 2424 (effective Jan 1, 2025) requires a 45-day postponement if the property is listed or under purchase agreement, and establishes a 67% FMV minimum bid floor when an eligible bidder is present at auction.' },
              { q: 'What is SB 1079 and can it help me buy as an owner-occupant?', a: 'SB 1079 grants tenants, prospective owner-occupants, and qualifying nonprofits a 45-day post-auction right to match the winning bid. Submit a Notice of Intent to Bid before the sale date.' },
              { q: 'Is there a sheriff sale in California?', a: 'No. California uses nonjudicial foreclosure — a private trustee conducts the sale, not the county sheriff. This differs from judicial states like Illinois where sheriffs actually run the sale.' },
              { q: 'What liens survive a California trustee sale?', a: 'Senior liens survive — especially delinquent property taxes (super-priority) and IRS liens (with 120-day redemption rights). Junior liens (second mortgages, junior judgments) are typically extinguished.' },
              { q: 'What\'s the difference between the TTC auction and a trustee sale?', a: 'Trustee sale = mortgage foreclosure by a private trustee. TTC auction = county selling tax-defaulted properties via GovEase. Entirely separate systems with different rules and registration requirements.' },
              { q: 'How do I search NODs and NTSes in LA County?', a: 'Official source: LA County Registrar-Recorder at lavote.gov. Forclos aggregates these same public records with alert-enabled tracking and status change notifications.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <p className="text-slate-300 leading-relaxed">
            For cross-market comparison, Forclos covers{' '}
            <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL</Link>,{' '}
            <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County, TX</Link>,{' '}
            <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">Maricopa County, AZ</Link>, and{' '}
            <Link href="/foreclosures/wayne-county-mi" className="text-emerald-400 hover:underline">Wayne County, MI</Link>.
          </p>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://www.lavote.gov/home/recorder/real-estate-records" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">LA County Registrar-Recorder — Real Estate Records</a></li>
            <li>2. <a href="https://ttc.lacounty.gov" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">LA County Treasurer and Tax Collector</a></li>
            <li>3. <a href="https://www.govease.com/los-angeles" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">GovEase — LA County Tax Auction</a></li>
            <li>4. <a href="https://housing.lacity.gov" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">LAHD — Foreclosure Registry Program</a></li>
            <li>5. California Civil Code §§ 2924–2924n — Nonjudicial Foreclosure</li>
            <li>6. AB 2424 (effective January 1, 2025)</li>
            <li>7. SB 1079 (effective January 2021)</li>
            <li>8. <a href="https://www.redfin.com/county/2084/CA/Los-Angeles-County/foreclosures" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Redfin — LA County Foreclosures</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
