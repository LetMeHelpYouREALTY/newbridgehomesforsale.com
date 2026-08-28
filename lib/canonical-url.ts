import { headers } from "next/headers";

/** Production host for this repo when the request host is missing (preview, local). */
export const PROJECT_PRODUCTION_HOST = "newbridgehomesforsale.com";

export function normalizeHostname(raw: string | null | undefined): string {
  if (!raw) return "";
  return raw
    .split(",")[0]
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "")
    .replace(/:\d+$/, "");
}

function isEphemeralHost(host: string): boolean {
  return (
    !host ||
    host === "localhost" ||
    host.startsWith("127.") ||
    host.startsWith("0.0.0.0") ||
    host.endsWith(".vercel.app")
  );
}

/**
 * Canonical origin for metadata, sitemap, and JSON-LD.
 * Uses the request host in production; does not force www on Vercel preview URLs.
 */
export function getCanonicalSiteUrl(hostname: string): string {
  const host = normalizeHostname(hostname);

  if (isEphemeralHost(host)) {
    const prod = normalizeHostname(
      process.env.VERCEL_PROJECT_PRODUCTION_URL || PROJECT_PRODUCTION_HOST
    );
    if (isEphemeralHost(prod)) {
      return `https://${prod || PROJECT_PRODUCTION_HOST}`;
    }
    return `https://www.${prod.replace(/^www\./, "")}`;
  }

  return `https://www.${host.replace(/^www\./, "")}`;
}

export function getRequestHostname(): string {
  const headerList = headers();
  return (
    normalizeHostname(headerList.get("x-domain")) ||
    normalizeHostname(headerList.get("x-forwarded-host")) ||
    normalizeHostname(headerList.get("host"))
  );
}

export function getRequestSiteUrl(): string {
  return getCanonicalSiteUrl(getRequestHostname());
}
