"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Loader2, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type State = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border px-4 py-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20";

export function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [state, setState] = useState<State>("idle");
  const subjects: string[] = t.raw("form.subjects") as string[];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          subject: form.get("subject"),
          message: form.get("message"),
          locale,
        }),
      });
      setState(res.ok ? "success" : "error");
      if (res.ok) trackEvent("contact_submitted", { locale });
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-6 text-green-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
        <CheckCircle2 size={20} className="mt-0.5 shrink-0" aria-hidden />
        <p className="text-sm leading-relaxed">{t("form.success")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-muted-foreground">
            {t("form.name")}
          </label>
          <input id="contact-name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-muted-foreground">
            {t("form.email")}
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-muted-foreground">
          {t("form.subject")}
        </label>
        <select id="contact-subject" name="subject" className={inputClass}>
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-muted-foreground">
          {t("form.message")}
        </label>
        <textarea id="contact-message" name="message" required rows={6} className={inputClass} />
        <p className="mt-1.5 text-xs text-muted-foreground/70">{t("form.noPii")}</p>
      </div>
      {state === "error" && (
        <p role="alert" className="text-sm text-red-500 dark:text-red-400">
          {t("form.error")}
        </p>
      )}
      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:opacity-60"
      >
        {state === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden /> {t("form.sending")}
          </>
        ) : (
          t("form.send")
        )}
      </button>
    </form>
  );
}
