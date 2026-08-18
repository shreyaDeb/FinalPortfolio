export type ExperimentCategory = "ai" | "experiment" | "prototype" | "creative" | "research";

export type ExperimentStatus = "exploring" | "in-progress" | "prototype" | "complete";

export interface ExperimentLink {
  label: string;
  href: string;
}

export interface Experiment {
  slug: string;
  title: string;
  category: ExperimentCategory;
  description: string;
  technologies?: string[];
  image?: string;
  status?: ExperimentStatus;
  links?: ExperimentLink[];
  date?: string;
}

export const experiments: Experiment[] = [];

export function getExperimentBySlug(slug: string): Experiment | undefined {
  return experiments.find((experiment) => experiment.slug === slug);
}

export function getExperimentsByCategory(
  category: ExperimentCategory
): Experiment[] {
  return experiments.filter((experiment) => experiment.category === category);
}

export function getExperimentsByStatus(
  status: ExperimentStatus
): Experiment[] {
  return experiments.filter((experiment) => experiment.status === status);
}

export function getAllExperimentCategories(): ExperimentCategory[] {
  return [...new Set(experiments.map((e) => e.category))];
}

export function getAllExperimentStatuses(): ExperimentStatus[] {
  return [...new Set(experiments.map((e) => e.status).filter(Boolean))] as ExperimentStatus[];
}
