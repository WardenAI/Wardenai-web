import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product — Warden",
  description:
    "See how Warden gives FinOps teams real-time visibility into AI API spend across OpenAI, Anthropic, and Google.",
};

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <Link href="/">
          <Image src="/logo.svg" alt="Warden" width={140} height={36} priority />
        </Link>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <Link href="/product" className="text-slate-900 font-medium">Product</Link>
          <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
          <Link href="/blog" className="hover:text-slate-900 transition-colors">Blog</Link>
          <a
            href="mailto:amar@wardenai.dev"
            className="hover:text-slate-900 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
          AI cost visibility your
          <br />
          <span className="text-slate-400">CFO will actually trust</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Warden intercepts every LLM API call, attributes cost to the team,
          feature, and customer that caused it, and surfaces it in dashboards
          built for FinOps — not developers.
        </p>
      </section>

      {/* Core Capabilities */}
      <section className="max-w-5xl mx-auto px-8 py-16 border-t border-slate-100">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Built for cost governance
        </h2>
        <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
          Everything a FinOps team needs to track, attribute, and control AI spend.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Cost Attribution",
              body: "Break down AI spend by feature, team, customer, environment, and model. Know exactly who is spending what and why.",
            },
            {
              title: "Budget Alerts",
              body: "Set spend limits per team, feature, or workspace. Get notified before budgets are exceeded — not after.",
            },
            {
              title: "Multi-Provider Support",
              body: "Single pane of glass across OpenAI, Anthropic, and Google. Unified cost view regardless of which models your teams use.",
            },
            {
              title: "Chargeback Reports",
              body: "Generate cost allocation reports by team and business unit. Export to CSV for finance systems and internal billing.",
            },
            {
              title: "Real-Time Dashboards",
              body: "Daily cost trends, top features by spend, model usage breakdown, and anomaly detection — updated in real time.",
            },
            {
              title: "Governance & Policy",
              body: "Inventory every model and provider in use across your organization. Enforce approved model lists and usage policies.",
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6"
            >
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-8 py-16 border-t border-slate-100">
        <h2 className="text-2xl font-semibold text-center mb-4">
          How it works
        </h2>
        <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">
          Your engineering team connects Warden in minutes. You get full cost visibility from day one.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Connect",
              body: "Your engineering team adds the Warden SDK to your AI applications. Existing code stays the same — no refactoring required.",
            },
            {
              step: "2",
              title: "See",
              body: "Every AI API call is automatically attributed by feature, team, customer, and environment. Costs appear in your dashboard in real time.",
            },
            {
              step: "3",
              title: "Control",
              body: "Set budgets, receive alerts before limits are breached, generate chargeback reports, and enforce governance policies across your organization.",
            },
          ].map(({ step, title, body }) => (
            <div
              key={step}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 font-semibold flex items-center justify-center mx-auto mb-4">
                {step}
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For FinOps Teams */}
      <section className="max-w-4xl mx-auto px-8 py-16 border-t border-slate-100">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Purpose-built for FinOps
        </h2>
        <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">
          Developer observability tools show traces and latency.
          Warden shows dollars and attribution.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { role: "FinOps Managers", need: "See total AI spend by team and business unit, generate chargeback reports, set budget guardrails" },
            { role: "Engineering Leaders", need: "Understand which features and services drive AI cost, compare model efficiency, spot anomalies" },
            { role: "Finance / CFO", need: "Forecast AI infrastructure costs, allocate spend to P&Ls, audit usage against contracts" },
            { role: "IT Governance", need: "Inventory all AI models and providers in use, enforce approved model policies, audit access" },
          ].map(({ role, need }) => (
            <div
              key={role}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6"
            >
              <h3 className="font-semibold text-emerald-600 mb-2 text-sm uppercase tracking-wide">{role}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{need}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deployment Options */}
      <section className="max-w-4xl mx-auto px-8 py-16 border-t border-slate-100">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Deploy your way
        </h2>
        <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">
          Cloud-hosted for fast onboarding. Self-hosted for full data control.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Cloud (Managed)</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Warden-hosted gateway on AWS. Get started in minutes with
              just an API key. We handle infrastructure, scaling, and updates.
            </p>
            <span className="text-xs text-slate-400 font-mono">All tiers</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Self-Hosted</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Run Warden in your own VPC with Docker Compose or Kubernetes.
              Your data never leaves your infrastructure.
              Provider keys stay in your secrets manager.
            </p>
            <span className="text-xs text-slate-400 font-mono">Enterprise</span>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="max-w-4xl mx-auto px-8 py-16 border-t border-slate-100">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Privacy by architecture
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed mb-6">
            Warden never stores prompt content, completion text, or raw request bodies.
            This isn&apos;t a policy toggle — it&apos;s an architectural guarantee enforced by
            CI tests on every commit. Your IP stays between your application and the LLM provider.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["No prompt storage", "No response logging", "CI-enforced", "SOC 2 planned"].map((item) => (
              <span key={item} className="bg-white border border-slate-200 rounded-full px-4 py-1.5 text-slate-600">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-slate-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Start tracking AI spend today
        </h2>
        <p className="text-slate-500 mb-8">
          Free tier: 100K API events/month (covers ~$5K in AI spend*). No credit card required.
          <br />
          <span className="text-xs text-slate-400">*Spend estimate based on typical GPT-4o/Claude 3 pricing. Limits enforced by event count.</span>
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
          <a href="mailto:amar@wardenai.dev" className="hover:text-slate-600 transition-colors">Contact</a>
          <a href="mailto:privacy@wardenai.dev" className="hover:text-slate-600 transition-colors">Privacy</a>
          <a href="mailto:security@wardenai.dev" className="hover:text-slate-600 transition-colors">Security</a>
        </div>
      </footer>
    </main>
  );
}
