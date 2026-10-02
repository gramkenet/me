import { Building2 } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Company logo in a fixed tile. The logo file is used as a mask and filled
 * with the text color, so every logo matches the theme regardless of its
 * original colors. Falls back to a generic icon.
 */
export function CompanyLogo({ logo, className }: { logo?: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("flex h-14 w-28 shrink-0 items-center justify-center rounded-lg bg-surface p-2.5", className)}
    >
      {logo ? (
        <span
          className="block size-full bg-foreground"
          style={{
            maskImage: `url(${logo})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: `url(${logo})`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
        />
      ) : (
        <Building2 className="size-6 text-muted" />
      )}
    </div>
  );
}
