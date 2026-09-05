"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";
import { projectCategoryLabels } from "@/lib/categories";

interface ProjectIntroProps {
  project: Project;
}

export function ProjectIntro({ project }: ProjectIntroProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="!mb-16"
    >
      {/* Project Number & Category */}
      <div className="flex items-center gap-4 !mb-6">
        {project.number && (
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/60">
            {String(project.number).padStart(2, "0")}
          </span>
        )}
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent/80">
          {projectCategoryLabels[project.category] || project.category}
        </span>
      </div>

      {/* Title & Subtitle */}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] !mb-4">
        {project.title}
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl !mb-6">
        {project.subtitle}
      </p>

      {/* Short Description */}
      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl !mb-8">
        {project.description}
      </p>

      {/* Technology Metadata */}
      <div className="flex flex-wrap gap-2 !mb-8">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-border !px-3 !py-1 text-xs font-medium text-muted-foreground !px-4 !py-1.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Primary Links */}
      {(project.link || project.github) && (
        <div className="flex flex-wrap gap-4">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-300"
            >
              <span>Live Project</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-300"
            >
              <span>Source Code</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
}
