import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — ITC Transfer Guides & Market Analysis | Aethervibe",
  description:
    "Expert guides on Investment Tax Credit transfers, IRA Section 6418, mid-market pricing, and FEOC compliance for clean energy developers.",
  alternates: {
    canonical: "https://www.aethervibe.com/insights",
  },
};

const articles = [
  {
    slug: "sub-5m-48e-tax-credit-gap",
    title: "The Sub-$5M Gap: Where Small Clean-Energy Tax Credits Go in 2026",
    description:
      "As transfer platforms move upmarket toward §45X and nine-figure deals, a structural gap has opened for sub-$5M §48E solar and storage credits. The supply is growing through third-party ownership — and a new pool of mid-market buyers is forming.",
    date: "June 2026",
    readTime: "7 min read",
    tag: "Market Analysis",
  },
  {
    slug: "itc-insurance-guide",
    title: "Tax Credit Insurance in a §48E ITC Transfer: What It Covers, What It Costs, and What Underwriters Need",
    description:
      "All-in cost is approximately 8% of coverage. Nine covered tax positions. FEOC is excluded. The complete market-standard framework for tax credit insurance in a §6418 transfer — what buyers need, what sellers must prepare, and how the premium breaks down.",
    date: "May 2026",
    readTime: "8 min read",
    tag: "Transaction Guide",
  },
  {
    slug: "tcta-legal-guide",
    title: "The TCTA Explained: What Legal Counsel Actually Does in a §6418 ITC Transfer — and What It Costs",
    description:
      "Sell-side legal fees run $50–75K. Buyer counsel reimbursement adds $75–100K. Sign-and-close takes 30–60 days. A plain-English breakdown of the Tax Credit Transfer Agreement for developers and corporate buyers.",
    date: "May 2026",
    readTime: "8 min read",
    tag: "Transaction Guide",
  },
  {
    slug: "bess-48e-itc-buyer-guide",
    title: "The §48E Battery Storage ITC Buyer Guide: Why BESS Credits Are the Safest Bet After OBBBA",
    description:
      "Solar and wind ITCs are being phased out under OBBBA. Standalone §48E battery storage credits are fully protected through 2033. Here's what corporate buyers need to know about the new ITC landscape.",
    date: "May 2026",
    readTime: "10 min read",
    tag: "Buyer Guide",
  },
  {
    slug: "reduce-corporate-tax-clean-energy-credits",
    title: "How to Reduce Your Company's Federal Tax Bill with Clean Energy Credits",
    description:
      "Most CFOs don't know their company can purchase clean energy tax credits directly from developers — paying roughly 90 cents to eliminate a dollar of federal taxes. No solar panels required.",
    date: "May 2026",
    readTime: "6 min read",
    tag: "Corporate Finance",
  },
  {
    slug: "itc-transfers-vs-tax-equity",
    title: "ITC Transfers vs. Tax Equity: Which Is Right for Your Company?",
    description:
      "Tax equity requires ownership, 3–6 months, and a dedicated clean energy team. ITC transfers require only a wire transfer. For most corporations, the choice is becoming clear.",
    date: "May 2026",
    readTime: "7 min read",
    tag: "Buyer Guide",
  },
  {
    slug: "corporate-buyer-guide-itc-transfers",
    title: "The Corporate Buyer's Guide to ITC Transfers: Reduce Your Tax Liability Through Clean Energy Credits",
    description:
      "How C-Corps and tax buyers purchase Investment Tax Credits under IRA Section 6418 — pricing at 88–95¢ on the dollar, due diligence checklist, recapture risk, and where to find deals under $20M.",
    date: "May 2026",
    readTime: "8 min read",
    tag: "Buyer Guide",
  },
  {
    slug: "why-mid-market-itc-is-overlooked",
    title: "Why the Sub-$20M ITC Transfer Market Is the Most Overlooked Opportunity in Clean Energy Right Now",
    description:
      "The $42B ITC transfer market has a blind spot: deals under $20M. With Evergrow gone and Crux focused on large institutions, the mid-market is wide open — and the opportunity is real.",
    date: "May 2026",
    readTime: "7 min read",
    tag: "Market Analysis",
  },
  {
    slug: "mid-market-itc-transfer-guide",
    title: "The Mid-Market ITC Transfer Guide: Selling $1M–$20M in Clean Energy Credits",
    description:
      "A complete playbook for clean energy developers — from ITC pricing dynamics to closing in 30–60 days under IRA Section 6418.",
    date: "May 2026",
    readTime: "10 min read",
    tag: "ITC Transfer Guide",
  },
];

export default function InsightsIndex() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#0F1F3D] to-[#1a3a6b] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-emerald-400 hover:text-emerald-300 text-sm mb-6 inline-block">
            ← Back to Aethervibe
          </a>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Insights</h1>
          <p className="text-gray-300 text-lg">
            Expert guides on ITC transfers, market pricing, and clean energy tax policy — written for developers and corporate buyers in the mid-market segment.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-400 hover:shadow-md transition-all group"
            >
              <div className="inline-block bg-emerald-500/10 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {article.tag}
              </div>
              <h2 className="text-xl font-bold text-[#0F1F3D] group-hover:text-emerald-600 transition-colors mb-2">
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {article.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
