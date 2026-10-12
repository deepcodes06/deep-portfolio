"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "Get in touch",
    href: "mailto:your-email@example.com",
  },
  {
    label: "GitHub",
    value: "See what I'm building",
    href: "https://github.com/deepcodes06",
  },
  {
    label: "Resume",
    value: "View my resume",
    href: "/cv",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-32 text-white sm:py-40"
    >
      <div className="mx-auto max-w-4xl">

        {/* Section label */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">
            02 / about
          </p>
        </motion.div>

        {/* Main heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <h2 className="text-[clamp(3.5rem,9vw,7rem)] font-medium leading-[0.9] tracking-[-0.07em]">
            I'm still
            <br />
            learning.
          </h2>
        </motion.div>

        {/* Description */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-14 max-w-2xl text-center"
        >
          <p className="text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
            I'm a developer who enjoys taking an idea and turning it
            into something real. Most of what I know has come from
            building things, running into problems, and figuring out
            how to solve them.
          </p>

          <p className="mt-6 text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
            My internship at DAM Networks gave me my first experience
            working with real requirements, clients, existing code,
            and applications beyond my own experiments.
          </p>

          <p className="mt-6 text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
            I'm still exploring different areas of development and
            improving the things I haven't figured out yet. Right now,
            I'm learning by building real-world projects and trying
            to become a better developer one step at a time.
          </p>
        </motion.div>

        {/* Small statement */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="mx-auto mt-14 flex max-w-md items-center justify-center gap-4"
        >
          <span className="h-px flex-1 bg-white/[0.08]" />

          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-700">
            still figuring things out
          </span>

          <span className="h-px flex-1 bg-white/[0.08]" />
        </motion.div>

        {/* Links */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
          className="mt-20 border-t border-white/[0.08] pt-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.label === "Email" || link.label === "CV"
                    ? undefined
                    : "_blank"
                }
                rel={
                  link.label === "Email" || link.label === "CV"
                    ? undefined
                    : "noreferrer"
                }
                className={`group flex items-center justify-between py-5 transition-colors duration-300 sm:flex-col sm:items-start sm:gap-3 sm:px-6 sm:py-4 ${
                  index !== 0
                    ? "border-t border-white/[0.08] sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600 transition-colors duration-300 group-hover:text-neutral-400">
                    {link.label}
                  </p>

                  <p className="mt-2 text-sm text-neutral-400 transition-colors duration-300 group-hover:text-white">
                    {link.value}
                  </p>
                </div>

                <span className="text-sm text-neutral-700 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}