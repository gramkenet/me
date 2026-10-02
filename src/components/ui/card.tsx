import { cn } from "@/lib/cn";
import { LinkBase, type LinkBaseProps } from "./link-base";

const variants = {
  /** Filled surface for grouping content. */
  surface: "bg-surface",
  /** Border only, for quieter grouping. */
  outline: "border border-border",
};

type CardStyleProps = { variant?: keyof typeof variants };

const base = "rounded-lg p-6";

export function Card({ variant = "surface", className, ...props }: React.ComponentProps<"div"> & CardStyleProps) {
  return <div className={cn(base, variants[variant], className)} {...props} />;
}

/** A whole-card link with a hover state. */
export function CardLink({ variant = "outline", className, ...props }: LinkBaseProps & CardStyleProps) {
  return (
    <LinkBase
      className={cn(
        base,
        variants[variant],
        "group block transition-colors hover:border-border-strong hover:bg-surface-hover",
        className,
      )}
      {...props}
    />
  );
}
