import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "orange" | "green" | "purple" | "none";
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
    orange: "hover:shadow-[0_0_30px_rgba(255,92,36,0.14)] hover:border-terminal-orange/40",
    green: "hover:shadow-[0_0_30px_rgba(34,197,94,0.12)] hover:border-terminal-green/35",
    purple: "hover:shadow-[0_0_30px_rgba(192,132,252,0.12)] hover:border-syntax-purple/35",
    none: "",
  };

  return (
    <div
      className={cn(
        "relative rounded-md border border-white/[0.08] bg-panel-bg/80 p-6 transition-all duration-300 shadow-[0_12px_34px_rgba(0,0,0,0.44)]",
        hoverEffect && "hover:-translate-y-1 hover:bg-panel-light/80",
        glowColor !== "none" && glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {/* Subtle top-light gradient line to simulate light hitting metal/glass edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terminal-orange/25 to-transparent" />
      {children}
    </div>
  );
}
