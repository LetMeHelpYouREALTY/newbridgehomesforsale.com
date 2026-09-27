import { headers } from "next/headers";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbTrail } from "@/lib/breadcrumb-trail";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { getSiteBaseUrlFromHost } from "@/lib/site-base-url";

/**
 * Emits BreadcrumbList JSON-LD on all non-home routes (server-rendered).
 */
export default function AutoBreadcrumbSchema() {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "/";

  if (pathname === "/" || pathname === "") {
    return null;
  }

  const items = buildBreadcrumbTrail(pathname);
  if (items.length < 2) {
    return null;
  }

  const hostname =
    headersList.get("x-domain") || headersList.get("host") || "";
  const baseUrl = getSiteBaseUrlFromHost(hostname);

  return (
    <SchemaScript
      schema={generateBreadcrumbSchema(items, baseUrl)}
      id="breadcrumb-schema"
    />
  );
}
