import assert from "node:assert/strict";
import test from "node:test";
import { classifyTrafficSource, shouldTrackTrafficPath } from "../lib/traffic-attribution.ts";

test("classifies AI referrals", () => {
  assert.deepEqual(classifyTrafficSource("chatgpt.com"), { sourceType: "ai", sourceLabel: "AI - ChatGPT" });
  assert.deepEqual(classifyTrafficSource("www.perplexity.ai"), { sourceType: "ai", sourceLabel: "AI - Perplexity" });
  assert.deepEqual(classifyTrafficSource(null, "gemini"), { sourceType: "ai", sourceLabel: "AI - Gemini" });
});

test("classifies search, social, referral and direct traffic", () => {
  assert.deepEqual(classifyTrafficSource("google.com"), { sourceType: "search", sourceLabel: "Google" });
  assert.deepEqual(classifyTrafficSource("m.facebook.com"), { sourceType: "social", sourceLabel: "Facebook" });
  assert.deepEqual(classifyTrafficSource("partner.example"), { sourceType: "referral", sourceLabel: "partner.example" });
  assert.deepEqual(classifyTrafficSource(""), { sourceType: "direct", sourceLabel: "Direct / unknown" });
});

test("uses UTM source when supplied", () => {
  assert.deepEqual(classifyTrafficSource("example.com", "chatgpt"), { sourceType: "ai", sourceLabel: "AI - ChatGPT" });
});

test("excludes analytics and system routes", () => {
  assert.equal(shouldTrackTrafficPath("/"), true);
  assert.equal(shouldTrackTrafficPath("/laptops/ga10/"), true);
  assert.equal(shouldTrackTrafficPath("/api/traffic-visit"), false);
  assert.equal(shouldTrackTrafficPath("/privacy/"), false);
  assert.equal(shouldTrackTrafficPath("/track/event/whatsapp-nav/"), false);
  assert.equal(shouldTrackTrafficPath("/whatsapp-stats/"), false);
});
