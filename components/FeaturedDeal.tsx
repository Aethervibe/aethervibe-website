export default function FeaturedDeal() {
  return (
    <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <div className="inline-block bg-emerald-500/10 text-emerald-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-emerald-500/20">
            Currently Available
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1F3D]">
            Live ITC Transfer Opportunity
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
            Verified, IRS-registered credit available now. NDA required to access full due diligence package.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

          {/* Deal Header */}
          <div className="bg-gradient-to-r from-[#0F1F3D] to-[#1a3a6b] px-8 py-5 flex items-center justify-between">
            <div>
              <div className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-1">§48E Investment Tax Credit</div>
              <div className="text-white text-xl font-bold">Residential Energy Storage — California</div>
            </div>
            <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
              Active
            </div>
          </div>

          {/* Deal Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
            {[
              { label: "Credit Amount", value: "$3.4M", sub: "§48E ITC" },
              { label: "Effective Rate", value: "40%", sub: "30% Bonus + 10% Adder" },
              { label: "Transfer Price", value: "Under NDA", sub: "shared with qualified buyers" },
              { label: "Tax Year", value: "2025", sub: "placed in service" },
            ].map((item) => (
              <div key={item.label} className="px-6 py-5">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-xl font-bold text-[#0F1F3D]">{item.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Compliance Badges */}
          <div className="px-8 py-5 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-3">
            {[
              "✅ IRS Registration Complete",
              "✅ Independent Cost Segregation",
              "✅ Tax Credit Insurance Available",
              "✅ FEOC Compliant",
            ].map((badge) => (
              <span key={badge} className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                {badge}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="px-8 py-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Ideal buyer: U.S. C-Corp with <strong className="text-[#0F1F3D]">$3.5M+ in 2025 federal tax liability</strong>. First qualified buyer moves to 2-week exclusivity.
            </p>
            <a
              href="#contact"
              className="shrink-0 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
            >
              Request Details (NDA Required) →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
