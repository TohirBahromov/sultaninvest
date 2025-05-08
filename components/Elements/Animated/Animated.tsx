"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";
import { AnimationType } from "@/lib/types";

type AnimationProps = {
  children: ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
};

export function Animated({
  children,
  animation,
  duration = 1,
  delay = 0,
  className = "",
  once = true,
  threshold = 0,
}: AnimationProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  });

  return (
    <div
      ref={ref}
      className={`animate ${animation} ${
        inView ? "animate-start" : ""
      } ${className}`}
      style={
        {
          "--duration": `${duration}s`,
          "--delay": `${delay}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
