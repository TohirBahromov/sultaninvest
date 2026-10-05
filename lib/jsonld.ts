import type { Service } from "@/content/services";
import { SITE_URL, localePath, type Locale } from "./i18n";

export function serviceJsonLd(s: Service, locale: Locale) {
  const c = s.copy[locale];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.name,
    description: c.short,
    serviceType: c.name,
    url: `${SITE_URL}${localePath(locale, `/services/${s.slug}`)}`,
    areaServed: { "@type": "Country", name: "Uzbekistan" },
    provider: { "@id": `${SITE_URL}/#agency` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: c.name,
      itemListElement: c.deliverables.map((d) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: d } })),
    },
  };
}
