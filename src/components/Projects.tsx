"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetails, { type ProjectId } from "@/components/ProjectsDetails";

const projects: {
  id: ProjectId;
  number: string;
  title: string;
  type: string;
  stack: string;
  summary: string;
}[] = [
  {
    id: "trade-z",
    number: "01",
    title: "Trade-Z",
    type: "Personal project · Full stack",
    stack: "Flutter · Node.js · PostgreSQL",
    summary:
      "A stock-market learning app with paper trading, watchlists, portfolio tracking, and live price updates.",
  },
  {
    id: "cipla-admin",
    number: "02",
    title: "Cipla Admin Dashboard",
    type: "Internship · Web application",
    stack: "PHP · PostgreSQL · Cron jobs",
    summary:
      "An internal admin page for sales reports and employee records, including search, filtering, and record management.",
  },
  {
    id: "cipla-app",
    number: "03",
    title: "Cipla Employee App",
    type: "Internship · Mobile application",
    stack: "Flutter · API-related data handling",
    summary:
      "An employee-facing app for sales updates, sales history, and performance score tracking.",
  },
  {
    id: "tic-tac-toe",
    number: "04",
    title: "Tic Tac Toe",
    type: "Personal project · Frontend",
    stack: "React · JavaScript · Tailwind CSS",
    summary:
      "A responsive game with same-device two-player mode and a rule-based computer opponent.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectId | null>(null);

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white sm:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h2 className="mt-5 text-[clamp(3rem,7vw,6rem)] font-medium leading-none tracking-[-0.07em]">
              Projects
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
              A few things I have built and contributed to, from personal
              experiments to work completed during my internship.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative flex min-h-[270px] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-7 transition-colors duration-300 group-hover:border-white/[0.16] group-hover:bg-white/[0.05] sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">
                      {project.number}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-700 transition-colors group-hover:bg-neutral-300" />
                  </div>

                  <div className="mt-8">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                      {project.type}
                    </p>
                    <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-neutral-100 sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-xs uppercase tracking-[0.12em] text-neutral-600">
                      {project.stack}
                    </p>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-400">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project.id)}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-xs font-medium text-white transition hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={`View details for ${project.title}`}
                    >
                      View Details <span className="ml-2">↗</span>
                    </button>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-700">
                      Case study
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProjectDetails
        projectId={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
