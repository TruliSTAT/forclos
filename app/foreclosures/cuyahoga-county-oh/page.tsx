import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Cuyahoga County Foreclosure Listings — Ohio Sheriff Sale Buyer\'s Guide (2025)',
  description: 'Find Cuyahoga County foreclosure listings, Ohio sheriff sale rules, 2025 bidding requirements, and the annual Forfeited Lands Sale — complete buyer\'s guide updated May 2025.',
  alternates: { canonical: 'https://forclos.com/foreclosures/cuyahoga-county-oh' },
  openGraph: {
    title: 'Cuyahoga County Foreclosure Listings — Ohio Sheriff Sale Buyer\'s Guide (2025)',
    description: 'Find Cuyahoga County foreclosure listings, Ohio sheriff sale rules, 2025 bidding requirements, and the annual Forfeited Lands Sale — complete buyer\'s guide updated May 2025.',
    url: 'https://forclos.com/foreclosures/cuyahoga-county-oh',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuyahoga County Foreclosure Listings — Ohio Sheriff Sale Buyer\'s Guide (2025)',
    description: 'Find Cuyahoga County foreclosure listings, Ohio sheriff sale rules, 2025 bidding requirements, and the annual Forfeited Lands Sale — complete buyer\'s guide updated May 2025.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cuyahoga County Foreclosure Listings: Complete Buyer\'s Guide to Ohio Sheriff Sales & Tax Auctions',
    description: 'Complete guide to Cuyahoga County foreclosure listings: weekly online sheriff sales, annual Forfeited Lands Sale, 2025 Affidavit of Non-Delinquency requirement, deposit rules, and homeowner redemption rights.',
    url: 'https://forclos.com/foreclosures/cuyahoga-county-oh',
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/cuyahoga-county-oh' },
    about: {
      '@type': 'Place',
      name: 'Cuyahoga County',
      address: { '@type': 'PostalAddress', addressRegion: 'OH', addressCountry: 'US' },
    },
    keywords: 'cuyahoga county foreclosure listings, cuyahoga sheriff sale, ohio foreclosure auction, realauction cuyahoga, forfeited lands sale ohio',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I attend the Cuyahoga County sheriff sale in person?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. All Cuyahoga County sheriff sales have been conducted exclusively online via the RealAuction platform since 2021. There is no in-person bidding option. You must register at cuyahoga.sheriffsaleauction.ohio.gov before the auction date.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum bid at a Cuyahoga County sheriff sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For a first-time mortgage foreclosure sale, the minimum bid is two-thirds (2/3) of the court-appraised value under ORC 2329.20. If the property goes to a second sale because no qualifying bid was received at the first auction, there is no minimum bid for residential properties.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a foreclosure take in Cuyahoga County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The average foreclosure in Ohio takes approximately 217 days from initial filing to the sheriff sale. Because Ohio is a judicial foreclosure state, every case must proceed through the Cuyahoga County Common Pleas Court.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Affidavit of Non-Delinquency and do I need one?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Effective April 9, 2025 (ORC 5721.19(J)), buyers who have delinquent property taxes on any Ohio real estate must submit a notarized Affidavit of Non-Delinquency before a sheriff sale can be confirmed. If you are tax-current on all Ohio properties, you will not need to file one — but verify your status before bidding.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between the sheriff sale and the Forfeited Lands Sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The weekly sheriff sale handles court-ordered judicial foreclosures under ORC Chapter 2329. The annual Forfeited Lands Sale handles tax-delinquent properties that have gone through the state forfeiture process under ORC 5723.11. The Forfeited Lands Sale often has no minimum bid and is held at the Huntington Convention Center.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the previous owner take the property back after I win the bid?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, under ORC 2329.33, the original debtor may redeem the property at any time from the date of sale until the court confirms the sale — a window that typically runs 30 to 90 days from auction. Once the court enters the confirmation order, the redemption right is extinguished. Do not take possession or begin any work until after court confirmation.',
        },
      },
    ],
  },
]

export default function CuyahogaCountyOHPage() {
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
          <Link href="/foreclosures/ohio" className="hover:text-slate-300 transition-colors">Ohio foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Cuyahoga County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Cuyahoga County Foreclosure Listings: Complete Buyer&apos;s Guide to Ohio Sheriff Sales &amp; Tax Auctions
        </h1>
        <p className="text-slate-400 text-sm mb-8">Updated May 2025 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-6">
          If you&apos;re hunting for foreclosure deals in Greater Cleveland, Cuyahoga County offers two distinct auction tracks — a weekly online sheriff sale and an annual Forfeited Lands Sale — each with its own rules, risks, and rewards. This guide covers everything you need to bid legally and confidently in 2025, including the brand-new <strong>Affidavit of Non-Delinquency</strong> requirement that caught many investors off-guard this spring.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Cuyahoga County Foreclosure Market Snapshot</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Ohio ranks 5th highest in the nation for foreclosure rates, and Cuyahoga County sits at the center of that activity. Some Shaker Heights zip codes rank nationally for foreclosure concentration, making this metro one of the most active judicial foreclosure markets in the Midwest rust belt.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Unlike nonjudicial states such as Texas — where sales like{' '}
            <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County foreclosures</Link> can move from notice to sale in as little as 41 days — Ohio is an exclusively <strong>judicial foreclosure state</strong>. Every case must pass through the <strong>Cuyahoga County Common Pleas Court</strong> under Ohio Revised Code (ORC) Chapter 2329. From filing to sale, the average Ohio foreclosure timeline runs approximately <strong>217 days</strong>. That lag creates opportunity for buyers who are prepared. For a rust-belt tax-foreclosure peer comparison, see our <Link href="/foreclosures/wayne-county-mi" className="text-emerald-400 hover:underline">Wayne County, MI guide</Link>. For judicial-state parallels closer in population, <Link href="/foreclosures/miami-dade-county-fl" className="text-emerald-400 hover:underline">Miami-Dade County, FL</Link> and <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL</Link> share Ohio&apos;s court-driven process.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Two Auction Tracks: Sheriff Sale vs. Forfeited Lands Sale</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Cuyahoga County is one of the few markets where serious investors must track <strong>two separate auction pipelines</strong>. Missing either one means leaving deals on the table.</p>

          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-2">Track 1 — Weekly Online Sheriff Sale (Judicial)</p>
              <p className="mb-1">The sheriff sale is the primary outlet for court-ordered foreclosures. As of 2021, all sales moved permanently to the <strong>RealAuction online platform</strong> at{' '}
              <a href="https://cuyahoga.sheriffsaleauction.ohio.gov" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">cuyahoga.sheriffsaleauction.ohio.gov</a>. There is no in-person attendance option.</p>
              <p className="mb-1"><strong>Auction schedule:</strong> Auctions are held weekly, historically on <strong>Mondays at 8:30 AM ET</strong>. When a Monday falls on a federal or state holiday, the sale moves to Tuesday.</p>
              <p><strong>How properties appear:</strong> Legal notices run in the Saturday edition of the <em>Daily Legal News</em> and on the court docket at{' '}
              <a href="https://cpdocket.cp.cuyahogacounty.gov" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">cpdocket.cp.cuyahogacounty.gov</a>.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-2">Track 2 — Annual Forfeited Lands Sale (Tax Delinquent)</p>
              <p>Ohio&apos;s <strong>Forfeited Lands Sale</strong> (ORC 5723.11) is a separate, county-administered auction for properties that failed to sell at the initial tax delinquency process. Cuyahoga County holds its annual Forfeited Lands Sale at the <strong>Huntington Convention Center</strong> in downtown Cleveland — check{' '}
              <a href="https://cuyahogacounty.us/fiscal-officer/departments/real-property/forfeited-lands" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">cuyahogacounty.us</a>{' '}
              for the current year&apos;s date and registration details. Forfeited lands properties often carry lower opening bids but higher title complexity — buyers must conduct thorough lien searches before bidding.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Step-by-Step: How to Bid at Cuyahoga County Sheriff Sales</h2>

          <div className="space-y-3">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">1. Register on RealAuction</p>
              <p>Create a free account at cuyahoga.sheriffsaleauction.ohio.gov. Registration must be completed before auction day. The platform requires identity verification.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">2. Understand the Minimum Bid Rules</p>
              <p><strong>First sale (mortgage foreclosure):</strong> Minimum bid is <strong>2/3 of the court-appraised value</strong> (ORC 2329.20). <strong>Second sale (residential, previously passed):</strong> <strong>No minimum bid</strong> — the property can sell for $1 if that&apos;s the only offer.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">3. Calculate Your Deposit (ORC 2329.211)</p>
              <div className="mt-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-800 rounded p-2">
                    <p className="text-slate-400">Up to $10,000</p>
                    <p className="text-white font-medium">$2,000 deposit</p>
                  </div>
                  <div className="bg-slate-800 rounded p-2">
                    <p className="text-slate-400">$10,001–$200,000</p>
                    <p className="text-white font-medium">5% of appraised value</p>
                  </div>
                  <div className="bg-slate-800 rounded p-2">
                    <p className="text-slate-400">Over $200,000</p>
                    <p className="text-white font-medium">$10,000 deposit</p>
                  </div>
                  <div className="bg-slate-800 rounded p-2">
                    <p className="text-slate-400">Commercial</p>
                    <p className="text-white font-medium">10% of bid or $10,000 (lesser)</p>
                  </div>
                </div>
                <p className="mt-2 text-amber-200"><strong>Note:</strong> Accepted payment: certified bank check, cashier&apos;s check, or money order up to $10,000. <strong>Credit union checks are NOT accepted.</strong></p>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">4. Complete Payment Within 30 Days</p>
              <p>After the court confirms the sale, the full balance is due within <strong>30 days</strong>. If you don&apos;t pay within 8 days of confirmation, <strong>10% interest begins accruing</strong> on the outstanding balance.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">5. Receive the Sheriff&apos;s Deed</p>
              <p>Once payment is confirmed, the Sheriff&apos;s Deed is executed and recorded with the Cuyahoga County Fiscal Office. The deed transfers title from the prior owner to the buyer.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">2025 Rule Change: Affidavit of Non-Delinquency</h2>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm mb-4">
            <strong>Effective April 9, 2025</strong> — ORC 5721.19(J) requires any successful bidder found to be delinquent on Ohio real estate taxes to submit a notarized Affidavit of Non-Delinquency before the sale can be confirmed.
          </div>
          <p className="text-slate-300 leading-relaxed mb-2">What this means for buyers:</p>
          <ul className="list-disc list-inside text-slate-300 space-y-1 mb-4">
            <li>If you own other Ohio real estate and carry any delinquent property taxes, you must resolve those arrears <strong>before bidding</strong></li>
            <li>You&apos;ll need to prepare and notarize the affidavit in advance of auction day</li>
            <li>Failure to submit a required affidavit can result in your bid being voided and forfeiture of your deposit</li>
          </ul>
          <p className="text-slate-300 leading-relaxed">This requirement was quietly effective April 9 and caught some investors unprepared. Make it part of your pre-auction checklist for every Cuyahoga sale.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Homeowner Rights: Redemption Window</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Ohio law gives the original property owner a meaningful post-sale protection. Under <strong>ORC 2329.33</strong>, the debtor may redeem the property — paying the full judgment amount plus all costs — <strong>at any time from the date of sale until the court confirms the sale</strong>. That confirmation period typically runs 30 to 90 days from the auction date.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm">
            <strong>Critical:</strong> Do not begin renovation work, arrange contractor access, or take possession before the court formally confirms the sale. The confirmation order — not the auction itself — is the legal event that finalizes your interest.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Common Mistakes Cuyahoga County Investors Make</h2>
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">1. Treating the auction win as a closing date</p>
              <p>Winning the bid is not the same as owning the property. The court must formally confirm the sale — typically 30 to 90 days after the auction. During that window, the original debtor can still redeem, and you cannot legally take possession or begin renovations. Wait for the confirmation order.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">2. Overlooking the Forfeited Lands Sale pipeline</p>
              <p>Most Cuyahoga investors focus exclusively on the weekly RealAuction sheriff sale and never track the annual Forfeited Lands Sale. These are separate inventories with different statutory bases (ORC 5723.11 vs. ORC Chapter 2329), different minimum bid structures, and different title complexity levels.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
              <p className="font-semibold text-white mb-1">3. Presenting the wrong deposit instrument</p>
              <p>Cuyahoga County&apos;s sheriff&apos;s office does <strong>not accept credit union checks</strong>. Buyers who arrive with a credit union check are rejected and lose their bid opportunity. Accepted instruments: certified bank check, cashier&apos;s check, money order up to $10,000, or a check drawn on the plaintiff&apos;s law firm account. Confirm with the Civil Division at (216) 443-5585.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-300 text-sm">
            <ul className="space-y-1">
              <li><strong className="text-white">Cuyahoga County Sheriff&apos;s Office:</strong> (216) 443-6000</li>
              <li><strong className="text-white">Civil Division (costs/deposits):</strong> (216) 443-5585</li>
              <li><strong className="text-white">Online auction platform:</strong>{' '}
                <a href="https://cuyahoga.sheriffsaleauction.ohio.gov" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">cuyahoga.sheriffsaleauction.ohio.gov</a>
              </li>
              <li><strong className="text-white">Court docket:</strong>{' '}
                <a href="https://cpdocket.cp.cuyahogacounty.gov" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">cpdocket.cp.cuyahogacounty.gov</a>
              </li>
              <li><strong className="text-white">Legal notices:</strong> Saturday, Daily Legal News</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Can I attend the Cuyahoga County sheriff sale in person?</h3>
              <p className="text-slate-300 leading-relaxed">No. All Cuyahoga County sheriff sales have been conducted exclusively online via the RealAuction platform since 2021. There is no in-person bidding option. You must register at cuyahoga.sheriffsaleauction.ohio.gov before the auction date.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What is the minimum bid at a Cuyahoga County sheriff sale?</h3>
              <p className="text-slate-300 leading-relaxed">For a first-time mortgage foreclosure sale, the minimum bid is two-thirds (2/3) of the court-appraised value under <strong>ORC 2329.20</strong>. If the property goes to a second sale because no qualifying bid was received at the first auction, there is no minimum bid for residential properties.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">How long does a foreclosure take in Cuyahoga County?</h3>
              <p className="text-slate-300 leading-relaxed">The average foreclosure in Ohio takes approximately <strong>217 days</strong> from initial filing to the sheriff sale. Because Ohio is a judicial foreclosure state, every case must proceed through the Cuyahoga County Common Pleas Court, which adds time compared to nonjudicial states.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What is the Affidavit of Non-Delinquency and do I need one?</h3>
              <p className="text-slate-300 leading-relaxed">Effective April 9, 2025 (<strong>ORC 5721.19(J)</strong>), buyers who have delinquent property taxes on any Ohio real estate must submit a notarized Affidavit of Non-Delinquency before a sheriff sale can be confirmed. If you&apos;re tax-current on all Ohio properties, you won&apos;t need to file one — but verify your status before bidding.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">What is the difference between the sheriff sale and the Forfeited Lands Sale?</h3>
              <p className="text-slate-300 leading-relaxed">The weekly sheriff sale handles court-ordered judicial foreclosures (ORC Chapter 2329). The annual Forfeited Lands Sale handles tax-delinquent properties that have gone through the state&apos;s forfeiture process under <strong>ORC 5723.11</strong>. The Forfeited Lands Sale often has no minimum bid and is held at the Huntington Convention Center.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Can the previous owner take the property back after I win the bid?</h3>
              <p className="text-slate-300 leading-relaxed">Yes, under <strong>ORC 2329.33</strong>, the original debtor may redeem the property at any time from the date of sale until the court confirms the sale — a window that typically runs 30 to 90 days from auction. Once the court enters the confirmation order, the redemption right is extinguished. Do not take possession or begin any work until after court confirmation.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <p className="text-slate-300 leading-relaxed mb-4">
            Forclos tracks Cuyahoga County sheriff sale listings, Forfeited Lands Sale schedules, and court docket activity in one interface. Cross-shop other major markets:{' '}
            <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">Cook County, IL</Link>,{' '}
            <Link href="/foreclosures/wayne-county-mi" className="text-emerald-400 hover:underline">Wayne County, MI</Link>,{' '}
            <Link href="/foreclosures/miami-dade-county-fl" className="text-emerald-400 hover:underline">Miami-Dade County, FL</Link>, and{' '}
            <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">Harris County, TX</Link>.
          </p>
          <Link
            href="/foreclosures/cuyahoga-county-oh"
            className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Browse Cuyahoga County foreclosure listings →
          </Link>
        </section>

        {/* Sources */}
        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Sources</h2>
          <ol className="space-y-1 text-xs text-slate-500">
            <li>1. <a href="https://codes.ohio.gov/ohio-revised-code/section-2329.20" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">ORC 2329.20 — Minimum Bid at Sheriff Sale</a></li>
            <li>2. <a href="https://codes.ohio.gov/ohio-revised-code/section-2329.33" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">ORC 2329.33 — Redemption by Debtor</a></li>
            <li>3. <a href="https://codes.ohio.gov/ohio-revised-code/section-2329.211" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">ORC 2329.211 — Deposit Requirements</a></li>
            <li>4. <a href="https://codes.ohio.gov/ohio-revised-code/section-5721.19" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">ORC 5721.19(J) — Affidavit of Non-Delinquency (eff. April 9, 2025)</a></li>
            <li>5. <a href="https://codes.ohio.gov/ohio-revised-code/section-5723.11" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">ORC 5723.11 — Forfeited Lands Sale</a></li>
            <li>6. <a href="https://cuyahoga.sheriffsaleauction.ohio.gov" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Cuyahoga County Sheriff Sale — RealAuction Platform</a></li>
            <li>7. <a href="https://cpdocket.cp.cuyahogacounty.gov" className="hover:text-slate-300 underline" target="_blank" rel="noopener noreferrer">Cuyahoga County Common Pleas Court Docket</a></li>
          </ol>
        </section>
      </main>
    </div>
  )
}
