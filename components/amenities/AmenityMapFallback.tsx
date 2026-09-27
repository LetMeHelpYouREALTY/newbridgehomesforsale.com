import type { CommunityAmenityConfig } from "@/lib/amenities/types";
import { AMENITY_CATEGORIES } from "@/lib/amenities/categories";

type AmenityMapFallbackProps = {
  config: CommunityAmenityConfig;
  compact?: boolean;
};

export default function AmenityMapFallback({ config, compact = false }: AmenityMapFallbackProps) {
  const { lat, lng } = config.center;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;

  const grouped = config.curatedPlaces.reduce<Record<string, typeof config.curatedPlaces>>(
    (acc, place) => {
      const key = place.category;
      if (!acc[key]) acc[key] = [];
      acc[key].push(place);
      return acc;
    },
    {}
  );

  return (
    <div className="space-y-6">
      <div
        className="w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-100"
        style={{ minHeight: compact ? 280 : 400 }}
      >
        <iframe
          title={`Map of ${config.communityName}, ${config.city}`}
          src={embedSrc}
          className="w-full border-0"
          style={{ height: compact ? 280 : 400 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="text-sm text-slate-600">
        Interactive amenity search requires a Google Maps API key. This map shows the community
        center at {config.center.streetAddress}, {config.city}, {config.state}{" "}
        {config.center.postalCode}.
      </p>
      <div className={compact ? "space-y-4" : "grid md:grid-cols-2 gap-6"}>
        {config.categoryOrder
          .filter((catId) => grouped[catId]?.length)
          .map((catId) => (
            <div key={catId}>
              <h3 className="font-semibold text-slate-900 mb-2">
                {AMENITY_CATEGORIES[catId]?.label ?? catId}
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {grouped[catId].map((place) => (
                  <li key={`${place.name}-${place.address}`}>
                    <span className="font-medium text-slate-900">{place.name}</span>
                    <br />
                    <span>{place.address}</span>
                    {place.note && (
                      <span className="block text-slate-500 mt-0.5">{place.note}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
