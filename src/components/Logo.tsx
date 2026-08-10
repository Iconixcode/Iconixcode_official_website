"use client";

import { motion } from 'framer-motion';

type Props = {
  className?: string;
  showWordmark?: boolean;
  onClick?: () => void;
};

export default function Logo({ className = '', showWordmark = true, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Iconixcode home"
    >
      <span className="relative inline-flex h-12 w-12 items-center justify-center">
        <motion.img
          src="/iconi.png"
          alt="Iconixcode logo"
          className="h-12 w-12 drop-shadow-[0_0_10px_rgba(30,205,253,0.55)]"
          
          
        />
      </span>
      {showWordmark && (
        <span className="text-[17px] text-white font-orbitron font-bold">
          ICONI<span className="text-cyan-400">X</span>CODE
        </span>
      )}
    </button>
  );
}
