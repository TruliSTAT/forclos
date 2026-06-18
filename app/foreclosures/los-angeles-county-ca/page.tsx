import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Los Angeles County Foreclosure Listings — CA Trustee Sales & REO Guide 2026',
  description: 'Comprehensive guide to Los Angeles County foreclosure listings covering California\u2019s nonjudicial foreclosure process, AB 2424, SB 1079, trustee sales, REO, and LA County Registrar-Recorder.',
  alternates: { canonical: 'https://forclos.com/foreclosures/los-angeles-county-ca' },
  openGraph: {
    title: 'Los Angeles County Foreclosure Listings — CA Trustee Sales & REO Guide 2026',
    description: 'Comprehensive guide to Los Angeles County foreclosure listings covering California\u2019s nonjudicial foreclosure process, AB 2424, SB 1079, trustee sales, REO, and LA County Registrar-Recorder.',
    url: 'https://forclos.com/foreclosures/los-angeles-county-ca',
    siteName: 'Forclos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Los Angeles County Foreclosure Listings — CA Trustee Sales & REO Guide 2026',
    description: 'Comprehensive guide to Los Angeles County foreclosure listings covering California\u2019s nonjudicial foreclosure process, AB 2424, SB 1079, trustee sales, REO, and LA County Registrar-Recorder.',
  },
}

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Los Angeles County Foreclosure Listings \u2014 Trustee Sales, REO & the Complete CA Buyer's Guide",
      "description": "Comprehensive guide to Los Angeles County foreclosure listings covering California\u2019s nonjudicial foreclosure process, AB 2424, SB 1079, trustee sales, REO, and the LA County Registrar-Recorder.",
      "keywords": "los angeles county foreclosure listings, la county trustee sale, california nonjudicial foreclosure, AB 2424, SB 1079, REO los angeles",
      "url": "https://forclos.com/foreclosures/los-angeles-county-ca",
      "datePublished": "2026-05-06",
      "dateModified": "2026-05-06",
      "author": {
        "@type": "Organization",
        "name": "Forclos"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Forclos",
        "url": "https://forclos.com"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does California have a redemption period after a foreclosure sale?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. California\u2019s nonjudicial foreclosure process has no post-sale redemption period. Once the Trustee's Deed Upon Sale is recorded, the former owner has no right to reclaim the property by paying the outstanding debt."
          }
        },
        {
          "@type": "Question",
          "name": "What is AB 2424 and how does it affect buyers in 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AB 2424, effective January 1, 2025, requires a trustee sale to be postponed a minimum of 45 days if the property is listed with an agent or under a purchase agreement. It also establishes a minimum sale price of 67% of fair market value when an eligible bidder is present at auction."
          }
        },
        {
          "@type": "Question",
          "name": "What is SB 1079 and can it help me buy a foreclosure as an owner-occupant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SB 1079 grants tenants, prospective owner-occupants, and qualifying nonprofits a 45-day post-auction right of first refusal to match the winning bid at a trustee sale. Submit a Notice of Intent to Bid before the sale; if a third-party wins at auction, you have 45 days to match their price."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a sheriff sale in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. California uses the nonjudicial foreclosure process with no court involvement. The auction is called a trustee's sale and is conducted by a private trustee, not the county sheriff. This differs from judicial foreclosure states like Illinois where sheriffs conduct sales."
          }
        },
        {
          "@type": "Question",
          "name": "What liens survive a California trustee sale?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Senior liens survive, most importantly delinquent property taxes (super-priority), certain IRS liens, and liens recorded before the foreclosed deed of trust. Junior liens such as second mortgages and junior judgment liens are typically extinguished by the trustee sale."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between the TTC auction and a trustee sale in LA County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A trustee's sale is mortgage foreclosure conducted by a private trustee on behalf of a lender. The TTC (Treasurer and Tax Collector) auction, run through GovEase, sells properties in tax default due to unpaid property taxes. These are entirely separate systems with different rules, properties, and registration requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How do I search for NODs and trustee sale notices in LA County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The official source is the LA County Registrar-Recorder/County Clerk at lavote.gov, where you can search recorded Notices of Default and Notices of Trustee's Sale. Forclos aggregates these public records into a searchable, alert-enabled interface for tracking multiple properties."
          }
        }
      ]
    }
  ]
}

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
          Los Angeles County Foreclosure Listings — Trustee Sales, REO & the Complete CA Buyer&apos;s Guide
        </h1>

        <p className="text-slate-400 text-sm mb-8">Updated May 7, 2026 · Forclos Editorial</p>

        <div className="mb-10">
          <p className="text-slate-300 leading-relaxed mb-4">If you're tracking <strong className="text-white">Los Angeles County foreclosure listings</strong>, you're navigating one of the most legally complex and financially high-stakes real estate markets in the United States. With a median foreclosure listing price around $975,000 and over 4,300 distressed properties spanning pre-foreclosure, trustee auction, and bank-owned stages, LA County offers real opportunity — but only to buyers who understand how California\u2019s nonjudicial foreclosure system actually works.</p>
          <p className="text-slate-300 leading-relaxed mb-4">This guide covers everything: the Civil Code §§ 2924–2924n legal framework, the 2025 changes under AB 2424, SB 1079 post-auction bidding rights, how to search NOD and NTS filings through the LA County Registrar-Recorder, how to bid at trustee sales, how to access tax-defaulted properties through the Treasurer and Tax Collector (TTC/GovEase), and the due diligence steps that separate profitable purchases from expensive mistakes.</p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The CA Nonjudicial Foreclosure Process: How It Actually Works</h2>
          <p className="text-slate-300 leading-relaxed mb-4">California is a <strong className="text-white">nonjudicial foreclosure state</strong>, meaning lenders can foreclose on property without filing a lawsuit or going to court — as long as a power-of-sale clause is included in the deed of trust, which is standard in virtually all California mortgage instruments. The process is governed by <strong className="text-white">California Civil Code §§ 2924 through 2924n</strong>.</p>
          <p className="text-slate-300 leading-relaxed mb-4">This matters enormously for buyers. Unlike judicial states (where you have months or years of court process to monitor), California\u2019s nonjudicial track moves faster — though AB 2424, effective January 2025, has added new timing rules that slow down the sprint.</p>
          <h3 className="text-lg font-semibold text-white mb-2 mt-6">The NOD/NTS Pipeline</h3>
          <p className="text-slate-300 leading-relaxed mb-4">Here's the standard sequence for a California nonjudicial foreclosure:</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">1. Delinquency → CFPB Hold:</strong> Federal regulations require lenders to wait a minimum of 120 days of delinquency before initiating foreclosure. During this period, loss mitigation options (loan modification, forbearance, short sale) must be explored.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">2. Notice of Default (NOD) Filing:</strong> The trustee records a Notice of Default with the <strong className="text-white">LA County Registrar-Recorder/County Clerk</strong> (lavote.gov). The NOD triggers a mandatory <strong className="text-white">90-day cure period</strong> during which the borrower can reinstate the loan by paying all arrears plus fees.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">3. Notice of Trustee's Sale (NTS):</strong> If the borrower doesn't cure within 90 days, the trustee records the NTS. The sale date must be set <strong className="text-white">at least 21 days out</strong>. The NTS is posted on the property, published in a local newspaper three times over three weeks, and mailed to the borrower at least 20 days before the sale.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">4. AB 2424 Extension (Effective January 1, 2025):</strong> This is new — and competitors aren't covering it. If the property is listed with a licensed real estate agent or is under a purchase agreement at the time the NTS is filed (or any time before the scheduled sale), the trustee sale must be <strong className="text-white">postponed a minimum of 45 days</strong>. Additionally, if an "eligible bidder" (defined by AB 2424) is present at the sale, the minimum sale price is <strong className="text-white">67% of fair market value</strong> — a significant floor that can affect investor strategy.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">5. Trustee Sale Auction:</strong> Held at the LA County courthouse steps (111 N. Hill St., downtown Los Angeles) or a designated location. Payment must be made via cashier's check or cash at the time of the winning bid. No financing contingencies. No inspection period. Properties sold strictly as-is.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">6. Post-Sale SB 1079 Window:</strong> After the sale, eligible bidders — including tenants, prospective owner-occupants, and qualifying nonprofits — have <strong className="text-white">45 days to match the winning bid</strong> under Senate Bill 1079 (effective since January 2021). This right of first refusal is one of the most underappreciated elements of the CA foreclosure landscape and a powerful tool for owner-occupant buyers who lose at auction.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">7. Trustee's Deed Upon Sale (TDUS):</strong> Once the sale is final (after the SB 1079 window closes), the trustee records the TDUS with the Recorder, completing the transfer. Critical note: <strong className="text-white">there is no post-sale redemption period in California for nonjudicial foreclosures.</strong> Once the deed records, the prior owner cannot reclaim the property.</p>
          <p className="text-slate-300 leading-relaxed mb-4">Total minimum timeline: approximately <strong className="text-white">4–7 months</strong> from delinquency to completed sale. Post-AB 2424, active listings situations can push this toward 9–12 months.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">AB 2424: What Changed in January 2025</h2>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">AB 2424</strong> is the most significant California foreclosure reform in years, and it's nearly invisible in most current ranking content — which is why Forclos covers it in depth.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Key changes:</strong></p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300"><strong className="text-white">45-day mandatory postponement</strong> if the property is listed for sale with an agent or under a purchase agreement when the NTS is posted or the sale is scheduled</li><li className="text-slate-300"><strong className="text-white">67% FMV minimum bid floor</strong> when an eligible bidder (defined under the statute) is present at the trustee sale — this directly limits deep-discount bidding opportunities in competitive situations</li><li className="text-slate-300"><strong className="text-white">Enhanced borrower notices</strong>: Expanded notification requirements to ensure homeowners are informed of their rights before the sale clock starts running</li><li className="text-slate-300"><strong className="text-white">Civil Code § 2924m reporting</strong>: Trustees must electronically report sale results to the California Attorney General within 15 days of the sale being deemed final</li></ul>
          <p className="text-slate-300 leading-relaxed mb-4">For investors: AB 2424 doesn't kill the opportunity — it does filter out scenarios where a trustee sale completes before an active listing or buyer could surface. It rewards due diligence and timely positioning.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">SB 1079: Post-Auction Right of First Refusal</h2>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Senate Bill 1079</strong> created a powerful exception to the "highest bidder wins" rule at California trustee sales. Effective January 2021 and continuing today:</p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300">Eligible bidders — primarily <strong className="text-white">tenants in the property</strong>, <strong className="text-white">prospective owner-occupants</strong> (buyers who intend to live there as a primary residence), and <strong className="text-white">qualified nonprofits</strong> — may submit a written notice of intent to bid <strong className="text-white">before the trustee sale</strong>.</li><li className="text-slate-300">If a third party (not the foreclosing lender) wins at auction, eligible bidders have <strong className="text-white">45 days after the sale</strong> to match the winning bid.</li><li className="text-slate-300">During that 45-day window, the trustee cannot record the deed to the winning third-party bidder.</li><li className="text-slate-300">The trustee's deed is recorded only after the window closes without a match, or after an eligible bidder matches and completes their purchase.</li></ul>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Strategic implication:</strong> Owner-occupant buyers who lose at the courthouse steps aren't necessarily out. Track SB 1079-eligible properties on Forclos and submit your intent notice before the sale. You can take 45 days to line up financing or do due diligence, then close at the auction price.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">LA County Government Resources for Foreclosure Research</h2>
          <h3 className="text-lg font-semibold text-white mb-2 mt-6">LA County Registrar-Recorder/County Clerk (lavote.gov)</h3>
          <p className="text-slate-300 leading-relaxed mb-4">The Registrar-Recorder is your primary source for official foreclosure document filings in LA County. NODs, NTSes, and Trustee's Deeds Upon Sale are all recorded here. You can search real estate records at <a href="https://www.lavote.gov/home/recorder/real-estate-records/viewing-real-estate-records/view-real-estate-records" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">lavote.gov/home/recorder/real-estate-records</a>.</p>
          <p className="text-slate-300 leading-relaxed mb-4">The Recorder also administers the <strong className="text-white">Homeowner Notification Program</strong>, which sends enrolled homeowners copies of documents recorded against their property — useful for early-stage distress monitoring if you're tracking properties.</p>
          <h3 className="text-lg font-semibold text-white mb-2 mt-6">LA County Treasurer and Tax Collector (TTC) / GovEase</h3>
          <p className="text-slate-300 leading-relaxed mb-4">The mortgage foreclosure trustee sale and the <strong className="text-white">tax-defaulted property auction</strong> are two completely separate systems — a distinction many buyers miss.</p>
          <p className="text-slate-300 leading-relaxed mb-4">The <strong className="text-white">TTC</strong> (ttc.lacounty.gov) manages the annual auction of properties that have fallen into tax default. This auction is run through <strong className="text-white">GovEase</strong> (govease.com/los-angeles) and operates independently from the nonjudicial trustee sale process. Different rules. Different properties. Different buyer pool.</p>
          <p className="text-slate-300 leading-relaxed mb-4">If you're specifically seeking tax-delinquent properties at the TTC auction, you must register separately through GovEase, post deposits, and comply with TTC-specific procedures.</p>
          <h3 className="text-lg font-semibold text-white mb-2 mt-6">LAHD Foreclosure Registry Program</h3>
          <p className="text-slate-300 leading-relaxed mb-4">The <strong className="text-white">Los Angeles City Housing Department (LAHD)</strong> operates a Foreclosure Registry Program (housing.lacity.gov). Within the City of Los Angeles (not the full county), lenders/trustees must register foreclosure properties with LAHD within 30 days of NOD issuance. REO owners must also register post-foreclosure.</p>
          <p className="text-slate-300 leading-relaxed mb-4">This registry is a compliance program — properties registered with LAHD must be maintained to avoid code violations accruing to the new owner. Check LAHD registration status as part of your due diligence on any City of LA purchase.</p>
          <h3 className="text-lg font-semibold text-white mb-2 mt-6">LA County Department of Consumer & Business Affairs (DCBA)</h3>
          <p className="text-slate-300 leading-relaxed mb-4">The DCBA (dcba.lacounty.gov) provides foreclosure education resources, mediation services, and homeowner protection programs. For buyers, it's a useful resource to understand tenant protection rules that may apply to occupied foreclosure properties.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">The LA County Foreclosure Market: Numbers That Matter</h2>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300"><strong className="text-white">Active MLS-side foreclosure listings:</strong> ~95–117 properties (Zillow/Redfin, 2026)</li><li className="text-slate-300"><strong className="text-white">Active NOD (pre-foreclosure) filings:</strong> 1,000+ (PropertyShark, 2026)</li><li className="text-slate-300"><strong className="text-white">Upcoming trustee sale auctions:</strong> ~225 auction-stage properties (PropertyShark, 2026)</li><li className="text-slate-300"><strong className="text-white">REO/bank-owned inventory:</strong> 1,000+ properties (PropertyShark, 2026)</li><li className="text-slate-300"><strong className="text-white">Total distress pool:</strong> 4,397+ across all stages (Foreclosure.com, 2026)</li><li className="text-slate-300"><strong className="text-white">Median foreclosure list price:</strong> ~$975,000 (Redfin, 2026)</li><li className="text-slate-300"><strong className="text-white">LA County foreclosure rate:</strong> 1 per 3,538 housing units — ranked No. 14 nationally (2025)</li><li className="text-slate-300"><strong className="text-white">Recent trend:</strong> California foreclosure starts rose 43% in January 2024 vs. the prior month, and are up approximately 41% off pandemic-era lows — but remain far below the 2009 peak</li></ul>
          <p className="text-slate-300 leading-relaxed mb-4">The takeaway: volume is rising from historic lows, but LA County is not a distressed market in absolute terms. Properties at trustee sale carry high lender credit bids given peak-era loan values. Deep discounts require patient positioning — pre-NOD outreach, SB 1079 positioning, and REO pipeline tracking.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Trustee Sale Auction Mechanics: What to Expect at the Courthouse Steps</h2>
          <p className="text-slate-300 leading-relaxed mb-4">If you're planning to bid at a trustee sale, here's the operational reality:</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Before the sale:</strong></p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300">Identify properties through NOD/NTS filings (use Forclos, PropertyShark, or the Registrar-Recorder)</li><li className="text-slate-300">Research the lien stack: senior property tax liens <strong className="text-white">survive</strong> the trustee sale and transfer to the buyer — check the TTC for any delinquent property taxes</li><li className="text-slate-300">Estimate the lender's credit bid (outstanding loan balance + fees) — this is the floor at auction. You'll need to exceed it to win</li><li className="text-slate-300">Get funds ready: you need <strong className="text-white">cashier's checks</strong> in the full purchase amount on the day of sale. No financing, no wires, no personal checks</li></ul>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Major trustee/auction firms operating in LA County:</strong></p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300">Cal-Western Reconveyance</li><li className="text-slate-300">NDEx West (National Default Exchange)</li><li className="text-slate-300">Quality Loan Service Corporation</li><li className="text-slate-300">First American Trustee Servicing Solutions</li><li className="text-slate-300">T.D. Service Company</li><li className="text-slate-300">Old Republic Default Management Services</li></ul>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">At the sale:</strong></p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300">Sales are typically held at 111 N. Hill St. or designated locations — confirm exact address with the trustee</li><li className="text-slate-300">The lender opens bidding with the credit bid; third-party buyers must exceed it</li><li className="text-slate-300">Winning bid requires immediate payment; no grace period</li><li className="text-slate-300">If you submit intent under SB 1079 and an eligible bidder right applies, the 45-day window begins</li></ul>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Post-sale:</strong></p>
          <ul className="space-y-2 mb-4 pl-4 list-disc"><li className="text-slate-300">Trustee files TDUS with Recorder once sale is deemed final</li><li className="text-slate-300">No redemption period — possession is immediate on deed recording (subject to occupant rights and applicable eviction law)</li></ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Due Diligence: The LA County Checklist</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Before bidding or closing on any LA County foreclosure, verify:</p>
          <ol className="list-decimal pl-6 space-y-2 mb-4"><li className="text-slate-300 mb-2"><strong className="text-white">Lien priority search:</strong> Pull all recorded documents at lavote.gov. Identify senior liens (property taxes, HOA assessments, mechanic's liens) that survive the trustee sale</li><li className="text-slate-300 mb-2"><strong className="text-white">TTC tax status:</strong> Check for delinquent property taxes at ttc.lacounty.gov — these pass to the buyer</li><li className="text-slate-300 mb-2"><strong className="text-white">LAHD Registry:</strong> Check if the property (in City of LA) is registered and has any outstanding violations at housing.lacity.gov</li><li className="text-slate-300 mb-2"><strong className="text-white">SB 1079 eligibility:</strong> Is the property occupied? Are there tenants with potential right-of-first-refusal status?</li><li className="text-slate-300 mb-2"><strong className="text-white">AB 2424 status:</strong> Is there an active listing or purchase agreement? Confirm the scheduled sale date reflects any mandatory postponement</li><li className="text-slate-300 mb-2"><strong className="text-white">Property condition:</strong> No inspection contingency at trustee sale — drive by, assess external condition, use any public data on prior permits, code violations</li><li className="text-slate-300 mb-2"><strong className="text-white">Title insurance:</strong> For trustee sales, title is typically insurable but confirm with your title company; REO purchases should include standard lender + owner title policies</li><li className="text-slate-300 mb-2"><strong className="text-white">HOA status:</strong> Outstanding HOA assessments may survive or need to be negotiated</li></ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Three Paths Into the LA County Distress Market</h2>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Path 1: Pre-Foreclosure (NOD Stage)</strong> Contact homeowners directly after the NOD is recorded. Negotiate short sales, subject-to arrangements, or direct purchases. Highest competition from wholesalers, but also the most flexibility for creative deal structures.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Path 2: Trustee Sale Auction</strong> Cash-only, as-is, high-stakes. Best for experienced investors with deep local market knowledge and cash reserves. AB 2424 and SB 1079 add complexity but also create niches (owner-occupant SB 1079 strategy; AB 2424 delay research).</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Path 3: REO/Bank-Owned</strong> Post-auction, bank-owned properties. Conventional financing available. Properties typically listed on MLS through bank-approved listing agents. More predictable process, less discount — but accessible to buyers who need mortgages. Explore sister-county markets for comparison: see our guides to <Link href="/foreclosures/riverside-county-ca" className="text-emerald-400 hover:underline">riverside county california foreclosure listings</Link> and <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">maricopa county arizona foreclosure listings</Link>.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How Forclos Tracks LA County Foreclosures</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Forclos aggregates NOD filings, NTS auctions, REO inventory, and TTC tax-auction properties in one searchable interface. Set alerts for specific zip codes, cities (Compton, Inglewood, Lancaster, Palmdale, Long Beach), or lien thresholds. Monitor the SB 1079 post-auction window on properties you missed at the courthouse steps.</p>
          <p className="text-slate-300 leading-relaxed mb-4">For investors cross-shopping regional markets, Forclos covers the full distressed landscape across major counties — including <Link href="/foreclosures/cook-county-il" className="text-emerald-400 hover:underline">cook county illinois foreclosure listings</Link>, <Link href="/foreclosures/harris-county-tx" className="text-emerald-400 hover:underline">harris county texas foreclosure auction</Link>, <Link href="/foreclosures/maricopa-county-az" className="text-emerald-400 hover:underline">maricopa county arizona foreclosure listings</Link>, and <Link href="/foreclosures/wayne-county-mi" className="text-emerald-400 hover:underline">wayne county michigan foreclosure auction</Link>.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Ready to search current LA County foreclosure listings?</strong> <a href="#" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Browse available properties on Forclos →</a></p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: Does California have a redemption period after a foreclosure sale?</strong> A: No. California\u2019s nonjudicial foreclosure process has <strong className="text-white">no post-sale redemption period</strong>. Once the Trustee's Deed Upon Sale is recorded, the former owner has no right to reclaim the property by paying the outstanding debt. This is a fundamental difference from states like Michigan, where statutory redemption periods can run 6 months or more.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: What is AB 2424 and how does it affect buyers in 2025?</strong> A: AB 2424, effective January 1, 2025, requires that a trustee sale be postponed a minimum of 45 days if the property is listed for sale with a real estate agent or under a purchase agreement. It also establishes a minimum sale price of 67% of fair market value when an "eligible bidder" is present at the auction. This law protects homeowners attempting to sell before foreclosure completes, but it also changes the timing calculus for investors tracking NTS filings.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: What is SB 1079 and can it help me buy a foreclosure as an owner-occupant?</strong> A: Yes. SB 1079 grants tenants, prospective owner-occupants, and qualifying nonprofits a 45-day post-auction right of first refusal to match the winning bid at a trustee sale. If you intend to live in the property as your primary residence, submit a written Notice of Intent to Bid to the trustee before the sale. If a third-party investor wins at auction, you have 45 days to match their bid — and the trustee cannot record the deed to the investor until your window closes.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: Is there a "sheriff sale" in California like in other states?</strong> A: No. California uses the <strong className="text-white">nonjudicial foreclosure process</strong>, which means there is no court involvement and no sheriff sale. You may see "sheriff sale" used loosely to describe foreclosure auctions in California, but the correct term is trustee's sale — and it's conducted by a private trustee, not the county sheriff. This distinguishes California from judicial foreclosure states like Illinois, where the sheriff does conduct the sale.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: What liens survive a California trustee sale?</strong> A: <strong className="text-white">Senior liens survive</strong> — most importantly, delinquent property taxes (which always hold super-priority), certain IRS liens (with redemption rights), and any liens recorded before the deed of trust being foreclosed. Junior liens (second mortgages, junior judgment liens) are typically wiped out by the trustee sale. Always conduct a full lien search through lavote.gov before bidding.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: What is the difference between the TTC auction and a trustee sale in LA County?</strong> A: These are entirely separate systems. A <strong className="text-white">trustee's sale</strong> is conducted by a private trustee on behalf of a lender foreclosing on a deed of trust — it's mortgage foreclosure. The <strong className="text-white">TTC (Treasurer and Tax Collector) auction</strong> is conducted by the county to sell properties that have gone into tax default (unpaid property taxes), using the GovEase platform. Different rules, different bidder requirements, different properties. A property can theoretically appear in both pipelines simultaneously if it has both delinquent taxes and a defaulted mortgage.</p>
          <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Q: How do I search for NODs and trustee sale notices in LA County?</strong> A: The official source is the <strong className="text-white">LA County Registrar-Recorder/County Clerk</strong> at lavote.gov. You can search recorded real estate documents including Notices of Default and Notices of Trustee's Sale. For aggregated and alert-enabled research, Forclos pulls these same public records into a searchable interface so you can track multiple properties and receive notifications when status changes.</p>
        </section>
      </main>
    </div>
  )
}
