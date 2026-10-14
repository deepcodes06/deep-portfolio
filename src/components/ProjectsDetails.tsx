
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type ProjectId =
  | "trade-z"
  | "tic-tac-toe"
  | "cipla-admin"
  | "cipla-app";

type Project = {
  id: ProjectId;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  overview: string;
  role: string;
  technologies: string[];
  features: string[];
  challenges: { title: string; description: string }[];
  images: { src: string; alt: string; caption: string }[];
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    id: "trade-z",
    number: "01",
    title: "Trade-Z",
    category: "PERSONAL PROJECT · FULL STACK",
    subtitle: "A stock market learning and paper-trading application.",
    overview:
      "Trade-Z is designed to help beginners explore the Indian stock market, follow stock prices, and practise buying and selling shares without risking real money. Users can manage watchlists, view their portfolio, and track profit and loss.",
    role:
      "Built the Flutter frontend and Node.js backend, working on the integration between the mobile app, backend services, database, and stock-data sources.",
    technologies: [
      "Flutter",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Python",
      "Server-Sent Events",
    ],
    features: [
      "User registration and login",
      "Stock search and price information",
      "Stock details and charts",
      "Watchlist management",
      "Paper buy and sell orders",
      "Portfolio and profit/loss tracking",
      "Transaction history",
      "Real-time price updates",
      "User profile",
    ],
    challenges: [
      {
        title: "Stock market data",
        description:
          "Finding reliable stock data while keeping API costs manageable. I used a custom Python server alongside other data sources.",
      },
      {
        title: "Frontend and backend integration",
        description:
          "Connecting the Flutter application to the Node.js backend and handling data between the two layers.",
      },
      {
        title: "Local device connectivity",
        description:
          "Troubleshooting connections between the mobile device and the development server running on a local network.",
      },
    ],
    images: [
    {
        src: "/projects/trade-z-1.png",
        alt: "Trade-Z portfolio",
        caption: "Portfolio and profit/loss",
      },
      {
        src: "/projects/trade-z-2.png",
        alt: "Trade-Z stock watchlist",
        caption: "Stock prices and watchlists",
      },
      {
        src: "/projects/trade-z-3.png",
        alt: "Trade-Z stock details",
        caption: "Stock details and charts",
      },
      {
        src: "/projects/trade-z-4.png",
        alt: "Trade-Z portfolio",
        caption: "Portfolio and profit/loss",
      },
            {
        src: "/projects/trade-z-5.png",
        alt: "Trade-Z portfolio",
        caption: "Portfolio and profit/loss",
      },
            {
        src: "/projects/trade-z-6.png",
        alt: "Trade-Z portfolio",
        caption: "Portfolio and profit/loss",
      },
            {
        src: "/projects/trade-z-7.png",
        alt: "Trade-Z portfolio",
        caption: "Portfolio and profit/loss",
      },
            {
        src: "/projects/trade-z-8.png",
        alt: "Trade-Z portfolio",
        caption: "Portfolio and profit/loss",
      },
    ],
    links: [
      {
        label: "Flutter frontend",
        href: "https://github.com/deepcodes06/Trade-z-UI",
      },
      {
        label: "Backend repository",
        href: "https://github.com/deepcodes06/Trade-z-server",
      },
    ],
  },
  {
    id: "tic-tac-toe",
    number: "02",
    title: "Tic Tac Toe",
    category: "PERSONAL PROJECT · FRONTEND",
    subtitle: "A classic game with a computer opponent.",
    overview:
      "A responsive Tic Tac Toe game with same-device two-player mode and a computer-opponent mode. The project helped me practise JavaScript game logic and interactive UI development.",
    role:
      "Started from a tutorial and customized the game, including its interface, game logic, and rule-based computer opponent.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    features: [
      "Two players on the same device",
      "Play against the computer",
      "Win detection",
      "Draw detection",
      "Restart and new game",
      "Responsive interface",
      "Rule-based computer moves",
    ],
    challenges: [
      {
        title: "Game logic",
        description:
          "Understanding how to evaluate the board and detect winning combinations or a draw after each move.",
      },
      {
        title: "Computer opponent",
        description:
          "Customizing a rule-based strategy so the computer can choose moves based on the current game state.",
      },
    ],
    images: [
      {
        src: "/projects/titactoe-1.png",
        alt: "Tic Tac Toe game board",
        caption: "Game interface",
      },
      {
        src: "/projects/tictactoe-2.png",
        alt: "Tic Tac Toe computer mode",
        caption: "Computer opponent mode",
      },
            {
        src: "/projects/tictactoe-3.png",
        alt: "Tic Tac Toe computer mode",
        caption: "Computer opponent mode",
      },
            {
        src: "/projects/tictactoe-4.png",
        alt: "Tic Tac Toe computer mode",
        caption: "Computer opponent mode",
      },
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/deepcodes06/tictactoe",
      },
    ],
  },
  {
    id: "cipla-admin",
    number: "03",
    title: "Cipla Admin Dashboard",
    category: "INTERNSHIP · WEB APPLICATION",
    subtitle: "An internal dashboard for sales and employee information.",
    overview:
      "An admin-only website used to review sales details, reports, and employee data. Since the application contains private company information, this case study uses descriptions and illustrative visuals instead of actual admin screenshots.",
    role:
      "Independently implemented the admin page using PHP and PostgreSQL. A senior developer provided the requirements and guidance on the implementation approach.",
    technologies: ["PHP", "PostgreSQL", "Cron Jobs"],
    features: [
      "Sales details and reports",
      "Employee data management",
      "Record search and filtering",
      "Add, edit, and delete operations",
      "Summary cards and statistics",
      "Scheduled emails",
    ],
    challenges: [
      {
        title: "Managing records",
        description:
          "Implementing the admin interface for working with sales and employee information, including record management and filtering.",
      },
      {
        title: "Scheduled emails",
        description:
          "Working with Cron jobs to support emails that run on a schedule.",
      },
    ],
    images: [
      {
        src: "/projects/cipla-admin-mockup.png",
        alt: "Illustrative admin dashboard mockup with fictional data",
        caption: "Illustrative mockup — not the actual company dashboard",
      },
    ],
    links: [],
  },
  {
    id: "cipla-app",
    number: "04",
    title: "Cipla Employee App",
    category: "INTERNSHIP · MOBILE APPLICATION",
    subtitle: "A mobile app for employee sales updates and performance tracking.",
    overview:
      "An employee-facing mobile application that supports sales updates, sales history, and performance score tracking.",
    role:
      "Contributed to the Flutter frontend by building UI screens and layouts, addressing responsive UI issues, fixing bugs, and working on frontend API-related data handling. Another developer handled the API integration work.",
    technologies: ["Flutter", "REST APIs"],
    features: [
      "Employee login",
      "Sales updates",
      "Sales history",
      "Employee score tracking",
      "Dashboard and performance summaries",
    ],
    challenges: [
      {
        title: "API-related data handling",
        description:
          "Working on the Flutter frontend where screens depend on data supplied by backend APIs.",
      },
      {
        title: "UI responsiveness",
        description:
          "Fixing interface bugs and improving layouts so the app screens display correctly.",
      },
    ],
    images: [
      {
        src: "/projects/cipla-app-1.png",
        alt: "Cipla employee app illustrative screen",
        caption: "Employee app — replace with an approved screenshot",
      },
      {
        src: "/projects/cipla-app-2.png",
        alt: "Cipla employee performance screen",
        caption: "Performance tracking — replace with an approved screenshot",
      },
            {
        src: "/projects/cipla-app-3.png",
        alt: "Cipla employee performance screen",
        caption: "Performance tracking — replace with an approved screenshot",
      },
    ],
    links: [],
  },
];

type Props = {
  projectId: ProjectId | null;
  onClose: () => void;
};

export default function ProjectDetails({
  projectId,
  onClose,
}: Props) {
  const project = projects.find((item) => item.id === projectId);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          data-lenis-prevent
          className="fixed inset-0 z-[100] h-[100dvh] overflow-y-auto overscroll-y-contain bg-[#090909] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project details`}
        >
          <div className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 lg:px-12">
            <header className="sticky top-0 z-20 -mx-5 flex items-center justify-between border-b border-white/10 bg-[#090909]/90 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
              <Link
                href="/"
                onClick={onClose}
                className="text-sm text-white/60 transition hover:text-white"
              >
                DEEP SONI
              </Link>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
              >
                ← Back to projects
              </button>
            </header>

            <section className="pb-12 pt-14 sm:pb-16 sm:pt-20">
              <p className="mb-5 text-xs tracking-[0.22em] text-white/45">
                {project.number} / 04 · {project.category}
              </p>

              <h1 className="max-w-4xl text-4xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
                {project.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>

            <section className="border-t border-white/10 py-10 sm:py-14">
              <SectionHeading>Project overview</SectionHeading>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
                {project.overview}
              </p>

              <h3 className="mt-9 text-sm font-medium uppercase tracking-wider text-white/40">
                My contribution
              </h3>
              <p className="mt-3 max-w-3xl leading-8 text-white/65">
                {project.role}
              </p>
            </section>

            <section className="border-t border-white/10 py-10 sm:py-14">
              <SectionHeading>Project visuals</SectionHeading>
              <p className="mt-3 text-sm leading-6 text-white/45">
                Screenshots and visual examples from the project.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                {project.images.map((image) => (
                  <figure key={image.src} className="min-w-0">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#141414]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-white/50">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section className="border-t border-white/10 py-10 sm:py-14">
              <SectionHeading>Key features</SectionHeading>
              <div className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex gap-4 border-b border-white/10 pb-4"
                  >
                    <span className="pt-0.5 text-xs text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-6 text-white/80">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-white/10 py-10 sm:py-14">
              <SectionHeading>Technical challenges</SectionHeading>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {project.challenges.map((challenge, index) => (
                  <article
                    key={challenge.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7"
                  >
                    <p className="text-xs text-white/35">
                      CHALLENGE {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 text-lg font-medium">
                      {challenge.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {challenge.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {project.links.length > 0 && (
              <section className="border-t border-white/10 py-10 sm:py-14">
                <SectionHeading>Explore the code</SectionHeading>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/80"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </section>
            )}

            <footer className="border-t border-white/10 py-8 text-sm text-white/35">
              Deep Soni · Project case study
            </footer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
      {children}
    </h2>
  );
}
