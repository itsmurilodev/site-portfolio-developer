import type { ProjectCategory, ProjectItem } from "@/data/projects";

export type ProjectFilter = "all" | ProjectCategory;

export type ProjectFilterCounts = Record<ProjectFilter, number>;

export const projectFilterTabs: Array<{ label: string; value: ProjectFilter }> = [
  { label: "Todos", value: "all" },
  { label: "Projetos de Estudo", value: "study-project" },
  { label: "Projetos Privados", value: "private-project" },
  { label: "Experi\u00eancia Real", value: "real-experience" },
];

export function countProjectsByFilter(projects: ProjectItem[]): ProjectFilterCounts {
  return {
    all: projects.length,
    "study-project": projects.filter((project) => project.category === "study-project").length,
    "private-project": projects.filter((project) => project.category === "private-project").length,
    "real-experience": projects.filter((project) => project.category === "real-experience").length,
  };
}
