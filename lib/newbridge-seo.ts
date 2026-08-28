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

export const NEWBRIDGE_FAQS = [
  {
    question: "Where is Newbridge in Las Vegas?",
    answer:
      "Newbridge is a Richmond American community in Southwest Las Vegas, ZIP 89139, near Blue Diamond Road. The sales office address used by the builder is 5509 Middleton Falls Ave, Las Vegas, NV 89139.",
  },
  {
    question: "Who built Newbridge Las Vegas?",
    answer:
      "Richmond American Homes built Newbridge. Ranch-style (single-story) plans are the signature product, including guest-suite and three-car-garage options on some elevations.",
  },
  {
    question: "Is Newbridge sold out?",
    answer:
      "Builder portals disagree. Livabl listed Newbridge as sold out as of December 4, 2025, while other listing sites still show standing inventory. Confirm live MLS, resales, and any remaining Richmond American lots with Dr. Jan Duffy before you tour. Call 702-222-1964.",
  },
  {
    question: "Do I need my own agent to buy in Newbridge?",
    answer:
      "Nevada law does not require a REALTOR® for new construction, but the on-site sales agent represents the builder, not you. Register Dr. Jan Duffy, License S.0197614.LLC, before your first model visit so you keep independent contract review.",
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
    title,
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
