import { getDictionary } from "@/content/dictionary";
import { SERVICES } from "@/content/services";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF, STATS, TELEGRAM_URL } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import CallSheet from "../CallSheet";
import Closing from "../Closing";
import ContactForm from "../ContactForm";
import CreditRoll from "../CreditRoll";
import PageTitles from "../PageTitles";
import WorkFrames from "../WorkFrames";

export function WorkPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <>
      <PageTitles
        locale={locale}
        title={dict.workSection.heading}
        lede={dict.workSection.intro}
        crumbs={[{ label: dict.nav.home, path: "/" }, { label: dict.nav.work }]}
      />
      <section className="scene">
        <div className="wrap">
          <WorkFrames locale={locale} labels={{ postLabel: dict.ui.inPostProduction, viewSite: dict.ui.viewSite }} />
        </div>
      </section>
      <Closing locale={locale} dict={dict} />
    </>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <>
      <PageTitles
        locale={locale}
        title={dict.about.heading}
        lede={dict.statement.stats(STATS)}
        crumbs={[{ label: dict.nav.home, path: "/" }, { label: dict.nav.about }]}
      />
      <section className="scene">
        <div className="wrap prose">
          {dict.about.paragraphs.map((p) => (
            <p key={p} data-reveal>
              {p}
            </p>
          ))}
        </div>
      </section>
      <section className="intertitle">
        <div className="bars" data-bars aria-hidden="true" />
        <div className="intertitle__frame" aria-hidden="true" />
        <div className="wrap">
          <p className="intertitle__text" data-reveal>
            {dict.statement.text}
          </p>
        </div>
      </section>
      <section className="scene" aria-labelledby="process-heading">
        <div className="wrap">
          <h2 id="process-heading" className="display-l" style={{ marginBottom: "3rem" }} data-reveal>
            {dict.process.heading}
          </h2>
          <CallSheet steps={dict.process.steps} dark />
        </div>
      </section>
      <Closing locale={locale} dict={dict} />

      {/* The film ends on its credits; the end card (footer) follows. */}
      <CreditRoll
        locale={locale}
        heading={dict.crewSection.heading}
        intro={dict.crewSection.intro}
        disciplines={dict.crewSection.disciplines}
      />
    </>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <>
      <PageTitles
        locale={locale}
        title={dict.contact.heading}
        lede={dict.contact.text}
        crumbs={[{ label: dict.nav.home, path: "/" }, { label: dict.nav.contact }]}
      />
      <section className="scene">
        <div className="wrap contact">
          <ContactForm
            locale={locale}
            labels={{ ...dict.contact, ...dict.ui }}
            services={SERVICES.map((s) => ({ value: s.slug, label: s.copy[locale].name }))}
          />
          <div className="contact__channels">
            <div className="channel">
              <span className="credit">{dict.ui.telegram}</span>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="channel">
              <span className="credit">{dict.ui.call}</span>
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            </div>
            <div className="channel">
              <span className="credit">{dict.ui.email}</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="channel">
              <span className="credit">{dict.ui.address}</span>
              <p>{ADDRESS[locale]}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
