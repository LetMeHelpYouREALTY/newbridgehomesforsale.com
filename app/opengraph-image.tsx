import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Dr. Jan Duffy, REALTOR® | Berkshire Hathaway HomeServices Nevada Properties | Las Vegas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 2, textTransform: "uppercase", opacity: 0.85 }}>
          Berkshire Hathaway HomeServices
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 16, lineHeight: 1.1 }}>
          Dr. Jan Duffy, REALTOR®
        </div>
        <div style={{ fontSize: 32, marginTop: 24, opacity: 0.9 }}>
          Las Vegas · Henderson · Summerlin
        </div>
        <div style={{ fontSize: 24, marginTop: 40, opacity: 0.75 }}>
          702-222-1964 · License S.0197614.LLC
        </div>
      </div>
    ),
    { ...size }
  );
}
