"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type GSAPRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  start?: string;
  once?: boolean;
};

gsap.registerPlugin(ScrollTrigger);

export default function GSAPReveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.75,
  start = "top 86%",
  once = true,
}: GSAPRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          autoAlpha: 0,
          y,
          x,
        },
        {
          autoAlpha: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start,
            once,
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [delay, duration, once, start, x, y]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}