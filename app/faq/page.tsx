import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — ITC Transfer Questions Answered | Aethervibe",
  description:
    "Answers to the most common questions about selling and buying Investment Tax Credits (ITC) under IRA Section 6418, mid-market pricing, FEOC compliance, and working with Aethervibe.",
  alternates: {
    canonical: "https://www.aethervibe.com/faq",
  },
};

const faqs = [
  {
    q: "What is an ITC transfer under Section 6418?",
    a: "Section 6418 of the IRA (2022) allows eligible clean energy developers to transfer their Investment Tax Credits directly to unrelated corporate buyers in exchange for cash. The buyer applies the credit dollar-for-dollar against their federal tax liability. This is a one-time transfer — the buyer cannot resell the credit.",
  },
  {
    q: "Who is Aethervibe, and what do you do?",
    a: "Aethervibe is a specialist ITC transfer broker for mid-market deals ($1M–$20M), operated by Aethermind LLC in New York City. We connect vetted clean energy developers with qualified corporate tax buyers. We act as a pure intermediary — we never hold credits or take principal risk — and earn commission only at close.",
  },
  {
    q: "Why does Aethervibe focus on the $1M–$20M segment?",
    a: "Large platforms like Crux Climate and Reunion Infrastructure focus on $25M+ deals. Banks require $100M+ minimums. This leaves mid-market developers — solar, storage, and wind projects generating $1M–$20M in credits — without efficient access to buyers. Mid-market credits have historically traded 4–10¢ below par not because of credit quality, but because of the lack of specialized intermediary infrastructure. Aethervibe was built to close this gap.",
  },
  {
    q: "What types of clean energy projects can transfer ITCs?",
    a: "Eligible credits include §48 ITC (solar, battery storage, EV charging), §48E Clean Electricity ITC (post-2025 projects), §45Y Clean Electricity PTC (wind, solar), §45X Advanced Manufacturing, §45Q Carbon Capture, and others. Aethervibe focuses primarily on §48 and §48E projects — solar and battery storage.",
  },
  {
    q: "How much does it cost to work with Aethervibe?",
    a: "Aethervibe charges a commission of 1.5–2% of the ITC transaction value, paid by the seller at close. There are no upfront fees and no fees if the deal does not close. Additional transaction costs (legal, insurance, independent engineer) are standard market costs borne by the respective parties.",
  },
  {
    q: "How long does an ITC transfer take to close?",
    a: "A well-prepared mid-market ITC transfer closes in 30–60 days. The timeline includes IRS pre-filing registration (if not completed), buyer matching, due diligence, insurance coordination, and closing documentation. Having complete project documentation ready at the start of the process is the single biggest driver of speed.",
  },
  {
    q: "What is IRS Pre-Filing Registration and why does it matter?",
    a: "Before any ITC transfer can be made, the developer (seller) must register the project with the IRS through the Energy Credits Online (ECO) portal and obtain a registration number. This registration number must appear on both the seller's and buyer's tax returns. Without it, the transfer election is invalid. Aethervibe helps developers navigate this process.",
  },
  {
    q: "What is FEOC compliance, and does it affect my project?",
    a: "Following the One Big Beautiful Bill Act (OBBBA, 2025), projects beginning construction after December 31, 2025 must comply with Prohibited Foreign Entity (PFE) rules. Projects with significant Chinese, Russian, or other restricted-nation components in their supply chain may face partial or full credit disqualification. Aethervibe provides FEOC compliance documentation as part of our due diligence package — this is especially important for residential solar projects with Chinese inverter or panel components.",
  },
  {
    q: "What do corporate buyers get out of purchasing ITCs?",
    a: "Corporate buyers typically purchase ITC credits at 88–92¢ per dollar of credit, receiving a dollar-for-dollar reduction in their federal income tax liability. On a $5M purchase, the buyer spends approximately $4.5M and saves $5M in taxes — an immediate 10–12% return on a transaction that takes 30–60 days to close. Credits may be carried back 3 years or forward 22 years.",
  },
  {
    q: "What is recapture risk, and how is it managed?",
    a: "ITCs carry a 5-year declining recapture risk: if the eligible property is disposed of or ceases to qualify, a portion of the credit may be reclaimed by the IRS. The buyer bears recapture liability, but the seller indemnifies the buyer through the Transfer Agreement. Tax credit insurance (available from carriers such as Munich Re, Aon, and Marsh) provides additional protection and is standard practice on mid-market transactions.",
  },
  {
    q: "How do I get started with Aethervibe?",
    a: "Schedule a 15-minute consultation at calendly.com/ceo-aethervibe/itc-consultation. We'll discuss your project profile, ITC amount, timeline, and whether Aethervibe is a fit. If we proceed, we'll send you a mandate letter and begin the vetting and matching process.",
  },
  {
    q: "As a corporate buyer, how do I evaluate whether purchasing ITCs is right for my company?",
    a: "ITC purchases work best for C-Corporations with meaningful federal income tax liability (generally $1M+ per year), a stable multi-year tax profile, and the ability to absorb the credit in the current or adjacent tax years. Credits can be carried back 3 years or forward 22 years, providing flexibility. S-Corps, partnerships, and pass-through entities can also participate but face additional complexity at the partner/shareholder level. We recommend buyers consult their tax counsel to confirm eligibility before committing to a transaction.",
  },
  {
    q: "What documentation does a corporate buyer receive at closing?",
    a: "At closing, buyers receive: (1) the executed Tax Credit Transfer Agreement (TCTA), (2) the IRS Pre-Filing Registration number confirming project eligibility, (3) the cost segregation report establishing ITC-eligible basis, (4) the tax credit insurance policy, (5) FEOC compliance documentation confirming the project's supply chain, and (6) the independent engineer report. Together, these documents form a closing binder that supports your tax return filing and satisfies IRS disclosure requirements under Notice 2023-29.",
  },
  {
    q: "How are purchased ITCs reported on a corporate tax return?",
    a: "The buyer reports the purchased ITC on IRS Form 3468 (Investment Credit) and attaches the required election statement under Section 6418. The seller's IRS registration number must appear on the buyer's return. The credit reduces federal income tax liability dollar-for-dollar in the year the transfer is made. Your tax advisor will handle the IRS disclosure election per the Treasury Final Regulations (T.D. 9993, April 2024).",
  },
  {
    q: "Can I buy ITC credits if my company has minimal tax liability this year?",
    a: "Yes — purchased ITCs can be carried back 3 years (to offset prior tax liabilities and potentially generate a refund) or carried forward 22 years to offset future tax liability. This makes ITC purchases viable even for companies in a low-tax year, as long as they have taxable income in adjacent years. Coordinate with your tax counsel to determine the optimal year of utilization before entering into a purchase agreement.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-gradient-to-br from-[#0F1F3D] to-[#1a3a6b] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-emerald-400 hover:text-emerald-300 text-sm mb-6 inline-block">
            ← Back to Aethervibe
          </a>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-lg">
            Everything you need to know about ITC transfers, mid-market pricing, and working with Aethervibe.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 pb-8">
              <h2 className="text-lg font-semibold text-[#0F1F3D] mb-3">
                {faq.q}
              </h2>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#0F1F3D] to-[#1a3a6b] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            Schedule a free 15-minute consultation and we'll walk through your specific situation.
          </p>
          <a
            href="https://calendly.com/ceo-aethervibe/itc-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Schedule a Consultation →
          </a>
        </div>
      </div>
    </main>
  );
}
