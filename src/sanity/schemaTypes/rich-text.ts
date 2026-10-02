import { defineArrayMember, defineField } from "sanity";
import { altField, captionField } from "./media";

// Language values must be Shiki language ids; see src/components/code-block.tsx.
const codeLanguages = [
  { title: "TypeScript", value: "typescript" },
  { title: "TSX", value: "tsx" },
  { title: "JavaScript", value: "javascript" },
  { title: "JSX", value: "jsx" },
  { title: "C#", value: "csharp" },
  { title: "JSON", value: "json" },
  { title: "YAML", value: "yaml" },
  { title: "Bash", value: "bash" },
  { title: "HTML", value: "html" },
  { title: "CSS", value: "css" },
  { title: "SQL", value: "sql" },
  { title: "GraphQL", value: "graphql" },
  { title: "Python", value: "python" },
  { title: "Plain text", value: "text" },
];

export const bodyField = defineField({
  name: "body",
  title: "Body",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [altField, captionField],
    }),
    defineArrayMember({ type: "videoEmbed" }),
    defineArrayMember({
      type: "code",
      options: { languageAlternatives: codeLanguages, withFilename: false },
    }),
  ],
  validation: (rule) => rule.required(),
});
