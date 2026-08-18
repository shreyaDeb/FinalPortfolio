"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContentContainer } from "@/components/layout";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { certifications } from "@/data/certifications";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
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

export default function CertificationsPage() {
  const shouldReduceMotion = useReducedMotion();

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
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
            Certifications
          </p>
        </motion.div>

        <motion.h1
          variants={itemFadeUp}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] max-w-4xl"
        >
          CERTIFICATIONS
        </motion.h1>

        <motion.p
          variants={itemFadeUp}
          className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
        >
          A collection of certifications and credentials I've earned along the way.
        </motion.p>
      </motion.div>

      {/* ─── CERTIFICATIONS GRID ─── */}
      <motion.section
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.name}
              certification={certification}
              index={index}
            />
          ))}
        </div>
      </motion.section>
    </ContentContainer>
  );
}
