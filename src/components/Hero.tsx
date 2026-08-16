"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "currently building things.",
  "currently learning Flutter.",
  "currently exploring backend.",
  "currently experimenting.",
  "currently figuring things out.",
  "currently improving.",
];

export default function Hero() {
  const [phrase, setPhrase] = useState(phrases[0]);

  // -----------------------------------------
  // Changing phrase
  // -----------------------------------------

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % phrases.length;
      setPhrase(phrases[index]);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  // -----------------------------------------
  // Mouse movement
  // -----------------------------------------

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const titleX = useTransform(smoothX, [-500, 500], [-8, 8]);
  const titleY = useTransform(smoothY, [-500, 500], [-5, 5]);

  const glowX = useTransform(smoothX, [-500, 500], [-100, 100]);
  const glowY = useTransform(smoothY, [-500, 500], [-100, 100]);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 text-white"
    >
      {/* -----------------------------------------
          Very subtle cursor light
      ------------------------------------------ */}

      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[100px]"
      />

      {/* -----------------------------------------
          Main content
      ------------------------------------------ */}

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        {/* Small top label */}

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-neutral-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />

          <span>personal space / 2026</span>
        </motion.div>

        {/* -----------------------------------------
            Name
        ------------------------------------------ */}

        <motion.h1
          style={{
            x: titleX,
            y: titleY,
          }}
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
          transition={{
            duration: 1.1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="select-none text-[clamp(5rem,14vw,11rem)] font-medium leading-[0.8] tracking-[-0.085em]"
        >
          deep.
        </motion.h1>

        {/* -----------------------------------------
            Changing phrase
        ------------------------------------------ */}

        <div className="mt-10 h-7 overflow-hidden">
          <motion.p
            key={phrase}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-sm font-light text-neutral-400 sm:text-base"
          >
            {phrase}
          </motion.p>
        </div>

        {/* -----------------------------------------
            Short introduction
        ------------------------------------------ */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 max-w-md text-xs leading-6 text-neutral-600 sm:text-sm"
        >
          A developer learning by building real things,
          <br className="hidden sm:block" />
          breaking them, fixing them, and trying again.
        </motion.p>

        {/* -----------------------------------------
            Current focus
        ------------------------------------------ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            Flutter
          </span>

          <span className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            Web
          </span>

          <span className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            Backend
          </span>
        </motion.div>

        {/* -----------------------------------------
            Experience hint
        ------------------------------------------ */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
          className="mt-8 flex items-center gap-2 text-[10px] text-neutral-700"
        >
          <span className="h-px w-6 bg-neutral-800" />

          <span>6 months · DAM Networks LLP</span>

          <span className="h-px w-6 bg-neutral-800" />
        </motion.div>
      </div>

      {/* -----------------------------------------
          Scroll indicator
      ------------------------------------------ */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
        className="absolute bottom-9 left-1/2 flex -translate-x-1/2 flex-col items-center"
      >

        <motion.span
          animate={{
            y: [0, 5, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-xs text-neutral-500"
        >
          ↓
        </motion.span>
      </motion.div>

      {/* -----------------------------------------
          Small corner details
      ------------------------------------------ */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-9 left-6 hidden text-[9px] uppercase tracking-[0.2em] text-neutral-800 sm:block"
      >
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-9 right-6 hidden text-[9px] uppercase tracking-[0.2em] text-neutral-800 sm:block"
      >
      </motion.div>
    </section>
  );
}