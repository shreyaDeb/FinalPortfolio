"use client";

import { motion } from "framer-motion";
import { BrowserVisual } from "@/components/shared/BrowserVisual";
import { GalleryItem } from "@/data/projects";

interface ProjectGalleryProps {
  gallery?: GalleryItem[];
}

function FullWidthImage({ item }: { item: GalleryItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="!mb-16"
    >
      <BrowserVisual
        image={item.src}
        alt={item.alt || "Project image"}
        aspectRatio="16/10"
      />
      {item.caption && (
        <p className="!mt-4 text-sm text-muted-foreground text-center">
          {item.caption}
        </p>
      )}
    </motion.div>
  );
}


function TwoImageLayout({ items }: { items: GalleryItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="!mb-16 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {items.slice(0, 2).map((item, index) => (
        <div key={index}>
          <BrowserVisual
            image={item.src}
            alt={item.alt || `Project image ${index + 1}`}
            aspectRatio="4/3"
          />
          {item.caption && (
            <p className="!mt-3 text-sm text-muted-foreground text-center">
              {item.caption}
            </p>
          )}
        </div>
      ))}
    </motion.div>
  );
}

function ImageWithText({ item }: { item: GalleryItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="!mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
    >
      <BrowserVisual
        image={item.src}
        alt={item.alt || "Project image"}
        aspectRatio="4/3"
      />
      {item.text && (
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {item.text}
          </p>
        </div>
      )}
    </motion.div>
  );
}

function FeatureImage({ item }: { item: GalleryItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="!mb-16"
    >
      <BrowserVisual
        image={item.src}
        alt={item.alt || "Feature image"}
        aspectRatio="16/10"
      />
      {item.caption && (
        <p className="!mt-4 text-sm text-muted-foreground text-center">
          {item.caption}
        </p>
      )}
    </motion.div>
  );
}

export function ProjectGallery({ gallery }: ProjectGalleryProps) {
  if (!gallery || gallery.length === 0) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="!mb-24"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground !mb-6">
          Visual Story
        </h2>
        <div className="rounded-xl border border-dashed border-border p-8 text-center">
          <p className="text-muted-foreground text-sm">
            Project visuals coming soon.
          </p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="!mb-24"
    >
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground !mb-12">
        Visual Story
      </h2>
      <div>
        {gallery.map((item, index) => {
          switch (item.type) {
            case "full":
              return <FullWidthImage key={index} item={item} />;
            case "two":
              return <TwoImageLayout key={index} items={gallery.slice(index, index + 2)} />;
            case "image-text":
              return <ImageWithText key={index} item={item} />;
            case "feature":
              return <FeatureImage key={index} item={item} />;
            default:
              return null;
          }
        })}
      </div>
    </motion.section>
  );
}
