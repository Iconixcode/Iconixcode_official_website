"use client";

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  badge: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({
  badge,
  title,
  subtitle,
  className = '',
  align = 'center',
}: Props) {
  return (
    <div
      className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} ${className}`}
    >
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/[0.06] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(30,205,253,0.8)]" />
        {badge}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        className="mt-5 text-3xl font-semibold leading-[1.05] text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          className={`mt-4 max-w-xl text-base leading-relaxed text-silver-400 md:text-lg ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
