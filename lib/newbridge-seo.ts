import type { Metadata } from "next";
import { SITE_ORIGIN } from "./canonical-url";

/** Primary keywords from Parallel search (Aug 2026) for this community site. */
export const NEWBRIDGE_KEYWORDS = [
  "Newbridge homes for sale",
  "Newbridge Las Vegas",
  "Newbridge 89139",
  "Richmond American Newbridge",
  "Blue Diamond Road homes Las Vegas",
  "Southwest Las Vegas ranch homes",
  "Middleton Falls Avenue Las Vegas",
  "Newbridge resale homes",
  "Las Vegas new construction buyer agent",
  "Dr. Jan Duffy Newbridge",
];

/** Homepage FAQs. Never repeat a question from NEWBRIDGE_GUIDE_FAQS: each page emits its own FAQPage. */
export const NEWBRIDGE_HOME_FAQS = [
  {
    question: "Is Newbridge sold out?",
    answer:
      "As of October 17, 2026, Richmond American's Newbridge web pages redirect to its general Las Vegas new-homes page. Portals can lag, so confirm any remaining builder lots and current MLS resales with Dr. Jan Duffy before you tour. Call 702-779-3735.",
  },
  {
    question: "Do I need my own agent to buy in Newbridge?",
    answer:
      "No law requires you to use an agent, but on a resale the listing agent represents the seller, and at a builder sales office the on-site agent represents the builder. Dr. Jan Duffy, License S.0197614.LLC, can represent you from your first resale showing. If you tour any builder inventory, register her before your first visit, because some builders only recognize an agent who is registered or present at that visit.",
  },
];

/** Community-guide FAQs (/neighborhoods/newbridge). */
export const NEWBRIDGE_GUIDE_FAQS = [
  {
    question: "Where is Newbridge in Las Vegas?",
    answer:
      "Newbridge is a Richmond American community in Southwest Las Vegas, ZIP 89139, near Blue Diamond Road. Richmond American listed its Newbridge sales office at 5509 Middleton Falls Ave, Las Vegas, NV 89139.",
  },
  {
    question: "Who built Newbridge Las Vegas?",
    answer:
      "Richmond American Homes built Newbridge. Ranch-style (single-story) plans are the signature product, including guest-suite and three-car-garage options on some elevations.",
  },
  {
    question: "What is the Darius plan at Newbridge?",
    answer:
      "As of July 19, 2026, the Darius was reported as a single-story Newbridge plan of about 2,830 square feet with 4 bedrooms and 3.5 baths. Square footage and availability change—verify the specific lot with a current CMA.",
  },
];

export function newbridgeMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = path === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${path}`;
  return {
    title: { absolute: title },
    description,
    keywords: [...NEWBRIDGE_KEYWORDS, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Berkshire Hathaway HomeServices Nevada Properties",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${SITE_ORIGIN}/og.jpg`,
          width: 1200,
          height: 630,
          alt: "Newbridge homes for sale in Southwest Las Vegas | Dr. Jan Duffy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_ORIGIN}/og.jpg`],
    },
  };
}
