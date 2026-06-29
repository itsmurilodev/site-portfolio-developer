export const siteConfig = {
  name: "Murilo Alves",
  brandName: "Murilo Dev",
  title: "Murilo Alves (Murilo Dev) | Desenvolvedor Web, Backend & DevOps",
  role: "Desenvolvedor Web & Backend | DevOps e Automação",
  area: "Desenvolvimento Web, Backend, DevOps, Infraestrutura e Automações",
  education: "Graduando em Engenharia de Software",
  profileBio: "Sou Murilo Alves (Murilo Dev), graduando em Engenharia de Software e desenvolvedor focado em construir sistemas robustos e eficientes. Minha atuação une desenvolvimento web moderno, engenharia backend, infraestrutura cloud/VPS, automações de processos e cultura DevOps. Especialista em transformar desafios técnicos e regras de negócio complexas em soluções escaláveis e prontas para produção.",
  mission: "Desenvolver sistemas web de alta performance, seguros e escaláveis, integrando backend moderno, infraestrutura confiável e automação de processos.",
  tagline: "Aprender construindo. Evoluir entregando. Documentar o caminho.",
  description: "Portfólio de Murilo Alves (Murilo Dev) — Desenvolvedor Web especializado em Backend, PHP, React, Node, Docker e Automações. Disponível para contratação e projetos.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "itsmurilo.dev@gmail.com",
  whatsapp: "https://wa.me/5551994028000",
  github: "https://github.com/itsmuriloa",
  linkedin: "https://www.linkedin.com/in/itsmuriloa/",
  instagram: "https://www.instagram.com/asyncstudiodev",
  location: "Brasil / remoto",
  status: "available" as const,
};

export type SiteConfig = typeof siteConfig;
