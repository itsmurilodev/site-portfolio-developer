"use client";

import React, { useEffect, useState } from "react";
import { Cpu, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const bootSessionKey = "murilo-booted";

const bootLogMessages = [
  "loading murilo-kernel-v1.0.0...",
  "mounting data/skills.system.json... [ok]",
  "initializing virtual backend routers... [ok]",
  "spinning up local nginx container... [ok]",
  "establishing automated n8n workflows... [ok]",
  "checking connection status... [online]",
  "welcome to murilo.dev - boot successful!",
];

function hasCompletedBootSequence() {
  try {
    return sessionStorage.getItem(bootSessionKey) === "true";
  } catch {
    return false;
  }
}

function markBootSequenceAsCompleted() {
  try {
    sessionStorage.setItem(bootSessionKey, "true");
  } catch {
    return;
  }
}

export function BootOverlay() {
  const [visible, setVisible] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // sessionStorage and reduced motion are checked in the browser only.
    if (hasCompletedBootSequence()) {
      const hideTimer = setTimeout(() => setVisible(false), 0);
      return () => clearTimeout(hideTimer);
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const hideTimer = setTimeout(() => setVisible(false), 0);
      return () => clearTimeout(hideTimer);
    }

    let currentLogIndex = 0;
    const logInterval = setInterval(() => {
      if (currentLogIndex < bootLogMessages.length) {
        const nextLogMessage = bootLogMessages[currentLogIndex];
        if (nextLogMessage !== undefined) {
          setLogs((previousLogs) => [...previousLogs, nextLogMessage]);
        }
        currentLogIndex++;
        return;
      }

      clearInterval(logInterval);
    }, 100);

    const progressInterval = setInterval(() => {
      setProgress((previousProgress) => {
        if (previousProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            markBootSequenceAsCompleted();
            setVisible(false);
          }, 250);
          return 100;
        }

        return previousProgress + 12;
      });
    }, 80);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const handleSkip = () => {
    markBootSequenceAsCompleted();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Inicializando Sistema"
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-main p-4 transition-all duration-500 ease-out select-none",
        !visible ? "opacity-0 pointer-events-none scale-98" : "opacity-100"
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,96,38,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,96,38,0.06)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-bg-main/80 to-bg-deep pointer-events-none" />

      <div className="relative w-full max-w-md rounded-md border border-white/[0.08] bg-bg-deep/85 p-6 backdrop-blur-md shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terminal-orange/30 to-transparent" />

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-terminal-orange-soft font-mono text-sm font-semibold tracking-wide">
            <Cpu className="w-4.5 h-4.5 animate-spin" style={{ animationDuration: "3s" }} />
            <span>MURILO_OS v1.0.0</span>
          </div>

          <button
            onClick={handleSkip}
            className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono text-zinc-500 hover:text-terminal-orange-soft bg-panel-bg border border-white/[0.08] rounded-sm transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-terminal-orange"
            aria-label="Pular anima\u00e7\u00e3o de inicializa\u00e7\u00e3o"
          >
            <Play className="w-2.5 h-2.5" />
            <span>Pular (Esc)</span>
          </button>
        </div>

        <div className="h-36 overflow-y-auto font-mono text-[11px] leading-relaxed text-zinc-400 border border-white/[0.08] bg-editor-bg rounded-sm p-3 mb-6 flex flex-col gap-1 select-text scrollbar-thin scrollbar-thumb-zinc-800">
          {logs.map((log, index) => {
            if (!log) return null;

            return (
              <div key={`${log}-${index}`} className="flex gap-1.5 items-start">
                <span className="text-zinc-700 select-none">&gt;</span>
                <span
                  className={cn(
                    log.includes("[ok]") && "text-emerald-400",
                    log.includes("[online]") && "text-terminal-orange-soft"
                  )}
                >
                  {log}
                </span>
              </div>
            );
          })}
          <div className="w-1.5 h-3.5 bg-terminal-orange animate-pulse ml-0.5 mt-0.5" />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between font-mono text-[10px] text-zinc-500">
            <span>inicializando m\u00f3dulos</span>
            <span className="text-terminal-orange-soft font-semibold">
              {Math.min(progress, 100)}%
            </span>
          </div>

          <div className="w-full h-1.5 bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800/40">
            <div
              className="h-full bg-gradient-to-r from-terminal-orange via-syntax-yellow to-terminal-green rounded-sm transition-all duration-75 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
