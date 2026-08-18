"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Experiment } from "@/data/experiments";
import { BrowserVisual } from "@/components/shared/BrowserVisual";
import { experimentCategoryLabels } from "@/lib/categories";

interface ExperimentCardProps {
  experiment: Experiment;
  index: number;
}

const statusColors: Record<string, string> = {
  exploring: "text-muted-foreground",
  "in-progress": "text-accent",
  prototype: "text-accent/80",
  complete: "text-foreground/70",
};

export function ExperimentCard({ experiment, index }: ExperimentCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Category & Index */}
        <div
          className={`lg:col-span-1 ${
            isEven ? "lg:col-start-1" : "lg:col-start-12"
          }`}
        >
          <div className="flex lg:flex-col items-baseline gap-3 lg:gap-1">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/60">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-xs font-medium tracking-[0.1em] uppercase text-accent/80">
              {experimentCategoryLabels[experiment.category] || experiment.category}
            </span>
          </div>
        </div>

        {/* Visual */}
        <motion.div
          className={`lg:col-span-6 ${
            isEven ? "lg:col-start-2" : "lg:col-start-1"
          }`}
          whileHover={shouldReduceMotion ? {} : { scale: 1.01, y: -3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative">
            {/* Subtle accent border on hover */}
            <div className="absolute -inset-px rounded-xl border border-accent/0 group-hover:border-accent/15 transition-colors duration-500 pointer-events-none" />
            <BrowserVisual
              image={experiment.image}
              alt={experiment.title || "Experiment preview"}
              title={experiment.title}
              index={index}
            />
          </div>
        </motion.div>

        {/* Information */}
        <motion.div
          className={`lg:col-span-4 ${
            isEven ? "lg:col-start-9" : "lg:col-start-8"
          }`}
          whileHover={shouldReduceMotion ? {} : { x: isEven ? 3 : -3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
              {experiment.title}
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {experiment.description}
            </p>

            {/* Technologies */}
            {experiment.technologies && experiment.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {experiment.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Status & Date */}
            <div className="flex items-center gap-4 text-sm">
              {experiment.status && (
                <span className={`text-xs font-medium tracking-wide uppercase ${statusColors[experiment.status] || "text-muted-foreground"}`}>
                  {experiment.status.replace("-", " ")}
                </span>
              )}
              {experiment.date && (
                <span className="text-xs text-muted-foreground/60">
                  {experiment.date}
                </span>
              )}
            </div>

            {/* Links */}
            {experiment.links && experiment.links.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-2">
                {experiment.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
                  >
                    <span>{link.label}</span>
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      &rarr;
                    </motion.span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
