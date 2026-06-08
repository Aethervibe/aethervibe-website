"use client";
import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

export default function BuyerInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "New Buyer Inquiry — Deal Summary Request");
    data.append("role", "buyer");
    trackEvent("buyer_inquiry", {
      form: "deal_summary_request",
      buyer_role: data.get("buyer_role")?.toString() || "unspecified",
      tax_liability: data.get("tax_liability")?.toString() || "unspecified",
    });

    try {
      await fetch("https://formspree.io/f/myklndln", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="buyer-inquiry" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Accepting Buyer Inquiries
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1F3D] mb-4">
            Request a Deal Summary
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We match qualified buyers with pre-vetted ITC opportunities. Leave your details and we'll send you a current deal summary within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left: Deal snapshot */}
          <div className="bg-[#0F1F3D] rounded-2xl p-8 text-white">
            <div className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Current Opportunity
            </div>

            <div className="space-y-4 mb-8">
              {[
                { label: "Credit Type", value: "§48E Battery Storage ITC" },
                { label: "Credit Amount", value: "$3.4M" },
                { label: "Portfolio", value: "290 residential systems · California" },
                { label: "Effective Rate", value: "40% (30% bonus + 10% adder)" },
                { label: "Documentation", value: "IRS registration ✓  Cost seg ✓  Insurance ✓" },
                { label: "Indicative Pricing", value: "Shared under NDA" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between gap-4 py-3 border-b border-white/10 last:border-0">
                  <span className="text-gray-400 text-sm">{item.label}</span>
                  <span className="text-white text-sm font-medium text-right">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <div className="text-emerald-300 text-xs font-semibold mb-1">How the economics work</div>
              <div className="text-white text-sm">
                Buy $3.4M in credits below face value → offset $3.4M of federal tax dollar-for-dollar → your net benefit is the spread. <span className="text-emerald-400 font-bold">Exact pricing shared under NDA.</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#0F1F3D] mb-2">Deal summary on its way</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                We'll send the one-page deal summary to your email within 24 hours. An NDA will be required before full credit profile access.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    name="name"
                    required
                    placeholder="Jane Smith"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Work Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company *</label>
                <input
                  name="company"
                  required
                  placeholder="Company name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Role</label>
                <select
                  name="buyer_role"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors text-gray-700"
                >
                  <option value="">Select role...</option>
                  <option value="cfo">CFO / Finance Director</option>
                  <option value="tax_director">Tax Director / VP Tax</option>
                  <option value="cpa">CPA / Tax Advisor</option>
                  <option value="family_office">Family Office</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Annual Federal Tax Liability</label>
                <select
                  name="tax_liability"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors text-gray-700"
                >
                  <option value="">Select range...</option>
                  <option value="1m_5m">$1M – $5M</option>
                  <option value="5m_20m">$5M – $20M</option>
                  <option value="20m_50m">$20M – $50M</option>
                  <option value="50m_plus">$50M+</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
              >
                {loading ? "Sending..." : "Request Deal Summary →"}
              </button>

              <p className="text-xs text-gray-400 text-center">
                We'll respond within 24 hours. An NDA is required before full credit details are shared.
              </p>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}
