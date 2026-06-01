export interface CommitItem {
  hash: string;
  date: string;
  subject: string;
  author: string;
  body: string;
  tags: string[];
}

export const timelineData: CommitItem[] = [
  {
    hash: "f83a2d5",
    date: "Fev 2024",
    subject: "Base em TI e Engenharia de Software",
    author: "Murilo Alves <itsmurilo.dev@gmail.com>",
    body: "Início da graduação em Engenharia de Software. Foco absoluto na compreensão de fundamentos estáveis de computação, arquitetura de sistemas, algoritmos básicos, modelagem de dados e pensamento analítico para resolução de problemas estruturados.",
    tags: ["Engenharia de Software", "Algoritmos", "Modelagem", "Fundamentos TI"],
  },
  {
    hash: "c71e8b2",
    date: "Mai 2024",
    subject: "Desenvolvimento Web na prática",
    author: "Murilo Alves <itsmurilo.dev@gmail.com>",
    body: "Domínio prático de interfaces modernas construindo projetos com HTML, CSS, JavaScript nativo e componentização estruturada. Foco em layouts responsivos que se adaptam fluidamente a qualquer resolução de tela (mobile a 4K) e boas práticas de semântica.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Componentização"],
  },
  {
    hash: "9d6b4f1",
    date: "Ago 2024",
    subject: "Backend e banco de dados",
    author: "Murilo Alves <itsmurilo.dev@gmail.com>",
    body: "Entrando por baixo do capô do desenvolvimento de software. Criação de CRUDs robustos com PHP e bancos relacionais MySQL. Aprendizado prático de regras de negócio, normalização de tabelas, sanitização de inputs e consumo inteligente de APIs backend.",
    tags: ["PHP", "MySQL", "CRUD", "Normalização de Dados", "Segurança APIs"],
  },
  {
    hash: "e4a2d8c",
    date: "Nov 2024",
    subject: "Infraestrutura e deploy em formação",
    author: "Murilo Alves <itsmurilo.dev@gmail.com>",
    body: "Exploração de servidores reais e rotinas DevOps. Configuração de ambientes Linux via SSH, VPS dedicadas, orquestração de containers com Docker, controle de apontamento DNS seguros, servidores Nginx de alta performance e deploys automatizados.",
    tags: ["Linux", "VPS", "Docker", "DNS", "Nginx", "DevOps in Progress"],
  },
  {
    hash: "a3f5c9e",
    date: "Mar 2025",
    subject: "Automações e integrações de fluxo",
    author: "Murilo Alves <itsmurilo.dev@gmail.com>",
    body: "Foco na produtividade técnica e eficiência operacional de negócios. Construção de scripts customizados de automação e integração de sistemas e plataformas de terceiros usando APIs e fluxos visuais inteligentes via n8n, potencializado por IAs generativas.",
    tags: ["n8n", "Automações", "Scripts", "Integrações", "AI Copilot"],
  },
  {
    hash: "d19e7a4",
    date: "Presente",
    subject: "Async Studio e projetos reais",
    author: "Murilo Alves <itsmurilo.dev@gmail.com>",
    body: "Aplicação de toda a bagagem de desenvolvimento, infraestrutura e automação na Async Studio. Criação de landing pages profissionais, sistemas web e fluxos integrados sob medida, com foco em valor real de negócio, velocidade de entrega e estabilidade técnica.",
    tags: ["Async Studio", "Landing Pages", "Web Apps", "Automação Comercial", "Projetos Reais"],
  },
];
