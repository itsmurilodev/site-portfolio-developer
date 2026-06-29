import type { SiteConfig } from "@/lib/site";

export function buildHomeStructuredData(siteConfig: SiteConfig) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    alternateName: ["Murilo Dev", "itsmurilo", "Murilo Alves Dev"],
    jobTitle: "Desenvolvedor Web & Backend",
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    location: {
      "@type": "Place",
      name: siteConfig.location,
    },
    sameAs: [siteConfig.linkedin, siteConfig.github, siteConfig.instagram],
    knowsAbout: [
      "Desenvolvimento Web",
      "Engenharia Backend",
      "React",
      "Next.js",
      "PHP",
      "Node.js",
      "MySQL",
      "Docker",
      "Linux",
      "VPS",
      "n8n",
      "Automação de Processos",
      "DevOps",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Engenharia de Software",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: `${siteConfig.name} Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.instagram}/#organization`,
    name: "Async Studio",
    url: siteConfig.instagram,
    description:
      "Est\u00fadio de desenvolvimento de software focado em landing pages, web apps, SaaS e automa\u00e7\u00f5es.",
    founder: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return [personSchema, websiteSchema, organizationSchema];
}
