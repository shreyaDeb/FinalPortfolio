import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentContainer } from "@/components/layout";
import {
  getProjectBySlug,
  getNextProject,
  getPreviousProject,
  projects,
} from "@/data/projects";
import {
  ProjectIntro,
  ProjectHero,
  ProjectOverview,
  ProjectRole,
  ProjectTechnology,
  ProjectChallenges,
  ProjectGallery,
  ProjectLessons,
  ProjectNavigation,
} from "@/components/case-study";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Shreya Deb`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const previousProject = getPreviousProject(slug);
  const nextProject = getNextProject(slug);

  return (
    <ContentContainer className="!py-12 lg:!py-20">
      {/* Project Intro */}
      <ProjectIntro project={project} />

      {/* Hero Visual */}
      <ProjectHero
        image={project.heroImage || project.image}
        title={project.title}
        index={projects.findIndex((p) => p.slug === slug)}
      />

      {/* Overview */}
      <ProjectOverview overview={project.overview} />

      {/* My Role */}
      <ProjectRole role={project.role} />

      {/* Technology */}
      <ProjectTechnology technologies={project.technologies} />

      {/* Engineering / Product Challenges */}
      <ProjectChallenges challenges={project.challenges} />

      {/* Visual Story */}
      <ProjectGallery gallery={project.gallery} />

      {/* Lessons / Takeaways */}
      <ProjectLessons lessons={project.lessons} />

      {/* Navigation */}
      <ProjectNavigation
        currentProject={project}
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </ContentContainer>
  );
}
