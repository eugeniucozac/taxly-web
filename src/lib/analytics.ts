import { track } from "@vercel/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Dual-fires an event to GA4 (gtag) and Vercel Analytics in one call. */
export function trackEvent(
  name: string,
  props?: Record<string, string | number | boolean>,
) {
  track(name, props);
  if (typeof window !== "undefined") window.gtag?.("event", name, props);
}
