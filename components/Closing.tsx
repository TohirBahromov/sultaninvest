import type { Dictionary } from "@/content/dictionary";
import { PHONE_DISPLAY, PHONE_HREF, TELEGRAM_URL } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import CallbackForm from "./CallbackForm";
import { Phone, Send } from "./icons";

export default function Closing({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="closing" aria-labelledby="closing-heading">
      <div className="bars" data-bars aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="wrap closing__grid">
        <div>
          <h2 id="closing-heading" className="display-xl" data-reveal>
            {dict.close.heading}
          </h2>
          <p className="lede" style={{ marginTop: "1.75rem" }} data-reveal>
            {dict.close.text}
          </p>
        </div>
        <div className="closing__actions" data-reveal>
          <CallbackForm locale={locale} labels={dict.ui} />
          <div className="closing__direct credit">
            <a className="text-link" href={TELEGRAM_URL} target="_blank" rel="noopener">
              <Send /> {dict.ui.telegram}
            </a>
            <a className="text-link" href={PHONE_HREF}>
              <Phone /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
