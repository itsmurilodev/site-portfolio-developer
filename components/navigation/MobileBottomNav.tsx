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

export function MobileBottomNav() {
  const { activeSection, setActiveSection } = useActiveSection(navigationLinks);

  return (
    <nav
      className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 mx-auto grid max-w-sm grid-cols-7 gap-1 rounded-sm border border-white/[0.1] bg-bg-deep/82 p-1.5 shadow-[0_-8px_34px_rgba(0,0,0,0.42)] backdrop-blur-md lg:hidden"
      aria-label="Navegacao principal mobile"
    >
      {navigationLinks.map((link) => {
        const Icon = iconMap[link.icon];
        const isActive = activeSection === link.id;

        return (
          <a
            key={link.id}
            href={link.href}
            aria-label={`Ir para ${link.label}`}
            aria-current={isActive ? "location" : undefined}
            onClick={() => setActiveSection(link.id)}
            className={cn(
              "flex h-10 min-w-0 items-center justify-center rounded-sm border text-zinc-400 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-terminal-orange",
              isActive
                ? "border-terminal-orange/60 bg-terminal-orange/12 text-terminal-orange-soft shadow-[0_0_18px_rgba(255,92,36,0.22)]"
                : "border-transparent hover:border-terminal-orange/30 hover:bg-panel-bg hover:text-zinc-100"
            )}
          >
            <Icon className="h-4.5 w-4.5" aria-hidden="true" />
            <span className="sr-only">{link.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
