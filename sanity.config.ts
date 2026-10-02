import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "@/lib/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Tyler Gramke",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool(), codeInput(), visionTool({ defaultApiVersion: apiVersion })],
  schema: { types: schemaTypes },
});
