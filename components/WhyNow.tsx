const stats = [
  {
    value: "$42B",
    label: "ITC transfers in 2025",
    sub: "+48% year-over-year",
  },
  {
    value: "27%",
    label: "of Fortune 1000",
    sub: "now active buyers",
  },
  {
    value: "4:1",
    label: "Buyer demand vs supply",
    sub: "market is supply-constrained",
  },
  {
    value: "86–90¢",
    label: "Mid-market pricing",
    sub: "vs 94–95¢ for large deals",
  },
];

export default function WhyNow() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-block bg-emerald-500/10 text-emerald-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-emerald-500/20">
            Market Opportunity
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1F3D] mb-6 leading-tight">
            Congress Created the Market.<br />
            The Infrastructure Didn't Follow.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            In 2022, the Inflation Reduction Act created Section 6418 — allowing clean energy developers to sell their Investment Tax Credits directly to corporate buyers. The market exploded: from zero to $42B in just three years.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed">
            But mid-market projects generating <span className="font-semibold text-[#0F1F3D]">$1M–$20M in credits</span> are still left out. Large platforms focus on $25M+ transactions. Banks require $100M minimums. Mid-market developers navigate a complex compliance process — IRS registration, FEOC rules, recapture risk, buyer qualification — without the tools or relationships to close.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <div className="text-3xl font-black text-emerald-500 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[#0F1F3D] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0F1F3D] to-[#1a3a6b] rounded-2xl p-8 md:p-10 text-white">
          <div className="max-w-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              The gap is real — and it's measurable.
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Mid-market credits trade at a <span className="text-emerald-400 font-semibold">4–10 cent discount</span> compared to large institutional deals — not because the credits are lower quality, but because no specialized intermediary exists for this tier. That pricing gap is the opportunity Aethervibe is built to close.
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Market data: Crux Climate 2025 Market Intelligence Report · Reunion Infrastructure Q3 2025 Market Monitor
        </p>
      </div>
    </section>
  );
}
