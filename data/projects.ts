export type ProjectCategory = "study-project" | "private-project" | "real-experience";

export interface ProjectItem {
  id: string;
  name: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  stack: string[];
  solvedProblem: string; // "aprendizado ou problema resolvido"
  githubUrl?: string;
  demoUrl?: string;
  private?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "crud-php",
    name: "CrudPHP",
    category: "study-project",
    categoryLabel: "Projeto de Estudo",
    description: "Projeto prático de CRUD estruturado, trabalhando o fluxo completo de persistência de dados: cadastro, listagem, edição e exclusão.",
    stack: ["PHP", "MySQL", "CRUD", "Backend", "Bootstrap"],
    solvedProblem: "Resolução de fluxos de validação de formulários, sanitização de inputs de usuários contra SQL Injection e estruturação de rotas simples.",
    githubUrl: "https://github.com/itsmurilo/crud-php", // Placeholder
  },
  {
    id: "secret-number",
    name: "Jogo do Número Secreto",
    category: "study-project",
    categoryLabel: "Projeto de Estudo",
    description: "Aplicação interativa baseada em lógica de programação e manipulação direta da DOM para criar um jogo de adivinhação dinâmico.",
    stack: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    solvedProblem: "Controle de estados simples na tela, tratamento de entrada de texto e voz com APIs nativas e criação de interações visuais fluidas.",
    githubUrl: "https://github.com/itsmurilo/numero-secreto", // Placeholder
    demoUrl: "#",
  },
  {
    id: "athletes-registry",
    name: "Cadastro de Atletas",
    category: "study-project",
    categoryLabel: "Projeto de Estudo",
    description: "Exercício de fixação lógica focado em estrutura de dados, entrada e processamento de informações organizadas.",
    stack: ["JavaScript", "Logic", "Object Oriented"],
    solvedProblem: "Domínio na criação de objetos, separação de responsabilidades no código e estruturação de algoritmos de busca e ordenação na memória.",
    githubUrl: "https://github.com/itsmurilo/cadastro-atletas", // Placeholder
  },
  {
    id: "athletes-grades",
    name: "Notas de Atletas",
    category: "study-project",
    categoryLabel: "Projeto de Estudo",
    description: "Projeto focado em algoritmos matemáticos e regras de negócio de cálculo de médias, eliminando a maior e a menor pontuação.",
    stack: ["JavaScript", "Arrays", "Business Rules", "Functional Programming"],
    solvedProblem: "Manipulação avançada de arrays (sort, slice, reduce) para filtragem estatística e tratamento correto de regras de negócio em lógica pura.",
    githubUrl: "https://github.com/itsmurilo/notas-atletas", // Placeholder
  },
  {
    id: "private-team-project",
    name: "Projeto privado em equipe",
    category: "private-project",
    categoryLabel: "Projeto Privado",
    description: "Colaboração no desenvolvimento de uma interface dinâmica de alta complexidade em repositório privado para uma solução corporativa real.",
    stack: ["React", "Vite", "JavaScript", "Git", "GitHub Flow"],
    solvedProblem: "Trabalho em equipe multi-funcional, resolução de conflitos de código com Git, componentização escalável baseada em estados e integração ágil com APIs backend.",
    private: true,
  },
  {
    id: "ti-infra-routine",
    name: "Rotina de TI e infraestrutura",
    category: "real-experience",
    categoryLabel: "Experiência Prática",
    description: "Atuação direta em suporte técnico avançado, manutenção de servidores corporativos VPS, controle de DNS e automações operacionais.",
    stack: ["Linux", "VPS", "Docker", "Google Workspace", "DNS", "Nginx", "E-mail corporativo"],
    solvedProblem: "Investigação sistemática e diagnóstico de falhas em produção, orquestração de containers com Docker, configuração segura de Nginx e gerenciamento de domínios corporativos.",
  },
];
