export type Property = {
  id: string;
  title: string;
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  year: number;
  lotSize: string;
  image: string;
  description: string;
  features: string[];
};

export const properties: Property[] = [
  {
    id: "luxury-villa",
    title: "Luxury Villa",
    price: 750000,
    address: "123 New Bridge Ave, Las Vegas, NV",
    beds: 4,
    baths: 3,
    sqft: 2500,
    year: 2022,
    lotSize: "0.25 acres",
    image: "/images/property-placeholder.svg",
    description:
      "Stunning luxury villa with modern amenities, spacious rooms, and a resort-style backyard in Las Vegas.",
    features: [
      "Gourmet kitchen",
      "Custom cabinetry",
      "Smart home technology",
      "Covered patio",
    ],
  },
  {
    id: "modern-townhouse",
    title: "Modern Townhouse",
    price: 550000,
    address: "456 New Bridge Blvd, Las Vegas, NV",
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    year: 2023,
    lotSize: "Townhome",
    image: "/images/property-placeholder.svg",
    description:
      "Contemporary townhouse with open floor plan and premium finishes near shopping and dining.",
    features: ["Open concept", "Quartz countertops", "Private patio", "Two-car garage"],
  },
  {
    id: "family-home",
    title: "Family Home",
    price: 650000,
    address: "789 New Bridge Court, Las Vegas, NV",
    beds: 4,
    baths: 3,
    sqft: 2200,
    year: 2021,
    lotSize: "0.2 acres",
    image: "/images/property-placeholder.svg",
    description:
      "Spacious family home in a cul-de-sac with a functional floor plan and fenced backyard.",
    features: ["Bonus room", "Fenced yard", "Covered patio", "Main-level primary suite"],
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((property) => property.id === id);
}
