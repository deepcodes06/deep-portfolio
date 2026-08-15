"use client";

import { motion } from "framer-motion";

const words = ["BUILD", "LEARN", "REPEAT", "IMPROVE"];

export default function SectionTransition() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-8 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto flex w-full max-w-4xl items-center justify-center px-4"
      >
        <div className="flex w-full items-center justify-center gap-2 sm:gap-4">
          {words.map((word, index) => (
            <div
              key={word}
              className="flex min-w-0 flex-1 items-center justify-center gap-2 sm:gap-4"
            >
              <span
                className={`whitespace-nowrap text-[10px] font-medium tracking-[0.18em] sm:text-xs md:text-sm ${
                  index % 2 === 0
                    ? "text-white/[0.16]"
                    : "text-white/[0.55]"
                }`}
              >
                {word}
              </span>

              {index !== words.length - 1 && (
                <span className="shrink-0 text-[5px] text-neutral-700 sm:text-[6px]">
                  ✦
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}