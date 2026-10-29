import type { Metadata } from "next";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import SeoHero from "@/components/seo/SeoHero";
import SeoSection from "@/components/seo/SeoSection";
import FaqAeo from "@/components/seo/FaqAeo";
import CtaBanner from "@/components/seo/CtaBanner";
import { images } from "@/lib/site-images";
import SchemaScript from "@/components/SchemaScript";
import { generateNeighborhoodSchema, combineSchemas } from "@/lib/schema";
import { NEWBRIDGE_GUIDE_FAQS, newbridgeMetadata } from "@/lib/newbridge-seo";
import { NEWBRIDGE_PRIMARY_H1 } from "@/lib/newbridge-h1";

export const metadata: Metadata = newbridgeMetadata({
  title: "Newbridge Homes for Sale | Las Vegas 89139 | Dr. Jan Duffy",
  description:
    "Newbridge homes for sale in Las Vegas 89139 near Blue Diamond Road. Richmond American ranch plans. Buyer agent Dr. Jan Duffy, BHHS. Call 702-779-3735.",
  path: "/neighborhoods/newbridge",
  keywords: ["Newbridge ranch homes", "Richmond American Las Vegas 89139", "Middleton Falls Ave"],
});

const schemas = combineSchemas(
  generateNeighborhoodSchema({
    name: "Newbridge",
    slug: "newbridge",
    description:
      "Richmond American community in Southwest Las Vegas ZIP 89139 near Blue Diamond Road, known for ranch-style floor plans.",
    latitude: 36.021,
    longitude: -115.246,
    containedIn: "Las Vegas",
    postalCode: "89139",
  })
);

export default function NewbridgePage() {
  return (
    <>
      <SchemaScript schema={schemas} id="newbridge-schema" />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SeoHero
            eyebrow="Newbridge · ZIP 89139 · Southwest Las Vegas"
            h1={NEWBRIDGE_PRIMARY_H1}
            lede="Richmond American ranch plans near Blue Diamond Road. Dr. Jan Duffy represents you—not the builder desk—on Newbridge resales, any remaining builder inventory, and nearby 89139 streets. Call 702-779-3735."
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
            answer="As of October 17, 2026, Richmond American's Newbridge web pages redirect to its general Las Vegas new-homes page. Treat builder availability as unconfirmed until Dr. Jan Duffy checks current MLS listings and any remaining builder lots. Resales on Middleton Falls and nearby 89139 streets still transact."
            image={images.featured.src}
            imageAlt={images.featured.alt}
          />
          <SeoSection
            h2="Why use your own buyer's agent in Newbridge?"
            answer="On a Newbridge resale, the listing agent represents the seller; Dr. Jan Duffy, License S.0197614.LLC, BHHS Nevada Properties, can represent you from your first showing through contract review, inspections, and closing. If you tour any builder inventory, register her before your first visit, because some builders only recognize an agent who is registered or present at that visit."
            image={images.buying.src}
            imageAlt={images.buying.alt}
            reverse
          />
          <RealScoutListings />
          <FaqAeo title="Newbridge community: questions answered" faqs={NEWBRIDGE_GUIDE_FAQS} />
          <CtaBanner
            h2="Tour Newbridge with your own agent"
            sub="Call 702-779-3735. License S.0197614.LLC. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134."
          />
        </div>
      </main>
    </>
  );
}
