"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LOCALES, LOCALE_LABEL, localePath, type Locale, DEFAULT_LOCALE } from "@/lib/i18n";
import { PHONE_DISPLAY, PHONE_HREF, TELEGRAM_URL } from "@/content/site";
import Logo from "./Logo";
import { Close, Menu, Send } from "./icons";

type NavLabels = { home: string; services: string; work: string; about: string; contact: string };
type Labels = { menu: string; close: string; language: string; telegram: string };

const NAV: { key: keyof NavLabels; path: string }[] = [
  { key: "services", path: "/services" },
  { key: "work", path: "/work" },
  { key: "about", path: "/about-us" },
  { key: "contact", path: "/contact" },
];

/** Path without the locale prefix, e.g. "/ru/services/web/" -> "/services/web/". */
function basePath(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && (LOCALES as readonly string[]).includes(parts[0]) && parts[0] !== DEFAULT_LOCALE) parts.shift();
  return "/" + parts.join("/");
}

export default function Header({ locale, nav, labels }: { locale: Locale; nav: NavLabels; labels: Labels }) {
  const pathname = usePathname() ?? "/";
  const base = basePath(pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isCurrent = (path: string) => base === path || base.startsWith(path + "/");

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Logo locale={locale} />
        <nav className="site-header__nav credit" aria-label={nav.home}>
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={localePath(locale, item.path)}
              aria-current={isCurrent(item.path) ? "page" : undefined}
            >
              {nav[item.key]}
            </Link>
          ))}
        </nav>
        <div className="site-header__tools">
          <a className="site-header__phone" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
          <nav className="lang-switch credit" aria-label={labels.language}>
            {LOCALES.map((l) => (
              <Link key={l} href={localePath(l, base)} hrefLang={l} lang={l} aria-current={l === locale ? "true" : undefined}>
                {LOCALE_LABEL[l]}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="menu-button credit"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close className="icon" /> : <Menu className="icon" />}
            <span>{open ? labels.close : labels.menu}</span>
          </button>
        </div>
      </div>

      <div id="mobile-nav" className="mobile-nav" data-open={open} aria-hidden={!open}>
        <ul>
          {[{ key: "home" as const, path: "/" }, ...NAV].map((item) => (
            <li key={item.key}>
              <Link
                href={localePath(locale, item.path)}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                aria-current={(item.path === "/" ? base === "/" : isCurrent(item.path)) ? "page" : undefined}
              >
                {nav[item.key]}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-nav__foot">
          <a className="button" href={PHONE_HREF} tabIndex={open ? 0 : -1}>
            {PHONE_DISPLAY}
          </a>
          <a className="button button--ghost" href={TELEGRAM_URL} target="_blank" rel="noopener" tabIndex={open ? 0 : -1}>
            <Send /> {labels.telegram}
          </a>
        </div>
      </div>
    </header>
  );
}
