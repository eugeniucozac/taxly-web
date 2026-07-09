"use client";

import { useSyncExternalStore } from "react";
import {
  subscribeConsent,
  getConsentSnapshot,
  getConsentServerSnapshot,
  setConsent,
} from "@/lib/consent";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { MicrosoftClarity } from "@/components/analytics/microsoft-clarity";

/**
 * Cookie-consent orchestrator. GA4 + Clarity are cookie-setting, so they load
 * only after the visitor accepts. Vercel Analytics / Speed Insights are
 * cookieless and mount unconditionally in the layout.
 */
export function ConsentProvider() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot,
  );

  return (
    <>
      {consent === "pending" && (
        <CookieBanner
          onAccept={() => setConsent("accepted")}
          onDecline={() => setConsent("rejected")}
        />
      )}
      {consent === "accepted" && (
        <>
          <GoogleAnalytics />
          <MicrosoftClarity />
        </>
      )}
    </>
  );
}
