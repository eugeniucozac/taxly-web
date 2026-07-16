"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import {
  subscribeConsent,
  getConsentSnapshot,
  getConsentServerSnapshot,
  resetConsent,
} from "@/lib/consent";

/** Shows the visitor's saved analytics choice and lets them change it —
 * clearing the choice brings the consent banner back. */
export function CookieChoice() {
  const t = useTranslations("cookiesPage");
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot,
  );

  const label =
    consent === "accepted"
      ? t("choiceAccepted")
      : consent === "rejected"
        ? t("choiceRejected")
        : t("choicePending");

  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border bg-card p-5 shadow-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
          {t("choiceHeading")}
        </p>
        <p className="mt-1 text-sm font-semibold text-foreground">{label}</p>
        <p className="mt-1 text-xs text-muted-foreground">{t("changeNote")}</p>
      </div>
      <button
        onClick={resetConsent}
        disabled={consent === "pending"}
        className="rounded-lg border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-ring disabled:opacity-50"
      >
        {t("changeChoice")}
      </button>
    </div>
  );
}
