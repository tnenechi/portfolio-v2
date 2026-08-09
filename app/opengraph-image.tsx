import { generateOgImage, ogImageAlt, ogImageContentType, ogImageSize } from '@/lib/seo/og-image';

export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return generateOgImage();
}
