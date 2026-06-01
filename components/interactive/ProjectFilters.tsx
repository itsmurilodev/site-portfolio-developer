"use client";

import React, { useState, useEffect } from "react";
import { FolderGit2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectCategory } from "@/data/projects";

type FilterType = "all" | ProjectCategory;

interface ProjectFiltersProps {
  counts: Record<FilterType, number>;
}

export function ProjectFilters({ counts }: ProjectFiltersProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filterTabs: Array<{ label: string; value: FilterType; count: number }> = [
    { label: "Todos", value: "all", count: counts.all },
    { label: "Projetos de Estudo", value: "study-project", count: counts["study-project"] },
    { label: "Projetos Privados", value: "private-project", count: counts["private-project"] },
    { label: "Experiência Real", value: "real-experience", count: counts["real-experience"] },
  ];

  // Side-effect: Toggle data-active-filter attribute on the projects grid container in the DOM
  useEffect(() => {
    const gridContainer = document.getElementById("projects-grid-container");
    if (gridContainer) {
      gridContainer.setAttribute("data-active-filter", activeFilter);
    }
  }, [activeFilter]);

  return (
    <div className="flex items-center justify-between flex-wrap gap-4 border-b border-zinc-900 pb-4">
      {/* Active Repositories Count indicator */}
      <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
        <FolderGit2 className="w-4.5 h-4.5 text-terminal-orange" />
        <span>mostrando:</span>
        <span className="text-zinc-300 font-bold">
          {activeFilter === "all" ? counts.all : counts[activeFilter as ProjectCategory]} repositório(s)
        </span>
      </div>

      {/* Interactive Tabs */}
      <div
        role="tablist"
        aria-label="Filtro de projetos"
        className="flex flex-wrap items-center gap-1.5 p-1 bg-bg-deep/90 border border-white/[0.08] rounded-sm"
      >
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.value;
          return (
            <button
              key={tab.value}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(tab.value)}
              className={cn(
                "px-3 py-1.5 rounded-sm font-mono text-xs transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-terminal-orange flex items-center gap-1.5",
                isActive
                  ? "bg-terminal-orange/10 text-terminal-orange-soft font-bold border border-terminal-orange/30"
                  : "text-zinc-500 hover:text-zinc-300 border border-transparent"
              )}
            >
              <span>{tab.label}</span>
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded text-[10px] font-bold",
                  isActive ? "bg-terminal-orange/10 text-terminal-orange-soft" : "bg-zinc-900 text-zinc-600"
                )}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
