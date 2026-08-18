"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Certification } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export function CertificationCard({
  certification,
  index,
}: CertificationCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={certification.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -5,
              transition: {
                type: "spring",
                stiffness: 350,
                damping: 22,
              },
            }
      }
      className="group block h-full"
    >
      <div
        className="
          flex h-full flex-col
          overflow-hidden
          rounded-2xl
          border border-border/60
          bg-card
          transition-all duration-300
          group-hover:border-border
          group-hover:shadow-lg
          group-hover:shadow-foreground/[0.04]
        "
      >
        {/* Certificate image */}
        <div
  className="
    w-full
    overflow-hidden
    bg-transparent
  "
>
  {certification.image && (
    <img
      src={certification.image}
      alt={certification.name}
      className="
        block
        h-auto
        w-full
        object-cover
        transition-transform
        duration-500
        ease-out
        group-hover:scale-[1.02]
      "
    />
  )}
</div>

        {/* Information */}
<div
  className="
    flex flex-1 flex-col
    border-t border-border/40
    !px-6 !py-7
    sm:px-7 sm:py-8
  "
>
  {/* Certification name */}
  <h3
    className="
      font-display
      text-[15px] font-semibold
      leading-[1.45]
      text-foreground
      transition-colors duration-300
      group-hover:text-accent
      sm:text-base
    "
  >
    {certification.name}
  </h3>

  {/* View certificate */}
  <div className="mt-5">
    <span
      className="
        inline-flex items-center gap-1.5
        text-sm font-medium
        text-foreground
        transition-colors duration-300
        group-hover:text-accent
      "
    >
      View certificate
      <ArrowUpRight
        size={14}
        strokeWidth={1.8}
        className="
          transition-transform duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
        "
      />
    </span>
  </div>

  {/* Divider */}
  <div className="!my-5 h-px w-full bg-border/40" />

  {/* Issuer + completion date */}
  <p
    className="
      text-xs leading-relaxed
      text-muted-foreground
    "
  >
    <span className="font-medium text-foreground/80">
    {certification.MainIssuer} • {certification.SubIssuer} •
    </span>

    <span className="mx-2 text-border">·</span>

    <span>
      {certification.date}
    </span>
  </p>
</div>
      </div>
    </motion.a>
  );
}