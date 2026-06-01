import React from "react";
import { Home } from "lucide-react";
import { siteConfig } from "@/lib/site";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function IdentityDock() {
  return (
    <aside
      className="fixed left-4 top-4 z-40 hidden flex-col gap-2 lg:flex"
      aria-label="Identidade e links sociais"
    >
      <a
        href="#home"
        className="group relative flex h-10 w-10 items-center justify-center rounded-sm border border-terminal-orange/40 bg-bg-deep/78 text-terminal-orange-soft shadow-2xl backdrop-blur-md transition-all duration-200 hover:border-terminal-orange/70 hover:bg-terminal-orange/10 focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none"
        aria-label="Ir para a secao inicial"
        title="Home"
      >
        <Home className="h-4.5 w-4.5" aria-hidden="true" />
        <span className="pointer-events-none absolute left-12 hidden whitespace-nowrap rounded-sm border border-terminal-orange/35 bg-bg-deep px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-terminal-orange-soft shadow-xl group-hover:block group-focus-within:block">
          Home
        </span>
      </a>

      <a
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-9 w-9 items-center justify-center rounded-sm border border-white/[0.08] bg-bg-deep/72 text-zinc-500 shadow-xl backdrop-blur-md transition-all duration-200 hover:border-terminal-orange/35 hover:bg-panel-bg hover:text-terminal-orange-soft focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none"
        aria-label="Ver perfil do GitHub"
        title="GitHub"
      >
        <GithubIcon className="h-4 w-4" aria-hidden="true" />
        <span className="pointer-events-none absolute left-11 hidden whitespace-nowrap rounded-sm border border-white/[0.08] bg-bg-deep px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400 shadow-xl group-hover:block group-focus-within:block">
          GitHub
        </span>
      </a>
      <a
        href={siteConfig.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-9 w-9 items-center justify-center rounded-sm border border-white/[0.08] bg-bg-deep/72 text-zinc-500 shadow-xl backdrop-blur-md transition-all duration-200 hover:border-terminal-orange/35 hover:bg-panel-bg hover:text-terminal-orange-soft focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none"
        aria-label="Ver perfil do LinkedIn"
        title="LinkedIn"
      >
        <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
        <span className="pointer-events-none absolute left-11 hidden whitespace-nowrap rounded-sm border border-white/[0.08] bg-bg-deep px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400 shadow-xl group-hover:block group-focus-within:block">
          LinkedIn
        </span>
      </a>
    </aside>
  );
}
