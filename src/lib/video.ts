/** Supported providers. Shared by the Studio (validation) and the site (rendering). */
export const videoProviders = ["YouTube", "Vimeo", "Loom"] as const;

/** Converts a watch/share URL into an embeddable player URL, or null if unsupported. */
export function toEmbedUrl(input: string): string | null {
  let url: URL;
  try {
    url = new URL(input);
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^(www|m)\./, "");
  const segments = url.pathname.split("/").filter(Boolean);

  if (host === "youtube.com") {
    const id = url.searchParams.get("v") ?? (["embed", "shorts", "live"].includes(segments[0]) ? segments[1] : null);
    return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
  }
  if (host === "youtu.be" && segments[0]) return `https://www.youtube-nocookie.com/embed/${segments[0]}`;
  if (host === "vimeo.com" && /^\d+$/.test(segments[0] ?? "")) return `https://player.vimeo.com/video/${segments[0]}`;
  if (host === "player.vimeo.com" && segments[0] === "video") return `https://player.vimeo.com/video/${segments[1]}`;
  if (host === "loom.com" && ["share", "embed"].includes(segments[0]) && segments[1])
    return `https://www.loom.com/embed/${segments[1]}`;
  return null;
}
