"use client";

import { motion } from "framer-motion";

interface BrowserVisualProps {
  image?: string;
  alt?: string;
  title?: string;
  index?: number;
  aspectRatio?: "4/3" | "16/10" | "3/4" | "1/1";
}

const patterns = [
  // Pattern 1: Concentric circles
  <svg key="circles" viewBox="0 0 400 300" className="w-full h-full">
    <circle cx="200" cy="150" r="100" fill="none" stroke="var(--border)" strokeWidth="1" />
    <circle cx="200" cy="150" r="60" fill="none" stroke="var(--muted-foreground)" strokeWidth="0.5" opacity="0.4" />
    <circle cx="200" cy="150" r="20" fill="var(--accent)" opacity="0.15" />
    <line x1="100" y1="150" x2="300" y2="150" stroke="var(--border)" strokeWidth="0.5" opacity="0.5" />
    <line x1="200" y1="50" x2="200" y2="250" stroke="var(--border)" strokeWidth="0.5" opacity="0.5" />
  </svg>,
  // Pattern 2: Diagonal grid
  <svg key="grid" viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border)" strokeWidth="0.5" opacity="0.6" />
      </pattern>
    </defs>
    <rect width="400" height="300" fill="url(#grid-pattern)" />
    <circle cx="200" cy="150" r="40" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
    <circle cx="200" cy="150" r="8" fill="var(--accent)" opacity="0.2" />
  </svg>,
  // Pattern 3: Abstract blocks
  <svg key="blocks" viewBox="0 0 400 300" className="w-full h-full">
    <rect x="60" y="60" width="120" height="80" rx="4" fill="var(--secondary)" stroke="var(--border)" strokeWidth="1" />
    <rect x="200" y="100" width="140" height="100" rx="4" fill="var(--secondary)" stroke="var(--border)" strokeWidth="1" opacity="0.7" />
    <rect x="80" y="160" width="100" height="60" rx="4" fill="var(--accent)" opacity="0.08" />
    <line x1="60" y1="60" x2="340" y2="200" stroke="var(--border)" strokeWidth="0.5" opacity="0.4" />
  </svg>,
  // Pattern 4: Dots
  <svg key="dots" viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="var(--muted-foreground)" opacity="0.3" />
      </pattern>
    </defs>
    <rect width="400" height="300" fill="url(#dots-pattern)" />
    <rect x="120" y="80" width="160" height="140" rx="8" fill="none" stroke="var(--border)" strokeWidth="1" />
    <rect x="140" y="100" width="120" height="100" rx="4" fill="var(--secondary)" opacity="0.5" />
  </svg>,
  // Pattern 5: Lines
  <svg key="lines" viewBox="0 0 400 300" className="w-full h-full">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <line
        key={i}
        x1="80"
        y1={60 + i * 36}
        x2="320"
        y2={60 + i * 36}
        stroke="var(--border)"
        strokeWidth="1"
        opacity={0.3 + i * 0.08}
      />
    ))}
    <circle cx="320" cy="180" r="24" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.25" />
  </svg>,
];

const aspectRatioClasses: Record<string, string> = {
  "4/3": "aspect-[4/3]",
  "16/10": "aspect-[16/10]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
};

export function BrowserVisual({
  image,
  alt = "Project preview",
  title,
  index = 0,
  aspectRatio = "4/3",
}: BrowserVisualProps) {
  const pattern = patterns[index % patterns.length];

  return (
    <div
      className={`relative w-full ${aspectRatioClasses[aspectRatio]} rounded-xl border border-border bg-secondary/30 overflow-hidden flex flex-col`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/60 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-border/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-border/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-border/80" />
        <div className="ml-4 flex-1 h-5 rounded bg-border/40 max-w-[200px]" />
      </div>

      {/* Content area */}
      <div className="flex-1 p-4 flex items-center justify-center min-h-0">
        {image ? (
          <motion.img
            src={image}
            alt={alt}
            className="w-full h-full object-contain rounded"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ) : (
          <div className="w-full h-full flex flex-col">
            {/* Abstract visual */}
            <div className="flex-1 flex items-center justify-center">
              {pattern}
            </div>
            {/* Project title overlay */}
            {title && (
              <div className="mt-3 text-center">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/60">
                  {title}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
