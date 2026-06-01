import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "purple" | "cyan" | "blue" | "none";
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  glowColor = "none",
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  const glowStyles = {
    purple: "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:border-purple-500/40",
    cyan: "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/40",
    blue: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/40",
    none: "",
  };

  return (
    <div
      className={cn(
        "relative rounded-xl border border-zinc-800/80 bg-zinc-950/45 p-6 backdrop-blur-md transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)]",
        hoverEffect && "hover:-translate-y-1 hover:bg-zinc-950/60",
        glowColor !== "none" && glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {/* Subtle top-light gradient line to simulate light hitting metal/glass edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700/20 to-transparent" />
      {children}
    </div>
  );
}
