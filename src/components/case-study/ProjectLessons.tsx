"use client";

import { motion } from "framer-motion";

interface ProjectLessonsProps {
  lessons?: string[];
}

export function ProjectLessons({ lessons }: ProjectLessonsProps) {
  if (!lessons || lessons.length === 0) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-24"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
          What I Learned
        </h2>
        <div className="rounded-xl border border-dashed border-border p-8 text-center">
          <p className="text-muted-foreground text-sm">
            Lessons and takeaways coming soon.
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
      className="mb-24"
    >
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
        What I Learned
      </h2>
      <ul className="max-w-3xl space-y-4">
        {lessons.map((lesson, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/60 flex-shrink-0" />
            <span className="text-foreground leading-relaxed">{lesson}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
