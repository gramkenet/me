import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "./env";

const builder = createImageUrlBuilder({ projectId, dataset });

/** Image URL builder that respects the crop and hotspot set in the Studio. */
export function urlFor(source: SanityImageSource) {
  return builder.image(source).auto("format");
}
