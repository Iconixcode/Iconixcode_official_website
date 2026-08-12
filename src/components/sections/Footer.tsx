"use client";

import Logo from "@/components/Logo";
import navigation from "@/config/navigation";
import services from "@/config/services";
import contactConfig from "@/config/contact";

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export default function Footer() {
  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* top glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="container-x section-pad relative z-10 py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver-500">
              Engineering digital solutions from idea to launch. We build software that
              scales.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {contactConfig.socials.map((social) => {
                const external = isExternalLink(social.href);
                const isPlaceholder = social.href === "#";

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className={`group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-silver-400 transition-all duration-300 ${
                      isPlaceholder
                        ? "cursor-default"
                        : "hover:-translate-y-0.5 hover:border-cyan-400/45 hover:text-cyan-300 hover:shadow-[0_0_16px_rgba(30,205,253,0.22)]"
                    }`}
                  >
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(30,205,253,0.14),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <social.icon
                      size={18}
                      className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>

            <ul className="mt-4 flex flex-col gap-3">
              {navigation.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => go(link.href)}
                    className="group inline-flex items-center gap-1.5 text-left text-sm text-silver-400 transition-colors hover:text-cyan-300"
                  >
                    <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>

            <ul className="mt-4 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.title}>
                  <button
                    type="button"
                    onClick={() => go("#solutions")}
                    className="group inline-flex items-center gap-1.5 text-left text-sm text-silver-400 transition-colors hover:text-cyan-300"
                  >
                    <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h4>

            <ul className="mt-4 flex flex-col gap-3 text-sm text-silver-400">
              <li>
                <a
                  href="mailto:hello@iconixcode.com"
                  className="break-words transition-colors hover:text-cyan-300"
                >
                  hello@iconixcode.com
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/94785739319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-300"
                >
                  +94 78 573 9319
                </a>
              </li>

              <li>
                <a
                  href="https://maps.app.goo.gl/Xui5UctnKs9xPmJv9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex max-w-full break-words transition-colors hover:text-cyan-300"
                >
                  Dehiwala, Sri Lanka
                </a>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => go("#contact")}
              className="group relative mt-5 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-cyan-400/30 bg-cyan-500/[0.06] px-5 py-2.5 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/55 hover:bg-cyan-500/[0.12] hover:text-cyan-100 active:translate-y-0"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">Start a Project</span>
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
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