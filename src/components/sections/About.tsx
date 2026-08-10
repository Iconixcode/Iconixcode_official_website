import { Target, Eye, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import GlowOrb from '@/components/GlowOrb';

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To engineer reliable, scalable software that turns ambitious ideas into products people love to use.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'A world where every business — regardless of size — has access to world-class engineering.',
  },
  {
    icon: Sparkles,
    title: 'Why ICONIXCODE',
    text: 'We exist to bridge the gap between design and engineering, shipping products that feel as good as they look.',
  },
];

const stats = [
  { n: '5+', l: 'Successfull Projects' },
  { n: '99.9%', l: 'Uptime delivered' },
  { n: '100%', l: 'Customer Feedback' },
  
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_30%,#001868_0%,transparent_55%)]" />
      <GlowOrb className="left-1/2 top-[8%] -translate-x-1/2" size={360} color="rgba(30,205,253,0.12)" />

      <div className="container-x section-pad mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/[0.06] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(30,205,253,0.8)]" />
            About Us
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.05] text-white sm:text-4xl md:text-[2.75rem]">
            We build the engineering
            <br />
            <span className="text-gradient-cyan">behind great products</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 text-base leading-relaxed text-silver-400 md:text-lg">
            Iconixcode was founded on a simple belief: great software is engineered, not assembled.
            We bring together senior engineers, designers, and product thinkers to build digital
            products that scale — from first prototype to millions of users.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4 text-left">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.24 + i * 0.1}>
              <div className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-cyan-400/30 hover:bg-cyan-500/[0.03]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.06] text-cyan-300 transition-shadow group-hover:shadow-[0_0_16px_rgba(30,205,253,0.3)]">
                  <p.icon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-silver-400">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={0.3 + i * 0.08}>
              <div className="glass rounded-2xl p-5 transition-colors hover:border-cyan-400/30">
                <div className="text-3xl font-semibold text-gradient-cyan">{s.n}</div>
                <div className="mt-1.5 text-xs uppercase tracking-wider text-silver-500">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
