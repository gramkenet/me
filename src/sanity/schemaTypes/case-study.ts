import { CaseIcon } from "@sanity/icons/Case";
import { defineField, defineType } from "sanity";
import { workCategories } from "@/lib/taxonomy";
import { bodyField } from "./rich-text";
import { categoryField, entryFields } from "./shared";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  icon: CaseIcon,
  fields: [
    ...entryFields,
    categoryField(workCategories),
    defineField({
      name: "client",
      title: "Client",
      description: "Leave blank or anonymize (e.g. “Fortune 500 retailer”) if under NDA.",
      type: "string",
    }),
    defineField({ name: "role", title: "My role", type: "string" }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    bodyField,
  ],
  orderings: [
    { title: "Newest", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: { select: { title: "title", subtitle: "client", media: "coverImage" } },
});
