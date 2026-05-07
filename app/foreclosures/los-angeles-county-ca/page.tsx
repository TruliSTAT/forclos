import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'LA County Foreclosure Listings — Trustee Sales & REO Guide',
  description: 'Search Los Angeles County foreclosure listings: trustee sales, REO, NOD pipeline, AB 2424, SB 1079 rights, and CA nonjudicial process explained.',
  alternates: { canonical: 'https://forclos.com/foreclosures/los-angeles-county-ca' },
  openGraph: {
    title: 'LA County Foreclosure Listings — Trustee Sales & REO Guide',
    description: 'Search Los Angeles County foreclosure listings: trustee sales, REO, NOD pipeline, AB 2424, SB 1079 rights, and CA nonjudicial process explained.',
    url: 'https://forclos.com/foreclosures/los-angeles-county-ca',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LA County Foreclosure Listings — Trustee Sales & REO Guide',
    description: 'Search Los Angeles County foreclosure listings: trustee sales, REO, NOD pipeline, AB 2424, SB 1079 rights, and CA nonjudicial process explained.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Los Angeles County Foreclosure Listings — Trustee Sales, REO & the Complete CA Buyer\'s Guide',
    description: 'Comprehensive guide to Los Angeles County foreclosure listings covering California\'s nonjudicial foreclosure process, AB 2424, SB 1079, trustee sales, REO, and the LA County Registrar-Recorder.',
    url: 'https://forclos.com/foreclosures/los-angeles-county-ca',
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/los-angeles-county-ca' },
    about: {
      '@type': 'Place',
      name: 'Los Angeles County',
      address: { '@type': 'PostalAddress', addressRegion: 'CA', addressCountry: 'US' },
    },
    keywords: 'los angeles county foreclosure listings, la county trustee sale, california nonjudicial foreclosure, AB 2424, SB 1079, REO los angeles',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does California have a redemption period after a foreclosure sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. California\'s nonjudicial foreclosure process has no post-sale redemption period. Once the Trustee\'s Deed Upon Sale is recorded, the former owner has no right to reclaim the property by paying the outstanding debt.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is AB 2424 and how does it affect buyers in 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AB 2424, effective January 1, 2025, requires a trustee sale to be postponed a minimum of 45 days if the property is listed with an agent or under a purchase agreement. It also establishes a minimum sale price of 67% of fair market value when an eligible bidder is present at auction.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is SB 1079 and can it help me buy a foreclosure as an owner-occupant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SB 1079 grants tenants, prospective owner-occupants, and qualifying nonprofits a 45-day post-auction right of first refusal to match the winning bid at a trustee sale. Submit a Notice of Intent to Bid before the sale; if a third-party wins at auction, you have 45 days to match their price.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a sheriff sale in California?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. California uses the nonjudicial foreclosure process with no court involvement. The auction is called a trustee\'s sale and is conducted by a private trustee, not the county sheriff. This differs from judicial foreclosure states like Illinois where sheriffs conduct sales.',
        },
      },
      {
        '@type': 'Question',
        name: 'What liens survive a California trustee sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Senior liens survive, most importantly delinquent property taxes (super-priority), certain IRS liens, and liens recorded before the foreclosed deed of trust. Junior liens such as second mortgages and junior judgment liens are typically extinguished by the trustee sale.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between the TTC auction and a trustee sale in LA County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A trustee\'s sale is mortgage foreclosure conducted by a private trustee on behalf of a lender. The TTC (Treasurer and Tax Collector) auction, run through GovEase, sells properties in tax default due to unpaid property taxes. These are entirely separate systems with different rules, properties, and registration requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I search for NODs and trustee sale notices in LA County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The official source is the LA County Registrar-Recorder/County Clerk at lavote.gov, where you can search recorded Notices of Default and Notices of Trustee\'s Sale. Forclos aggregates these public records into a searchable, alert-enabled interface for tracking multiple properties.',
        },
      },
    ],
  },
]

export default function LosAngelesCountyCAPage() {
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
          <Link href="/foreclosures/california" className="hover:text-slate-300 transition-colors">California foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Los Angeles County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Los Angeles County Foreclosure Listings — Trustee Sales, REO &amp; the Complete CA Buyer&apos;s Guide
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 7, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-8">
          If you&apos;re tracking <strong>Los Angeles County foreclosure listings</strong>, you&apos;re navigating one of the most legally complex and financially high-stakes real estate markets in the United States. With a median foreclosure listing price around $975,000 and over 4,300 distressed properties spanning pre-foreclosure, trustee auction, and bank-owned stages, LA County offers real opportunity — but only to buyers who understand how California&apos;s nonjudicial foreclosure system actually works.
        </p>
        <p className="text-slate-300 leading-relaxed mb-8">
          This guide covers everything: the Civil Code §§ 2924–2924n legal framework, the 2025 changes under AB 2424, SB 1079 post-auction bidding rights, how to search NOD and NTS filings through the LA County Registrar-Recorder, how to bid at trustee sales, how to access tax-defaulted properties through the Treasurer and Tax Collector (TTC/GovEase), and the due diligence steps that separate profitable purchases from expensive mistakes.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The CA Nonjudicial Foreclosure Process: How It Actually Works</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            California is a <strong>nonjudicial foreclosure state</strong>, meaning lenders can foreclose on property without filing a lawsuit or going to court — as long as a power-of-sale clause is included in the deed of trust, which is standard in virtually all California mortgage instruments. The process is governed by <strong>California Civil Code §§ 2924 through 2924n</strong>.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">Here&apos;s the standard sequence for a California nonjudicial foreclosure:</p>
          <ol className="space-y-3 text-slate-300 leading-relaxed mb-4 list-decimal list-inside">
            <li><strong>Delinquency → CFPB Hold:</strong> Federal regulations require lenders to wait a minimum of 120 days of delinquency before initiating foreclosure. During this period, loss mitigation options must be explored.</li>
            <li><strong>Notice of Default (NOD) Filing:</strong> The trustee records a Notice of Default with the <strong>LA County Registrar-Recorder/County Clerk</strong>. The NOD triggers a mandatory <strong>90-day cure period</strong>.</li>
            <li><strong>Notice of Trustee&apos;s Sale (NTS):</strong> If the borrower doesn&apos;t cure within 90 days, the trustee records the NTS. The sale date must be set <strong>at least 21 days out</strong>. The NTS is posted on the property, published in a local newspaper three times over three weeks, and mailed to the borrower at least 20 days before the sale.</li>
            <li><strong>AB 2424 Extension (Effective January 1, 2025):</strong> If the property is listed with a licensed real estate agent or is under a purchase agreement, the trustee sale must be <strong>postponed a minimum of 45 days</strong>. Additionally, if an &quot;eligible bidder&quot; is present at the sale, the minimum sale price is <strong>67% of fair market value</strong>.</li>
            <li><strong>Trustee Sale Auction:</strong> Held at the LA County courthouse steps (111 N. Hill St., downtown Los Angeles) or a designated location. Payment must be made via cashier&apos;s check or cash at the time of the winning bid. No financing contingencies. No inspection period. Properties sold strictly as-is.</li>
            <li><strong>Post-Sale SB 1079 Window:</strong> After the sale, eligible bidders — including tenants, prospective owner-occupants, and qualifying nonprofits — have <strong>45 days to match the winning bid</strong> under Senate Bill 1079.</li>
            <li><strong>Trustee&apos;s Deed Upon Sale (TDUS):</strong> Once the sale is final, the trustee records the TDUS with the Recorder. <strong>There is no post-sale redemption period in California for nonjudicial foreclosures.</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed">Total minimum timeline: approximately <strong>4–7 months</strong> from delinquency to completed sale. Post-AB 2424, active listings situations can push this toward 9–12 months.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">AB 2424: What Changed in January 2025</h2>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm mb-4">
            <p className="font-semibold text-white mb-2">AB 2424 is the most significant California foreclosure reform in years — and it&apos;s nearly invisible in most current ranking content.</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>45-day mandatory postponement</strong> if the property is listed for sale with an agent or under a purchase agreement when the NTS is posted or the sale is scheduled</li>
              <li><strong>67% FMV minimum bid floor</strong> when an eligible bidder is present at the trustee sale — this directly limits deep-discount bidding opportunities in competitive situations</li>
              <li><strong>Enhanced borrower notices</strong>: Expanded notification requirements to ensure homeowners are informed of their rights before the sale clock starts running</li>
              <li><strong>Civil Code § 2924m reporting</strong>: Trustees must electronically report sale results to the California Attorney General within 15 days of the sale being deemed final</li>
            </ul>
          </div>
          <p className="text-slate-300 leading-relaxed">For investors: AB 2424 doesn&apos;t kill the opportunity — it rewards due diligence and timely positioning.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">SB 1079: Post-Auction Right of First Refusal</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>Senate Bill 1079</strong> created a powerful exception to the &quot;highest bidder wins&quot; rule at California trustee sales. Effective January 2021 and continuing today:
          </p>
          <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
            <li>Eligible bidders — primarily <strong>tenants in the property</strong>, <strong>prospective owner-occupants</strong>, and <strong>qualified nonprofits</strong> — may submit a written notice of intent to bid <strong>before the trustee sale</strong>.</li>
            <li>If a third party wins at auction, eligible bidders have <strong>45 days after the sale</strong> to match the winning bid.</li>
            <li>During that 45-day window, the trustee cannot record the deed to the winning third-party bidder.</li>
          </ul>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <p className="font-semibold text-white mb-1">Strategic opportunity for owner-occupants</p>
            <p>Track SB 1079-eligible properties on Forclos and submit your intent notice before the sale. You can take 45 days to line up financing or do due diligence, then close at the auction price.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">LA County Government Resources for Foreclosure Research</h2>

          <h3 className="text-xl font-semibold text-white mb-3">LA County Registrar-Recorder/County Clerk</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The Registrar-Recorder is your primary source for official foreclosure document filings in LA County. NODs, NTSes, and Trustee&apos;s Deeds Upon Sale are all recorded here. You can search real estate records at{' '}
            <a href="https://www.lavote.gov/home/recorder/real-estate-records/viewing-real-estate-records/view-real-estate-records" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">lavote.gov</a>.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">LA County Treasurer and Tax Collector (TTC) / GovEase</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The mortgage foreclosure trustee sale and the <strong>tax-defaulted property auction</strong> are two completely separate systems — a distinction many buyers miss. The <strong>TTC</strong> manages the annual auction of properties that have fallen into tax default. This auction is run through <strong>GovEase</strong> (<a href="https://govease.com/los-angeles" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">govease.com/los-angeles</a>) and operates independently from the nonjudicial trustee sale process.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">LAHD Foreclosure Registry Program</h3>
          <p className="text-slate-300 leading-relaxed">
            The <strong>Los Angeles City Housing Department (LAHD)</strong> operates a Foreclosure Registry Program. Within the City of Los Angeles, lenders/trustees must register foreclosure properties with LAHD within 30 days of NOD issuance. Properties registered with LAHD must be maintained to avoid code violations accruing to the new owner — check LAHD registration status as part of your due diligence.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The LA County Foreclosure Market: Numbers That Matter</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-300 border border-slate-700 rounded-lg overflow-hidden">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Metric</th>
                  <th className="px-4 py-3 text-left">Value (2026)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr className="bg-slate-900"><td className="px-4 py-3">Active MLS-side foreclosure listings</td><td className="px-4 py-3">~95–117 properties</td></tr>
                <tr className="bg-slate-950"><td className="px-4 py-3">Active NOD (pre-foreclosure) filings</td><td className="px-4 py-3">1,000+</td></tr>
                <tr className="bg-slate-900"><td className="px-4 py-3">Upcoming trustee sale auctions</td><td className="px-4 py-3">~225 properties</td></tr>
                <tr className="bg-slate-950"><td className="px-4 py-3">REO/bank-owned inventory</td><td className="px-4 py-3">1,000+</td></tr>
                <tr className="bg-slate-900"><td className="px-4 py-3">Total distress pool</td><td className="px-4 py-3">4,397+</td></tr>
                <tr className="bg-slate-950"><td className="px-4 py-3">Median foreclosure list price</td><td className="px-4 py-3">~$975,000</td></tr>
                <tr className="bg-slate-900"><td className="px-4 py-3">Foreclosure rate</td><td className="px-4 py-3">1 per 3,538 housing units (No. 14 nationally)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Due Diligence: The LA County Checklist</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Before bidding or closing on any LA County foreclosure, verify:</p>
          <ol className="space-y-2 text-slate-300 leading-relaxed list-decimal list-inside">
            <li><strong>Lien priority search:</strong> Pull all recorded documents at lavote.gov. Identify senior liens (property taxes, HOA assessments, mechanic&apos;s liens) that survive the trustee sale.</li>
            <li><strong>TTC tax status:</strong> Check for delinquent property taxes at ttc.lacounty.gov — these pass to the buyer.</li>
            <li><strong>LAHD Registry:</strong> Check if the property (in City of LA) is registered and has any outstanding violations.</li>
            <li><strong>SB 1079 eligibility:</strong> Is the property occupied? Are there tenants with potential right-of-first-refusal status?</li>
            <li><strong>AB 2424 status:</strong> Is there an active listing or purchase agreement? Confirm the scheduled sale date reflects any mandatory postponement.</li>
            <li><strong>Property condition:</strong> No inspection contingency at trustee sale — drive by, assess external condition, use any public data on prior permits, code violations.</li>
            <li><strong>Title insurance:</strong> For trustee sales, title is typically insurable but confirm with your title company.</li>
            <li><strong>HOA status:</strong> Outstanding HOA assessments may survive or need to be negotiated.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Three Paths Into the LA County Distress Market</h2>
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Path 1: Pre-Foreclosure (NOD Stage)</p>
              <p>Contact homeowners directly after the NOD is recorded. Negotiate short sales, subject-to arrangements, or direct purchases. Highest competition from wholesalers, but also the most flexibility for creative deal structures.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Path 2: Trustee Sale Auction</p>
              <p>Cash-only, as-is, high-stakes. Best for experienced investors with deep local market knowledge and cash reserves. AB 2424 and SB 1079 add complexity but also create niches (owner-occupant SB 1079 strategy; AB 2424 delay research).</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">Path 3: REO/Bank-Owned</p>
              <p>Post-auction, bank-owned properties. Conventional financing available. Properties typically listed on MLS through bank-approved listing agents. More predictable process, less discount — but accessible to buyers who need mortgages. For comparison:{' '}
              <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">Maricopa County, AZ foreclosure listings</Link>.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Does California have a redemption period after a foreclosure sale?</h3>
              <p className="text-slate-300 leading-relaxed">No. California&apos;s nonjudicial foreclosure process has <strong>no post-sale redemption period</strong>. Once the Trustee&apos;s Deed Upon Sale is recorded, the former owner has no right to reclaim the property by paying the outstanding debt. This is a fundamental difference from states like Michigan, where statutory redemption periods can run 6 months or more.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What is AB 2424 and how does it affect buyers in 2025?</h3>
              <p className="text-slate-300 leading-relaxed">AB 2424, effective January 1, 2025, requires that a trustee sale be postponed a minimum of 45 days if the property is listed for sale with a real estate agent or under a purchase agreement. It also establishes a minimum sale price of 67% of fair market value when an &quot;eligible bidder&quot; is present at the auction. This law protects homeowners attempting to sell before foreclosure completes, but it also changes the timing calculus for investors tracking NTS filings.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What is SB 1079 and can it help me buy a foreclosure as an owner-occupant?</h3>
              <p className="text-slate-300 leading-relaxed">Yes. SB 1079 grants tenants, prospective owner-occupants, and qualifying nonprofits a 45-day post-auction right of first refusal to match the winning bid at a trustee sale. If you intend to live in the property as your primary residence, submit a written Notice of Intent to Bid to the trustee before the sale. If a third-party investor wins at auction, you have 45 days to match their bid — and the trustee cannot record the deed to the investor until your window closes.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Is there a &quot;sheriff sale&quot; in California like in other states?</h3>
              <p className="text-slate-300 leading-relaxed">No. California uses the <strong>nonjudicial foreclosure process</strong>, which means there is no court involvement and no sheriff sale. The correct term is trustee&apos;s sale — conducted by a private trustee, not the county sheriff. This distinguishes California from judicial foreclosure states like Illinois, where the sheriff does conduct the sale.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What liens survive a California trustee sale?</h3>
              <p className="text-slate-300 leading-relaxed"><strong>Senior liens survive</strong> — most importantly, delinquent property taxes (which always hold super-priority), certain IRS liens (with redemption rights), and any liens recorded before the deed of trust being foreclosed. Junior liens (second mortgages, junior judgment liens) are typically wiped out by the trustee sale. Always conduct a full lien search through lavote.gov before bidding.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What is the difference between the TTC auction and a trustee sale in LA County?</h3>
              <p className="text-slate-300 leading-relaxed">These are entirely separate systems. A <strong>trustee&apos;s sale</strong> is conducted by a private trustee on behalf of a lender foreclosing on a deed of trust — it&apos;s mortgage foreclosure. The <strong>TTC (Treasurer and Tax Collector) auction</strong> is conducted by the county to sell properties that have gone into tax default, using the GovEase platform. Different rules, different bidder requirements, different properties.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">How do I search for NODs and trustee sale notices in LA County?</h3>
              <p className="text-slate-300 leading-relaxed">The official source is the <strong>LA County Registrar-Recorder/County Clerk</strong> at{' '}
              <a href="https://lavote.gov" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">lavote.gov</a>. You can search recorded real estate documents including Notices of Default and Notices of Trustee&apos;s Sale. For aggregated and alert-enabled research, Forclos pulls these same public records into a searchable interface.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <p className="text-slate-300 leading-relaxed mb-4">
            For investors cross-shopping regional markets, Forclos covers the full distressed landscape across major counties — including{' '}
            <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL foreclosure listings</Link>,{' '}
            <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County, TX foreclosure auction</Link>,{' '}
            <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">Maricopa County, AZ foreclosure listings</Link>, and{' '}
            <Link href="/foreclosures/wayne-county-mi" className="text-emerald-400 hover:underline">Wayne County, MI foreclosure auction</Link>.
          </p>
          <Link href="/foreclosures/los-angeles-county-ca" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg transition-colors">
            Browse LA County foreclosure listings →
          </Link>
        </section>

        {/* Sources */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=2924." className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">California Civil Code § 2924 — Nonjudicial Foreclosure Process</a></li>
            <li>2. <a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB2424" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">AB 2424 — Foreclosure: Notice of Trustee Sale (2024)</a></li>
            <li>3. <a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201920200SB1079" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">SB 1079 — Foreclosure: Right of First Refusal (2020)</a></li>
            <li>4. <a href="https://www.lavote.gov/home/recorder/real-estate-records" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">LA County Registrar-Recorder — Real Estate Records</a></li>
            <li>5. <a href="https://ttc.lacounty.gov" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">LA County Treasurer and Tax Collector</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
