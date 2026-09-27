import { agentInfo } from "@/lib/site-config";
import type { CommunityAmenityConfig } from "./types";

export function buildAmenitiesPageSchema(
  config: CommunityAmenityConfig,
  siteUrl: string
): Record<string, unknown>[] {
  const pageUrl = `${siteUrl}${config.pagePath}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Featured places near ${config.communityName}`,
    itemListElement: config.curatedPlaces.map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": place.schemaType,
        name: place.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: place.address,
          addressLocality: config.city,
          addressRegion: config.state,
          addressCountry: "US",
        },
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Nearby Amenities in ${config.communityName}`,
        item: pageUrl,
      },
    ],
  };

  const communityPlaceSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: config.communityName,
    description: `New home community in ${config.city}, ${config.state}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.center.streetAddress,
      addressLocality: config.city,
      addressRegion: config.state,
      postalCode: config.center.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: config.center.lat,
      longitude: config.center.lng,
    },
  };

  const agentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: agentInfo.name,
    jobTitle: agentInfo.title,
    identifier: agentInfo.license,
    telephone: "+17022221964",
    worksFor: {
      "@type": "Organization",
      name: agentInfo.brokerage,
    },
    areaServed: {
      "@type": "Place",
      name: config.communityName,
      containedInPlace: {
        "@type": "City",
        name: config.city,
        addressRegion: config.state,
      },
    },
    url: siteUrl,
  };

  return [faqSchema, itemListSchema, breadcrumbSchema, communityPlaceSchema, agentSchema];
}
