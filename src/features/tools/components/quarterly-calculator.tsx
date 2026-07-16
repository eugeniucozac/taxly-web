"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import {
  safeHarborQuarterly,
  selfEmploymentTax,
  HIGH_AGI_THRESHOLD,
  type QuarterlyResult,
} from "@/features/tools/lib/quarterly";

function parseAmount(raw: string): number | null {
  const cleaned = raw.replace(/[,$\s]/g, "");
  if (cleaned === "") return null; // blank is blank, not zero
  const n = Number(cleaned);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export function QuarterlyCalculator() {
  const t = useTranslations("tools.quarterly");
  const tShared = useTranslations("tools");
  const [priorTaxRaw, setPriorTaxRaw] = useState("");
  const [withholdingRaw, setWithholdingRaw] = useState("0");
  const [profitRaw, setProfitRaw] = useState("");
  const [highAgi, setHighAgi] = useState(false);
  const [result, setResult] = useState<{ q: QuarterlyResult; seTax: number | null } | null>(null);
  const [error, setError] = useState<string | null>(null);

  function calculate() {
    const priorYearTax = parseAmount(priorTaxRaw);
    const expectedWithholding = parseAmount(withholdingRaw);
    if (priorYearTax === null || expectedWithholding === null) {
      setError(t("errorBlank"));
      setResult(null);
      return;
    }
    setError(null);
    const q = safeHarborQuarterly({ priorYearTax, highAgi, expectedWithholding });
    const profit = parseAmount(profitRaw);
    const seTax = profit === null ? null : selfEmploymentTax(profit);
    setResult({ q, seTax });
    trackEvent("tool_complete", { tool: "quarterly-tax" });
  }

  // Riley from the hub's practice section: $12k prior tax, $4k withholding, $40k profit.
  function loadExample() {
    setPriorTaxRaw("12,000");
    setWithholdingRaw("4,000");
    setProfitRaw("40,000");
    setHighAgi(false);
    setError(null);
    setResult({
      q: safeHarborQuarterly({ priorYearTax: 12000, highAgi: false, expectedWithholding: 4000 }),
      seTax: selfEmploymentTax(40000),
    });
    trackEvent("tool_example", { tool: "quarterly-tax" });
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="overflow-hidden rounded-xl border-[1.5px] border-foreground bg-card shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
        <div className="flex items-stretch justify-between border-b-[1.5px] border-foreground text-xs font-bold uppercase tracking-wider">
          <span className="flex items-stretch">
            <span className="flex items-center border-r-[1.5px] border-foreground px-3 py-2 font-mono text-primary">
              {t("formTag")}
            </span>
            <span className="flex items-center px-3 py-2">{tShared("inputsLabel")}</span>
          </span>
          <button
            onClick={loadExample}
            className="border-l-[1.5px] border-foreground px-3 text-[11px] font-semibold normal-case tracking-normal text-primary transition hover:bg-sky-50 dark:hover:bg-sky-500/10"
          >
            {tShared("loadExample")}
          </button>
        </div>
        <div className="space-y-5 p-6">
        <div>
          <label htmlFor="q-prior" className="mb-1.5 block text-sm font-medium">
            {t("priorLabel")}
          </label>
          <p className="mb-1.5 text-xs text-muted-foreground">{t("priorHint")}</p>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground/80">
              $
            </span>
            <input
              id="q-prior"
              inputMode="decimal"
              value={priorTaxRaw}
              onChange={(e) => setPriorTaxRaw(e.target.value)}
              placeholder="8,000"
              className="w-full rounded-lg border bg-card py-2.5 pl-7 pr-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
          </div>
        </div>

        <div>
          <label htmlFor="q-withholding" className="mb-1.5 block text-sm font-medium">
            {t("withholdingLabel")}
          </label>
          <p className="mb-1.5 text-xs text-muted-foreground">{t("withholdingHint")}</p>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground/80">
              $
            </span>
            <input
              id="q-withholding"
              inputMode="decimal"
              value={withholdingRaw}
              onChange={(e) => setWithholdingRaw(e.target.value)}
              className="w-full rounded-lg border bg-card py-2.5 pl-7 pr-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
          </div>
        </div>

        <label className="flex items-start gap-2.5 text-sm">
          <input
            type="checkbox"
            checked={highAgi}
            onChange={(e) => setHighAgi(e.target.checked)}
            className="mt-0.5"
          />
          <span>
            <span className="font-medium">
              {t("highAgiLabel", { threshold: HIGH_AGI_THRESHOLD.toLocaleString("en-US") })}
            </span>
            <span className="block text-xs text-muted-foreground">{t("highAgiHint")}</span>
          </span>
        </label>

        <div>
          <label htmlFor="q-profit" className="mb-1.5 block text-sm font-medium">
            {t("profitLabel")}
          </label>
          <p className="mb-1.5 text-xs text-muted-foreground">{t("profitHint")}</p>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground/80">
              $
            </span>
            <input
              id="q-profit"
              inputMode="decimal"
              value={profitRaw}
              onChange={(e) => setProfitRaw(e.target.value)}
              placeholder="50,000"
              className="w-full rounded-lg border bg-card py-2.5 pl-7 pr-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
          </div>
        </div>

        {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}

        <button
          onClick={calculate}
          className="w-full rounded-xl bg-sky-600 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
        >
          {t("calculate")}
        </button>
        </div>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border bg-card p-6 text-center shadow-sm">
            <p className="mb-1 text-sm font-medium text-muted-foreground">
              {t("resultHeading")}
            </p>
            <p className="text-4xl font-bold text-primary">{fmt(result.q.quarterlyPayment)}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              {t("resultNote", {
                target: fmt(result.q.annualTarget),
                pct: result.q.multiplier === 1.1 ? "110%" : "100%",
              })}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">{t("dueDates")}</p>
          </div>

          {result.seTax !== null && (
            <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6 dark:border-amber-500/30 dark:bg-amber-500/10">
              <h3 className="text-sm font-bold text-amber-900 dark:text-amber-200">
                {t("seHeading")}
              </h3>
              <p className="mt-1 text-2xl font-bold text-amber-900 dark:text-amber-100">
                {fmt(result.seTax)}
              </p>
              <p className="mt-2 text-xs text-amber-900/80 dark:text-amber-200/80">
                {t("seNote")}
              </p>
            </div>
          )}

          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 text-center dark:border-sky-500/30 dark:bg-sky-500/10">
            <p className="text-sm text-muted-foreground">{t("cta.text")}</p>
            <Link
              href="/#waitlist"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              {t("cta.button")}
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      )}

      <p className="mt-8 text-center text-xs text-muted-foreground/80">{t("disclaimer")}</p>
    </div>
  );
}
