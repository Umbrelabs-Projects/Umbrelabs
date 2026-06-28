import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site"

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#14110a",
          backgroundImage:
            "radial-gradient(900px circle at 100% 0%, rgba(255,191,0,0.22), transparent 55%), radial-gradient(700px circle at 0% 100%, rgba(11,107,99,0.16), transparent 55%)",
          fontFamily: "Georgia, 'Times New Roman', serif",
          position: "relative",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 46, fontWeight: 700, letterSpacing: -1 }}>
          <span style={{ color: "#fffdf8" }}>Umbre</span>
          <span style={{ color: "#ffcf5c" }}>labs</span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#ffcf5c",
              fontFamily: "Helvetica, Arial, sans-serif",
              marginBottom: 28,
            }}
          >
            Multi-disciplinary technology studio
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 82, lineHeight: 1.08, color: "#fffdf8" }}>
            <div>Engineering the future</div>
            <div>of technology, with</div>
            <div style={{ color: "#ffcf5c", fontStyle: "italic" }}>craft.</div>
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,253,248,0.18)",
            paddingTop: 32,
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: 28,
            color: "rgba(255,253,248,0.7)",
          }}
        >
          <span>Software · Design · Data · Consulting</span>
          <span style={{ color: "#fffdf8" }}>{siteConfig.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
