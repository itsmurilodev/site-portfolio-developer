import React from "react";
import { Mail, MessageSquare } from "lucide-react";
import { SectionShell } from "../layout/SectionShell";
import { TerminalWindow } from "../ui/TerminalWindow";
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

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function ContactPanel() {
  return (
    <SectionShell
      id="contact"
      title="Contato & Conexão"
      subtitle="Vamos criar soluções reais juntos? Escolha o melhor canal técnico para falar comigo."
      technicalTag="./contact.exe"
      className="lg:py-12 xl:py-14"
      headerClassName="lg:mb-8"
    >
      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
        
        {/* Left Panel: visual contact.json schema representation */}
        <div className="lg:col-span-6 flex flex-col">
          <TerminalWindow title="contact_info.json" className="min-h-[260px] flex-1">
            <div className="text-[10px] text-zinc-500 mb-3 font-mono leading-relaxed select-none">
              {"// Informações de contato expostas no barramento de dados"}
            </div>

            <pre className="font-mono text-xs text-zinc-300 py-3 bg-bg-deep rounded-sm border border-white/[0.05] overflow-x-auto pl-3">
              <code>
                <span className="text-zinc-500 font-semibold">&#123;</span>
                {"\n"}
                {"  "}
                <span className="text-syntax-blue font-bold">&quot;status&quot;</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-terminal-green">&quot;available&quot;</span>
                <span className="text-zinc-500">,</span>
                {"\n"}
                {"  "}
                <span className="text-syntax-blue font-bold">&quot;linkedin&quot;</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-terminal-green">&quot;{siteConfig.linkedin}&quot;</span>
                <span className="text-zinc-500">,</span>
                {"\n"}
                {"  "}
                <span className="text-syntax-blue font-bold">&quot;instagram&quot;</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-terminal-green">&quot;@asyncstudiodev&quot;</span>
                <span className="text-zinc-500">,</span>
                {"\n"}
                {"  "}
                <span className="text-syntax-blue font-bold">&quot;github&quot;</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-terminal-green">&quot;{siteConfig.github}&quot;</span>
                <span className="text-zinc-500">,</span>
                {"\n"}
                {"  "}
                <span className="text-syntax-blue font-bold">&quot;location&quot;</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-terminal-green">&quot;{siteConfig.location}&quot;</span>
                <span className="text-zinc-500">,</span>
                {"\n"}
                {"  "}
                <span className="text-syntax-blue font-bold">&quot;email&quot;</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-terminal-green">&quot;{siteConfig.email}&quot;</span>
                {"\n"}
                <span className="text-zinc-500 font-semibold">&#125;</span>
              </code>
            </pre>
          </TerminalWindow>
        </div>

        {/* Right Panel: CTA communication cards */}
        <div className="flex flex-col justify-between gap-4 lg:col-span-6">
          
          {/* Main Email and Whatsapp CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Email CTA */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex flex-col justify-between gap-4 rounded-md border border-white/[0.08] bg-panel-bg/80 p-4 outline-none transition-all duration-300 hover:border-terminal-orange/40 hover:shadow-[0_0_24px_rgba(255,92,36,0.1)] focus-visible:ring-2 focus-visible:ring-terminal-orange md:p-5"
              aria-label={`Enviar um e-mail para ${siteConfig.email}`}
            >
              <div className="w-10 h-10 rounded-sm bg-bg-deep border border-white/[0.08] group-hover:border-terminal-orange/40 flex items-center justify-center transition-all">
                <Mail className="w-5 h-5 text-terminal-orange" />
              </div>
              <div>
                <h3 className="font-mono text-sm font-bold text-zinc-100 mb-1">
                  Enviar E-mail
                </h3>
                <p className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors break-all">
                  {siteConfig.email}
                </p>
              </div>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-4 rounded-md border border-white/[0.08] bg-panel-bg/80 p-4 outline-none transition-all duration-300 hover:border-terminal-orange/40 hover:shadow-[0_0_24px_rgba(255,92,36,0.1)] focus-visible:ring-2 focus-visible:ring-terminal-orange md:p-5"
              aria-label="Iniciar conversa no WhatsApp"
            >
              <div className="w-10 h-10 rounded-sm bg-bg-deep border border-white/[0.08] group-hover:border-terminal-orange/40 flex items-center justify-center transition-all">
                <MessageSquare className="w-5 h-5 text-terminal-green" />
              </div>
              <div>
                <h3 className="font-mono text-sm font-bold text-zinc-100 mb-1">
                  Mandar WhatsApp
                </h3>
                <p className="text-[11px] font-mono text-zinc-500">
                  Conversar de forma direta
                </p>
              </div>
            </a>

          </div>

          {/* Social connection rows */}
          <div className="flex flex-col gap-3 rounded-md border border-white/[0.08] bg-panel-bg/65 p-4 md:p-5">
            <h4 className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest border-b border-zinc-900 pb-2.5">
              outros canais
            </h4>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-2 px-3 py-2 border border-white/[0.08] rounded-sm text-xs font-mono text-zinc-400 hover:text-terminal-orange-soft hover:bg-bg-deep hover:border-terminal-orange/35 transition-all focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none"
                aria-label="Visitar meu perfil no LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-zinc-500 group-hover:text-white" />
                <span>LinkedIn /itsmuriloa</span>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-2 px-3 py-2 border border-white/[0.08] rounded-sm text-xs font-mono text-zinc-400 hover:text-terminal-orange-soft hover:bg-bg-deep hover:border-terminal-orange/35 transition-all focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none"
                aria-label="Visitar meu GitHub"
              >
                <GithubIcon className="w-4 h-4 text-zinc-500 group-hover:text-white" />
                <span>GitHub /itsmurilo</span>
              </a>
            </div>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 border border-white/[0.08] rounded-sm text-xs font-mono text-zinc-400 hover:text-terminal-orange-soft hover:bg-bg-deep hover:border-terminal-orange/35 transition-all focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none"
              aria-label="Seguir a Async Studio no Instagram"
            >
              <InstagramIcon className="w-4 h-4 text-zinc-500 group-hover:text-white" />
              <span>Instagram @asyncstudiodev (Async Studio)</span>
            </a>
          </div>

        </div>

      </div>
    </SectionShell>
  );
}
