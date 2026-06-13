import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/features/blog/lib/blog";
import type { LocaleSlugPageProps } from "@/types/page";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: LocaleSlugPageProps) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale);

  const title = post?.title ?? "Taxly Blog";
  const tags = post?.tags ?? [];
  const date = post?.date
    ? new Date(post.date).toLocaleDateString(locale === "es" ? "es-US" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0f172a",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#0ea5e9",
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: "#0ea5e9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ color: "white", fontSize: "20px", fontWeight: 700 }}>T</div>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "22px", fontWeight: 600 }}>
            Taxly Blog
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
            {tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "#0ea5e920",
                  border: "1px solid #0ea5e940",
                  borderRadius: "100px",
                  padding: "6px 16px",
                  color: "#38bdf8",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? "48px" : "58px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            maxWidth: "1000px",
            flex: 1,
          }}
        >
          {title}
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "40px",
          }}
        >
          <div style={{ color: "#64748b", fontSize: "18px" }}>
            {date ? `Taxly Team · ${date}` : "Taxly Team"}
          </div>
          <div style={{ color: "#0ea5e9", fontSize: "18px", fontWeight: 600 }}>
            gettaxly.com
          </div>
        </div>
      </div>
    ),
    { width: size.width, height: size.height },
  );
}
