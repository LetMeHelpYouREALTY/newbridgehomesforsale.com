/**
 * Resolve canonical site origin from request host (multi-domain deployments).
 */
export function siteUrlFromHost(hostname: string): string {
  const host = hostname.toLowerCase().trim();
  if (!host || host.includes("localhost") || host.startsWith("127.0.0.1")) {
    return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  }
  if (host.startsWith("http://") || host.startsWith("https://")) {
    return host.replace(/\/$/, "");
  }
  return `https://${host}`;
}
