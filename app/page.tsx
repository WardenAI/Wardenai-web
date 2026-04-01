import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <Image src="/logo.svg" alt="Warden" width={140} height={36} priority />
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <Link href="/product" className="hover:text-slate-900 transition-colors">Product</Link>
          <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
          <Link href="/blog" className="hover:text-slate-900 transition-colors">Blog</Link>
          <a
            href="mailto:amar@wardenai.dev"
            className="hover:text-slate-900 transition-colors"
          >
            Contact
          </a>
          <a
            href="mailto:amar@wardenai.dev?subject=Warden Inquiry"
            className="bg-emerald-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Talk to Us
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-8 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 text-sm text-emerald-700 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Free tier: 100K events/month (~$5K AI spend estimate)
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          AI spend visibility
          <br />
          <span className="text-slate-400">for FinOps teams</span>
        </h1>

        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Warden sits between your applications and LLM providers — OpenAI,
          Anthropic, Gemini — to intercept, attribute, and govern every dollar
          of AI API spend. No spreadsheets. No guesswork.
        </p>

        <a
          href="https://www.npmjs.com/package/@wardenai/sdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-emerald-700 transition-colors text-base"
        >
          View SDK on npm
        </a>

        <p className="text-sm text-slate-400 mt-4">
          We never store your prompt content. Ever.
        </p>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-slate-100">
        <h2 className="text-2xl font-semibold text-center mb-14">
          How it works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Point your SDK at Warden",
              body: "Change one base URL. Warden mirrors the OpenAI API surface — no code changes required.",
            },
            {
              step: "02",
              title: "Tag your requests",
              body: "Add feature, team, customer, and environment tags. Warden attributes every token to the right owner.",
            },
            {
              step: "03",
              title: "See exactly where money goes",
              body: "Real-time dashboards break spend down by model, provider, feature, and team. Set budgets and alerts.",
            },
          ].map(({ step, title, body }) => (
            <div
              key={step}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6"
            >
              <div className="text-xs font-mono text-slate-400 mb-3">{step}</div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Warden tracks */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-slate-100">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Full cost attribution — across every dimension
        </h2>
        <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
          Warden records the operational metadata your finance and engineering
          teams need. Nothing more.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "Model & provider",
            "Feature / product area",
            "Team or service",
            "Customer ID",
            "Environment",
            "Token counts",
            "Calculated cost (USD)",
            "Streaming interruptions",
            "Budget warnings",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700"
            >
              <span className="text-emerald-600">&#10003;</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-slate-100">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            We never see your prompts
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Warden processes your request to extract routing metadata, then
            forwards it unmodified to the LLM provider. Prompt content,
            completion text, and raw request bodies are never written to any
            queue, database, or log. This is an architectural guarantee — not a
            policy.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-slate-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Know what your AI actually costs
        </h2>
        <p className="text-slate-500 mb-8">
          Free tier: 100K API events/month (covers ~$5K in AI spend*). No credit card required.
        </p>
        <p className="text-xs text-slate-400 mb-6">
          *Spend estimate based on typical GPT-4o/Claude 3 pricing. Actual limit enforced by event count, not spend.
        </p>
        <a
          href="https://www.npmjs.com/package/@wardenai/sdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-emerald-700 transition-colors text-base"
        >
          View SDK on npm
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 px-8 py-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <span>&copy; 2026 Warden AI LLC. All rights reserved.</span>
        <div className="flex gap-6">
          <a
            href="mailto:amar@wardenai.dev"
            className="hover:text-slate-600 transition-colors"
          >
            Contact
          </a>
          <a
            href="mailto:privacy@wardenai.dev"
            className="hover:text-slate-600 transition-colors"
          >
            Privacy
          </a>
          <a
            href="mailto:security@wardenai.dev"
            className="hover:text-slate-600 transition-colors"
          >
            Security
          </a>
        </div>
      </footer>
    </main>
  );
}
