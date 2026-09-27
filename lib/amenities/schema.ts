import { agentInfo } from "@/lib/site-config";
import type { CommunityAmenityConfig, CuratedPlace } from "./types";

function parseVerifiedAddress(place: CuratedPlace) {
  if (place.includeAddressInSchema === false) return undefined;
  const parts = place.address.split(",").map((s) => s.trim());
  if (parts.length < 3) return undefined;
  const streetAddress = parts[0];
  const addressLocality = parts[1];
  const regionZip = parts[2];
  const match = regionZip.match(/^([A-Z]{2})\s+(\d{5}(?:-\d{4})?)$/);
  if (!match) return undefined;
  return {
    "@type": "PostalAddress",
    streetAddress,
    addressLocality,
    addressRegion: match[1],
    postalCode: match[2],
    addressCountry: "US",
  };
}

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
    itemListElement: config.curatedPlaces.map((place, index) => {
      const address = parseVerifiedAddress(place);
      const item: Record<string, unknown> = {
        "@type": place.schemaType,
        name: place.name,
        url: place.sourceUrl,
      };
      if (address) {
        item.address = address;
      }
      return {
        "@type": "ListItem",
        position: index + 1,
        item,
      };
    }),
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
