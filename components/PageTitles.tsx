import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import Timecode from "./Timecode";

/** Inner pages open on a shorter letterboxed title card. */
export default function PageTitles({
  locale,
  title,
  lede,
  crumbs,
}: {
  locale: Locale;
  title: string;
  lede?: string;
  crumbs: { label: string; path?: string }[];
}) {
  return (
    <section className="page-titles" aria-labelledby="page-title">
      <div className="page-titles__screen">
        <div className="grain" aria-hidden="true" />
        <div className="wrap">
          <h1 id="page-title" className="display-xl titles__headline">
            {title}
          </h1>
          {lede && <p className="lede">{lede}</p>}
        </div>
      </div>
      <div className="wrap page-titles__bar credit">
        <nav aria-label="Breadcrumb">
          <ol className="crumbs">
            {crumbs.map((c) =>
              c.path !== undefined ? (
                <li key={c.label}>
                  <Link href={localePath(locale, c.path)}>{c.label}</Link>
                </li>
              ) : (
                <li key={c.label} aria-current="page">
                  {c.label}
                </li>
              ),
            )}
          </ol>
        </nav>
        <Timecode />
      </div>
    </section>
  );
}
