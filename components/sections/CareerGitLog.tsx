import React from "react";
import { Calendar, GitBranch, GitCommit, User } from "lucide-react";
import { SectionShell } from "../layout/SectionShell";
import { timelineData } from "@/data/timeline";

export function CareerGitLog() {
  return (
    <SectionShell
      id="journey"
      title="Jornada & Hist\u00f3rico"
      subtitle="Minha trajet\u00f3ria na tecnologia estruturada como um hist\u00f3rico de commits (git log) de evolu\u00e7\u00e3o t\u00e9cnica."
      technicalTag="git log --stat --oneline"
      className="lg:py-12 xl:py-14"
      headerClassName="lg:mb-8"
    >
      <div className="relative mx-auto w-full max-w-5xl pl-6 sm:pl-10">
        <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-terminal-orange via-terminal-green to-zinc-700" />

        <div className="flex flex-col gap-5 md:gap-6">
          {timelineData.map((commit) => (
            <div key={commit.hash} className="relative group">
              <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-6 h-6 rounded-full bg-bg-deep border-2 border-terminal-orange group-hover:border-terminal-green flex items-center justify-center transition-all duration-300 z-10 shadow-[0_0_12px_rgba(255,92,36,0.18)] group-hover:shadow-[0_0_16px_rgba(34,197,94,0.22)]">
                <GitCommit className="w-3.5 h-3.5 text-terminal-orange group-hover:text-terminal-green transition-colors animate-pulse" />
              </div>

              <div className="rounded-md border border-white/[0.08] bg-panel-bg/80 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.36)] transition-all duration-300 hover:border-terminal-orange/35 md:p-5">
                <div className="mb-3 flex flex-col justify-between gap-2 border-b border-zinc-900 pb-3 font-mono text-[11px] text-zinc-500 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-terminal-orange font-bold">commit {commit.hash}</span>
                    <span className="text-zinc-700">|</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-zinc-600" />
                      <span>Author: {commit.author}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1 self-start sm:self-auto bg-zinc-900 px-2 py-0.5 rounded-sm border border-white/[0.08]">
                    <Calendar className="w-3 h-3 text-terminal-orange" />
                    <span className="text-zinc-400 font-bold">{commit.date}</span>
                  </div>
                </div>

                <h3 className="mb-2.5 flex items-center gap-2 font-mono text-base font-bold text-white">
                  <GitBranch className="w-4 h-4 text-terminal-green flex-shrink-0" />
                  <span>{commit.subject}</span>
                </h3>

                <p className="mb-3 text-sm leading-relaxed text-zinc-400">{commit.body}</p>

                <div className="flex flex-wrap gap-1.5">
                  {commit.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-zinc-500 bg-zinc-900/60 px-2.5 py-0.5 rounded-sm border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
