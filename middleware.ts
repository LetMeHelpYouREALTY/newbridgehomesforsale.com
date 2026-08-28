import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname =
    request.headers.get("x-forwarded-host")?.split(",")[0].trim() ||
    request.headers.get("host") ||
    "";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-domain", hostname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    // Skip API, Next internals, and static assets so middleware stays off the hot path
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|Image|videos|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
