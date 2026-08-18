"use client";

import { motion, MotionProps } from "framer-motion";

interface HoverProps extends MotionProps {
  children: React.ReactNode;
  scale?: number;
  y?: number;
}

export function Hover({
  children,
  scale = 1.02,
  y = -4,
  ...props
}: HoverProps) {
  return (
    <motion.div
      whileHover={{ scale, y }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
