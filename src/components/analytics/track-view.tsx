"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Fires a tracking event once when the page it's mounted on is viewed.
 * Consent-gated downstream by `trackEvent` (GA only loads after consent).
 * Renders nothing.
 */
export function TrackView({
  event,
  props,
}: {
  event: string;
  props?: Record<string, string | number | boolean>;
}) {
  const fired = useRef(false);
  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    trackEvent(event, props);
  }, [event, props]);
  return null;
}
