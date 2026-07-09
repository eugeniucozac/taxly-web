"use client";

import Script from "next/script";
import { env } from "@/lib/env";

/** GA4. Rendered only from consent-provider's accepted branch. */
export function GoogleAnalytics() {
  const GA_ID = env.NEXT_PUBLIC_GA_ID;
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
