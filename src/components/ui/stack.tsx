import { cn } from "@/lib/cn";

const gaps = { sm: "space-y-4", md: "space-y-8", lg: "space-y-16", xl: "space-y-20" };

/** Vertical rhythm between siblings. */
export function Stack({
  gap = "md",
  className,
  ...props
}: React.ComponentProps<"div"> & { gap?: keyof typeof gaps }) {
  return <div className={cn(gaps[gap], className)} {...props} />;
}
