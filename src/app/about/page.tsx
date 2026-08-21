"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ContentContainer } from "@/components/layout";
import { experience, education, personalInterests } from "@/data/about";
import { projects } from "@/data/projects";
import { useState } from "react";
import { Reveal } from "@/components/motion";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

/* ─── Extract unique technology categories from project data ─── */
function getTechnologies() {
  const categoryMap = new Map<string, Set<string>>();
  projects.forEach((project) => {
    project.technologies?.forEach((tech) => {
      const items = tech.items;
      const category = tech.category;

      if (!categoryMap.has(category)) {
        categoryMap.set(category, new Set());
      }
      items.forEach((item) => categoryMap.get(category)!.add(item));
    });
  });

  return Array.from(categoryMap.entries()).map(([category, items]) => ({
    category,
    items: Array.from(items),
  }));
}

const technologies = getTechnologies();

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);
  const handleMouseEnter = (id: string) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(null);
  };

  const handleTap = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <ContentContainer className="py-15 pt-3 pb-16 lg:pb-24">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[50vh] flex items-center pt-3 pb-16 lg:pb-24 overflow-hidden">
        <Reveal>
          <div className="max-w-3xl">
            {/* <motion.div variants={itemFadeUp} className="flex items-center gap-4 mb-8"> */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-6 h-px bg-foreground/30" aria-hidden="true" />
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
                About
              </p>
            </div>
            {/* </motion.div> */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
              Software engineer, product builder, and someone who likes making things.
            </h1>
          </div>
        </Reveal>
      </section>

      {/* ─── INTRODUCTION ─── */}
      <motion.section
        className="mb-24 lg:mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <div className="max-w-2xl space-y-6">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I am a software engineer who enjoys building full-stack products. I care
            about the relationship between engineering and user experience — how
            technical decisions shape the way people interact with software.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I enjoy learning new technologies and taking ideas from concept to
            working product. For me, the most satisfying part of building software
            is seeing something go from a rough idea to something people can
            actually use.
          </p>
        </div>
      </motion.section>

      {/* ─── EDUCATION ─── */}
      <motion.section
        className="!py-15 mb-24 lg:mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <div className="flex items-center gap-4">
          <span className="w-6 h-px bg-foreground/30" aria-hidden="true" />
          <h2 className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
            Education
          </h2>
        </div>

        <div className="max-w-2xl">
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {education.institution}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {education.degree} in {education.field}
              </p>
            </div>
            <span className="text-sm text-muted-foreground/70 tabular-nums md:text-right">
              {education.date}
            </span>
          </div>
        </div>
      </motion.section>

      {/* ─── EXPERIENCE ─── */}
      <motion.section
        className=" !py-15 mb-24 lg:mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="w-6 h-px bg-foreground/30" aria-hidden="true" />
          <h2 className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
            Experience
          </h2>
        </div>

        <div className="space-y-0">
          {experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${index}`}
              className="group py-8 border-b border-border/60 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8">
                {/* Company & Role */}
                <div className="md:col-span-5">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {item.company}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.role}
                  </p>
                </div>

                {/* Date */}
                <div className="md:col-span-2 flex md:justify-end">
                  <span className="text-sm text-muted-foreground/70 tabular-nums">
                    {item.date}
                  </span>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── TECHNOLOGY ─── */}
      <motion.section
        className="!py-15 mb-24 lg:mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="w-6 h-px bg-foreground/30" aria-hidden="true" />
          <h2 className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
            Tools I Work With
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {technologies.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <h3 className="!py-5 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── PERSONAL SIDE ─── */}
      <motion.section
        className="mb-24 lg:mb-32"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="w-6 h-px bg-foreground/30" aria-hidden="true" />
          <h2 className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
            Outside the Code
          </h2>
        </div>

        <div className="!py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-24">
          {personalInterests.map((interest, index) => {
            const isActive = activeId === interest.id;
            // const icon = interestIcons[interest.id];

            return (
              <motion.button
                key={interest.id}
                className="group relative text-left"
                onMouseEnter={() => handleMouseEnter(interest.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleTap(interest.id)}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
              >
                <div
                  className={`
                          relative h-32 md:h-40 lg:h-44 rounded-xl border !p-5 md:!p-6
                          transition-colors duration-500 ease-out
                          ${isActive
                      ? "bg-accent/5 border-accent/20"
                      : "bg-card border-border hover:border-foreground/10"
                    }
                        `}
                >
                  {/* Decorative corner accent */}
                  <div
                    className={`
                            absolute top-3 right-3 w-1.5 h-1.5 rounded-full transition-all duration-500 ease-out
                            ${isActive ? "bg-accent scale-100 opacity-100" : "bg-border scale-75 opacity-0"}
                          `}
                    aria-hidden="true"
                  />

                  {/* Number */}
                  <span
                    className={`
                            text-[10px] font-medium tracking-[0.2em] transition-colors duration-500 ease-out
                            ${isActive ? "text-accent" : "text-muted-foreground/50"}
                          `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  {/* <div
                    className={`
                            mt-3 mb-3 transition-colors duration-500 ease-out
                            ${isActive ? "text-accent" : "text-muted-foreground"}
                          `}
                  >
                    {icon}
                  </div> */}

                  {/* Label */}
                  <span
                    className={`
                            text-xs md:text-sm font-medium tracking-wide transition-all duration-500 ease-out block
                            ${isActive ? "text-foreground" : "text-muted-foreground"}
                          `}
                  >
                    {interest.label}
                  </span>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>

                  {/* Subtle background shape on active */}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-accent/5 blur-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="relative z-10">
          <div className="max-w-3xl">
            {/* Headline */}
            <motion.h2
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.08] mb-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              HAVE A PRODUCT{" "}
              <span className="text-accent">WORTH BUILDING?</span>
            </motion.h2>

            {/* Supporting text */}
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10"
              variants={fadeUp} initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              Let's talk about what you're building.
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="!mb-5"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent !px-8 !py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                GET IN TOUCH
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </motion.div>

            {/* Secondary links */}
            {/* <motion.div
              className="flex flex-wrap items-center gap-6 !pt-5 !pb-5 border-t border-border"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <Link
                href="https://linkedin.com/in/shreyadeb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                LINKEDIN
              </Link>
              <Link
                href="https://github.com/shreyadeb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                GITHUB
              </Link>
              <Link
                href="mailto:shreya.deb@icloud.com"
                className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                EMAIL
              </Link>
              <Link
                href="/resume"
                rel="noopener noreferrer"
                className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                RESUME
              </Link>
            </motion.div> */}
          </div>
        </div>
      </section>
    </ContentContainer >
  );
}

/* ─── Personal Interest Card ─── */
function PersonalInterestCard({
  interest,
  index,
  shouldReduceMotion,
}: {
  interest: (typeof personalInterests)[0];
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      className="group relative h-40 md:h-44 rounded-xl border border-border bg-card p-5 md:p-6 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
            y: -4,
            transition: { type: "spring", stiffness: 400, damping: 25 },
          }
      }
    >
      {/* Decorative floating element */}
      <motion.div
        className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-accent/5 blur-xl"
        animate={
          shouldReduceMotion
            ? {}
            : {
              y: [0, -8, 0],
              transition: {
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
        }
        aria-hidden="true"
      />

      {/* Corner accent on hover */}
      <motion.div
        className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent group-hover:scale-100 transition-all duration-500 scale-75 opacity-0 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Number */}
      <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground/50 group-hover:text-accent transition-colors duration-500">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Label */}
      <h3 className="text-sm md:text-base font-medium tracking-wide text-foreground mt-4 mb-2 group-hover:text-accent transition-colors duration-300">
        {interest.label}
      </h3>

      {/* Description */}
      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
        {interest.description}
      </p>
    </motion.div>
  );
}
