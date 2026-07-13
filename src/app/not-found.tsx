import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — Taxly",
  robots: { index: false, follow: false },
};

/*
 * Concept: Form 404. Taxly files US taxes, so the 404 is a little IRS-form
 * parody — "Form 404: Missing Page Return" with form-style boxes — over a
 * light sky-blue page. Self-contained (own <html>, inline CSS): this is the
 * prerendered /_not-found shell the server sends for every 404.
 */
const css = `
  * { box-sizing: border-box; }
  body {
    margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
    background: radial-gradient(ellipse 80% 60% at 50% -10%, #e0f2fe, #ffffff 60%);
    color: #0f172a;
  }
  main { max-width: 42rem; padding: 3rem 1.5rem; text-align: center; }
  .form {
    margin: 0 auto; max-width: 26rem; border: 1.5px solid #0f172a; border-radius: 0.375rem;
    background: #ffffff; text-align: left; box-shadow: 4px 4px 0 #bae6fd;
  }
  .form-head {
    display: flex; align-items: stretch; border-bottom: 1.5px solid #0f172a;
  }
  .form-no {
    padding: 0.625rem 0.875rem; border-right: 1.5px solid #0f172a;
    font-size: 0.6875rem; font-weight: 700; line-height: 1.3;
  }
  .form-no b { display: block; font-size: 1.375rem; letter-spacing: -0.02em; }
  .form-title {
    display: flex; flex-direction: column; justify-content: center; padding: 0.5rem 0.875rem;
  }
  .form-title b { font-size: 0.9375rem; }
  .form-title small { color: #64748b; font-size: 0.6875rem; }
  .form-body { padding: 0.875rem; font-size: 0.8125rem; }
  .form-line {
    display: flex; justify-content: space-between; gap: 0.75rem; padding: 0.375rem 0;
    border-bottom: 1px dotted #cbd5e1;
  }
  .form-line:last-child { border-bottom: 0; }
  .form-line .fill { font-weight: 700; color: #0284c7; }
  h1 { margin: 2rem 0 0; font-size: 1.875rem; font-weight: 700; letter-spacing: -0.025em; }
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
`;

export default function RootNotFound() {
  return (
    <html lang="en">
      <body>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <main>
          <div className="form" aria-hidden>
            <div className="form-head">
              <div className="form-no">
                Form
                <b>404</b>
              </div>
              <div className="form-title">
                <b>Missing Page Return</b>
                <small>Department of Pages That Moved · Do not file</small>
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
                <span>3. Fastest way back (check one)</span>
                <span className="fill">☑ below</span>
              </div>
            </div>
          </div>
          <h1>Page not found</h1>
          <p className="subtext">
            That page doesn&#39;t exist — it may have moved, or the link was
            mistyped. The free tools and guides are the fastest way back.
          </p>
          <div className="actions">
            <a className="cta" href="/en">
              Back to home
            </a>
            <a className="ghost" href="/en/tools">
              Explore free tools
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
