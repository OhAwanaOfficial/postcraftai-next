import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PostCraft AI — Free LinkedIn Post Generator",
  description:
    "Generate scroll-stopping LinkedIn posts in seconds. Free AI-powered LinkedIn post generator for founders, marketers, and creators.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f0e0d] text-white overflow-x-hidden">
      {/* NAV */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 bg-[#0f0e0d]/90 backdrop-blur-md z-50">
        <span className="font-bold text-lg">
          Post<span className="text-[#1a6bff]">Craft</span> AI
        </span>
        <Link
          href="/generate"
          className="bg-[#1a6bff] hover:bg-[#0047d4] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
        >
          Try Free
        </Link>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-xs font-medium px-3 py-1.5 rounded-full border border-green-500/20 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          Free during early access
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
          LinkedIn posts that
          <br />
          <span className="text-[#1a6bff]">actually get read</span>
        </h1>

        <p className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
          Stop staring at a blank screen. PostCraft AI writes scroll-stopping
          LinkedIn posts for founders, marketers, and creators — in seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/generate"
            className="bg-[#1a6bff] hover:bg-[#0047d4] text-white font-medium px-8 py-4 rounded-full text-base transition-colors"
          >
            Generate your first post — Free
          </Link>
          <Link
            href="/generate"
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-medium px-8 py-4 rounded-full text-base transition-colors"
          >
            See how it works →
          </Link>
        </div>

        <p className="text-xs text-white/30 mt-4">No credit card. No spam. 3 free posts per day.</p>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="flex -space-x-2">
            {["AK", "SR", "MJ", "PL"].map((initials, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#0f0e0d] flex items-center justify-center text-xs font-semibold text-white"
                style={{
                  background: ["#5b7fff", "#ff6b6b", "#ffa94d", "#51cf66"][i],
                }}
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="text-sm text-white/40">
            <span className="text-white font-medium">47 people</span> already generating posts
          </p>
        </div>
      </section>

      {/* DEMO PREVIEW */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <p className="text-center text-xs text-white/30 uppercase tracking-widest mb-6">
          See it in action
        </p>
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-auto text-xs text-white/30">PostCraft AI</span>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-6 border-r border-white/10 space-y-4">
              <div>
                <p className="text-xs text-white/30 mb-1.5">Topic</p>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/60">
                  I spent 3 months building a SaaS and got zero users...
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-white/30 mb-1.5">Post type</p>
                  <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white/60">
                    Insight / Lesson
                  </div>
                </div>
                <div>
                  <p className="text-xs text-white/30 mb-1.5">Tone</p>
                  <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white/60">
                    Authentic & Raw
                  </div>
                </div>
              </div>
              <div className="bg-[#1a6bff] text-white text-sm font-medium py-3 rounded-xl text-center">
                ✦ Generate Post
              </div>
            </div>
            <div className="p-6 bg-black/20">
              <p className="text-xs text-white/30 mb-3">Generated post</p>
              <p className="text-sm text-white/70 leading-relaxed whitespace-pre-line">{`3 months. Zero users.

I built something nobody asked for.

Spent 90 days writing code instead of talking to customers. Classic mistake.

Here's what I wish I knew:

→ Validation takes 1 week, not 1 month
→ 10 honest conversations > 1,000 pageviews
→ "Sounds cool" is not a yes

The product wasn't the problem.
I was.`}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["#startups", "#buildinpublic", "#saas", "#founder"].map((tag) => (
                  <span key={tag} className="text-xs bg-[#1a6bff]/20 text-[#1a6bff] px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-3 tracking-tight">
          Everything you need to grow on LinkedIn
        </h2>
        <p className="text-center text-white/40 mb-12">Built for people who have ideas but hate writing</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: "⚡", title: "Generate in seconds", desc: "Paste your idea, pick a tone, get a ready-to-post LinkedIn post instantly.", bg: "bg-blue-500/10" },
            { icon: "🎯", title: "Multiple post styles", desc: "Insights, hot takes, storytelling, list posts — choose the format that fits.", bg: "bg-green-500/10" },
            { icon: "📊", title: "Hook scorer", desc: "AI scores your opening line 1-10 and tells you how to make it stronger.", bg: "bg-amber-500/10" },
            { icon: "🏷️", title: "Auto hashtags", desc: "Relevant hashtags generated automatically to maximize your reach.", bg: "bg-purple-500/10" },
          ].map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#1a6bff]/50 transition-colors">
              <div className={`w-10 h-10 ${f.bg} rounded-xl flex items-center justify-center text-lg mb-4`}>
                {f.icon}
              </div>
              <h3 className="font-semibold mb-2 text-sm">{f.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-3 tracking-tight">Simple pricing</h2>
        <p className="text-center text-white/40 mb-12">Start free. Upgrade when you're ready.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              name: "Free",
              price: "$0",
              period: "/mo",
              desc: "For occasional creators",
              features: ["3 posts per day", "All post styles", "Hook scorer", "Auto hashtags"],
              missing: ["Unlimited posts", "Post history", "Priority support"],
              cta: "Get Started Free",
              highlight: false,
            },
            {
              name: "Starter",
              price: "$9",
              period: "/mo",
              desc: "For growing creators",
              features: ["30 posts per day", "All post styles", "Hook scorer", "Auto hashtags", "Post history"],
              missing: ["Priority support"],
              cta: "Get Starter",
              highlight: false,
            },
            {
              name: "Pro",
              price: "$19",
              period: "/mo",
              desc: "For serious LinkedIn builders",
              features: ["Unlimited posts", "All post styles", "Hook scorer", "Auto hashtags", "Post history", "Priority support"],
              missing: [],
              cta: "Get Pro",
              highlight: true,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border relative ${
                plan.highlight
                  ? "border-[#1a6bff] bg-[#1a6bff]/5"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1a6bff] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              <p className="text-xs text-white/40 uppercase tracking-widest mb-2">{plan.name}</p>
              <p className="text-4xl font-bold mb-1">
                {plan.price}
                <span className="text-base font-normal text-white/40">{plan.period}</span>
              </p>
              <p className="text-xs text-white/40 mb-5">{plan.desc}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-green-400 text-xs">✓</span> {f}
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/20">
                    <span className="text-xs">×</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/generate"
                className={`block text-center py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  plan.highlight
                    ? "bg-[#1a6bff] hover:bg-[#0047d4] text-white"
                    : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-2xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Your next viral post is one click away
        </h2>
        <p className="text-white/40 mb-8">
          Join early access today. Free for the first 100 users.
        </p>
        <Link
          href="/generate"
          className="bg-[#1a6bff] hover:bg-[#0047d4] text-white font-medium px-10 py-4 rounded-full text-base transition-colors inline-block"
        >
          Start Generating — It's Free
        </Link>
        <p className="text-xs text-white/20 mt-4">No credit card. No spam.</p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/20">
        © 2026 PostCraft AI · Built for LinkedIn creators ·{" "}
        <a href="mailto:hello@postcraftai.com" className="hover:text-white/40 transition-colors">
          hello@postcraftai.com
        </a>
      </footer>
    </div>
  );
}