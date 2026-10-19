"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "currently building things.",
  "currently learning Flutter.",
  "currently exploring backend.",
  "currently experimenting.",
  "currently figuring things out.",
  "currently improving.",
];

const email = "deepsoni0610@gmail.com";
const github = "https://github.com/deepcodes06";
const githubText = "github.com/deepcodes06";
const resumePath = "/Deep_Soni_Resume_2026.pdf";

export default function Hero() {
  const [phrase, setPhrase] = useState(phrases[0]);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % phrases.length;
      setPhrase(phrases[index]);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

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
    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const copyText = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("");
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-20 text-white"
    >
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[100px]"
      />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-neutral-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
          <span>personal space / 2026</span>
        </motion.div>

        <motion.h1
          style={{ x: titleX, y: titleY }}
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="select-none text-[clamp(5rem,14vw,11rem)] font-medium leading-[0.8] tracking-[-0.085em]"
        >
          deep.
        </motion.h1>

        <div className="mt-10 h-7 overflow-hidden">
          <motion.p
            key={phrase}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm font-light text-neutral-400 sm:text-base"
          >
            {phrase}
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8"
        >
          I'm Deep Soni, a developer interested in building web applications,
          mobile experiences, and backend systems. I enjoy turning ideas into
          working products, exploring new technologies, and learning through
          the challenges that come with development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 flex items-center gap-2 text-[10px] text-neutral-700"
        >
          <span className="h-px w-6 bg-neutral-800" />
          <span>6 months · DAM Networks LLP</span>
          <span className="h-px w-6 bg-neutral-800" />
        </motion.div>


      {/* Contact details — horizontal layout */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="mt-10 w-full max-w-3xl border-t border-white/[0.08] pt-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {/* Email */}
          <div className="px-5 py-4 text-left sm:border-r sm:border-white/[0.08]">
            <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-neutral-600">
              Email
            </p>

            <a
              href="mailto:deepsoni0610@gmail.com"
              className="block text-sm text-neutral-300 transition hover:text-white"
            >
              Get in touch
            </a>

            <p className="mt-2 break-all text-xs leading-5 text-neutral-500">
              deepsoni0610@gmail.com
            </p>

            <span className="mt-3 block text-xs text-neutral-700">↗</span>
          </div>

          {/* GitHub */}
          <div className="px-5 py-4 text-left sm:border-r sm:border-white/[0.08]">
            <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-neutral-600">
              GitHub
            </p>

            <a
              href="https://github.com/deepcodes06"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-neutral-300 transition hover:text-white"
            >
              See what I'm building
            </a>

            <p className="mt-2 break-all text-xs leading-5 text-neutral-500">
              github.com/deepcodes06
            </p>

            <span className="mt-3 block text-xs text-neutral-700">↗</span>
          </div>

          {/* Resume */}
          <div className="px-5 py-4 text-left">
            <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-neutral-600">
              Resume
            </p>

            <a
              href="https://drive.google.com/file/d/1dCeWHeS2WGw9MJj2kLGA2XnP02z9_bTy/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-neutral-300 transition hover:text-white"
            >
              View my resume
            </a>

            <p className="mt-2 break-all text-xs leading-5 text-neutral-500">
              Deep Soni Resume 
            </p>

            <span className="mt-3 block text-xs text-neutral-700">↗</span>
          </div>
        </div>  
      </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-9 left-1/2 flex -translate-x-1/2 flex-col items-center"
      >
        <motion.span
          animate={{ y: [0, 5, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-xs text-neutral-500"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
