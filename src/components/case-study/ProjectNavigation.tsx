"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";
import { projectCategoryLabels } from "@/lib/categories";

interface ProjectNavigationProps {
  currentProject: Project;
  previousProject?: Project;
  nextProject?: Project;
}

export function ProjectNavigation({
  previousProject,
  nextProject,
}: ProjectNavigationProps) {

  return (
    <motion.nav
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-24"
      aria-label="Project navigation"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Previous Project */}
        <div>
          {previousProject ? (
            <Link
              href={`/work/${previousProject.slug}`}
              className="group block rounded-xl border border-border p-6 hover:border-accent/20 transition-colors duration-300"
            >
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/60 mb-2 block">
                Previous Project
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                <span aria-hidden="true">&larr;</span>
                <span>{previousProject.title}</span>
              </span>
              <p className="text-xs text-muted-foreground mt-2">
                {projectCategoryLabels[previousProject.category] || previousProject.category}
              </p>
            </Link>
          ) : (
            <div className="rounded-xl border border-dashed border-border p-6 opacity-50">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/60 mb-2 block">
                Previous Project
              </span>
              <span className="text-sm text-muted-foreground">No previous project</span>
            </div>
          )}
        </div>

        {/* Next Project */}
        <div>
          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group block rounded-xl border border-border p-6 hover:border-accent/20 transition-colors duration-300 text-right"
            >
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/60 mb-2 block">
                Next Project
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                <span>{nextProject.title}</span>
                <span aria-hidden="true">&rarr;</span>
              </span>
              <p className="text-xs text-muted-foreground mt-2">
                {projectCategoryLabels[nextProject.category] || nextProject.category}
              </p>
            </Link>
          ) : (
            <div className="rounded-xl border border-dashed border-border p-6 opacity-50 text-right">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/60 mb-2 block">
                Next Project
              </span>
              <span className="text-sm text-muted-foreground">No next project</span>
            </div>
          )}
        </div>
      </div>

      {/* Back to Work */}
      <div className="mt-8 text-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <span aria-hidden="true">&larr;</span>
          <span>Back to all work</span>
        </Link>
      </div>
    </motion.nav>
  );
}
