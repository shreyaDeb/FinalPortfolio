import Link from "next/link";
import { Metadata } from "next";
import { ContentContainer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Project Not Found — Shreya Deb",
  description: "The requested project could not be found.",
};

export default function ProjectNotFound() {
  return (
    <ContentContainer className="py-24 lg:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
          404
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
          Project Not Found
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          The project you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-300"
        >
          <span aria-hidden="true">&larr;</span>
          <span>Back to all work</span>
        </Link>
      </div>
    </ContentContainer>
  );
}
