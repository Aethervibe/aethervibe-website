export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0F1F3D] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-emerald-400 hover:text-emerald-300 text-sm mb-8 inline-block">
          ← Back to Aethervibe
        </a>
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: May 9, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. About Aethervibe</h2>
            <p>
              Aethervibe is operated by Aethermind LLC. We provide a brokerage platform connecting
              clean energy developers with corporate tax buyers for Investment Tax Credit (ITC)
              transfers under IRA 2022 Section 6418. We act as a pure intermediary and do not hold
              credits, funds, or take positions in transactions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Use of the Platform</h2>
            <p>By using aethervibe.com, you agree to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Provide accurate and complete information when submitting inquiries</li>
              <li>Use the platform only for lawful purposes related to ITC transfers</li>
              <li>Not misrepresent your identity, project details, or tax liability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. No Legal or Tax Advice</h2>
            <p>
              Nothing on this website constitutes legal, tax, or financial advice. All transactions
              should be reviewed by qualified legal and tax counsel. Aethervibe facilitates
              introductions and process coordination; it does not provide legal or tax opinions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Broker Fees</h2>
            <p>
              Aethervibe earns a commission at close. Fee terms are disclosed and agreed upon in
              writing prior to any transaction. We do not charge upfront fees for introductions or
              platform access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
            <p>
              Aethermind LLC is not liable for the outcome of any ITC transfer transaction, including
              recapture events, tax disallowance, or counterparty default. Users are responsible for
              conducting their own due diligence and engaging appropriate advisors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of New York. Any disputes shall be
              resolved in the courts of New York County, New York.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Contact</h2>
            <p>
              Questions about these terms? Email{" "}
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
