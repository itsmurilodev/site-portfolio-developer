import { projectsData } from "./projects";
import { profileData } from "./profile";

export const aboutProfile = {
  photoSrc: "/ImagemEu.jpg",
  photoAlt: "Foto de Murilo Alves",
  operator: profileData.name,
  role: profileData.role,
  location: profileData.location,
  status: "OPEN",
  focus: ["Backend", "DevOps", "Automação", "Infra"],
};

export const aboutTerminal = {
  title: "Quem Sou Eu",
  bio: profileData.bio,
  mission: profileData.mission,
  mindset: profileData.tagline,
  education: profileData.education,
  technicalFocus:
    "Backend web, infraestrutura, deploy, banco de dados, integrações, documentação técnica e automações.",
};

export const aboutStats = [
  {
    label: "Experience",
    value: "Em formação",
    unit: "dev",
    description: "TI + desenvolvimento web em evolução contínua",
    icon: "server",
  },
  {
    label: "Projects",
    value: String(projectsData.length),
    unit: "repo",
    description: "Projetos de estudo, privados e experiência prática",
    icon: "code",
  },
  {
    label: "Energético",
    value: "∞",
    unit: "boost",
    description: "Energia em loop para estudar, construir e entregar.",
    icon: "coffee",
  },
] as const;
