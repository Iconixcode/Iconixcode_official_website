"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import GlowOrb from '@/components/GlowOrb';
import clients from '@/config/testimonials';
// Half-circle (semicircle) path bulging left
// viewBox 220 x 500 — center (200,250), radius 150
const ARC_W = 320;
const ARC_H = 500;
const ARC_D = 'M 170 100 A 150 150 0 0 0 190 400';
// Points evenly spaced along the semicircle (top → bottom)
const arcPoints = [
  { cx: 170, cy: 100 },
  { cx: 64,  cy: 144 },
  { cx: 20,  cy: 250 },
  { cx: 64,  cy: 356 },
  { cx: 170, cy: 400 },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % clients.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_60%,#001868_0%,transparent_55%)]" />
      <GlowOrb className="right-[20%] top-[25%]" size={320} color="rgba(30,205,253,0.1)" />

      <div className="container-x section-pad">
        <SectionHeader
          badge="Testimonial"
          title={<>What Clients <span className="text-gradient-cyan">Say</span></>}
          subtitle="Real feedback from people who trusted Iconixcode to turn their ideas into digital products."
        />

        <div className="mt-16 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
          {/* Left: vertical arc with avatars */}
          <div
            className="relative shrink-0"
            style={{ width: ARC_W, height: ARC_H }}
          >
            <svg
              viewBox={`0 0 ${ARC_W} ${ARC_H}`}
              width={ARC_W}
              height={ARC_H}
              className="absolute inset-0 overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="arcGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1ECDFD" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#1ECDFD" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#1ECDFD" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Static dotted semicircle */}
              <path
                d={ARC_D}
                fill="none"
                stroke="url(#arcGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 9"
              />
              {/* Traveling light pulse */}
              <motion.path
                d={ARC_D}
                fill="none"
                stroke="#1ECDFD"
                strokeWidth="2.5"
                strokeDasharray="14 600"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: [0, -471] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="drop-shadow-[0_0_5px_rgba(30,205,253,0.9)]"
              />
            </svg>

            {/* Avatar nodes */}
            {clients.map((c, i) => {
              const pt = arcPoints[i];
              const isActive = i === active;
              return (
                <motion.button
                  key={c.name}
                  onClick={() => setActive(i)}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: pt.cx, top: pt.cy }}
                  aria-label={`View ${c.name}'s testimonial`}
                  animate={{ scale: isActive ? 1 : 0.72 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  {isActive ? (
                    /* Active: large labelled avatar — label on left to avoid card overlap */
                    <div className="flex flex-row-reverse items-center gap-3 whitespace-nowrap">
                      <div className="relative">
                        {/* Outer glow ring */}
                        <motion.div
                          animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                          className="absolute -inset-1.5 rounded-full bg-cyan-400/20 blur-md"
                        />
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-navy-600 shadow-[0_0_24px_rgba(30,205,253,0.55)] ring-2 ring-cyan-400/60">
                          <span className="text-sm font-bold text-white">{c.initials}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="whitespace-nowrap text-sm font-semibold text-white">{c.name}</div>
                        <div className="whitespace-nowrap text-xs text-silver-400">
                          {c.role} · {c.company}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Inactive: small dim node */
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xs font-medium text-silver-400"
                      style={{ opacity: 0.55 }}
                    >
                      {c.initials}
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right: testimonial card */}
          <div className="relative z-10 w-full max-w-lg lg:max-w-[540px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950/80 p-7 shadow-[0_0_40px_rgba(0,33,148,0.35)] backdrop-blur-xl md:p-8"
              >
                {/* Subtle inner top glow */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan-400/[0.05] to-transparent" />

                {/* Brand icon */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/[0.08]">
                  <svg viewBox="0 0 64 64" className="h-6 w-6" fill="none">
                    <path d="M32 4L56 18V46L32 60L8 46V18L32 4Z" stroke="#1ECDFD" strokeWidth="3" strokeLinejoin="round" />
                    <path d="M32 4L56 18L32 32L8 18L32 4Z" fill="#1ECDFD" fillOpacity="0.15" stroke="#1ECDFD" strokeWidth="3" strokeLinejoin="round" />
                    <path d="M32 32V60" stroke="#1ECDFD" strokeWidth="3" />
                    <circle cx="32" cy="32" r="4" fill="#1ECDFD" />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={17} className="fill-cyan-400 text-cyan-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-[15px] leading-relaxed text-silver-200 md:text-base">
                  &ldquo;{clients[active].quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-white/[0.07] pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-navy-600 text-xs font-bold text-white shadow-[0_0_12px_rgba(30,205,253,0.35)]">
                    {clients[active].initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{clients[active].name}</div>
                    <div className="text-xs text-silver-400">
                      {clients[active].role} · {clients[active].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="mt-5 flex gap-2 pl-1">
              {clients.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-cyan-400' : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to ${c.name}'s testimonial`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
