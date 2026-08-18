"use client";

import { motion } from "framer-motion";
import { BrowserVisual } from "@/components/shared/BrowserVisual";

interface ProjectHeroProps {
  image?: string;
  title: string;
  index?: number;
}

export function ProjectHero({ image, title, index = 0 }: ProjectHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
      className="mb-24"
    >
      <BrowserVisual
        image={image}
        alt={title || "Project preview"}
        title={!image ? title : undefined}
        index={index}
        aspectRatio="16/10"
      />
    </motion.div>
  );
}
