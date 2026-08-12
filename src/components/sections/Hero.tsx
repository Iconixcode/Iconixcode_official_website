"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function LiveBadgeDot() {
  return (
    <span className="relative flex h-2.5 w-2.5 shrink-0">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-35" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(30,205,253,0.85)]" />
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const hero = heroRef.current;
    const background = backgroundRef.current;

    if (!hero || !background) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(background, {
          yPercent: 6,
          scale: 1.035,
          opacity: 0.92,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(background, {
          clearProps: "transform,opacity",
        });
      });

      return () => mm.revert();
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-24 sm:pt-28 lg:pt-20"
    >
      {/* Clean premium hero background */}
      <div
        ref={backgroundRef}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden will-change-transform"
        aria-hidden="true"
      >
        {/* Base background: same dark flow as next sections */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#020713_0%,#020713_58%,#020713_100%)]" />

        {/* Soft central cyan glow */}
        <motion.div
          animate={{
            opacity: [0.26, 0.42, 0.26],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[44%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.11] blur-[130px] sm:h-[44rem] sm:w-[44rem]"
        />

        {/* Left deep-blue glow */}
        <motion.div
          animate={{
            x: [0, 28, 0],
            y: [0, -18, 0],
            opacity: [0.35, 0.52, 0.35],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[4%] top-[18%] h-80 w-80 rounded-full bg-[#002194]/42 blur-[120px] sm:h-[30rem] sm:w-[30rem]"
        />

        {/* Right cyan-blue glow */}
        <motion.div
          animate={{
            x: [0, -26, 0],
            y: [0, 20, 0],
            opacity: [0.24, 0.42, 0.24],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[6%] top-[24%] h-80 w-80 rounded-full bg-[#1ECDFD]/24 blur-[125px] sm:h-[30rem] sm:w-[30rem]"
        />

        {/* Subtle bottom continuation glow to blend into About section */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_center,rgba(30,205,253,0.045),transparent_62%)]" />

        {/* Very subtle engineering grid */}
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "56px 56px"],
            opacity: [0.14, 0.24, 0.14],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[linear-gradient(rgba(30,205,253,0.085)_1px,transparent_1px),linear-gradient(90deg,rgba(30,205,253,0.085)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_0%,black_50%,transparent_82%)]"
        />

        {/* Clean geometric brand shape behind text */}
        <motion.div
          animate={{
            rotate: [0, 360],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-[45%] h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-[5rem] border border-cyan-400/18 bg-cyan-400/[0.018] sm:h-[34rem] sm:w-[34rem]"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-[45%] h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1ECDFD]/16 sm:h-[27rem] sm:w-[27rem]"
        />

        {/* Minimal moving accent lines */}
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-50"
        >
          <defs>
            <linearGradient id="heroLineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1ECDFD" stopOpacity="0" />
              <stop offset="50%" stopColor="#1ECDFD" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#002194" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g fill="none" stroke="url(#heroLineGradient)" strokeWidth="1">
            <motion.path
              d="M-100 320 C260 240 480 290 720 370 C970 452 1190 378 1700 270"
              strokeDasharray="10 30"
              animate={{ strokeDashoffset: [0, -160] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M-120 610 C270 535 530 590 770 670 C1020 755 1220 670 1720 550"
              strokeDasharray="10 34"
              animate={{ strokeDashoffset: [0, 160] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
          </g>
        </svg>

        {/* Smooth readability overlay, no hard black cut */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.28)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020713] to-transparent" />
      </div>

      <div className="container-x section-pad relative z-10 flex w-full flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex max-w-[92vw] items-center gap-2 rounded-full border border-cyan-400/30 bg-black/25 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md sm:text-[11px] sm:tracking-[0.22em]"
        >
          <LiveBadgeDot />
          Software Engineering Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
          }}
          className="mt-6 max-w-5xl text-[clamp(2.7rem,10vw,5.6rem)] font-semibold leading-[0.96] tracking-tightest text-white sm:mt-7"
        >
          Engineering
          <br />
          <span className="text-gradient-cyan">Digital Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.22,
          }}
          className="mt-6 max-w-[40rem] text-sm leading-relaxed text-silver-400 sm:text-base md:text-lg"
        >
          We design, build, and deliver end-to-end software products from a raw
          idea to a launched, scalable platform. Engineering that feels precise,
          deliberate, and built to last.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.34,
          }}
          className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
        >
          <button
            onClick={() => go("#contact")}
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-cyan-300/35 bg-[linear-gradient(135deg,rgba(30,205,253,0.95),rgba(0,33,148,0.62))] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:brightness-110 sm:w-auto"
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.38),transparent_28%)] opacity-70" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative z-10">Start a Project</span>
            <ArrowRight
              size={17}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button
            onClick={() => go("#solutions")}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-500/[0.06] sm:w-auto"
          >
            View Services
            <ArrowUpRight
              size={16}
              className="text-cyan-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 bg-white/[0.025] p-1 backdrop-blur-sm">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(30,205,253,0.8)]"
          />
        </div>
      </motion.div>
    </section>
  );
}