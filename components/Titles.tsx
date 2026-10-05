import { Fragment } from "react";
import type { Dictionary } from "@/content/dictionary";
import { HAS_SHOWREEL } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import CallbackForm from "./CallbackForm";
import Timecode from "./Timecode";

// Runs during parsing, before first paint, so a repeat visit in the same
// session skips the opening cards instead of jumping mid-animation.
const SEEN_SCRIPT = `try{var t=document.getElementById('titles');if(sessionStorage.getItem('sqi-titles'))t.dataset.seen='true';sessionStorage.setItem('sqi-titles','1')}catch(e){}`;

export default function Titles({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { hero, ui } = dict;
  return (
    <section id="titles" className="titles" aria-labelledby="titles-headline" suppressHydrationWarning>
      <script dangerouslySetInnerHTML={{ __html: SEEN_SCRIPT }} />
      <div aria-hidden="true" />
      <div className="titles__screen">
        {HAS_SHOWREEL ? (
          <video className="titles__media" src="/media/showreel.mp4" poster="/media/showreel-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="titles__monogram" src="/logo.png" alt="" aria-hidden="true" />
        )}
        <div className="titles__vignette" />
        <div className="grain" aria-hidden="true" />
        <div className="titles__cards">
          <p className="titles__presents credit" aria-hidden="true">{hero.presents}</p>
          <p className="titles__logline" aria-hidden="true">{hero.logline}</p>
          <h1 id="titles-headline" className="titles__headline display-xl">
            <span>{hero.headline[0]}</span>
            <span>{hero.headline[1]}</span>
          </h1>
        </div>
      </div>
      <div className="wrap titles__bar">
        <div className="titles__credits">
          <p className="credit">
            {hero.credits.split(" · ").map((c, i) => (
              <Fragment key={c}>
                {i > 0 && " · "}
                <span style={{ whiteSpace: "nowrap" }}>{c}</span>
              </Fragment>
            ))}
          </p>
          <Timecode />
        </div>
        <CallbackForm locale={locale} labels={ui} />
      </div>
    </section>
  );
}
