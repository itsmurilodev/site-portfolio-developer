import React from "react";
import { Footer } from "@/components/layout/Footer";
import { IdentityDock } from "@/components/navigation/IdentityDock";
import { MobileBottomNav } from "@/components/navigation/MobileBottomNav";
import { SectionRail } from "@/components/navigation/SectionRail";
import { Hero } from "@/components/sections/Hero";
import { AboutTerminal } from "@/components/sections/AboutTerminal";
import { SkillsSystem } from "@/components/sections/SkillsSystem";
import { CareerGitLog } from "@/components/sections/CareerGitLog";
import { ProjectsRepositories } from "@/components/sections/ProjectsRepositories";
import { AsyncStudio } from "@/components/sections/AsyncStudio";
import { ContactPanel } from "@/components/sections/ContactPanel";

// Dynamic load-once-per-session boot loader (Client Component)
import { BootOverlay } from "@/components/interactive/BootOverlay";

// On-demand lazy-loaded console command palette wrapper (Client Component)
import { PaletteWrapper } from "@/components/interactive/PaletteWrapper";

import { siteConfig } from "@/lib/site";

export default function Home() {
  // Pre-compiled JSON-LD schemas for Search Engine crawlers
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    "name": siteConfig.name,
    "jobTitle": "Software Developer in Training",
    "description": siteConfig.description,
    "url": siteConfig.url,
    "location": {
      "@type": "Place",
      "name": siteConfig.location
    },
    "sameAs": [
      siteConfig.linkedin,
      siteConfig.github
    ],
    "knowsAbout": [
      "Web Development",
      "React",
      "PHP",
      "MySQL",
      "Docker",
      "Linux",
      "VPS",
      "n8n",
      "Automação",
      "DevOps"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Engenharia de Software"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    "name": `${siteConfig.name} Portfolio`,
    "url": siteConfig.url,
    "description": siteConfig.description
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.instagram}/#organization`,
    "name": "Async Studio",
    "url": siteConfig.instagram,
    "description": "Estúdio de desenvolvimento de software focado em landing pages, web apps, SaaS e automações.",
    "founder": {
      "@type": "Person",
      "name": siteConfig.name
    }
  };

  return (
    <>
      {/* Search Engine structured schemas payloads injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Short visual boot screen logs loading overlay */}
      <BootOverlay />

      {/* Ctrl/Cmd + K terminal console palette loaded on-demand */}
      <PaletteWrapper />

      {/* Contextual navigation */}
      <IdentityDock />
      <SectionRail />
      <MobileBottomNav />

      <main className="flex-1 w-full relative">
        {/* Subtle Cybernetic grid overlay layered in back */}
        <div className="absolute inset-0 cyber-grid pointer-events-none z-0" />
        
        {/* Sections (Server Components Rendering) */}
        <Hero />
        <AboutTerminal />
        <SkillsSystem />
        <CareerGitLog />
        <ProjectsRepositories />
        <AsyncStudio />
        <ContactPanel />
      </main>

      <Footer />
    </>
  );
}
