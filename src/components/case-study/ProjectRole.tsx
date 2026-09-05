"use client";

import { motion } from "framer-motion";

interface ProjectRoleProps {
  role?: string[];
}

export function ProjectRole({ role }: ProjectRoleProps) {
  if (!role || role.length === 0) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="!mb-24"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground !mb-6">
          My Role
        </h2>
        <div className="rounded-xl border border-dashed border-border p-8 text-center">
          <p className="text-muted-foreground text-sm">
            Role details coming soon.
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
        My Role
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl !mb-8">
        Here&apos;s what I personally worked on for this project:
      </p>
      <ul className="max-w-3xl space-y-3">
        {role.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/60 flex-shrink-0" />
            <span className="text-foreground leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
