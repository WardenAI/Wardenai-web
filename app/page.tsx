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
            className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Talk to Us
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-8 pt-24 pb-24 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Your AI layer.
          <br />
          <span className="text-slate-400">Under control.</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Warden sits in front of your LLM calls and makes real-time decisions — block, route, enforce — based on rules you define. When a bug triggers thousands of requests, Warden stops it. When free users hit expensive models, Warden reroutes them. No code changes. Point your SDK at Warden.
        </p>

        <div className="flex items-center gap-4 justify-center">
          <a
            href="https://control.wardenai.dev/signup"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-base"
          >
            Get Started Free
          </a>
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-slate-600 font-semibold px-6 py-3 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors text-base"
          >
            View Product
          </Link>
        </div>

        <p className="text-sm text-slate-400 mt-4">
          We never store your prompt content. Ever.
        </p>
      </section>

      {/* Problem */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold text-center mb-4">
            AI costs don&apos;t drift. They spike.
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
            By the time the invoice arrives, the damage is done.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "A bug triggers a request loop. 4,000 calls fire before anyone notices.",
              "A model change doubles cost per request — silently.",
              "One feature drives 70% of your AI bill. No one knows which one.",
              "Finance sees the number. Engineering can't explain it.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl px-5 py-4 text-sm text-slate-700"
              >
                <span className="text-red-400 text-lg">&#10005;</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Enforce. Attribute. Control.
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
            Warden doesn&apos;t just report on your AI usage — it governs it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Enforcement",
                body: "Set hard limits per feature, team, or customer. When the budget hits, Warden blocks the request. Not an alert. A block.",
              },
              {
                title: "Attribution",
                body: "Every request tagged by feature, team, and customer. You know exactly what caused the spike.",
              },
              {
                title: "Routing",
                body: "Define rules. Warden routes automatically. Dev uses GPT-4o-mini. Free users get the cheaper model. No app changes.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm"
              >
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product UI */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold text-center mb-4">
            See every decision Warden made — and why
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
            Every request shows: original model, final model, decision taken, reason. Full audit trail. No black boxes.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            {/* Mock Control Center header */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium text-slate-700">Control Center</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span>Last 30 days</span>
                <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">Live</span>
              </div>
            </div>

            <div className="p-6 bg-slate-50">
              {/* Summary row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Total Spend", value: "$12,847", change: "+8.3%" },
                  { label: "Requests", value: "1.2M", change: "+12.1%" },
                  { label: "Avg Cost/Req", value: "$0.0107", change: "-2.4%" },
                  { label: "Active Models", value: "6", change: "" },
                ].map(({ label, value, change }) => (
                  <div key={label} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    <div className="text-xs text-slate-400 mb-1">{label}</div>
                    <div className="text-lg font-semibold text-slate-900">{value}</div>
                    {change && (
                      <div className={`text-xs mt-1 ${change.startsWith("-") ? "text-emerald-600" : "text-slate-400"}`}>
                        {change} vs prev period
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Cost by model breakdown */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-4">
                <div className="text-xs font-medium text-slate-400 mb-3">Spend by Model</div>
                <div className="space-y-3">
                  {[
                    { model: "GPT-4o", spend: "$5,142", pct: 40 },
                    { model: "Claude 3.5 Sonnet", spend: "$3,854", pct: 30 },
                    { model: "GPT-4o-mini", spend: "$2,056", pct: 16 },
                    { model: "Gemini 1.5 Pro", spend: "$1,795", pct: 14 },
                  ].map(({ model, spend, pct }) => (
                    <div key={model}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-700">{model}</span>
                        <span className="text-slate-600">{spend}</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top features */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <div className="text-xs font-medium text-slate-400 mb-3">Top Features by Cost</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { feature: "Chat", spend: "$4,210" },
                    { feature: "Summarization", spend: "$3,180" },
                    { feature: "Search", spend: "$2,940" },
                    { feature: "Classification", spend: "$2,517" },
                  ].map(({ feature, spend }) => (
                    <div key={feature} className="text-center bg-slate-50 rounded-xl py-3 px-2">
                      <div className="text-sm font-medium text-slate-700">{feature}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{spend}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold text-center mb-16">
            How it works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Point your SDK at Warden",
                body: "Warden mirrors your LLM provider's API surface exactly. No code changes. No refactoring. One config update.",
              },
              {
                step: "02",
                title: "Warden makes decisions on every request",
                body: "Budget check. Policy check. Routing rules. All evaluated inline, before the request hits your provider.",
              },
              {
                step: "03",
                title: "You see everything",
                body: "Every decision logged. Every cost attributed. Every block explained. You're in control — and you can prove it.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
              >
                <div className="text-xs font-mono text-slate-400 mb-3">{step}</div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control / Enforcement */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Rules you define. Decisions Warden makes.
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
            Not alerts you act on later — enforcement that happens now.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Block",
                body: "Hard stop when a budget limit is reached. The request never hits the provider. No alert to act on — it's already done.",
              },
              {
                title: "Route",
                body: "Automatically switch models based on feature, environment, or customer. Cheaper model in dev. Best model for paid users.",
              },
              {
                title: "Enforce",
                body: "Restrict which models are allowed across your system. Prevent teams from reaching for GPT-4 when GPT-4o-mini will do.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="bg-emerald-50 border border-emerald-200 rounded-xl p-6"
              >
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Privacy */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              We never see your prompts
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Warden operates on metadata — model, cost, tags. We never store prompts, responses, or request bodies. Your data travels directly between your application and the LLM provider.
            </p>
            <p className="text-emerald-400 font-medium">
              This isn&apos;t a policy — it&apos;s how the system is built.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-8 py-24 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Put your AI layer under control
          </h2>
          <p className="text-slate-600 mb-8">
            Start free. Add enforcement as you grow.
          </p>
          <a
            href="https://control.wardenai.dev/signup"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-base"
          >
            Get Started Free
          </a>
        </div>
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
