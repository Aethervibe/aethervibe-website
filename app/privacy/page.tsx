export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0F1F3D] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-emerald-400 hover:text-emerald-300 text-sm mb-8 inline-block">
          ← Back to Aethervibe
        </a>
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: May 9, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Who We Are</h2>
            <p>
              Aethervibe is operated by Aethermind LLC, a limited liability company registered in the
              United States. We operate an Investment Tax Credit (ITC) transfer marketplace under IRA
              2022 Section 6418. Our contact email is{" "}
              <a href="mailto:ceo@aethervibe.com" className="text-emerald-400 hover:underline">
                ceo@aethervibe.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>We collect information you provide directly when you:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Submit the contact form (name, email, company, project details)</li>
              <li>Book a consultation via Calendly</li>
              <li>Communicate with us by email</li>
            </ul>
            <p className="mt-3">
              We also collect standard web analytics data (pages visited, time on site, referral
              source) via privacy-respecting analytics tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>To respond to your inquiry and facilitate ITC transfer introductions</li>
              <li>To send relevant updates about the ITC market (you may opt out at any time)</li>
              <li>To improve our platform and marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Information Sharing</h2>
            <p>
              We do not sell your personal information. We share information only as necessary to
              facilitate a transaction (e.g., introducing a developer to a qualified tax buyer) and
              only with your knowledge. We may share data with service providers (Vercel for hosting,
              Calendly for scheduling) under confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our services and comply
              with legal obligations. You may request deletion at any time by emailing{" "}
              <a href="mailto:ceo@aethervibe.com" className="text-emerald-400 hover:underline">
                ceo@aethervibe.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Contact</h2>
            <p>
              Questions about this policy? Email us at{" "}
              <a href="mailto:ceo@aethervibe.com" className="text-emerald-400 hover:underline">
                ceo@aethervibe.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
