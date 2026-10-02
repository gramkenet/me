import { codeToHtml } from "shiki";

export async function CodeBlock({ code, language }: { code: string; language?: string }) {
  const html = await codeToHtml(code, {
    lang: language ?? "text",
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  }).catch(() => codeToHtml(code, { lang: "text", themes: { light: "github-light", dark: "github-dark" }, defaultColor: false }));

  return <div className="code-block" dangerouslySetInnerHTML={{ __html: html }} />;
}
