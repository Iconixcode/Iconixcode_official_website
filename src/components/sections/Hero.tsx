"use client";

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import GlowOrb from '@/components/GlowOrb';

export default function Hero() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 -z-20 bg-[#020817]" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[9%] top-[20%] h-72 w-72 rounded-full bg-blue-700/20 blur-[110px]" />
        <div className="absolute right-[11%] top-[28%] h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="absolute bottom-[7%] left-1/2 h-80 w-[34rem] -translate-x-1/2 rounded-full bg-blue-700/20 blur-[120px]" />

        <svg viewBox="0 0 1600 900" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-55">
          <g fill="none" stroke="#1661a8" strokeWidth="1">
            <path d="M0 68 C400 76 1200 76 1600 68" />
            <path d="M0 140 C400 150 1200 150 1600 140" />
            <path d="M0 218 C400 230 1200 230 1600 218" />
            <path d="M0 302 C400 316 1200 316 1600 302" />
            <path d="M0 392 C400 408 1200 408 1600 392" />
            <path d="M0 488 C400 504 1200 504 1600 488" />
            <path d="M0 590 C400 604 1200 604 1600 590" />
            <path d="M0 698 C400 710 1200 710 1600 698" />
            <path d="M0 810 C400 820 1200 820 1600 810" />
            <path d="M80 0 C120 270 120 630 80 900" />
            <path d="M250 0 C275 270 275 630 250 900" />
            <path d="M430 0 C445 270 445 630 430 900" />
            <path d="M620 0 C625 270 625 630 620 900" />
            <path d="M820 0 C815 270 815 630 820 900" />
            <path d="M1015 0 C1005 270 1005 630 1015 900" />
            <path d="M1205 0 C1185 270 1185 630 1205 900" />
            <path d="M1385 0 C1355 270 1355 630 1385 900" />
            <path d="M1550 0 C1510 270 1510 630 1550 900" />
          </g>
          <g fill="#2c9cde">
            <circle cx="250" cy="140" r="2" /><circle cx="620" cy="218" r="2" />
            <circle cx="1015" cy="302" r="2" /><circle cx="1385" cy="392" r="2" />
            <circle cx="430" cy="488" r="2" /><circle cx="820" cy="590" r="2" />
            <circle cx="1205" cy="698" r="2" /><circle cx="80" cy="810" r="2" />
          </g>
        </svg>
      </div>

      <div className="absolute -z-10 left-[12%] top-[18%]">
        <GlowOrb size={360} color="rgba(0, 33, 148, 0.28)" />
      </div>
      <div className="absolute -z-10 right-[10%] top-[30%]">
        <GlowOrb size={320} color="rgba(30, 205, 253, 0.11)" />
      </div>

      <div className="container-x section-pad relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/[0.06] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(30,205,253,0.8)]" />
          Software Engineering Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-6 text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.98] tracking-tightest text-white"
        >
          Engineering
          <br />
          <span className="text-gradient-cyan">Digital Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-silver-400"
        >
          We design, build, and delivered end-to-end software products from a raw idea to a
          launched, scalable platform. Engineering that feels precise, deliberate, and built to last.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => go('#contact')}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-navy-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(30,205,253,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(30,205,253,0.65)] hover:brightness-110"
          >
            <span className="relative z-10">Start a Project</span>
            <ArrowRight size={17} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>

          <button
            onClick={() => go('#solutions')}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/[0.06] hover:shadow-[0_0_24px_rgba(30,205,253,0.2)]"
          >
            View Services
            <ArrowUpRight size={16} className="text-cyan-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        {/* Mini stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.46 }}
          className="mt-12 flex items-center gap-8"
        >
          
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(30,205,253,0.8)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
