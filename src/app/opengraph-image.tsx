import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a5c52 0%, #0d7d6f 55%, #17a894 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 88,
              height: 88,
              borderRadius: 22,
              background: "rgba(255,255,255,0.16)",
              color: "#ffffff",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            RM
          </div>
          <div style={{ fontSize: 52, fontWeight: 700, color: "#ffffff" }}>{SITE.name}</div>
        </div>
        <div style={{ marginTop: 44, fontSize: 44, fontWeight: 700, color: "#ffffff", maxWidth: 920, lineHeight: 1.25 }}>
          Know your real take-home pay in Malaysia
        </div>
        <div style={{ marginTop: 20, fontSize: 26, color: "rgba(255,255,255,0.85)", maxWidth: 880 }}>
          EPF · SOCSO · EIS · PCB — calculated live in your browser, every number explained.
        </div>
      </div>
    ),
    { ...size }
  );
}
