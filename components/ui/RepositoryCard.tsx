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
    "study-project": "border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.1)]",
    "private-project": "border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_0_24px_rgba(139,92,246,0.1)]",
    "real-experience": "border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_0_24px_rgba(6,182,212,0.1)]",
  };

  const bulletColor = {
    "study-project": "bg-blue-400",
    "private-project": "bg-purple-400",
    "real-experience": "bg-cyan-400",
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-xl border bg-zinc-950/45 p-6 backdrop-blur-md transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
        categoryGlowStyles[project.category] || "border-zinc-800",
        className
      )}
    >
      {/* Light gradient highlight on card hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

      {/* Main Content */}
      <div className="flex flex-col gap-4">
        {/* Header Title & Tags */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.private ? (
              <Lock className="w-5 h-5 text-purple-400 flex-shrink-0" />
            ) : (
              <FolderGit2 className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0" />
            )}
            <h3 className="font-mono text-base font-semibold text-zinc-100 tracking-tight leading-tight group-hover:text-white transition-colors duration-300">
              {project.name}
            </h3>
          </div>
          
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span className={cn("w-1.5 h-1.5 rounded-full", bulletColor[project.category])} />
            {project.categoryLabel}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 font-sans leading-relaxed">
          {project.description}
        </p>

        {/* Aprendizado / Problema Resolvido */}
        <div className="rounded-lg border border-zinc-900 bg-zinc-900/30 p-3 mt-1">
          <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Aprendizado / Solução técnica</span>
          </div>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed leading-normal">
            {project.solvedProblem}
          </p>
        </div>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mt-2">
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
      <div className="flex items-center justify-between border-t border-zinc-900 pt-4 mt-5">
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none"
              aria-label={`Ver repositório do projeto ${project.name} no GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-zinc-900 hover:text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 font-semibold focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none shadow-[0_0_12px_rgba(6,182,212,0.15)]"
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
