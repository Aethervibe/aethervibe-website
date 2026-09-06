import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Open Questions in Section 6418 Practice | Aethervibe",
  description:
    "A running list of questions in transferable clean energy tax credit practice where the statutory and regulatory text stops short of an answer. Each entry quotes the authority up to the point where it stops speaking.",
  alternates: {
    canonical: "https://www.aethervibe.com/open-questions",
  },
  openGraph: {
    title: "Open Questions in Section 6418 Practice",
    description:
      "Questions that come up in real section 6418 transactions and that the published text does not answer. Maintained, and credited when answered.",
    url: "https://www.aethervibe.com/open-questions",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Open Questions in Section 6418 Practice",
  description:
    "A maintained list of unresolved questions in transferable clean energy tax credit practice, each quoting the governing text up to the point where it stops answering.",
  author: { "@type": "Organization", name: "Aethervibe" },
  publisher: { "@type": "Organization", name: "Aethervibe" },
  datePublished: "2026-09-06",
  dateModified: "2026-09-06",
  mainEntityOfPage: "https://www.aethervibe.com/open-questions",
};

function Question({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 pt-10 border-t border-slate-200">
      <h2 className="!mt-0 !mb-2">
        {n}. {title}
      </h2>
      <p className="!mt-0 !mb-6">
        <span className="inline-block bg-amber-100 text-amber-900 text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded">
          Status: open
        </span>
      </p>
      {children}
    </section>
  );
}

export default function OpenQuestions() {
  return (
    <main className="min-h-screen bg-white">
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
            Reference
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Open Questions in Section 6418 Practice
          </h1>
          <p className="text-gray-300 text-lg">
            A running list of questions where the statutory and regulatory text
            stops short of an answer.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
            <span>Maintained by Aethervibe</span>
            <span>&middot;</span>
            <span>Last updated September 2026</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16 prose prose-lg prose-slate max-w-none">
        <p>
          We work on transferable clean energy tax credit deals at the smaller
          end of the market. These are the questions that come up repeatedly and
          that we have not been able to resolve from the text itself. Each entry
          says what the problem is, quotes the authority up to the point where
          it stops speaking, and describes who would be in a position to answer.
        </p>
        <p>
          <strong>
            This page is maintained. When a question is answered, we say so and
            credit the person who answered it.
          </strong>
        </p>

        <Question n={1} title="When exactly does the payment window close?">
          <p>
            <strong>The question.</strong> The election requires cash paid within
            a defined window. Practitioners routinely describe that window as
            ending on the return due date. The regulation does not say that.
          </p>
          <p>
            <strong>Where the text stops.</strong> Treas. Reg. &sect;
            1.6418-1(f)(2) defines the window as ending on the due date for
            completing a transfer election statement, and points to &sect;
            1.6418-2(b)(5)(iii), which provides that the statement cannot be
            completed for any year after <strong>the earlier of</strong> &mdash;
          </p>
          <blockquote>
            <p>
              &ldquo;(A) The filing of the eligible taxpayer&rsquo;s return for
              the taxable year for which the specified credit portion is
              determined&hellip;; or (B) The filing of the return of the
              transferee taxpayer for the year in which the specified credit
              portion is taken into account.&rdquo;
            </p>
          </blockquote>
          <p>
            The operative words are <strong>&ldquo;the filing of&rdquo;</strong>{" "}
            &mdash; an act, not a date. On a plain reading, either party can
            close the window unilaterally by filing early, and the
            transferee&rsquo;s filing can close it on a schedule the transferor
            never sees. We have not found guidance addressing whether
            &ldquo;the filing of&rdquo; is intended to carry that consequence, or
            what happens to a signed agreement when it does.
          </p>
          <p>
            <strong>Who could answer.</strong> A practitioner who has closed
            transfers where the two parties had different fiscal years, or who
            has had this timing question raised on examination.
          </p>
        </Question>

        <Question
          n={2}
          title="What happens to an installment that lands outside the window?"
        >
          <p>
            <strong>The question.</strong> Sellers frequently propose splitting
            payment across two tax years. Whether that is a partial problem or a
            total one is not clear from the text.
          </p>
          <p>
            <strong>Where the text stops.</strong> Three provisions have to be
            read together. &sect; 1.6418-1(f)(3) expressly contemplates a forward
            commitment:
          </p>
          <blockquote>
            <p>
              &ldquo;May include a transferee taxpayer&rsquo;s contractual
              commitment to purchase eligible credits with United States dollars
              in advance of the date a specified credit portion is
              transferred&hellip; <strong>if all payments of United States
              dollars are made</strong> in a manner described in paragraph
              (f)(1) <strong>during the time period described in paragraph
              (f)(2)</strong>.&rdquo;
            </p>
          </blockquote>
          <p>And &sect; 1.6418-2(a)(4)(ii) is categorical:</p>
          <blockquote>
            <p>
              &ldquo;<strong>No transfer election is allowed</strong> if an
              eligible taxpayer receives any consideration other than cash (as
              defined in &sect; 1.6418-1(f)) in connection with the
              transfer.&rdquo;
            </p>
          </blockquote>
          <p>
            Read together, an installment falling outside the window appears not
            to be &ldquo;cash&rdquo; as defined &mdash; which, under (a)(4)(ii),
            reads as invalidating the election entirely rather than reducing it
            proportionally.{" "}
            <strong>
              We have not found anything that confirms or rejects the
              all-or-nothing reading.
            </strong>{" "}
            The difference matters enormously: one version costs a seller part of
            a deal, the other costs the whole thing.
          </p>
          <p>
            <strong>Who could answer.</strong> Counsel who has papered a
            multi-year payment structure under section 6418, or anyone with
            visibility into how the Service has treated one.
          </p>
        </Question>

        <Question
          n={3}
          title="Which taxable year does the transferee use, and what does that do to a buyer with a non-calendar year?"
        >
          <p>
            <strong>The question.</strong> Buyer qualification lists routinely
            cover tax appetite, entity type, and credit size. Fiscal year end is
            rarely on them. It may belong there.
          </p>
          <p>
            <strong>Where the text stops.</strong> IRC &sect; 6418(d):
          </p>
          <blockquote>
            <p>
              &ldquo;&hellip;shall be taken into account in the{" "}
              <strong>
                first taxable year of the transferee taxpayer ending with, or
                after,
              </strong>{" "}
              the taxable year of the eligible taxpayer with respect to which the
              credit was determined.&rdquo;
            </p>
          </blockquote>
          <p>
            For a credit determined in a calendar year 2025 seller year, a buyer
            whose fiscal year ended in the spring of 2026 has, on this reading,
            already passed the only year in which it could take that credit into
            account. Combined with question 1 &mdash; the window closing on the
            earlier filing &mdash; a buyer can be structurally ineligible for a
            given vintage without either party noticing until late in the
            process.{" "}
            <strong>
              We have not found guidance addressing this interaction directly.
            </strong>
          </p>
          <p>
            <strong>Who could answer.</strong> A practitioner who has run a
            transfer where the buyer had a non-calendar fiscal year.
          </p>
        </Question>

        <Question
          n={4}
          title="How is an excessive credit transfer actually computed?"
        >
          <p>
            <strong>The question.</strong> The consequence of an excessive
            transfer is severe and falls on the buyer. The computation that
            produces it is less examined.
          </p>
          <p>
            <strong>Where the text stops.</strong> Treas. Reg. &sect; 1.6418-5(a)
            is explicit about the consequence:
          </p>
          <blockquote>
            <p>
              &ldquo;The tax imposed on the{" "}
              <strong>transferee taxpayer</strong>&hellip; will be increased
              by&hellip; the amount of such excessive credit transfer; and{" "}
              <strong>an amount equal to 20 percent</strong> of such excessive
              credit transfer.&rdquo;
            </p>
          </blockquote>
          <p>
            &sect; 1.6418-5(b) supplies the definition.{" "}
            <strong>
              We have not yet worked through it line by line against a fact
              pattern
            </strong>
            , and we have not found a worked example in published guidance
            showing how the calculation runs where a credit is reduced for
            reasons that emerge after closing &mdash; a basis adjustment, a
            recharacterized cost, a partial disallowance.
          </p>
          <p>
            <strong>Who could answer.</strong> Anyone who has computed one, or
            defended one.
          </p>
        </Question>

        <Question n={5} title="Can reasonable cause reach the 20 percent addition?">
          <p>
            <strong>The question.</strong> The 20 percent addition under &sect;
            1.6418-5(a) is what makes indemnity caps set at 100 percent of
            purchase price insufficient &mdash; the exposure exceeds what was
            paid. Whether a reasonable cause defense is available against that
            addition changes how those caps should be negotiated.
          </p>
          <p>
            <strong>Where the text stops.</strong> We have read &sect;
            1.6418-5(a) and its statement of the consequence.{" "}
            <strong>
              We have not located a provision addressing reasonable cause
              specifically as applied to this addition
            </strong>
            , and we are aware that &ldquo;we have not found it&rdquo; is not the
            same as &ldquo;it does not exist.&rdquo; This is stated as an open
            question precisely because we would rather be corrected than proceed
            on an assumption.
          </p>
          <p>
            <strong>Who could answer.</strong> Tax controversy counsel, or anyone
            who has seen this raised in an examination.
          </p>
        </Question>

        <Question
          n={6}
          title="Does section 469(e)(2) reach purchased credits held by a closely held C corporation?"
        >
          <p>
            <strong>The question.</strong> Treasury has settled the general
            question and left a narrower one untouched.
          </p>
          <p>
            <strong>Where the text stops.</strong> The preamble to the final
            regulations is unambiguous that section 469 applies:
          </p>
          <blockquote>
            <p>
              &ldquo;There is no carveout for section 469 in section
              6418.&rdquo;
              <br />
              &mdash; T.D. 9993, 89 Fed. Reg. 34,770, 34,783 (Apr. 30, 2024)
            </p>
          </blockquote>
          <p>And Treasury declined to change that:</p>
          <blockquote>
            <p>
              &ldquo;the final regulations do not adopt commenters&rsquo;
              suggestions to not apply the passive credit rules to transferred
              specified credit portions or to apply the passive credit rules in a
              different manner than as provided in the proposed
              regulations.&rdquo;
              <br />
              &mdash; <em>Id.</em> at 34,784
            </p>
          </blockquote>
          <p>
            But section 469(e)(2) contains its own relief for closely held C
            corporations, ending with the sentence:
          </p>
          <blockquote>
            <p>
              &ldquo;A similar rule shall apply in the case of any passive
              activity credit.&rdquo;
            </p>
          </blockquote>
          <p>
            That sentence is not a carveout from section 469; it is a provision
            inside it. <strong>The preamble does not address it.</strong> Whether
            a closely held C corporation with net active income may apply that
            relief to a purchased credit is, so far as we can find, unanswered in
            the published guidance &mdash; and it determines whether an entire
            class of mid-sized buyers is in the market or out of it.
          </p>
          <p>
            <strong>Who could answer.</strong> A practitioner who has applied
            section 469(e)(2) to a purchased credit on a filed return.
          </p>
        </Question>

        <Question n={7} title="Which states have not adopted section 6418 at all?">
          <p>
            <strong>The question.</strong> Section 6418(b)(2) excludes the
            proceeds from the seller&rsquo;s gross income as a matter of federal
            law. State conformity is a separate question, and sellers usually
            encounter it after price is agreed.
          </p>
          <p>
            <strong>Where the text stops.</strong> Section 6418 was enacted
            August 16, 2022. A state whose conformity date precedes that has, as
            a matter of that state&rsquo;s law, no section 6418 to apply &mdash;
            and falls back to the general rule of section 61. The final transfer
            regulations were issued in April 2024, which creates a second date a
            state may or may not have reached.
          </p>
          <p>
            <strong>We do not have a verified state-by-state table</strong>, and
            we are deliberately not publishing one assembled from secondary
            commentary. Conformity dates move by statute every year, and a table
            that is wrong is worse than no table. What we would like is a source
            that is maintained.
          </p>
          <p>
            <strong>Who could answer.</strong> State and local tax practitioners;
            a maintained conformity survey with citations to the state codes.
          </p>
        </Question>

        <Question n={8} title="Can a surety bond stand behind a tax indemnity?">
          <p>
            <strong>The question.</strong> Tax credit insurance has a minimum
            premium that makes it uneconomic below a certain deal size.
            Guaranties are the usual substitute. Surety is occasionally mentioned
            as a third option, and we have not been able to establish whether it
            actually works here.
          </p>
          <p>
            <strong>Where the text stops.</strong> This is not a section 6418
            question &mdash; nothing in the statute or regulations speaks to it.
            It is a question about what a surety will write. A tax indemnity
            obligation is contingent, potentially long-tailed under the five-year
            recapture period, and triggered by a determination the obligee does
            not control.{" "}
            <strong>
              We have not found a surety product described as covering it
            </strong>
            , and we have not found a clear statement that none exists.
          </p>
          <p>
            <strong>Who could answer.</strong> A surety underwriter; counsel who
            has tried to place one.
          </p>
        </Question>

        <section className="mt-16 pt-10 border-t-2 border-slate-300">
          <h2 className="!mt-0">About this page</h2>
          <p>
            We are a specialist in section 6418 credit transfers at the smaller
            end of the market. This list exists because the questions on it come
            up in real transactions and we have not found published answers.
          </p>
          <p>
            <strong>
              If you can answer one of these &mdash; or tell us the question is
              wrong &mdash; we would like to hear from you, and we will say on
              this page that you did.
            </strong>
          </p>
          <p>
            <strong>Zhenghong Zhu</strong>, Founder, Aethermind LLC &middot;{" "}
            <a href="mailto:ceo@aethervibe.com">ceo@aethervibe.com</a>
          </p>
          <p>
            <em>Nothing on this page is tax or legal advice.</em>
          </p>
        </section>
      </div>
    </main>
  );
}
