import { trackEvent } from "@/lib/attribution";

/**
 * Sovereign OS Funnel Intelligence Layer
 * Tracks full user journey → click → funnel → revenue
 */

function getSessionId() {
  let id = sessionStorage.getItem("sov_session");
  if (!id) {
    id = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    sessionStorage.setItem("sov_session", id);
  }
  return id;
}

function getUserId() {
  let id = localStorage.getItem("sov_user");
  if (!id) {
    id = `user_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem("sov_user", id);
  }
  return id;
}

function getSource() {
  const params = new URLSearchParams(window.location.search);
  return (
    params.get("utm_source") ||
    document.referrer ||
    "direct"
  );
}

/**
 * Funnel Step Tracker
 */
export function trackFunnel(step: string, extra?: any) {
  trackEvent("funnel_step", {
    step,
    sessionId: getSessionId(),
    userId: getUserId(),
    source: getSource(),
    timestamp: Date.now(),
    ...extra,
  });
}

/**
 * ChatB2K Entry Tracking
 */
export function launchChatB2K(url: string) {
  trackFunnel("chatb2k_click", {
    destination: url,
  });

  // Meta Pixel (if installed)
  (window as any).fbq?.("track", "Lead", {
    content_name: "ChatB2K Assessment",
  });

  // Google Analytics (if installed)
  (window as any).gtag?.("event", "chatb2k_click", {
    source: getSource(),
  });

  window.location.href = url;
}
