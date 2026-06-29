import React from "react";
import { FolderGit2, Eye, Sparkles, Lock } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils";

interface RepositoryCardProps {
  project: ProjectItem;
  className?: string;
}

const categoryGlowStyles = {
  "study-project":
    "border-syntax-blue/20 hover:border-terminal-orange/45 hover:shadow-[0_0_24px_rgba(255,92,36,0.1)]",
  "private-project":
    "border-syntax-purple/20 hover:border-terminal-orange/45 hover:shadow-[0_0_24px_rgba(255,92,36,0.1)]",
  "real-experience":
    "border-terminal-green/20 hover:border-terminal-orange/45 hover:shadow-[0_0_24px_rgba(255,92,36,0.1)]",
} satisfies Record<ProjectItem["category"], string>;

const categoryBulletStyles = {
  "study-project": "bg-syntax-blue",
  "private-project": "bg-syntax-purple",
  "real-experience": "bg-terminal-green",
} satisfies Record<ProjectItem["category"], string>;

export function RepositoryCard({ project, className }: RepositoryCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-md border bg-panel-bg/80 p-4 transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.42)] md:p-5",
        categoryGlowStyles[project.category],
        className
      )}
    >
      <div className="absolute inset-0 rounded-md bg-gradient-to-br from-terminal-orange/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

      <div className="flex flex-col gap-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.isPrivate ? (
              <Lock className="w-5 h-5 text-syntax-purple flex-shrink-0" />
            ) : (
              <FolderGit2 className="w-5 h-5 text-zinc-400 group-hover:text-terminal-orange transition-colors duration-300 flex-shrink-0" />
            )}
            <h3 className="font-mono text-base font-semibold text-zinc-100 leading-tight group-hover:text-white transition-colors duration-300">
              {project.name}
            </h3>
          </div>
          
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span className={cn("w-1.5 h-1.5 rounded-full", categoryBulletStyles[project.category])} />
            {project.categoryLabel}
          </span>
        </div>

        <p className="font-sans text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <div className="mt-0.5 rounded-md border border-zinc-900 bg-zinc-900/30 p-3">
          <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-terminal-orange-soft mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Aprendizado / Solução técnica</span>
          </div>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed leading-normal">
            {project.technicalOutcome}
          </p>
        </div>

        <div className="mt-1 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-zinc-500 bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-800/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-zinc-900 pt-3.5">
        <span className="text-[10px] font-mono text-zinc-500">
          status: <span className="text-emerald-400 font-bold">active</span>
        </span>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono font-medium text-zinc-400 hover:text-terminal-orange-soft bg-bg-deep hover:bg-panel-light border border-white/[0.08] hover:border-terminal-orange/40 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none"
              aria-label={`Ver repositório do projeto ${project.name} no GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>
          )}
          {project.demoUrl && project.demoUrl !== "#" && (
            <a
              href={project.demoUrl}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono font-semibold text-terminal-orange-soft hover:text-white bg-bg-deep border border-terminal-orange/40 hover:bg-terminal-orange/10 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none shadow-[0_0_12px_rgba(255,92,36,0.12)]"
              aria-label={`Ver demo ao vivo do projeto ${project.name}`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Demo</span>
            </a>
          )}
          {project.isPrivate && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-zinc-600 bg-zinc-950 border border-zinc-900 select-none">
              <Lock className="w-3.5 h-3.5" />
              <span>Privado</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
