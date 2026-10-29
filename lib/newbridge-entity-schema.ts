import { SITE_ORIGIN } from "./canonical-url";
import { NAP } from "./site-images";

/** Sitewide JSON-LD entity graph for newbridgehomesforsale.com (SEO + GEO + AEO). */
export function buildNewbridgeEntityGraph() {
  const siteUrl = SITE_ORIGIN;
  const agentId = `${siteUrl}#dr-jan-duffy`;
  const businessId = `${siteUrl}#business`;
  const websiteId = `${siteUrl}#website`;
  const placeId = `${siteUrl}#newbridge-place`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: "Newbridge Homes for Sale",
        description:
          "Newbridge homes for sale in Las Vegas ZIP 89139. Buyer representation from Dr. Jan Duffy, BHHS Nevada Properties.",
        publisher: { "@id": businessId },
        inLanguage: "en-US",
      },
      {
        "@type": "RealEstateAgent",
        "@id": agentId,
        name: "Dr. Jan Duffy",
        jobTitle: "REALTOR®",
        url: siteUrl,
        telephone: "+17027793735",
        email: NAP.email,
        image: `${siteUrl}/og.jpg`,
        worksFor: { "@id": businessId },
        areaServed: { "@id": placeId },
      },
      {
        "@type": "RealEstateAgent",
        "@id": businessId,
        name: NAP.name,
        url: siteUrl,
        telephone: "+17027793735",
        email: NAP.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: NAP.street,
          addressLocality: NAP.city,
          addressRegion: NAP.state,
          postalCode: NAP.zip,
          addressCountry: "US",
        },
        parentOrganization: {
          "@type": "Organization",
          name: "Berkshire Hathaway HomeServices Nevada Properties",
        },
      },
      {
        "@type": "Place",
        "@id": placeId,
        name: "Newbridge",
        description:
          "Richmond American community in Southwest Las Vegas, Nevada, ZIP 89139, near Blue Diamond Road.",
        postalCode: "89139",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 36.021,
          longitude: -115.246,
        },
        containedInPlace: {
          "@type": "City",
          name: "Las Vegas",
          addressRegion: "NV",
          addressCountry: "US",
        },
      },
    ],
  };
}
