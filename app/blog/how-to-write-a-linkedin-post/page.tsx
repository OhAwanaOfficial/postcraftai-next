import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Write a LinkedIn Post That Gets Noticed (2025 Guide)",
  description:
    "Learn how to write a LinkedIn post step by step — hooks, structure, length, hashtags, and CTAs. Includes examples and a free AI LinkedIn post writer.",
  keywords: [
    "how to write a linkedin post",
    "how to write a post in linkedin",
    "how to write a post on linkedin",
    "linkedin post tips",
    "linkedin post examples",
  ],
  alternates: {
    canonical: "https://postcraftai-next.vercel.app/blog/how-to-write-a-linkedin-post",
  },
  openGraph: {
    title: "How to Write a LinkedIn Post That Gets Noticed (2025 Guide)",
    description:
      "Step-by-step guide to writing LinkedIn posts that get engagement — hooks, structure, length, and more.",
    url: "https://postcraftai-next.vercel.app/blog/how-to-write-a-linkedin-post",
    siteName: "PostCraft AI",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a LinkedIn Post That Gets Noticed (2025 Guide)",
  description: "Learn how to write a LinkedIn post step by step — hooks, structure, length, hashtags, and CTAs.",
  author: { "@type": "Organization", name: "PostCraft AI", url: "https://postcraftai-next.vercel.app" },
  publisher: { "@type": "Organization", name: "PostCraft AI", url: "https://postcraftai-next.vercel.app" },
  datePublished: "2025-05-01",
  dateModified: "2025-05-01",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://postcraftai-next.vercel.app/blog/how-to-write-a-linkedin-post",
  },
};

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{children}</p>
  );
}

export default function HowToWriteLinkedInPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gray-800 dark:hover:text-gray-200">Home</Link>
          {" › "}
          <Link href="/blog" className="hover:text-gray-800 dark:hover:text-gray-200">Blog</Link>
          {" › "}
          <span className="text-gray-700 dark:text-gray-300">How to Write a LinkedIn Post</span>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            How to Write a LinkedIn Post That Gets Noticed
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A step-by-step guide to writing LinkedIn posts — hooks, structure,
            length, hashtags, CTAs, and examples.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
            <span>PostCraft AI</span>
            <span>·</span>
            <span>May 2025</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Table of contents */}
        <nav
          aria-label="Table of contents"
          className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 mb-10"
        >
          <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm uppercase tracking-wide">
            In this guide
          </p>
          <ol className="space-y-1 text-sm text-blue-500">
            {[
              ["why-linkedin-posts-matter", "Why LinkedIn posts matter in 2025"],
              ["anatomy", "The anatomy of a great LinkedIn post"],
              ["hook", "Step 1 — Write a scroll-stopping hook"],
              ["body", "Step 2 — Structure your body content"],
              ["cta", "Step 3 — End with a strong CTA"],
              ["length", "How long should a LinkedIn post be?"],
              ["hashtags", "How to use hashtags on LinkedIn"],
              ["examples", "LinkedIn post examples"],
              ["ai-writer", "How to write LinkedIn posts faster with AI"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Article body */}
        <article>

          <H2 id="why-linkedin-posts-matter">Why LinkedIn Posts Matter in 2025</H2>
          <P>
            LinkedIn has over 1 billion members, but only a small fraction post
            consistently. That gap is your opportunity. Professionals who post
            regularly — even just 3 times a week — build authority, attract
            inbound opportunities, and grow their network faster than those who
            only consume content.
          </P>
          <P>
            But volume alone doesn't work. LinkedIn's algorithm rewards posts that
            generate early engagement (likes and comments in the first hour). That
            means your writing quality directly determines your reach.{" "}
            <strong className="text-gray-900 dark:text-white">
              A well-structured post from an account with 500 connections can
              outperform a poorly-written post from someone with 10,000.
            </strong>
          </P>

          <H2 id="anatomy">The Anatomy of a Great LinkedIn Post</H2>
          <P>Every high-performing LinkedIn post has three parts:</P>
          <div className="space-y-3 mb-6">
            {[
              { label: "Hook", color: "bg-blue-600", desc: 'The first 1–2 lines visible before "see more." This determines whether someone stops scrolling.' },
              { label: "Body", color: "bg-green-600", desc: "The value delivery — your story, lesson, opinion, or data. Short paragraphs, line breaks." },
              { label: "CTA", color: "bg-purple-600", desc: 'The closing action — a question, a link, an invitation to comment. Never skip this.' },
            ].map(({ label, color, desc }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className={`text-xs font-bold px-3 py-1.5 rounded text-white flex-shrink-0 mt-0.5 ${color}`}>
                  {label}
                </span>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <H2 id="hook">Step 1 — Write a Scroll-Stopping Hook</H2>
          <P>
            The hook is the most important part of any LinkedIn post. LinkedIn
            shows only the first 2–3 lines before truncating with a "see more"
            button. If your hook doesn't create curiosity or deliver immediate
            value, most people won't read further.
          </P>
          <H3>Hook formulas that work:</H3>
          <ul className="space-y-3 mb-6">
            {[
              { type: "Bold statement", example: '"Cold outreach is dead. Here\'s what works instead."' },
              { type: "Surprising stat", example: '"93% of LinkedIn posts get zero engagement. Here\'s why."' },
              { type: "Relatable frustration", example: '"I spent 3 years writing LinkedIn posts that nobody read. This changed everything."' },
              { type: "Contrarian take", example: '"Stop optimizing your LinkedIn profile. Focus on this instead."' },
              { type: "Story opener", example: '"Two years ago I had 200 followers and zero job offers from LinkedIn."' },
            ].map(({ type, example }) => (
              <li key={type} className="flex gap-2">
                <span className="text-blue-500 font-bold flex-shrink-0">→</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong className="text-gray-900 dark:text-white">{type}:</strong>{" "}
                  <span className="italic text-gray-600 dark:text-gray-400">{example}</span>
                </span>
              </li>
            ))}
          </ul>

          <H2 id="body">Step 2 — Structure Your Body Content</H2>
          <P>
            After your hook earns the click, your body content needs to deliver
            on the promise. Structure matters as much as content on LinkedIn.
          </P>
          <ul className="space-y-2 mb-6">
            {[
              "Use 1–2 sentences per paragraph — long blocks of text lose readers.",
              "Add blank lines between paragraphs — LinkedIn's mobile formatting collapses whitespace.",
              "Use numbered lists or bullet points when sharing multiple tips.",
              "Tell a story with a clear beginning, middle, and end if going long-form.",
              "Every line should earn the right to the next line.",
            ].map((tip) => (
              <li key={tip} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>

          <H2 id="cta">Step 3 — End With a Strong CTA</H2>
          <P>
            Posts without a CTA leave engagement on the table. LinkedIn's
            algorithm weighs comments heavily — a post with 10 comments
            outperforms one with 100 likes. Your CTA should invite a response.
          </P>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { type: "Question CTA", example: `"What's your biggest challenge with LinkedIn posting? Drop it below."` },
              { type: "Opinion CTA", example: `"Agree or disagree? Let me know in the comments."` },
              { type: "Resource CTA", example: `"I built a free tool for this — link in comments."` },
              { type: "Tag CTA", example: `"Tag someone who needs to read this."` },
            ].map(({ type, example }) => (
              <div
                key={type}
                className="border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-950 rounded p-4"
              >
                <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-300 mb-2">{type}</p>
                <p className="text-sm text-gray-800 dark:text-gray-200 italic leading-relaxed">{example}</p>
              </div>
            ))}
          </div>

          <H2 id="length">How Long Should a LinkedIn Post Be?</H2>
          <P>
            LinkedIn posts can be up to 3,000 characters. Research and
            real-world testing consistently show:
          </P>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-left font-semibold text-gray-800 dark:text-gray-200">Length</th>
                  <th className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-left font-semibold text-gray-800 dark:text-gray-200">Characters</th>
                  <th className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-left font-semibold text-gray-800 dark:text-gray-200">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Short", "< 500", "Quick tips, bold opinions, announcements"],
                  ["Medium", "500–1,200", "Stories, lessons, lists — sweet spot"],
                  ["Long", "1,200–3,000", "Deep dives, case studies, how-tos"],
                ].map(([len, chars, use]) => (
                  <tr key={len} className="even:bg-gray-50 dark:even:bg-gray-800/50">
                    <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 font-medium text-gray-900 dark:text-white">{len}</td>
                    <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">{chars}</td>
                    <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            There's no single "best" length — it depends on your content. Write
            until you've said what you need to say, then stop.
          </P>

          <H2 id="hashtags">How to Use Hashtags on LinkedIn</H2>
          <P>
            LinkedIn hashtags work differently from Instagram or Twitter. Using
            too many signals low-quality spam content to the algorithm.
          </P>
          <ul className="space-y-2 mb-6">
            {[
              "Use 1–3 hashtags per post — any more hurts distribution.",
              "Place hashtags at the end of your post, not inline.",
              "Choose hashtags with 10K–500K followers — niche enough to matter, broad enough to reach.",
              "Avoid generic hashtags like #motivation or #success — too crowded.",
              "Examples for SaaS/startup content: #BuildInPublic, #SaaS, #Founders, #LinkedInTips.",
            ].map((tip) => (
              <li key={tip} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-blue-500 font-bold flex-shrink-0">→</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>

          <H2 id="examples">LinkedIn Post Examples</H2>

          <H3>Example 1 — Story post (medium length)</H3>
          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4 font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
{`I lost my first client after 3 weeks.

Not because my product was bad.

Because I couldn't explain what it did in one sentence.

Here's what I learned:

If you can't explain your product in 10 words, your customer can't explain it to their team.

And if they can't explain it — they can't justify paying for it.

One sentence changed everything:

"PostCraft AI writes LinkedIn posts so you never stare at a blank screen again."

Clear. Simple. Memorable.

What's your one-sentence product description?

#BuildInPublic #SaaS #Founders`}
          </div>

          <H3>Example 2 — List post (short)</H3>
          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6 font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
{`5 LinkedIn post formats that consistently get engagement:

1. The mistake I made (+ what I learned)
2. The counterintuitive take (agree or disagree?)
3. The "here's my result" proof post
4. The step-by-step how-to
5. The honest behind-the-scenes

Which one do you use most?

#LinkedInTips #ContentStrategy`}
          </div>

          <H2 id="ai-writer">How to Write LinkedIn Posts Faster with AI</H2>
          <P>
            Writing LinkedIn posts consistently is the hardest part — not the skill,
            the habit. An{" "}
            <Link href="/linkedin-post-writer" className="text-blue-500 hover:underline">
              AI LinkedIn post writer
            </Link>{" "}
            removes the blank screen problem. You describe your idea, the AI drafts
            the structure, and you edit it into your voice.
          </P>
          <P>
            PostCraft AI generates full LinkedIn posts — hook, body, CTA — in under
            3 seconds. It scores your hook, lets you regenerate individual sections,
            and shows a live preview. The free plan gives you 3 posts per day with
            no credit card required.
          </P>

          {/* CTA */}
          <div className="bg-blue-600 rounded-xl p-6 mt-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">
              Try the free AI LinkedIn post writer
            </h2>
            <p className="text-blue-100 mb-4 text-sm">
              Generate your first post in under 10 seconds. Free forever, no card needed.
            </p>
            <Link
              href="/generate"
              className="inline-block bg-white hover:bg-gray-100 text-blue-700 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Write My LinkedIn Post →
            </Link>
          </div>

        </article>

        {/* Internal links */}
        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
            Related
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/linkedin-post-writer" className="text-blue-500 hover:underline">
                LinkedIn Post Writer — Free AI Tool
              </Link>
            </li>
            <li>
              <Link href="/generate" className="text-blue-500 hover:underline">
                PostCraft AI Generator
              </Link>
            </li>
            <li>
              <Link href="/" className="text-blue-500 hover:underline">
                PostCraft AI Home
              </Link>
            </li>
          </ul>
        </section>

      </main>
    </>
  );
}
