"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { CommunityAmenityConfig } from "@/lib/amenities/types";
import { getOrderedCategories } from "@/lib/amenities/categories";
import type { AmenityCategoryId } from "@/lib/amenities/types";
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/google-maps-loader";
import { searchCategory, type NearbyPlaceResult } from "@/lib/amenities/search-category";
import {
  buildCommunityInfoContent,
  buildPlaceInfoContent,
} from "@/lib/amenities/info-window-content";
import AmenityMapFallback from "./AmenityMapFallback";

const MAP_HEIGHT = 420;

type AmenityMapProps = {
  config: CommunityAmenityConfig;
  compact?: boolean;
};

export default function AmenityMap({ config, compact = false }: AmenityMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;
  const categories = getOrderedCategories(config.categoryOrder);
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(
    config.categoryOrder[0] ?? "grocery"
  );
  const [isVisible, setIsVisible] = useState(false);
  const [loadState, setLoadState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [useIframeFallback, setUseIframeFallback] = useState(!apiKey);
  const [places, setPlaces] = useState<NearbyPlaceResult[]>([]);
  const [placesFromCurated, setPlacesFromCurated] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<
    | { setMap?: (map: google.maps.Map | null) => void; map?: google.maps.Map | null }
    | google.maps.Marker
    | null
  >(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const listId = useId();
  const mapInitializedRef = useRef(false);

  const height = compact ? 320 : MAP_HEIGHT;

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const enterFallback = useCallback(() => {
    setUseIframeFallback(true);
    if (mapInstanceRef.current) {
      mapInstanceRef.current = null;
      mapInitializedRef.current = false;
    }
    clearMarkers();
  }, [clearMarkers]);

  useEffect(() => {
    if (mapsAuthFailed) enterFallback();
    const onAuthFailure = () => enterFallback();
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallback]);

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
          buildCommunityInfoContent(
            config.communityName,
            config.center.streetAddress,
            config.city,
            config.state,
            config.center.postalCode
          )
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
          buildCommunityInfoContent(
            config.communityName,
            config.center.streetAddress,
            config.city,
            config.state,
            config.center.postalCode
          )
        );
        infoWindowRef.current?.open(map, marker);
      });
    },
    [config]
  );

  const renderPlaceMarkers = useCallback(
    (map: google.maps.Map, results: NearbyPlaceResult[]) => {
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
          infoWindowRef.current?.setContent(buildPlaceInfoContent(place));
          infoWindowRef.current?.open(map, marker);
        });
        markersRef.current.push(marker);
      });
    },
    [clearMarkers]
  );

  const showCuratedForCategory = useCallback(
    (categoryId: AmenityCategoryId) => {
      setPlacesFromCurated(true);
      setPlaces([]);
      clearMarkers();
    },
    [clearMarkers]
  );

  const fetchNearby = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (useIframeFallback || !mapInstanceRef.current) {
        showCuratedForCategory(categoryId);
        return;
      }

      setPlacesFromCurated(false);
      try {
        const parsed = await searchCategory(config.center, categoryId);
        setPlaces(parsed);
        renderPlaceMarkers(mapInstanceRef.current, parsed);
      } catch {
        showCuratedForCategory(categoryId);
      }
    },
    [config.center, renderPlaceMarkers, showCuratedForCategory, useIframeFallback]
  );

  useEffect(() => {
    if (!isVisible || !apiKey || useIframeFallback || mapInitializedRef.current) return;

    let cancelled = false;

    async function initMap() {
      if (mapsAuthFailed) {
        enterFallback();
        return;
      }
      setLoadState("loading");
      try {
        await loadGoogleMaps(apiKey!);
        if (cancelled || mapsAuthFailed) {
          enterFallback();
          return;
        }
        if (!mapRef.current) return;

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
        if (!cancelled) {
          enterFallback();
          setLoadState("error");
        }
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
    useIframeFallback,
    enterFallback,
  ]);

  useEffect(() => {
    if (useIframeFallback) {
      showCuratedForCategory(activeCategory);
      return;
    }
    if (loadState !== "ready") return;
    void fetchNearby(activeCategory);
  }, [activeCategory, fetchNearby, loadState, useIframeFallback, showCuratedForCategory]);

  const curatedForCategory = config.curatedPlaces.filter((p) => p.category === activeCategory);

  const categoryChips = (
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
  );

  if (useIframeFallback) {
    return (
      <div ref={containerRef} className="space-y-4">
        {categoryChips}
        <AmenityMapFallback
          config={config}
          compact={compact}
          activeCategory={activeCategory}
          showDeveloperNote={!apiKey}
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="space-y-4">
      {categoryChips}

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
          <div
            ref={mapRef}
            className="w-full"
            style={{ height }}
            role="application"
            aria-label={`Interactive map of amenities near ${config.communityName}`}
          />
        )}
      </div>

      <div
        id={`${listId}-panel`}
        role="tabpanel"
        aria-labelledby={`${listId}-${activeCategory}`}
        className="sr-only"
      >
        {places.length} places loaded for {activeCategory}
      </div>

      {places.length > 0 && !placesFromCurated && (
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
          {places.map((place) => (
            <li key={place.id} className="rounded-md border border-slate-200 p-3">
              <p className="font-medium text-slate-900">{place.name}</p>
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

      {(placesFromCurated || places.length === 0) && curatedForCategory.length > 0 && (
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
          {curatedForCategory.map((place) => (
            <li key={`${place.name}-${place.address}`} className="rounded-md border border-slate-200 p-3">
              <p className="font-medium text-slate-900">{place.name}</p>
              <p>{place.address}</p>
              {place.note && <p className="text-slate-500 text-xs mt-1">{place.note}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
