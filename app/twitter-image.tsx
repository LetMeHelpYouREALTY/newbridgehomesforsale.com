import {
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
  renderShareImage,
} from "@/lib/og-share-image";

export const runtime = "nodejs";
export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function TwitterImage() {
  return renderShareImage();
}
