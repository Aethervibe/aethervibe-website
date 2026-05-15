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
