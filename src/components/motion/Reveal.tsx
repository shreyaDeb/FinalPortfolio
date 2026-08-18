"use client";

import { motion, MotionProps } from "framer-motion";

interface RevealProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 30,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...props}
      style={{paddingBottom:"24px"}}
    >
      {children}
    </motion.div>
  );
}
