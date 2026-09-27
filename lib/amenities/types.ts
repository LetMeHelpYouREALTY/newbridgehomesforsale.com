export type AmenityCategoryId =
  | "restaurants"
  | "cafes"
  | "grocery"
  | "parks"
  | "golf"
  | "healthcare"
  | "pharmacies"
  | "shopping"
  | "parking"
  | "fitness"
  | "schools"
  | "community";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) primary types for searchNearby */
  primaryTypes: string[];
  ariaLabel: string;
};

export type CuratedPlace = {
  name: string;
  address: string;
  category: AmenityCategoryId;
  /** schema.org @type */
  schemaType: string;
  note?: string;
};

export type AmenityWrittenSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type AmenityFaqItem = {
  question: string;
  answer: string;
};

export type CommunityAmenityConfig = {
  communityName: string;
  communitySlug: string;
  city: string;
  state: string;
  /** Center point — sales office / community hub */
  center: {
    lat: number;
    lng: number;
    label: string;
    streetAddress: string;
    postalCode: string;
  };
  /** Documented source for coordinates (PR / maintainers) */
  coordinatesSource: string;
  categoryOrder: AmenityCategoryId[];
  curatedPlaces: CuratedPlace[];
  writtenSections: AmenityWrittenSection[];
  faqs: AmenityFaqItem[];
  commuteNotes: { destination: string; note: string }[];
  pagePath: "/amenities";
  siteDomains: string[];
};
