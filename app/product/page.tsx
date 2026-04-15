import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product — Warden",
  description:
    "Warden sits in front of your LLM calls and makes real-time decisions — block, route, enforce. Control how AI is used across your system without changing your application code.",
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
      <section className="max-w-4xl mx-auto px-8 pt-24 pb-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
          Enforce. Attribute. Control.
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Warden sits in front of your LLM calls and makes real-time decisions. Block requests when budgets hit. Route to cheaper models based on your rules. Attribute every dollar to the exact feature, team, or customer that spent it.
        </p>
      </section>

      {/* Section 1 — Detect */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">01</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">Enforce</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Block requests before costs get out of hand
          </h2>
          <p className="text-slate-600 mb-16 max-w-2xl">
            Warden evaluates every request inline — before it hits your LLM provider. When a budget limit is reached, the request is blocked. Not flagged for review. Blocked.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Hard budget limits",
                body: "Set spend limits per feature, team, or customer. When the threshold hits, Warden blocks the request — not an alert, a block.",
              },
              {
                title: "Runaway protection",
                body: "A bug triggers 4,000 requests. Warden stops it at budget. Without it, no one notices until the invoice.",
              },
              {
                title: "Real-time alerts",
                body: "Get notified at 80% and 100% of budget via email or Slack. Know before the block fires.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Understand */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">02</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">Understand</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Understand exactly what caused it
          </h2>
          <p className="text-slate-600 mb-16 max-w-2xl">
            Every dollar of AI spend is attributed to the model, feature, team,
            and customer that generated it. No guesswork. No spreadsheets.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { dimension: "Model", example: "GPT-4o, Claude 3.5, Gemini" },
              { dimension: "Feature", example: "Chat, Search, Summarization" },
              { dimension: "Team", example: "Product, Growth, Internal Tools" },
              { dimension: "Customer", example: "Per-customer cost allocation" },
            ].map(({ dimension, example }) => (
              <div
                key={dimension}
                className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-sm"
              >
                <h3 className="font-semibold mb-1">{dimension}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{example}</p>
              </div>
            ))}
          </div>

          {/* Attribution detail */}
          <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="text-xs font-medium text-slate-400 mb-4">Attribution Breakdown — Last 30 Days</div>
            <div className="space-y-3">
              {[
                { label: "Chat → GPT-4o → Acme Corp", spend: "$2,140", pct: 38 },
                { label: "Search → Claude 3.5 → Beta Users", spend: "$1,680", pct: 30 },
                { label: "Summarization → GPT-4o-mini → Internal", spend: "$980", pct: 17 },
                { label: "Classification → Gemini 1.5 → All", spend: "$840", pct: 15 },
              ].map(({ label, spend, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-700">{label}</span>
                    <span className="text-slate-600 font-mono text-xs">{spend}</span>
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
        </div>
      </section>

      {/* Section 3 — Act */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">03</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">Route</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Change which model is used — without touching your code
          </h2>
          <p className="text-slate-600 mb-16 max-w-2xl">
            Define rules. Warden enforces them on every request. Dev environment uses GPT-4o-mini. Free users get the cheaper model. Near budget pressure — Warden downgrades automatically.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Environment routing",
                body: "Force cheaper models in dev and staging. Best models only in production. Zero app changes.",
              },
              {
                title: "Customer-tier routing",
                body: "Free users get routed to cost-efficient models. Paid users get full capability. Your rules, enforced inline.",
              },
              {
                title: "Budget-pressure downgrade",
                body: "When spend approaches the limit, Warden automatically downgrades to a cheaper model. No manual intervention.",
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

      {/* Multi-provider support */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold text-center mb-4">
            One control layer, every provider
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
            Enforce budgets, route requests, and attribute costs across OpenAI, Anthropic, and Google — from a single integration.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { provider: "OpenAI", models: "GPT-4o, GPT-4o-mini, o1, o3" },
              { provider: "Anthropic", models: "Claude 4, Claude 3.5 Sonnet, Haiku" },
              { provider: "Google", models: "Gemini 1.5 Pro, Gemini 1.5 Flash" },
            ].map(({ provider, models }) => (
              <div
                key={provider}
                className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm"
              >
                <h3 className="font-semibold mb-1">{provider}</h3>
                <p className="text-xs text-slate-400">{models}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer-friendly */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Developer-friendly integration
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
            Drop in the SDK and start tracking. No refactoring required.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-2">Drop-in SDK</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Install the Warden SDK and add a single line to your existing
                OpenAI, Anthropic, or Google client setup. Existing code stays the same.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-2">OpenAI-compatible API surface</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Warden mirrors the OpenAI API format. If your code already calls
                OpenAI, switching to Warden is a base URL change — nothing else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise readiness */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Enterprise-ready from day one
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "No prompt storage",
                  body: "Warden operates on metadata only. Prompts, responses, and request bodies are never stored.",
                },
                {
                  title: "Secure routing",
                  body: "All traffic is encrypted in transit. Provider API keys stay in your infrastructure.",
                },
                {
                  title: "Scalable architecture",
                  body: "Cloud-hosted or self-hosted in your own VPC. Handles millions of requests per day.",
                },
              ].map(({ title, body }) => (
                <div key={title}>
                  <h3 className="font-semibold text-emerald-400 mb-2">{title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
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
          <a href="mailto:amar@wardenai.dev" className="hover:text-slate-600 transition-colors">Contact</a>
          <a href="mailto:privacy@wardenai.dev" className="hover:text-slate-600 transition-colors">Privacy</a>
          <a href="mailto:security@wardenai.dev" className="hover:text-slate-600 transition-colors">Security</a>
        </div>
      </footer>
    </main>
  );
}
