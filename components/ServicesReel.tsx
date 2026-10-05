"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "./icons";

export type ReelItem = {
  slug: string;
  href: string;
  name: string;
  short: string;
  crew: string;
  slate: React.ReactNode;
};

/** Four disciplines as a reel list; the monitor beside it shows the active slate. */
export default function ServicesReel({ items, monitorLabel }: { items: ReelItem[]; monitorLabel: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="reel">
      <ul className="reel__list">
        {items.map((item, i) => (
          <li key={item.slug} className="reel__item" data-active={active === i} data-reveal>
            <Link
              href={item.href}
              className="reel__link"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <h3 className="reel__name">{item.name}</h3>
              <span className="reel__arrow" aria-hidden="true">
                <ArrowUpRight />
              </span>
              <p className="reel__short">{item.short}</p>
              <p className="reel__crew credit">{item.crew}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="reel__monitor" aria-hidden="true">
        <div className="reel__stack">
          {items.map((item, i) => (
            <div key={item.slug} data-active={active === i}>
              {item.slate}
            </div>
          ))}
        </div>
        <p className="reel__monitor-label credit">
          <span>{monitorLabel}</span>
          <span>
            {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </p>
      </div>
    </div>
  );
}
