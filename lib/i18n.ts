export const LOCALES = ["uz", "ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "uz";

/** Locales served under a prefix (/ru, /en). Uzbek lives at the root. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export const SITE_URL = "https://sultaninvest.uz";

/** Site-relative path for a locale, always with the trailing slash the static export uses. */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}/`;
  return locale === DEFAULT_LOCALE ? clean : `/${locale}${clean}`;
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export const HTML_LANG: Record<Locale, string> = { uz: "uz", ru: "ru", en: "en" };
export const OG_LOCALE: Record<Locale, string> = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };
export const LOCALE_LABEL: Record<Locale, string> = { uz: "O‘z", ru: "Ру", en: "En" };
