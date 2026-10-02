import { cn } from "@/lib/cn";

const tones = {
  neutral: "border border-border text-muted",
  brand: "bg-brand-soft text-brand-soft-foreground",
  success: "bg-success-soft text-success-strong",
  warning: "bg-warning-soft text-warning-strong",
  error: "bg-error-soft text-error-strong",
  info: "bg-info-soft text-info-strong",
};

export type BadgeTone = keyof typeof tones;

export function Badge({
  tone = "neutral",
  className,
  ...props
}: React.ComponentProps<"span"> & { tone?: BadgeTone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.8125rem] leading-5",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}

/** A wrapping list of badges, e.g. technologies. */
export function BadgeList({
  items,
  tone,
  label,
  className,
}: {
  items: string[];
  tone?: BadgeTone;
  label?: string;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)} aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Badge tone={tone}>{item}</Badge>
        </li>
      ))}
    </ul>
  );
}
