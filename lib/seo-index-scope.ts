import type { Metadata, MetadataRoute } from "next";

type RobotsDirectives = Exclude<Metadata["robots"], string | null | undefined>;
type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

export type IndexablePage = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  /** Date (YYYY-MM-DD) of the page's last significant content or structured-data change. */
  lastModified: string;
};

/**
 * The only routes search engines should index. Every other route renders
 * `noindex, follow` and stays out of the sitemap.
 */
export const INDEXABLE_PAGES: readonly IndexablePage[] = [
  {
    path: "/",
    priority: 1.0,
    changeFrequency: "weekly",
    lastModified: "2026-10-17",
  },
  {
    path: "/neighborhoods/newbridge",
    priority: 0.9,
    changeFrequency: "weekly",
    lastModified: "2026-10-17",
  },
  {
    path: "/sellers",
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: "2026-10-17",
  },
  {
    path: "/home-valuation",
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: "2026-10-17",
  },
  {
    path: "/about",
    priority: 0.9,
    changeFrequency: "monthly",
    lastModified: "2026-10-17",
  },
  {
    path: "/contact",
    priority: 0.9,
    changeFrequency: "monthly",
    lastModified: "2026-10-17",
  },
  {
    path: "/privacy",
    priority: 0.3,
    changeFrequency: "yearly",
    lastModified: "2026-10-17",
  },
  {
    path: "/terms",
    priority: 0.3,
    changeFrequency: "yearly",
    lastModified: "2026-10-17",
  },
  {
    path: "/equal-housing",
    priority: 0.4,
    changeFrequency: "yearly",
    lastModified: "2026-10-17",
  },
];

const INDEXABLE_PATHS = new Set(INDEXABLE_PAGES.map((page) => page.path));

function indexRobots(): RobotsDirectives {
  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

/**
 * Robots directives for a request pathname. Matching is exact: no prefix or
 * trailing-slash variants. A missing pathname fails open to the indexable
 * directives so a middleware outage cannot deindex the site.
 */
export function robotsForPath(
  pathname: string | null | undefined,
): RobotsDirectives {
  if (!pathname) return indexRobots();
  return INDEXABLE_PATHS.has(pathname)
    ? indexRobots()
    : { index: false, follow: true };
}
