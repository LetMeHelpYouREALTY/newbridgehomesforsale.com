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
  title: "Anthem Homes for Sale | Henderson NV | Dr. Jan Duffy",
  description:
    "Anthem Henderson homes for sale: master-planned streets, golf, and 55+ options nearby. Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.",
};

const faqs = [
  {
    question: "Where is Anthem, Nevada?",
    answer:
      "Anthem is a master-planned area in Henderson in the southern Las Vegas Valley, with golf, parks, and a mix of age-restricted and open-age villages.",
  },
  {
    question: "Is Sun City Anthem the same as Anthem?",
    answer:
      "Sun City Anthem is the 55+ Del Webb village inside the broader Anthem area. Confirm age restriction, HOA, and golf dues on the specific listing.",
  },
];

const schemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Neighborhoods", url: "/neighborhoods" },
    { name: "Anthem", url: "/neighborhoods/anthem" },
  ]),
  generateNeighborhoodSchema({
    name: "Anthem",
    slug: "anthem",
    description:
      "Henderson master-planned community with golf, parks, and both open-age and 55+ villages including Sun City Anthem.",
    latitude: 35.948,
    longitude: -115.084,
    containedIn: "Henderson",
  }),
  generateFAQSchema(faqs)
);

export default function AnthemPage() {
  return (
    <>
      <SchemaScript schema={schemas} id="anthem-schema" />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SeoHero
            h1="Anthem Homes for Sale | Henderson, Nevada"
            lede="Master-planned Henderson inventory with golf, parks, and nearby 55+ villages. Dr. Jan Duffy maps HOA, age restriction, and lot type before you tour."
            image={images.neighborhoods.anthem.src}
            imageAlt={images.neighborhoods.anthem.alt}
            priority
          />
          <SeoSection
            h2="How do Anthem HOAs differ by village?"
            answer="Dues, rental caps, and landscape packages change by village. A Sun City Anthem listing is not interchangeable with an open-age Anthem Highlands street. Read the resale package, not the brochure."
            image={images.fiftyFivePlus.src}
            imageAlt={images.fiftyFivePlus.alt}
          />
          <RealScoutListings />
          <FaqAeo faqs={faqs} />
          <CtaBanner
            h2="Tour Anthem with a Henderson-focused agent"
            sub="Call 702-222-1964. License S.0197614.LLC. 9406 W Lake Mead Blvd, Suite 100, Las Vegas."
          />
        </div>
      </main>
    </>
  );
}
