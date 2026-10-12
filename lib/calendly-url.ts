const CALENDLY_BASE = "https://calendly.com/drjanduffy";

export type CalendlyEventSlug =
  | "listing-consultation"
  | "showing"
  | "buyer-consultation-30-min";

const EVENT_ALIASES: Record<string, CalendlyEventSlug> = {
  showing: "showing",
  seller: "listing-consultation",
  "listing-consultation": "listing-consultation",
  buyer: "buyer-consultation-30-min",
  "buyer-consultation-30-min": "buyer-consultation-30-min",
};

export function buildCalendlyUrl(
  event: CalendlyEventSlug | string,
  placement: string,
  domain = "newbridgehomesforsale.com"
): string {
  let slug: CalendlyEventSlug = "showing";
  if (event.startsWith("http")) {
    return event;
  }
  const key = event.replace(/^\/+/, "").split("/").pop() ?? event;
  slug = EVENT_ALIASES[key] ?? (key as CalendlyEventSlug);

  const params = new URLSearchParams({
    utm_source: domain,
    utm_medium: "website",
    utm_content: placement,
  });

  return `${CALENDLY_BASE}/${slug}?${params.toString()}`;
}
