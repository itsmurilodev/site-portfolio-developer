import React from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title: string;
  className?: string;
  glow?: boolean;
}

export function TerminalWindow({
  children,
  title,
  className,
  glow = true,
  ...props
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border border-zinc-800/80 bg-zinc-950/60 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300",
        glow && "hover:shadow-[0_12px_50px_rgba(6,182,212,0.08)]",
        className
      )}
      {...props}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-800/60 select-none">
        {/* Left Mac Window Traffic Lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/30" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#df9b14]/30" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1a9c2b]/30" />
        </div>
        
        {/* Title */}
        <div className="text-xs font-mono font-medium text-zinc-400 truncate max-w-[60%] flex items-center gap-1.5">
          <span className="text-zinc-600 text-[10px]">~/murilo/portfolio</span>
          <span className="text-zinc-500">/</span>
          <span className="text-cyan-400">{title}</span>
        </div>

        {/* Right side info spacer */}
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-600">
          <span>UTF-8</span>
        </div>
      </div>

      {/* Main Terminal Window Body */}
      <div className="flex-1 p-5 font-mono text-sm leading-relaxed text-zinc-300 overflow-auto">
        {children}
      </div>
    </div>
  );
}
