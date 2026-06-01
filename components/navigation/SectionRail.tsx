"use client";

import React from "react";
import {
  BookOpen,
  Code2,
  Cpu,
  FolderGit2,
  GitBranch,
  Mail,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { navigationLinks } from "@/lib/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const iconMap: Record<(typeof navigationLinks)[number]["icon"], LucideIcon> = {
  code: Code2,
  terminal: Terminal,
  cpu: Cpu,
  branch: GitBranch,
  folder: FolderGit2,
  book: BookOpen,
  mail: Mail,
};

export function SectionRail() {
  const { activeSection, setActiveSection } = useActiveSection(navigationLinks);

  return (
    <aside
      className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:right-5"
      aria-label="Navegacao por secoes do portfolio"
    >
      <div className="flex flex-col items-end gap-3">
        <nav className="rounded-sm border border-white/[0.08] bg-bg-deep/75 px-1.5 py-3 shadow-2xl backdrop-blur-md">
          <ol className="flex flex-col items-center gap-2">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = iconMap[link.icon];

              return (
                <li key={link.id} className="group relative flex items-center">
                  <span
                    className={cn(
                      "pointer-events-none absolute right-11 hidden whitespace-nowrap rounded-sm border px-2.5 py-1 font-mono text-[10px] shadow-xl transition-all duration-200 group-hover:block group-focus-within:block",
                      isActive
                        ? "border-terminal-orange/35 bg-terminal-orange/10 text-terminal-orange-soft"
                        : "border-white/[0.08] bg-bg-deep text-zinc-400"
                    )}
                  >
                    {link.index} / {link.label}
                  </span>

                  <a
                    href={link.href}
                    aria-label={`Ir para a secao ${link.label}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setActiveSection(link.id)}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-sm border font-mono text-[10px] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-terminal-orange",
                      isActive
                        ? "border-terminal-orange/60 bg-terminal-orange/10 text-terminal-orange-soft shadow-[0_0_18px_rgba(255,92,36,0.18)]"
                        : "border-transparent text-zinc-600 hover:border-terminal-orange/30 hover:bg-panel-bg hover:text-zinc-300"
                    )}
                  >
                    <Icon className={cn("h-4 w-4", isActive ? "text-terminal-orange-soft" : "text-current")} />
                    <span className="sr-only">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </aside>
  );
}
