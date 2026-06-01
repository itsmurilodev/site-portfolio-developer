import React from "react";
import { cn } from "@/lib/utils";
import { SkillStatus } from "@/data/skills";

interface BadgeProps {
  status: SkillStatus;
  className?: string;
  children?: React.ReactNode;
}

export function Badge({ status, className, children }: BadgeProps) {
  const stylesMap: Record<SkillStatus, { bg: string; text: string; border: string; glow: string }> = {
    learning: {
      bg: "bg-amber-500/10",
      text: "text-amber-400",
      border: "border-amber-500/30",
      glow: "shadow-[0_0_12px_rgba(245,158,11,0.15)]",
    },
    practicing: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      border: "border-blue-500/30",
      glow: "shadow-[0_0_12px_rgba(59,130,246,0.15)]",
    },
    building: {
      bg: "bg-cyan-500/10",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      glow: "shadow-[0_0_12px_rgba(6,182,212,0.15)]",
    },
    improving: {
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      border: "border-purple-500/30",
      glow: "shadow-[0_0_12px_rgba(139,92,246,0.15)]",
    },
  };

  const style = stylesMap[status] || stylesMap.learning;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-md border backdrop-blur-sm transition-all duration-300",
        style.bg,
        style.text,
        style.border,
        style.glow,
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children || status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
