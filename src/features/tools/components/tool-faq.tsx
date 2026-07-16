import { JsonLd } from "@/components/seo/json-ld";
import { BASE_URL } from "@/lib/metadata";

type FaqItem = { q: string; a: string };

/** Visible FAQ section + matching FAQPage JSON-LD for a tool page. Google's
 * rich-result rules require the schema content to be visible on the page,
 * so both render from the same items. */
export function ToolFaq({
  items,
  heading,
  path,
}: {
  items: FaqItem[];
  heading: string;
  path: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${BASE_URL}${path}`,
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="mx-auto mt-16 max-w-3xl px-6">
      <JsonLd data={schema} />
      <h2 className="mb-6 text-center text-2xl font-bold tracking-tight">{heading}</h2>
      <div className="space-y-3">
        {items.map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-xl border bg-card px-5 py-4 open:shadow-sm"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold marker:hidden">
              {q}
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
