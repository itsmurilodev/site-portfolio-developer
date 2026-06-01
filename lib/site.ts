export const siteConfig = {
  name: "Murilo Alves",
  title: "Murilo Alves | Desenvolvedor Web em formação",
  role: "Desenvolvedor Web em formação | Backend, DevOps e Automação",
  area: "Desenvolvimento Web, Backend, DevOps em formação, Infraestrutura e Automações",
  education: "Graduando em Engenharia de Software",
  profileBio: "Sou o Murilo Alves, graduando em Engenharia de Software e profissional de TI em desenvolvimento. Tenho perfil prático, curioso e focado em resolver problemas reais através de tecnologia. Meu caminho mistura desenvolvimento web, backend, infraestrutura, automações e DevOps em formação. Gosto de entender como as coisas funcionam por baixo dos panos: servidor, DNS, deploy, banco de dados, Docker, Nginx, e-mail corporativo, integrações e fluxos automatizados.",
  mission: "Criar soluções web úteis, bem organizadas e preparadas para evoluir, unindo desenvolvimento, infraestrutura, automação e documentação técnica.",
  tagline: "Aprender construindo. Evoluir entregando. Documentar o caminho.",
  description: "Portfólio de Murilo Alves, Desenvolvedor Web em formação com foco em Backend, DevOps e Automação.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "itsmurilo.dev@gmail.com", // Placeholder editável
  whatsapp: "https://wa.me/5551994028000", // Placeholder editável com número de telefone fictício
  github: "https://github.com/itsmuriloa", // Placeholder editável
  linkedin: "https://www.linkedin.com/in/itsmuriloa/",
  instagram: "https://www.instagram.com/asyncstudiodev", // Async Studio Instagram
  location: "Brasil / remoto",
  status: "available" as const, // available, busy, offline
};

export type SiteConfig = typeof siteConfig;
