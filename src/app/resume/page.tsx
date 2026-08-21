"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContentContainer } from "@/components/layout";
import { useState, useCallback } from "react";
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

// const ZOOM_MIN = 0.5;
// const ZOOM_MAX = 2.5;
// const ZOOM_STEP = 0.25;

export default function ResumePage() {
  const shouldReduceMotion = useReducedMotion();
  const [zoom, setZoom] = useState(1);

//   const handleZoomIn = useCallback(() => {
//     setZoom((prev) => Math.min(prev + ZOOM_STEP, ZOOM_MAX));
//   }, []);

//   const handleZoomOut = useCallback(() => {
//     setZoom((prev) => Math.max(prev - ZOOM_STEP, ZOOM_MIN));
//   }, []);

//   const handleDownload = useCallback(() => {
//     const link = document.createElement("a");
//     link.href = "/ShreyaResume.pdf";
//     link.download = "ShreyaResume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }, []);

  return (
    <ContentContainer className="!py-15">
      {/* ─── HERO ─── */}
      <motion.div
        className="mb-10 lg:mb-12"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div variants={itemFadeUp} className="flex items-center gap-4 mb-6">
          <span className="w-6 h-px bg-foreground/30" aria-hidden="true" />
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
            Resume
          </p>
        </motion.div>

        <motion.h1
          variants={itemFadeUp}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] max-w-4xl"
        >
          My Resume
        </motion.h1>

        <motion.p
          variants={itemFadeUp}
          className="!mb-5 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
        >
          A summary of my experience, skills, and education. Feel free to
          download.
        </motion.p>
      </motion.div>

      {/* ─── PDF VIEWER ─── */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        style={{ minHeight: "70vh" }}
      >
        <div
          className="w-full h-full transition-transform duration-300 ease-out origin-top"
          style={{ transform: `scale(${zoom})` }}
        >
          <iframe
            src="/ShreyaResume.pdf"
            title="Shreya Deb - Resume"
            className="w-full h-[80vh] border-0"
            style={{ minHeight: "80vh" }}
          />
        </div>
      </motion.div>
    </ContentContainer>
  );
}
