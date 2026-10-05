"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * The page's whole motion grammar in one place:
 * smooth scroll, the soft-focus reveal, letterbox bars closing as a scene
 * enters, parallax on framed stills, and the pinned credit roll.
 * Everything is visible and static without it (no JS or reduced motion).
 */
export default function Motion() {
  const pathname = usePathname();

  // Smooth scroll lives for the whole session.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("js-motion");

    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.95 });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  // Scene effects are rebuilt for every page.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    window.scrollTo(0, 0);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.shown = "";
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-bars]").forEach((el) => {
        gsap.fromTo(
          el,
          { "--bar-h": "12vh" },
          {
            "--bar-h": "0vh",
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "top 25%", scrub: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 0.12;
        gsap.fromTo(
          el,
          { yPercent: -amount * 100 },
          {
            yPercent: amount * 100,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-credits]").forEach((section) => {
        const list = section.querySelector<HTMLElement>(".credits__list");
        if (!list) return;
        section.dataset.rolling = "true";
        // From just below the fold until the last name rests low on screen,
        // so the end card follows the credits without a blank gap.
        const travel = () => list.offsetHeight + window.innerHeight * 0.1;
        const size = () => {
          section.style.height = `${travel() + window.innerHeight}px`;
        };
        size();
        gsap.fromTo(
          list,
          { y: () => window.innerHeight * 0.9 },
          {
            y: () => -list.offsetHeight + window.innerHeight * 0.8,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
              invalidateOnRefresh: true,
              onRefreshInit: size,
            },
          },
        );
      });

      // Finale: after the credits, the end card fades up out of black like
      // a film's last title card, then the details follow.
      const end = document.querySelector<HTMLElement>(".end-card");
      if (end && document.querySelector("[data-credits]")) {
        const logo = end.querySelector(".end-card__logo");
        const tagline = end.querySelector(".end-card__tagline");
        const details = end.querySelectorAll(".end-card__cols, .end-card__legal");
        gsap
          .timeline({ scrollTrigger: { trigger: end, start: "top bottom", end: "top top", scrub: 0.8 } })
          .fromTo(logo, { opacity: 0, scale: 1.14, filter: "blur(14px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", ease: "power2.out", duration: 1 })
          .fromTo(tagline, { opacity: 0, y: 18, filter: "blur(8px)" }, { opacity: 1, y: 0, filter: "blur(0px)", ease: "power2.out", duration: 0.6 }, "-=0.25");
        gsap.fromTo(
          details,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: { trigger: details[0], start: "top bottom", end: "top 65%", scrub: 0.8 },
          },
        );
      }
    });

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      io.disconnect();
      window.removeEventListener("load", refresh);
      document.querySelectorAll<HTMLElement>("[data-credits]").forEach((s) => {
        s.style.height = "";
        delete s.dataset.rolling;
      });
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
