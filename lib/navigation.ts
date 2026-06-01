export type NavigationLink = {
  id: string;
  label: string;
  href: `#${string}`;
  index: string;
  command: string;
  icon: "code" | "terminal" | "cpu" | "branch" | "folder" | "book" | "mail";
};

export const navigationLinks: NavigationLink[] = [
  { id: "home", label: "Home", href: "#home", index: "01", command: "boot", icon: "code" },
  { id: "about", label: "Sobre", href: "#about", index: "02", command: "whoami", icon: "terminal" },
  { id: "skills", label: "Skills", href: "#skills", index: "03", command: "skills", icon: "cpu" },
  { id: "journey", label: "Jornada", href: "#journey", index: "04", command: "git log", icon: "branch" },
  { id: "projects", label: "Projetos", href: "#projects", index: "05", command: "ls repos", icon: "folder" },
  { id: "async-studio", label: "Async Studio", href: "#async-studio", index: "06", command: "workspace", icon: "book" },
  { id: "contact", label: "Contato", href: "#contact", index: "07", command: "contact", icon: "mail" },
];
