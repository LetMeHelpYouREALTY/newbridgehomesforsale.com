export const SITE = {
  name: "New Bridge Homes",
  domain: "newbridgehomesforsale.com",
  url: "https://www.newbridgehomesforsale.com",
  phoneDisplay: "(702) 500-1955",
  phoneTel: "+17025001955",
  email: "drjanduffy@bhhsnv.com",
  agentName: "Dr. Jan Duffy",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  address: {
    street: "9193 Nicole Paige Ct",
    city: "Las Vegas",
    region: "NV",
    postalCode: "89139",
    country: "US",
  },
  hours: {
    weekday: "Mon-Fri: 9:00 AM - 6:00 PM",
    saturday: "Sat: 10:00 AM - 4:00 PM",
    sunday: "Sun: Closed",
    schema: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
  },
  realscoutAgentId: "QWdlbnQtMjI1MDUw",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=9193+Nicole+Paige+Ct+Las+Vegas+NV+89139",
  reviewsUrl: "https://www.google.com/search?q=Dr.+Jan+Duffy+Las+Vegas+reviews",
  fullHomeSearchUrl:
    "https://www.realscout.com/homesearch/shared-searches/las-vegas-homes",
} as const;

export function formatAddress(): string {
  const { street, city, region, postalCode } = SITE.address;
  return `${street}, ${city}, ${region} ${postalCode}`;
}
