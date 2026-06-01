import React from "react";
import { FolderGit2, Eye, Sparkles, Lock } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { cn } from "@/lib/utils";

// Stable inline custom GitHub SVG
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface RepositoryCardProps {
  project: ProjectItem;
  className?: string;
}

export function RepositoryCard({ project, className }: RepositoryCardProps) {
  // Map category to glowing colors
  const categoryGlowStyles = {
    "study-project": "border-syntax-blue/20 hover:border-terminal-orange/45 hover:shadow-[0_0_24px_rgba(255,92,36,0.1)]",
    "private-project": "border-syntax-purple/20 hover:border-terminal-orange/45 hover:shadow-[0_0_24px_rgba(255,92,36,0.1)]",
    "real-experience": "border-terminal-green/20 hover:border-terminal-orange/45 hover:shadow-[0_0_24px_rgba(255,92,36,0.1)]",
  };

  const bulletColor = {
    "study-project": "bg-syntax-blue",
    "private-project": "bg-syntax-purple",
    "real-experience": "bg-terminal-green",
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-md border bg-panel-bg/80 p-4 transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.42)] md:p-5",
        categoryGlowStyles[project.category] || "border-zinc-800",
        className
      )}
    >
      {/* Light gradient highlight on card hover */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-br from-terminal-orange/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

      {/* Main Content */}
      <div className="flex flex-col gap-3.5">
        {/* Header Title & Tags */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.private ? (
              <Lock className="w-5 h-5 text-syntax-purple flex-shrink-0" />
            ) : (
              <FolderGit2 className="w-5 h-5 text-zinc-400 group-hover:text-terminal-orange transition-colors duration-300 flex-shrink-0" />
            )}
            <h3 className="font-mono text-base font-semibold text-zinc-100 leading-tight group-hover:text-white transition-colors duration-300">
              {project.name}
            </h3>
          </div>
          
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span className={cn("w-1.5 h-1.5 rounded-full", bulletColor[project.category])} />
            {project.categoryLabel}
          </span>
        </div>

        {/* Description */}
        <p className="font-sans text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        {/* Aprendizado / Problema Resolvido */}
        <div className="mt-0.5 rounded-md border border-zinc-900 bg-zinc-900/30 p-3">
          <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-terminal-orange-soft mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Aprendizado / Solução técnica</span>
          </div>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed leading-normal">
            {project.solvedProblem}
          </p>
        </div>

        {/* Stack Tags */}
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

      {/* Action Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-zinc-900 pt-3.5">
        <span className="text-[10px] font-mono text-zinc-500">
          status: <span className="text-emerald-400 font-bold">active</span>
        </span>

        {/* Links buttons */}
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
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono font-semibold text-terminal-orange-soft hover:text-white bg-bg-deep border border-terminal-orange/40 hover:bg-terminal-orange/10 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none shadow-[0_0_12px_rgba(255,92,36,0.12)]"
              aria-label={`Ver demo ao vivo do projeto ${project.name}`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Demo</span>
            </a>
          )}
          {project.private && (
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
