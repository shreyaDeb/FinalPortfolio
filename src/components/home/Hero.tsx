"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const visualEnter = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pb-16 lg:pb-24 overflow-hidden pt-3 pb-3">
      {/* Background subtle grid */}
      <div
        className="absolute top-0 left-1/2 w-screen -translate-x-1/2 h-full opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-">
          {/* Content column — asymmetric, left-aligned */}
          <motion.div
            className="lg:col-span-7 xl:col-span-6"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Metadata */}
            <motion.div variants={fadeUp} className="mb-6">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Shreya Deb
              </p>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/70 mt-1.5">
                Software Engineer / Product Builder
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.08] mb-8"
            >
              I build digital products{" "}
              <span className="text-accent">from idea to deployment.</span>
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10"
            >
              Full-stack engineer focused on thoughtful interfaces, reliable
              systems, and products people actually want to use.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent !px-6 !py-2 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Explore My Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background !px-6 !py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-secondary hover:border-foreground/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual element column — offset for asymmetry */}
          <motion.div
            className="lg:col-span-5 xl:col-span-6 lg:pt-12 xl:pt-16 flex items-center justify-center lg:justify-end"
            variants={visualEnter}
            initial="hidden"
            animate="visible"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 lg:mt-24 flex justify-center lg:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Subtle geometric visual ─── */
function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="160"
          stroke="var(--border)"
          strokeWidth="1"
          initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? {}
              : { pathLength: 1, opacity: 1, transition: { duration: 1.4, ease: "easeInOut" } }
          }
        />

        {/* Middle ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="120"
          stroke="var(--muted-foreground)"
          strokeWidth="0.5"
          strokeDasharray="8 12"
          initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  pathLength: 1,
                  opacity: 0.4,
                  transition: { duration: 1.6, ease: "easeInOut", delay: 0.2 },
                }
          }
        />

        {/* Inner ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="70"
          stroke="var(--accent)"
          strokeWidth="1.5"
          initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  pathLength: 1,
                  opacity: 0.6,
                  transition: { duration: 1.2, ease: "easeInOut", delay: 0.4 },
                }
          }
        />

        {/* Center dot */}
        <motion.circle
          cx="200"
          cy="200"
          r="3"
          fill="var(--foreground)"
          initial={shouldReduceMotion ? {} : { scale: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? {}
              : { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.8, ease: "easeOut" } }
          }
        />
      </svg>
    </div>
  );
}

/* ─── Scroll indicator ─── */
function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-muted-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <span className="text-[10px] font-medium tracking-[0.25em] uppercase">
        Scroll to explore
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
