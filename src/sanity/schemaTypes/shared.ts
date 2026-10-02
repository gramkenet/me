import { defineField } from "sanity";
import { coverImageField } from "./media";

/** Fields common to posts and case studies. Keep in sync with src/lib/sanity/schemas.ts. */
export const entryFields = [
  defineField({
    name: "title",
    title: "Title",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    options: { source: "title", maxLength: 96 },
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "excerpt",
    title: "Excerpt",
    description: "One or two sentences, shown in listings and link previews.",
    type: "text",
    rows: 3,
  }),
  coverImageField,
  defineField({
    name: "publishedAt",
    title: "Published at",
    type: "datetime",
    initialValue: () => new Date().toISOString(),
    validation: (rule) => rule.required(),
  }),
];

export function categoryField(categories: readonly { slug: string; label: string }[]) {
  return defineField({
    name: "category",
    title: "Category",
    type: "string",
    options: {
      list: categories.map((c) => ({ title: c.label, value: c.slug })),
      layout: "radio",
    },
    validation: (rule) => rule.required(),
  });
}
