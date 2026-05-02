import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const FREE_LIMIT = 3;

export async function POST(req: NextRequest) {
  // Auth check
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Rate limiting
  const today = new Date().toISOString().split("T")[0];

  const { data: usage, error: fetchError } = await supabase
    .from("usage")
    .select("count")
    .eq("user_id", userId)
    .eq("date", today)
    .single();

  const currentCount = usage?.count ?? 0;

  if (currentCount >= FREE_LIMIT) {
    return NextResponse.json(
      { error: "Daily limit reached. Upgrade to Pro for unlimited posts." },
      { status: 429 }
    );
  }

  // Parse body
  const { topic, tone, postType } = await req.json();
  if (!topic || !tone || !postType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Call Groq
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 1000,
        messages: [
          {
            role: "system",
            content:
              "You are an expert LinkedIn content writer. Write scroll-stopping LinkedIn posts that sound human and authentic. Never use corporate buzzwords. Always use short punchy sentences and line breaks.",
          },
          {
            role: "user",
            content: `Generate a ${postType} LinkedIn post about: ${topic}. Tone: ${tone}. End with 4 relevant hashtags on a new line.`,
          },
        ],
      }),
    });

    const data = await response.json();
    const post = data.choices?.[0]?.message?.content;

    if (!post) {
      return NextResponse.json({ error: "Failed to generate post" }, { status: 500 });
    }

    // Update usage count
    if (currentCount === 0 && !usage) {
      await supabase.from("usage").insert({ user_id: userId, date: today, count: 1 });
    } else {
      await supabase
        .from("usage")
        .update({ count: currentCount + 1 })
        .eq("user_id", userId)
        .eq("date", today);
    }

    return NextResponse.json({ post, remaining: FREE_LIMIT - (currentCount + 1) });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
