import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE_HOST = "www.newbridgehomesforsale.com";

function isUntrustedHost(host: string): boolean {
  const clean = host.replace(/^www\./, "").toLowerCase();
  return (
    !clean ||
    clean === "localhost" ||
    clean.startsWith("127.") ||
    clean === "vercel.com" ||
    clean.endsWith(".vercel.com") ||
    clean.endsWith(".vercel.app") ||
    clean === "heyberkshire.com"
  );
}

export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host") || "";
  const forwarded = request.headers.get("x-forwarded-host")?.split(",")[0].trim() || "";
  const hostname = [hostHeader, forwarded].find((value) => !isUntrustedHost(value)) || SITE_HOST;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-domain", hostname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|Image|videos|og.jpg|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
