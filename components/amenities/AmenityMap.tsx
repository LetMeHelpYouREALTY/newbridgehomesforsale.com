"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { CommunityAmenityConfig } from "@/lib/amenities/types";
import { getOrderedCategories } from "@/lib/amenities/categories";
import type { AmenityCategoryId } from "@/lib/amenities/types";
import AmenityMapFallback from "./AmenityMapFallback";

const MAP_HEIGHT = 420;

type PlaceResult = {
  id: string;
  name: string;
  address: string;
  rating?: number;
  mapsUrl: string;
  lat: number;
  lng: number;
};

type AmenityMapProps = {
  config: CommunityAmenityConfig;
  compact?: boolean;
};

function loadGoogleMaps(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("No window"));
  }

  const w = window as Window & {
    google?: { maps?: { importLibrary: (name: string) => Promise<unknown> } };
    __amenityMapInit?: Promise<void>;
  };

  if (w.__amenityMapInit) {
    return w.__amenityMapInit;
  }

  w.__amenityMapInit = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-amenity-map="google-maps"]'
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Maps script failed")));
      if (w.google?.maps) resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&loading=async&libraries=places`;
    script.async = true;
    script.defer = true;
    script.dataset.amenityMap = "google-maps";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Maps script failed"));
    document.head.appendChild(script);
  });

  return w.__amenityMapInit;
}

export default function AmenityMap({ config, compact = false }: AmenityMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;
  const categories = getOrderedCategories(config.categoryOrder);
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(
    config.categoryOrder[0] ?? "grocery"
  );
  const [isVisible, setIsVisible] = useState(false);
  const [loadState, setLoadState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [places, setPlaces] = useState<PlaceResult[]>([]);
  const [placesError, setPlacesError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<{ setMap?: (map: google.maps.Map | null) => void; map?: google.maps.Map | null } | google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const listId = useId();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const showCommunityMarker = useCallback(
    async (map: google.maps.Map) => {
      const { AdvancedMarkerElement, PinElement } = (await google.maps.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      if (communityMarkerRef.current && "map" in communityMarkerRef.current) {
        communityMarkerRef.current.map = null;
      }

      const pin = new PinElement({
        background: "#2563eb",
        borderColor: "#1d4ed8",
        glyphColor: "#ffffff",
      });

      const marker = new AdvancedMarkerElement({
        map,
        position: config.center,
        title: config.center.label,
        content: pin.element,
      });

      communityMarkerRef.current = marker as unknown as google.maps.Marker;

      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }

      marker.addListener("click", () => {
        infoWindowRef.current?.setContent(
          `<div style="max-width:240px"><strong>${config.communityName}</strong><br/>${config.center.streetAddress}<br/>${config.city}, ${config.state} ${config.center.postalCode}</div>`
        );
        infoWindowRef.current?.open({ map, anchor: marker });
      });
    },
    [config]
  );

  const showLegacyCommunityMarker = useCallback(
    (map: google.maps.Map) => {
      if (communityMarkerRef.current && "setMap" in communityMarkerRef.current) {
        communityMarkerRef.current.setMap?.(null);
      }
      const marker = new google.maps.Marker({
        map,
        position: config.center,
        title: config.center.label,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#2563eb",
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 2,
        },
      });
      communityMarkerRef.current = marker;
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }
      marker.addListener("click", () => {
        infoWindowRef.current?.setContent(
          `<div style="max-width:240px"><strong>${config.communityName}</strong><br/>${config.center.streetAddress}</div>`
        );
        infoWindowRef.current?.open(map, marker);
      });
    },
    [config]
  );

  const renderPlaceMarkers = useCallback(
    (map: google.maps.Map, results: PlaceResult[]) => {
      clearMarkers();
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }

      results.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener("click", () => {
          const ratingLine =
            place.rating !== undefined ? `<br/>Rating: ${place.rating.toFixed(1)}` : "";
          infoWindowRef.current?.setContent(
            `<div style="max-width:260px"><strong>${place.name}</strong>${ratingLine}<br/>${place.address}<br/><a href="${place.mapsUrl}" target="_blank" rel="noopener noreferrer">Directions</a></div>`
          );
          infoWindowRef.current?.open(map, marker);
        });
        markersRef.current.push(marker);
      });
    },
    [clearMarkers]
  );

  const fetchNearby = useCallback(
    async (categoryId: AmenityCategoryId) => {
      setPlacesError(null);
      const category = categories.find((c) => c.id === categoryId);
      if (!category || !mapInstanceRef.current) return;

      try {
        const placesLib = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
        const Place = placesLib.Place;
        if (Place?.searchNearby) {
          const { places: nearby } = await Place.searchNearby({
            fields: [
              "displayName",
              "formattedAddress",
              "location",
              "googleMapsURI",
              "rating",
              "id",
            ],
            locationRestriction: {
              center: config.center,
              radius: 8000,
            },
            includedPrimaryTypes: category.primaryTypes,
            maxResultCount: 15,
            rankPreference: "POPULARITY" as google.maps.places.SearchNearbyRankPreference,
          });

          const parsed: PlaceResult[] = [];
          for (const p of nearby) {
            const loc = p.location;
            if (!loc) continue;
            parsed.push({
              id: p.id ?? p.displayName ?? "",
              name: p.displayName ?? "Place",
              address: p.formattedAddress ?? "",
              rating: p.rating,
              mapsUrl:
                p.googleMapsURI ??
                `https://www.google.com/maps/search/?api=1&query=${loc.lat()},${loc.lng()}`,
              lat: loc.lat(),
              lng: loc.lng(),
            });
          }

          setPlaces(parsed);
          renderPlaceMarkers(mapInstanceRef.current, parsed);
          return;
        }
      } catch {
        // fall through to legacy
      }

      try {
        const service = new google.maps.places.PlacesService(mapInstanceRef.current);
        const type = category.primaryTypes[0];
        await new Promise<void>((resolve, reject) => {
          service.nearbySearch(
            {
              location: config.center,
              radius: 8000,
              type: type as string,
            },
            (results, status) => {
              if (status !== google.maps.places.PlacesServiceStatus.OK || !results) {
                reject(new Error(String(status)));
                return;
              }
              const parsed: PlaceResult[] = results.slice(0, 15).map((r) => ({
                id: r.place_id ?? r.name ?? "",
                name: r.name ?? "Place",
                address: r.vicinity ?? "",
                rating: r.rating,
                mapsUrl: `https://www.google.com/maps/place/?q=place_id:${r.place_id}`,
                lat: r.geometry?.location?.lat() ?? config.center.lat,
                lng: r.geometry?.location?.lng() ?? config.center.lng,
              }));
              setPlaces(parsed);
              renderPlaceMarkers(mapInstanceRef.current!, parsed);
              resolve();
            }
          );
        });
      } catch {
        setPlacesError("Unable to load places for this category. See the curated list below.");
        setPlaces([]);
        clearMarkers();
      }
    },
    [categories, config.center, clearMarkers, renderPlaceMarkers]
  );

  const mapInitializedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || !apiKey || mapInitializedRef.current) return;

    let cancelled = false;

    async function initMap() {
      setLoadState("loading");
      try {
        await loadGoogleMaps(apiKey!);
        if (cancelled || !mapRef.current) return;

        const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
        const map = new Map(mapRef.current, {
          center: config.center,
          zoom: 13,
          mapId: mapId || undefined,
          disableDefaultUI: false,
          fullscreenControl: true,
          mapTypeControl: false,
          streetViewControl: false,
        });
        mapInstanceRef.current = map;
        mapInitializedRef.current = true;

        try {
          if (mapId) {
            await showCommunityMarker(map);
          } else {
            showLegacyCommunityMarker(map);
          }
        } catch {
          showLegacyCommunityMarker(map);
        }

        setLoadState("ready");
      } catch {
        if (!cancelled) setLoadState("error");
      }
    }

    void initMap();
    return () => {
      cancelled = true;
    };
  }, [
    isVisible,
    apiKey,
    mapId,
    config.center,
    showCommunityMarker,
    showLegacyCommunityMarker,
  ]);

  useEffect(() => {
    if (loadState !== "ready") return;
    void fetchNearby(activeCategory);
  }, [activeCategory, fetchNearby, loadState]);

  if (!apiKey) {
    return <AmenityMapFallback config={config} compact={compact} />;
  }

  if (loadState === "error") {
    return <AmenityMapFallback config={config} compact={compact} />;
  }

  const height = compact ? 320 : MAP_HEIGHT;

  return (
    <div ref={containerRef} className="space-y-4">
      <div
        role="tablist"
        aria-label={`Filter nearby amenities around ${config.communityName}`}
        className="flex flex-wrap gap-2"
      >
        {categories.map((cat) => {
          const selected = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${listId}-panel`}
              id={`${listId}-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                selected
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-800 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        className="w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-100"
        style={{ minHeight: height }}
        aria-busy={loadState === "loading"}
      >
        {!isVisible && (
          <div
            className="flex items-center justify-center text-slate-500 text-sm"
            style={{ height }}
          >
            Map loads as you scroll…
          </div>
        )}
        {isVisible && (
          <div ref={mapRef} className="w-full" style={{ height }} role="application" aria-label={`Interactive map of amenities near ${config.communityName}`} />
        )}
      </div>

      {placesError && <p className="text-sm text-amber-800">{placesError}</p>}

      <div
        id={`${listId}-panel`}
        role="tabpanel"
        aria-labelledby={`${listId}-${activeCategory}`}
        className="sr-only"
      >
        {places.length} places loaded for {activeCategory}
      </div>

      {places.length > 0 && (
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
          {places.map((place) => (
            <li key={place.id} className="rounded-md border border-slate-200 p-3">
              <p className="font-medium text-slate-900">{place.name}</p>
              {place.rating !== undefined && (
                <p className="text-slate-500">Rating: {place.rating.toFixed(1)}</p>
              )}
              <p>{place.address}</p>
              <a
                href={place.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-1 inline-block"
              >
                Directions
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
