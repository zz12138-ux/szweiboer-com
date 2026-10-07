export type TrafficAttribution = {
  sourceType: "ai" | "search" | "social" | "referral" | "direct";
  sourceLabel: string;
};

const normalize = (value: string | null | undefined) => (value || "").trim().toLowerCase();

const includesAny = (value: string, candidates: string[]) =>
  candidates.some((candidate) => value.includes(candidate));

export function classifyTrafficSource(referrerHost?: string | null, utmSource?: string | null): TrafficAttribution {
  const source = normalize(utmSource);
  const host = normalize(referrerHost).replace(/^www\./, "");
  const candidate = source || host;

  if (!candidate) return { sourceType: "direct", sourceLabel: "Direct / unknown" };

  if (includesAny(candidate, ["chatgpt", "openai"])) return { sourceType: "ai", sourceLabel: "AI - ChatGPT" };
  if (candidate.includes("perplexity")) return { sourceType: "ai", sourceLabel: "AI - Perplexity" };
  if (candidate.includes("gemini")) return { sourceType: "ai", sourceLabel: "AI - Gemini" };
  if (includesAny(candidate, ["copilot", "bingchat"])) return { sourceType: "ai", sourceLabel: "AI - Copilot" };
  if (candidate.includes("claude")) return { sourceType: "ai", sourceLabel: "AI - Claude" };

  if (candidate.includes("google")) return { sourceType: "search", sourceLabel: "Google" };
  if (candidate.includes("bing")) return { sourceType: "search", sourceLabel: "Bing" };
  if (candidate.includes("duckduckgo")) return { sourceType: "search", sourceLabel: "DuckDuckGo" };
  if (candidate.includes("yahoo")) return { sourceType: "search", sourceLabel: "Yahoo" };
  if (candidate.includes("baidu")) return { sourceType: "search", sourceLabel: "Baidu" };

  if (candidate.includes("facebook")) return { sourceType: "social", sourceLabel: "Facebook" };
  if (candidate.includes("instagram")) return { sourceType: "social", sourceLabel: "Instagram" };
  if (candidate.includes("linkedin")) return { sourceType: "social", sourceLabel: "LinkedIn" };
  if (includesAny(candidate, ["twitter", "x.com"])) return { sourceType: "social", sourceLabel: "X / Twitter" };
  if (candidate.includes("youtube")) return { sourceType: "social", sourceLabel: "YouTube" };
  if (candidate.includes("tiktok")) return { sourceType: "social", sourceLabel: "TikTok" };

  return { sourceType: "referral", sourceLabel: source || host };
}
