"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function CookieBanner({
  onAccept,
  onDecline,
}: {
  onAccept: () => void;
  onDecline: () => void;
}) {
  const t = useTranslations("cookieBanner");

  return (
    <div
      role="dialog"
      aria-label={t("title")}
 className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-4 shadow-lg backdrop-blur"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {t("message")}{" "}
          <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-foreground">
            {t("learnMore")}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={onDecline}
 className="rounded-lg border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary"
          >
            {t("decline")}
          </button>
          <button
            type="button"
            onClick={onAccept}
 className="rounded-lg px-4 py-2 bg-sky-600 text-sm font-semibold text-white hover:bg-sky-500"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
