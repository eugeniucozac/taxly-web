"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { calculateRefund, type FilingStatus } from "../lib/calculator";
import { trackEvent } from "@/lib/analytics";

function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.abs(n));
}

interface NumberInputProps {
  id: string;
  label: string;
  hint?: string;
  value: number;
  onChange: (v: number) => void;
}

function NumberInput({ id, label, hint, value, onChange }: NumberInputProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-muted-foreground">
        {label}
      </label>
      {hint && <p className="mb-1.5 text-xs text-muted-foreground">{hint}</p>}
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground/80">
          $
        </span>
        <input
          id={id}
          type="number"
          min={0}
          value={value || ""}
          placeholder="0"
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
 className="w-full rounded-lg border bg-card py-2.5 pl-7 pr-3 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
        />
      </div>
    </div>
  );
}

interface BreakdownRowProps {
  label: string;
  value: number;
  highlight?: boolean;
  negative?: boolean;
  indent?: boolean;
}

function BreakdownRow({ label, value, highlight, negative, indent }: BreakdownRowProps) {
  return (
    <div
 className={`flex items-center justify-between py-2 ${
        highlight ? "border-t font-semibold" : ""
      } ${indent ? "pl-3" : ""}`}
    >
      <span className={`text-sm ${highlight ? "text-foreground" : "text-muted-foreground"}`}>
        {label}
      </span>
      <span
 className={`text-sm font-medium ${
          highlight && negative
            ? "text-red-600"
            : highlight
            ? "text-primary"
            : "text-muted-foreground"
        }`}
      >
        {negative ? `−${formatUSD(value)}` : formatUSD(value)}
      </span>
    </div>
  );
}

export function RefundEstimator() {
  const t = useTranslations("refundEstimator");
  const tShared = useTranslations("tools");
  const locale = useLocale();

  const [filingStatus, setFilingStatus] = useState<FilingStatus>("single");
  const [wages, setWages] = useState(0);
  const [withholding, setWithholding] = useState(0);
  const [freelance, setFreelance] = useState(0);
  const [children, setChildren] = useState(0);

  const result = useMemo(
    () => calculateRefund({ filingStatus, wages, withholding, freelance, children }),
    [filingStatus, wages, withholding, freelance, children],
  );

  const isRefund = result.refund >= 0;
  const hasIncome = wages > 0 || freelance > 0 || withholding > 0;

  // Fire the estimator-complete event once, when a real result first appears.
  const firedComplete = useRef(false);
  useEffect(() => {
    if (hasIncome && !firedComplete.current) {
      firedComplete.current = true;
      trackEvent("tool_complete", { tool: "refund-estimator", locale, isRefund });
    }
  }, [hasIncome, locale, isRefund]);

  const statuses: { value: FilingStatus; label: string }[] = [
    { value: "single", label: t("filingStatus.single") },
    { value: "mfj", label: t("filingStatus.mfj") },
    { value: "hoh", label: t("filingStatus.hoh") },
  ];

  // Alex from the hub's practice section: single, $65k wages, $9.2k withheld.
  function loadExample() {
    setFilingStatus("single");
    setWages(65000);
    setWithholding(9200);
    setFreelance(0);
    setChildren(0);
    trackEvent("tool_example", { tool: "refund-estimator" });
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* ── Inputs ── */}
        <div className="self-start overflow-hidden rounded-xl border-[1.5px] border-foreground bg-card shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
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
          {/* Filing status */}
          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              {t("filingStatus.label")}
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              {statuses.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setFilingStatus(s.value)}
 className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                    filingStatus === s.value
                      ? "border-sky-500 bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400"
                      : "text-muted-foreground hover:border-ring"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <NumberInput id="refund-wages" label={t("wages")} value={wages} onChange={setWages} />
          <NumberInput id="refund-withholding" label={t("withholding")} hint={t("withholdingHint")} value={withholding} onChange={setWithholding} />
          <NumberInput id="refund-freelance" label={t("freelance")} hint={t("freelanceHint")} value={freelance} onChange={setFreelance} />

          {/* Children stepper */}
          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              {t("children")}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChildren(Math.max(0, children - 1))}
 className="flex h-9 w-9 items-center justify-center rounded-lg border text-lg font-medium text-muted-foreground hover:border-ring"
              >
                −
              </button>
              <span className="w-8 text-center text-lg font-semibold text-foreground">
                {children}
              </span>
              <button
                onClick={() => setChildren(Math.min(10, children + 1))}
 className="flex h-9 w-9 items-center justify-center rounded-lg border text-lg font-medium text-muted-foreground hover:border-ring"
              >
                +
              </button>
            </div>
          </div>
          </div>
        </div>

        {/* ── Result ── */}
        <div className="flex flex-col gap-6">
          {/* Refund / owed card */}
          <div
 className={`rounded-2xl p-6 ${
              !hasIncome
                ? "border bg-secondary "
                : isRefund
                ? "border border-sky-100 bg-sky-50 dark:border-sky-900/40 dark:bg-sky-900/20"
                : "border border-red-100 bg-red-50 dark:border-red-900/40 dark:bg-red-900/20"
            }`}
          >
            <p className="mb-1 text-sm font-medium text-muted-foreground">
              {!hasIncome
                ? t("result.enterIncome")
                : isRefund
                ? t("result.estimatedRefund")
                : t("result.estimatedOwed")}
            </p>
            <p
 className={`text-5xl font-bold tracking-tight ${
                !hasIncome
                  ? "text-muted-foreground/50"
                  : isRefund
                  ? "text-primary dark:text-sky-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {hasIncome ? formatUSD(result.refund) : "$—"}
            </p>
            {hasIncome && (
              <p className="mt-2 text-xs text-muted-foreground">
                {t("result.estimate")}
              </p>
            )}
          </div>

          {/* Breakdown */}
          {hasIncome && (
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                {t("result.breakdown")}
              </p>
              <div className="divide-y divide-border">
                <BreakdownRow label={t("result.grossIncome")} value={result.grossIncome} />
                {result.seTaxDeduction > 0 && (
                  <BreakdownRow label={t("result.seTaxDeduction")} value={result.seTaxDeduction} negative indent />
                )}
                <BreakdownRow label={t("result.agi")} value={result.agi} />
                <BreakdownRow label={t("result.standardDeduction")} value={result.standardDeduction} negative indent />
                <BreakdownRow label={t("result.taxableIncome")} value={result.taxableIncome} />
                <BreakdownRow label={t("result.federalTax")} value={result.federalTax} negative indent />
                {result.childTaxCredit > 0 && (
                  <BreakdownRow label={t("result.childTaxCredit")} value={result.childTaxCredit} indent />
                )}
                <BreakdownRow label={t("result.taxAfterCredits")} value={result.taxAfterCredits} highlight negative />
                <BreakdownRow label={t("result.withheld")} value={result.withheld} highlight />
                <BreakdownRow
                  label={isRefund ? t("result.refund") : t("result.owed")}
                  value={result.refund}
                  highlight
                  negative={!isRefund}
                />
              </div>
            </div>
          )}

          {/* CTA */}
          {hasIncome && (
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <p className="mb-1 text-sm font-semibold text-foreground">
                {t("cta.heading")}
              </p>
              <p className="mb-4 text-xs text-muted-foreground">{t("cta.sub")}</p>
              <Link
                href="#waitlist"
 className="block rounded-lg py-2.5 text-center bg-sky-600 text-sm font-semibold text-white transition hover:bg-sky-500"
                
                
              >
                {t("cta.button")}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-8 text-center text-xs text-muted-foreground/80 dark:text-gray-500">
        {t("disclaimer")}
      </p>
    </div>
  );
}
