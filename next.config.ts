import type { NextConfig } from "next";

// Fully static: `next build` writes plain HTML/CSS/JS to out/, which nginx
// serves on the VPS. Nothing here may need a Node server at runtime.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
