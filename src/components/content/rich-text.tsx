import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { CodeBlock } from "@/components/code-block";

type Block = { _type: string; _key: string };

const components: PortableTextComponents = {
  types: {
    // Shape produced by @sanity/code-input.
    code: ({ value }: { value: { code: string; language?: string } }) => (
      <CodeBlock code={value.code} language={value.language} />
    ),
  },
};

export function RichText({ value }: { value: Block[] }) {
  return (
    <div className="prose">
      <PortableText value={value} components={components} />
    </div>
  );
}
