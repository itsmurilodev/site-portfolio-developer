import React from "react";
import { FolderGit2, Play, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";
import { siteConfig } from "@/lib/site";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const modules = ["REACT", "NEXT.JS", "PHP", "MYSQL", "DOCKER", "LINUX", "GIT"];

const lineClass = "flex min-w-max gap-4 px-5";
const lineNumberClass = "w-6 shrink-0 select-none text-right text-[11px] text-zinc-700";
const codeClass = "whitespace-pre";

function CodeLine({ number, children }: { number: number; children?: React.ReactNode }) {
  return (
    <div className={lineClass}>
      <span className={lineNumberClass}>{number}</span>
      <span className={codeClass}>{children}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden border-b border-white/[0.07] py-14 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(255,92,36,0.2),transparent_28rem),radial-gradient(circle_at_78%_20%,rgba(250,204,21,0.08),transparent_24rem)] pointer-events-none" />
      <div className="absolute left-0 top-0 h-full w-px bg-terminal-orange/25" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex min-w-0 w-full max-w-[calc(100vw-2rem)] flex-col gap-6 text-left lg:col-span-6 lg:max-w-none">
            <div className="inline-flex w-fit items-center gap-2 rounded-sm border border-terminal-orange/30 bg-bg-deep/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-terminal-orange-soft shadow-[0_0_24px_rgba(255,92,36,0.08)]">
              <span className="h-2 w-2 rounded-full bg-terminal-green shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
              <span>SYSTEM.KERNEL :: v1.0 ONLINE</span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-black leading-[0.95] text-text-main sm:text-5xl md:text-6xl xl:text-7xl">
                <span className="block">Hello, I&apos;m</span>
                <span className="block whitespace-nowrap bg-gradient-to-r from-syntax-yellow via-[#f59e0b] to-terminal-orange bg-clip-text text-transparent">
                  {profileData.name}
                </span>
              </h1>

              <p className="max-w-2xl border-l-2 border-terminal-orange pl-4 font-mono text-base font-semibold leading-relaxed text-zinc-200 md:text-lg">
                <span className="text-terminal-orange-soft">&lt;developer /&gt;</span>{" "}
                Construindo soluções web com backend, DevOps e automação.
              </p>

              <p className="max-w-xl text-sm leading-relaxed text-muted-text md:text-base">
                Desenvolvedor Web em formação, unindo código, banco de dados, infraestrutura,
                deploy e automações para transformar problemas reais em sistemas úteis.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#about"
                className="command-button inline-flex w-full items-center justify-center gap-2 border border-terminal-orange/65 bg-bg-deep px-5 py-3 font-mono text-sm font-bold text-terminal-orange-soft shadow-[0_0_18px_rgba(255,92,36,0.08)] transition-all duration-300 hover:bg-terminal-orange/10 hover:shadow-[0_0_26px_rgba(255,92,36,0.22)] focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none sm:w-auto"
              >
                <Play className="h-4 w-4" />
                <span>Initialize Profile</span>
              </a>

              <a
                href="#projects"
                className="command-button inline-flex w-full items-center justify-center gap-2 border border-white/[0.12] bg-panel-bg px-5 py-3 font-mono text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-terminal-orange/50 hover:text-terminal-orange-soft focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none sm:w-auto"
              >
                <FolderGit2 className="h-4 w-4" />
                <span>View Projects</span>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/[0.1] bg-bg-deep px-5 py-3 font-mono text-sm font-semibold text-zinc-400 transition-all duration-300 hover:border-terminal-orange/40 hover:text-terminal-orange-soft focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none sm:w-auto"
                aria-label="Ver perfil no GitHub"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Check out GitHub</span>
              </a>
            </div>

            <div className="max-w-2xl rounded-sm border border-white/[0.08] bg-bg-deep/70 p-3 font-mono text-[11px] uppercase tracking-wide text-zinc-500">
              <span className="text-terminal-green">LOADED_MODULES:</span>{" "}
              <span className="text-zinc-300">{modules.join(" ")}</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[calc(100vw-2rem)] min-w-0 sm:max-w-2xl lg:col-span-6">
            <div className="absolute -inset-4 bg-terminal-orange/10 blur-3xl pointer-events-none" />
            <div className="terminal-panel relative overflow-hidden rounded-md">
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-panel-light px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full border border-[#e0443e]/40 bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full border border-[#df9b14]/40 bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full border border-[#1a9c2b]/40 bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <Terminal className="h-3.5 w-3.5 text-terminal-orange" />
                  <span className="text-terminal-orange-soft">portfolio.tsx</span>
                </div>
                <span className="hidden font-mono text-[10px] text-zinc-600 sm:inline">main</span>
              </div>

              <pre className="overflow-x-auto bg-editor-bg py-5 font-mono text-[12px] leading-6 text-zinc-300 sm:text-[13px]">
                <code>
                  <CodeLine number={1}>
                    <span className="text-zinc-500">{"// Welcome to my workspace"}</span>
                  </CodeLine>
                  <CodeLine number={2}>
                    <span className="text-syntax-purple">import</span> {"{ "}
                    <span className="text-syntax-yellow">Developer</span>
                    {" }"} <span className="text-syntax-purple">from</span>{" "}
                    <span className="text-terminal-green">&apos;./universe&apos;</span>;
                  </CodeLine>
                  <CodeLine number={3}></CodeLine>
                  <CodeLine number={4}>
                    <span className="text-syntax-purple">const</span>{" "}
                    <span className="text-syntax-yellow">Portfolio</span> = () =&gt; {"{"}
                  </CodeLine>
                  <CodeLine number={5}>
                    {"  "}
                    <span className="text-syntax-purple">return</span> (
                  </CodeLine>
                  <CodeLine number={6}>
                    {"    "}
                    <span className="text-terminal-orange">&lt;Developer</span>
                  </CodeLine>
                  <CodeLine number={7}>
                    {"      "}
                    <span className="text-syntax-blue">name</span>=
                    <span className="text-terminal-green">&quot;Murilo Alves&quot;</span>
                  </CodeLine>
                  <CodeLine number={8}>
                    {"      "}
                    <span className="text-syntax-blue">role</span>=
                    <span className="text-terminal-green">&quot;Web Developer&quot;</span>
                  </CodeLine>
                  <CodeLine number={9}>
                    {"      "}
                    <span className="text-syntax-blue">focus</span>=
                    <span className="text-terminal-green">&quot;Backend • DevOps • Automation&quot;</span>
                  </CodeLine>
                  <CodeLine number={10}>
                    {"      "}
                    <span className="text-syntax-blue">stack</span>=
                    <span className="text-terminal-green">&quot;PHP • MySQL • React • Docker • Linux&quot;</span>
                  </CodeLine>
                  <CodeLine number={11}>
                    {"      "}
                    <span className="text-syntax-blue">mindset</span>=
                    <span className="text-terminal-green">&quot;Aprender construindo. Evoluir entregando.&quot;</span>
                  </CodeLine>
                  <CodeLine number={12}>
                    {"    "}
                    <span className="text-terminal-orange">/&gt;</span>
                  </CodeLine>
                  <CodeLine number={13}>{"  "});</CodeLine>
                  <CodeLine number={14}>{"};"}</CodeLine>
                </code>
              </pre>

              <div className="grid grid-cols-3 border-t border-white/[0.08] bg-bg-deep px-4 py-3 font-mono text-[10px] text-zinc-600">
                <span>
                  branch: <span className="text-terminal-green">main</span>
                </span>
                <span className="text-center">
                  stack: <span className="text-zinc-300">next.ts</span>
                </span>
                <span className="text-right">
                  status: <span className="text-terminal-orange-soft">ready</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
