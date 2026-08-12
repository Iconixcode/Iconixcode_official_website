"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Rocket } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import processSteps from "@/config/processSteps";
import type { Step } from "@/config/processSteps";

export default function Process() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 72%", "end 36%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  const fillHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const rocketY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const maxIndex = processSteps.length - 1;
    const nextStep = Math.min(maxIndex, Math.max(0, Math.round(latest * maxIndex)));

    setActiveStep(nextStep);
  });

  return (
    <section id="process" className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[-12%] top-[12%] h-[24rem] w-[24rem] rounded-full bg-cyan-400/[0.055] blur-[120px]" />
        <div className="absolute right-[-14%] bottom-[8%] h-[26rem] w-[26rem] rounded-full bg-[#002194]/22 blur-[130px]" />
      </div>

      <div className="container-x section-pad relative z-10">
        <SectionHeader
          badge="Our Process"
          title={
            <>
              How We <span className="text-gradient-cyan">Work</span>
            </>
          }
          subtitle="A structured, transparent workflow that turns your idea into a shipped product."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-5xl">
          {/* Desktop timeline */}
          <div className="relative hidden md:block">
            {/* Track */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

            {/* Fill */}
            <motion.div
              style={{ height: fillHeight }}
              className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300 via-cyan-400 to-navy-500 shadow-[0_0_14px_rgba(30,205,253,0.65)]"
            />

            {/* Rocket */}
            <motion.div
              style={{ top: rocketY }}
              className="absolute left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <RocketMarker />
            </motion.div>

            <div className="flex flex-col gap-16 lg:gap-20">
              {processSteps.map((step, index) => {
                const left = index % 2 === 0;
                const active = activeStep === index;

                return (
                  <div key={step.num} className="relative min-h-[150px]">
                    {/* Center node */}
                    <div className="absolute left-1/2 top-8 z-10 -translate-x-1/2">
                      <TimelineNode active={active} />
                    </div>

                    <div className="grid grid-cols-2 gap-16">
                      <div className={left ? "pr-12 text-right" : "invisible"}>
                        {left && <StepCard step={step} align="right" active={active} />}
                      </div>

                      <div className={!left ? "pl-12" : "invisible"}>
                        {!left && <StepCard step={step} align="left" active={active} />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="relative md:hidden">
            {/* Mobile track */}
            <div className="absolute left-5 top-0 h-full w-px bg-white/10" />

            {/* Mobile fill */}
            <motion.div
              style={{ height: fillHeight }}
              className="absolute left-5 top-0 w-px bg-gradient-to-b from-cyan-300 via-cyan-400 to-navy-500 shadow-[0_0_12px_rgba(30,205,253,0.6)]"
            />

            {/* Mobile rocket */}
            <motion.div
              style={{ top: rocketY }}
              className="absolute left-5 z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <RocketMarker small />
            </motion.div>

            <div className="flex flex-col gap-7">
              {processSteps.map((step, index) => {
                const active = activeStep === index;

                return (
                  <div key={step.num} className="relative pl-12">
                    <div className="absolute left-5 top-7 z-10 -translate-x-1/2">
                      <TimelineNode active={active} />
                    </div>

                    <StepCard step={step} align="left" active={active} mobile />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RocketMarker({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full border border-cyan-400/45 bg-ink/85 text-cyan-300 backdrop-blur-md shadow-[0_0_16px_rgba(30,205,253,0.45)] ${
        small ? "h-8 w-8" : "h-9 w-9"
      }`}
    >
      <motion.div
        animate={{
          y: [0, -1.5, 0],
          rotate: [-8, 8, -8],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Rocket size={small ? 15 : 17} />
      </motion.div>
    </div>
  );
}

function TimelineNode({ active }: { active: boolean }) {
  return (
    <div
      className={`flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-300 ${
        active
          ? "border-cyan-300 bg-cyan-400/20 shadow-[0_0_18px_rgba(30,205,253,0.7)]"
          : "border-cyan-400/45 bg-ink"
      }`}
    >
      <div
        className={`rounded-full transition-all duration-300 ${
          active
            ? "h-2 w-2 bg-cyan-300 shadow-[0_0_10px_3px_rgba(30,205,253,0.85)]"
            : "h-1.5 w-1.5 bg-cyan-400 shadow-[0_0_8px_2px_rgba(30,205,253,0.6)]"
        }`}
      />
    </div>
  );
}

function StepCard({
  step,
  align,
  active,
  mobile = false,
}: {
  step: Step;
  align: "left" | "right";
  active: boolean;
  mobile?: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: mobile ? 24 : align === "left" ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-500 sm:p-6 ${
  active
    ? "border-cyan-300/40 bg-cyan-500/[0.045]"
    : "border-white/10 bg-white/[0.025] hover:border-cyan-400/28 hover:bg-cyan-500/[0.03]"
}`}
    >
      {/* Active glow */}
      {/* Soft active background highlight */}
<div
  className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(30,205,253,0.08),transparent_30%)] transition-opacity duration-500 ${
    active ? "opacity-100" : "opacity-0 group-hover:opacity-60"
  }`}
/>

      <div
        className={`relative z-10 flex items-center gap-3 ${
          align === "right" && !mobile ? "md:justify-end" : ""
        }`}
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
            active
              ? "border-cyan-300/50 bg-cyan-400/[0.12] text-cyan-200 shadow-[0_0_16px_rgba(30,205,253,0.25)]"
              : "border-cyan-400/20 bg-cyan-500/[0.055] text-cyan-300"
          }`}
        >
          <Icon size={19} />
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
            Step {step.num}
          </div>
          <h3 className="mt-1 text-lg font-semibold leading-tight text-white">
            {step.title}
          </h3>
        </div>
      </div>

      <p
        className={`relative z-10 mt-4 text-sm leading-relaxed text-silver-400 ${
          align === "right" && !mobile ? "md:ml-auto md:max-w-sm" : "max-w-sm"
        }`}
      >
        {step.desc}
      </p>
    </motion.div>
  );
}