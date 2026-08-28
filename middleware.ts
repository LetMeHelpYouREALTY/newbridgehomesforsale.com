import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const response = NextResponse.next();
  // Pass hostname to pages via header so server components can read it
  response.headers.set("x-domain", hostname);
  return response;
}

export const config = {
  matcher: [
    // Skip API, Next internals, and static assets so middleware stays off the hot path
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|Image|videos|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
