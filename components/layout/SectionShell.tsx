import React from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id: string;
  title: string;
  subtitle?: string;
  technicalTag?: string; // e.g. whoami, skills.system.json, repositories
  className?: string;
}

export function SectionShell({
  children,
  id,
  title,
  subtitle,
  technicalTag,
  className,
  ...props
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 border-b border-white/[0.07] scroll-mt-8 relative",
        className
      )}
      {...props}
    >
      {/* Container sizing */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mb-12 md:mb-16">
          {technicalTag && (
            <span className="inline-block font-mono text-[10px] uppercase tracking-wider text-terminal-orange-soft mb-2 border border-terminal-orange/25 bg-terminal-orange/5 px-2.5 py-0.5 rounded-sm select-none">
              $ {technicalTag}
            </span>
          )}
          
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-sm md:text-base text-zinc-400 font-sans max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Section Contents */}
        <div className="relative z-10">{children}</div>
      </div>
    </section>
  );
}
