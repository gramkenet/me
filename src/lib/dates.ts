const formatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** Formats a "YYYY-MM" string as e.g. "Mar 2021". */
export function formatYearMonth(value: string) {
  const [year, month] = value.split("-").map(Number);
  return formatter.format(new Date(Date.UTC(year, month - 1)));
}

export function formatRange(start: string, end: string | null) {
  return `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : "Present"}`;
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
