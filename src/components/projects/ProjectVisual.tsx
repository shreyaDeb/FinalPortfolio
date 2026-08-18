"use client";

import { BrowserVisual } from "@/components/shared/BrowserVisual";

interface ProjectVisualProps {
  image?: string;
  alt?: string;
  title?: string;
  index?: number;
  aspectRatio?: "4/3" | "16/10" | "3/4" | "1/1";
}

export function ProjectVisual({
  image,
  alt = "Project preview",
  title,
  index = 0,
  aspectRatio = "4/3",
}: ProjectVisualProps) {
  return (
    <BrowserVisual
      image={image}
      alt={alt}
      title={title}
      index={index}
      aspectRatio={aspectRatio}
    />
  );
}
