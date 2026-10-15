"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "Get in touch",
    href: "mailto:deepsoni0610@gmail.com",
  },
  {
    label: "GitHub",
    value: "See what I'm building",
    href: "https://github.com/deepcodes06",
  },
  {
    label: "Resume",
    value: "View my resume",
    href: "https://drive.google.com/file/d/1dCeWHeS2WGw9MJj2kLGA2XnP02z9_bTy/view?usp=drivesdk",
  },
];

const aiPractices = [
  {
    number: "01",
    title: "AI-assisted development",
    description:
      "I use AI tools such as ChatGPT and OpenCode as development assistants when exploring implementation ideas, understanding unfamiliar code, and moving through repetitive tasks more efficiently.",
  },
  {
    number: "02",
    title: "Smoke testing and checking outcomes",
    description:
      "I have used an OpenCode setup in my development environment to help smoke-test changes and compare possible approaches. This helps me check whether a change appears to work, spot issues earlier, and identify the outcome that best fits the task before I continue refining it.",
  },
  {
    number: "03",
    title: "Prompting and iteration",
    description:
      "I provide project context, explain the expected result, and refine instructions when the first attempt is not suitable. In personal projects, I use this iterative approach to explore options while keeping changes focused on the feature I am working on.",
  },
  {
    number: "04",
    title: "Reviewing, testing, and learning",
    description:
      "I treat AI suggestions as options to evaluate, not as automatically correct answers. I review the generated code, run and test it in my project, and investigate errors so I can understand the solution and decide whether it is appropriate.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-32 text-white sm:py-40"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-[clamp(3.5rem,9vw,7rem)] font-medium leading-[0.9] tracking-[-0.07em]">
            I'm still
            <br />
            learning.
          </h2>
        </motion.div>

        {/* About me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <p className="text-sm leading-7 text-neutral-300 sm:text-base sm:leading-8">
            I'm Deep Soni, a developer who enjoys turning ideas into working
            applications. I'm interested in how websites, mobile apps, and
            backend systems fit together, and I like exploring how a feature
            moves from an initial idea to something people can actually use.
            I learn best by building, testing, making mistakes, and working
            through the problems that come up along the way.
          </p>

          <p className="mt-6 text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
            Alongside my studies and personal projects, I'm continuing to
            strengthen my skills in frontend development, Flutter, databases,
            and backend development. I'm still exploring which areas I want to
            specialize in, and I'm focused on gaining experience, learning from
            others, and becoming a more thoughtful and dependable developer.
          </p>

          <p className="mt-6 text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
            My approach is to break a problem into smaller steps, get a working
            version in place, and then refine it. When something doesn't work,
            I try to understand why instead of only looking for a quick fix.
            I know I still have plenty to learn, and I see that as part of the
            process—not something to hide.
          </p>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="rounded-3xl border border-white/[0.09] bg-white/[0.035] p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-600">
                  Education
                </p>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.04em] text-neutral-100 sm:text-2xl">
                  BSc in Information Technology
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Nagindas Khandwala College
                </p>
              </div>
              <span className="w-fit rounded-full border border-white/[0.1] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                Expected 2027
              </span>
            </div>
            <div className="mt-6 border-t border-white/[0.08] pt-5">
              <p className="text-sm leading-7 text-neutral-500 sm:text-[15px]">
                Currently in my third year, building a foundation in IT while
                applying what I learn through personal projects and practical
                development experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* How I work */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-20 max-w-3xl border-t border-white/[0.08] pt-10"
        >
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-neutral-600">
            a little about how I work
          </p>

          <div className="mt-8 grid gap-8 text-left sm:grid-cols-3 sm:gap-6">
            <div>
              <p className="text-sm font-medium text-neutral-200">
                01 / Understand
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                I start by understanding what needs to be built and breaking
                the work into smaller tasks that are easier to approach.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-200">
                02 / Build
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                I focus on making the core feature work, learning the tools
                I need, and keeping the implementation clear and practical.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-200">
                03 / Improve
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                I test what I make, investigate bugs, and refine the result
                based on what I learn instead of assuming the first version
                is the final one.
              </p>
            </div>
          </div>
        </motion.div>

        {/* AI workflow */}
        <motion.div
          id="ai-workflow"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-24 max-w-4xl border-t border-white/[0.08] pt-14"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">
              AI & development
            </p>
            <h3 className="mt-5 text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.065em]">
              Working smarter
              <br />
              with AI.
            </h3>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
              I use AI as a development assistant to explore solutions, learn
              unfamiliar concepts, and work through problems more efficiently.
              In my personal projects, I have used ChatGPT and an OpenCode
              setup in my development environment to support implementation,
              smoke-test changes, and compare possible approaches.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {aiPractices.map((practice, index) => (
              <motion.article
                key={practice.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-white/[0.16] hover:bg-white/[0.04] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">
                    {practice.number}
                  </span>
                  <span className="h-px w-8 bg-white/[0.12]" />
                </div>
                <h4 className="mt-6 text-lg font-medium tracking-[-0.035em] text-neutral-200">
                  {practice.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {practice.description}
                </p>
              </motion.article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
            My goal is to use AI to improve my workflow—not to replace my
            understanding. I review suggestions, test changes in context, and
            use the process to learn more about the code I am building.
          </p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 border-t border-white/[0.08] pt-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.label === "Email" || link.label === "Resume"
                    ? undefined
                    : "_blank"
                }
                rel={
                  link.label === "Email" || link.label === "Resume"
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
