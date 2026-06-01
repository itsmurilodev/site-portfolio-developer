"use client";

import React, { useEffect, useRef } from "react";

export function SkillsHighlighter({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Attach delegated mouse event listeners
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // 1. Hovering on a JSON key overlay
      const jsonKeyElement = target.closest("[data-json-key]") as HTMLElement;
      if (jsonKeyElement) {
        const key = jsonKeyElement.getAttribute("data-json-key");
        highlightPillar(key);
        return;
      }

      // 2. Hovering on a pilar card
      const cardElement = target.closest("[data-pillar-card]") as HTMLElement;
      if (cardElement) {
        const cardIndex = cardElement.getAttribute("data-pillar-card");
        highlightPillarByIndex(cardIndex);
        return;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      // If we exit the container, clear all highlights
      const relatedTarget = e.relatedTarget as HTMLElement;
      if (!relatedTarget || !container.contains(relatedTarget)) {
        clearHighlights();
      }
    };

    const highlightPillar = (key: string | null) => {
      if (!key) {
        clearHighlights();
        return;
      }
      
      const indexMap: Record<string, string> = {
        web_development: "0",
        backend_database: "1",
        infrastructure_devops: "2",
        automation_tools: "3",
      };

      const activeIndex = indexMap[key];
      
      // Update DOM classes for cards
      container.querySelectorAll("[data-pillar-card]").forEach((el) => {
        const targetCard = el as HTMLElement;
        const currentIdx = targetCard.getAttribute("data-pillar-card");
        
        if (currentIdx === activeIndex) {
          targetCard.classList.add("border-active-glow");
        } else {
          targetCard.classList.remove("border-active-glow");
        }
      });

      // Update line highlights in the JSON CodeBlock
      container.querySelectorAll("[data-line-key]").forEach((el) => {
        const targetLine = el as HTMLElement;
        const currentKey = targetLine.getAttribute("data-line-key");
        
        if (currentKey === key) {
          targetLine.classList.add("bg-terminal-orange/10", "border-l-2", "border-terminal-orange", "-ml-[2px]");
        } else {
          targetLine.classList.remove("bg-terminal-orange/10", "border-l-2", "border-terminal-orange", "-ml-[2px]");
        }
      });
    };

    const highlightPillarByIndex = (index: string | null) => {
      if (!index) {
        clearHighlights();
        return;
      }

      const reverseMap: Record<string, string> = {
        "0": "web_development",
        "1": "backend_database",
        "2": "infrastructure_devops",
        "3": "automation_tools",
      };

      const matchedKey = reverseMap[index];
      highlightPillar(matchedKey);
    };

    const clearHighlights = () => {
      container.querySelectorAll("[data-pillar-card]").forEach((el) => {
        el.classList.remove("border-active-glow");
      });
      container.querySelectorAll("[data-line-key]").forEach((el) => {
        el.classList.remove("bg-terminal-orange/10", "border-l-2", "border-terminal-orange", "-ml-[2px]");
      });
    };

    container.addEventListener("mouseover", handleMouseOver);
    container.addEventListener("mouseout", handleMouseOut);

    return () => {
      container.removeEventListener("mouseover", handleMouseOver);
      container.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {children}
    </div>
  );
}
