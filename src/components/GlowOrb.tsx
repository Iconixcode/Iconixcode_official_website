"use client";

import { motion } from 'framer-motion';

type Props = {
  className?: string;
  size?: number;
  color?: string;
};

export default function GlowOrb({
  className = '',
  size = 400,
  color = 'rgba(30, 205, 253, 0.18)',
}: Props) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-[100px] ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    />
  );
}
