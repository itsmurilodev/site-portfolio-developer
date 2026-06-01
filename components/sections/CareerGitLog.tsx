import React from "react";
import { GitCommit, GitBranch, Calendar, User } from "lucide-react";
import { SectionShell } from "../layout/SectionShell";
import { timelineData } from "@/data/timeline";

export function CareerGitLog() {
  return (
    <SectionShell
      id="journey"
      title="Jornada & Histórico"
      subtitle="Minha trajetória na tecnologia estruturada como um histórico de commits (git log) de evolução técnica."
      technicalTag="git log --murilo-career"
    >
      <div className="relative w-full max-w-4xl mx-auto pl-6 sm:pl-10">
        
        {/* Vertical Git Branch SVG Line */}
        <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-1 bg-gradient-to-b from-purple-500 via-cyan-400 to-blue-500 rounded-full" />

        {/* Timeline Entries (Commits) */}
        <div className="flex flex-col gap-8 md:gap-10">
          {timelineData.map((commit) => {
            return (
              <div key={commit.hash} className="relative group">
                
                {/* Commit Dot Indicator */}
                <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-cyan-400 group-hover:border-purple-400 flex items-center justify-center transition-all duration-300 z-10 shadow-[0_0_12px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_16px_rgba(139,92,246,0.3)]">
                  <GitCommit className="w-3.5 h-3.5 text-cyan-400 group-hover:text-purple-400 transition-colors animate-pulse" />
                </div>

                {/* Commit Card Container */}
                <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  
                  {/* Card Header (Commit Hash, Date, Author) */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-3 mb-4 text-[11px] font-mono text-zinc-500">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-purple-400 font-bold">commit {commit.hash}</span>
                      <span className="text-zinc-700">|</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3 text-zinc-600" />
                        <span>Author: {commit.author}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1 self-start sm:self-auto bg-zinc-900 px-2 py-0.5 rounded border border-zinc-850">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      <span className="text-zinc-400 font-bold">{commit.date}</span>
                    </div>
                  </div>

                  {/* Message Title (Commit Subject) */}
                  <h3 className="text-base font-bold text-white font-mono flex items-center gap-2 mb-3">
                    <GitBranch className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{commit.subject}</span>
                  </h3>

                  {/* Body Text */}
                  <p className="text-sm text-zinc-400 font-sans leading-relaxed mb-4">
                    {commit.body}
                  </p>

                  {/* Milestones tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {commit.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-zinc-500 bg-zinc-900/60 px-2.5 py-0.5 rounded border border-zinc-850"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </SectionShell>
  );
}
