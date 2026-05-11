import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Pima County Foreclosure Listings — Tucson Trustee Sales, Auction Calendar & Buyer Guide',
  description: 'Pima County foreclosure listings: how Tucson trustee sales work, $10K-or-10% deposit rules, 110 W Congress auction location, and free NTS search resources.',
  alternates: { canonical: 'https://forclos.com/foreclosures/pima-county-az' },
  openGraph: {
    title: 'Pima County Foreclosure Listings & Tucson Auction Guide',
    description: 'Active Pima County foreclosure listings, trustee sale mechanics, the Tiffany & Bosco pending sales resource, and what to know before bidding at 110 W Congress.',
    url: 'https://forclos.com/foreclosures/pima-county-az',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pima County Foreclosure Listings & Tucson Auction Guide',
    description: 'Active Pima County foreclosure listings, trustee sale mechanics, the Tiffany & Bosco pending sales resource, and what to know before bidding at 110 W Congress.',
  },
}

const schemaOrg = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pima County Foreclosure Listings — Tucson Trustee Sales, Auction Calendar & Buyer Guide',
    description:
      'Complete guide to Pima County foreclosure listings: how Arizona\'s non-judicial trustee sale process works, the auction location at 110 W Congress St, deposit requirements, the Tiffany & Bosco pending sales list, Pima County Recorder NTS search, and Tucson\'s unique market factors.',
    url: 'https://forclos.com/foreclosures/pima-county-az',
    datePublished: '2026-05-11',
    dateModified: '2026-05-11',
    author: { '@type': 'Organization', name: 'Forclos' },
    publisher: {
      '@type': 'Organization',
      name: 'Forclos',
      logo: { '@type': 'ImageObject', url: 'https://forclos.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://forclos.com/foreclosures/pima-county-az' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where are Pima County trustee sale auctions held?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trustee sales take place at the Pima County Superior Court, 110 West Congress Street, Tucson, AZ 85701. Use the east entrance. Auctions typically begin at 10:00 AM; confirm the specific time for each property in its NTS filing. Some Pima County sales are conducted online — check the individual NTS.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deposit do I need to bid at a Pima County trustee sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You need $10,000 or 10% of your intended maximum bid — whichever is greater — in certified funds immediately when you win. The full balance is due by 5:00 PM the next business day. Registration is required; bring government-issued ID and proof of funds.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the Arizona foreclosure process take in Pima County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The auction date must be set no sooner than 91 days after the Notice of Trustee\'s Sale is recorded (Ariz. Rev. Stat. § 33-808(C)(1)). In practice, the full timeline from initial default to auction is typically four to six months including lender processing time.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I find upcoming trustee sales in Pima County for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Search the Pima County Recorder\'s public database at recorder.pima.gov/PublicSearch.aspx for Notice of Trustee\'s Sale documents. For a consolidated investor-friendly list, Tiffany & Bosco (fs.tblaw.com/Sales/PendingSales.aspx) maintains a running list of scheduled Pima County trustee sales.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a right of redemption after buying at an Arizona trustee sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Arizona non-judicial trustee sales carry no statutory right of redemption. Title transfers at the auction and the former owner has no legal right to reclaim the property after the trustee\'s deed is delivered.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is Pima County different from Maricopa County for foreclosure investors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Both counties use the same Arizona non-judicial process. Pima is smaller (roughly one-fourth of Maricopa\'s population), prices are lower (~$344K median vs $513K+), there are fewer auctions per week, and there\'s less institutional buyer competition. Unique demand drivers include the University of Arizona and Davis-Monthan AFB.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Pima County Trustee Sale Auction',
    description:
      'Recurring non-judicial trustee sale auctions for Pima County, Arizona foreclosure properties. Held at Pima County Superior Court, east entrance, typically at 10:00 AM on weekdays. Deposit: $10,000 or 10% of bid (whichever greater) in certified funds. Balance due by 5:00 PM next business day.',
    location: {
      '@type': 'Place',
      name: 'Pima County Superior Court',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '110 West Congress Street',
        addressLocality: 'Tucson',
        addressRegion: 'AZ',
        postalCode: '85701',
        addressCountry: 'US',
      },
    },
    organizer: {
      '@type': 'GovernmentOrganization',
      name: 'Pima County Superior Court',
      url: 'https://www.sc.pima.gov/',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://forclos.com' },
      { '@type': 'ListItem', position: 2, name: 'Foreclosures', item: 'https://forclos.com/foreclosures' },
      { '@type': 'ListItem', position: 3, name: 'Arizona', item: 'https://forclos.com/foreclosures/arizona' },
      { '@type': 'ListItem', position: 4, name: 'Pima County', item: 'https://forclos.com/foreclosures/pima-county-az' },
    ],
  },
]

export default function PimaCountyAZPage() {
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
          <Link href="/foreclosures/arizona" className="hover:text-slate-300 transition-colors">Arizona foreclosures</Link>
          <span>/</span>
          <span className="text-slate-400">Pima County</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Pima County Foreclosure Listings — Tucson Trustee Sales, Auction Calendar &amp; Buyer Guide
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 11, 2026 · Forclos Editorial</p>

        <p className="text-slate-300 leading-relaxed mb-6">
          Pima County foreclosure listings draw a very different investor profile than what you find in Phoenix.
          The market is smaller, the price points are lower, and the competition at the Pima County Superior Court
          auction steps is thinner than what you&apos;d face at the Maricopa County Courthouse. That&apos;s not an
          accident — it&apos;s a structural feature of Tucson&apos;s market, and for prepared investors who understand
          the mechanics, it&apos;s an advantage.
        </p>
        <p className="text-slate-300 leading-relaxed mb-10">
          The legal process is identical to what drives the{' '}
          <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">
            Maricopa County foreclosure market
          </Link>
          : Arizona&apos;s non-judicial trustee sale system under{' '}
          <strong className="text-white">Ariz. Rev. Stat. § 33-801 through § 33-821</strong>. What&apos;s different
          is the market context — a University of Arizona rental demand floor, a Davis-Monthan Air Force Base
          housing cycle, lower median prices (~$344,658 vs $513,000+ in Maricopa), and a set of local practitioner
          resources that most online guides have never mentioned. This page covers all of it.
        </p>

        {/* ── Section 1: How It Works ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Pima County Foreclosures Work</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Arizona is a <strong className="text-white">non-judicial foreclosure state</strong>. That means lenders
            can foreclose on defaulted properties through a trustee sale process without filing a lawsuit or involving
            the court system — provided the borrower signed a deed of trust rather than a traditional mortgage
            (which is standard in Arizona).
          </p>
          <ol className="space-y-4 pl-4 mb-6">
            {[
              {
                n: 1,
                title: 'Default',
                desc: "The borrower misses payments. After internal loss mitigation, the lender instructs the trustee (typically a title company or real estate attorney) to initiate foreclosure proceedings.",
              },
              {
                n: 2,
                title: 'Notice of Trustee\'s Sale (NTS) Recorded',
                desc: "The trustee records a Notice of Trustee's Sale with the Pima County Recorder's Office. The NTS becomes part of the public record and is the official starting point of the 91-day clock. Notices are also published in the Daily Territorial, Tucson's required legal notices publication.",
              },
              {
                n: 3,
                title: 'Mandatory 91-Day Waiting Period',
                desc: "Under Ariz. Rev. Stat. § 33-808(C)(1), the sale date cannot be set sooner than 91 days after the NTS recording date. The NTS must also be posted on the property for at least 20 days and published in the Daily Territorial once per week for four consecutive weeks — with the final publication no less than 10 days before the scheduled sale date.",
              },
              {
                n: 4,
                title: 'Trustee Sale (Auction)',
                desc: "If the default is not resolved, the property goes to auction at the Pima County Superior Court. The highest bidder above the lender's opening bid takes the property. If no one bids above the lender's amount, the property reverts to the lender as real estate owned (REO).",
              },
              {
                n: 5,
                title: 'Post-Sale',
                desc: "The winning bidder pays in full and receives a trustee's deed recorded electronically with the Pima County Recorder. There is no right of redemption under Arizona non-judicial foreclosure law — title transfers at the auction.",
              },
            ].map(item => (
              <li key={item.n} className="text-slate-300">
                <strong className="text-white">{item.n}. {item.title}</strong> — {item.desc}
              </li>
            ))}
          </ol>
          <p className="text-slate-400 text-sm">
            From first missed payment to auction, the realistic total timeline in Pima County is typically{' '}
            <strong className="text-slate-300">four to six months</strong> when you factor in lender processing time
            before the NTS is even filed, plus the 91-day statutory minimum.
          </p>
        </section>

        {/* ── Section 2: Auction Location ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Where Trustee Sales Are Held in Pima County</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            All Pima County trustee sales are conducted at:
          </p>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <p className="text-white font-semibold">Pima County Superior Court</p>
            <p className="text-slate-300">110 West Congress Street, Tucson, AZ 85701</p>
            <p className="text-slate-300">East entrance of the Superior Court Building</p>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Auctions typically begin at <strong className="text-white">10:00 AM</strong> on weekdays. The specific time
            for each property is specified in its NTS filing. Confirm the sale time and date by reviewing the recorded
            NTS directly — some sales in Pima County are also conducted{' '}
            <strong className="text-white">online</strong>, per Default Research data verified February 2026, so check
            the individual NTS to determine the format.
          </p>
        </section>

        {/* ── Section 3: Deposit Rules ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Deposit Requirements and Bidding Mechanics</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Before you arrive at 110 W Congress, understand exactly what you need to bring:
          </p>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-6">
            <p className="text-amber-200 text-sm">
              <strong>Deposit Rule:</strong> You need $10,000 <strong>or</strong> 10% of your intended maximum
              bid — <strong>whichever amount is greater</strong> — available immediately when you win. This is
              different from Maricopa County&apos;s flat $10,000 minimum and matters significantly for higher-value
              properties.
            </p>
          </div>

          <ul className="space-y-2 mb-6 pl-4">
            <li className="text-slate-300">
              <strong className="text-white">$500K bid?</strong> Required deposit is $50,000 (10%), not $10,000.
            </li>
            <li className="text-slate-300">
              <strong className="text-white">$80K bid?</strong> Required deposit is $10,000 (the floor applies).
            </li>
            <li className="text-slate-300">
              <strong className="text-white">Payment form:</strong> Certified funds — cashier&apos;s check or equivalent. Personal checks are not accepted.
            </li>
            <li className="text-slate-300">
              <strong className="text-white">Balance due:</strong> The full remaining purchase price is due by{' '}
              <strong className="text-white">5:00 PM on the next business day</strong> after the sale.
            </li>
            <li className="text-slate-300">
              <strong className="text-white">Registration:</strong> Required before bidding. Bring a government-issued
              photo ID and proof of funds. Some trustees require pre-registration before the day of sale.
            </li>
            <li className="text-slate-300">
              <strong className="text-white">Format:</strong> Competitive outcry bidding. All properties sold as-is.
              No title warranties, no inspection contingencies, no cooling-off period.
            </li>
          </ul>
        </section>

        {/* ── Section 4: Where to Find Listings ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Where to Find Pima County Foreclosure Listings</h2>

          <h3 className="text-lg font-semibold text-white mb-2">1. Pima County Recorder&apos;s Office — The Free, Authoritative Source</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Every NTS filed in Pima County becomes a public record immediately upon recording. Search the database at{' '}
            <a href="https://recorder.pima.gov/PublicSearch.aspx" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">
              recorder.pima.gov/PublicSearch.aspx
            </a>{' '}
            (Recorder: Gabriella Cázares-Kelly; 240 N Stone Ave, Fl 1, Tucson, AZ 85701; (520) 724-4350; Mon–Fri 8am–5pm).
            Search by document type to find all active Notice of Trustee&apos;s Sale filings. This is the same data
            that third-party aggregators purchase and resell.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">2. Tiffany &amp; Bosco Pending Sales List — The Practitioner Resource</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The Tucson real estate law firm Tiffany &amp; Bosco maintains a live, continuously updated list of scheduled
            Pima County trustee sales at{' '}
            <a href="https://fs.tblaw.com/Sales/PendingSales.aspx" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">
              fs.tblaw.com/Sales/PendingSales.aspx
            </a>
            . This is the resource that experienced Pima County investors use for operational planning — it consolidates
            scheduled sale dates, property addresses, and trustor information in a clean, searchable format. If
            you&apos;re actively buying at Pima County trustee sales, bookmark this page.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">3. Forclos — Aggregated and Searchable</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Forclos aggregates Pima County NTS filings, REO listings, and auction calendar data into a single
            daily-updated interface. For investors who want to filter by neighborhood, price range, or property
            type without building their own pipeline from raw recorder data, Forclos is the faster starting point.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">4. MLS / Real Estate Portals</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Redfin, Zillow, and RealtyTrac surface bank-owned (REO) properties once they&apos;ve been listed by an
            agent after the auction cycle completes. RealtyTrac shows a median home price of $344,658 across
            Pima County. These portals are useful for traditional buyers but miss the earliest-stage inventory
            that shows up in NTS filings.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">5. Broad Aggregators</h3>
          <p className="text-slate-300 leading-relaxed">
            foreclosure.com indexes approximately 7,000+ listings across the Tucson/Pima area when you include
            pre-foreclosures, short sales, and all distressed stages. foreclosurelistings.com indexes approximately
            384 foreclosed-only properties in Tucson. These can be useful for market sizing but contain significant
            overlap and classification variance.
          </p>
        </section>

        {/* ── Section 5: Pima vs Maricopa ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Why Pima County Is Different From Maricopa</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Arizona has one foreclosure law. But the economics of Pima County make it a meaningfully different
            market from{' '}
            <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">
              Maricopa County
            </Link>
            :
          </p>
          <div className="space-y-5">
            {[
              {
                title: 'Lower Price Points',
                body: 'The Pima County median home price of approximately $344,658 is substantially below Maricopa\'s ~$513,000+ median. Lower prices mean smaller deposit checks, lower capital requirements, and more accessible entry points for individual investors competing against institutional buyers.',
              },
              {
                title: 'Smaller Volume, Less Competition',
                body: "Pima County's population (~1.05 million) is roughly one-fourth of Maricopa's (~4.6 million). Proportionally, Pima sees far fewer trustee sales on any given weekday. Fewer properties means fewer competing bidders — particularly fewer institutional investors who prioritize the higher-volume Phoenix market.",
              },
              {
                title: 'University of Arizona Rental Demand Floor',
                body: "The University of Arizona in central Tucson enrolls more than 45,000 students and employs tens of thousands in administration, healthcare (Banner – University Medical Center), and research. Properties in the 85701, 85705, 85716, and 85719 zip codes carry persistent rental demand that provides a meaningful floor under values even in distressed market conditions.",
              },
              {
                title: 'Davis-Monthan Air Force Base Housing Cycle',
                body: 'DMAFB sits in southeast Tucson (355th Wing + Air Force Reserve Command units) and generates a steady cycle of PCS orders — servicemembers rotating in and out create both rental demand spikes and occasional housing distress. Properties in southeast Tucson zip codes (85706, 85730, 85747) carry this dynamic.',
              },
              {
                title: 'Snowbird Timing',
                body: 'Tucson attracts a large seasonal population. Properties owned by seasonal residents tend to come to market in waves — particularly in Q1–Q2 when spring departures prompt decisions about selling distressed assets. The REO pipeline in Pima County has a pronounced seasonal pattern that attentive investors can use for timing.',
              },
            ].map(item => (
              <div key={item.title} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.title}</p>
                <p className="text-slate-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 6: Due Diligence ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Due Diligence Before You Bid</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Buying at a Pima County trustee sale is an as-is, no-warranty transaction. These steps are
            non-negotiable:
          </p>
          <ul className="space-y-4 pl-4 mb-6">
            {[
              {
                title: 'Title Search',
                body: 'Order a preliminary title report before the auction. Identify all recorded liens (second mortgages, HELOCs, mechanic\'s liens), delinquent property taxes, HOA arrears, and any federal or state tax liens. A senior lender\'s foreclosure extinguishes junior liens — but only in the correct priority order. Junior lienholders you didn\'t identify become your problem.',
              },
              {
                title: 'Property Condition',
                body: "You cannot enter the property before buying it at auction. Do a thorough exterior assessment. Drive by at different times of day. Note deferred maintenance, structural concerns visible from the street, and any evidence of vandalism or abandonment. Build a conservative rehab estimate into your maximum bid.",
              },
              {
                title: 'Property Taxes',
                body: "Delinquent Pima County property taxes are a senior lien that transfers to you regardless of the foreclosing lender's position. Search Pima County's public records for any unpaid tax balance before bidding.",
              },
              {
                title: 'HOA Status',
                body: 'Arizona caps HOA lien priority at six months of unpaid assessments, but ongoing dues are immediately your responsibility as the new owner. Contact the HOA before bidding.',
              },
              {
                title: 'IRS / Federal Tax Liens',
                body: 'Federal tax liens carry a 120-day right of redemption post-sale under federal law. If the property has an IRS lien, the federal government can reclaim the property within that window. A thorough title search will flag these.',
              },
              {
                title: 'Occupancy',
                body: 'The property may be occupied — by the former owner, a tenant, or someone with no legal right to be there. Arizona landlord-tenant law governs the eviction process even after a valid foreclosure sale. Budget time and legal costs if you expect contested possession.',
              },
            ].map(item => (
              <li key={item.title} className="text-slate-300">
                <strong className="text-white">{item.title}:</strong>{' '}
                {item.body}
              </li>
            ))}
          </ul>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-amber-200 text-sm">
            <strong>YMYL advisory:</strong> Foreclosure investing involves complex legal and financial decisions
            specific to each property and transaction. The legal process, deposit requirements, and timeline
            described here are based on Arizona statutes and verified industry sources current as of 2026.
            Laws change; individual property situations vary.{' '}
            <strong>Consult a licensed Arizona real estate attorney before bidding at any Pima County trustee
            sale.</strong> Nothing in this guide constitutes legal or financial advice.
          </div>
        </section>

        {/* ── Section 7: FAQ ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Where are Pima County trustee sale auctions held?',
                a: 'Trustee sales take place at the Pima County Superior Court, 110 West Congress Street, Tucson, AZ 85701. Use the east entrance. Auctions typically begin at 10:00 AM; confirm the specific time for each property in its NTS filing. Some Pima County sales are conducted online — check the individual NTS.',
              },
              {
                q: 'How long does the Arizona foreclosure process take in Pima County?',
                a: 'Under Ariz. Rev. Stat. § 33-808(C)(1), the auction date must be set no sooner than 91 days after the Notice of Trustee\'s Sale is recorded. In practice, the full timeline from initial default to auction is typically four to six months once you include the lender\'s internal processing time.',
              },
              {
                q: 'What deposit do I need to bid at a Pima County trustee sale?',
                a: 'You need $10,000 or 10% of your intended maximum bid, whichever is greater, in certified funds immediately when you win. The full balance is due by 5:00 PM the next business day. Bring a government-issued photo ID and proof of funds.',
              },
              {
                q: 'How do I find upcoming trustee sales in Pima County for free?',
                a: 'Search the Pima County Recorder\'s public database at recorder.pima.gov/PublicSearch.aspx for recorded Notice of Trustee\'s Sale documents. For a more investor-friendly consolidated list, Tiffany & Bosco (fs.tblaw.com/Sales/PendingSales.aspx) maintains a running list of scheduled Pima County trustee sales.',
              },
              {
                q: 'Is there a right of redemption after buying at an Arizona trustee sale?',
                a: "No. Arizona non-judicial trustee sales carry no statutory right of redemption. Title transfers at the auction. The former owner has no legal right to reclaim the property after the trustee's deed is delivered to the winning bidder.",
              },
              {
                q: 'How is Pima County different from Maricopa County for foreclosure investors?',
                a: 'Both counties use the same Arizona non-judicial legal process. The differences are market economics: Pima is smaller (~1/4 of Maricopa\'s population), prices are lower (~$344K median vs $513K+), there are fewer auctions per week, there\'s less institutional buyer competition, and the market has distinct demand drivers in the University of Arizona and Davis-Monthan AFB that don\'t exist in Phoenix.',
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4">
                <p className="text-white font-semibold mb-1">{item.q}</p>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Resources Table ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Key Resources</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">Resource</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">URL / Contact</th>
                  <th className="text-left px-4 py-3 text-slate-200 font-semibold">What It Covers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {[
                  {
                    name: 'Pima County Recorder (NTS Search)',
                    url: 'recorder.pima.gov/PublicSearch.aspx',
                    href: 'https://recorder.pima.gov/PublicSearch.aspx',
                    desc: 'All recorded NTS filings; 240 N Stone Ave, Tucson; (520) 724-4350',
                  },
                  {
                    name: 'Tiffany & Bosco Pending Sales',
                    url: 'fs.tblaw.com/Sales/PendingSales.aspx',
                    href: 'https://fs.tblaw.com/Sales/PendingSales.aspx',
                    desc: 'Scheduled Pima County trustee sales consolidated list',
                  },
                  {
                    name: 'Auction Venue',
                    url: '110 W Congress St, Tucson, AZ 85701',
                    href: 'https://www.sc.pima.gov/',
                    desc: 'Pima County Superior Court, east entrance',
                  },
                  {
                    name: 'Daily Territorial',
                    url: 'dailyterritorial.com',
                    href: 'https://www.dailyterritorial.com/',
                    desc: 'Required NTS publication notice venue for Pima County',
                  },
                  {
                    name: 'Forclos (Pima County)',
                    url: 'forclos.com/foreclosures/pima-county-az',
                    href: 'https://forclos.com/foreclosures/pima-county-az',
                    desc: 'Aggregated NTS filings, REO listings, auction calendar',
                  },
                ].map(row => (
                  <tr key={row.name} className="bg-slate-900/50">
                    <td className="px-4 py-3 text-slate-200 font-medium">{row.name}</td>
                    <td className="px-4 py-3">
                      <a href={row.href} className="text-emerald-400 hover:underline text-xs" target="_blank" rel="noopener noreferrer">
                        {row.url}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-slate-400 text-xs">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Browse Pima County Foreclosure Listings on Forclos</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Pima County&apos;s foreclosure market rewards the same preparation as any non-judicial auction state,
            with one added advantage: you&apos;re competing against fewer buyers for each property. The 91-day NTS
            window gives informed investors time to research the title, drive the property, and arrive at
            110 W Congress with a clear bid ceiling and certified funds in hand.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Forclos brings together active Pima County NTS filings, upcoming auction dates, and bank-owned
            listings in a single daily-updated interface — so you&apos;re working from current data, not last
            week&apos;s aggregator snapshot.
          </p>
          <p className="text-slate-300 leading-relaxed">
            For related Arizona market coverage, see also our{' '}
            <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">
              Maricopa County foreclosure listings
            </Link>{' '}
            guide. For major markets outside Arizona, see{' '}
            <Link href="/foreclosures/los-angeles-county-ca" className="text-emerald-400 hover:underline">
              Los Angeles County foreclosure listings
            </Link>{' '}
            and{' '}
            <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">
              Harris County, TX foreclosure auction
            </Link>
            .
          </p>
        </section>
      </main>
    </div>
  )
}
