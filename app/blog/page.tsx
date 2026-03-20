import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Warden",
  description:
    "Practical guides for managing AI API costs, LLM spend attribution, and FinOps for generative AI.",
};

const posts = [
  {
    slug: "track-openai-costs-by-team",
    title: "Your OpenAI Bill Doubled Last Month. Here's How to Find Out Why.",
    description:
      "Most companies have no idea which team, feature, or customer is driving their LLM spend. Here's a practical framework for breaking down AI API costs before they spiral.",
    date: "March 18, 2026",
    readTime: "7 min read",
  },
  {
    slug: "ai-api-cost-management-finops",
    title: "AI Cost Management Is the Next FinOps Problem — And Nobody's Ready",
    description:
      "Cloud FinOps took a decade to mature. AI API spend is growing 10x faster with none of the same tooling. What FinOps teams need to know now.",
    date: "March 18, 2026",
    readTime: "6 min read",
  },
  {
    slug: "openai-anthropic-gemini-pricing-comparison",
    title: "OpenAI vs Anthropic vs Gemini: The Real Cost of Each Model in Production",
    description:
      "Pricing pages don't tell the real story. We break down what GPT-4o, Claude Sonnet, and Gemini 1.5 Pro actually cost when you factor in token efficiency, output length, and streaming overhead.",
    date: "March 18, 2026",
    readTime: "8 min read",
  },
];

export default function BlogIndex() {
  return (
    <main className="max-w-3xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-slate-500 mb-14 text-lg">
        Practical takes on AI cost management, LLM pricing, and FinOps for the
        generative AI era.
      </p>

      <div className="space-y-12">
        {posts.map(({ slug, title, description, date, readTime }) => (
          <article key={slug} className="group">
            <Link href={`/blog/${slug}`} className="block">
              <p className="text-sm text-slate-400 mb-2">
                {date} &middot; {readTime}
              </p>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
                {title}
              </h2>
              <p className="text-slate-500 leading-relaxed">{description}</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
