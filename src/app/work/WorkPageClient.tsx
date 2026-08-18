"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { Reveal } from "@/components/motion";
import { BrowserVisual } from "@/components/shared/BrowserVisual";
import { projectCategoryLabels } from "@/lib/categories";

interface WorkPageClientProps {
  projects: Project[];
}

export function WorkPageClient({ projects }: WorkPageClientProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-3 pb-16 lg:pb-24 overflow-hidden">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Selected Work
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
              Things I've built, shipped, and learned from.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              A collection of products, platforms, experiments, and projects
              I&apos;ve worked on across full-stack development.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Project List */}
      <section className="pb-24">
        <div className="space-y-24 lg:space-y-40">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isReversed = !isEven;

            const aspectRatios: Array<"4/3" | "16/10" | "3/4" | "1/1"> = [
              "4/3",
              "16/10",
              "4/3",
              "16/10",
              "4/3",
            ];
            const visualAspect = aspectRatios[index % aspectRatios.length];

            return (
              <Reveal key={project.slug} delay={index * 0.05}>
                <article className="group py-16 lg:py-24">
                  <Link
                    href={`/work/${project.slug}`}
                    className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded-xl"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-center">                      {/* Visual */}
                      <motion.div
                        className={`lg:col-span-7 ${
                          isReversed
                            ? "lg:col-start-6 lg:row-start-1 lg:mt-24"
                            : "lg:col-start-1 lg:row-start-1"
                        }`}
                        whileHover={{ scale: 1.01, y: -3 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="relative mb-16 lg:mb-24">
                          <div className="absolute -inset-px rounded-xl border border-accent/0 group-hover:border-accent/15 transition-colors duration-500 pointer-events-none" />
                          <BrowserVisual
                            image={project.image}
                            alt={project.title || "Project preview"}
                            title={project.title}
                            index={index}
                            aspectRatio={visualAspect}
                          />
                        </div>
                      </motion.div>

                      {/* Index + Information (grouped together) */}
                      <motion.div
                        className={`lg:col-span-5 ${isReversed
                          ? "lg:col-start-1 lg:row-start-1"
                          : "lg:col-start-8 lg:row-start-1"
                          }`}
                        whileHover={{ x: isReversed ? 3 : -3 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="flex flex-col gap-4">
                          <div className="flex items-baseline gap-3">
                            <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/60">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-xs font-medium tracking-[0.1em] uppercase text-accent/80">
                              {projectCategoryLabels[project.category] || project.category}
                            </span>
                          </div>

                          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                            {project.title}
                          </h2>

                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground !px-4 !py-1.5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300 pt-2">
                            <span>View Project</span>
                            <motion.span
                              className="inline-block"
                              whileHover={{ x: 4 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              &rarr;
                            </motion.span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
