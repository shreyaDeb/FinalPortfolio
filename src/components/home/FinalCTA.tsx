"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const headlineReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.15,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const ctaAppear = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const linksFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative z-10">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.08] mb-6"
            variants={shouldReduceMotion ? {} : headlineReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            HAVE A PRODUCT{" "}
            <span className="text-accent">WORTH BUILDING?</span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10"
            variants={shouldReduceMotion ? {} : fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            Let's talk about what you're building.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            variants={shouldReduceMotion ? {} : ctaAppear}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              GET IN TOUCH
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </motion.div>

          {/* Secondary links */}
          <motion.div
            className="flex flex-wrap items-center gap-6 pt-8 border-t border-border"
            variants={shouldReduceMotion ? {} : linksFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Link
              href="https://linkedin.com/in/shreyadeb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              LINKEDIN
            </Link>
            <Link
              href="https://github.com/shreyadeb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              GITHUB
            </Link>
            <Link
              href="mailto:shreya.deb@icloud.com"
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              EMAIL
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              RESUME
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}