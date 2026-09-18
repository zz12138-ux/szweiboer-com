"use client";

import { useEffect } from "react";

type Resolver = (element: HTMLElement) => string | null;

const CLASS_MAP: Record<string, string> = {
  heroWhatsApp: "hero",
  factoryWhatsApp: "factory",
  qualityAssuranceWhatsApp: "quality",
  qualityWhatsAppHit: "quality-image",
  exhibitionMeetingHit: "exhibition-meeting",
  exhibitionWhatsAppHit: "exhibition-team",
  faqWhatsApp: "faq",
  footerWhatsApp: "footer-link",
  footerWaButton: "footer-cta",
  laptopMobileQuote: "laptops-mobile",
  detailWhatsapp: "fd16-detail",
};

const RESOLVERS: Resolver[] = [
  (element) => {
    const scoped = element.closest("[data-track-event]") as HTMLElement | null;
    const key = scoped?.dataset.trackEvent;
    return key ? `/track/event/${key}/` : null;
  },
  (element) => {
    for (const cls of Object.keys(CLASS_MAP)) {
      if (element.classList.contains(cls)) return `/track/event/whatsapp-${CLASS_MAP[cls]}/`;
    }
    return null;
  },
  (element) => {
    const href = element.getAttribute("href") || "";
    if (!/wa\.me|api\.whatsapp\.com/.test(href)) return null;
    const scoped = element.closest("[data-track-scope]") as HTMLElement | null;
    const scope = scoped?.dataset.trackScope;
    if (scope === "laptops-model") return "/track/event/whatsapp-laptops-model/";
    if (scope === "laptops-catalog") return "/track/event/whatsapp-laptops-catalog/";
    if (scope === "minipc-model") return "/track/event/whatsapp-minipc-model/";
    if (scope === "minipc-catalog") return "/track/event/whatsapp-minipc-catalog/";
    if (scope === "tablet-model") return "/track/event/whatsapp-tablet-model/";
    if (scope === "tablet-catalog") return "/track/event/whatsapp-tablet-catalog/";
    if (scope === "projector-model") return "/track/event/whatsapp-projector-model/";
    if (scope === "projector-catalog") return "/track/event/whatsapp-projector-catalog/";
    if (scope === "monitor-model") return "/track/event/whatsapp-monitor-model/";
    if (scope === "monitor-catalog") return "/track/event/whatsapp-monitor-catalog/";
    if (scope === "gaming-model") return "/track/event/whatsapp-gaming-model/";
    if (scope === "gaming-catalog") return "/track/event/whatsapp-gaming-catalog/";
    return "/track/event/whatsapp-other/";
  },
];

const VISITOR_STORAGE_KEY = "weiboer_wa_visitor_v1";
const SESSION_STORAGE_KEY = "weiboer_wa_session_v1";

function createAnonymousId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 14)}`;
}

function getStoredId(storage: Storage, key: string) {
  try {
    const existing = storage.getItem(key);
    if (existing) return existing;
    const next = createAnonymousId();
    storage.setItem(key, next);
    return next;
  } catch {
    return createAnonymousId();
  }
}

function resolveProductCode(trigger: HTMLElement) {
  const explicit = trigger.closest("[data-product-code]") as HTMLElement | null;
  if (explicit?.dataset.productCode) return explicit.dataset.productCode;

  const tracked = trigger.closest("[data-track-event]") as HTMLElement | null;
  const trackedMatch = tracked?.dataset.trackEvent?.match(/whatsapp-(wb-(?:lt|mc|tb|pj|mn)-\d{2})/i);
  if (trackedMatch) return trackedMatch[1].toUpperCase();

  const card = trigger.closest(".modelCard");
  const detailPath = card?.querySelector<HTMLAnchorElement>("a.viewDetails")?.getAttribute("href");
  const path = detailPath || window.location.pathname;
  const slug = path.split("/").filter(Boolean).at(-1) || "";
  return /^wb-(?:lt|mc|tb|pj|mn)-\d{2}$/i.test(slug) ? slug.toUpperCase() : null;
}

function recordWhatsAppClick(eventKey: string, trigger: HTMLElement) {
  const visitorId = getStoredId(window.localStorage, VISITOR_STORAGE_KEY);
  const sessionId = getStoredId(window.sessionStorage, SESSION_STORAGE_KEY);
  const productCode = resolveProductCode(trigger);
  void fetch("/api/whatsapp-click", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ eventKey, pagePath: window.location.pathname, productCode, visitorId, sessionId }),
    keepalive: true,
  }).catch(() => {});
}

function pingVirtualPage(url: string) {
  try {
    const target = new URL(url, window.location.origin);
    const frame = document.createElement("iframe");
    frame.setAttribute("aria-hidden", "true");
    frame.setAttribute("tabindex", "-1");
    frame.style.position = "absolute";
    frame.style.width = "0";
    frame.style.height = "0";
    frame.style.border = "0";
    frame.style.left = "-9999px";
    frame.src = target.toString();
    frame.addEventListener("load", () => {
      setTimeout(() => frame.remove(), 1500);
    });
    document.body.appendChild(frame);
  } catch {
    /* ignore */
  }
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement | null)?.closest("a, button") as HTMLElement | null;
      if (!trigger) return;
      for (const resolver of RESOLVERS) {
        const url = resolver(trigger);
        if (url) {
          const eventKey = url.replace(/^\/track\/event\//, "").replace(/\/$/, "");
          recordWhatsAppClick(eventKey, trigger);
          pingVirtualPage(url);
          return;
        }
      }
    };
    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement | null;
      if (form && form.classList.contains("emailQuoteForm")) {
        pingVirtualPage("/track/event/inquiry-submit/");
      }
    };
    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
    };
  }, []);

  return null;
}
