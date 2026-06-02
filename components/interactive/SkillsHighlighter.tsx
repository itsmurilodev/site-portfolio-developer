"use client";

import React, { useEffect, useRef } from "react";

const skillKeyByCardIndex: Record<string, string> = {
  "0": "web_development",
  "1": "backend_database",
  "2": "infrastructure_devops",
  "3": "automation_tools",
};

const cardIndexBySkillKey = Object.fromEntries(
  Object.entries(skillKeyByCardIndex).map(([cardIndex, skillKey]) => [skillKey, cardIndex])
);

const activeLineClasses = [
  "bg-terminal-orange/10",
  "border-l-2",
  "border-terminal-orange",
  "-ml-[2px]",
];

export function SkillsHighlighter({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const clearHighlights = () => {
      container.querySelectorAll("[data-pillar-card]").forEach((element) => {
        element.classList.remove("border-active-glow");
      });
      container.querySelectorAll("[data-line-key]").forEach((element) => {
        element.classList.remove(...activeLineClasses);
      });
    };

    const highlightPillar = (skillKey: string | null) => {
      if (!skillKey) {
        clearHighlights();
        return;
      }

      const activeCardIndex = cardIndexBySkillKey[skillKey];

      container.querySelectorAll("[data-pillar-card]").forEach((element) => {
        const card = element as HTMLElement;
        const cardIndex = card.getAttribute("data-pillar-card");

        if (cardIndex === activeCardIndex) {
          card.classList.add("border-active-glow");
        } else {
          card.classList.remove("border-active-glow");
        }
      });

      container.querySelectorAll("[data-line-key]").forEach((element) => {
        const line = element as HTMLElement;
        const lineKey = line.getAttribute("data-line-key");

        if (lineKey === skillKey) {
          line.classList.add(...activeLineClasses);
        } else {
          line.classList.remove(...activeLineClasses);
        }
      });
    };

    const highlightPillarByIndex = (cardIndex: string | null) => {
      highlightPillar(cardIndex ? skillKeyByCardIndex[cardIndex] : null);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const jsonKeyElement = target.closest("[data-json-key]") as HTMLElement | null;
      const cardElement = target.closest("[data-pillar-card]") as HTMLElement | null;

      if (jsonKeyElement) {
        highlightPillar(jsonKeyElement.getAttribute("data-json-key"));
        return;
      }

      if (cardElement) {
        highlightPillarByIndex(cardElement.getAttribute("data-pillar-card"));
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const relatedTarget = event.relatedTarget as HTMLElement | null;
      if (!relatedTarget || !container.contains(relatedTarget)) {
        clearHighlights();
      }
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
