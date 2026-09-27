import Link from "next/link";
import dynamic from "next/dynamic";
import type { CommunityAmenityConfig } from "@/lib/amenities/types";
import { MapPin } from "lucide-react";

const AmenityMap = dynamic(() => import("./AmenityMap"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-lg bg-slate-100 border border-slate-200 animate-pulse"
      style={{ minHeight: 320 }}
      aria-hidden
    />
  ),
});

type NearbyAmenitiesSectionProps = {
  config: CommunityAmenityConfig;
  variant?: "home" | "page";
};

export default function NearbyAmenitiesSection({
  config,
  variant = "home",
}: NearbyAmenitiesSectionProps) {
  const compact = variant === "home";

  return (
    <section
      className={compact ? "py-16 bg-slate-50" : "py-8"}
      aria-labelledby="nearby-amenities-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden />
                What&apos;s Nearby
              </p>
              <h2 id="nearby-amenities-heading" className="text-3xl font-bold text-slate-900">
                Life Near {config.communityName}
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Explore dining, grocery, parks, healthcare, and more around{" "}
                {config.communityName} in {config.city}, {config.state}. Map centered on{" "}
                {config.center.streetAddress}.
              </p>
            </div>
            {compact && (
              <Link
                href={config.pagePath}
                className="inline-flex shrink-0 items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Full amenities guide
              </Link>
            )}
          </div>
          <AmenityMap config={config} compact={compact} />
          {compact && (
            <p className="mt-6 text-center text-sm text-slate-600">
              <Link href={config.pagePath} className="text-blue-600 font-medium hover:underline">
                See all nearby amenities, FAQs, and commute notes →
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
