import type { Dictionary } from "@/content/dictionary";
import { STATS } from "@/content/site";

/** The printed intertitle card: the positioning, set like a silent-film title. */
export default function Statement({ dict }: { dict: Dictionary }) {
  return (
    <section className="intertitle">
      <div className="bars" data-bars aria-hidden="true" />
      <div className="intertitle__frame" aria-hidden="true" />
      <div className="wrap">
        <p className="intertitle__text" data-reveal>
          {dict.statement.text}
        </p>
        <p className="intertitle__foot credit" data-reveal>
          {dict.statement.stats(STATS)}
        </p>
      </div>
    </section>
  );
}
