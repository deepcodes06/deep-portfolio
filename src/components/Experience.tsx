"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    title: "Cipla Admin Dashboard",
    keywords: "PHP · PostgreSQL · Cron",
    description:
      "During my internship at DAM Networks LLP, I built an internal administration page to make application data easier to review and manage.",
    details:
      "The dashboard focused on displaying sales-related information and employee data in a more organised way. I worked on the admin-side implementation using PHP and PostgreSQL, including data display and management workflows. I also worked with Cron for scheduled email-related tasks. I handled the admin page independently while receiving guidance on requirements and possible approaches from a senior developer. This helped me become more comfortable working with existing systems and understanding how backend data supports an interface.",
    learned: ["PHP", "PostgreSQL", "Data Handling", "Cron Jobs"],
  },
  {
    number: "02",
    title: "Cipla Employee App",
    keywords: "Flutter · Mobile UI",
    description:
      "I contributed to the frontend of a mobile application intended for employees to review information and submit sales updates.",
    details:
      "My work focused on building and refining Flutter UI screens and layouts, including dashboard and performance-related views. I helped fix interface issues and improve how screens fit different device sizes. API integration was handled by another developer, so my contribution was centred on the frontend rather than the app's API layer. This gave me practical experience with Flutter and showed me how mobile interfaces need to present information clearly while remaining usable on different screen sizes.",
    learned: ["Flutter", "UI Development", "Responsive Layouts", "Bug Fixing"],
  },
  {
    number: "03",
    title: "Internship Experience",
    keywords: "Teamwork · Existing Systems · Problem Solving",
    description:
      "The internship gave me a chance to move beyond practice projects and contribute to work shaped by real requirements.",
    details:
      "Across the web administration work and mobile frontend tasks, I learned to understand an existing codebase before changing it, clarify what a feature needs to do, and test the result rather than stopping once it looks correct. I also learned to recognise the boundaries of my responsibilities, collaborate with other developers, and ask for guidance when I needed it. The experience strengthened my interest in application development and gave me a clearer picture of the care and communication involved in building software for real use.",
    learned: ["Real Requirements", "Collaboration", "Debugging", "Learning Existing Code"],
  },
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<
    (typeof experiences)[number] | null
  >(null);

  // Close popup with Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedExperience(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent the page behind the popup from scrolling
  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedExperience]);

  return (
    <>
      {/* =====================================================
          EXPERIENCE SECTION
      ===================================================== */}

      <section
        id="experience"
        className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white sm:py-32"
      >
        <div className="mx-auto max-w-6xl">

          {/* Section heading */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center"
          >

            <h2 className="mt-5 text-[clamp(3rem,7vw,6rem)] font-medium leading-none tracking-[-0.07em]">
              DAM Networks LLP
            </h2>

            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-neutral-500">
              Intern Developer · 6 months
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
              During my internship, I worked across web administration and
              mobile application interfaces. I built an admin page using PHP
              and PostgreSQL, worked with scheduled email tasks, and contributed
              to Flutter frontend screens. The experience helped me understand
              how to work with existing applications, practical requirements,
              and other developers while continuing to build my technical skills.
            </p>
          </motion.div>

          {/* =====================================================
              EXPERIENCE CARDS
          ===================================================== */}

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
            {experiences.map((experience, index) => (
              <motion.button
                key={experience.number}
                type="button"
                onClick={() => setSelectedExperience(experience)}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group relative cursor-pointer text-left outline-none"
              >
                {/* Soft glow */}

                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-white/[0.04] opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

                {/* Glass card */}

                <div className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 group-hover:border-white/[0.15] group-hover:bg-white/[0.055] group-focus-visible:border-white/[0.25]">

                  {/* Top */}

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">
                      {experience.number}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-700 transition-colors duration-500 group-hover:bg-neutral-300" />
                  </div>

                  {/* Center */}

                  <div className="mt-8">
                    <h3 className="text-2xl font-medium tracking-[-0.04em] text-neutral-200 transition-transform duration-500 group-hover:translate-x-1">
                      {experience.title}
                    </h3>

                    <p className="mt-3 text-[10px] uppercase leading-5 tracking-[0.15em] text-neutral-600">
                      {experience.keywords}
                    </p>
                  </div>

                  {/* Bottom */}

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-700 transition-colors duration-500 group-hover:text-neutral-500">
                      View details
                    </span>

                    <span className="text-sm text-neutral-700 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neutral-300">
                      ↗
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* =====================================================
              EXPERIENCE SUMMARY
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="mx-auto mt-16 max-w-2xl text-center"
          >
            <div className="mx-auto mb-7 h-8 w-px bg-white/[0.08]" />

            <p className="text-lg leading-8 tracking-[-0.02em] text-neutral-300 sm:text-xl">
              Six months of learning how software
              is built for real requirements.
            </p>

            <p className="mt-3 text-sm leading-7 text-neutral-600">
              From understanding requirements and navigating existing code
              to testing changes, communicating with teammates, and taking
              responsibility for the parts of the work I handled.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE DETAIL POPUP
      ===================================================== */}

      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-5 py-6 backdrop-blur-md sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedExperience(null);
              }
            }}
          >
            {/* Popup */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-2xl rounded-[2rem] border border-white/[0.12] bg-[#111111]/95 p-7 shadow-2xl backdrop-blur-2xl sm:p-9"
            >
              {/* Close button */}

              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                aria-label="Close details"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-sm text-neutral-500 transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
              >
                ×
              </button>

              {/* Header */}

              <div className="pr-12">
                <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-600">
                  {selectedExperience.number} / experience
                </p>

                <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">
                  {selectedExperience.title}
                </h3>

                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  {selectedExperience.keywords}
                </p>
              </div>

              {/* Divider */}

              <div className="my-6 h-px bg-white/[0.08]" />

              {/* Description */}

              <div>
                <p className="text-sm leading-6 text-neutral-300 sm:text-[15px]">
                  {selectedExperience.description}
                </p>

                <p className="mt-4 text-sm leading-6 text-neutral-500 sm:text-[15px]">
                  {selectedExperience.details}
                </p>
              </div>

              {/* What I worked with */}

              <div className="mt-7">
                <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-neutral-600">
                  What I worked with
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedExperience.learned.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-neutral-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}

              <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
                <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-700">
                  DAM NETWORKS LLP
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedExperience(null)}
                  className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}