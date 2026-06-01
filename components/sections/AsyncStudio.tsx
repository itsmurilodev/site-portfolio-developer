import React from "react";
import { ArrowUpRight, CheckCircle2, Flame } from "lucide-react";
import { SectionShell } from "../layout/SectionShell";
import { siteConfig } from "@/lib/site";

// Stable inline custom Instagram SVG
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function AsyncStudio() {
  const services = [
    "Sites profissionais e corporativos",
    "Landing pages de alta conversão",
    "Sistemas web sob medida",
    "Web apps e plataformas SaaS",
    "MVPs ágeis para startups",
    "Automações comerciais e de fluxos",
  ];

  return (
    <SectionShell
      id="async-studio"
      title="Async Studio"
      subtitle="Minha startup/estúdio de desenvolvimento focado em criar soluções eficientes, sob medida e sem burocracia."
      technicalTag="workspace --featured"
    >
      <div className="relative rounded-md border border-terminal-orange/25 bg-panel-bg/80 p-6 md:p-10 shadow-2xl overflow-hidden group">
        
        {/* Subtle mesh background + glowing circular nebulae */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,96,38,0.035)_1px,transparent_1px)] bg-[size:32px] pointer-events-none" />
        <div className="absolute -top-[30%] -right-[10%] w-[350px] h-[350px] rounded-full bg-terminal-orange/10 blur-[80px] pointer-events-none group-hover:bg-terminal-orange/15 transition-all duration-500" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[350px] h-[350px] rounded-full bg-syntax-yellow/5 blur-[80px] pointer-events-none transition-all duration-500" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Startup Brand Tag */}
            <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-sm border border-terminal-orange/30 bg-terminal-orange/10 font-mono text-xs text-terminal-orange-soft">
              <Flame className="w-3.5 h-3.5 text-terminal-orange animate-pulse" />
              <span>startup_workspace</span>
            </div>

            {/* Main Tagline */}
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Desenvolvimento de software{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terminal-orange to-syntax-yellow">
                sem travas.
              </span>
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-zinc-400 font-sans leading-relaxed">
              A Async Studio é um estúdio de desenvolvimento de software focado em sites profissionais, landing pages, sistemas sob medida, web apps, SaaS, MVPs e automações inteligentes para pequenos negócios, MEIs, autônomos e startups em fase inicial.
            </p>

            {/* Services Bullet list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-2 font-sans text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-terminal-green flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            {/* Social redirection CTA */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="command-button inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold text-terminal-orange-soft hover:text-white bg-bg-deep border border-terminal-orange/35 hover:border-terminal-orange/70 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-terminal-orange"
              >
                <InstagramIcon className="w-4 h-4 text-terminal-orange" />
                <span>@asyncstudiodev</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-55" />
              </a>
            </div>

          </div>

          {/* Right Metrics Panel Representation */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-md border border-white/[0.08] bg-bg-deep/90 p-6 shadow-inner font-mono text-xs text-zinc-400 flex flex-col gap-4">
              
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-1">
                <span className="text-zinc-500 uppercase tracking-widest text-[9px]">workspace_statistics</span>
                <span className="text-terminal-green font-bold">active</span>
              </div>

              {/* simulated metric rows */}
              <div className="flex flex-col gap-3 font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600">focus_scope</span>
                  <span className="text-zinc-300 text-right">MEI, Autônomos & Startups</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600">delivery_model</span>
                  <span className="text-terminal-orange-soft">Agile / Sem travas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600">core_techs</span>
                  <span className="text-zinc-300">Next.js • PHP • n8n • VPS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600">workspace_status</span>
                  <span className="text-zinc-300">ready_to_deploy</span>
                </div>
              </div>

              <div className="border-t border-zinc-900 pt-4 mt-2 flex flex-col gap-2">
                <div className="flex justify-between text-[10px] text-zinc-600">
                  <span>workspace_status</span>
                  <span className="text-zinc-400">ready_to_deploy</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </SectionShell>
  );
}
