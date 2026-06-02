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
import { BootOverlay } from "@/components/interactive/BootOverlay";
import { PaletteWrapper } from "@/components/interactive/PaletteWrapper";
import { siteConfig } from "@/lib/site";
import { buildHomeStructuredData } from "@/lib/structuredData";

export default function Home() {
  const structuredDataSchemas = buildHomeStructuredData(siteConfig);

  return (
    <>
      {structuredDataSchemas.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <BootOverlay />
      <PaletteWrapper />
      <IdentityDock />
      <SectionRail />
      <MobileBottomNav />

      <main className="flex-1 w-full relative">
        <div className="absolute inset-0 cyber-grid pointer-events-none z-0" />

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
