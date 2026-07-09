"use client";

// Cookie-consent store, backed by localStorage. GA4 + Clarity load only once
// the visitor has explicitly accepted (see consent-provider + cookie-banner).

export type ConsentState = "accepted" | "rejected" | "pending";

const KEY = "gf_cookie_consent";
const listeners = new Set<() => void>();

function read(): ConsentState {
  if (typeof window === "undefined") return "pending";
  const v = window.localStorage.getItem(KEY);
  return v === "accepted" || v === "rejected" ? v : "pending";
}

export function getConsent(): ConsentState {
  return read();
}

export function setConsent(value: Exclude<ConsentState, "pending">) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, value);
  listeners.forEach((l) => l());
}

// useSyncExternalStore plumbing
export function subscribeConsent(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function getConsentSnapshot(): ConsentState {
  return read();
}

export function getConsentServerSnapshot(): ConsentState {
  return "pending";
}
