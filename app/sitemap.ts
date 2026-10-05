import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/content/services";
import { DEFAULT_LOCALE, LOCALES, SITE_URL, localePath } from "@/lib/i18n";

export const dynamic = "force-static";

const PATHS: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  ...SERVICE_SLUGS.map((s) => ({ path: `/services/${s}`, priority: 0.8 })),
  { path: "/work", priority: 0.7 },
  { path: "/about-us", priority: 0.6 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PATHS.flatMap(({ path, priority }) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}${localePath(locale, path)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: locale === DEFAULT_LOCALE ? priority : priority * 0.9,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}${localePath(l, path)}`])),
      },
    })),
  );
}
