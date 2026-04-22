const benefits = [
  {
    icon: "💰",
    title: "Competitive Pricing",
    description: "Access vetted corporate buyers willing to pay 85–95¢ on the dollar for your ITC credits.",
  },
  {
    icon: "✅",
    title: "Pre-Qualified Buyers",
    description: "Every buyer on our platform is verified for sufficient federal tax liability before matching.",
  },
  {
    icon: "📋",
    title: "Streamlined Due Diligence",
    description: "Standardized documentation process reduces friction and accelerates close timelines.",
  },
  {
    icon: "⚡",
    title: "Close in 30–60 Days",
    description: "Our structured process eliminates back-and-forth. From match to signed agreement, fast.",
  },
];

export default function ForSellers() {
  return (
    <section id="for-sellers" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-emerald-500 font-semibold text-sm uppercase tracking-wider mb-3">
              For Developers & Project Owners
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1F3D] mb-6">
              Monetize Your ITC Credits at Maximum Value
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              You built the project. Now get full value for your tax credits.
              Aethervibe connects you directly with corporate buyers—no brokers
              taking unnecessary cuts, no opaque pricing.
            </p>
            <a
              href="#contact"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              List Your Project →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all">
                <div className="text-2xl">{b.icon}</div>
                <div>
                  <div className="font-semibold text-[#0F1F3D] mb-1">{b.title}</div>
                  <div className="text-sm text-gray-500 leading-relaxed">{b.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
