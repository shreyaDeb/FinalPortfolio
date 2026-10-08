import { Metadata } from "next";
import { ContentContainer } from "@/components/layout";
import { Hero, SelectedWork, HowIBuild, AboutPreview, FinalCTA } from "@/components/home";

// ✅ 1. REMOVE the "import logo from..." line entirely

export const metadata: Metadata = {
  title: "Shreya Deb — Software Engineer & Product Builder",
  description: "I build digital products from idea to deployment.",
  icons: {
    icon: "/icon.png",
  },
};

export default function HomePage() {
  return (
    <ContentContainer>
      <Hero />
      <HowIBuild />
      <AboutPreview />
      <SelectedWork />
      <FinalCTA />
    </ContentContainer>
  );
}
