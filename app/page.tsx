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
          Free tier: 100K events/month — no credit card required
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Control your AI spend
          <br />
          <span className="text-slate-400">in real time</span>
        </h1>

        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Warden sits between your application and LLM providers to enforce
          budgets, prevent runaway usage, and give teams real-time control
          over AI costs — without ever accessing your data.
        </p>

        <div className="flex items-center gap-4 justify-center">
          <a
            href="https://dashboard.wardenai.dev/signup"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-emerald-700 transition-colors text-base"
          >
            Get Started Free
          </a>
          <a
            href="https://www.npmjs.com/package/@wardenai/sdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-600 font-semibold px-8 py-3.5 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors text-base"
          >
            View SDK on npm
          </a>
        </div>

        <p className="text-sm text-slate-400 mt-4">
          We never store your prompts. Ever. It&apos;s architectural — not a policy.
        </p>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-slate-100">
        <h2 className="text-2xl font-semibold text-center mb-4">
          AI costs are easy to generate — hard to control
        </h2>
        <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
          Most teams can see their AI spend. Few can stop it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Costs spike without warning",
            "No guardrails across teams or features",
            "Finance lacks real-time control",
            "Engineering has no enforcement layer",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-lg px-5 py-4 text-sm text-slate-700"
            >
              <span className="text-red-400 text-lg">&#10005;</span>
              {item}
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 mt-8">
          Warden fixes this by putting control where it belongs — in the request path.
        </p>
      </section>

      {/* How it works — reframed as control */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-slate-100">
        <h2 className="text-2xl font-semibold text-center mb-14">
          From visibility to control
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Route through Warden",
              body: "Point your SDK to Warden. We mirror your LLM provider's API surface — no code changes required.",
            },
            {
              step: "02",
              title: "Define policies",
              body: "Set budgets, limits, and rules across teams, features, and customers. Tag every request automatically.",
            },
            {
              step: "03",
              title: "Enforce in real time",
              body: "Block, throttle, or alert on requests before costs get out of hand. Stay in control as usage scales.",
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

      {/* Control section — NEW */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-slate-100">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Prevent runaway AI spend
        </h2>
        <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
          Warden doesn&apos;t just show you cost — it controls it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Hard budget limits", desc: "Block requests when spend thresholds are exceeded" },
            { title: "Policy-based enforcement", desc: "Rules across teams, features, and customers" },
            { title: "Real-time alerts", desc: "Get notified before thresholds are hit" },
            { title: "Granular control", desc: "Per-feature, per-customer, per-environment limits" },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-3 bg-emerald-50 border border-emerald-100 rounded-lg px-5 py-4"
            >
              <span className="text-emerald-600 mt-0.5">&#10003;</span>
              <div>
                <h3 className="font-semibold text-sm">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Attribution — secondary */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-slate-100">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Know exactly where your AI spend goes
        </h2>
        <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
          Track cost across every dimension that matters.
          Built for engineering and finance — without complexity.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "Model & provider",
            "Feature / product area",
            "Team or service",
            "Customer ID",
            "Environment",
            "Token counts & cost",
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

      {/* Privacy — elevated */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-slate-100">
        <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Full control — without touching your data
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
            Warden operates entirely on metadata. We never store prompts,
            responses, or request bodies. Your data stays private. Always.
          </p>
          <p className="text-emerald-400 font-medium">
            This isn&apos;t a policy — it&apos;s how the system is built.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-slate-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Take control of your AI costs
        </h2>
        <p className="text-slate-500 mb-8">
          Start free. No credit card required. Get visibility, enforce budgets,
          and prevent cost surprises — in minutes.
        </p>
        <a
          href="https://dashboard.wardenai.dev/signup"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-emerald-700 transition-colors text-base"
        >
          Get Started Free
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
