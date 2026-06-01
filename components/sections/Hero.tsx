import React from "react";
import { ArrowRight, MessageSquareCode } from "lucide-react";
import { profileData } from "@/data/profile";
import { siteConfig } from "@/lib/site";

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

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center min-h-[90vh] py-12 md:py-20 overflow-hidden border-b border-zinc-900/60"
    >
      {/* Decorative Cybernetic Nebulae Glow */}
      <div className="absolute top-[20%] left-[10%] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-purple-600/10 blur-[80px] pointer-events-none animate-pulse" style={{ animationDuration: "6s" }} />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-cyan-600/10 blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: "8s" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* System Status Pill */}
            <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 font-mono text-xs text-purple-400">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
              <span>system.status: booting_complete</span>
            </div>

            {/* Main Title Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Hello, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 hover:from-purple-300 hover:to-blue-400 transition-all duration-300">
                {profileData.name}
              </span>
            </h1>

            {/* Position Subheading */}
            <p className="text-lg md:text-xl font-mono text-zinc-300 max-w-2xl font-semibold border-l-2 border-cyan-400 pl-4">
              {profileData.role}
            </p>

            {/* Core Description Bio */}
            <p className="text-sm md:text-base text-zinc-400 font-sans leading-relaxed max-w-xl">
              Desenvolvedor Web em formação, unindo backend, DevOps e automações para criar soluções reais. {profileData.tagline}
            </p>

            {/* Action CTAs Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-mono font-bold text-zinc-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none shadow-[0_0_24px_rgba(6,182,212,0.2)]"
              >
                <span>Ver Projetos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none"
              >
                <span>Ver Skills</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-mono font-medium text-zinc-300 hover:text-cyan-400 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-850 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none"
              >
                <MessageSquareCode className="w-4 h-4 text-cyan-400" />
                <span>Falar Comigo</span>
              </a>
            </div>

            {/* Quick External Socials */}
            <div className="flex items-center gap-4 mt-2">
              <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">redes //</span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-white transition-colors outline-none focus-visible:underline"
                aria-label="Ver perfil no LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-zinc-600 hover:text-white" />
                <span>linkedin</span>
                <span className="text-[10px] font-sans font-bold text-zinc-600 select-none">↗</span>
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-white transition-colors outline-none focus-visible:underline"
                aria-label="Ver perfil no GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-600 hover:text-white" />
                <span>github</span>
                <span className="text-[10px] font-sans font-bold text-zinc-600 select-none">↗</span>
              </a>
            </div>

          </div>

          {/* Right Visual Component Tag Mockup */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto">
            {/* Visual terminal mockup framing the code tag */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/80 overflow-hidden shadow-2xl backdrop-blur-md">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-800/60 select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  component.tsx
                </div>
                <div className="w-8 h-1" />
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs leading-relaxed text-zinc-400 select-text">
                <div className="text-zinc-600 mb-2">{"// JSX component visual rendering"}</div>
                <div>
                  <span className="text-pink-400">&lt;</span>
                  <span className="text-purple-400 font-bold">MuriloDevOS</span>
                </div>
                <div className="pl-4 mt-1">
                  <span className="text-cyan-400">status</span>
                  <span className="text-zinc-500">=</span>
                  <span className="text-amber-300">&quot;online&quot;</span>
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">role</span>
                  <span className="text-zinc-500">=</span>
                  <span className="text-amber-300">&quot;Web Developer&quot;</span>
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">focus</span>
                  <span className="text-zinc-500">=</span>
                  <span className="text-amber-300">&quot;Backend • DevOps • Automation&quot;</span>
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">stack</span>
                  <span className="text-zinc-500">=</span>
                  <span className="text-amber-300">&quot;PHP • MySQL • React • Docker • Linux&quot;</span>
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">mindset</span>
                  <span className="text-zinc-500">=</span>
                  <span className="text-amber-300">&quot;Aprender construindo. Evoluir entregando.&quot;</span>
                </div>
                <div>
                  <span className="text-pink-400">/&gt;</span>
                </div>

                {/* Simulated status outputs */}
                <div className="mt-6 pt-4 border-t border-zinc-900 flex flex-col gap-1 text-[10px] text-zinc-500">
                  <div className="flex justify-between">
                    <span>uptime</span>
                    <span className="text-emerald-400">99.98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>deployment</span>
                    <span className="text-zinc-400">stable-release</span>
                  </div>
                  <div className="flex justify-between">
                    <span>loc</span>
                    <span className="text-zinc-400">Brazil / remote</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
