import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LinkedIn Post Writer — Free AI LinkedIn Post Generator | PostCraft AI",
  description:
    "Write better LinkedIn posts in seconds with our free AI LinkedIn post writer. Generate hooks, CTAs, and full posts optimized for engagement. Try free — no signup needed.",
  keywords: [
    "linkedin post writer",
    "linkedin post generator",
    "ai linkedin post writer",
    "linkedin generator",
    "write linkedin post",
  ],
  alternates: {
    canonical: "https://postcraftai-next.vercel.app/linkedin-post-writer",
  },
  openGraph: {
    title: "LinkedIn Post Writer — Free AI LinkedIn Post Generator",
    description:
      "Write better LinkedIn posts in seconds with our free AI LinkedIn post writer.",
    url: "https://postcraftai-next.vercel.app/linkedin-post-writer",
    siteName: "PostCraft AI",
    type: "website",
  },
};

// ── JSON-LD structured data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PostCraft AI LinkedIn Post Writer",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "AI-powered LinkedIn post writer that generates hooks, CTAs, and full posts optimized for engagement.",
  url: "https://postcraftai-next.vercel.app/linkedin-post-writer",
};

// ── FAQ data (targets question-based keywords) ───────────────────────────────
const faqs = [
  {
    q: "What is an AI LinkedIn post writer?",
    a: "An AI LinkedIn post writer is a tool that uses artificial intelligence to generate LinkedIn posts for you. You provide a topic or idea, and the AI writes a complete post — including a hook, body, and CTA — optimized for LinkedIn's algorithm and audience engagement.",
  },
  {
    q: "Is PostCraft AI's LinkedIn post writer free?",
    a: "Yes. PostCraft AI offers a free plan that lets you generate up to 3 LinkedIn posts per day with no credit card required. Paid plans unlock unlimited generation and advanced features.",
  },
  {
    q: "How do I write a good LinkedIn post?",
    a: "A great LinkedIn post starts with a strong hook (first line that stops the scroll), delivers value in the body (tips, stories, or insights), and ends with a CTA (question, link, or call to action). Keeping posts between 150–300 words typically performs best for engagement.",
  },
  {
    q: "Can I use AI-generated LinkedIn posts?",
    a: "Yes. LinkedIn does not prohibit AI-assisted content. Many professionals use AI tools to draft posts, which they then edit to match their voice. PostCraft AI is designed to give you a strong starting point that you personalize before publishing.",
  },
  {
    q: "What makes a LinkedIn post go viral?",
    a: "Viral LinkedIn posts typically have: a scroll-stopping first line, a relatable or surprising insight, a clear structure (short paragraphs, line breaks), and a CTA that invites comments. Consistency also matters — posting 3–5 times per week compounds over time.",
  },
];

// ── Reusable section heading ─────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">{children}</h2>
  );
}

// ── Page component ────────────────────────────────────────────────────────────
export default function LinkedInPostWriterPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* ── Hero ── */}
        <header className="text-center mb-10">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
            Free Tool
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            LinkedIn Post Writer
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Generate scroll-stopping LinkedIn posts in seconds. Hooks, CTAs, and
            full posts — powered by AI, personalized by you.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/generate"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Write My LinkedIn Post →
            </Link>
            <Link
              href="/sign-up"
              className="inline-block border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Sign Up Free
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            3 free posts/day · No credit card required
          </p>
        </header>

        {/* ── What is a LinkedIn Post Writer ── */}
        <section aria-labelledby="what-is">
          <SectionHeading>What Is a LinkedIn Post Writer?</SectionHeading>
          <p className="text-gray-700 leading-relaxed">
            A <strong>LinkedIn post writer</strong> is a tool — AI-powered or
            manual — that helps you create LinkedIn content faster and more
            effectively. Instead of staring at a blank screen, you describe your
            topic and the tool generates a structured post: a hook that stops
            the scroll, a body that delivers value, and a CTA that drives
            engagement.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            PostCraft AI's LinkedIn post writer uses Llama 3.3 70B (via Groq)
            to generate posts in under 3 seconds. It also scores your hook
            1–10, lets you regenerate individual sections, and shows a live
            LinkedIn preview — so you know exactly what you're publishing before
            you hit post.
          </p>
        </section>

        {/* ── How It Works ── */}
        <section aria-labelledby="how-it-works">
          <SectionHeading>How the LinkedIn Post Writer Works</SectionHeading>
          <ol className="space-y-4 mt-2">
            {[
              {
                step: "1",
                title: "Enter your topic or idea",
                desc: 'Type what you want to post about — e.g. "Lessons from my first failed startup" or "Why I switched from agency to SaaS."',
              },
              {
                step: "2",
                title: "Choose your tone",
                desc: "Pick from storytelling, educational, controversial, or promotional. The AI adapts the structure accordingly.",
              },
              {
                step: "3",
                title: "Generate your post",
                desc: "PostCraft AI writes a full LinkedIn post in seconds, complete with a hook, body paragraphs, and a CTA.",
              },
              {
                step: "4",
                title: "Edit, regenerate, publish",
                desc: "Not happy with the hook? Regenerate just that section. Preview it, copy it, and paste directly into LinkedIn.",
              },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-gray-600 text-sm mt-1">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Features ── */}
        <section aria-labelledby="features">
          <SectionHeading>Features</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "⚡",
                title: "Instant generation",
                desc: "Posts generated in under 3 seconds via Groq's LPU inference.",
              },
              {
                icon: "🎯",
                title: "Hook scorer",
                desc: "Every post gets a hook quality score (1–10) with a visual indicator.",
              },
              {
                icon: "🔄",
                title: "Regenerate sections",
                desc: "Rewrite just the hook, just the CTA, or the full post.",
              },
              {
                icon: "👁️",
                title: "LinkedIn preview",
                desc: "See exactly how your post will look before publishing.",
              },
              {
                icon: "📊",
                title: "Character counter",
                desc: "Stay within LinkedIn's 3,000 character limit automatically.",
              },
              {
                icon: "📝",
                title: "Post history",
                desc: "Your last 5 generated posts saved locally for easy access.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="border-l-4 border-blue-600 bg-blue-50 rounded-lg p-4"
              >
                <span className="text-2xl">{icon}</span>
                <p className="font-semibold text-gray-900 text-base mt-2">{title}</p>
                <p className="text-gray-800 text-sm mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tips for writing LinkedIn posts ── */}
        <section aria-labelledby="tips">
          <SectionHeading>
            Tips for Writing High-Performing LinkedIn Posts
          </SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you use AI or write manually, these principles apply to
            every great <strong>LinkedIn post</strong>:
          </p>
          <ul className="space-y-3 text-gray-700">
            {[
              {
                tip: "Lead with a hook",
                detail:
                  'The first line determines whether someone clicks "see more." Make it a bold statement, a surprising stat, or a relatable frustration.',
              },
              {
                tip: "Use short paragraphs",
                detail:
                  "LinkedIn compresses long walls of text. 1–2 sentences per paragraph keeps readers scrolling down.",
              },
              {
                tip: "Add a CTA",
                detail:
                  "End with a question, a link, or an invitation to comment. Posts with CTAs get 2–3x more engagement.",
              },
              {
                tip: "Post consistently",
                detail:
                  "LinkedIn rewards consistency. 3–5 posts per week compounds your reach over months.",
              },
              {
                tip: "Don't use hashtags excessively",
                detail:
                  "1–3 relevant hashtags is the sweet spot. Stacking 10+ hashtags looks spammy and hurts reach.",
              },
            ].map(({ tip, detail }) => (
              <li key={tip} className="flex gap-2">
                <span className="text-blue-600 font-bold mt-0.5">→</span>
                <span>
                  <strong>{tip}:</strong> {detail}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── CTA block ── */}
        <section className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-12 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Ready to write your next LinkedIn post?
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            Start free. No credit card. 3 posts/day on the free plan.
          </p>
          <Link
            href="/generate"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Try PostCraft AI Free →
          </Link>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq" className="mt-12">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map(({ q, a }) => ({
                  "@type": "Question",
                  name: q,
                  acceptedAnswer: { "@type": "Answer", text: a },
                })),
              }),
            }}
          />
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h3 className="font-semibold text-gray-900">{q}</h3>
                <p className="text-gray-600 mt-1 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Internal links ── */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Related Resources
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/blog/how-to-write-a-linkedin-post"
                className="text-blue-600 hover:underline"
              >
                How to Write a LinkedIn Post That Gets Noticed (Complete Guide)
              </Link>
            </li>
            <li>
              <Link href="/generate" className="text-blue-600 hover:underline">
                PostCraft AI Generator — Try It Now
              </Link>
            </li>
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                PostCraft AI — AI LinkedIn Post Generator
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
