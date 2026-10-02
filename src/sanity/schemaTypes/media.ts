import { PlayIcon } from "@sanity/icons/Play";
import { defineField, defineType } from "sanity";
import { toEmbedUrl, videoProviders } from "@/lib/video";

export const altField = defineField({
  name: "alt",
  title: "Alternative text",
  description: "Describe the image for screen readers and search engines.",
  type: "string",
  validation: (rule) => rule.required(),
});

export const captionField = defineField({
  name: "caption",
  title: "Caption",
  type: "string",
});

/** Cover image used in listings, at the top of the page, and for link previews. */
export const coverImageField = defineField({
  name: "coverImage",
  title: "Cover image",
  description: "Shown in listings, at the top of the page, and when the link is shared. Use the hotspot to set the focal point.",
  type: "image",
  options: { hotspot: true },
  fields: [altField],
});

export const videoEmbed = defineType({
  name: "videoEmbed",
  title: "Video",
  type: "object",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "url",
      title: "Video URL",
      description: `A ${videoProviders.join(", ")} link.`,
      type: "url",
      validation: (rule) =>
        rule.required().custom((value) =>
          !value || toEmbedUrl(value) ? true : `Use a ${videoProviders.join(", ")} link.`,
        ),
    }),
    captionField,
  ],
  preview: {
    select: { title: "caption", subtitle: "url" },
    prepare: ({ title, subtitle }) => ({ title: title || "Video", subtitle }),
  },
});
