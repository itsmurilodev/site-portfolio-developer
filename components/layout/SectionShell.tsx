import React from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id: string;
  title: string;
  subtitle?: string;
  technicalTag?: string; // e.g. whoami, skills.system.json, repositories
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
}

export function SectionShell({
  children,
  id,
  title,
  subtitle,
  technicalTag,
  className,
  containerClassName,
  headerClassName,
  contentClassName,
  ...props
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative min-h-[100svh] scroll-mt-0 border-b border-white/[0.07] py-10 sm:py-12 lg:py-14 xl:py-16",
        className
      )}
      {...props}
    >
      {/* Container sizing */}
      <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl", containerClassName)}>
        
        {/* Header Block */}
        <div className={cn("mb-7 md:mb-9 lg:mb-10", headerClassName)}>
          {technicalTag && (
            <span className="inline-block font-mono text-[10px] uppercase tracking-wider text-terminal-orange-soft mb-2 border border-terminal-orange/25 bg-terminal-orange/5 px-2.5 py-0.5 rounded-sm select-none">
              $ {technicalTag}
            </span>
          )}
          
          <h2 className="mb-2 text-2xl font-extrabold text-white md:text-3xl">
            {title}
          </h2>
          
          {subtitle && (
            <p className="max-w-2xl font-sans text-sm leading-relaxed text-zinc-400 md:text-[15px]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Section Contents */}
        <div className={cn("relative z-10", contentClassName)}>{children}</div>
      </div>
    </section>
  );
}
