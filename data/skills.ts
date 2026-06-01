export type SkillStatus = "learning" | "practicing" | "building" | "improving";

export interface SkillPillar {
  title: string;
  description: string;
  skills: string[];
  status: SkillStatus;
  statusLabel: string;
}

export const skillsData: SkillPillar[] = [
  {
    title: "Desenvolvimento Web",
    description: "Criação de interfaces modernas, responsivas e focadas na experiência do usuário (UI/UX).",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vite", "Interfaces responsivas", "Componentização", "Integração com backend", "UI e experiência do usuário"],
    status: "building",
    statusLabel: "Building",
  },
  {
    title: "Backend e Banco de Dados",
    description: "Modelagem de dados robusta, regras de negócio consistentes e desenvolvimento de APIs.",
    skills: ["PHP", "MySQL", "CRUD", "Fundamentos de APIs", "Modelagem de banco de dados", "Padronização de tabelas", "Regras de negócio", "Validação de dados"],
    status: "practicing",
    statusLabel: "Practicing",
  },
  {
    title: "Infraestrutura e DevOps em formação",
    description: "Configuração de servidores, deploys ágeis, conteinerização e redes básicas.",
    skills: ["Linux", "SSH", "VPS", "Docker", "DNS", "Nginx", "Deploy", "Git", "GitHub", "Organização de repositórios", "Documentação técnica"],
    status: "learning",
    statusLabel: "Learning in Progress",
  },
  {
    title: "Automações e Integrações",
    description: "Criação de fluxos inteligentes para conectar ferramentas e otimizar processos.",
    skills: ["Scripts", "APIs", "n8n", "IA como copiloto técnico", "Google Workspace", "Integrações", "Fluxos automatizados", "Produtividade técnica"],
    status: "improving",
    statusLabel: "Improving",
  },
];

// O JSON visual bruto que será renderizado no editor de código interativo para SEO e estética
export const skillsJsonString = `{
  "profile": "Web Developer + Backend + DevOps in Progress",
  "main_focus": [
    "Desenvolvimento Web",
    "Backend",
    "Infraestrutura",
    "DevOps",
    "Automações"
  ],
  "web_development": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Responsive UI",
    "Componentization"
  ],
  "backend_database": [
    "PHP",
    "MySQL",
    "CRUD",
    "APIs",
    "Data Modeling",
    "Business Rules"
  ],
  "infrastructure_devops": [
    "Linux",
    "SSH",
    "VPS",
    "Docker",
    "DNS",
    "Nginx",
    "Deploy",
    "Git"
  ],
  "automation_tools": [
    "n8n",
    "Scripts",
    "APIs",
    "AI Tools",
    "Google Workspace",
    "Process Automation"
  ]
}`;
