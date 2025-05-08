export const dynamic = "force-static";

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://sultaninvest.uz";
  return [
    {
      url: `${baseURL}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseURL}/about-us`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseURL}/services`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseURL}/contact`,
      lastModified: new Date().toISOString(),
    },
  ];
}
