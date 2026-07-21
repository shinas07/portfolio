import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

/**
 * The link-preview card (LinkedIn, WhatsApp, X, Slack). Generated at build
 * time from the same tokens the site uses, so the preview and the page can't
 * drift apart. 1200×630 is the OG standard; hex values are the compiled
 * dark-theme tokens because satori can't read CSS custom properties.
 */
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#060709";
const RAISED = "#16191c";
const BORDER = "#23272b";
const FG = "#f4f5f7";
const MUTED = "#9aa1ab";
const ACCENT = "#00d2ca";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: `radial-gradient(circle at 85% 10%, rgba(0, 210, 202, 0.16) 0%, ${BG} 45%)`,
          backgroundColor: BG,
          color: FG,
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 12,
              backgroundColor: RAISED,
              border: `2px solid ${BORDER}`,
              color: ACCENT,
              fontSize: 24,
            }}
          >
            sa
          </div>
          <div style={{ display: "flex", fontSize: 26, color: MUTED }}>
            shinas<span style={{ color: ACCENT }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              color: ACCENT,
              textTransform: "uppercase",
            }}
          >
            {site.role} · {site.company}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: -4,
              color: FG,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 28,
              lineHeight: 1.5,
              color: MUTED,
              maxWidth: 900,
            }}
          >
            Real-time, high-concurrency systems — in Python and TypeScript.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            color: MUTED,
            borderTop: `2px solid ${BORDER}`,
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 10,
              height: 10,
              borderRadius: 10,
              backgroundColor: ACCENT,
            }}
          />
          Python · FastAPI · Django · TypeScript · React · PostgreSQL · AWS
        </div>
      </div>
    ),
    size,
  );
}
