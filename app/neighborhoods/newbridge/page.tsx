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
import { NEWBRIDGE_FAQS, newbridgeMetadata } from "@/lib/newbridge-seo";

export const metadata: Metadata = newbridgeMetadata({
  title: "Newbridge Homes for Sale | Las Vegas 89139 | Dr. Jan Duffy",
  description:
    "Search Newbridge homes for sale in Southwest Las Vegas near Blue Diamond Road (ZIP 89139). Richmond American ranch plans. Independent buyer representation from Dr. Jan Duffy, BHHS Nevada Properties. Call 702-222-1964.",
  path: "/neighborhoods/newbridge",
  keywords: ["Newbridge ranch homes", "Richmond American Las Vegas 89139", "Middleton Falls Ave"],
});

const schemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Neighborhoods", url: "/neighborhoods" },
    { name: "Newbridge", url: "/neighborhoods/newbridge" },
  ]),
  generateNeighborhoodSchema({
    name: "Newbridge",
    slug: "newbridge",
    description:
      "Richmond American community in Southwest Las Vegas ZIP 89139 near Blue Diamond Road, known for ranch-style floor plans.",
    latitude: 36.021,
    longitude: -115.246,
    containedIn: "Las Vegas",
  }),
  generateFAQSchema(NEWBRIDGE_FAQS)
);

export default function NewbridgePage() {
  return (
    <>
      <SchemaScript schema={schemas} id="newbridge-schema" />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SeoHero
            eyebrow="Newbridge · ZIP 89139 · Southwest Las Vegas"
            h1="Newbridge Homes for Sale | Las Vegas, NV 89139"
            lede="Richmond American ranch plans near Blue Diamond Road. Dr. Jan Duffy represents you—not the builder desk—on remaining inventory, resales, and nearby 89139 streets. Call 702-222-1964."
            image={images.neighborhoods.newbridge.src}
            imageAlt={images.neighborhoods.newbridge.alt}
            priority
          />
          <SeoSection
            h2="Where is Newbridge Las Vegas?"
            answer="Newbridge sits in Southwest Las Vegas, ZIP 89139, near Blue Diamond Road. Richmond American listed the community office at 5509 Middleton Falls Ave. Nearby comparison inventory includes Mountain's Edge and other 89139 streets such as Gran Paradiso."
            image={images.neighborhoods.mountainsEdge.src}
            imageAlt={images.neighborhoods.mountainsEdge.alt}
          />
          <SeoSection
            h2="What homes did Richmond American build at Newbridge?"
            answer="The product mix is ranch-style (single-story) floor plans. Some elevations include guest suites, gourmet kitchens, and three-car garages. As of July 19, 2026, the Darius plan was reported at about 2,830 square feet with 4 bedrooms and 3.5 baths. Confirm the lot, options, and HOA in writing."
            image={images.newConstruction.src}
            imageAlt={images.newConstruction.alt}
            reverse
          />
          <SeoSection
            h2="Is Newbridge sold out, or can you still buy?"
            answer="Portals conflict. Livabl marked the community sold out on December 4, 2025; other sites still show standing inventory. Treat availability as UNKNOWN until Dr. Jan pulls live MLS and builder remaining-lot data. Resales on Middleton Falls and nearby 89139 streets still transact."
            image={images.featured.src}
            imageAlt={images.featured.alt}
          />
          <SeoSection
            h2="Why register a buyer’s agent before the first Newbridge tour?"
            answer="Nevada does not require a REALTOR® for new construction, but the on-site agent works for Richmond American. Register Dr. Jan Duffy, License S.0197614.LLC, BHHS Nevada Properties, before you sign a guest card so contract review, options, and inspection timing stay on your side."
            image={images.buying.src}
            imageAlt={images.buying.alt}
            reverse
          />
          <RealScoutListings />
          <FaqAeo title="Newbridge Las Vegas questions, answered" faqs={NEWBRIDGE_FAQS} />
          <CtaBanner
            h2="Tour Newbridge with your own agent"
            sub="Call 702-222-1964. License S.0197614.LLC. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134."
          />
        </div>
      </main>
    </>
  );
}
