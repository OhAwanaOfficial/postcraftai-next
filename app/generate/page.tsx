"use client";

import { useState, useEffect } from "react";

interface PostHistory {
  post: string;
  timestamp: string;
  topic: string;
}

function scoreHook(text: string): number {
  const firstLine = text.split("\n")[0].replace(/<[^>]+>/g, "").trim();
  let score = 0;
  if (firstLine.split(" ").length <= 10) score += 3;
  if (/^\d/.test(firstLine)) score += 2;
  if (/\b(but|however|yet|never|always|stop|wrong|mistake|truth|secret)\b/i.test(firstLine)) score += 2;
  const corporateWords = ["leverage", "synergy", "paradigm", "utilize", "optimize", "holistic"];
  if (!corporateWords.some((w) => firstLine.toLowerCase().includes(w))) score += 3;
  return Math.min(10, Math.max(1, score));
}

function getScoreLabel(score: number) {
  if (score <= 4) return { label: "Weak hook", color: "bg-red-500", text: "text-red-400" };
  if (score <= 7) return { label: "Good hook", color: "bg-yellow-500", text: "text-yellow-400" };
  return { label: "Strong hook!", color: "bg-green-500", text: "text-green-400" };
}

function extractHashtags(post: string): { cleanPost: string; hashtags: string[] } {
  const lines = post.split("\n");
  const hashtagLine = lines[lines.length - 1];
  const hashtags = hashtagLine.match(/#\w+/g) || [];
  const cleanPost = hashtags.length > 0 ? lines.slice(0, -1).join("\n").trim() : post;
  return { cleanPost, hashtags };
}

export default function GeneratePage() {
  const [topic, setTopic] = useState("");
  const [postType, setPostType] = useState("Insight / Lesson");
  const [tone, setTone] = useState("Authentic & Raw");
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hookScore, setHookScore] = useState<number | null>(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [history, setHistory] = useState<PostHistory[]>([]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [regenLoading, setRegenLoading] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("postHistory");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const saveToHistory = (newPost: string, topicText: string) => {
    const entry: PostHistory = {
      post: newPost,
      timestamp: new Date().toLocaleString(),
      topic: topicText.slice(0, 50),
    };
    const updated = [entry, ...history].slice(0, 5);
    setHistory(updated);
    localStorage.setItem("postHistory", JSON.stringify(updated));
  };

  const handleGenerate = async () => {
  if (!topic.trim()) return;
  setLoading(true);
  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, tone, postType }),
    });
    const data = await res.json();
    if (data.error) {
      alert(data.error);
      return;
    }
    setPost(data.post);
    setHookScore(scoreHook(data.post));
    saveToHistory(data.post, topic);
  } catch (e) {
    console.error(e);
  }
  setLoading(false);
};

  const handleRegen = async (type: "hook" | "cta" | "full") => {
  if (!post) return;
  setRegenLoading(type);
  try {
    let prompt = "";
    if (type === "full") {
      prompt = topic;
    } else if (type === "hook") {
      prompt = `Rewrite ONLY the opening hook line for this LinkedIn post. Make it more compelling. Current post:\n${post}\n\nReturn the full post with only the first line changed.`;
    } else {
      prompt = `Rewrite ONLY the last line/CTA of this LinkedIn post. Current post:\n${post}\n\nReturn the full post with only the last line changed.`;
    }

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic: prompt, tone, postType }),
    });
    const data = await res.json();
    if (data.error) {
      alert(data.error);
      return;
    }
    setPost(data.post);
    setHookScore(scoreHook(data.post));
  } catch (e) {
    console.error(e);
  }
  setRegenLoading(null);
};

  const handleCopy = () => {
    navigator.clipboard.writeText(post);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { cleanPost, hashtags } = post ? extractHashtags(post) : { cleanPost: "", hashtags: [] };
  const charCount = post.length;
  const overLimit = charCount > 3000;
  const score = hookScore;
  const scoreInfo = score ? getScoreLabel(score) : null;

  return (
    <div className="min-h-screen bg-[#0f0e0d] text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-lg">
          Post<span className="text-[#1a6bff]">Craft</span> AI
        </span>
        <span className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/10">
          Free · 3 posts/day
        </span>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT PANEL */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <h2 className="text-sm font-medium text-white/50 uppercase tracking-widest">Generate post</h2>

            <div>
              <label className="block text-xs text-white/40 mb-1.5">Your idea or topic</label>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. I spent 3 months building a SaaS and got zero users..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 resize-none h-28 outline-none focus:border-[#1a6bff] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-white/40 mb-1.5">Post type</label>
              <select
                value={postType}
                onChange={(e) => setPostType(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#1a6bff] transition-colors"
              >
                {["Insight / Lesson", "Growth Story", "Hot Take", "List Post"].map((t) => (
                  <option key={t} value={t} className="bg-[#1a1a1a]">{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-white/40 mb-1.5">Tone</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#1a6bff] transition-colors"
              >
                {["Authentic & Raw", "Professional", "Witty", "Inspirational"].map((t) => (
                  <option key={t} value={t} className="bg-[#1a1a1a]">{t}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !topic.trim()}
              className="w-full bg-[#1a6bff] hover:bg-[#0047d4] disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl text-sm transition-colors"
            >
              {loading ? "Generating..." : "✦ Generate Post"}
            </button>

            {/* Regenerate buttons */}
            {post && (
              <div className="grid grid-cols-3 gap-2 pt-1">
                {[
                  { key: "hook", label: "New Hook" },
                  { key: "cta", label: "New CTA" },
                  { key: "full", label: "Full Rewrite" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => handleRegen(key as "hook" | "cta" | "full")}
                    disabled={!!regenLoading}
                    className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-2 text-white/60 hover:text-white transition-colors disabled:opacity-40"
                  >
                    {regenLoading === key ? "..." : label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-white/50 uppercase tracking-widest">Your post</h2>
              {post && (
                <button
                  onClick={() => setPreviewMode(!previewMode)}
                  className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-white/50 hover:text-white transition-colors"
                >
                  {previewMode ? "Edit view" : "LinkedIn Preview"}
                </button>
              )}
            </div>

            {!post ? (
              <div className="h-64 flex items-center justify-center text-white/20 text-sm text-center px-8">
                Your generated post will appear here. Fill in the form and hit Generate.
              </div>
            ) : previewMode ? (
              /* LinkedIn Preview */
              <div className="bg-white rounded-xl p-4 text-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    YN
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Your Name</p>
                    <p className="text-xs text-gray-400">Founder · Just now · 🌐</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed whitespace-pre-line text-gray-800">{cleanPost}</p>
                {hashtags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {hashtags.map((h) => (
                      <span key={h} className="text-xs text-blue-600">{h}</span>
                    ))}
                  </div>
                )}
                <div className="mt-3 pt-3 border-t border-gray-100 flex gap-4 text-xs text-gray-400">
                  <span>👍 Like</span>
                  <span>💬 Comment</span>
                  <span>🔁 Repost</span>
                  <span>📤 Send</span>
                </div>
              </div>
            ) : (
              /* Edit View */
              <div className="bg-black/20 border border-white/5 rounded-xl p-4">
                <p className="text-sm leading-relaxed whitespace-pre-line text-white/80">{cleanPost}</p>
                {hashtags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/5">
                    {hashtags.map((h) => (
                      <span key={h} className="text-xs bg-[#1a6bff]/20 text-[#1a6bff] px-2 py-1 rounded-full">{h}</span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Hook Score */}
            {post && score && scoreInfo && (
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/40">Hook strength</span>
                  <span className={`text-xs font-medium ${scoreInfo.text}`}>{scoreInfo.label} ({score}/10)</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${scoreInfo.color} rounded-full transition-all duration-500`}
                    style={{ width: `${score * 10}%` }}
                  />
                </div>
              </div>
            )}

            {/* Char count */}
            {post && (
              <div className={`text-xs text-right ${overLimit ? "text-red-400" : "text-white/30"}`}>
                {charCount}/3000 characters {overLimit && "— over LinkedIn limit"}
              </div>
            )}

            {/* Copy button */}
            {post && (
              <button
                onClick={handleCopy}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                {copied ? "✓ Copied!" : "Copy post"}
              </button>
            )}
          </div>
        </div>

        {/* Post History */}
        {history.length > 0 && (
          <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <button
              onClick={() => setHistoryOpen(!historyOpen)}
              className="w-full px-6 py-4 flex items-center justify-between text-sm text-white/50 hover:text-white transition-colors"
            >
              <span>Recent posts ({history.length})</span>
              <span>{historyOpen ? "▲" : "▼"}</span>
            </button>
            {historyOpen && (
              <div className="border-t border-white/10 divide-y divide-white/5">
                {history.map((h, i) => (
                  <div
                    key={i}
                    className="px-6 py-4 hover:bg-white/5 cursor-pointer transition-colors"
                    onClick={() => setPost(h.post)}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-white/60 truncate max-w-xs">{h.topic}</span>
                      <span className="text-xs text-white/30">{h.timestamp}</span>
                    </div>
                    <p className="text-xs text-white/30 truncate">{h.post.slice(0, 80)}...</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
