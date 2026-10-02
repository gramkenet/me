// Project ID and dataset are public identifiers, not secrets. Env vars
// override the defaults (e.g. to point a preview deploy at another dataset).
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "flv0bo8h";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2026-10-01";
