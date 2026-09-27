/* Minimal Google Maps typings for amenity map — full types from @types/google.maps if expanded later */
declare namespace google.maps {
  class Map {
    constructor(el: HTMLElement, opts?: MapOptions);
  }
  class Marker {
    constructor(opts?: MarkerOptions);
    setMap(map: Map | null): void;
    addListener(event: string, handler: () => void): void;
  }
  class InfoWindow {
    setContent(content: string): void;
    open(opts?: { map: Map; anchor?: unknown } | Map, anchor?: Marker): void;
  }
  interface MapOptions {
    center?: LatLngLiteral;
    zoom?: number;
    mapId?: string;
    disableDefaultUI?: boolean;
    fullscreenControl?: boolean;
    mapTypeControl?: boolean;
    streetViewControl?: boolean;
  }
  interface MarkerOptions {
    map?: Map;
    position?: LatLngLiteral;
    title?: string;
    icon?: unknown;
  }
  interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  enum SymbolPath {
    CIRCLE,
  }
  function importLibrary(name: string): Promise<unknown>;
  namespace places {
    class PlacesService {
      constructor(map: Map);
      nearbySearch(
        request: { location: LatLngLiteral; radius: number; type?: string },
        callback: (results: NearbyPlaceResult[] | null, status: PlacesServiceStatus) => void
      ): void;
    }
    enum PlacesServiceStatus {
      OK,
    }
    interface NearbyPlaceResult {
      place_id?: string;
      name?: string;
      vicinity?: string;
      rating?: number;
      geometry?: { location?: { lat(): number; lng(): number } };
    }
    type SearchNearbyRankPreference = string;
    class Place {
      static searchNearby(request: {
        fields: string[];
        locationRestriction: { center: LatLngLiteral; radius: number };
        includedPrimaryTypes: string[];
        maxResultCount: number;
        rankPreference?: SearchNearbyRankPreference;
      }): Promise<{ places: PlaceInstance[] }>;
    }
    interface PlaceInstance {
      id?: string;
      displayName?: string;
      formattedAddress?: string;
      rating?: number;
      googleMapsURI?: string;
      location?: { lat(): number; lng(): number };
    }
  }
  interface MapsLibrary {
    Map: typeof Map;
  }
  interface PlacesLibrary {
    Place: typeof places.Place;
    PlacesService: typeof places.PlacesService;
    PlacesServiceStatus: typeof places.PlacesServiceStatus;
  }
  interface MarkerLibrary {
    AdvancedMarkerElement: new (opts: {
      map: Map;
      position: LatLngLiteral;
      title?: string;
      content?: HTMLElement;
    }) => { addListener: (event: string, handler: () => void) => void; map: Map | null };
    PinElement: new (opts: {
      background: string;
      borderColor: string;
      glyphColor: string;
    }) => { element: HTMLElement };
  }
}

declare const google: { maps: typeof google.maps };
