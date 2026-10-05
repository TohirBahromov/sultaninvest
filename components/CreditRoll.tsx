import { CREW, DISCIPLINE_ORDER, type Discipline } from "@/content/crew";
import type { Locale } from "@/lib/i18n";

/** The signature: the real crew, credited by discipline, rolling like end titles. */
export default function CreditRoll({
  locale,
  heading,
  intro,
  disciplines,
  only,
}: {
  locale: Locale;
  heading: string;
  intro: string;
  disciplines: Record<Discipline, string>;
  only?: Discipline[];
}) {
  const groups = DISCIPLINE_ORDER.filter((d) => !only || only.includes(d))
    .map((d) => ({ d, people: CREW.filter((c) => c.discipline === d) }))
    .filter((g) => g.people.length);

  return (
    <section className="credits" data-credits aria-labelledby="credits-heading">
      <div className="credits__stage">
        <div className="credits__head wrap">
          <h2 id="credits-heading" className="display-l">
            {heading}
          </h2>
          <p className="lede">{intro}</p>
        </div>
        <div className="credits__window">
          <div className="credits__list wrap">
            {groups.map(({ d, people }) => (
              <div key={d} className="credits__group">
                <h3>{disciplines[d]}</h3>
                <ul className="credits__names">
                  {people.map((p) => (
                    <li key={p.name.en}>
                      <span className="credits__name">{p.name[locale]}</span>
                      <span className="credits__role credit">{p.role[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
