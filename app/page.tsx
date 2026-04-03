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
          Control your AI spend
          <br />
          <span className="text-slate-400">before it spirals</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Warden shows exactly where your AI costs come from — by model,
          feature, and customer — and lets you set limits before bills
          get out of control.
        </p>

        <div className="flex items-center gap-4 justify-center">
          <a
            href="https://dashboard.wardenai.dev/signup"
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
            AI costs don&apos;t fail gradually. They spike.
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
            By the time you see the bill, the damage is done.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "A feature launch doubles token usage overnight",
              "A model change silently increases cost per request",
              "One customer drives a disproportionate share of spend",
              "Finance sees the bill — but not the cause",
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
            Visibility, attribution, and control — in one place
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
            Warden gives you the full picture and the tools to act on it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Visibility",
                body: "See total AI spend across providers and models in real time.",
              },
              {
                title: "Attribution",
                body: "Break costs down by feature, team, and customer.",
              },
              {
                title: "Control",
                body: "Set budgets, alerts, and enforce limits before costs escalate.",
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
            See exactly where your AI money goes
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
            Real-time visibility across models, features, teams, and customers.
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
                title: "Route your AI traffic through Warden",
                body: "Point your SDK to Warden. We mirror your LLM provider's API surface — no code changes required.",
              },
              {
                step: "02",
                title: "Automatically tag and attribute usage",
                body: "Every request is tagged by model, feature, team, and customer. Cost attribution happens automatically.",
              },
              {
                step: "03",
                title: "Monitor, alert, and control spend",
                body: "Set budgets and alerts. Enforce limits to block, throttle, or switch to fallback models before costs escalate.",
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
            Take action before costs explode
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
            Warden doesn&apos;t just show you cost — it enforces limits.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Set budgets",
                body: "Define spend limits per feature, team, or customer. Budgets reset automatically on your billing cycle.",
              },
              {
                title: "Trigger alerts",
                body: "Get notified via email or Slack before thresholds are crossed. No more bill surprises.",
              },
              {
                title: "Enforce limits",
                body: "Block requests, throttle usage, or fall back to cheaper models when budgets are exhausted.",
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
              Warden operates entirely on metadata. We never store prompts,
              responses, or request bodies. Your data stays between your
              application and the LLM provider.
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
            Know what your AI actually costs
          </h2>
          <p className="text-slate-600 mb-8">
            Start free. Scale to full control as your usage grows.
          </p>
          <a
            href="https://dashboard.wardenai.dev/signup"
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
