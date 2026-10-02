import { toEmbedUrl } from "@/lib/video";

export function VideoEmbed({ url, title }: { url: string; title?: string }) {
  const src = toEmbedUrl(url);
  // Studio validation should prevent this; fall back to a plain link.
  if (!src) return <a href={url}>{title ?? url}</a>;

  return (
    <div className="aspect-video overflow-hidden rounded-lg bg-surface">
      <iframe
        src={src}
        title={title ?? "Embedded video"}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="size-full border-0"
      />
    </div>
  );
}
