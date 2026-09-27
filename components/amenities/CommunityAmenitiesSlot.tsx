import { headers } from "next/headers";
import { getCommunityAmenityConfig } from "@/lib/amenities/get-community-amenity-config";
import NearbyAmenitiesSection from "./NearbyAmenitiesSection";

type CommunityAmenitiesSlotProps = {
  variant?: "home" | "page";
};

export default async function CommunityAmenitiesSlot({
  variant = "home",
}: CommunityAmenitiesSlotProps) {
  const host = headers().get("x-domain") || headers().get("host") || "";
  const config = getCommunityAmenityConfig(host);
  if (!config) return null;
  return <NearbyAmenitiesSection config={config} variant={variant} />;
}
