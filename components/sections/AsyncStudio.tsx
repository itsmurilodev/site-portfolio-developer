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
      technicalTag="featured workspace"
    >
      <div className="relative rounded-2xl border border-purple-500/25 bg-zinc-950/60 p-6 md:p-10 backdrop-blur-md shadow-2xl overflow-hidden group">
        
        {/* Subtle mesh background + glowing circular nebulae */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:32px] pointer-events-none" />
        <div className="absolute -top-[30%] -right-[10%] w-[350px] h-[350px] rounded-full bg-purple-600/10 blur-[80px] pointer-events-none group-hover:bg-purple-600/15 transition-all duration-500" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[350px] h-[350px] rounded-full bg-cyan-600/10 blur-[80px] pointer-events-none group-hover:bg-cyan-600/15 transition-all duration-500" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Startup Brand Tag */}
            <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 font-mono text-xs text-purple-300">
              <Flame className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>startup_workspace</span>
            </div>

            {/* Main Tagline */}
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Desenvolvimento de software{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
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
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-bold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <InstagramIcon className="w-4 h-4 text-purple-400" />
                <span>@asyncstudiodev</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-55" />
              </a>
            </div>

          </div>

          {/* Right Metrics Panel Representation */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/90 p-6 shadow-inner font-mono text-xs text-zinc-400 flex flex-col gap-4">
              
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-1">
                <span className="text-zinc-500 uppercase tracking-widest text-[9px]">workspace_statistics</span>
                <span className="text-purple-400 font-bold">active</span>
              </div>

              {/* simulated metric rows */}
              <div className="flex flex-col gap-3 font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600">focus_scope</span>
                  <span className="text-zinc-300 text-right">MEI, Autônomos & Startups</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600">delivery_model</span>
                  <span className="text-cyan-400">Agile / Sem travas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600">core_techs</span>
                  <span className="text-zinc-300">Next.js • PHP • n8n • VPS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600">workspace_status</span>
                  <span className="text-zinc-350">ready_to_deploy</span>
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
