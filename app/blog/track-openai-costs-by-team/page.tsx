import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your OpenAI Bill Doubled Last Month. Here's How to Find Out Why. — Warden",
  description:
    "A practical framework for breaking down AI API costs by team, feature, and customer. Stop guessing where your LLM spend is going.",
  openGraph: {
    title: "Your OpenAI Bill Doubled Last Month. Here's How to Find Out Why.",
    description:
      "Most companies have no idea which team or feature is driving their LLM spend. Here's how to fix that.",
    url: "https://wardenai.dev/blog/track-openai-costs-by-team",
  },
};

export default function Post() {
  return (
    <article className="max-w-2xl mx-auto px-8 py-16">
      <Link
        href="/blog"
        className="text-sm text-slate-400 hover:text-slate-600 transition-colors mb-8 block"
      >
        &larr; Back to blog
      </Link>

      <p className="text-sm text-slate-400 mb-4">March 18, 2026 &middot; 7 min read</p>

      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-8">
        Your OpenAI Bill Doubled Last Month. Here&apos;s How to Find Out Why.
      </h1>

      <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
        <p>
          You opened your OpenAI dashboard and the number was twice what you expected. Maybe three
          times. You checked Anthropic next — same story. Your company is spending more on AI APIs
          every month, and nobody can tell you exactly why.
        </p>

        <p>
          You&apos;re not alone. This is happening at nearly every company that moved LLM features
          into production in the last 12 months. The bill grows, but the breakdown doesn&apos;t
          exist. OpenAI gives you a monthly total. Anthropic gives you a usage chart. Neither tells
          you which team, which feature, or which customer is driving the spend.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 pt-4">The spreadsheet phase</h2>

        <p>
          Most teams start the same way: someone exports the monthly invoice, opens a spreadsheet,
          and tries to manually tag API calls to teams. Maybe they grep through logs looking for
          model names. Maybe they ask each team lead to estimate their usage.
        </p>

        <p>
          This works for about one month. Then it breaks because:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Multiple teams share the same API key.</strong> You can&apos;t attribute a call
            to a team if three teams use the same key.
          </li>
          <li>
            <strong>Models change mid-month.</strong> Someone switches from GPT-4 to GPT-4o halfway
            through the billing cycle. Your spreadsheet assumptions are wrong.
          </li>
          <li>
            <strong>Costs vary per request.</strong> A customer support chatbot and a document
            summarizer both use GPT-4o, but the summarizer sends 10x more tokens per call. Volume
            alone doesn&apos;t explain the bill.
          </li>
          <li>
            <strong>Nobody maintains the spreadsheet.</strong> The person who built it goes on
            vacation. The spreadsheet is two weeks stale by the time anyone looks at it again.
          </li>
        </ul>

        {/* Visual: Attribution gap */}
        <div className="my-8">
          <Image
            src="/blog-attribution-gap.svg"
            alt="What your provider shows vs what you actually need — cost attribution by feature"
            width={600}
            height={280}
            className="rounded-xl border border-slate-200"
          />
        </div>

        <h2 className="text-xl font-semibold text-slate-900 pt-4">
          What you actually need: cost attribution at the API call level
        </h2>

        <p>
          The only way to reliably track AI costs by team is to tag every API call at the point
          where it happens — in the code, at request time. Not after the fact. Not from logs. Not
          from spreadsheets.
        </p>

        <p>Here&apos;s what that looks like in practice:</p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4">
          <p className="font-semibold text-slate-900">Every LLM request should carry:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Feature</strong> — which product feature triggered this call (e.g., &quot;chat-support&quot;, &quot;doc-summarizer&quot;)</li>
            <li><strong>Team</strong> — which engineering team owns this code path</li>
            <li><strong>Customer ID</strong> — if the call is on behalf of a specific customer</li>
            <li><strong>Environment</strong> — production, staging, or development</li>
          </ul>
        </div>

        <p>
          With these four dimensions tagged on every request, you can answer any question finance
          or leadership throws at you:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>&quot;How much did the product team spend on GPT-4o last month?&quot;</li>
          <li>&quot;What&apos;s the AI cost per customer for our enterprise tier?&quot;</li>
          <li>&quot;How much are we spending on staging vs. production?&quot;</li>
          <li>&quot;Which feature is growing the fastest in cost?&quot;</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 pt-4">
          The three approaches to implementing this
        </h2>

        <p>
          <strong>1. Build it yourself.</strong> Wrap every LLM call with logging that captures
          model, tokens, and your tag dimensions. Write the data to a database. Build dashboards.
          Maintain the pricing table as providers change rates. This works, but it&apos;s a
          multi-sprint project that nobody wants to own long-term.
        </p>

        <p>
          <strong>2. Use your cloud provider&apos;s tooling.</strong> AWS Cost Explorer, GCP
          Billing, Azure Cost Management — none of them understand LLM token-level costs. They see
          EC2 instances and Lambda invocations, not GPT-4o prompt tokens. This is a dead end for
          API-based AI spend.
        </p>

        <p>
          <strong>3. Use a purpose-built AI cost management tool.</strong> A layer that sits between
          your application and the LLM provider, intercepts every request, tags it with your
          dimensions, calculates the cost in real-time, and gives you a dashboard that finance
          actually understands. No spreadsheets. No log parsing. No maintenance burden.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 pt-4">The math that matters</h2>

        <p>
          Here&apos;s why this is urgent, not just important: AI API costs compound differently
          than cloud infrastructure costs.
        </p>

        <p>
          With cloud, you provision a server and the cost is predictable. With AI APIs, every user
          interaction generates a variable cost. More users, more tokens, more money — and the
          relationship isn&apos;t linear. A single poorly designed prompt template can cost 5-10x
          more than an optimized one, and you won&apos;t know until you measure it.
        </p>

        <p>
          Companies spending $20K/month on AI APIs today are projecting $100K+ within 12 months as
          they roll out more AI features. Without attribution, that growth is invisible until the
          invoice arrives.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 pt-4">Start before the next bill</h2>

        <p>
          The best time to instrument your AI spend was when you first deployed to production. The
          second best time is before your next monthly invoice. Tag your calls, break down the
          numbers, and give your finance team something they can actually work with.
        </p>

        <p>
          The companies that get ahead of this now will have 12 months of cost data by the time
          their competitors are still arguing over spreadsheets.
        </p>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mt-8">
          <p className="font-semibold text-slate-900 mb-2">
            This is what we built Warden for.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Warden gives FinOps teams real-time AI cost attribution across OpenAI, Anthropic, and
            Google — by feature, team, customer, and environment. No spreadsheets, no log parsing.
          </p>
          <a
            href="mailto:amar@wardenai.dev?subject=Warden Early Access"
            className="inline-block mt-4 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            Request early access &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}
