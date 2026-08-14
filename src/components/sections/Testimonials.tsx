"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import clients from "@/config/testimonials";

const ARC_W = 320;
const ARC_H = 500;
const ARC_D = "M 170 100 A 150 150 0 0 0 190 400";
const PULSE_DURATION_MS = 30000;

const arcPoints = [
  { cx: 170, cy: 100 },
  { cx: 64, cy: 144 },
  { cx: 20, cy: 250 },
  { cx: 170, cy: 400 },
];

function formatRole(role: string, company: string) {
  return company ? `${role} · ${company}` : role;
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const stepDuration = PULSE_DURATION_MS / clients.length;

    const id = setInterval(() => {
      setActive((current) => (current + 1) % clients.length);
    }, stepDuration);

    return () => clearInterval(id);
  }, []);

  const activeClient = clients[active];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28"
    >
      {/* Soft background */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[-12%] top-[14%] h-[24rem] w-[24rem] rounded-full bg-cyan-400/[0.045] blur-[120px]" />
        <div className="absolute right-[-12%] bottom-[12%] h-[26rem] w-[26rem] rounded-full bg-[#002194]/20 blur-[130px]" />
      </div>

      <div className="container-x section-pad relative z-10">
        <SectionHeader
          badge="Testimonial"
          title={
            <>
              What Clients <span className="text-gradient-cyan">Say</span>
            </>
          }
          subtitle="Real feedback from people who trusted Iconixcode to turn their ideas into digital products."
        />

        <div className="mt-16 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
          {/* Desktop arc selector */}
          <div
            className="relative hidden shrink-0 lg:block"
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

              {/* Traveling light pulse - kept same as previous */}
              <motion.path
                d={ARC_D}
                fill="none"
                stroke="#1ECDFD"
                strokeWidth="2.5"
                strokeDasharray="14 600"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: [0, -471] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="drop-shadow-[0_0_5px_rgba(30,205,253,0.9)]"
              />
            </svg>

            {/* Avatar nodes */}
            {clients.map((client, index) => {
              const point = arcPoints[index] ?? arcPoints[arcPoints.length - 1];
              const isActive = index === active;

              return (
                <motion.button
                  key={client.name}
                  onClick={() => setActive(index)}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: point.cx, top: point.cy }}
                  aria-label={`View ${client.name}'s testimonial`}
                  animate={{ scale: isActive ? 1 : 0.72 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  {isActive ? (
                    <div className="flex flex-row-reverse items-center gap-3 whitespace-nowrap">
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: [1, 1.16, 1],
                            opacity: [0.45, 0.8, 0.45],
                          }}
                          transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute -inset-1.5 rounded-full bg-cyan-400/20 blur-md"
                        />

                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-navy-600 shadow-[0_0_22px_rgba(30,205,253,0.45)] ring-2 ring-cyan-400/55">
                          <span className="text-sm font-bold text-white">
                            {client.initials}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="whitespace-nowrap text-sm font-semibold text-white">
                          {client.name}
                        </div>
                        <div className="whitespace-nowrap text-xs text-silver-400">
                          {formatRole(client.role, client.company)}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xs font-medium text-silver-400 opacity-55 transition-colors hover:border-cyan-400/35 hover:text-cyan-200">
                      {client.initials}
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile / tablet selector */}
          <div className="w-full max-w-xl lg:hidden">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {clients.map((client, index) => {
                const isActive = index === active;

                return (
                  <button
                    key={client.name}
                    onClick={() => setActive(index)}
                    aria-label={`View ${client.name}'s testimonial`}
                    className="group relative flex flex-col items-center"
                  >
                    <span
                      className={`relative flex h-14 w-14 items-center justify-center rounded-full border text-sm font-bold transition-all duration-300 sm:h-16 sm:w-16 ${
                        isActive
                          ? "border-cyan-300/60 bg-gradient-to-br from-cyan-500 to-navy-600 text-white shadow-[0_0_18px_rgba(30,205,253,0.35)]"
                          : "border-white/12 bg-white/[0.045] text-silver-400 group-hover:border-cyan-400/35 group-hover:text-cyan-200"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="mobileTestimonialGlow"
                          className="absolute -inset-1 rounded-full bg-cyan-400/15 blur-md"
                        />
                      )}
                      <span className="relative z-10">{client.initials}</span>
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="mobileTestimonialIndicator"
                        className="mt-3 h-1 w-7 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(30,205,253,0.7)]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeClient.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 text-center"
              >
                <div className="text-base font-semibold text-white">
                  {activeClient.name}
                </div>
                <div className="mt-1 text-sm text-silver-400">
                  {formatRole(activeClient.role, activeClient.company)}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial card */}
          <div className="relative z-10 w-full max-w-xl lg:max-w-[580px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 26 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -26 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950/80 p-6 backdrop-blur-xl sm:p-7 md:p-8"
              >
                {/* Inner top glow */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan-400/[0.045] to-transparent" />

                {/* Stars */}
                <div className="flex gap-1.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="fill-cyan-400 text-cyan-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-5 text-base leading-relaxed text-silver-200 sm:text-lg md:text-[1.05rem]">
                  &ldquo;{activeClient.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-7 flex items-center gap-4 border-t border-white/[0.07] pt-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-navy-600 text-sm font-bold text-white shadow-[0_0_12px_rgba(30,205,253,0.28)] sm:h-16 sm:w-16 sm:text-base">
                    {activeClient.initials}
                  </div>

                  <div>
                    <div className="text-base font-semibold text-white">
                      {activeClient.name}
                    </div>
                    <div className="text-sm text-silver-400">
                      {formatRole(activeClient.role, activeClient.company)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="mt-5 flex justify-center gap-2 lg:justify-start">
              {clients.map((client, index) => (
                <button
                  key={client.name}
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === active
                      ? "w-8 bg-cyan-400"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to ${client.name}'s testimonial`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}