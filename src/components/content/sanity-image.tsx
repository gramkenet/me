import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { SanityImage as SanityImageData } from "@/lib/sanity/schemas";
import { cn } from "@/lib/cn";

type Props = {
  image: SanityImageData;
  /** Rendered width in CSS pixels at its largest; the source is requested at 2x. */
  width: number;
  /** Crop to this aspect ratio (width / height) around the hotspot. Omit to keep the original. */
  aspect?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function SanityImage({ image, width, aspect, sizes, priority, className }: Props) {
  const height = Math.round(aspect ? width / aspect : (width * image.dimensions.height) / image.dimensions.width);
  const builder = urlFor(image).width(width * 2);
  const src = (aspect ? builder.height(height * 2).fit("crop") : builder.fit("max")).url();

  return (
    <Image
      src={src}
      alt={image.alt ?? ""}
      width={width}
      height={height}
      sizes={sizes ?? `(max-width: 768px) 100vw, ${width}px`}
      priority={priority}
      placeholder={image.lqip ? "blur" : "empty"}
      blurDataURL={image.lqip ?? undefined}
      className={cn("h-auto w-full", className)}
    />
  );
}
