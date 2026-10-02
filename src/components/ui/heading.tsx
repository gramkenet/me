import { cn } from "@/lib/cn";

const sizes = {
  display: "text-4xl font-semibold tracking-tight sm:text-5xl",
  xl: "text-3xl font-semibold tracking-tight sm:text-4xl",
  lg: "text-xl font-semibold tracking-tight",
  md: "text-lg font-medium",
  sm: "font-medium",
};

type HeadingProps = React.ComponentProps<"h1"> & {
  level?: 1 | 2 | 3 | 4;
  size?: keyof typeof sizes;
};

/** Semantic level and visual size are independent, so outlines stay correct. */
export function Heading({ level = 2, size = "lg", className, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;
  return <Tag className={cn("text-foreground", sizes[size], className)} {...props} />;
}

/** Small uppercase label used to title page sections. */
export function Eyebrow({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-muted", className)}
      {...props}
    />
  );
}
