import type { Metadata } from "next";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import SeoHero from "@/components/seo/SeoHero";
import SeoSection from "@/components/seo/SeoSection";
import FaqAeo from "@/components/seo/FaqAeo";
import CtaBanner from "@/components/seo/CtaBanner";
import { images } from "@/lib/site-images";
import SchemaScript from "@/components/SchemaScript";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateNeighborhoodSchema,
  combineSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Lake Las Vegas Homes for Sale | Henderson NV | Dr. Jan Duffy",
  description:
    "Lake Las Vegas Henderson homes: water-adjacent inventory, golf, and HOA rules. Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.",
};

const faqs = [
  {
    question: "Is Lake Las Vegas part of Henderson?",
    answer:
      "Yes. Lake Las Vegas is in Henderson, Clark County, Nevada, east of the Las Vegas Strip along the Lake Mead Parkway corridor.",
  },
  {
    question: "Do all Lake Las Vegas homes sit on the water?",
    answer:
      "No. Inventory includes hillside, golf-adjacent, and water-adjacent streets. Confirm lot type, dock rights, and HOA before you tour.",
  },
];

const schemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Neighborhoods", url: "/neighborhoods" },
    { name: "Lake Las Vegas", url: "/neighborhoods/lake-las-vegas" },
  ]),
  generateNeighborhoodSchema({
    name: "Lake Las Vegas",
    slug: "lake-las-vegas",
    description:
      "Henderson community around a private lake with golf, resort amenities, and a mix of water-adjacent and hillside homes.",
    latitude: 36.101,
    longitude: -114.929,
    containedIn: "Henderson",
  }),
  generateFAQSchema(faqs)
);

export default function LakeLasVegasPage() {
  return (
    <>
      <SchemaScript schema={schemas} id="llv-schema" />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SeoHero
            h1="Lake Las Vegas Homes for Sale | Henderson, Nevada"
            lede="Water-adjacent and hillside inventory in Henderson. Square footage, HOA, golf membership, and lake rights drive price more than marketing adjectives. Dr. Jan Duffy tours this submarket regularly."
            image={images.neighborhoods.lakeLasVegas.src}
            imageAlt={images.neighborhoods.lakeLasVegas.alt}
            priority
          />
          <SeoSection
            h2="What is the commute from Lake Las Vegas to the Strip?"
            answer="Plan about 20–30 minutes to the Las Vegas Strip via Lake Mead Parkway and I-515, longer at event peaks. Confirm your actual drive at the hour you would commute."
            image={images.neighborhoods.henderson.src}
            imageAlt={images.neighborhoods.henderson.alt}
            reverse
          />
          <RealScoutListings />
          <FaqAeo faqs={faqs} />
          <CtaBanner
            h2="Want Lake Las Vegas listings that match your dues budget?"
            sub="Call 702-222-1964. BHHS Nevada Properties, 9406 W Lake Mead Blvd, Suite 100."
          />
        </div>
      </main>
    </>
  );
}
