import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Brand favicon — the form-card-with-check logo mark, white on the sky
 * brand primary (matches components/layout/logo.tsx). */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0ea5e9",
          borderRadius: 7,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <rect
            x="3"
            y="2.75"
            width="17.5"
            height="18.5"
            rx="2.5"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
          />
          <line x1="3" y1="8.25" x2="20.5" y2="8.25" stroke="#ffffff" strokeWidth="1.7" />
          <line x1="9" y1="2.75" x2="9" y2="8.25" stroke="#ffffff" strokeWidth="1.7" />
          <path
            d="M12.75 16.25l3.35 3.35L22.5 13"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
