import Image from "next/image";
import React from "react";
import {
  Coffee,
  Code2,
  GitBranch,
  MapPin,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { SectionShell } from "../layout/SectionShell";
import { TerminalWindow } from "../ui/TerminalWindow";
import { aboutProfile, aboutStats, aboutTerminal } from "@/data/about";

type AboutStat = (typeof aboutStats)[number];

const availabilityLabel = aboutProfile.status === "OPEN" ? "dispon\u00edvel" : "em progresso";

const metricIcons = {
  server: Server,
  code: Code2,
  coffee: Coffee,
} as const;

function ProfilePhoto() {
  return (
    <div className="relative w-full max-w-[11rem] sm:max-w-[12.5rem] xl:max-w-[13rem]">
      <div className="pointer-events-none absolute -inset-3 rounded-md border border-terminal-orange/20" />
      <div className="pointer-events-none absolute -inset-5 rounded-md border border-syntax-blue/15" />

      <div className="relative h-52 w-full overflow-hidden rounded-md border border-terminal-orange/45 bg-bg-deep shadow-[0_0_42px_rgba(255,92,36,0.16)] sm:h-64 lg:h-64 xl:h-72">
        {aboutProfile.photoSrc ? (
          <Image
            src={aboutProfile.photoSrc}
            alt={aboutProfile.photoAlt}
            width={448}
            height={597}
            sizes="(max-width: 640px) 176px, 208px"
            className="relative z-10 h-full w-full object-cover contrast-105 saturate-90"
            style={{ objectPosition: "50% 34%" }}
            priority={false}
            unoptimized
          />
        ) : (
          <div
            className="relative z-10 flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_24%,rgba(255,92,36,0.22),transparent_48%),linear-gradient(145deg,#202020,#101010)]"
            aria-label={aboutProfile.photoAlt}
            role="img"
          >
            <span className="font-mono text-5xl font-bold text-terminal-orange-soft">MA</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(180deg,transparent_62%,rgba(16,16,16,0.52))]" />
        <div className="absolute bottom-3 right-3 z-30 h-4 w-4 rounded-full border-2 border-panel-bg bg-terminal-green shadow-[0_0_18px_rgba(34,197,94,0.75)]" />
      </div>
    </div>
  );
}

function ProfileDetails() {
  return (
    <dl className="space-y-0 border-t border-white/[0.08] font-mono text-xs">
      <div className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-white/[0.06] py-2 sm:grid-cols-[7.5rem_1fr]">
        <dt className="text-zinc-600">OPERATOR</dt>
        <dd className="text-right font-bold uppercase tracking-[0.18em] text-terminal-orange-soft">
          {aboutProfile.operator}
        </dd>
      </div>
      <div className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-white/[0.06] py-2 sm:grid-cols-[7.5rem_1fr]">
        <dt className="text-zinc-600">ROLE</dt>
        <dd className="text-right text-syntax-blue">{aboutProfile.role}</dd>
      </div>
      <div className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-white/[0.06] py-2 sm:grid-cols-[7.5rem_1fr]">
        <dt className="text-zinc-600">LOCATION</dt>
        <dd className="flex items-center justify-end gap-2 text-zinc-200">
          <MapPin className="h-3.5 w-3.5 text-terminal-orange" aria-hidden="true" />
          {aboutProfile.location}
        </dd>
      </div>
      <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-2 sm:grid-cols-[7.5rem_1fr]">
        <dt className="text-zinc-600">STACK_SIGNAL</dt>
        <dd className="flex flex-wrap justify-end gap-1.5">
          {aboutProfile.focus.map((item) => (
            <span
              key={item}
              className="rounded-sm border border-terminal-orange/20 bg-terminal-orange/5 px-2 py-0.5 text-[10px] text-zinc-300"
            >
              {item}
            </span>
          ))}
        </dd>
      </div>
    </dl>
  );
}

function ProfileCard() {
  return (
    <article className="terminal-panel relative overflow-hidden rounded-md border-terminal-orange/20 p-3.5 sm:p-4 lg:col-span-5 xl:p-5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terminal-orange/70 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,96,38,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,96,38,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
          <span>profile.card</span>
          <span className="inline-flex items-center gap-2 text-terminal-green">
            <span className="h-2 w-2 rounded-full bg-terminal-green shadow-[0_0_14px_rgba(34,197,94,0.8)]" />
            {availabilityLabel}
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-4 sm:py-5 lg:py-4 xl:py-5">
          <ProfilePhoto />
        </div>

        <ProfileDetails />
      </div>
    </article>
  );
}

function TerminalProfileLog() {
  return (
    <div className="lg:col-span-7">
      <TerminalWindow title="user_profile.log" className="min-h-full">
        <div className="space-y-4">
          <div>
            <div className="mb-3 flex items-center gap-2 font-mono text-sm">
              <Terminal className="h-4 w-4 text-syntax-blue" aria-hidden="true" />
              <span className="text-syntax-blue">whoami</span>
            </div>
            <div className="border-l border-white/[0.08] pl-4">
              <h3 className="mb-2 font-sans text-lg font-bold text-white">
                {aboutTerminal.title}
              </h3>
              <p className="font-sans text-sm leading-6 text-zinc-300 md:text-[15px] md:leading-[1.65]">
                {aboutTerminal.bio}
              </p>
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 font-mono text-sm">
              <GitBranch className="h-4 w-4 text-terminal-orange" aria-hidden="true" />
              <span className="text-terminal-orange-soft">cat mission.txt</span>
            </div>
            <div className="border-l border-white/[0.08] pl-4">
              <p className="font-mono text-sm font-semibold leading-6 text-zinc-100">
                &ldquo;{aboutTerminal.mission}&rdquo;
              </p>
            </div>
          </div>

          <div className="grid gap-3 border-t border-white/[0.08] pt-4 sm:grid-cols-3">
            <div className="rounded-sm border border-white/[0.08] bg-bg-deep/70 p-3">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                gradua\u00e7\u00e3o
              </p>
              <p className="font-sans text-sm font-semibold text-zinc-200">
                {aboutTerminal.education}
              </p>
            </div>
            <div className="rounded-sm border border-white/[0.08] bg-bg-deep/70 p-3 sm:col-span-2">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                technical_focus
              </p>
              <p className="font-sans text-sm leading-6 text-zinc-300">
                {aboutTerminal.technicalFocus}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-sm border border-terminal-green/20 bg-terminal-green/[0.035] p-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 font-mono text-xs text-terminal-green">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              <span>MINDSET_ACTIVE</span>
            </div>
            <p className="font-mono text-sm font-semibold text-zinc-200">
              {aboutTerminal.mindset}
            </p>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}

function StatCard({ stat }: { stat: AboutStat }) {
  const Icon = metricIcons[stat.icon];

  return (
    <div className="group relative overflow-hidden rounded-md border border-white/[0.08] bg-panel-bg/90 p-3.5 shadow-[0_14px_42px_rgba(0,0,0,0.35)] transition duration-300 hover:border-terminal-orange/35 hover:bg-panel-light/80">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terminal-orange/50 to-transparent opacity-0 transition group-hover:opacity-100" />
      <dt className="mb-2.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
        <Icon className="h-4 w-4 text-terminal-orange" aria-hidden="true" />
        {stat.label}
      </dt>
      <dd>
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-2xl font-black text-white md:text-[1.65rem]">
            {stat.value}
          </span>
          <span className="font-mono text-xs font-bold uppercase text-zinc-600">{stat.unit}</span>
        </div>
        <p className="mt-1.5 text-sm leading-5 text-zinc-400">{stat.description}</p>
      </dd>
    </div>
  );
}

function StatsGrid() {
  return (
    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-12">
      {aboutStats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </dl>
  );
}

export function AboutTerminal() {
  return (
    <SectionShell
      id="about"
      title="# About.system"
      subtitle="Perfil t\u00e9cnico, contexto de atua\u00e7\u00e3o e m\u00e9tricas edit\u00e1veis em uma vis\u00e3o de terminal."
      technicalTag="whoami"
      className="overflow-x-hidden py-8 sm:py-10 lg:py-10 xl:py-12"
      headerClassName="mb-6 md:mb-7 lg:mb-7"
    >
      <div className="relative">
        <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-terminal-orange/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-px bg-terminal-orange/15" />

        <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          <ProfileCard />
          <TerminalProfileLog />
          <StatsGrid />
        </div>
      </div>
    </SectionShell>
  );
}
