import { ImageResponse } from "next/og";
import type { LocalePageProps } from "@/types/page";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: LocalePageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const heading = isEs
    ? "Presenta tus impuestos en minutos"
    : "File your taxes in minutes";
  const sub = isEs
    ? "Guiado · Precio fijo · Sin sorpresas"
    : "Guided · Honest pricing · No surprises";

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

        {/* Logo wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#0ea5e9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ color: "white", fontSize: "24px", fontWeight: 700 }}>T</div>
          </div>
          <div style={{ color: "white", fontSize: "28px", fontWeight: 700, letterSpacing: "-0.5px" }}>
            Taxly
          </div>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            maxWidth: "900px",
            marginBottom: "24px",
          }}
        >
          {heading}
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            fontWeight: 400,
            marginBottom: "48px",
          }}
        >
          {sub}
        </div>

        {/* Trust pills */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["Free for W-2", "e-File in minutes", "gettaxly.com"].map((label) => (
            <div
              key={label}
              style={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "100px",
                padding: "10px 20px",
                color: "#cbd5e1",
                fontSize: "18px",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Bottom right URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "64px",
            color: "#0ea5e9",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          gettaxly.com
        </div>
      </div>
    ),
    { width: size.width, height: size.height },
  );
}
