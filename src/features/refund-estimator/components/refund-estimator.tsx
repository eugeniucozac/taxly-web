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
  label: string;
  hint?: string;
  value: number;
  onChange: (v: number) => void;
}

function NumberInput({ label, hint, value, onChange }: NumberInputProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      {hint && <p className="mb-1.5 text-xs text-gray-500 dark:text-gray-400">{hint}</p>}
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
          $
        </span>
        <input
          type="number"
          min={0}
          value={value || ""}
          placeholder="0"
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
          className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-7 pr-3 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
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
        highlight ? "border-t border-gray-200 font-semibold dark:border-gray-700" : ""
      } ${indent ? "pl-3" : ""}`}
    >
      <span className={`text-sm ${highlight ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"}`}>
        {label}
      </span>
      <span
        className={`text-sm font-medium ${
          highlight && negative
            ? "text-red-600"
            : highlight
            ? "text-sky-600"
            : "text-gray-700 dark:text-gray-300"
        }`}
      >
        {negative ? `−${formatUSD(value)}` : formatUSD(value)}
      </span>
    </div>
  );
}

export function RefundEstimator() {
  const t = useTranslations("refundEstimator");
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
      trackEvent("refund_estimator_complete", { locale, isRefund });
    }
  }, [hasIncome, locale, isRefund]);

  const statuses: { value: FilingStatus; label: string }[] = [
    { value: "single", label: t("filingStatus.single") },
    { value: "mfj", label: t("filingStatus.mfj") },
    { value: "hoh", label: t("filingStatus.hoh") },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* ── Inputs ── */}
        <div className="space-y-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          {/* Filing status */}
          <div>
            <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
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
                      : "border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <NumberInput label={t("wages")} value={wages} onChange={setWages} />
          <NumberInput label={t("withholding")} hint={t("withholdingHint")} value={withholding} onChange={setWithholding} />
          <NumberInput label={t("freelance")} hint={t("freelanceHint")} value={freelance} onChange={setFreelance} />

          {/* Children stepper */}
          <div>
            <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("children")}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-lg font-medium text-gray-600 hover:border-gray-400 dark:border-gray-700 dark:text-gray-400"
              >
                −
              </button>
              <span className="w-8 text-center text-lg font-semibold text-gray-900 dark:text-white">
                {children}
              </span>
              <button
                onClick={() => setChildren(Math.min(10, children + 1))}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-lg font-medium text-gray-600 hover:border-gray-400 dark:border-gray-700 dark:text-gray-400"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* ── Result ── */}
        <div className="flex flex-col gap-6">
          {/* Refund / owed card */}
          <div
            className={`rounded-2xl p-6 ${
              !hasIncome
                ? "border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
                : isRefund
                ? "border border-sky-100 bg-sky-50 dark:border-sky-900/40 dark:bg-sky-900/20"
                : "border border-red-100 bg-red-50 dark:border-red-900/40 dark:bg-red-900/20"
            }`}
          >
            <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              {!hasIncome
                ? t("result.enterIncome")
                : isRefund
                ? t("result.estimatedRefund")
                : t("result.estimatedOwed")}
            </p>
            <p
              className={`text-5xl font-bold tracking-tight ${
                !hasIncome
                  ? "text-gray-300 dark:text-gray-600"
                  : isRefund
                  ? "text-sky-600 dark:text-sky-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {hasIncome ? formatUSD(result.refund) : "$—"}
            </p>
            {hasIncome && (
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                {t("result.estimate")}
              </p>
            )}
          </div>

          {/* Breakdown */}
          {hasIncome && (
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {t("result.breakdown")}
              </p>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
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
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <p className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                {t("cta.heading")}
              </p>
              <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">{t("cta.sub")}</p>
              <Link
                href="#waitlist"
                className="block rounded-lg py-2.5 text-center text-sm font-semibold text-white transition"
                style={{ backgroundColor: "#0ea5e9" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0284c7")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0ea5e9")}
              >
                {t("cta.button")}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
        {t("disclaimer")}
      </p>
    </div>
  );
}
