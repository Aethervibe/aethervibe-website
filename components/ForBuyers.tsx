const benefits = [
  {
    icon: "🏦",
    title: "Dollar-for-Dollar Tax Reduction",
    description: "ITC credits reduce your federal tax liability at a 1:1 ratio—purchased at 85–95¢ on the dollar.",
  },
  {
    icon: "🔍",
    title: "Verified Project Pipeline",
    description: "Every project listed has been reviewed for IRS compliance, eligibility, and documentation completeness.",
  },
  {
    icon: "⚖️",
    title: "Full Compliance Support",
    description: "We work alongside your tax counsel to ensure transfers meet all IRA 2022 transferability requirements.",
  },
  {
    icon: "🌱",
    title: "Clean Energy Impact",
    description: "Support US solar, wind, and storage projects while strategically reducing your corporate tax burden.",
  },
];

export default function ForBuyers() {
  return (
    <section id="for-buyers" className="py-24 px-6 bg-[#0F1F3D]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 gap-6 order-2 md:order-1">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all">
                <div className="text-2xl">{b.icon}</div>
                <div>
                  <div className="font-semibold text-white mb-1">{b.title}</div>
                  <div className="text-sm text-gray-400 leading-relaxed">{b.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="order-1 md:order-2">
            <div className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
              For Corporate Tax Buyers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Reduce Your Tax Liability. Support Clean Energy.
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              The IRA 2022 made Investment Tax Credits transferable for the first time.
              Corporations with federal tax liability can now purchase ITC credits from
              clean energy projects—reducing taxes while supporting the energy transition.
            </p>
            <a
              href="#contact"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Browse ITC Opportunities →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
