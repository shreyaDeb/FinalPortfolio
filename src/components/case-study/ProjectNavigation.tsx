"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

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
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="!mt-24 !mb-24"
      aria-label="Project navigation"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 !gap-6">
        {/* Previous */}
        {previousProject ? (
          <Link
            href={`/work/${previousProject.slug}`}
            className="group !block"
          >
            <div className="relative !aspect-[16/10] !overflow-hidden !rounded-2xl !border !border-border !bg-muted">
              {previousProject.image ? (
                <Image
                  src={previousProject.image}
                  alt={`${previousProject.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="!object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">
                    Preview unavailable
                  </span>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />

              {/* Arrow */}
              <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </div>
            </div>

            <div className="!mt-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                  Previous Project
                </span>
              </div>

              <h3 className="!mt-2 text-2xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
                {previousProject.title}
              </h3>
            </div>
          </Link>
        ) : (
          <div className="opacity-40">
            <div className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-dashed border-border">
              <span className="text-sm text-muted-foreground">
                No previous project
              </span>
            </div>

            <div className="!mt-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                Previous Project
              </span>
            </div>
          </div>
        )}

        {/* Next */}
        {nextProject ? (
          <Link
            href={`/work/${nextProject.slug}`}
            className="group !block md:!text-right"
          >
            <div className="relative !aspect-[16/10] !overflow-hidden !rounded-2xl !border !border-border !bg-muted">
              {nextProject.image ? (
                <Image
                  src={nextProject.image}
                  alt={`${nextProject.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="!object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">
                    Preview unavailable
                  </span>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />

              {/* Arrow */}
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>

            <div className="!mt-5">
              <div className="flex items-center justify-between md:!justify-end md:!gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                  Next Project
                </span>
              </div>

              <h3 className="!mt-2 text-2xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
                {nextProject.title}
              </h3>
            </div>
          </Link>
        ) : (
          <div className="opacity-40 md:!text-right">
            <div className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-dashed border-border">
              <span className="text-sm text-muted-foreground">
                No next project
              </span>
            </div>

            <div className="!mt-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                Next Project
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Back to Work */}
      <div className="!mt-12 !text-center">
        <Link
          href="/work"
          className="group inline-flex items-center !gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>

          <span>Back to all work</span>
        </Link>
      </div>
    </motion.nav>
  );
}