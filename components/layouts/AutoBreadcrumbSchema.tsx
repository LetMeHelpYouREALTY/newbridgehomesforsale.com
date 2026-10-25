import { headers } from "next/headers";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbTrail } from "@/lib/breadcrumb-trail";
import { SITE_ORIGIN } from "@/lib/canonical-url";
import { generateBreadcrumbSchema } from "@/lib/schema";

/**
 * Emits BreadcrumbList JSON-LD on all non-home routes (server-rendered).
 */
export default async function AutoBreadcrumbSchema() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";

  if (pathname === "/" || pathname === "") {
    return null;
  }

  const items = buildBreadcrumbTrail(pathname);
  if (items.length < 2) {
    return null;
  }

  return (
    <SchemaScript
      schema={generateBreadcrumbSchema(items, SITE_ORIGIN)}
      id="breadcrumb-schema"
    />
  );
}
