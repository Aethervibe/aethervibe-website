import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Is the Money From Selling a Clean Energy Tax Credit Taxable in Your State? | Aethervibe",
  description:
    "Section 6418 proceeds are excluded from federal gross income. State treatment depends on your state's IRC conformity date — and if that date predates August 16, 2022, the exclusion may not exist for state purposes. A five-minute check for developers.",
  alternates: {
    canonical:
      "https://www.aethervibe.com/insights/state-tax-on-selling-clean-energy-credits",
  },
  openGraph: {
    title:
      "Is the Money From Selling a Clean Energy Tax Credit Taxable in Your State?",
    description:
      "The federal answer is settled. The state answer often isn't — and sellers usually find out after they've agreed on a price.",
    url: "https://www.aethervibe.com/insights/state-tax-on-selling-clean-energy-credits",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the money from selling a federal clean energy tax credit taxable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Federally, no. IRC Section 6418(b)(2) provides that the consideration paid for a transferred credit shall not be includible in gross income of the eligible taxpayer, and Section 6418(b)(3) provides that it is not deductible by the buyer. Section 6418(b)(1) requires the consideration to be paid in cash. State treatment is a separate question and does not automatically follow the federal rule.",
      },
    },
    {
      "@type": "Question",
      name: "Do states tax Section 6418 tax credit sale proceeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on how the state connects to the Internal Revenue Code. States use rolling conformity (following the Code as currently amended), fixed-date conformity (following the Code as it existed on a specific date), or selective decoupling. Section 6418 was created by the Inflation Reduction Act, enacted August 16, 2022. If a state's fixed conformity date precedes that, Section 6418 does not exist as a matter of that state's law, and there is no exclusion to apply.",
      },
    },
    {
      "@type": "Question",
      name: "What is an IRC conformity date and why does it matter when selling a tax credit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An IRC conformity date is the date of the version of the federal Internal Revenue Code that a state has adopted as the starting point for its own income tax. Fixed-date conformity states publish this date and must pass legislation to move it forward. Because Section 6418 was enacted August 16, 2022 and the final transfer regulations were issued in April 2024, a state with an earlier conformity date may not recognize the federal exclusion for credit sale proceeds.",
      },
    },
    {
      "@type": "Question",
      name: "Can more than one state tax the same tax credit sale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Potentially yes. A developer may face a conformity question in the state where the selling entity is organized and where its owners file, and separately in the state where the project sits, which may create nexus independently. Those two states can have different conformity rules and therefore different answers on the same transaction.",
      },
    },
    {
      "@type": "Question",
      name: "How do I check whether my state taxes credit sale proceeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Four steps. First, determine whether your state uses rolling or fixed-date conformity by searching your state revenue department site for Internal Revenue Code conformity. Second, if fixed, check whether the date is on or after August 16, 2022. Third, check whether the state has decoupled from specific provisions or has a statutory brake on automatic conformity. Fourth, run the question for every state with a claim, including both the entity state and the project state. Then ask your CPA specifically whether the Section 6418 proceeds are excluded for state purposes and what the state's conformity date is.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Is the Money From Selling a Clean Energy Tax Credit Taxable in Your State?",
  description:
    "Section 6418 proceeds are excluded from federal gross income, but state treatment turns on IRC conformity dates. A five-minute check for developers selling clean energy tax credits.",
  author: { "@type": "Organization", name: "Aethervibe" },
  publisher: { "@type": "Organization", name: "Aethervibe" },
  datePublished: "2026-09-03",
  mainEntityOfPage:
    "https://www.aethervibe.com/insights/state-tax-on-selling-clean-energy-credits",
};

export default function StateTaxOnSellingCleanEnergyCredits() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-[#0F1F3D] to-[#1a3a6b] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <a
            href="/insights"
            className="text-emerald-400 hover:text-emerald-300 text-sm mb-6 inline-block"
          >
            &larr; Insights
          </a>
          <div className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-emerald-500/30">
            Developer Guide
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Is the Money From Selling a Clean Energy Tax Credit Taxable in Your
            State?
          </h1>
          <p className="text-gray-300 text-lg">
            The federal answer is settled. The state answer often isn&rsquo;t
            &mdash; and sellers usually find out after they&rsquo;ve agreed on a
            price.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
            <span>By Aethervibe</span>
            <span>&middot;</span>
            <span>September 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-6 py-16 prose prose-lg prose-slate max-w-none">
        <p>
          If you are selling a federal clean energy tax credit under Section
          6418, you have probably been told the proceeds are tax-free. That is
          true &mdash; federally.
        </p>
        <p>
          It is not automatically true where you file your state return. And
          because the state question is almost never raised during pricing,
          sellers routinely agree to a number, close, and then discover their
          actual net is several points lower than the number they negotiated.
        </p>
        <p>
          This piece explains the mechanism, and gives you a check you can run
          yourself in about five minutes.
        </p>

        <h2>1. What federal law actually says</h2>
        <p>Three sentences in the statute do all the work. Quoted directly:</p>
        <p>
          <strong>IRC &sect; 6418(b)(1)</strong> &mdash; the consideration{" "}
          <em>&ldquo;shall be required to be paid in cash.&rdquo;</em>
        </p>
        <p>
          <strong>IRC &sect; 6418(b)(2)</strong> &mdash; the consideration{" "}
          <em>
            &ldquo;shall not be includible in gross income of the eligible
            taxpayer.&rdquo;
          </em>
          <br />
          <em>(You, the seller, do not report the sale proceeds as income.)</em>
        </p>
        <p>
          <strong>IRC &sect; 6418(b)(3)</strong> &mdash; the consideration{" "}
          <em>&ldquo;shall not be deductible under this title.&rdquo;</em>
          <br />
          <em>(The buyer does not get a deduction for what they paid.)</em>
        </p>
        <p>
          And one more that matters if you are an LLC or S corporation, which
          most project owners are:
        </p>
        <p>
          <strong>IRC &sect; 6418(c)(1)</strong> &mdash; for a partnership or S
          corporation, the amount received{" "}
          <em>
            &ldquo;shall be treated as tax exempt income for purposes of
            sections 705 and 1366.&rdquo;
          </em>
        </p>
        <p>
          That last one is a genuine benefit and it is frequently missed: the
          proceeds increase your outside basis. Tax-exempt income still builds
          basis. If your accountant treats the sale as a non-event, you may be
          leaving basis on the table.
        </p>
        <p>
          <strong>
            Every one of those rules lives in the Internal Revenue Code. None of
            them is a state law.
          </strong>
        </p>

        <h2>2. Why your state may not have gotten the memo</h2>
        <p>
          States do not write their own definition of income from scratch.
          Almost all of them start from the federal Code and then modify it. How
          they connect to the federal Code is the whole ballgame, and there are
          three patterns:
        </p>
        <p>
          <strong>Rolling conformity.</strong> The state follows the Internal
          Revenue Code as currently amended. Federal changes flow through
          automatically.
        </p>
        <p>
          <strong>Fixed-date (static) conformity.</strong> The state follows the
          Code <em>as it existed on a specific date</em>. The legislature has to
          pass a bill to move that date forward.
        </p>
        <p>
          <strong>Selective decoupling.</strong> The state generally conforms,
          but carves out specific provisions it does not want to adopt.
        </p>
        <p>Now the date that matters:</p>
        <blockquote>
          <p>
            <strong>
              Section 6418 was created by the Inflation Reduction Act, enacted
              August 16, 2022.
            </strong>
          </p>
        </blockquote>
        <p>
          If your state&rsquo;s conformity date is earlier than August 16, 2022,
          then as a matter of that state&rsquo;s law,{" "}
          <strong>Section 6418 does not exist.</strong> There is no exclusion to
          apply.
        </p>
        <p>
          And when there is no specific exclusion, you fall back to the general
          rule &mdash; IRC &sect; 61 &mdash; under which gross income means all
          income from whatever source derived. Cash you received for selling an
          asset is income.
        </p>
        <p>
          There is a second date worth knowing: the final Treasury regulations
          governing transfers were issued in <strong>April 2024</strong>. A
          state whose conformity date predates that may conform to the statute
          but not to the regulations that interpret it.
        </p>

        <h2>3. The expensive version of this problem</h2>
        <p>
          There is a scenario worse than simply paying state tax on the
          proceeds, and it has been documented in at least one large state.
        </p>
        <p>
          Recall that under <strong>IRC &sect; 50(c)</strong>, claiming an
          investment credit requires you to reduce the basis of the property
          &mdash; for energy and clean electricity credits, by 50% of the credit
          amount.
        </p>
        <p>
          Now put the two together in a fixed-conformity state whose date
          predates the IRA:
        </p>
        <ul>
          <li>
            The state does <strong>not</strong> recognize &sect; 6418, so the
            sale proceeds are <strong>taxable income</strong> to you.
          </li>
          <li>
            But the state <strong>does</strong> conform to &sect; 50(c), because
            that provision is decades old.
          </li>
          <li>
            So your basis is <strong>still reduced</strong> &mdash; you still
            lose the future depreciation.
          </li>
        </ul>
        <p>
          <strong>
            You recognize the income and you keep the basis reduction.
          </strong>{" "}
          You are taxed on the proceeds without receiving the offsetting
          treatment the federal scheme was designed around.
        </p>
        <p>
          Published analysis has flagged California as an example of this shape,
          on the grounds that its conformity date sits at{" "}
          <strong>January 1, 2015</strong> &mdash; well before the IRA. Texas
          presents a different version of the question, since its franchise tax
          is measured on gross receipts and conforms to federal law as of{" "}
          <strong>January 1, 2007</strong>, leaving genuine ambiguity about
          whether credit sale proceeds count as taxable receipts at all.
        </p>
        <p>
          <em>
            (Source note: these two state characterizations come from published
            legal commentary, not from the state statutes themselves. Verify
            against your own state&rsquo;s code before relying on either.)
          </em>
        </p>

        <h2>4. And it may not be only one state</h2>
        <p>
          If you are a developer, there is a reasonable chance more than one
          state has a claim on you:
        </p>
        <ul>
          <li>
            The state where <strong>the entity</strong> is organized and where
            its owners file
          </li>
          <li>
            The state where <strong>the project</strong> sits, which may create
            nexus regardless of where you are
          </li>
        </ul>
        <p>
          A developer headquartered in one state selling a credit generated by a
          project in another has two conformity questions, not one. They can
          have different answers.
        </p>

        <h2>5. The five-minute check</h2>
        <p>
          You do not need a memo to find out whether you have a problem. You
          need four facts.
        </p>
        <p>
          <strong>
            One &mdash; is your state a rolling or fixed-date conformity state?
          </strong>
          <br />
          Search your state&rsquo;s revenue department site for &ldquo;Internal
          Revenue Code conformity.&rdquo; Fixed-date states publish the date.
        </p>
        <p>
          <strong>
            Two &mdash; if fixed, is the date on or after August 16, 2022?
          </strong>
          <br />
          Before that date, &sect; 6418 does not exist for state purposes, and
          you should assume the proceeds are taxable until someone shows you
          otherwise.
        </p>
        <p>
          <strong>
            Three &mdash; has your state decoupled from anything specific?
          </strong>
          <br />
          Rolling conformity is not always unconditional. Some states have
          statutory brakes &mdash; for example, a provision that federal changes
          above a certain revenue impact require an affirmative legislative vote
          rather than flowing through automatically. Rolling conformity plus a
          brake is not the same as rolling conformity.
        </p>
        <p>
          <strong>
            Four &mdash; run the question for every state with a claim.
          </strong>{" "}
          Entity state and project state both.
        </p>
        <p>
          Then ask your CPA one specific question rather than a general one:
        </p>
        <blockquote>
          <p>
            <em>
              &ldquo;For state purposes, do we exclude the Section 6418 transfer
              proceeds from income, and what is our state&rsquo;s IRC conformity
              date?&rdquo;
            </em>
          </p>
        </blockquote>
        <p>
          That is a question with a citation-backed answer. &ldquo;Is this
          taxable?&rdquo; is not.
        </p>

        <h2>6. What to do with the answer</h2>
        <p>
          If your state taxes the proceeds, nothing about the deal becomes
          impossible. What changes is the number you should be negotiating
          against.
        </p>
        <p>
          <strong>
            Price the credit on your after-state-tax net, not the headline
            cents-per-dollar.
          </strong>{" "}
          Two offers at the same gross price are not the same offer if one
          closes into a state that taxes it. And if you are comparing a transfer
          against holding the credit and using it yourself, the state treatment
          belongs in that comparison too.
        </p>
        <p>
          The point is not that this is common or rare. The point is that it is
          knowable in advance, cheap to check, and expensive to discover late.
        </p>

        <hr />

        <p>
          <strong>
            Conformity dates cited in this piece were checked in August 2026.
          </strong>{" "}
          State conformity is revisited by most legislatures every year, and
          fixed-date states move their date by statute &mdash; so a date that
          was current when this was written may not be current when you read it.
          Check yours.
        </p>
        <p>
          <em>
            Aethervibe works on Section 6418 credit transfers at the smaller end
            of the market.
          </em>
        </p>
        <p>
          <strong>
            This is general information, not tax or legal advice. Confirm your
            own position with your advisors before acting.
          </strong>
        </p>
      </div>
    </main>
  );
}
