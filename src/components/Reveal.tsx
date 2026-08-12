"use client";

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  direction?: Direction;
  once?: boolean;
  className?: string;
  amount?: number;
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  direction = 'up',
  once = true,
  className = '',
  amount = 0.3,
}: Props) {
  const offset =
    direction === 'up'
      ? { y, x: 0 }
      : direction === 'down'
        ? { y: -y, x: 0 }
        : direction === 'left'
          ? { y: 0, x }
          : direction === 'right'
            ? { y: 0, x: -x }
            : { y: 0, x: 0 };

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

