import type { Metadata } from "next";
import { GOOGLE_SITE_VERIFICATION } from "@/content/site";
import { DEFAULT_LOCALE, LOCALES, OG_LOCALE, SITE_URL, localePath, type Locale } from "./i18n";

/** Metadata for one page in one locale, with canonical and hreflang alternates. */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  isHome = false,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  isHome?: boolean;
}): Metadata {
  const languages: Record<string, string> = Object.fromEntries(
    LOCALES.map((l) => [l, `${SITE_URL}${localePath(l, path)}`]),
  );
  languages["x-default"] = `${SITE_URL}${localePath(DEFAULT_LOCALE, path)}`;
  const url = `${SITE_URL}${localePath(locale, path)}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: isHome ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      url,
      siteName: "Sultan Quick Invest",
      title,
      description,
      locale: OG_LOCALE[locale],
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sultan Quick Invest" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    verification: { google: GOOGLE_SITE_VERIFICATION },
    icons: { icon: "/favicon.png", apple: "/favicon.png" },
  };
}
