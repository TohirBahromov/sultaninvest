"use client";

import { useEffect, useRef } from "react";

/**
 * A camera's recording readout: blinking REC light plus a running
 * SMPTE-style timecode (HH:MM:SS:FF at 24 fps) since the page opened.
 */
export default function Timecode({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    let raf = 0;
    const pad = (n: number) => String(n).padStart(2, "0");
    const tick = (now: number) => {
      const frames = Math.floor(((now - start) / 1000) * 24);
      const ff = frames % 24;
      const s = Math.floor(frames / 24);
      if (ref.current) ref.current.textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(ff)}`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <span className={`rec ${className}`} aria-hidden="true">
      <span className="rec__badge">
        <span className="rec__dot" />
        REC
      </span>
      <span ref={ref} className="timecode">
        00:00:00:00
      </span>
    </span>
  );
}
