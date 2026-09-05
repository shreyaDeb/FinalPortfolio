"use client";

import { motion } from "framer-motion";

interface ProjectOverviewProps {
  overview?: string;
}

export function ProjectOverview({ overview }: ProjectOverviewProps) {
  if (!overview) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="!mb-24"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground !mb-6">
          Overview
        </h2>
        <div className="rounded-xl border border-dashed border-border p-8 text-center">
          <p className="text-muted-foreground text-sm">
            Project overview coming soon.
          </p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="!mb-24"
    >
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground !mb-6">
        Overview
      </h2>
      <div className="max-w-3xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          {overview}
        </p>
      </div>
    </motion.section>
  );
}
