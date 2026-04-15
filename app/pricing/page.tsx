import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Warden",
  description:
    "From visibility to full enforcement. Choose the level of AI cost control your team needs.",
};

const tiers = [
  {
    name: "Visibility",
    price: "$0",
    period: "forever",
    tagline: "See your AI usage and costs in one place",
    audience: "For individuals and early exploration",
    seats: "2 seats",
    features: [
      "Usage tracking across providers",
      "Basic cost dashboards",
      "Limited attribution (model-level)",
      "7-day data retention",
      "Community support",
    ],
    cta: "Get started free",
    href: "https://control.wardenai.dev/signup",
    highlight: false,
    badge: null,
    callout: null,
  },
  {
    name: "Awareness",
    price: "Starting at $499",
    period: "/month",
    tagline: "Understand what\u2019s driving your AI costs",
    audience: "Designed for early-stage AI usage. Scales as your usage grows.",
    seats: "5 seats",
    features: [
      "Model-level cost breakdown",
      "Feature-level attribution",
      "Alerts for unusual spikes",
      "Historical trends (30 days)",
      "Email support",
    ],
    cta: "Get started",
    href: "https://control.wardenai.dev/signup?intent=paid&plan=awareness",
    highlight: false,
    badge: null,
    callout: "+ usage-based pricing aligned with your AI spend",
  },
  {
    name: "Governance",
    price: "Starting at $2,000",
    period: "/month",
    tagline: "Define rules, monitor behavior, and influence AI spend across teams",
    audience: "For growing teams running AI in production",
    seats: "15 seats",
    features: [
      "Budget tracking per feature/team",
      "Configure policies (evaluation only)",
      "Customer-level attribution",
      "Advanced alerts (Slack, email)",
      "Team-level visibility",
      "Chargeback reports & CSV export",
      "90-day data retention",
      "Priority support",
      "Define cost guardrails (monitor + alert)",
    ],
    cta: "Get started",
    href: "https://control.wardenai.dev/signup?intent=paid&plan=governance",
    highlight: true,
    badge: "Best for growing teams",
    callout: "+ usage-based pricing aligned with your AI spend",
  },
  {
    name: "Control",
    price: "Starting at $5,000",
    period: "/month",
    tagline: "Actively enforce and control AI spend in real time",
    audience: "For companies where AI spend impacts revenue and margins",
    seats: "Unlimited seats",
    features: [
      "Inline decision enforcement (allow / block / modify)",
      "Hard budget enforcement (real-time block / throttle)",
      "Execute cost decisions in real time",
      "Automatically reroute to optimal models",
      "Runs inline with every AI request — not after the fact",
      "Self-hosted deployment option",
      "SSO / SAML (Okta, Azure AD)",
      "Unlimited data retention",
      "Custom integrations",
      "Dedicated support & custom SLA",
    ],
    cta: "Talk to us about control",
    href: "mailto:amar@wardenai.dev?subject=Warden Control Plan Inquiry",
    highlight: false,
    badge: "Full enforcement",
    callout: "+ usage-based pricing aligned with your AI spend",
  },
];

const comparisonRows = [
  { capability: "Cost visibility", free: true, awareness: true, governance: true, control: true },
  { capability: "Multi-provider support", free: true, awareness: true, governance: true, control: true },
  { capability: "Model-level attribution", free: false, awareness: true, governance: true, control: true },
  { capability: "Feature-level attribution", free: false, awareness: true, governance: true, control: true },
  { capability: "Customer-level attribution", free: false, awareness: false, governance: true, control: true },
  { capability: "Spike alerts", free: false, awareness: true, governance: true, control: true },
  { capability: "Advanced alerts (Slack)", free: false, awareness: false, governance: true, control: true },
  { capability: "Budget tracking", free: false, awareness: false, governance: true, control: true },
  { capability: "Policy configuration", free: false, awareness: false, governance: true, control: true },
  { capability: "Chargeback reports", free: false, awareness: false, governance: true, control: true },
  { capability: "Hard budget enforcement", free: false, awareness: false, governance: false, control: true },
  { capability: "Real-time blocking / throttling", free: false, awareness: false, governance: false, control: true },
  { capability: "Enforcement policies (fallback)", free: false, awareness: false, governance: false, control: true },
  { capability: "Self-hosted deployment", free: false, awareness: false, governance: false, control: true },
  { capability: "SSO / SAML", free: false, awareness: false, governance: false, control: true },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <Link href="/">
          <Image src="/logo.svg" alt="Warden" width={140} height={36} priority />
        </Link>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <Link href="/product" className="hover:text-slate-900 transition-colors">Product</Link>
          <Link href="/pricing" className="text-slate-900 font-medium">Pricing</Link>
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
      <section className="max-w-4xl mx-auto px-8 pt-24 pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Start free. Enforce when it matters.
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Every tier adds more control. Start with attribution and alerts.
          Scale to hard enforcement when your AI spend demands it.
        </p>
      </section>

      {/* Qualification line */}
      <section className="max-w-4xl mx-auto px-8 pb-16 text-center">
        <p className="text-base font-semibold text-slate-900">
          If you&apos;re spending more than $5K/month on AI, you need control — not just visibility.
        </p>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-6 flex flex-col ${
                tier.highlight
                  ? "bg-white border-2 border-emerald-500 shadow-lg"
                  : tier.name === "Control"
                  ? "bg-slate-900 text-white border border-slate-700"
                  : "bg-white border border-slate-200 shadow-sm"
              }`}
            >
              {tier.badge && (
                <span className={`text-xs font-semibold uppercase tracking-wide mb-4 ${
                  tier.name === "Control"
                    ? "text-emerald-400"
                    : "text-emerald-600"
                }`}>
                  {tier.badge}
                </span>
              )}
              <h3 className={`text-lg font-semibold mb-1 ${
                tier.name === "Control" ? "text-white" : ""
              }`}>
                {tier.name}
              </h3>
              <div className="mb-2">
                <span className="text-3xl font-bold">{tier.price}</span>
                <span className="text-sm text-slate-400">{tier.period}</span>
              </div>
              <p className={`text-sm font-medium mb-1 ${
                tier.name === "Control" ? "text-slate-200" : "text-slate-700"
              }`}>
                {tier.tagline}
              </p>
              <p className="text-xs text-slate-400 mb-4">
                {tier.audience}
              </p>
              <div className="text-xs text-slate-400 mb-6">
                {tier.seats}
              </div>

              <ul className="flex-1 space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-2 text-sm ${
                    tier.name === "Control" ? "text-slate-300" : "text-slate-600"
                  }`}>
                    <span className={`mt-0.5 ${
                      tier.name === "Control" ? "text-emerald-400" : "text-emerald-600"
                    }`}>&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {tier.callout && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 mb-6">
                  <p className="text-sm font-medium text-emerald-700">
                    {tier.callout}
                  </p>
                </div>
              )}


              <a
                href={tier.href}
                className={`text-center py-3 rounded-lg text-sm font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : tier.name === "Control"
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "bg-white text-slate-900 hover:bg-slate-50 border border-slate-300"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Compare plans
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
            Each tier adds stronger enforcement. Control tier is where Warden blocks, routes, and enforces in real time.
          </p>

          <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 pl-6 pr-4 font-medium text-slate-400">Capability</th>
                  <th className="text-center py-3 px-3 font-medium text-slate-400">Visibility</th>
                  <th className="text-center py-3 px-3 font-medium text-slate-400">Awareness</th>
                  <th className="text-center py-3 px-3 font-medium text-emerald-600">Governance</th>
                  <th className="text-center py-3 px-3 pr-6 font-medium text-slate-900">Control</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(({ capability, free, awareness, governance, control }, i) => (
                  <tr
                    key={capability}
                    className={`border-b border-slate-100 ${
                      i >= 10 ? "bg-slate-50" : ""
                    }`}
                  >
                    <td className={`py-3 pl-6 pr-4 ${
                      i >= 10 ? "text-slate-900 font-medium" : "text-slate-700"
                    }`}>
                      {capability}
                    </td>
                    <td className="text-center py-3 px-3">
                      {free
                        ? <span className="text-emerald-600">&#10003;</span>
                        : <span className="text-slate-300">&mdash;</span>}
                    </td>
                    <td className="text-center py-3 px-3">
                      {awareness
                        ? <span className="text-emerald-600">&#10003;</span>
                        : <span className="text-slate-300">&mdash;</span>}
                    </td>
                    <td className="text-center py-3 px-3">
                      {governance
                        ? <span className="text-emerald-600">&#10003;</span>
                        : <span className="text-slate-300">&mdash;</span>}
                    </td>
                    <td className="text-center py-3 px-3 pr-6">
                      {control
                        ? <span className="text-emerald-600 font-semibold">&#10003;</span>
                        : <span className="text-slate-300">&mdash;</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Buyer Journey */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Start simple. Scale to full control.
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
            Warden grows with your AI usage. Start anywhere and upgrade as your needs evolve.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "01", label: "Start with visibility into your AI spend" },
              { step: "02", label: "Understand what\u2019s driving costs" },
              { step: "03", label: "Set budgets and policies across teams" },
              { step: "04", label: "Enforce limits and control spend automatically" },
            ].map(({ step, label }) => (
              <div
                key={step}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
              >
                <div className="text-xs font-mono text-emerald-600 mb-2">{step}</div>
                <p className="text-sm text-slate-700 leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of not using */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold text-center mb-4">
            What happens without control?
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
            Most teams don&apos;t realize the cost of inaction until the bill arrives.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Unexpected spikes in AI bills with no warning",
              "No visibility into what caused them",
              "Features becoming unprofitable without anyone noticing",
              "No way to enforce limits before damage is done",
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

      {/* ROI + Value Framing */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                AI costs scale faster than expected
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Companies often underestimate how quickly AI spend grows as
                usage increases. A single feature launch or model upgrade can
                double costs overnight. Warden helps teams stay ahead by
                providing visibility early and control when it matters most.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Designed to pay for itself
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                If your team spends $20K/month on AI, reducing even a small
                percentage of unnecessary usage can save thousands.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <p className="text-sm text-slate-700">
                  Warden helps identify inefficiencies early and enforce limits
                  before costs grow out of control — quickly offsetting its own cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="max-w-3xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold text-center mb-16">
            Frequently asked questions
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "What\u2019s the difference between Governance and Control?",
                a: "Governance gives you budget tracking, policies, and team-level attribution \u2014 the tools to manage AI spend proactively. Control adds real-time enforcement: hard budget limits that block or throttle requests, fallback model policies, and automated cost guardrails. If you need to prevent cost overruns (not just see them), you need Control.",
              },
              {
                q: "Do you store my prompts or responses?",
                a: "No. Warden never stores prompt content, completion text, or raw request bodies. This is an architectural guarantee enforced by CI tests on every commit \u2014 not a policy setting.",
              },
              {
                q: "Can I try Warden before committing to a paid plan?",
                a: "Yes. The Visibility tier is permanent, not a trial. It gives you usage tracking and basic dashboards across all providers. No credit card required.",
              },
              {
                q: "How long does integration take?",
                a: "Most teams are up and running in under an hour. Install the SDK, set your Warden API key, and add a feature tag to your existing LLM calls. No infrastructure changes required.",
              },
              {
                q: "What if I need a custom plan?",
                a: "Control plans are fully customizable \u2014 custom SLAs, volume pricing, dedicated support, and self-hosted deployment. Contact us at amar@wardenai.dev.",
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="font-semibold mb-2">{q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-24 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Put your AI layer under control.
          </h2>
          <p className="text-slate-600 mb-8">
            No credit card. No commitment. Up and running in under an hour.
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
