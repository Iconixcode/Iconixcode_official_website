"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import GlowOrb from '@/components/GlowOrb';
import processSteps from '@/config/processSteps';
import type { Step } from '@/config/processSteps';

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 30%'],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const rocketY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_50%,#001868_0%,transparent_55%)]" />
      <GlowOrb className="right-[10%] top-[20%]" size={320} color="rgba(30,205,253,0.1)" />

      <div className="container-x section-pad">
        <SectionHeader
          badge="Our Process"
          title={<>How We <span className="text-gradient-cyan">Work</span></>}
          subtitle="A structured, transparent workflow that turns your idea into a shipped product."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-4xl">
          {/* Track */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
          {/* Fill */}
          <motion.div
            style={{ height: fillHeight }}
            className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400 to-navy-500 shadow-[0_0_12px_rgba(30,205,253,0.7)]"
          />
          {/* Rocket */}
          <motion.div
            style={{ top: rocketY }}
            className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-ink/80 text-cyan-300 backdrop-blur-md shadow-[0_0_16px_rgba(30,205,253,0.5)]">
              <Rocket size={16} />
            </div>
          </motion.div>

          {/* Steps */}
          <div className="flex flex-col gap-12 md:gap-20">
            {processSteps.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <div key={step.num} className="relative">
                  {/* Center node */}
                  <div className="absolute left-1/2 top-6 z-10 hidden -translate-x-1/2 md:block">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full border border-cyan-400/50 bg-ink">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(30,205,253,0.9)]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
                    <div className={left ? 'md:pr-12 md:text-right' : 'md:invisible'}>
                      {left && <StepCard step={step} align="right" />}
                    </div>
                    <div className={!left ? 'md:pl-12' : 'md:invisible'}>
                      {!left && <StepCard step={step} align="left" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, align }: { step: Step; align: 'left' | 'right' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group glass rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_28px_rgba(30,205,253,0.15)]"
    >
      <div className={`flex items-center gap-3 ${align === 'right' ? 'md:justify-end' : ''}`}>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/[0.06] text-cyan-300 transition-shadow group-hover:shadow-[0_0_16px_rgba(30,205,253,0.35)]">
          <step.icon size={20} />
        </div>
        <span className="font-mono text-sm text-cyan-400/70">{step.num}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-silver-400">{step.desc}</p>
    </motion.div>
  );
}
