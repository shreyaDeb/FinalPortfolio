"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ExperimentsHeroProps {
  label?: string;
  heading: string;
  copy: string;
}

export function ExperimentsHero({ label = "EXPERIMENTS", heading, copy }: ExperimentsHeroProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-32"
      aria-labelledby="experiments-heading"
    >
      {/* Animated background lines */}
      <div className="absolute top-0 left-1/2 w-screen -translate-x-1/2 h-full pointer-events-none" aria-hidden="true">
        <AnimatedLines shouldReduceMotion={shouldReduceMotion} />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          {/* Label */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6"
          >
            {label}
          </motion.p>

          {/* Heading */}
          <motion.h1
            id="experiments-heading"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6"
          >
            {heading}
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            {copy}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Animated decorative lines ─── */
function AnimatedLines({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Horizontal accent lines */}
      <motion.line
        x1="0"
        y1="120"
        x2="1440"
        y2="120"
        stroke="var(--border)"
        strokeWidth="1"
        initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                pathLength: 1,
                opacity: 0.4,
                transition: { duration: 2, ease: "easeInOut", delay: 0.5 },
              }
        }
      />
      <motion.line
        x1="0"
        y1="480"
        x2="1440"
        y2="480"
        stroke="var(--border)"
        strokeWidth="1"
        initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                pathLength: 1,
                opacity: 0.3,
                transition: { duration: 2, ease: "easeInOut", delay: 0.7 },
              }
        }
      />

      {/* Vertical accent lines */}
      <motion.line
        x1="200"
        y1="0"
        x2="200"
        y2="600"
        stroke="var(--border)"
        strokeWidth="1"
        initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                pathLength: 1,
                opacity: 0.2,
                transition: { duration: 1.8, ease: "easeInOut", delay: 0.6 },
              }
        }
      />
      <motion.line
        x1="1240"
        y1="0"
        x2="1240"
        y2="600"
        stroke="var(--border)"
        strokeWidth="1"
        initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                pathLength: 1,
                opacity: 0.2,
                transition: { duration: 1.8, ease: "easeInOut", delay: 0.8 },
              }
        }
      />

      {/* Diagonal accent */}
      <motion.line
        x1="0"
        y1="600"
        x2="600"
        y2="0"
        stroke="var(--accent)"
        strokeWidth="0.5"
        initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                pathLength: 1,
                opacity: 0.08,
                transition: { duration: 2.5, ease: "easeInOut", delay: 1 },
              }
        }
      />
    </svg>
  );
}
