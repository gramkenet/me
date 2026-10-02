import { DocumentTextIcon } from "@sanity/icons/DocumentText";
import { defineType } from "sanity";
import { writingCategories } from "@/lib/taxonomy";
import { bodyField } from "./rich-text";
import { categoryField, entryFields } from "./shared";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [...entryFields, categoryField(writingCategories), bodyField],
  orderings: [
    { title: "Newest", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
});
