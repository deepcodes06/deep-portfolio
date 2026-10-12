
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    title: "AjabShahar",
    role: "Website Development",
    tech: "React · State · API Integration",
    details: [
      "Contributed to a real website using React during my internship.",
      "Learned to work with React functions, state, and API integration.",
      "Improved my frontend styling and UI implementation through practical work.",
    ],
  },
  {
    number: "02",
    title: "Cipla Admin",
    role: "Admin Page & Data Handling",
    tech: "PHP · PostgreSQL · Cron",
    details: [
      "Worked primarily on application data handling and admin functionality.",
      "Developed an admin page independently using PHP and PostgreSQL to display application data.",
      "Worked with Cron jobs for scheduled email-related tasks.",
      "Coordinated with the developer working on the application.",
    ],
  },
  {
    number: "03",
    title: "Cipla Application",
    role: "Frontend Contribution",
    tech: "Flutter",
    details: [
      "Contributed to the frontend development of a Cipla application using Flutter.",
      "Worked with the team to implement frontend requirements.",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Trade-Z",
    category: "Stock Market Learning App",
    tech: "Flutter · Node.js · Express · PostgreSQL · Prisma",
    description:
      "A stock market learning and paper-trading application designed to help beginners explore stocks, manage a virtual portfolio, and understand profit and loss without risking real money.",
    repo: "https://github.com/deepcodes06/Trade-z-UI",
    repoBackend:"https://github.com/deepcodes06/Trade-z-server"
  },
  {
    number: "02",
    title: "Tic Tac Toe",
    category: "Interactive Game",
    tech: "React · JavaScript · Tailwind CSS",
    description:
      "A Tic Tac Toe game built to practise frontend development, game logic, and interactive user interfaces. Add multiplayer details here if they are included in your repository.",
    repo: "https://github.com/deepcodes06/tictactoe",
  },
];

const skills = [
  {
    category: "Languages",
    value: "JavaScript · TypeScript · PHP · Dart · SQL",
  },
  {
    category: "Frontend",
    value: "React · Next.js · Flutter · HTML · CSS · Tailwind CSS",
  },
  {
    category: "Backend & Data",
    value: "Node.js · Express · PostgreSQL · Prisma · REST APIs",
  },
  {
    category: "Tools",
    value: "Git · GitHub · Cron",
  },
];

export default function CV() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a] px-5 py-8 text-white sm:px-8 sm:py-12">
      <div className="mx-auto w-full max-w-3xl">

        {/* Navigation */}

        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 flex items-center justify-between sm:mb-20"
        >
          <Link
            href="/"
            className="text-sm tracking-tight text-neutral-300 transition-colors hover:text-white"
          >
            deep.
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-400 transition hover:border-white/30 hover:text-white"
          >
            ← Back home
          </Link>
        </motion.nav>

        {/* Introduction */}

        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="border-b border-white/10 pb-10"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            Personal profile / CV
          </p>

          <h1 className="mt-6 text-[clamp(3.5rem,10vw,6rem)] font-medium leading-none tracking-[-0.08em]">
            Deep Soni<span className="text-neutral-600">.</span>
          </h1>

          <p className="mt-5 text-sm text-neutral-400 sm:text-base">
            Beginner Developer · Intern Developer
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400">
            I am a beginner developer with six months of internship
            experience at DAM Networks LLP. I have contributed to real-world
            web and mobile applications using React, PHP, PostgreSQL and
            Flutter. I am still learning, improving my development skills,
            and exploring how to build useful software through practical
            projects and hands-on experience.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {["React", "PHP", "PostgreSQL", "Flutter", "Next.js"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-wider text-neutral-400"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </motion.header>

        {/* Internship experience */}

        <section className="py-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            01 / Experience
          </p>

          <div className="mt-6 rounded-3xl border border-white/[0.09] bg-white/[0.025] p-5 sm:p-8">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              DAM Networks LLP
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
              Intern Developer · 6 months
            </p>

            <div className="mt-6 h-px bg-white/[0.08]" />

            <div className="mt-4 space-y-7">
              {experiences.map((experience, index) => (
                <motion.article
                  key={experience.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-4 transition-colors hover:border-white/[0.13] sm:p-5"
                >
                  <p className="text-[10px] tracking-[0.2em] text-neutral-600">
                    {experience.number}
                  </p>

                  <h3 className="mt-2 text-xl font-medium">
                    {experience.title}
                  </h3>

                  <p className="mt-1 text-xs text-neutral-500">
                    {experience.role}
                  </p>

                  <p className="mt-3 text-[10px] uppercase leading-5 tracking-wider text-neutral-500">
                    {experience.tech}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {experience.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-6 text-neutral-400"
                      >
                        <span className="text-neutral-600">—</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-neutral-500">
            During my internship, I also learned to understand client
            requirements, share regular progress updates, work with
            existing codebases, and take responsibility for my assigned work.
          </p>
        </section>

        {/* Personal projects */}

        <section className="border-t border-white/[0.08] py-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            02 / Personal projects
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500">
            Projects I have worked on to practise my skills, explore
            technologies, and learn by building.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col rounded-3xl border border-white/[0.09] bg-white/[0.025] p-5 transition-colors hover:border-white/20 sm:p-6"
              >
                <p className="text-[10px] tracking-[0.2em] text-neutral-600">
                  {project.number} / PROJECT
                </p>

                <h3 className="mt-5 text-2xl font-medium tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs text-neutral-500">
                  {project.category}
                </p>

                <p className="mt-4 text-sm leading-6 text-neutral-400">
                  {project.description}
                </p>

                <p className="mt-4 text-[10px] uppercase leading-5 tracking-wider text-neutral-500">
                  {project.tech}
                </p>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs text-neutral-300 transition-colors hover:text-white"
                >
                  View repository <span>↗</span>
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Technical skills */}

        <section className="border-t border-white/[0.08] py-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            03 / Technical skills
          </p>

          <div className="mt-5 divide-y divide-white/[0.08]">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-[140px_1fr] sm:gap-6"
              >
                <h3 className="text-[10px] uppercase tracking-wider text-neutral-500">
                  {skill.category}
                </h3>

                <p className="text-sm leading-6 text-neutral-300">
                  {skill.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}

        <section className="border-t border-white/[0.08] py-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            04 / Education
          </p>

          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
            <h3 className="text-xl font-medium">
              Bachelor of Science in Information Technology
            </h3>

            <p className="mt-3 text-sm text-neutral-400">
              BSc IT · Currently pursuing · Third year
            </p>

            <p className="mt-2 text-xs leading-6 text-neutral-600">
              College name and expected graduation year can be added here.
            </p>
          </div>
        </section>

        {/* Closing */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/[0.08] py-14 text-center sm:py-16"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            05 / What's next
          </p>

          <h2 className="mx-auto mt-6 max-w-xl text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
            Still learning.
            <br />
            Always improving.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-neutral-500">
            I am interested in learning new technologies, growing through
            practical experience, and contributing to real-world projects.
            I look forward to opportunities where I can learn from others,
            improve my skills, and become a better developer.
          </p>

          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="mt-7 inline-flex rounded-full border border-white/15 px-5 py-3 text-xs text-neutral-300 transition hover:border-white/40 hover:text-white"
          >
            Let's connect ↗
          </a>
        </motion.section>

        {/* Footer */}

        <footer className="border-t border-white/[0.08] py-7">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-neutral-600">Deep Soni · 2026</p>

            <Link
              href="/"
              className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-white"
            >
              Back to portfolio ↑
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
