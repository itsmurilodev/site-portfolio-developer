import React from "react";
import { MobileMenu } from "../interactive/MobileMenu";
import { siteConfig } from "@/lib/site";
import { navigationLinks } from "@/lib/navigation";

// Stable inline custom SVGs for brand icons
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

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-bg-deep/95 backdrop-blur-md transition-all duration-300 lg:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
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

        {/* Right side widgets (Socials + compact navigation drawer) */}
        <div className="flex items-center gap-3">
          
          {/* Status Label (desktop only) */}
          <div className="hidden sm:flex items-center gap-2 rounded-sm border border-white/[0.08] bg-panel-bg px-2.5 py-1 font-mono text-[10px] text-zinc-500 transition-colors hover:border-terminal-orange/35">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>status: available</span>
          </div>

          {/* Social quick links */}
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

          {/* Mobile Drawer (Client component trigger) */}
          <MobileMenu navLinks={navigationLinks} />
        </div>
      </div>
    </header>
  );
}
