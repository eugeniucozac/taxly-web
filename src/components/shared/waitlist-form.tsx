"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type State = "idle" | "loading" | "success" | "error";

interface WaitlistFormProps {
  placeholder?: string;
  ctaLabel?: string;
  successMessage?: string;
  errorMessage?: string;
 className?: string;
}

export function WaitlistForm({
  placeholder = "Enter your email",
  ctaLabel = "Join the waitlist",
  successMessage = "You're on the list! Check your inbox.",
  errorMessage = "Something went wrong. Please try again.",
 className,
}: WaitlistFormProps) {
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "loading" || state === "success") return;

    setState("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale }),
      });
      setState(res.ok ? "success" : "error");
      if (res.ok) trackEvent("waitlist_signup", { locale });
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className={cn("flex items-center gap-2 text-green-600 dark:text-emerald-400", className)}>
        <CheckCircle2 size={20} />
        <span className="text-sm font-medium">{successMessage}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        aria-hidden="true"
 className="hidden"
        autoComplete="off"
      />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        disabled={state === "loading"}
 className="w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/80 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 disabled:opacity-60 sm:min-w-72"
      />
      <button
        type="submit"
        disabled={state === "loading"}
 className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition disabled:opacity-60 bg-sky-600 hover:bg-sky-500"
      >
        {state === "loading" ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <>
            {ctaLabel}
            <ArrowRight size={16} />
          </>
        )}
      </button>
      {state === "error" && (
        <p className="text-xs text-red-500 dark:text-red-400 sm:col-span-2">{errorMessage}</p>
      )}
    </form>
  );
}
