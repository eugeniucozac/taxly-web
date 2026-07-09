import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — Taxly",
  robots: { index: false, follow: false },
};

const css = `
  :root { color-scheme: light dark; }
  body {
    margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
    background: #ffffff; color: #0f172a;
  }
  main { max-width: 34rem; padding: 3rem 1.5rem; text-align: center; }
  .tile {
    width: 3.5rem; height: 3.5rem; margin: 0 auto; border-radius: 0.875rem;
    display: flex; align-items: center; justify-content: center;
    background: #0ea5e9; color: #ffffff; font-size: 1.5rem; font-weight: 700;
  }
  h1 { margin: 1.5rem 0 0; font-size: 1.875rem; letter-spacing: -0.025em; }
  p { margin: 0.875rem auto 0; max-width: 28rem; line-height: 1.6; color: #475569; }
  a.cta {
    display: inline-block; margin-top: 2rem; padding: 0.625rem 1.5rem; border-radius: 0.5rem;
    background: #0ea5e9; color: #ffffff; font-size: 0.875rem; font-weight: 600; text-decoration: none;
  }
  @media (prefers-color-scheme: dark) {
    body { background: #0f172a; color: #f8fafc; }
    p { color: #94a3b8; }
  }
`;

/**
 * Root 404 — the shell Next.js actually serves for every notFound() response
 * in production (the prerendered /_not-found). Without this file the server
 * HTML is the framework's bare \`__next_error__\` page and the branded
 * [locale]/not-found.tsx only appears after client-side hydration. This file
 * is deliberately self-contained (own <html>, inline CSS, no i18n/request
 * context) because /_not-found is prerendered with no locale available.
 */
export default function RootNotFound() {
  return (
    <html lang="en">
      <body>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <main>
          <div className="tile" aria-hidden>
            T
          </div>
          <h1>Page not found</h1>
          <p>That page doesn&#39;t exist — it may have moved, or the link was mistyped. The free tools and guides are the fastest way back.</p>
          <a className="cta" href="/en">
            Back to home
          </a>
        </main>
      </body>
    </html>
  );
}
