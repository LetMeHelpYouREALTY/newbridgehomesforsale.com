import type { CommunityAmenityConfig } from "@/lib/amenities/types";
import type { AmenityCategoryId } from "@/lib/amenities/types";
import { AMENITY_CATEGORIES } from "@/lib/amenities/categories";

type AmenityMapFallbackProps = {
  config: CommunityAmenityConfig;
  compact?: boolean;
  activeCategory?: AmenityCategoryId;
  showDeveloperNote?: boolean;
};

export default function AmenityMapFallback({
  config,
  compact = false,
  activeCategory,
  showDeveloperNote = false,
}: AmenityMapFallbackProps) {
  const { lat, lng } = config.center;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
  const height = compact ? 280 : 400;

  const places = activeCategory
    ? config.curatedPlaces.filter((p) => p.category === activeCategory)
    : config.curatedPlaces;

  const grouped = places.reduce<Record<string, typeof config.curatedPlaces>>((acc, place) => {
    const key = place.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(place);
    return acc;
  }, {});

  const categoryIds = activeCategory
    ? [activeCategory]
    : config.categoryOrder.filter((catId) => grouped[catId]?.length);

  return (
    <div className="space-y-6">
      <div
        className="w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-100"
        style={{ minHeight: height }}
      >
        <iframe
          title={`Map of ${config.communityName}, ${config.city}`}
          src={embedSrc}
          className="w-full border-0"
          style={{ height }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      {showDeveloperNote && (
        <p className="text-sm text-slate-600">
          Showing a map centered on {config.center.streetAddress}, {config.city}, {config.state}{" "}
          {config.center.postalCode}. Curated nearby places are listed below.
        </p>
      )}
      <div className={compact ? "space-y-4" : "grid md:grid-cols-2 gap-6"}>
        {categoryIds.map((catId) => (
          <div key={catId}>
            <h3 className="font-semibold text-slate-900 mb-2">
              {AMENITY_CATEGORIES[catId]?.label ?? catId}
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {grouped[catId]?.map((place) => (
                <li key={`${place.name}-${place.address}`}>
                  <span className="font-medium text-slate-900">{place.name}</span>
                  <br />
                  <span>{place.address}</span>
                  {place.note && <span className="block text-slate-500 mt-0.5">{place.note}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
