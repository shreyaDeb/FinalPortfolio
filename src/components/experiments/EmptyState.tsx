"use client";

import { motion, useReducedMotion } from "framer-motion";

interface EmptyStateProps {
  message?: string;
}

export function EmptyState({ message = "More experiments are taking shape." }: EmptyStateProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex flex-col items-center justify-center py-24 lg:py-32"
    >
      {/* Animated geometric composition */}
      <div className="relative mb-12" aria-hidden="true">
        <GeometricComposition shouldReduceMotion={shouldReduceMotion} />
      </div>

      {/* Message */}
      <motion.p
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-lg md:text-xl text-muted-foreground text-center max-w-md leading-relaxed"
      >
        {message}
      </motion.p>

      {/* Subtle hint */}
      <motion.p
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={shouldReduceMotion ? {} : { opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-4 text-sm text-muted-foreground/60 text-center"
      >
        Check back soon for new explorations.
      </motion.p>
    </motion.div>
  );
}

/* ─── Geometric composition for empty state ─── */
function GeometricComposition({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 h-32 md:w-40 md:h-40"
    >
      {/* Outer ring */}
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="var(--border)"
        strokeWidth="1"
        initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                pathLength: 1,
                opacity: 0.5,
                transition: { duration: 1.5, ease: "easeInOut" },
              }
        }
      />

      {/* Middle ring */}
      <motion.circle
        cx="100"
        cy="100"
        r="55"
        stroke="var(--muted-foreground)"
        strokeWidth="0.5"
        strokeDasharray="6 8"
        initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                pathLength: 1,
                opacity: 0.3,
                transition: { duration: 1.8, ease: "easeInOut", delay: 0.2 },
              }
        }
      />

      {/* Inner ring */}
      <motion.circle
        cx="100"
        cy="100"
        r="30"
        stroke="var(--accent)"
        strokeWidth="1"
        initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                pathLength: 1,
                opacity: 0.4,
                transition: { duration: 1.2, ease: "easeInOut", delay: 0.4 },
              }
        }
      />

      {/* Center dot */}
      <motion.circle
        cx="100"
        cy="100"
        r="4"
        fill="var(--accent)"
        initial={shouldReduceMotion ? {} : { scale: 0, opacity: 0 }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: 1,
                opacity: 0.6,
                transition: { duration: 0.5, delay: 0.8, ease: "easeOut" },
              }
        }
      />

      {/* Orbiting dots */}
      {!shouldReduceMotion &&
        [0, 120, 240].map((angle, i) => (
          <motion.circle
            key={i}
            cx="100"
            cy="100"
            r="3"
            fill="var(--muted-foreground)"
            opacity="0.4"
            animate={{
              cx: 100 + 65 * Math.cos((angle * Math.PI) / 180),
              cy: 100 + 65 * Math.sin((angle * Math.PI) / 180),
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
    </svg>
  );
}
