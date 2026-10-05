import { CASES, type Case } from "@/content/work";
import type { Locale } from "@/lib/i18n";
import { ArrowUpRight } from "./icons";
import { CaseSlate, serviceName } from "./slates";

type Labels = { postLabel: string; viewSite: string };

function Frame({ c, locale, labels, big }: { c: Case; locale: Locale; labels: Labels; big?: boolean }) {
  return (
    <article className="frame" data-reveal>
      <div className="frame__parallax">
        <div data-parallax={big ? "0.06" : "0.1"}>
          <CaseSlate c={c} locale={locale} postLabel={labels.postLabel} ratio={big ? "16 / 10" : "4 / 3"} />
        </div>
      </div>
      <div className="frame__meta">
        <h3 className="frame__title">{c.placeholder ? labels.postLabel : c.client}</h3>
        {c.url && (
          <a className="text-link credit" href={c.url} target="_blank" rel="noopener">
            {labels.viewSite} <ArrowUpRight />
          </a>
        )}
        {!c.placeholder && <p className="frame__summary">{c.summary[locale]}</p>}
        <p className="frame__tags credit">{c.services.map((s) => serviceName(s, locale)).join(" · ")}</p>
      </div>
    </article>
  );
}

/** One real case projected large; the next ones still on the slate. */
export default function WorkFrames({ locale, labels, limit }: { locale: Locale; labels: Labels; limit?: number }) {
  const cases = limit ? CASES.slice(0, limit) : CASES;
  const [first, ...rest] = cases;
  return (
    <div className="work">
      <div className="work__feature">
        <Frame c={first} locale={locale} labels={labels} big />
      </div>
      <div className="work__side">
        {rest.map((c) => (
          <Frame key={c.slug} c={c} locale={locale} labels={labels} />
        ))}
      </div>
    </div>
  );
}
