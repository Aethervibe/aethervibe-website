"use client";
import { useState } from "react";

export default function LeadForm() {
  const [role, setRole] = useState<"seller" | "buyer" | "">("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/placeholder", {
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

  if (submitted) {
    return (
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-[#0F1F3D] mb-2">We'll be in touch within 24 hours</h3>
          <p className="text-gray-500">Thank you for reaching out. Our team will review your submission and contact you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1F3D] mb-4">
            Get Started Today
          </h2>
          <p className="text-gray-500">
            Tell us about your situation. We'll match you with the right opportunities within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
          {/* Role selector */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">I am a...</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "seller", label: "🌱 Developer / Seller", sub: "I have ITC credits to transfer" },
                { value: "buyer", label: "🏦 Tax Buyer", sub: "I want to purchase ITC credits" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setRole(opt.value as "seller" | "buyer")}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    role === opt.value
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-semibold text-[#0F1F3D] text-sm">{opt.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{opt.sub}</div>
                </button>
              ))}
            </div>
            <input type="hidden" name="role" value={role} />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
              <input
                name="name"
                required
                placeholder="John Smith"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Work Email *</label>
              <input
                name="email"
                type="email"
                required
                placeholder="john@company.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company</label>
              <input
                name="company"
                placeholder="Company name"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                {role === "buyer" ? "Annual Tax Liability" : "Project Size (MW or $)"}
              </label>
              <input
                name="size"
                placeholder={role === "buyer" ? "e.g. $5M+" : "e.g. 10MW / $2M ITC"}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tell us more</label>
            <textarea
              name="message"
              rows={3}
              placeholder={
                role === "seller"
                  ? "Project type, location, expected ITC amount, timeline..."
                  : "Tax liability size, preferred project types, timeline..."
              }
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={!role || loading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
          >
            {loading ? "Sending..." : "Submit — We'll respond within 24 hours"}
          </button>

          <p className="text-xs text-gray-400 text-center">
            By submitting, you agree to be contacted by our team. No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
}
