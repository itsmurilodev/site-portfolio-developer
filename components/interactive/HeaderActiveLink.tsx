"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface HeaderActiveLinkProps {
  navLinks: Array<{ label: string; href: string }>;
}

export function HeaderActiveLink({ navLinks }: HeaderActiveLinkProps) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for headers

      // Find which section is currently active
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
      {navLinks.map((link) => {
        const id = link.href.substring(1);
        const isActive = activeSection === id;

        return (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "px-3.5 py-1.5 font-mono text-xs rounded-md border transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none",
              isActive
                ? "text-cyan-400 border-zinc-800 bg-zinc-900/50 font-bold shadow-[0_0_12px_rgba(6,182,212,0.05)]"
                : "text-zinc-400 border-transparent hover:text-zinc-200 hover:bg-zinc-900/30"
            )}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
