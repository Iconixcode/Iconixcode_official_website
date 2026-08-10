"use client";

import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import GlowOrb from '@/components/GlowOrb';
import services from '@/config/services';
import type { Service } from '@/config/services';

export default function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_50%,#001868_0%,transparent_60%)]" />
      <GlowOrb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={520} color="rgba(30,205,253,0.1)" />

      <div className="container-x section-pad">
        <SectionHeader
          badge="Our Solutions"
          title={<>What We <span className="text-gradient-cyan">Build</span></>}
          subtitle="End-to-end digital products engineered from idea to launch."
        />

        {/* Desktop / tablet: hub & nodes */}
        <div className="relative mt-16 hidden h-[640px] w-full md:block">
          {/* SVG connectors */}
          <svg
            viewBox="0 0 800 600"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="conn" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#1ECDFD" stopOpacity="0.1" />
                <stop offset="0.5" stopColor="#1ECDFD" stopOpacity="0.5" />
                <stop offset="1" stopColor="#1ECDFD" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {services.map((s, i) => (
              <g key={i}>
                <path d={s.line} stroke="rgba(30,205,253,0.18)" strokeWidth="1" fill="none" />
                <motion.path
                  d={s.line}
                  stroke="#1ECDFD"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 200"
                  initial={{ strokeDashoffset: 0 }}
                  whileInView={{ strokeDashoffset: [-6, -206] }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: i * 0.3 }}
                  className="drop-shadow-[0_0_4px_rgba(30,205,253,0.8)]"
                />
              </g>
            ))}
          </svg>

          {/* Central hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <HubCore />
          </div>

          {/* Nodes */}
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.1 }}
              className={`absolute w-[320px] ${s.pos}`}
            >
              <NodeCard service={s} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: stacked cards with vertical connector */}
        <div className="mt-12 flex flex-col items-center gap-0 md:hidden">
          <div className="mb-6">
            <HubCore small />
          </div>
          <div className="relative w-full max-w-sm">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent" />
            <div className="flex flex-col gap-5 py-2">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                  className="relative"
                >
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_3px_rgba(30,205,253,0.8)]" />
                  <NodeCard service={s} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HubCore({ small = false }: { small?: boolean }) {
  const size = small ? 120 : 150;
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-2xl border border-cyan-400/30"
        style={{ transform: 'rotateX(55deg) rotateZ(0deg)' }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2 rounded-full border border-navy-400/40"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute h-16 w-16 rounded-full bg-cyan-400/40 blur-2xl"
      />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/50 bg-ink/70 backdrop-blur-md">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_16px_4px_rgba(30,205,253,0.9)]"
        />
      </div>
    </div>
  );
}

function NodeCard({ service }: { service: Service }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group glass relative overflow-hidden rounded-2xl p-3 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(30,205,253,0.18)]"
    >
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.06] text-cyan-300 transition-shadow group-hover:shadow-[0_0_16px_rgba(30,205,253,0.4)]">
          <service.icon size={16} />
        </div>
        <h3 className="text-sm font-semibold text-white">{service.title}</h3>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-silver-400">{service.desc}</p>
      <div className="mt-2 flex flex-wrap gap-1">
        {service.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[9px] tracking-wide text-silver-300"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}
