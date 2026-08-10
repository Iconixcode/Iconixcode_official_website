"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Rocket } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import SectionHeader from '@/components/SectionHeader';
import Reveal from '@/components/Reveal';
import GlowOrb from '@/components/GlowOrb';

const details = [
  {
    icon: Mail,
    label: 'EMAIL US',
    value: 'hello@iconixcode.dev',
    href: 'mailto:hello@iconixcode.dev',
  },
  {
    icon: Phone,
    label: 'PHONE / WHATSAPP',
    value: '+1 (555) 234-5678',
    href: 'tel:+15552345678',
  },
  {
    icon: MapPin,
    label: 'LOCATION',
    value: 'San Francisco, CA · Remote-first',
    href: '#',
  },
];

const socials = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaXTwitter, href: '#', label: 'X' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', project: '' });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', company: '', email: '', project: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_20%,#001868_0%,transparent_60%)]" />
      <GlowOrb className="left-1/2 top-0 -translate-x-1/2" size={460} color="rgba(30,205,253,0.1)" />

      <div className="container-x section-pad">
        {/* Centered heading */}
        <SectionHeader
          badge="Contact Us"
          title={
            <>
              Let&apos;s Build Something{' '}
              <span className="text-gradient-cyan">Great</span>
            </>
          }
          subtitle="Have a project in mind? Tell us about it. We respond within 24 hours."
        />

        {/* Two-column layout */}
        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.35fr]">
          {/* ── Left column ── */}
          <div className="flex flex-col gap-4">
            {/* Contact info cards */}
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.08}>
                <a
                  href={d.href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#020d2a]/70 p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/[0.04]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.08] text-cyan-400 transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(30,205,253,0.35)]">
                    <d.icon size={19} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-silver-500">
                      {d.label}
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-white">{d.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}

            {/* Ready to start card */}
            <Reveal delay={0.28}>
              <div className="flex flex-1 flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#020d2a]/70 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.08] text-cyan-400">
                  <Rocket size={20} />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">Ready to start?</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-silver-400">
                    Whether you have a detailed brief or just a rough concept — we&apos;re the
                    right partner to take it from idea to impact.
                  </p>
                </div>
                <div className="mt-5 flex gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-silver-400 transition-all hover:border-cyan-400/40 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(30,205,253,0.25)]"
                    >
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right column: form ── */}
          <Reveal delay={0.12}>
            <form
              onSubmit={onSubmit}
              className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#020d2a]/70 p-6 md:p-7"
            >
              {/* subtle top glow line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

              {/* Row 1: Name + Company */}
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  label="FULL NAME"
                  type="text"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="Alex Johnson"
                  required
                />
                <FormField
                  label="COMPANY"
                  type="text"
                  value={form.company}
                  onChange={(v) => setForm({ ...form, company: v })}
                  placeholder="Acme Inc."
                />
              </div>

              {/* Row 2: Email */}
              <FormField
                label="EMAIL"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="alex@company.com"
                required
              />

              {/* Row 3: Project textarea */}
              <div className="flex flex-1 flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-silver-400">
                  TELL US ABOUT YOUR PROJECT
                </label>
                <textarea
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  placeholder="Describe what you're building, your timeline, and budget range..."
                  required
                  rows={6}
                  className="flex-1 resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-silver-600 transition-all duration-300 focus:border-cyan-400/40 focus:bg-cyan-500/[0.04] focus:outline-none focus:ring-2 focus:ring-cyan-400/15"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl bg-cyan-400 py-3.5 text-sm font-bold text-ink shadow-[0_0_24px_rgba(30,205,253,0.4)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(30,205,253,0.7)]"
              >
                <span className="relative z-10 inline-flex items-center justify-center gap-2">
                  {sent ? 'Message Sent!' : 'Send Message'}
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              <AnimatePresence>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-xs text-cyan-300"
                  >
                    Thanks — we&apos;ll be in touch within 24 hours.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-silver-400">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-silver-600 transition-all duration-300 focus:border-cyan-400/40 focus:bg-cyan-500/[0.04] focus:outline-none focus:ring-2 focus:ring-cyan-400/15"
      />
    </div>
  );
}
