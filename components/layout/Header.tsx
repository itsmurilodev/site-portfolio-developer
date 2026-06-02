import React from "react";
import { MobileMenu } from "../interactive/MobileMenu";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/lib/site";
import { navigationLinks } from "@/lib/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-bg-deep/95 backdrop-blur-md transition-all duration-300 lg:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <a
          href="#home"
          className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-terminal-orange rounded-sm p-1"
          aria-label="Ir para o topo"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-terminal-orange/35 bg-panel-bg font-mono text-sm font-black text-terminal-orange-soft shadow-inner transition-all duration-300 group-hover:border-terminal-orange/70 group-hover:bg-terminal-orange/10">
            &lt;_
          </div>
          <span className="font-mono text-sm font-bold text-zinc-100 group-hover:text-white transition-colors">
            {siteConfig.name}
            <span className="text-terminal-orange font-extrabold animate-pulse">_</span>
          </span>
        </a>

        <div className="flex items-center gap-3">
          
          <div className="hidden sm:flex items-center gap-2 rounded-sm border border-white/[0.08] bg-panel-bg px-2.5 py-1 font-mono text-[10px] text-zinc-500 transition-colors hover:border-terminal-orange/35">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>status: available</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-sm text-zinc-400 hover:text-terminal-orange-soft hover:bg-panel-bg border border-transparent hover:border-terminal-orange/30 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-terminal-orange"
              aria-label="Ver perfil do GitHub"
            >
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-sm text-zinc-400 hover:text-terminal-orange-soft hover:bg-panel-bg border border-transparent hover:border-terminal-orange/30 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-terminal-orange"
              aria-label="Ver perfil do LinkedIn"
            >
              <LinkedinIcon className="w-4.5 h-4.5" />
            </a>
          </div>

          <MobileMenu navLinks={navigationLinks} />
        </div>
      </div>
    </header>
  );
}
