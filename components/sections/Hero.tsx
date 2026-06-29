import React from "react";
import { FolderGit2, Play, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { profileData } from "@/data/profile";
import { siteConfig } from "@/lib/site";


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
      className="relative flex min-h-[100svh] scroll-mt-0 flex-col justify-center overflow-x-hidden border-b border-white/[0.07] py-10 sm:py-12 lg:py-8 xl:py-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(255,92,36,0.2),transparent_28rem),radial-gradient(circle_at_78%_20%,rgba(250,204,21,0.08),transparent_24rem)] pointer-events-none" />
      <div className="absolute left-0 top-0 h-full w-px bg-terminal-orange/25" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="flex min-w-0 w-full max-w-[calc(100vw-2rem)] flex-col gap-5 text-left lg:col-span-6 lg:max-w-none">
            <div className="inline-flex w-fit items-center gap-2 rounded-sm border border-terminal-orange/30 bg-bg-deep/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-terminal-orange-soft shadow-[0_0_24px_rgba(255,92,36,0.08)]">
              <span className="h-2 w-2 rounded-full bg-terminal-green shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
              <span>SYSTEM.KERNEL :: v1.0 ONLINE</span>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-3xl text-[clamp(2.35rem,7.5vw,4.15rem)] font-black leading-[0.95] text-text-main xl:text-[4.55rem]">
                <span className="block">Hello, I&apos;m</span>
                <span className="block whitespace-nowrap bg-gradient-to-r from-syntax-yellow via-[#f59e0b] to-terminal-orange bg-clip-text text-transparent">
                  {profileData.name}
                </span>
              </h1>

              <p className="max-w-2xl border-l-2 border-terminal-orange pl-4 font-mono text-sm font-semibold leading-relaxed text-zinc-200 md:text-base">
                <span className="text-terminal-orange-soft">&lt;developer /&gt;</span>{" "}
                Construindo soluções web com backend, DevOps e automação.
              </p>

              <p className="max-w-xl text-sm leading-relaxed text-muted-text md:text-[15px]">
                Desenvolvedor Web em formação, unindo código, banco de dados, infraestrutura,
                deploy e automações para transformar problemas reais em sistemas úteis.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#about"
                className="command-button inline-flex w-full items-center justify-center gap-2 border border-terminal-orange/65 bg-bg-deep px-5 py-2.5 font-mono text-sm font-bold text-terminal-orange-soft shadow-[0_0_18px_rgba(255,92,36,0.08)] transition-all duration-300 hover:bg-terminal-orange/10 hover:shadow-[0_0_26px_rgba(255,92,36,0.22)] focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none sm:w-auto"
              >
                <Play className="h-4 w-4" />
                <span>Initialize Profile</span>
              </a>

              <a
                href="#projects"
                className="command-button inline-flex w-full items-center justify-center gap-2 border border-white/[0.12] bg-panel-bg px-5 py-2.5 font-mono text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-terminal-orange/50 hover:text-terminal-orange-soft focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none sm:w-auto"
              >
                <FolderGit2 className="h-4 w-4" />
                <span>View Projects</span>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/[0.1] bg-bg-deep px-5 py-2.5 font-mono text-sm font-semibold text-zinc-400 transition-all duration-300 hover:border-terminal-orange/40 hover:text-terminal-orange-soft focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none sm:w-auto"
                aria-label="Ver perfil no GitHub"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Check out GitHub</span>
              </a>
            </div>

            <div className="max-w-2xl rounded-sm border border-white/[0.08] bg-bg-deep/70 p-3 font-mono text-[11px] uppercase tracking-wide text-zinc-500">
              <span className="text-terminal-green">LOADED_MODULES:</span>{" "}
              <span className="text-zinc-300">{profileData.heroModules.join(" ")}</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[calc(100vw-2rem)] min-w-0 sm:max-w-2xl lg:col-span-6 lg:max-w-xl xl:max-w-2xl">
            <div className="absolute -inset-4 bg-terminal-orange/10 blur-3xl pointer-events-none" />
            <div className="terminal-panel relative overflow-hidden rounded-md">
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-panel-light px-4 py-2.5">
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

              <pre className="overflow-x-auto bg-editor-bg py-4 font-mono text-[11px] leading-5 text-zinc-300 sm:text-[12px] xl:text-[13px] xl:leading-6">
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

              <div className="grid grid-cols-3 border-t border-white/[0.08] bg-bg-deep px-4 py-2.5 font-mono text-[10px] text-zinc-600">
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
