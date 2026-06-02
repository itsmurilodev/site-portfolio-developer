import React from "react";
import { SectionShell } from "../layout/SectionShell";
import { RepositoryCard } from "../ui/RepositoryCard";
import { ProjectFilters } from "../interactive/ProjectFilters";
import { projectsData } from "@/data/projects";
import { countProjectsByFilter } from "@/lib/projectFilters";

export function ProjectsRepositories() {
  const projectCounts = countProjectsByFilter(projectsData);

  return (
    <SectionShell
      id="projects"
      title="Projetos & Repositórios"
      subtitle="Uma seleção de projetos acadêmicos, de estudos práticos e rotinas reais organizados como repositórios de código."
      technicalTag="ls -la ~/projects"
      className="lg:py-12 xl:py-14"
      headerClassName="lg:mb-8"
    >
      <div className="flex flex-col gap-5 lg:gap-6">
        <ProjectFilters projectCounts={projectCounts} />

        <div
          id="projects-grid-container"
          data-active-filter="all"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-5"
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card h-full transition-all duration-300"
              data-category={project.category}
            >
              <RepositoryCard project={project} className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
