import type { AmenityCategoryId } from "./types";
import { AMENITY_CATEGORIES } from "./categories";

export type NearbyPlaceResult = {
  id: string;
  name: string;
  address: string;
  mapsUrl: string;
  lat: number;
  lng: number;
};

// module scope: one request per category per page session
const cache = new Map<string, Promise<NearbyPlaceResult[]>>();

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId
): Promise<NearbyPlaceResult[]> {
  const category = AMENITY_CATEGORIES[categoryId];
  if (!category) {
    return Promise.resolve([]);
  }

  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ["displayName", "location", "formattedAddress", "googleMapsURI"],
        locationRestriction: { center, radius: 5000 },
        includedPrimaryTypes: category.primaryTypes,
        maxResultCount: 10,
        rankPreference: "POPULARITY" as unknown as google.maps.places.SearchNearbyRankPreference,
      });

      const parsed: NearbyPlaceResult[] = [];
      for (const place of places) {
        const loc = place.location;
        if (!loc) continue;
        const json = loc.toJSON?.() ?? { lat: loc.lat(), lng: loc.lng() };
        parsed.push({
          id: place.id ?? place.displayName ?? "",
          name: place.displayName ?? "Place",
          address: place.formattedAddress ?? "",
          mapsUrl:
            place.googleMapsURI ??
            `https://www.google.com/maps/search/?api=1&query=${json.lat},${json.lng}`,
          lat: json.lat,
          lng: json.lng,
        });
      }
      return parsed;
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}
