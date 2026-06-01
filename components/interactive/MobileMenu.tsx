"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  navLinks: Array<{ label: string; href: string }>;
}

export function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer if user presses Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Trigger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-sm border border-white/[0.1] bg-bg-deep text-zinc-400 hover:text-terminal-orange-soft hover:border-terminal-orange/40 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-terminal-orange"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        aria-label="Abrir menu de navegação"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Backdrop Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-bg-deep/85 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
      />

      {/* Drawer Body Panel */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu móvel"
        className={cn(
          "fixed right-0 top-0 bottom-0 z-50 w-72 max-w-[85vw] border-l border-white/[0.08] bg-bg-deep/95 p-6 shadow-2xl backdrop-blur-md transition-transform duration-300 ease-out flex flex-col justify-between",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div>
          {/* Header Area */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
            <div className="flex items-center gap-2 text-terminal-orange-soft font-mono text-sm font-semibold">
              <Terminal className="w-4 h-4" />
              <span>Murilo.dev</span>
            </div>
            
            <button
              onClick={closeMenu}
              className="p-2 rounded-sm text-zinc-500 hover:text-terminal-orange-soft hover:bg-panel-bg border border-transparent hover:border-terminal-orange/30 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-terminal-orange"
              aria-label="Fechar menu de navegação"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-3 rounded-sm border border-transparent font-mono text-sm text-zinc-400 hover:text-terminal-orange-soft hover:bg-panel-bg hover:border-terminal-orange/25 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-terminal-orange outline-none"
              >
                <span className="text-[10px] text-zinc-600 font-bold">&gt;</span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Area */}
        <div className="border-t border-zinc-900 pt-4 text-center">
          <div className="flex items-center justify-center gap-1.5 font-mono text-[10px] text-zinc-600">
            <Cpu className="w-3.5 h-3.5" />
            <span>status: available</span>
          </div>
        </div>
      </div>
    </div>
  );
}
