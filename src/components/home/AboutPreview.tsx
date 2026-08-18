"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { personalInterests } from "@/data/about";

const interestIcons: Record<string, React.ReactNode> = {
  photography: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  ),
  reading: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </svg>
  ),
  "digital-art": (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  nature: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
      <path d="M11 20A7 7 0 0 1 9.8 6.6C11.7 4.8 14.3 4.8 16.2 6.6A7 7 0 0 1 11 20Z" />
      <path d="M11 20v-9" />
      <path d="M11 11a7 7 0 0 1 7 7" />
    </svg>
  ),
  crochet: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 18a6 6 0 0 0 6-6c0-3.314-2.686-6-6-6" />
      <path d="M12 18a6 6 0 0 1-6-6c0-3.314 2.686-6 6-6" />
    </svg>
  ),
  anime: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

export function AboutPreview() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

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
    <section className="py-24 lg:py-32 pt-3 pb-3">
      {/* Header */}
      <div className="mb-16 lg:mb-24">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-6 h-px bg-foreground/30" aria-hidden="true" />
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
            About
          </p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.1] mb-6">
          A LITTLE MORE ABOUT ME
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
          Software engineer. Product builder. Constantly curious.
        </p>
      </div>

      {/* Interest cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-24">
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

      {/* CTA */}
      <div className="flex justify-center lg:justify-start">
        <Link
          href="/about"
          className="group inline-flex items-center gap-3 text-sm font-medium text-foreground hover:text-accent transition-colors duration-300 !py-3.5 "
        >
          <span className="tracking-wide">MORE ABOUT ME</span>
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
