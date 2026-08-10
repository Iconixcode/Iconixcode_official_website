"use client";

import Logo from '@/components/Logo';
import navigation from '@/config/navigation';
import services from '@/config/services';
import contactConfig from '@/config/contact';

export default function Footer() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/20 bg-ink">
      {/* top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/[0.06] to-transparent" />

      <div className="container-x section-pad relative z-10 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver-500">
              Engineering digital solutions from idea to launch. We build software that scales.
            </p>
            <div className="mt-6 flex gap-3">
              {contactConfig.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-silver-400 transition-all hover:border-cyan-400/40 hover:text-cyan-300 hover:shadow-[0_0_16px_rgba(30,205,253,0.25)]"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {navigation.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="group inline-flex items-center gap-1.5 text-sm text-silver-400 transition-colors hover:text-cyan-300"
                  >
                    <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.title}>
                  <button
                    onClick={() => go('#solutions')}
                    className="group inline-flex items-center gap-1.5 text-sm text-silver-400 transition-colors hover:text-cyan-300"
                  >
                    <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-silver-400">
              <li>
                <a href="mailto:hello@iconixcode.com" className="transition-colors hover:text-cyan-300">
                  hello@iconixcode.com
                </a>
              </li>
              <li>
                <a href="tel:+94771234567" className="transition-colors hover:text-cyan-300">
                  +94 77 123 4567
                </a>
              </li>
              <li>Colombo, Sri Lanka · Remote worldwide</li>
            </ul>
            <button
              onClick={() => go('#contact')}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/[0.06] px-5 py-2.5 text-sm font-semibold text-cyan-200 transition-all hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(30,205,253,0.25)]"
            >
              Start a Project
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-silver-600">
            © {new Date().getFullYear()} Iconixcode. All rights reserved.
          </p>
          <p className="text-xs text-silver-600">
            Engineered with precision · Built to scale
          </p>
        </div>
      </div>
    </footer>
  );
}
