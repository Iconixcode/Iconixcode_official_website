"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import services from "@/config/services";
import type { Service } from "@/config/services";

const cardLayouts = [
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-3",
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28"
    >
      {/* Soft section background only */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[-16%] top-[12%] h-[22rem] w-[22rem] rounded-full bg-cyan-400/[0.055] blur-[120px]" />
        <div className="absolute right-[-14%] bottom-[10%] h-[24rem] w-[24rem] rounded-full bg-[#002194]/20 blur-[130px]" />
      </div>

      <div className="container-x section-pad relative z-10">
        <SectionHeader
          badge="Our Solutions"
          title={
            <>
              What We <span className="text-gradient-cyan">Build</span>
            </>
          }
          subtitle="Focused digital services designed to help businesses launch, grow, and build a stronger online presence."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              layoutClass={cardLayouts[index] ?? "lg:col-span-4"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  layoutClass,
}: {
  service: Service;
  index: number;
  layoutClass: string;
}) {
  const Icon = service.icon;

  const isWideCard = layoutClass.includes("col-span-5");

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.06,
      }}
      whileHover={{ y: -5 }}
      className={`group relative min-h-[215px] overflow-hidden rounded-[1.6rem] border border-cyan-400/16 bg-[#030613]/78 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.045)] transition-all duration-300 hover:border-cyan-300/38 hover:bg-[#05091b] sm:p-6 md:col-span-1 ${layoutClass}`}
    >
      {/* Clean card glow, no mesh pattern */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] bg-[radial-gradient(circle_at_88%_14%,rgba(30,205,253,0.12),transparent_24%),linear-gradient(135deg,rgba(30,205,253,0.08),transparent_34%,rgba(0,33,148,0.12))] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Thin premium border layer */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] border border-[#002194]/28" />

      {/* Icon */}
      <div className="relative z-10 ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/[0.035] text-white/70 backdrop-blur-md transition-all duration-300 group-hover:border-cyan-300/60 group-hover:text-cyan-200">
        <Icon size={21} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-9">
        <h3
          className={`font-semibold leading-tight tracking-tight text-white ${
            isWideCard
              ? "max-w-[15rem] text-2xl sm:text-[1.75rem]"
              : "max-w-[13rem] text-[1.45rem] sm:text-[1.6rem]"
          }`}
        >
          {service.title}
        </h3>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-silver-400">
          {service.desc}
        </p>
      </div>

      {/* Small hover glow only */}
      <div className="pointer-events-none absolute bottom-[-45%] left-1/2 h-40 w-48 -translate-x-1/2 rounded-full bg-cyan-400/[0.055] blur-[62px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  );
}