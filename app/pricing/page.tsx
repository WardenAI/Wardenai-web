import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Warden",
  description:
    "Simple, transparent pricing based on your AI spend. Free tier included. No credit card required.",
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    spend: "100K events/mo",
    spendLabel: "Usage limit",
    events: "~$5K/mo*",
    eventsLabel: "AI spend estimate",
    seats: "2 seats",
    features: [
      "Cost overview dashboard",
      "Attribution by feature, model, team",
      "Multi-provider support",
      "7-day data retention",
    ],
    cta: "Get started free",
    href: "https://dashboard.wardenai.dev/login",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    spend: "Up to $50K/mo",
    spendLabel: "AI spend tracked",
    seats: "5 seats",
    features: [
      "Everything in Free",
      "Budget alerts",
      "30-day data retention",
      "Email support",
    ],
    cta: "Upgrade",
    href: "https://dashboard.wardenai.dev/billing?plan=starter",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,499",
    period: "/month",
    spend: "Up to $500K/mo",
    spendLabel: "AI spend tracked",
    seats: "15 seats",
    features: [
      "Everything in Starter",
      "Slack alerts",
      "Chargeback reports",
      "CSV / API export",
      "90-day data retention",
      "Priority support",
    ],
    cta: "Upgrade",
    href: "https://dashboard.wardenai.dev/billing?plan=growth",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$4,999+",
    period: "/month",
    spend: "Unlimited",
    spendLabel: "AI spend tracked",
    seats: "Unlimited seats",
    features: [
      "Everything in Growth",
      "Self-hosted deployment",
      "SSO / SAML (Okta, Azure AD)",
      "Policy engine",
      "Unlimited data retention",
      "Dedicated support",
      "Custom SLA",
    ],
    cta: "Contact sales",
    href: "mailto:amar@wardenai.dev?subject=Warden Enterprise Inquiry",
    highlight: false,
  },
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
      <section className="max-w-4xl mx-auto px-8 pt-20 pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Pay based on your AI spend, not API call volume.
          Start free — upgrade when your AI usage grows.
        </p>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-6 flex flex-col ${
                tier.highlight
                  ? "bg-white border-2 border-emerald-500 shadow-lg"
                  : "bg-slate-50 border border-slate-200"
              }`}
            >
              {tier.highlight && (
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-4">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
              <div className="mb-1">
                <span className="text-3xl font-bold">{tier.price}</span>
                <span className="text-sm text-slate-400">{tier.period}</span>
              </div>
              <div className="text-sm text-emerald-600 font-medium mb-1">
                {tier.spend}
              </div>
              <div className="text-xs text-slate-400 mb-3">
                {tier.spendLabel}
              </div>
              {tier.events && (
                <>
                  <div className="text-xs text-slate-500 font-medium mb-1">
                    {tier.events}
                  </div>
                  <div className="text-xs text-slate-400 mb-6">
                    {tier.eventsLabel}
                  </div>
                </>
              )}
              <div className="text-xs text-slate-400 mb-6">
                {tier.seats}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-emerald-600 mt-0.5">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={`text-center py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-white text-slate-900 hover:bg-slate-100 border border-slate-300"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-slate-400 text-center mt-8">
          *AI spend estimates are based on typical GPT-4o and Claude 3 pricing. Actual spend varies by model and provider.
          <br />
          Limits are enforced by usage event count (100K events free), not spend amount.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-8 py-16 border-t border-slate-100">
        <h2 className="text-2xl font-semibold text-center mb-12">
          Frequently asked questions
        </h2>

        <div className="space-y-8">
          {[
            {
              q: "What counts as 'AI spend tracked'?",
              a: "The total dollar amount of LLM API calls that pass through Warden in a given month. This includes all providers — OpenAI, Anthropic, and Google. We calculate cost based on actual token usage and published provider pricing.",
            },
            {
              q: "Do you store my prompts or responses?",
              a: "No. Warden never stores prompt content, completion text, or raw request bodies. This is an architectural guarantee enforced by CI tests on every commit — not a policy setting.",
            },
            {
              q: "Can I try Warden before committing to a paid plan?",
              a: "Yes. The Free tier is permanent, not a trial. It tracks up to $5K/month in AI spend with full attribution and dashboards. No credit card required.",
            },
            {
              q: "How long does integration take?",
              a: "Most teams are up and running in under an hour. Install the SDK, set your Warden API key, and add a feature tag to your existing LLM calls. No infrastructure changes required.",
            },
            {
              q: "What if I need a custom plan?",
              a: "Enterprise plans are fully customizable — custom SLAs, volume pricing, dedicated support, and self-hosted deployment. Contact us at amar@wardenai.dev.",
            },
          ].map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-semibold mb-2">{q}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-20 border-t border-slate-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Start for free. Scale when ready.
        </h2>
        <p className="text-slate-500 mb-8">
          No credit card. No commitment. See your AI spend in minutes.
        </p>
        <a
          href="https://dashboard.wardenai.dev/login"
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
