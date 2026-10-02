import type { NextConfig } from "next";
import { projectId } from "./src/lib/sanity/env";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Sanity image CDN, limited to this project. `search` is omitted on
        // purpose: Sanity image URLs carry crop/size params in the query string.
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: `/images/${projectId}/**`,
      },
    ],
  },
};

export default nextConfig;
