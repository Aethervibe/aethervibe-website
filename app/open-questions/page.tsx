import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Questions in Transferable Tax Credits | Aethervibe",
  description:
    "The unsolved questions in the transferable tax credit market (IRC §6418 and adjacent): what small sellers actually net, whether the $1–5M segment clears, surety-only buyers, the institutional service floor, transfer mechanics, and the survival of transferability itself.",
  alternates: {
    canonical: "https://www.aethervibe.com/open-questions",
  },
  openGraph: {
    title: "Open Questions in Transferable Tax Credits",
    description:
      "The questions we have not been able to answer from public sources — the honest boundary of our research on the transferable tax credit market. Maintained as a living document; answered questions are credited by name.",
    url: "https://www.aethervibe.com/open-questions",
    type: "article",
  },
};

// Evaluated at build time for this statically generated page.
const BUILD_DATE = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Open Questions in Transferable Tax Credits",
  description:
    "A maintained list of unsolved questions in the transferable tax credit market (IRC §6418 and adjacent), stating for each what can be established from public sources and what remains open.",
  author: { "@type": "Organization", name: "Aethervibe" },
  publisher: { "@type": "Organization", name: "Aethervibe" },
  datePublished: "2026-09-06",
  dateModified: new Date().toISOString().slice(0, 10),
  mainEntityOfPage: "https://www.aethervibe.com/open-questions",
};

function Question({
  n,
  title,
  establish,
  open,
}: {
  n: number;
  title: string;
  establish: React.ReactNode;
  open: React.ReactNode;
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
      <h3 className="!mb-2">What we can establish</h3>
      <p className="!mt-0">{establish}</p>
      <h3 className="!mb-2">What remains open</h3>
      <p className="!mt-0">{open}</p>
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
            Living research document
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Open Questions in Transferable Tax Credits
          </h1>
          <p className="text-gray-300 text-lg">
            The unsolved questions in the transferable tax credit market (IRC
            &sect;6418 and adjacent) &mdash; the honest boundary of what we
            know.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
            <span>Maintained by Aethervibe</span>
            <span>&middot;</span>
            <span>Last updated {BUILD_DATE}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16 prose prose-lg prose-slate max-w-none">
        <p>
          This market is young and thinly documented. These are the questions we
          have not been able to answer from public sources &mdash; the honest
          boundary of our research.
        </p>
        <p>
          <strong>
            If you can answer one of them, write to{" "}
            <a href="mailto:ceo@aethervibe.com">ceo@aethervibe.com</a>.
            Answered questions are credited by name.
          </strong>
        </p>

        <Question
          n={1}
          title="What do sellers of small transferable credits actually net?"
          establish={
            <>
              Published gross pricing indications exist for large deals, and the
              cost categories a seller faces on the way to closing &mdash;
              advisors, insurance, diligence &mdash; are well known. At the
              large end of the market, the gross side of the trade is reasonably
              visible.
            </>
          }
          open={
            <>
              For sub-$5M credits, net-of-all-costs proceeds data is essentially
              undocumented. No public source shows what a small seller actually
              keeps after every cost is paid &mdash; and net, not gross, is the
              number that decides whether a small transfer is worth doing.
            </>
          }
        />

        <Question
          n={2}
          title="Is there a clearing price for $1–5M credits — or does the segment simply not clear?"
          establish={
            <>
              Two hypotheses both fit the observable facts: (a) this is genuine
              white space awaiting infrastructure, or (b) the economics simply
              do not close at this size. Each explains the same visible pattern
              of thin activity in the segment.
            </>
          }
          open={
            <>
              Public evidence distinguishing the two hypotheses is thin. We have
              found nothing that separates &ldquo;deals not happening because no
              one serves them&rdquo; from &ldquo;deals not happening because
              they cannot pencil&rdquo; &mdash; and the two imply opposite
              conclusions about the segment.
            </>
          }
        />

        <Question
          n={3}
          title="Does anyone buy small credits on surety/guarantee protection alone, without traditional tax insurance?"
          establish={
            <>
              Minimum-premium economics make traditional tax credit insurance
              impractical at small face amounts. Guarantees and surety
              instruments are the substitutes most often discussed for
              protecting a buyer at this size.
            </>
          }
          open={
            <>
              Whether a bond-only or guarantee-only buyer segment actually
              exists is unresolved. We have not found a documented transaction
              in which a buyer closed a small credit purchase on surety or
              guarantee protection alone.
            </>
          }
        />

        <Question
          n={4}
          title="What is the institutional service floor across credit types?"
          establish={
            <>
              Law firms, insurers, and platforms each have a minimum deal size
              below which they will not engage, and practitioners acknowledge
              these floors readily in conversation. The floor exists in every
              credit market; it is simply not written down.
            </>
          }
          open={
            <>
              That minimum has never been published &mdash; and never compared
              across renewable ITC, LIHTC, historic rehabilitation, and
              conservation credits. Whether the floor sits at the same level in
              each market, and why, is unknown from public sources.
            </>
          }
        />

        <Question
          n={5}
          title="How do §6418 payment-timing and transferee-year mechanics work in practice?"
          establish={
            <>
              The statute and final regulations set out the cash-payment
              requirement, the transfer election procedure, and the
              transferee&rsquo;s taxable-year rule in general terms. The
              framework is clear at the level of principle.
            </>
          }
          open={
            <>
              Several mechanical questions remain thinly documented in guidance
              and commentary: the payment windows between commitment and
              transfer election, and the transferee&rsquo;s tax-year mechanics.
              How these rules resolve in edge cases is not worked through in any
              published source we have found.
            </>
          }
        />

        <Question
          n={6}
          title="Will transferability itself survive?"
          establish={
            <>
              Legislative and regulatory risk to &sect;6418 is the single
              variable that could reprice everything in this market. Adjacent
              markets &mdash; tax insurance and surety &mdash; price risk
              continuously, so their behavior carries information about how
              professionals handicap that risk.
            </>
          }
          open={
            <>
              What the early indicators to watch are, and what adjacent-market
              behavior (insurance appetite, surety appetite) already signals,
              has not been analyzed in any public source we have found. A
              watchlist for the survival of transferability does not yet exist.
            </>
          }
        />

        <section className="mt-16 pt-10 border-t-2 border-slate-300">
          <h2 className="!mt-0">About this page</h2>
          <p>
            These questions come up in real work on transferable tax credits and
            we have not found published answers. If you can answer one of them
            &mdash; or tell us the question is wrong &mdash; write to us, and we
            will say on this page that you did.
          </p>
          <p>
            <strong>Zhenghong Zhu</strong>, Founder, Aethermind LLC &middot;{" "}
            <a href="mailto:ceo@aethervibe.com">ceo@aethervibe.com</a>
          </p>
          <p>
            Last updated: {BUILD_DATE}. This page is maintained as a living
            document.
          </p>
          <p>
            <em>Nothing on this page is tax or legal advice.</em>
          </p>
        </section>
      </div>
    </main>
  );
}
