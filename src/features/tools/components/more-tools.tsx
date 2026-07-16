import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

type ToolKey = "refundEstimator" | "penaltyEstimator" | "quarterlyTax";

const TOOL_HREF: Record<ToolKey, string> = {
  refundEstimator: "/refund-estimator",
  penaltyEstimator: "/tools/penalty-estimator",
  quarterlyTax: "/tools/quarterly-tax",
};

/** Cross-links between the three free tools so no tool page dead-ends. */
export async function MoreTools({ locale, current }: { locale: string; current: ToolKey }) {
  const t = await getTranslations({ locale, namespace: "tools" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const others = (Object.keys(TOOL_HREF) as ToolKey[]).filter((k) => k !== current);

  return (
    <div className="mx-auto mt-16 max-w-xl px-6">
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
        {t("moreHeading")}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {others.map((key) => (
          <Link
            key={key}
            href={TOOL_HREF[key]}
            className="rounded-lg border px-3.5 py-2 text-sm font-medium text-muted-foreground transition hover:border-ring hover:text-foreground"
          >
            {tNav(key)}
          </Link>
        ))}
        <Link
          href="/tools"
          className="inline-flex items-center gap-1 rounded-lg border px-3.5 py-2 text-sm font-medium text-primary transition hover:border-ring"
        >
          {tNav("toolsHub")}
          <ArrowRight size={13} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
