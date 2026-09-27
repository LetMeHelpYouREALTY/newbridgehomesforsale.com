import type { NearbyPlaceResult } from "./search-category";

export function buildCommunityInfoContent(
  communityName: string,
  streetAddress: string,
  city: string,
  state: string,
  postalCode: string
): HTMLElement {
  const div = document.createElement("div");
  div.style.maxWidth = "240px";
  const title = document.createElement("strong");
  title.textContent = communityName;
  div.appendChild(title);
  div.appendChild(document.createElement("br"));
  const line1 = document.createTextNode(streetAddress);
  div.appendChild(line1);
  div.appendChild(document.createElement("br"));
  const line2 = document.createTextNode(`${city}, ${state} ${postalCode}`);
  div.appendChild(line2);
  return div;
}

export function buildPlaceInfoContent(place: NearbyPlaceResult): HTMLElement {
  const div = document.createElement("div");
  div.style.maxWidth = "260px";
  const title = document.createElement("strong");
  title.textContent = place.name;
  div.appendChild(title);
  if (place.address) {
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createTextNode(place.address));
  }
  div.appendChild(document.createElement("br"));
  const link = document.createElement("a");
  link.href = place.mapsUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Directions";
  div.appendChild(link);
  return div;
}
