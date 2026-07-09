"use client";

import Script from "next/script";
import { env } from "@/lib/env";

/** Microsoft Clarity. Rendered only from consent-provider's accepted branch. */
export function MicrosoftClarity() {
  const CLARITY_ID = env.NEXT_PUBLIC_CLARITY_ID;
  if (!CLARITY_ID) return null;

  return (
    <Script id="clarity-init" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `}
    </Script>
  );
}
