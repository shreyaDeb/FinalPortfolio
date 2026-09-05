import { Metadata } from "next";
import { ContentContainer } from "@/components/layout";
import { experiments } from "@/data/experiments";
import { ExperimentsHero, EmptyState, ExperimentCard } from "@/components/experiments";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Experiments — Shreya Deb",
  description: "Small ideas, technical experiments, and things I'm curious enough to build.",
};

export default function ExperimentsPage() {
  return (
    <ContentContainer>
      <section className="relative min-h-[50vh] flex items-center pt-3 pb-16 lg:pb-24 overflow-hidden">
        <Reveal>
          <div className="max-w-3xl">
            {/* <motion.div variants={itemFadeUp} className="flex items-center gap-4 mb-8"> */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-6 h-px bg-foreground/30" aria-hidden="true" />
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
                Experiments
              </p>
            </div>
            {/* </motion.div> */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
              Things I'm exploring.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Small ideas, technical experiments, and things I'm curious enough to build.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Experiments Grid or Empty State */}
      <section className="!pb-24">
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
