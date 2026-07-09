"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import {
  estimatePenalty,
  INTEREST_RATE_PCT,
  type PenaltyResult,
} from "@/features/tools/lib/penalty";

function parseAmount(raw: string): number | null {
  const cleaned = raw.replace(/[,$\s]/g, "");
  if (cleaned === "") return null; // blank is blank, not zero
  const n = Number(cleaned);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export function PenaltyEstimator() {
  const t = useTranslations("tools.penalty");
  const [taxRaw, setTaxRaw] = useState("");
  const [monthsRaw, setMonthsRaw] = useState("1");
  const [filedOnTime, setFiledOnTime] = useState(false);
  const [result, setResult] = useState<PenaltyResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  function calculate() {
    const unpaidTax = parseAmount(taxRaw);
    const monthsLate = parseAmount(monthsRaw);
    if (unpaidTax === null || monthsLate === null) {
      setError(t("errorBlank"));
      setResult(null);
      return;
    }
    setError(null);
    const r = estimatePenalty({ unpaidTax, monthsLate, filedOnTime });
    setResult(r);
    trackEvent("tool_complete", { tool: "penalty-estimator" });
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="space-y-5 rounded-2xl border bg-card p-6 shadow-sm">
        <div>
          <label htmlFor="penalty-tax" className="mb-1.5 block text-sm font-medium">
            {t("taxLabel")}
          </label>
          <p className="mb-1.5 text-xs text-muted-foreground">{t("taxHint")}</p>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground/80">
              $
            </span>
            <input
              id="penalty-tax"
              inputMode="decimal"
              value={taxRaw}
              onChange={(e) => setTaxRaw(e.target.value)}
              placeholder="2,500"
              className="w-full rounded-lg border bg-card py-2.5 pl-7 pr-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
          </div>
        </div>

        <div>
          <label htmlFor="penalty-months" className="mb-1.5 block text-sm font-medium">
            {t("monthsLabel")}
          </label>
          <p className="mb-1.5 text-xs text-muted-foreground">{t("monthsHint")}</p>
          <input
            id="penalty-months"
            inputMode="numeric"
            value={monthsRaw}
            onChange={(e) => setMonthsRaw(e.target.value)}
            className="w-full rounded-lg border bg-card px-3 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
          />
        </div>

        <label className="flex items-start gap-2.5 text-sm">
          <input
            type="checkbox"
            checked={filedOnTime}
            onChange={(e) => setFiledOnTime(e.target.checked)}
            className="mt-0.5"
          />
          <span>
            <span className="font-medium">{t("filedLabel")}</span>
            <span className="block text-xs text-muted-foreground">{t("filedHint")}</span>
          </span>
        </label>

        {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}

        <button
          onClick={calculate}
          className="w-full rounded-xl bg-sky-600 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
        >
          {t("calculate")}
        </button>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
              {t("resultHeading")}
            </p>
            <div className="divide-y divide-border text-sm">
              <div className="flex justify-between py-2.5">
                <span className="text-muted-foreground">{t("ftf")}</span>
                <span className="font-medium">{fmt(result.failureToFile)}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-muted-foreground">{t("ftp")}</span>
                <span className="font-medium">{fmt(result.failureToPay)}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-muted-foreground">
                  {t("interest", { rate: INTEREST_RATE_PCT })}
                </span>
                <span className="font-medium">{fmt(result.interest)}</span>
              </div>
              <div className="flex justify-between border-t py-3 text-base font-semibold">
                <span>{t("total")}</span>
                <span>{fmt(result.total)}</span>
              </div>
            </div>
            {result.minimumApplied && (
              <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
                {t("minimumNote")}
              </p>
            )}
          </div>

          {/* The advice that actually matters in the crisis moment */}
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 dark:border-sky-500/30 dark:bg-sky-500/10">
            <h3 className="text-sm font-bold">{t("advice.heading")}</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>{t("advice.file")}</li>
              <li>{t("advice.plan")}</li>
              <li>{t("advice.abatement")}</li>
            </ul>
            <Link
              href="/#waitlist"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              {t("advice.cta")}
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      )}

      <p className="mt-8 text-center text-xs text-muted-foreground/80">{t("disclaimer")}</p>
    </div>
  );
}
