"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Clients', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/10 bg-ink/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container-x section-pad flex h-16 items-center justify-between md:h-20">
          <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="group relative px-3.5 py-2 text-sm font-medium text-silver-300 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-[0_0_8px_rgba(30,205,253,0.8)] transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => go('#contact')}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-navy-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(30,205,253,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,205,253,0.6)] hover:brightness-110"
            >
              <span className="relative z-10">Start a Project</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-white/10 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-x section-pad flex flex-col gap-1 py-4">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="rounded-lg px-4 py-3 text-left text-base font-medium text-silver-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => go('#contact')}
                className="mt-2 rounded-full bg-gradient-to-r from-cyan-400 to-navy-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_0_20px_rgba(30,205,253,0.35)]"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
