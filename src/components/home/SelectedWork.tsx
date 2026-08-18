"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion";
import { BrowserVisual } from "@/components/shared/BrowserVisual";
import { projectCategoryLabels } from "@/lib/categories";

const categoryLabels: Record<string, string> = {
  product: "Product",
  experiment: "Experiment",
  "case-study": "Case Study",
};

export function SelectedWork() {
  const allProjects = projects;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 lg:py-32">
      {/* Section introduction */}
      <Reveal>
        <div className="mb-20 lg:mb-28">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-6 h-px bg-foreground/30" aria-hidden="true" />
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
              Selected Work
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.15]">
            Things I've built, shipped, and learned from.
          </h2>
        </div>
      </Reveal>

      {/* Projects */}
      <div className="space-y-24 lg:space-y-40">
        {allProjects.filter((project) => project.show === 1)
          .map((project, index) => {
            const isEven = index % 2 === 1;
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
                        className={`lg:col-span-7 ${isReversed
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
                                className="inline-flex items-center rounded-full border border-border text-xs font-medium text-muted-foreground !px-4 !py-1.5"
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
      <div className="flex justify-center lg:justify-start">
        <Link
          href="/work"
          className="group inline-flex items-center gap-3 text-sm font-medium text-foreground hover:text-accent transition-colors duration-300 !py-3.5 "
        >
          <span className="tracking-wide">MORE PROJECTS</span>
          <motion.span
            className="inline-block"
            whileHover={shouldReduceMotion ? {} : { x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            &rarr;
          </motion.span>
        </Link>
      </div>
    </section>
  );
}
