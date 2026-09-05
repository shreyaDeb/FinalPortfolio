"use client";

import { motion } from "framer-motion";
import { Technology } from "@/data/projects";

interface ProjectTechnologyProps {
  technologies?: Technology[];
}

export function ProjectTechnology({ technologies }: ProjectTechnologyProps) {
  if (!technologies || technologies.length === 0) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="!mb-24"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground !mb-6">
          Technology
        </h2>
        <div className="rounded-xl border border-dashed border-border p-8 text-center">
          <p className="text-muted-foreground text-sm">
            Technology stack coming soon.
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
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground !mb-8">
        Technology
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div key={index}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground !mb-3">
              {tech.category}
            </h3>
            <ul className="space-y-2">
              {tech.items.map((item) => (
                <li
                  key={item}
                  className="text-foreground font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
