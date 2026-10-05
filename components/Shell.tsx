import Script from "next/script";
import { Playfair, Ysabeau_Office } from "next/font/google";
import type { ReactNode } from "react";
import { getDictionary } from "@/content/dictionary";
import { SERVICES } from "@/content/services";
import { ADDRESS, EMAIL, GA_ID, PHONE_HREF, TELEGRAM_URL } from "@/content/site";
import { HTML_LANG, SITE_URL, localePath, type Locale } from "@/lib/i18n";
import Footer from "./Footer";
import Header from "./Header";
import Motion from "./Motion";
import "@/app/globals.css";

// Playfair 2 (not Playfair Display): its optical-size axis reaches the
// hairline contrast of the SQI monogram at display sizes.
const display = Playfair({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-display-face",
  display: "swap",
});

// A humanist sans with calligraphic roots: carries the logo's tracked
// subline in caps and stays readable as body text.
const ui = Ysabeau_Office({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-ui-face",
  display: "swap",
});

function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#agency`,
    name: "Sultan Quick Invest",
    url: `${SITE_URL}${localePath(locale)}`,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og.png`,
    email: EMAIL,
    telephone: PHONE_HREF.replace("tel:", ""),
    sameAs: [TELEGRAM_URL],
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS[locale],
      addressLocality: "Tashkent",
      addressCountry: "UZ",
    },
    areaServed: "UZ",
    knowsLanguage: ["uz", "ru", "en"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.copy[locale].name, description: s.copy[locale].short },
      })),
    },
  };
}

/** The document for one locale: fonts, header bar, end card, motion, analytics. */
export default function Shell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const dict = getDictionary(locale);
  return (
    <html lang={HTML_LANG[locale]} className={`${display.variable} ${ui.variable}`}>
      <body>
        <a className="skip-link credit" href="#main">
          {dict.ui.skip}
        </a>
        <Header
          locale={locale}
          nav={dict.nav}
          labels={{ menu: dict.ui.menu, close: dict.ui.close, language: dict.ui.language, telegram: dict.ui.telegram }}
        />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
        <Motion />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(locale)).replace(/</g, "\\u003c") }}
        />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
