"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ContentContainer } from "@/components/layout";
import { Reveal } from "@/components/motion";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shreyadeb",
  },
  {
    label: "GitHub",
    href: "https://github.com/shreyadeb",
  },
];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function ContactPage() {
  return (
    <ContentContainer className="!py-16 sm:!py-20 lg:!py-28">
      {/* ─────────────────────────────────────────
          PAGE HEADER
      ───────────────────────────────────────── */}
      <Reveal>
        <div className="flex items-center justify-center !gap-4">
          <span
            className="h-px w-6 bg-foreground/25"
            aria-hidden="true"
          />

          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Contact
          </span>

          <span
            className="h-px w-6 bg-foreground/25"
            aria-hidden="true"
          />
        </div>
      </Reveal>

      {/* ─────────────────────────────────────────
          MAIN CONTENT
      ───────────────────────────────────────── */}
      <motion.main
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-80px",
        }}
        variants={stagger}
        className="!mx-auto !mt-16 max-w-4xl text-center sm:!mt-20 lg:!mt-24"
      >
        {/* Heading */}
        <motion.div variants={fadeUp}>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Let&apos;s build something
            <br />
            <span className="text-accent">together.</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div variants={fadeUp} className="!mx-auto !mt-8 max-w-2xl">
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Have an idea, interesting problem, or opportunity?
            <br className="hidden sm:block" />
            I&apos;d love to hear about it.
          </p>
        </motion.div>

        {/* ─────────────────────────────────────
            EMAIL CTA
        ───────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="!mx-auto !mt-14 max-w-2xl sm:!mt-16"
        >
          <span className="!mb-4 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/55">
            Get in touch
          </span>

          <a
            href="mailto:shreya.deb@icloud.com"
            className="group relative !mx-auto flex items-center justify-between gap-5 border-y border-border px-1 py-6 text-left transition-colors duration-500 hover:border-foreground/30 sm:px-3 sm:py-7"
          >
            {/* Left side */}
            <div className="min-w-0 flex-1">
              <span className="block break-all text-xl font-medium tracking-tight text-foreground transition-transform duration-500 ease-out group-hover:translate-x-1 sm:break-normal sm:text-2xl md:text-3xl">
                shreya.deb@icloud.com
              </span>

              {/* Animated underline */}
              {/* <span className="relative !mt-2 block h-px w-full overflow-hidden">
                <span className="absolute inset-y-0 left-0 w-full bg-border" />

                <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </span> */}
            </div>

            {/* Arrow circle */}
            <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-border text-foreground transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-background sm:h-12 sm:w-12">
              <span className="absolute inset-0 scale-0 rounded-full bg-accent transition-transform duration-500 ease-out group-hover:scale-100" />

              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="relative z-10 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M4 13L13 4M13 4H7M13 4V10"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <p className="!mt-4 text-xs text-muted-foreground/60">
            I typically respond within 24 hours.
          </p>
        </motion.div>

        {/* ─────────────────────────────────────
            SOCIAL LINKS
        ───────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="!mt-16 sm:!mt-20"
        >
          <div className="!mx-auto flex max-w-md items-center justify-center !gap-5">
            {socialLinks.map((link, index) => (
              <div key={link.label} className="flex items-center !gap-5">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center !gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <span className="relative">
                    {link.label}

                    <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
                  </span>

                  <span className="text-xs text-muted-foreground/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                    ↗
                  </span>
                </a>

                {index < socialLinks.length - 1 && (
                  <span
                    className="h-3 w-px bg-border"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.main>

      {/* ─────────────────────────────────────────
          FOOTER
      ───────────────────────────────────────── */}
      <motion.footer
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="!mx-auto !mt-24 max-w-4xl border-t border-border !pt-6 sm:!mt-32"
      >
        <div className="flex flex-col items-center justify-between !gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground/60">
            Thanks for stopping by.
          </p>

          <Link
            href="/work"
            className="group inline-flex items-center !gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <span>Explore my work</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </motion.footer>
    </ContentContainer>
  );
}