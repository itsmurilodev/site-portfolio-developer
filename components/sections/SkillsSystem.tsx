import React from "react";
import { Braces, Database, Server, Settings } from "lucide-react";
import { SectionShell } from "../layout/SectionShell";
import { TerminalWindow } from "../ui/TerminalWindow";
import { CodeBlock } from "../ui/CodeBlock";
import { Badge } from "../ui/Badge";
import { SkillsHighlighter } from "../interactive/SkillsHighlighter";
import { skillsData, skillsJsonString } from "@/data/skills";

const skillPillarIcons = [
  <Braces key="web" className="w-5 h-5 text-syntax-blue" />,
  <Database key="db" className="w-5 h-5 text-syntax-yellow" />,
  <Server key="infra" className="w-5 h-5 text-terminal-green" />,
  <Settings key="auto" className="w-5 h-5 text-syntax-purple" />,
];

const skillJsonHoverTargets = [
  { key: "web_development", top: "top-[75px]" },
  { key: "backend_database", top: "top-[108px]" },
  { key: "infrastructure_devops", top: "top-[141px]" },
  { key: "automation_tools", top: "top-[174px]" },
];

export function SkillsSystem() {
  return (
    <SectionShell
      id="skills"
      title="Habilidades & Stack"
      subtitle="Meu arsenal tecnol\u00f3gico organizado em quatro pilares t\u00e9cnicos essenciais para solu\u00e7\u00f5es digitais."
      technicalTag="skills.system.json"
      className="lg:py-12 xl:py-14"
      headerClassName="lg:mb-8"
    >
      <SkillsHighlighter>
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          <div className="lg:col-span-5 flex flex-col">
            <TerminalWindow
              title="skills.system.json"
              className="min-h-[320px] max-h-[min(470px,58svh)]"
            >
              <div className="text-[10px] text-zinc-500 mb-3 font-mono leading-relaxed select-none">
                {"// Passe o mouse pelas propriedades para destacar as se\u00e7\u00f5es correspondentes"}
              </div>

              <div className="relative font-mono text-xs">
                <CodeBlock code={skillsJsonString} />

                {skillJsonHoverTargets.map((target) => (
                  <div
                    key={target.key}
                    className={`${target.top} absolute left-0 right-0 h-[22px] cursor-pointer hover:bg-zinc-900/10 pointer-events-auto`}
                    data-json-key={target.key}
                  />
                ))}
              </div>
            </TerminalWindow>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7 lg:gap-4">
            {skillsData.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-md border border-white/[0.08] bg-panel-bg/75 p-4 shadow-lg transition-all duration-300 hover:border-terminal-orange/35 hover:bg-panel-light/80"
                data-pillar-card={index}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terminal-orange/25 to-transparent" />

                <div>
                  <div className="mb-3 flex items-start justify-between gap-2 border-b border-zinc-900/60 pb-2.5">
                    <div className="flex items-center gap-2.5">
                      {skillPillarIcons[index]}
                      <h3 className="font-mono text-sm font-bold text-zinc-100 group-hover:text-white leading-none">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-3 min-h-[34px] font-sans text-xs leading-relaxed text-zinc-400">
                    {pillar.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono text-zinc-500 bg-zinc-950/60 px-2 py-0.5 rounded border border-zinc-900/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-zinc-900/40 pt-3 font-mono text-[10px]">
                  <span className="text-zinc-600">status:</span>
                  <Badge status={pillar.status}>{pillar.statusLabel}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SkillsHighlighter>
    </SectionShell>
  );
}
