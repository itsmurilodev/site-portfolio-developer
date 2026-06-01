import React from "react";
import { SectionShell } from "../layout/SectionShell";
import { RepositoryCard } from "../ui/RepositoryCard";
import { ProjectFilters } from "../interactive/ProjectFilters";
import { projectsData } from "@/data/projects";

export function ProjectsRepositories() {
  // Pre-calculate counts on the server side
  const counts = {
    all: projectsData.length,
    "study-project": projectsData.filter((p) => p.category === "study-project").length,
    "private-project": projectsData.filter((p) => p.category === "private-project").length,
    "real-experience": projectsData.filter((p) => p.category === "real-experience").length,
  };

  return (
    <SectionShell
      id="projects"
      title="Projetos & Repositórios"
      subtitle="Uma seleção de projetos acadêmicos, de estudos práticos e rotinas reais organizados como repositórios de código."
      technicalTag="ls --repositories"
    >
      <div className="flex flex-col gap-8">
        {/* Render interactive filter buttons (Client Component) passing computed server counts */}
        <ProjectFilters counts={counts} />

        {/* 
          Main Projects Grid (Server Component)
          Statically rendered in initial HTML. Display state is managed in the client 
          strictly by toggling a CSS attribute class.
        */}
        <div
          id="projects-grid-container"
          data-active-filter="all"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
