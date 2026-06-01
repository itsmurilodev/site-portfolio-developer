import React from "react";
import { Database, Server, Settings, Braces } from "lucide-react";
import { SectionShell } from "../layout/SectionShell";
import { TerminalWindow } from "../ui/TerminalWindow";
import { CodeBlock } from "../ui/CodeBlock";
import { Badge } from "../ui/Badge";
import { SkillsHighlighter } from "../interactive/SkillsHighlighter";
import { skillsData, skillsJsonString } from "@/data/skills";

export function SkillsSystem() {
  const pilarIcons = [
    <Braces key="web" className="w-5 h-5 text-syntax-blue" />,
    <Database key="db" className="w-5 h-5 text-syntax-yellow" />,
    <Server key="infra" className="w-5 h-5 text-terminal-green" />,
    <Settings key="auto" className="w-5 h-5 text-syntax-purple" />,
  ];

  return (
    <SectionShell
      id="skills"
      title="Habilidades & Stack"
      subtitle="Meu arsenal tecnológico organizado em quatro pilares técnicos essenciais para soluções digitais."
      technicalTag="skills.system.json"
    >
      {/* Wrap everything in our client-side DOM Highlighter wrapper */}
      <SkillsHighlighter>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Visual Code Editor with JSON */}
          <div className="lg:col-span-5 flex flex-col">
            <TerminalWindow title="skills.system.json" className="min-h-[350px]">
              {/* Informational Hint */}
              <div className="text-[10px] text-zinc-500 mb-3 font-mono leading-relaxed select-none">
                {"// Passe o mouse pelas propriedades para destacar as seções correspondentes"}
              </div>

              {/* Interactive CodeBlock */}
              <div className="relative font-mono text-xs">
                <CodeBlock code={skillsJsonString} />

                {/* Invisible DOM hover sensor elements mapping JSON keys to client listeners */}
                <div 
                  className="absolute top-[75px] left-0 right-0 h-[22px] cursor-pointer hover:bg-zinc-900/10 pointer-events-auto"
                  data-json-key="web_development"
                />
                <div 
                  className="absolute top-[108px] left-0 right-0 h-[22px] cursor-pointer hover:bg-zinc-900/10 pointer-events-auto"
                  data-json-key="backend_database"
                />
                <div 
                  className="absolute top-[141px] left-0 right-0 h-[22px] cursor-pointer hover:bg-zinc-900/10 pointer-events-auto"
                  data-json-key="infrastructure_devops"
                />
                <div 
                  className="absolute top-[174px] left-0 right-0 h-[22px] cursor-pointer hover:bg-zinc-900/10 pointer-events-auto"
                  data-json-key="automation_tools"
                />
              </div>
            </TerminalWindow>
          </div>

          {/* Right Side: Skill Pilar Cards (Fully SSR loaded for SEO) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillsData.map((pilar, index) => {
              return (
                <div
                  key={pilar.title}
                  className="rounded-md border border-white/[0.08] p-5 bg-panel-bg/75 transition-all duration-300 flex flex-col justify-between h-full shadow-lg relative overflow-hidden group cursor-pointer hover:border-terminal-orange/35 hover:bg-panel-light/80"
                  data-pillar-card={index}
                >
                  {/* Visual top border glow */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terminal-orange/25 to-transparent" />

                  <div>
                    {/* Card Header (Icon, Title, Status badge) */}
                    <div className="flex items-start justify-between gap-2 border-b border-zinc-900/60 pb-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        {pilarIcons[index]}
                        <h3 className="font-mono text-sm font-bold text-zinc-100 group-hover:text-white leading-none">
                          {pilar.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-4 min-h-[36px]">
                      {pilar.description}
                    </p>

                    {/* Skills tags list */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {pilar.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono text-zinc-500 bg-zinc-950/60 px-2 py-0.5 rounded border border-zinc-900/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="border-t border-zinc-900/40 pt-3 mt-auto flex items-center justify-between text-[10px] font-mono">
                    <span className="text-zinc-600">status:</span>
                    <Badge status={pilar.status}>{pilar.statusLabel}</Badge>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </SkillsHighlighter>
    </SectionShell>
  );
}
