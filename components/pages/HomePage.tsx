import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { CREW } from "@/content/crew";
import { SERVICES } from "@/content/services";
import { localePath, type Locale } from "@/lib/i18n";
import CallSheet from "../CallSheet";
import Closing from "../Closing";
import CreditRoll from "../CreditRoll";
import ServicesReel from "../ServicesReel";
import Statement from "../Statement";
import Titles from "../Titles";
import WorkFrames from "../WorkFrames";
import { ArrowRight } from "../icons";
import { ServiceObject } from "../ServiceObjects";

/** "Bobur Akyulov, Abdulloh Fozilov +4": who is credited on a service. */
export function crewLine(disciplines: string[], locale: Locale, max = 2) {
  const people = CREW.filter((c) => disciplines.includes(c.discipline) && c.discipline !== "direction");
  const names = people.slice(0, max).map((p) => p.name[locale]);
  const more = people.length - names.length;
  return more > 0 ? `${names.join(", ")} +${more}` : names.join(", ");
}

export default function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Titles locale={locale} dict={dict} />
      <Statement dict={dict} />

      <section className="scene" aria-labelledby="services-heading">
        <div className="wrap">
          <div className="scene-head">
            <h2 id="services-heading" className="display-l" data-reveal>
              {dict.servicesSection.heading}
            </h2>
            <p className="lede" data-reveal>
              {dict.servicesSection.intro}
            </p>
          </div>
          <ServicesReel
            monitorLabel={dict.nav.services}
            items={SERVICES.map((s) => ({
              slug: s.slug,
              href: localePath(locale, `/services/${s.slug}`),
              name: s.copy[locale].name,
              short: s.copy[locale].short,
              crew: crewLine(s.disciplines, locale),
              slate: <ServiceObject slug={s.slug} locale={locale} />,
            }))}
          />
        </div>
      </section>

      <CreditRoll
        locale={locale}
        heading={dict.crewSection.heading}
        intro={dict.crewSection.intro}
        disciplines={dict.crewSection.disciplines}
      />

      <section className="scene" aria-labelledby="work-heading">
        <div className="wrap">
          <div className="scene-head">
            <h2 id="work-heading" className="display-l" data-reveal>
              {dict.workSection.heading}
            </h2>
            <p className="lede" data-reveal>
              {dict.workSection.intro}
            </p>
          </div>
          <WorkFrames locale={locale} labels={{ postLabel: dict.ui.inPostProduction, viewSite: dict.ui.viewSite }} limit={3} />
          <p style={{ marginTop: "3.5rem" }} data-reveal>
            <Link className="text-link credit" href={localePath(locale, "/work")}>
              {dict.nav.work} <ArrowRight />
            </Link>
          </p>
        </div>
      </section>

      <section className="intertitle" aria-labelledby="process-heading">
        <div className="intertitle__frame" aria-hidden="true" />
        <div className="wrap">
          <h2 id="process-heading" className="display-l" style={{ marginBottom: "3rem" }} data-reveal>
            {dict.process.heading}
          </h2>
          <CallSheet steps={dict.process.steps} />
        </div>
      </section>

      <Closing locale={locale} dict={dict} />
    </>
  );
}
