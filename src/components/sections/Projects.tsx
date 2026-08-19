"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import projects from "@/config/projects";

const categories = ["All", "Websites", "Wedding Invitations"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28"
    >
      <div className="container-x section-pad">
        <SectionHeader
          badge="Selected Work"
          title={
            <>
              Recent <span className="text-gradient-cyan">Projects</span>
            </>
          }
          subtitle="A glimpse of products we’ve engineered across business dashboards, digital invitations, and custom web platforms."
        />

        {/* Category Filter */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-cyan-500 text-white shadow-[0_0_20px_rgba(30,205,253,0.4)]"
                  : "bg-white/[0.05] text-silver-300 border border-white/10 hover:border-cyan-400/30 hover:text-cyan-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-16 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: (index % 3) * 0.1,
      }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full min-h-[430px] overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:border-cyan-400/35 hover:bg-cyan-500/[0.035]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent transition-all duration-300 group-hover:via-cyan-400/35" />

      <div className="flex w-full flex-col">
        {/* Visual top */}
        <div
          className={`relative h-44 shrink-0 overflow-hidden bg-gradient-to-br ${project.accent}`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(30,205,253,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,205,253,0.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-0 bg-cyan-400/[0.025] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Abstract wireframe shape */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="h-24 w-24 rounded-lg border border-cyan-400/30 bg-cyan-400/[0.015] transition-all duration-300 [transform:rotateX(55deg)rotateZ(45deg)] group-hover:border-cyan-300/45 group-hover:bg-cyan-400/[0.035]"
                />
              </div>

              <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-2xl transition-all duration-300 group-hover:bg-cyan-300/35" />
            </>
          )}

          {/* Category tag */}
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/50 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-200 backdrop-blur-md transition-all duration-300 group-hover:border-cyan-300/30 group-hover:bg-ink/70">
            {project.category}
          </span>

          {/* Hover overlay */}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span className="flex items-center gap-1 rounded-full border border-cyan-400/20 bg-ink/60 px-3 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/45 hover:bg-cyan-500/[0.08]">
                Visit site <ArrowUpRight size={14} />
              </span>
            </a>
          ) : (
            <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex items-center gap-1 rounded-full border border-cyan-400/20 bg-ink/60 px-3 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-md">
                View case study <ArrowUpRight size={14} />
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          {/* Fixed title area */}
          <div className="min-h-[56px]">
            <h3 className="text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-50">
              {project.title}
            </h3>
          </div>

          {/* Fixed description area */}
          <div className="mt-2 min-h-[92px]">
            <p className="text-sm leading-relaxed text-silver-400">
              {project.desc}
            </p>
          </div>

          {/* Tags always align to bottom */}
          <div className="mt-auto flex min-h-[28px] flex-wrap items-end gap-1.5 pt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] tracking-wide text-silver-300 transition-all duration-300 group-hover:border-cyan-400/18 group-hover:bg-cyan-500/[0.035]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}