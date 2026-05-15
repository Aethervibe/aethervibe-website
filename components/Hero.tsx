export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#0F1F3D] to-[#1a3a6b] text-white">

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-emerald-500/20 text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-emerald-500/30">
          IRA 2022 Compliant · Investment Tax Credit Transfers
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          The Mid-Market ITC<br />
          <span className="text-emerald-400">Transfer Marketplace</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Aethervibe is the specialist broker for <strong className="text-white">$1M–$20M ITC transfers</strong> under IRA Section 6418 — the tier too small for big banks, too complex for direct sales.
          Verified parties. Transparent process. Close in 30–60 days.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            List Your ITC Project →
          </a>
          <a
            href="#contact"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-white/20"
          >
            Find ITC Opportunities
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/10 pt-10">
          {[
            { value: "$42B+", label: "ITC Market in 2025" },
            { value: "85–95¢", label: "Per Dollar of Credit" },
            { value: "30–60", label: "Days to Close" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-emerald-400">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>Industry Member:</span>
          <span className="text-emerald-400 font-semibold border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 rounded-full text-xs tracking-wide">
            NY-BEST · New York Battery & Energy Storage Technology Consortium
          </span>
        </div>
      </div>
    </section>
  );
}
