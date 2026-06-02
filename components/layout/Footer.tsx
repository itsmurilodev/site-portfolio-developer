import React from "react";
import { Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-bg-deep py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,96,38,0.025)_1px,transparent_1px)] bg-[size:64px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm font-bold">
              <Terminal className="w-4 h-4 text-terminal-orange" />
              <span>Murilo Alves</span>
            </div>
            
            <p className="text-xs text-zinc-500 font-sans">
              &copy; {currentYear} Murilo Alves. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-zinc-600 font-mono">
              Designed with DevOS language. Built with Next.js, Tailwind CSS and TypeScript.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:items-center gap-x-8 gap-y-3 font-mono text-[10px] text-zinc-500">
            <div>
              <span className="text-zinc-700">LOC: </span>
              <span className="text-zinc-400">{siteConfig.location}</span>
            </div>
            <div>
              <span className="text-zinc-700">TZ: </span>
              <span className="text-zinc-400">America/Sao_Paulo</span>
            </div>
            <div>
              <span className="text-zinc-700">HOST: </span>
              <span className="text-terminal-orange-soft">vercel.sh</span>
            </div>
            <div>
              <span className="text-zinc-700">PING: </span>
              <span className="text-emerald-400">18ms</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-terminal-orange-soft transition-colors focus-visible:ring-1 focus-visible:ring-terminal-orange outline-none rounded-sm"
              aria-label="Ver perfil do GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github</span>
            </a>
            
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-terminal-orange-soft transition-colors focus-visible:ring-1 focus-visible:ring-terminal-orange outline-none rounded-sm"
              aria-label="Ver perfil do LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>linkedin</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
