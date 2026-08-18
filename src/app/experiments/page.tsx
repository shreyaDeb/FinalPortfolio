import { Metadata } from "next";
import { ContentContainer } from "@/components/layout";
import { experiments } from "@/data/experiments";
import { ExperimentsHero, EmptyState, ExperimentCard } from "@/components/experiments";

export const metadata: Metadata = {
  title: "Experiments — Shreya Deb",
  description: "Small ideas, technical experiments, and things I'm curious enough to build.",
};

export default function ExperimentsPage() {
  return (
    <ContentContainer>
      {/* Hero Section */}
      <ExperimentsHero
        label="EXPERIMENTS"
        heading="Things I'm exploring."
        copy="Small ideas, technical experiments, and things I'm curious enough to build."
      />

      {/* Experiments Grid or Empty State */}
      <section className="pb-24">
        {experiments.length === 0 ? (
          <EmptyState message="More experiments are taking shape." />
        ) : (
          <div className="space-y-20 lg:space-y-32">
            {experiments.map((experiment, index) => (
              <ExperimentCard
                key={experiment.slug}
                experiment={experiment}
                index={index}
              />
            ))}
          </div>
        )}
      </section>
    </ContentContainer>
  );
}
