"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useRef } from "react";

const stages = [
  {
    number: "01",
    name: "DISCOVER",
    description:
      "Understand the problem, define the constraints, and figure out what actually needs to exist.",
  },
  {
    number: "02",
    name: "DESIGN",
    description: "Shape the experience before getting lost in implementation details.",
  },
  {
    number: "03",
    name: "BUILD",
    description: "Turn the idea into a real, maintainable product.",
  },
  {
    number: "04",
    name: "ITERATE",
    description: "Test, refine, debug, and improve.",
  },
  {
    number: "05",
    name: "SHIP",
    description: "Deploy it, monitor it, and learn from what happens next.",
  },
];

export function HowIBuild() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 pt-3 pb-3"
      onMouseLeave={handleMouseLeave}
    >
      {/* Header */}
      <div className="mb-20 lg:mb-28">
        <div className="flex items-center gap-4 mb-6 !mt-6">
          <span className="w-6 h-px bg-foreground/30" aria-hidden="true" />
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
            How I Build
          </p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.1] !py-5">
          From a rough idea to something people can actually use.
        </h2>
      </div>

      {/* Stages */}
      <div className="relative !px-4 !py-1.5">
        {/* Desktop horizontal connecting line */}
        <div
          className="hidden lg:block absolute top-[11px] left-0 right-0 h-px bg-border/60"
          aria-hidden="true"
        >
          <motion.div
            className="h-full bg-foreground/80"
            style={{ transformOrigin: "left center" }}
            initial={false}
            animate={{
              scaleX: activeIndex !== null ? (activeIndex + 1) / stages.length : 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        </div>

        {/* Mobile vertical connecting line */}
        <div
          className="lg:hidden absolute left-[11px] top-0 bottom-0 w-px bg-border/60"
          aria-hidden="true"
        >
          <motion.div
            className="w-full bg-foreground/80"
            style={{ transformOrigin: "top center" }}
            initial={false}
            animate={{
              scaleY: activeIndex !== null ? (activeIndex + 1) / stages.length : 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        </div>

        {/* Stages grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-0">
          {stages.map((stage, index) => (
            <StageItem
              key={stage.name}
              stage={stage}
              index={index}
              isActive={activeIndex === index}
              onHover={() => setActiveIndex(index)}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StageItem({
  stage,
  index,
  isActive,
  onHover,
  onClick,
  shouldReduceMotion,
}: {
  stage: (typeof stages)[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onClick: () => void;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <button
      type="button"
      className={`relative lg:text-center w-full text-left ${index < stages.length - 1 ? "lg:pr-10" : ""}`}
      onMouseEnter={onHover}
      onClick={onClick}
    >
      {/* Number with dot */}
      <div className="flex items-center gap-3 mb-4 lg:justify-center">
        <motion.div
          className="w-2 h-2 rounded-full shrink-0"
          animate={{
            backgroundColor: isActive ? "var(--foreground)" : "var(--border)",
            scale: isActive ? 1.4 : 1,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.35,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
        <motion.span
          className="text-[11px] font-medium tracking-[0.2em]"
          animate={{
            color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
          }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
        >
          {stage.number}
        </motion.span>
      </div>

      {/* Stage name */}
      <motion.h3
        className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4"
        animate={{
          color: isActive ? "var(--foreground)" : "var(--foreground)",
          y: isActive ? -3 : 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {stage.name}
      </motion.h3>

      {/* Description */}
      <motion.div
        className="overflow-hidden lg:mt-1"
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0,
          height: isActive ? "auto" : 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.45,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <motion.p
          className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs lg:max-w-none lg:mx-auto"
          animate={{
            y: isActive ? 0 : 8,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {stage.description}
        </motion.p>
      </motion.div>

      {/* Decorative line under each stage on desktop */}
      <motion.div
        className="hidden lg:block h-px bg-border/40 mt-6 mx-auto"
        animate={{
          scaleX: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{ transformOrigin: "center" }}
      />
    </button>
  );
}
