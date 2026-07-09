"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Loader2, CheckCircle2 } from "lucide-react";
import { env } from "@/lib/env";
import { trackEvent } from "@/lib/analytics";

type State = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  return <ContactClient />;
}

function ContactClient() {
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

  return (
    <div className="py-20">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">{t("heading")}</h1>
        <p className="mb-12 text-lg text-slate-500">{t("subheading")}</p>

        {state === "success" ? (
          <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-6 text-green-700">
            <CheckCircle2 size={20} />
            <p>{t("form.success")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">{t("form.name")}</label>
                <input name="name" required className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">{t("form.email")}</label>
                <input name="email" type="email" required className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">{t("form.subject")}</label>
              <select name="subject" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100">
                {subjects.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">{t("form.message")}</label>
              <textarea name="message" required rows={5} className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100" />
            </div>
            {state === "error" && <p className="text-sm text-red-500">{t("form.error")}</p>}
            <button
              type="submit"
              disabled={state === "loading"}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition disabled:opacity-60"
              style={{ backgroundColor: "#0ea5e9" }}
            >
              {state === "loading" ? <><Loader2 size={16} className="animate-spin" /> {t("form.sending")}</> : t("form.send")}
            </button>
          </form>
        )}

        <p className="mt-10 text-sm text-slate-400">
          {t("directEmail")}{" "}
          <a href={`mailto:${env.CONTACT_EMAIL}`} className="text-sky-600 hover:underline">
            {env.CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
}
