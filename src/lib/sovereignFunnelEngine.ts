type SourceType = "direct" | "meta" | "google" | "tiktok" | "referral";

const STORAGE_KEY = "sfo_attribution_v1";
const EVENT_KEY = "sfo_events_v1";

/* -----------------------------
   SOURCE DETECTION ENGINE
------------------------------*/
function detectSource(): SourceType {
  const ref = document.referrer.toLowerCase();

  if (!ref) return "direct";
  if (ref.includes("facebook") || ref.includes("instagram")) return "meta";
  if (ref.includes("google")) return "google";
  if (ref.includes("tiktok")) return "tiktok";

  return "referral";
}

/* -----------------------------
   INIT SOVEREIGN OS
------------------------------*/
export function initSovereignOS() {
  const existing = localStorage.getItem(STORAGE_KEY);

  if (!existing) {
    const payload = {
      id: crypto.randomUUID(),
      source: detectSource(),
      landingPage: window.location.pathname,
      timestamp: Date.now(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }
}

/* -----------------------------
   GET ATTRIBUTION STATE
------------------------------*/
export function getSovereignOS() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}

/* -----------------------------
   INTELLIGENT CTA ROUTING
------------------------------*/
export function getOptimalCTA(): string {
  const data = getSovereignOS();

  const base = "https://reso-fit.lovable.app";

  if (!data) return base;

  switch (data.source) {
    case "meta":
      return `${base}?source=meta_ad`;

    case "google":
      return `${base}?source=google_search`;

    case "tiktok":
      return `${base}?source=tiktok_ad`;

    default:
      return `${base}?source=direct`;
  }
}

/* -----------------------------
   EVENT TRACKING LAYER
------------------------------*/
export function trackEvent(event: string, meta?: any) {
  const existing = JSON.parse(localStorage.getItem(EVENT_KEY) || "[]");

  existing.push({
    event,
    meta,
    timestamp: Date.now(),
  });

  localStorage.setItem(EVENT_KEY, JSON.stringify(existing));
}

/* -----------------------------
   CTA LAUNCHER (SAFE ROUTER)
------------------------------*/
export function launchChatB2K() {
  const os = getSovereignOS();
  const url = getOptimalCTA();

  trackEvent("chatb2k_click", {
    source: os?.source,
    page: window.location.pathname,
  });

  window.open(url, "_blank", "noopener,noreferrer");
}