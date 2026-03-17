export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <span className="text-xl font-semibold tracking-tight">Warden</span>
        <a
          href="mailto:amar@wardenai.dev"
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-8 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-sm text-zinc-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Now in private beta
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          AI spend visibility
          <br />
          <span className="text-zinc-400">for FinOps teams</span>
        </h1>

        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Warden sits between your applications and LLM providers — OpenAI,
          Anthropic, Gemini — to intercept, attribute, and govern every dollar
          of AI API spend. No spreadsheets. No guesswork.
        </p>

        <a
          href="mailto:amar@wardenai.dev?subject=Warden Early Access"
          className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors text-base"
        >
          Join the waitlist
        </a>

        <p className="text-sm text-zinc-600 mt-4">
          We never store your prompt content. Ever.
        </p>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-zinc-900">
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
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
            >
              <div className="text-xs font-mono text-zinc-600 mb-3">{step}</div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Warden tracks */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-zinc-900">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Full cost attribution — across every dimension
        </h2>
        <p className="text-center text-zinc-400 mb-14 max-w-xl mx-auto">
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
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-300"
            >
              <span className="text-emerald-500">✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-zinc-900">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 sm:p-10 text-center">
          <div className="text-3xl mb-4">🔒</div>
          <h2 className="text-2xl font-semibold mb-4">
            We never see your prompts
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Warden processes your request to extract routing metadata, then
            forwards it unmodified to the LLM provider. Prompt content,
            completion text, and raw request bodies are never written to any
            queue, database, or log. This is an architectural guarantee — not a
            policy.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-zinc-900 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Know what your AI actually costs
        </h2>
        <p className="text-zinc-400 mb-8">
          Join the waitlist. Early access is free.
        </p>
        <a
          href="mailto:amar@wardenai.dev?subject=Warden Early Access"
          className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors text-base"
        >
          Get early access
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 px-8 py-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
        <span>© 2026 Warden. All rights reserved.</span>
        <div className="flex gap-6">
          <a
            href="mailto:amar@wardenai.dev"
            className="hover:text-zinc-400 transition-colors"
          >
            Contact
          </a>
          <a
            href="mailto:privacy@wardenai.dev"
            className="hover:text-zinc-400 transition-colors"
          >
            Privacy
          </a>
          <a
            href="mailto:security@wardenai.dev"
            className="hover:text-zinc-400 transition-colors"
          >
            Security
          </a>
        </div>
      </footer>
    </main>
  );
}
