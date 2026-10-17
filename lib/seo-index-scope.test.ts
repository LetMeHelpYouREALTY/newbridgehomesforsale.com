import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { SITE_ORIGIN } from "@/lib/canonical-url";
import { INDEXABLE_PAGES, robotsForPath } from "@/lib/seo-index-scope";

/** Every static route that must render `noindex, follow`. New routes must be classified here or in INDEXABLE_PAGES. */
const NOINDEX_ROUTES = [
  "/55-plus-communities",
  "/55-plus-communities/del-webb-lake-las-vegas",
  "/55-plus-communities/heritage-stonebridge",
  "/55-plus-communities/solera-anthem",
  "/55-plus-communities/sun-city-aliante",
  "/55-plus-communities/sun-city-anthem",
  "/55-plus-communities/sun-city-summerlin",
  "/55-plus-communities/trilogy-summerlin",
  "/buyers",
  "/buyers/california-relocator",
  "/buyers/first-time-buyers",
  "/buyers/luxury-homes-las-vegas",
  "/condos",
  "/faq",
  "/google-business",
  "/investment-properties",
  "/listings",
  "/luxury-homes",
  "/market-insights",
  "/market-report",
  "/market-update",
  "/neighborhoods",
  "/neighborhoods/anthem",
  "/neighborhoods/centennial-hills",
  "/neighborhoods/green-valley",
  "/neighborhoods/henderson",
  "/neighborhoods/inspirada",
  "/neighborhoods/lake-las-vegas",
  "/neighborhoods/mountains-edge",
  "/neighborhoods/north-las-vegas",
  "/neighborhoods/skye-canyon",
  "/neighborhoods/southern-highlands",
  "/neighborhoods/summerlin",
  "/neighborhoods/the-ridges",
  "/new-construction",
  "/open-houses",
  "/relocation",
  "/resources",
  "/security-policy",
  "/sellers/divorce-probate",
  "/sellers/downsizing",
  "/sellers/move-up",
  "/sellers/relocation",
  "/services",
  "/sold",
  "/why-berkshire-hathaway",
];

const APP_DIR = path.resolve(__dirname, "../app");

function staticPageRoutes(dir = APP_DIR, segments: string[] = []): string[] {
  const routes: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name === "page.tsx") {
      routes.push(`/${segments.join("/")}`);
    } else if (entry.isDirectory() && !entry.name.startsWith("[")) {
      const isGroup = entry.name.startsWith("(") && entry.name.endsWith(")");
      routes.push(
        ...staticPageRoutes(
          path.join(dir, entry.name),
          isGroup ? segments : [...segments, entry.name],
        ),
      );
    }
  }
  return routes;
}

const indexablePaths = INDEXABLE_PAGES.map((page) => page.path);

describe("robotsForPath", () => {
  it.each([
    "/",
    "/sellers",
    "/neighborhoods/newbridge",
    "/home-valuation",
    "/about",
    "/contact",
  ])("indexes %s with Googlebot snippet directives", (pathname) => {
    const robots = robotsForPath(pathname);
    expect(robots).toMatchObject({ index: true, follow: true });
    expect(robots.googleBot).toMatchObject({
      index: true,
      follow: true,
      "max-image-preview": "large",
    });
  });

  it.each([
    "/sellers/move-up",
    "/neighborhoods",
    "/buyers",
    "/listings",
    "/listings/123",
    "/sellers/",
    "/new-construction",
  ])("noindexes %s without a googleBot index directive", (pathname) => {
    expect(robotsForPath(pathname)).toEqual({ index: false, follow: true });
  });

  it.each([null, undefined, ""])(
    "fails open to indexable directives for %p",
    (pathname) => {
      expect(robotsForPath(pathname)).toMatchObject({
        index: true,
        follow: true,
      });
    },
  );
});

describe("INDEXABLE_PAGES", () => {
  it("has no duplicate paths", () => {
    expect(new Set(indexablePaths).size).toBe(indexablePaths.length);
  });

  it("uses valid YYYY-MM-DD lastModified dates that are not in the future", () => {
    const today = new Date().toISOString().slice(0, 10);
    for (const page of INDEXABLE_PAGES) {
      expect(page.lastModified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(
        new Date(`${page.lastModified}T00:00:00Z`).toISOString().slice(0, 10),
      ).toBe(page.lastModified);
      expect(page.lastModified <= today).toBe(true);
    }
  });

  it("only lists routes that exist", () => {
    const routes = new Set(staticPageRoutes());
    for (const pathname of indexablePaths) {
      expect(routes.has(pathname), pathname).toBe(true);
    }
  });

  it("classifies every static page route as indexable or noindex", () => {
    const routes = staticPageRoutes().sort();
    expect(routes).toEqual([...indexablePaths, ...NOINDEX_ROUTES].sort());
    for (const pathname of NOINDEX_ROUTES) {
      expect(robotsForPath(pathname).index, pathname).toBe(false);
    }
  });
});

describe("sitemap", () => {
  it("contains exactly the indexable pages", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toEqual(
      indexablePaths.map((pathname) =>
        pathname === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${pathname}`,
      ),
    );
  });

  it("uses each page's recorded lastModified date", () => {
    expect(sitemap().map((entry) => entry.lastModified)).toEqual(
      INDEXABLE_PAGES.map((page) => page.lastModified),
    );
  });
});
