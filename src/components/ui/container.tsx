import { cn } from "@/lib/cn";

const widths = {
  prose: "max-w-3xl",
  wide: "max-w-5xl",
};

export function Container({
  width = "prose",
  className,
  ...props
}: React.ComponentProps<"div"> & { width?: keyof typeof widths }) {
  return <div className={cn("mx-auto w-full px-5", widths[width], className)} {...props} />;
}
