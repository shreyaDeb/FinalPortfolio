"use client";

import { motion, MotionProps, useReducedMotion } from "framer-motion";

interface PageTransitionProps extends MotionProps {
  children: React.ReactNode;
  /** When true, disables motion animations (respects user preference) */
  disableMotion?: boolean;
}

export function PageTransition({
  children,
  disableMotion = false,
  ...props
}: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();
  const motionDisabled = disableMotion || shouldReduceMotion;

  if (motionDisabled) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, clipPath: "inset(0 0 8% 0)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      exit={{ opacity: 0, y: -8, clipPath: "inset(8% 0 0 0)" }}
      transition={{
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
