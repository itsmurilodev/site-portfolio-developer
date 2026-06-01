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
      bg: "bg-syntax-yellow/10",
      text: "text-syntax-yellow",
      border: "border-syntax-yellow/30",
      glow: "shadow-[0_0_12px_rgba(250,204,21,0.12)]",
    },
    practicing: {
      bg: "bg-syntax-blue/10",
      text: "text-syntax-blue",
      border: "border-syntax-blue/25",
      glow: "shadow-[0_0_12px_rgba(96,165,250,0.12)]",
    },
    building: {
      bg: "bg-terminal-green/10",
      text: "text-terminal-green",
      border: "border-terminal-green/25",
      glow: "shadow-[0_0_12px_rgba(34,197,94,0.12)]",
    },
    improving: {
      bg: "bg-syntax-purple/10",
      text: "text-syntax-purple",
      border: "border-syntax-purple/25",
      glow: "shadow-[0_0_12px_rgba(192,132,252,0.12)]",
    },
  };

  const style = stylesMap[status] || stylesMap.learning;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-sm border transition-all duration-300",
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
