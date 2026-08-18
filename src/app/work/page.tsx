import { Metadata } from "next";
import { ContentContainer } from "@/components/layout";
import { projects } from "@/data/projects";
import { WorkPageClient } from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Work — Shreya Deb",
  description:
    "A collection of products, platforms, experiments, and projects I've worked on across full-stack development.",
};

export default function WorkPage() {
  return (
    <ContentContainer>
      <WorkPageClient projects={projects} />
    </ContentContainer>
  );
}
