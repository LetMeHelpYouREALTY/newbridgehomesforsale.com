import type { Metadata } from "next";
import Link from "next/link";
import SeoHero from "@/components/seo/SeoHero";
import SeoSection from "@/components/seo/SeoSection";
import FaqAeo from "@/components/seo/FaqAeo";
import CtaBanner from "@/components/seo/CtaBanner";
import { images, NAP } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Las Vegas Realtor Reviews | Dr. Jan Duffy, BHHS Nevada Properties",
  description:
    "Client reviews for Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. 4.9 rating, 200+ reviews. 9406 W Lake Mead Blvd, Suite 100, Las Vegas. Call (702) 222-1964.",
};

const faqs = [
  {
    question: "Where can I read Google reviews for Dr. Jan Duffy?",
    answer:
      "Use the Google Business Profile for Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties, then compare notes here. Call 702-222-1964 if a review raises a transaction question.",
  },
  {
    question: "What rating does this office publish?",
    answer:
      "This site displays a 4.9 aggregate from 200+ reviews. Ratings change; verify the live Google listing before you decide.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SeoHero
          h1="Las Vegas Realtor Reviews for Dr. Jan Duffy"
          lede="4.9 published rating and 200+ reviews. BHHS Nevada Properties, 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134."
          image={images.office.src}
          imageAlt={images.office.alt}
          priority
        />
        <SeoSection
          h2="How do clients describe working with this agent?"
          answer="Reviews on this site cite contract guidance, Las Vegas inventory knowledge, and direct phone access. They are testimonials, not a guarantee of future results."
          image={images.whyDrJan.src}
          imageAlt={images.whyDrJan.alt}
        >
          <Link href="https://g.page/r/heyberkshire/review" className="font-semibold text-blue-600">
            Open Google reviews →
          </Link>
        </SeoSection>
        <FaqAeo faqs={faqs} />
        <CtaBanner
          h2="Want the same process those reviews describe?"
          sub={`Call ${NAP.phoneDisplay} or send a message. License ${NAP.license}.`}
        />
      </div>
    </main>
  );
}
