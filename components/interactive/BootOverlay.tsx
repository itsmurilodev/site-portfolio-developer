"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// Declared outside to prevent effect dependency warnings
const rawLogs = [
  "loading murilo-kernel-v1.0.0...",
  "mounting data/skills.system.json... [ok]",
  "initializing virtual backend routers... [ok]",
  "spinning up local nginx container... [ok]",
  "establishing automated n8n workflows... [ok]",
  "checking connection status... [online]",
  "welcome to murilo.dev - boot successful!",
];

export function BootOverlay() {
  const [visible, setVisible] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Session Storage check: if already booted in this session, skip entirely
    try {
      const hasBooted = sessionStorage.getItem("murilo-booted");
      if (hasBooted === "true") {
        const t = setTimeout(() => setVisible(false), 0);
        return () => clearTimeout(t);
      }
    } catch {
      // Fail-silent if cookies/sessionStorage are blocked
    }

    // 2. Accessibility check: if the user prefers reduced motion, skip boot immediately
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const t = setTimeout(() => setVisible(false), 0);
      return () => clearTimeout(t);
    }

    // 3. Animate progress bar & print logs sequentially
    let currentLogIndex = 0;
    const logInterval = setInterval(() => {
      if (currentLogIndex < rawLogs.length) {
        const nextLog = rawLogs[currentLogIndex];
        if (nextLog !== undefined) {
          setLogs((prev) => [...prev, nextLog]);
        }
        currentLogIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 100);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Wait 250ms and fade out
          setTimeout(() => {
            try {
              sessionStorage.setItem("murilo-booted", "true");
            } catch {
              // Fail-silent
            }
            setVisible(false);
          }, 250);
          return 100;
        }
        return prev + 12;
      });
    }, 80);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // Handler to skip boot sequence instantly
  const handleSkip = () => {
    try {
      sessionStorage.setItem("murilo-booted", "true");
    } catch {
      // Fail-silent
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Inicializando Sistema"
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07050f] p-4 transition-all duration-500 ease-out select-none",
        !visible ? "opacity-0 pointer-events-none scale-98" : "opacity-100"
      )}
    >
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07050f]/80 to-[#07050f] pointer-events-none" />

      {/* Boot Card */}
      <div className="relative w-full max-w-md rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-6 backdrop-blur-md shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

        {/* Logo and Status */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-semibold tracking-wide">
            <Cpu className="w-4.5 h-4.5 animate-spin" style={{ animationDuration: "3s" }} />
            <span>MURILO_OS v1.0.0</span>
          </div>
          
          <button
            onClick={handleSkip}
            className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono text-zinc-500 hover:text-zinc-300 bg-zinc-900 border border-zinc-800 rounded transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-cyan-500"
            aria-label="Pular animação de inicialização"
          >
            <Play className="w-2.5 h-2.5" />
            <span>Pular (Esc)</span>
          </button>
        </div>

        {/* Simulating Output Logs */}
        <div className="h-36 overflow-y-auto font-mono text-[11px] leading-relaxed text-zinc-400 border border-zinc-900 bg-zinc-950/50 rounded p-3 mb-6 flex flex-col gap-1 select-text scrollbar-thin scrollbar-thumb-zinc-800">
          {logs.map((log, index) => {
            if (!log) return null;
            return (
              <div key={index} className="flex gap-1.5 items-start">
                <span className="text-zinc-700 select-none">&gt;</span>
                <span className={cn(log.includes("[ok]") && "text-emerald-400", log.includes("[online]") && "text-cyan-400")}>
                  {log}
                </span>
              </div>
            );
          })}
          <div className="w-1.5 h-3.5 bg-cyan-400 animate-pulse ml-0.5 mt-0.5" />
        </div>

        {/* Loading progress bar */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between font-mono text-[10px] text-zinc-500">
            <span>inicializando módulos</span>
            <span className="text-cyan-400 font-semibold">{Math.min(progress, 100)}%</span>
          </div>
          
          <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/40">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 rounded-full transition-all duration-70 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
