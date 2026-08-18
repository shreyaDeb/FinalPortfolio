"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TRAIL_LENGTH = 4;
const TRAIL_DELAY = 40;

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const trailRef = useRef<{ x: number; y: number; id: number }[]>([]);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const lastTrailTime = useRef(0);
  const isHoveringRef = useRef(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const smoothX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const smoothY = useSpring(cursorY, { damping: 25, stiffness: 300 });

  const scale = useSpring(isHovering ? 1.5 : 1, { damping: 20, stiffness: 400 });

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      const now = Date.now();
      if (now - lastTrailTime.current > TRAIL_DELAY) {
        lastTrailTime.current = now;
        trailRef.current = [
          { x: e.clientX, y: e.clientY, id: now },
          ...trailRef.current.slice(0, TRAIL_LENGTH - 1),
        ];
        setTrail([...trailRef.current]);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      trailRef.current = [];
      setTrail([]);
    };

    const handleTargetChange = () => {
      const target = document.querySelector(":hover");
      if (target) {
        const tagName = target.tagName.toLowerCase();
        const isInteractive =
          tagName === "a" ||
          tagName === "button" ||
          tagName === "input" ||
          tagName === "textarea" ||
          target.hasAttribute("role") ||
          !!target.closest("a") ||
          !!target.closest("button") ||
          !!target.closest("[role='button']");
        isHoveringRef.current = isInteractive;
        setIsHovering(isInteractive);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleTargetChange);

    document.body.classList.add("custom-cursor-active");

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleTargetChange);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[9999] hidden md:block"
      style={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Trailing dots */}
      {trail.map((point, i) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-foreground/40 -translate-x-1/2 -translate-y-1/2"
          style={{
            x: point.x,
            y: point.y,
            mixBlendMode: "difference",
            opacity: (i + 1) / trail.length * 0.5,
          }}
        />
      ))}

      {/* Main cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-foreground/20 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: smoothX,
          y: smoothY,
          mixBlendMode: "difference",
          scale,
        }}
      />

      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-foreground/80 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: smoothX,
          y: smoothY,
          mixBlendMode: "difference",
        }}
      />
    </motion.div>
  );
}
