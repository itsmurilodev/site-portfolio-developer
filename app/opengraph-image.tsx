import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export const alt = "Murilo Alves | Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#07050f",
          backgroundSize: "40px 40px",
          backgroundImage: 
            "linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          position: "relative",
          fontFamily: "monospace",
        }}
      >
        {/* Glowing Neon light overlay */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "500px",
            backgroundColor: "rgba(139, 92, 246, 0.08)",
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "500px",
            backgroundColor: "rgba(6, 182, 212, 0.08)",
            filter: "blur(100px)",
          }}
        />

        {/* Top Header metadata mockup */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            paddingBottom: "30px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#06b6d4",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <span>&gt;_ murilo_os:~$ opengraph_preview</span>
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "14px",
            }}
          >
            v1.0.0
          </div>
        </div>

        {/* Center Main branding text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-2px",
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#a1a1aa",
              margin: 0,
              borderLeft: "4px solid #06b6d4",
              paddingLeft: "20px",
              lineHeight: "1.4",
              maxWidth: "850px",
            }}
          >
            {siteConfig.role}
          </p>
        </div>

        {/* Bottom footer metadata */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "30px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "30px",
              color: "rgba(255,255,255,0.5)",
              fontSize: "14px",
            }}
          >
            <div>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>host: </span>
              <span style={{ color: "#06b6d4" }}>murilo.dev</span>
            </div>
            <div>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>focus: </span>
              <span style={{ color: "#8b5cf6" }}>Backend • DevOps • Automation</span>
            </div>
          </div>

          <div
            style={{
              color: "#a1a1aa",
              fontSize: "14px",
            }}
          >
            Aprender construindo. Evoluir entregando.
          </div>
        </div>

      </div>
    ),
    {
      ...size,
    }
  );
}
