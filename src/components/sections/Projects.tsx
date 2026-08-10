"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import GlowOrb from '@/components/GlowOrb';
import projects from '@/config/projects';

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_40%,#001868_0%,transparent_55%)]" />
      <GlowOrb className="left-[15%] top-[15%]" size={300} color="rgba(30,205,253,0.1)" />

      <div className="container-x section-pad">
        <SectionHeader
          badge="Selected Work"
          title={<>Recent <span className="text-gradient-cyan">Projects</span></>}
          subtitle="A glimpse of products we've engineered across fintech, logistics, health, and more."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass relative overflow-hidden rounded-2xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_36px_rgba(30,205,253,0.18)]"
            >
              {/* Visual top */}
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(30,205,253,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,205,253,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
                {/* Abstract wireframe shape */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="h-24 w-24 rounded-lg border border-cyan-400/30 [transform:rotateX(55deg)rotateZ(45deg)]"
                  />
                </div>
                <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/30 blur-2xl" />

                {/* Category tag */}
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/50 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-200 backdrop-blur-md">
                  {p.category}
                </span>

                {/* Hover overlay */}
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <span className="flex items-center gap-1 text-xs font-medium text-cyan-300">
                      Visit site <ArrowUpRight size={14} />
                    </span>
                  </a>
                ) : (
                  <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-1 text-xs font-medium text-cyan-300">
                      View case study <ArrowUpRight size={14} />
                    </span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-400">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] tracking-wide text-silver-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
