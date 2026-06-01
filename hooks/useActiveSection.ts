"use client";

import { useEffect, useState } from "react";
import type { NavigationLink } from "@/lib/navigation";

export function useActiveSection(links: NavigationLink[]) {
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window === "undefined") return links[0]?.id ?? "";
    const hashId = window.location.hash.replace("#", "");
    return links.some((link) => link.id === hashId) ? hashId : links[0]?.id ?? "";
  });

  useEffect(() => {
    if (!links.length || typeof window === "undefined") return;

    const sectionIds = links.map((link) => link.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const setSectionFromHash = () => {
      const hashId = window.location.hash.replace("#", "");
      if (links.some((link) => link.id === hashId)) setActiveSection(hashId);
    };

    const findActiveSection = () => {
      const viewportAnchor = window.innerHeight * 0.42;

      const current = sections
        .map((section) => {
          const rect = section.getBoundingClientRect();
          return {
            id: section.id,
            top: rect.top,
            bottom: rect.bottom,
            distance: Math.abs(rect.top - viewportAnchor),
          };
        })
        .filter((section) => section.top <= viewportAnchor && section.bottom >= viewportAnchor)
        .sort((a, b) => a.distance - b.distance)[0];

      if (current) {
        setActiveSection(current.id);
        return;
      }

      const fallback = sections
        .map((section) => {
          const rect = section.getBoundingClientRect();
          return { id: section.id, distance: Math.abs(rect.top - viewportAnchor) };
        })
        .sort((a, b) => a.distance - b.distance)[0];

      if (fallback) setActiveSection(fallback.id);
    };

    const observer = new IntersectionObserver(findActiveSection, {
      root: null,
      rootMargin: "-22% 0px -46% 0px",
      threshold: [0, 0.15, 0.35, 0.6, 0.85],
    });

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", setSectionFromHash);
    setSectionFromHash();
    findActiveSection();

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", setSectionFromHash);
    };
  }, [links]);

  return { activeSection, setActiveSection };
}
