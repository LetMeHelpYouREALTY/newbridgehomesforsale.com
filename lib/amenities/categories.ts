import type { AmenityCategory, AmenityCategoryId } from "./types";

export const AMENITY_CATEGORIES: Record<AmenityCategoryId, AmenityCategory> = {
  restaurants: {
    id: "restaurants",
    label: "Restaurants",
    primaryTypes: ["restaurant"],
    ariaLabel: "Show restaurants near the community",
  },
  cafes: {
    id: "cafes",
    label: "Cafes",
    primaryTypes: ["cafe", "coffee_shop"],
    ariaLabel: "Show cafes near the community",
  },
  grocery: {
    id: "grocery",
    label: "Grocery",
    primaryTypes: ["grocery_store", "supermarket"],
    ariaLabel: "Show grocery stores near the community",
  },
  parks: {
    id: "parks",
    label: "Parks",
    primaryTypes: ["park"],
    ariaLabel: "Show parks near the community",
  },
  golf: {
    id: "golf",
    label: "Golf",
    primaryTypes: ["golf_course"],
    ariaLabel: "Show golf courses near the community",
  },
  healthcare: {
    id: "healthcare",
    label: "Healthcare",
    primaryTypes: ["hospital", "doctor"],
    ariaLabel: "Show hospitals and medical offices near the community",
  },
  pharmacies: {
    id: "pharmacies",
    label: "Pharmacies",
    primaryTypes: ["pharmacy", "drugstore"],
    ariaLabel: "Show pharmacies near the community",
  },
  shopping: {
    id: "shopping",
    label: "Shopping",
    primaryTypes: ["shopping_mall", "department_store"],
    ariaLabel: "Show shopping near the community",
  },
  parking: {
    id: "parking",
    label: "Parking",
    primaryTypes: ["parking"],
    ariaLabel: "Show parking near the community",
  },
  fitness: {
    id: "fitness",
    label: "Fitness",
    primaryTypes: ["gym", "fitness_center"],
    ariaLabel: "Show gyms and fitness centers near the community",
  },
  schools: {
    id: "schools",
    label: "Schools",
    primaryTypes: ["school", "primary_school", "secondary_school"],
    ariaLabel: "Show schools near the community",
  },
  community: {
    id: "community",
    label: "Recreation",
    primaryTypes: ["community_center"],
    ariaLabel: "Show community and recreation centers nearby",
  },
};

export function getOrderedCategories(order: AmenityCategoryId[]): AmenityCategory[] {
  return order.map((id) => AMENITY_CATEGORIES[id]).filter(Boolean);
}
