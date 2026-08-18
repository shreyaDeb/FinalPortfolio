import { Metadata } from "next";
import { ContentContainer } from "@/components/layout";
import { Hero, SelectedWork, HowIBuild, AboutPreview, FinalCTA } from "@/components/home";

export const metadata: Metadata = {
  title: "Shreya Deb — Software Engineer & Product Builder",
  description:
    "I build digital products from idea to deployment. Software engineer and full-stack product builder.",
};

export default function HomePage() {
  return (
    <ContentContainer>
      <Hero />

      {/* How I Build Section */}
      <HowIBuild />

      {/* About Preview Section */}
      <AboutPreview />

      {/* Selected Work Section */}
      <SelectedWork />

      {/* Final CTA Section */}
      <FinalCTA />
    </ContentContainer>
  );
}
