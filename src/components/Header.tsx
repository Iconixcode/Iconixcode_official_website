"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import navigation from "@/config/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
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
            ? "border-b border-cyan-400/10 bg-ink/78 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            : "border-b border-transparent bg-gradient-to-b from-black/55 to-transparent backdrop-blur-[2px]"
        }`}
      >
        <nav className="container-x section-pad flex h-[72px] items-center justify-between gap-4 md:h-[82px]">
          <Logo
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="shrink-0"
          />

          <div className="hidden items-center rounded-full border border-white/[0.06] bg-white/[0.025] px-2 py-1 backdrop-blur-xl lg:flex">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className="group relative rounded-full px-4 py-2.5 text-sm font-medium text-silver-300 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-navy-400 shadow-[0_0_10px_rgba(30,205,253,0.8)] transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => go("#contact")}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-300/35 bg-[linear-gradient(135deg,rgba(30,205,253,0.95),rgba(0,33,148,0.62))] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_26px_rgba(30,205,253,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:shadow-[0_0_42px_rgba(30,205,253,0.48)]"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.42),transparent_28%)] opacity-70" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative z-10">Start a Project</span>
              <ArrowUpRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/[0.06] hover:text-cyan-200 lg:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-cyan-400/10 bg-ink/96 shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:hidden"
          >
            <div className="container-x section-pad py-5">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-2">
                {navigation.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => go(item.href)}
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-medium text-silver-300 transition-all duration-300 hover:bg-cyan-500/[0.06] hover:text-white"
                  >
                    <span>{item.label}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 opacity-0 shadow-[0_0_10px_rgba(30,205,253,0.9)] transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                ))}

                <button
                  onClick={() => go("#contact")}
                  className="group mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl border border-cyan-300/35 bg-gradient-to-r from-cyan-400 to-navy-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(30,205,253,0.32)] transition-all duration-300 hover:shadow-[0_0_34px_rgba(30,205,253,0.5)]"
                >
                  Start a Project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}