import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getRequestHostname } from "@/lib/canonical-url";
import { getDomainConfig } from "@/lib/domain-config";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";
export const ogImageAlt =
  "Newbridge homes for sale in Southwest Las Vegas | Dr. Jan Duffy, BHHS Nevada Properties";

export async function renderShareImage(): Promise<ImageResponse> {
  const config = getDomainConfig(getRequestHostname());
  const background = await readFile(join(process.cwd(), "public/images/og/share-bg.jpg"));
  const backgroundSrc = `data:image/jpeg;base64,${background.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={backgroundSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
            padding: 64,
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.12) 0%, rgba(15,23,42,0.45) 42%, rgba(15,23,42,0.92) 100%)",
            color: "white",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.9,
            }}
          >
            Berkshire Hathaway HomeServices Nevada Properties
          </div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 700,
              marginTop: 14,
              lineHeight: 1.08,
              maxWidth: 1040,
            }}
          >
            {config.heroHeadline}
          </div>
          <div style={{ fontSize: 28, marginTop: 18, opacity: 0.95 }}>
            Dr. Jan Duffy, REALTOR® · 702-222-1964
          </div>
          <div style={{ fontSize: 22, marginTop: 8, opacity: 0.8 }}>
            License S.0197614.LLC · Las Vegas, NV
          </div>
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
