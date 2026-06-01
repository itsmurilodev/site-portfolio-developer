import React from "react";
import { Terminal, User, Target } from "lucide-react";
import { SectionShell } from "../layout/SectionShell";
import { TerminalWindow } from "../ui/TerminalWindow";
import { profileData } from "@/data/profile";

export function AboutTerminal() {
  return (
    <SectionShell
      id="about"
      title="Quem Sou Eu"
      subtitle="Uma visão rápida de quem sou, meus valores e objetivos como desenvolvedor."
      technicalTag="whoami"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: About Me Terminal Screen */}
        <div className="lg:col-span-8 flex flex-col">
          <TerminalWindow title="whoami.sh" className="flex-1 min-h-[350px]">
            {/* Command 1 */}
            <div className="flex items-center gap-2 mb-3 select-none text-zinc-500">
              <span className="text-terminal-green font-bold">guest@murilo-os:~$</span>
              <span className="text-terminal-orange-soft">whoami</span>
            </div>

            {/* Output 1: Statically rendered text for perfect SEO */}
            <div className="pl-4 border-l border-zinc-900 flex flex-col gap-4 mb-6">
              <div className="flex items-start gap-2.5">
                <User className="w-4 h-4 text-terminal-orange mt-1 flex-shrink-0 select-none" />
                <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                  {profileData.bio}
                </p>
              </div>
            </div>

            {/* Command 2 */}
            <div className="flex items-center gap-2 mb-3 select-none text-zinc-500">
              <span className="text-terminal-green font-bold">guest@murilo-os:~$</span>
              <span className="text-terminal-orange-soft">cat mission.txt</span>
            </div>

            {/* Output 2 */}
            <div className="pl-4 border-l border-zinc-900 flex flex-col gap-2">
              <div className="flex items-start gap-2.5">
                <Target className="w-4.5 h-4.5 text-terminal-orange mt-0.5 flex-shrink-0 select-none" />
                <h3 className="text-sm font-semibold text-zinc-100 font-sans">Missão:</h3>
              </div>
              <p className="pl-7 text-sm font-mono text-zinc-200 leading-relaxed max-w-2xl">
                &ldquo;{profileData.mission}&rdquo;
              </p>
            </div>
            
            {/* Blinking Cursor prompt */}
            <div className="flex items-center gap-2 mt-6 select-none">
              <span className="text-terminal-green font-bold">guest@murilo-os:~$</span>
              <div className="w-2 h-4 bg-terminal-orange animate-pulse" />
            </div>
          </TerminalWindow>
        </div>

        {/* Right Side: Quick System Parameters Card */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="flex-1 rounded-md border border-white/[0.08] bg-panel-bg/80 p-6 shadow-lg flex flex-col justify-between relative overflow-hidden group">
            
            {/* Grid background details */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,96,38,0.035)_1px,transparent_1px)] bg-[size:20px] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-3">
                <Terminal className="w-4 h-4 text-terminal-orange" />
                <span>system_profile</span>
              </div>

              {/* Bio Parameters list */}
              <div className="flex flex-col gap-4 font-mono text-xs">
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-600 uppercase text-[9px]">graduação</span>
                  <span className="text-zinc-300 font-sans font-semibold leading-relaxed">
                    {profileData.education}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-zinc-600 uppercase text-[9px]">foco técnico</span>
                  <span className="text-zinc-300 font-sans leading-relaxed">
                    Interfaces Web responsivas, modelagem MySQL e automações integradas.
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-zinc-600 uppercase text-[9px]">mindset</span>
                  <span className="text-terminal-green leading-relaxed font-semibold">
                    Aprender construindo. Evoluir entregando. Documentar o caminho.
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Specs representation */}
            <div className="relative z-10 border-t border-zinc-900 pt-4 mt-6">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-600">
                <span>host_location</span>
                <span className="text-zinc-400">{profileData.location}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </SectionShell>
  );
}
