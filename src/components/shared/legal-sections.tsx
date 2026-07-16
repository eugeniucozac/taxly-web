export interface LegalSection {
  id: string;
  heading: string;
  intro?: string[];
  bullets?: string[];
  outro?: string[];
}

/** Numbered, anchor-linkable prose sections shared by the legal documents. */
export function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((s, i) => (
        <section key={s.id} id={s.id} className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            <span className="mr-2.5 font-mono text-sm font-medium text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            {s.heading}
          </h2>
          {s.intro?.map((p, j) => (
            <p key={j} className="mb-3 leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          {s.bullets && s.bullets.length > 0 ? (
            <ul className="mb-3 list-disc space-y-1.5 pl-5 leading-relaxed text-muted-foreground marker:text-primary">
              {s.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          ) : null}
          {s.outro?.map((p, j) => (
            <p key={j} className="mb-3 leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
