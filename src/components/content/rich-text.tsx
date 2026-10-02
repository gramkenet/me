import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { CodeBlock } from "@/components/code-block";
import { sanityImageSchema } from "@/lib/sanity/schemas";
import { SanityImage } from "./sanity-image";
import { VideoEmbed } from "./video-embed";

type Block = { _type: string; _key: string };

function Figure({ caption, children }: { caption?: string | null; children: React.ReactNode }) {
  return (
    <figure>
      {children}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      // Skip images whose upload hasn't finished or was removed.
      const parsed = sanityImageSchema.safeParse(value);
      if (!parsed.success) return null;
      return (
        <Figure caption={parsed.data.caption}>
          <SanityImage image={parsed.data} width={768} className="rounded-lg" />
        </Figure>
      );
    },
    videoEmbed: ({ value }: { value: { url?: string; caption?: string } }) =>
      value.url ? (
        <Figure caption={value.caption}>
          <VideoEmbed url={value.url} title={value.caption} />
        </Figure>
      ) : null,
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
