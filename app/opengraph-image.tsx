import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = "Live Morocco, not tourism — Slow surf trip, winter 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#2F4754",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
        }}
      >
        <p
          style={{
            color: "#D4B06A",
            fontFamily: "serif",
            fontSize: 14,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 24,
            display: "flex",
          }}
        >
          TAMRAGHT · WINTER 26 · 7 DAYS
        </p>
        <h1
          style={{
            color: "#EFE3CC",
            fontFamily: "serif",
            fontSize: 72,
            fontWeight: 600,
            fontStyle: "italic",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: 24,
            display: "flex",
            maxWidth: 900,
          }}
        >
          {site.heroHeadline}
        </h1>
        <p
          style={{
            color: "#D8C7AF",
            fontFamily: "sans-serif",
            fontSize: 22,
            lineHeight: 1.5,
            maxWidth: 700,
            opacity: 0.8,
            display: "flex",
          }}
        >
          {site.seoDescription}
        </p>
      </div>
    ),
    { ...size }
  );
}
