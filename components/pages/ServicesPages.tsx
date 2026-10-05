import Link from "next/link";
import { CASES } from "@/content/work";
import { CREW } from "@/content/crew";
import { getDictionary } from "@/content/dictionary";
import { SERVICES, type Service } from "@/content/services";
import { localePath, type Locale } from "@/lib/i18n";
import Closing from "../Closing";
import PageTitles from "../PageTitles";
import { ArrowRight } from "../icons";
import { CaseSlate, ServiceSlate } from "../slates";

function Who({ service, locale, label }: { service: Service; locale: Locale; label: string }) {
  const people = CREW.filter((c) => service.disciplines.includes(c.discipline));
  return (
    <div className="who">
      <p className="credit" style={{ color: "var(--champagne-3)" }}>
        {label}
      </p>
      <ul>
        {people.map((p) => (
          <li key={p.name.en}>
            <span>{p.name[locale]}</span>
            <span>{p.role[locale]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Deliverables({ items }: { items: string[] }) {
  return (
    <ul className="deliverables">
      {items.map((d) => (
        <li key={d}>{d}</li>
      ))}
    </ul>
  );
}

export function ServicesPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <>
      <PageTitles
        locale={locale}
        title={dict.servicesSection.heading}
        lede={dict.servicesSection.intro}
        crumbs={[{ label: dict.nav.home, path: "/" }, { label: dict.nav.services }]}
      />
      <section className="scene">
        <div className="wrap">
          {SERVICES.map((s) => {
            const c = s.copy[locale];
            return (
              <article key={s.slug} id={s.slug} className="service-block">
                <div className="service-block__body">
                  <h2 className="display-l" data-reveal>
                    <Link href={localePath(locale, `/services/${s.slug}`)} style={{ textDecoration: "none" }}>
                      {c.name}
                    </Link>
                  </h2>
                  {c.body.map((p) => (
                    <p key={p} data-reveal>
                      {p}
                    </p>
                  ))}
                  <p data-reveal>
                    <Link className="text-link credit" href={localePath(locale, `/services/${s.slug}`)}>
                      {c.name} <ArrowRight />
                    </Link>
                  </p>
                </div>
                <div className="service-block__body" data-reveal>
                  <div className="frame__parallax">
                    <div data-parallax="0.06">
                      <ServiceSlate slug={s.slug} locale={locale} />
                    </div>
                  </div>
                  <Deliverables items={c.deliverables} />
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <Closing locale={locale} dict={dict} />
    </>
  );
}

export function ServicePage({ locale, service }: { locale: Locale; service: Service }) {
  const dict = getDictionary(locale);
  const c = service.copy[locale];
  const cases = CASES.filter((k) => k.services.includes(service.slug));
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageTitles
        locale={locale}
        title={c.name}
        lede={c.short}
        crumbs={[{ label: dict.nav.home, path: "/" }, { label: dict.nav.services, path: "/services" }, { label: c.name }]}
      />
      <section className="scene">
        <div className="wrap">
          <div className="service-block" style={{ paddingTop: 0 }}>
            <div className="service-block__body">
              <div className="prose">
                {c.body.map((p) => (
                  <p key={p} data-reveal>
                    {p}
                  </p>
                ))}
              </div>
              <Who service={service} locale={locale} label={dict.ui.whoDoesIt} />
            </div>
            <div className="service-block__body" data-reveal>
              <p className="credit" style={{ color: "var(--champagne-3)" }}>
                {dict.ui.whatYouGet}
              </p>
              <Deliverables items={c.deliverables} />
            </div>
          </div>

          {cases.length > 0 && (
            <h2 className="display-m" style={{ margin: "2rem 0 2.5rem" }}>
              {dict.nav.work}
            </h2>
          )}
          {cases.length > 0 && (
            <div className="work">
              {cases.map((k) => (
                <article key={k.slug} className="frame work__half" data-reveal>
                  <CaseSlate c={k} locale={locale} postLabel={dict.ui.inPostProduction} ratio="16 / 10" />
                  <div className="frame__meta">
                    <h3 className="frame__title">{k.placeholder ? dict.ui.inPostProduction : k.client}</h3>
                    {!k.placeholder && <p className="frame__summary">{k.summary[locale]}</p>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="scene scene--black">
        <div className="wrap">
          <h2 className="display-m" style={{ marginBottom: "2rem" }}>
            {dict.ui.otherServices}
          </h2>
          <ul className="reel__list">
            {others.map((s) => (
              <li key={s.slug} className="reel__item">
                <Link className="reel__link" href={localePath(locale, `/services/${s.slug}`)}>
                  <h3 className="reel__name">{s.copy[locale].name}</h3>
                  <span className="reel__arrow" aria-hidden="true">
                    <ArrowRight />
                  </span>
                  <p className="reel__short">{s.copy[locale].short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Closing locale={locale} dict={dict} />
    </>
  );
}
