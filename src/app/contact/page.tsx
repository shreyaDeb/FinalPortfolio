"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContentContainer } from "@/components/layout";

/* ─── Animation variants ─── */
const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

/* ─── Contact options data ─── */
const contactOptions = [
  {
    label: "EMAIL",
    description: "The most direct way to reach me. I read every message.",
    href: "mailto:hello@shreyadeb.com",
    external: false,
  },
  {
    label: "LINKEDIN",
    description: "Professional updates and networking.",
    href: "https://linkedin.com/in/shreyadeb",
    external: true,
  },
  {
    label: "GITHUB",
    description: "Open source work and side projects.",
    href: "https://github.com/shreyadeb",
    external: true,
  },
];

/* ─── Subtle animated visual ─── */
function ContactVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
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

        {/* Middle ring — dashed, rotating */}
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
                  rotate: 360,
                }
          }
          style={{ transformOrigin: "200px 200px" }}
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

export default function ContactPage() {
  return (
    <ContentContainer className="py-24">
      {/* ─── HERO ─── */}
      <motion.div
        className="mb-20 lg:mb-28"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div variants={itemFadeUp} className="flex items-center gap-4 mb-8">
          <span className="w-6 h-px bg-foreground/30" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Contact
          </span>
        </motion.div>

        <motion.h1
          variants={itemFadeUp}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.08] mb-6"
        >
          Let&apos;s build something.
        </motion.h1>

        <motion.p
          variants={itemFadeUp}
          className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
        >
          Have a product idea, interesting problem, or opportunity? I&apos;d
          love to hear about it.
        </motion.p>
      </motion.div>

      {/* ─── CONTENT GRID ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Contact options */}
        <motion.div
          className="lg:col-span-7 space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
        >
          {contactOptions.map((option) => (
            <motion.div key={option.label} variants={itemFadeUp}>
              <a
                href={option.href}
                target={option.external ? "_blank" : undefined}
                rel={option.external ? "noopener noreferrer" : undefined}
                className="group block border-t border-border py-8 first:border-t-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground block mb-2">
                      {option.label}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                      {option.description}
                    </p>
                  </div>
                  <span className="flex-shrink-0 mt-1 text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 15L15 5M15 5H8M15 5V12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual + email highlight */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-center lg:items-start gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
        >
          {/* Visual element */}
          <motion.div variants={itemFadeUp} className="flex justify-center lg:justify-start">
            <ContactVisual />
          </motion.div>

          {/* Email highlight */}
          <motion.div variants={itemFadeUp} className="text-center lg:text-left">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground block mb-3">
              Or email directly
            </span>
            <a
              href="mailto:hello@shreyadeb.com"
              className="group inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-foreground hover:text-accent transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <span className="border-b border-foreground/20 group-hover:border-accent transition-colors duration-300 pb-0.5">
                hello@shreyadeb.com
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <path
                  d="M4 12L12 4M12 4H7M12 4V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              I typically respond within 24 hours.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </ContentContainer>
  );
}
