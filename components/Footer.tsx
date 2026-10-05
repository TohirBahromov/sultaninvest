import Link from "next/link";
import type { Dictionary } from "@/content/dictionary";
import { SERVICES } from "@/content/services";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF, TELEGRAM_URL } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";

/** The end card. */
export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  return (
    <footer className="end-card">
      <div className="wrap">
        <div className="end-card__top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="end-card__logo" src="/logo.png" alt="Sultan Quick Invest" width={192} height={192} loading="lazy" />
          <p className="end-card__tagline">{dict.footer.endCard}</p>
        </div>
        <div className="end-card__cols">
          <div>
            <h2>{dict.nav.services}</h2>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={localePath(locale, `/services/${s.slug}`)}>{s.copy[locale].name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Sultan Quick Invest</h2>
            <ul>
              <li>
                <Link href={localePath(locale, "/work")}>{dict.nav.work}</Link>
              </li>
              <li>
                <Link href={localePath(locale, "/about-us")}>{dict.nav.about}</Link>
              </li>
              <li>
                <Link href={localePath(locale, "/contact")}>{dict.nav.contact}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>{dict.nav.contact}</h2>
            <ul>
              <li>
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener">
                  {dict.ui.telegram}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>{dict.ui.address}</h2>
            <p className="end-card__address">{ADDRESS[locale]}</p>
          </div>
        </div>
        <div className="end-card__legal">
          <span>
            © {year} Sultan Quick Invest. {dict.footer.rights}
          </span>
          <span>sultaninvest.uz</span>
        </div>
      </div>
    </footer>
  );
}
