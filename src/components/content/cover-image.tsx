import type { SanityImage as SanityImageData } from "@/lib/sanity/schemas";
import { SanityImage } from "./sanity-image";

/** Full-width 16:9 cover at the top of a post or case study. */
export function CoverImage({ image }: { image: SanityImageData | null }) {
  if (!image) return null;
  return (
    <SanityImage
      image={image}
      width={768}
      aspect={16 / 9}
      priority
      className="mb-12 rounded-lg border border-border"
    />
  );
}
