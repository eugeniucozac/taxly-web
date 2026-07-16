/* Self-contained prerendered 404 shell — next/link can't be used here, so the
   raw <a> navigation is intentional. */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — Taxly",
  robots: { index: false, follow: false },
};

/*
 * Concept: Form 404. Taxly files US taxes, so the 404 is a little IRS-form
 * parody — "Form 404: Missing Page Return" staged as a paper form: a second
 * sheet peeking out behind, a rotated DO-NOT-FILE stamp breaking the corner,
 * dotted fill-in lines, a filing-status checkbox row, and a signature strip.
 * The page sits on the brand's ruled fill-in-lines texture and supports dark
 * mode via prefers-color-scheme. Self-contained (own <html>, inline CSS):
 * this is the prerendered /_not-found shell the server sends for every 404.
 */
const css = `
  * { box-sizing: border-box; }
  body {
    margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
    background:
      repeating-linear-gradient(to bottom, transparent 0, transparent 34px, rgba(2, 132, 199, 0.05) 34px, rgba(2, 132, 199, 0.05) 35px),
      radial-gradient(ellipse 80% 60% at 50% -10%, #e0f2fe, #ffffff 60%);
    color: #0f172a;
  }
  main { max-width: 52rem; padding: 3.5rem 1.5rem; text-align: center; }
  .sheet { position: relative; margin: 0 auto; max-width: 26rem; }
  .sheet::before {
    content: ""; position: absolute; inset: 0; border-radius: 0.375rem;
    border: 1.5px solid rgba(15, 23, 42, 0.25); background: #f8fafc;
    transform: rotate(2deg) translate(7px, 5px);
  }
  .stamp {
    position: absolute; top: -0.875rem; right: -1rem; z-index: 2;
    padding: 0.3rem 0.7rem; border: 2px dashed #0284c7; border-radius: 0.375rem;
    background: rgba(255, 255, 255, 0.9); color: #0284c7;
    font-size: 0.6875rem; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase;
    transform: rotate(7deg);
  }
  .form {
    position: relative; border: 1.5px solid #0f172a; border-radius: 0.375rem;
    background: #ffffff; text-align: left; box-shadow: 4px 4px 0 #bae6fd;
  }
  .form-head { display: flex; align-items: stretch; border-bottom: 1.5px solid #0f172a; }
  .form-no {
    padding: 0.625rem 0.875rem; border-right: 1.5px solid #0f172a;
    font-size: 0.6875rem; font-weight: 700; line-height: 1.3;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  .form-no b { display: block; font-size: 1.375rem; letter-spacing: -0.02em; }
  .form-title {
    flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.5rem 0.875rem;
  }
  .form-title b { font-size: 0.9375rem; }
  .form-title small { color: #64748b; font-size: 0.6875rem; }
  .form-year {
    display: flex; flex-direction: column; justify-content: center; padding: 0.5rem 0.875rem;
    border-left: 1.5px solid #0f172a; font-size: 0.625rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; text-align: center;
  }
  .form-year b {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.8125rem; color: #0f172a; letter-spacing: 0; text-transform: none;
  }
  .form-body { padding: 0.875rem; font-size: 0.8125rem; }
  .form-line {
    display: flex; justify-content: space-between; gap: 0.75rem; padding: 0.375rem 0;
    border-bottom: 1px dotted #cbd5e1;
  }
  .form-line .fill { font-weight: 700; color: #0284c7; white-space: nowrap; }
  .form-checks { padding-top: 0.55rem; font-size: 0.75rem; color: #475569; }
  .form-checks b { color: #0f172a; margin-right: 0.35rem; }
  .form-checks span { margin-right: 0.6rem; white-space: nowrap; }
  .form-sign {
    display: flex; align-items: stretch; border-top: 1.5px solid #0f172a; font-size: 0.75rem;
  }
  .form-sign .who {
    flex: 1; display: flex; align-items: baseline; gap: 0.4rem; padding: 0.55rem 0.875rem; min-width: 0;
  }
  .form-sign .who .x { color: #0284c7; font-weight: 800; }
  .form-sign .who .line { flex: 1; border-bottom: 1px dotted #94a3b8; min-width: 2rem; }
  .form-sign .who small { color: #64748b; white-space: nowrap; }
  .form-sign .when {
    display: flex; align-items: center; gap: 0.35rem; padding: 0.55rem 0.875rem;
    border-left: 1.5px solid #0f172a; color: #64748b;
  }
  .form-sign .when b { color: #0284c7; }
  h1 { margin: 2.25rem 0 0; font-size: 1.875rem; font-weight: 700; letter-spacing: -0.025em; }
  .subtext { margin: 0.875rem auto 0; max-width: 28rem; line-height: 1.65; color: #64748b; }
  .actions { margin-top: 1.75rem; display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
  a.cta, a.ghost {
    display: inline-block; padding: 0.7rem 1.625rem; border-radius: 0.625rem;
    font-size: 0.9375rem; font-weight: 600; text-decoration: none; transition: 150ms;
  }
  a.cta { background: #0ea5e9; color: #ffffff; }
  a.cta:hover { background: #0284c7; }
  a.ghost { border: 1px solid #cbd5e1; color: #0f172a; }
  a.ghost:hover { border-color: #0ea5e9; color: #0284c7; }
  a:focus-visible { outline: 2px solid #0ea5e9; outline-offset: 2px; }
  .eyebrow {
    margin: 3rem auto 0; display: inline-flex; align-items: stretch;
    border: 1.5px solid #0f172a; border-radius: 0.375rem; background: #ffffff;
    font-size: 0.6875rem; overflow: hidden;
  }
  .eyebrow .eb-l {
    padding: 0.375rem 0.75rem; border-right: 1.5px solid #0f172a;
    font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;
  }
  .eyebrow .eb-r { padding: 0.375rem 0.75rem; color: #64748b; }
  .grid { margin-top: 1.25rem; display: grid; gap: 0.875rem; text-align: left; }
  @media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 900px) { .grid { grid-template-columns: repeat(3, 1fr); } }
  .grid a {
    display: block; padding: 1.125rem 1.25rem; border-radius: 0.5rem;
    border: 1px solid #cbd5e1; background: #ffffff; text-decoration: none;
    transition: border-color 150ms, box-shadow 150ms, transform 150ms;
  }
  .grid a:hover {
    border-color: #0ea5e9; transform: translate(-2px, -2px);
    box-shadow: 3px 3px 0 #bae6fd;
  }
  .grid .t { display: block; font-size: 0.9375rem; font-weight: 600; color: #0f172a; }
  .grid .d { display: block; margin-top: 0.25rem; font-size: 0.8125rem; line-height: 1.5; color: #64748b; }
  .grid .free {
    display: inline-block; margin-left: 0.375rem; padding: 0.1rem 0.5rem; border-radius: 9999px;
    background: #d1fae5; color: #047857; font-size: 0.6875rem; font-weight: 600;
  }
  @media (prefers-color-scheme: dark) {
    body {
      background:
        repeating-linear-gradient(to bottom, transparent 0, transparent 34px, rgba(56, 189, 248, 0.05) 34px, rgba(56, 189, 248, 0.05) 35px),
        radial-gradient(ellipse 80% 60% at 50% -10%, rgba(2, 132, 199, 0.25), #0b1220 60%);
      color: #e2e8f0;
    }
    .sheet::before { border-color: rgba(226, 232, 240, 0.2); background: #0f172a; }
    .stamp { background: rgba(11, 18, 32, 0.9); border-color: #38bdf8; color: #38bdf8; }
    .form { border-color: #e2e8f0; background: #0f172a; box-shadow: 4px 4px 0 rgba(14, 165, 233, 0.25); }
    .form-head, .form-sign { border-color: #e2e8f0; }
    .form-no, .form-title, .form-year { border-color: #e2e8f0; }
    .form-year b, .form-checks b { color: #e2e8f0; }
    .form-title small, .form-year, .form-checks, .form-sign .who small, .form-sign .when { color: #94a3b8; }
    .form-line { border-color: #334155; }
    .form-line .fill, .form-sign .who .x, .form-sign .when b { color: #38bdf8; }
    .form-sign .who .line { border-color: #475569; }
    .form-sign .when { border-left-color: #e2e8f0; }
    .subtext { color: #94a3b8; }
    a.ghost { border-color: #334155; color: #e2e8f0; }
    a.ghost:hover { border-color: #38bdf8; color: #38bdf8; }
    .eyebrow { border-color: #e2e8f0; background: #0f172a; }
    .eyebrow .eb-l { border-color: #e2e8f0; color: #e2e8f0; }
    .eyebrow .eb-r { color: #94a3b8; }
    .grid a { border-color: #334155; background: #0f172a; }
    .grid a:hover { border-color: #38bdf8; box-shadow: 3px 3px 0 rgba(14, 165, 233, 0.25); }
    .grid .t { color: #e2e8f0; }
    .grid .d { color: #94a3b8; }
    .grid .free { background: rgba(16, 185, 129, 0.15); color: #34d399; }
  }
`;

const LINKS: { href: string; title: string; desc: string; free?: boolean }[] = [
  {
    href: "/en/refund-estimator",
    title: "Refund estimator",
    desc: "A five-minute read on your refund or bill — no signup, no email.",
    free: true,
  },
  {
    href: "/en/free-tax-filing",
    title: "Actually free filing",
    desc: "Every genuinely free way to file, and what “free” usually hides.",
  },
  {
    href: "/en/turbotax-alternative",
    title: "TurboTax alternatives",
    desc: "The honest comparison — free government options named first.",
  },
  {
    href: "/en/tools/quarterly-tax",
    title: "Quarterly tax calculator",
    desc: "Safe-harbor amounts and the four due dates, computed for you.",
    free: true,
  },
  {
    href: "/en/pricing",
    title: "Pricing",
    desc: "Flat, locked tiers — the price you see is the price you pay.",
  },
  {
    href: "/en/blog",
    title: "Guides & blog",
    desc: "Plain-English tax guides that name the free option when it wins.",
  },
];

export default function RootNotFound() {
  return (
    <html lang="en">
      <body>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <main>
          <div className="sheet" aria-hidden>
            <div className="stamp">Do not file</div>
            <div className="form">
              <div className="form-head">
                <div className="form-no">
                  Form
                  <b>404</b>
                </div>
                <div className="form-title">
                  <b>Missing Page Return</b>
                  <small>Department of Pages That Moved</small>
                </div>
                <div className="form-year">
                  Tax year
                  <b>any</b>
                </div>
              </div>
              <div className="form-body">
                <div className="form-line">
                  <span>1. Page you were looking for</span>
                  <span className="fill">not found</span>
                </div>
                <div className="form-line">
                  <span>2. Penalty owed</span>
                  <span className="fill">$0.00</span>
                </div>
                <div className="form-line">
                  <span>3. Interest accrued</span>
                  <span className="fill">$0.00</span>
                </div>
                <div className="form-line">
                  <span>4. Refund due</span>
                  <span className="fill">one working link</span>
                </div>
                <div className="form-checks">
                  <b>Filing status:</b>
                  <span>☐ Single</span>
                  <span>☐ Jointly</span>
                  <span>☑ Lost</span>
                </div>
              </div>
              <div className="form-sign">
                <div className="who">
                  <span>Sign here</span>
                  <span className="x">✗</span>
                  <span className="line" />
                  <small>(you don’t have to)</small>
                </div>
                <div className="when">
                  Date: <b>today</b>
                </div>
              </div>
            </div>
          </div>
          <h1>Page not found</h1>
          <p className="subtext">
            That page doesn’t exist — it may have moved, or the link was
            mistyped. The free tools and guides below are the fastest way back.
          </p>
          <div className="actions">
            <a className="cta" href="/en">
              Back to home
            </a>
            <a className="ghost" href="/en/tools">
              Explore free tools
            </a>
          </div>
          <div className="eyebrow">
            <span className="eb-l">Where people usually want to go</span>
            <span className="eb-r">free means free — no signup</span>
          </div>
          <div className="grid">
            {LINKS.map(({ href, title, desc, free }) => (
              <a key={href} href={href}>
                <span className="t">
                  {title}
                  {free && <span className="free">Free</span>}
                </span>
                <span className="d">{desc}</span>
              </a>
            ))}
          </div>
        </main>
      </body>
    </html>
  );
}
