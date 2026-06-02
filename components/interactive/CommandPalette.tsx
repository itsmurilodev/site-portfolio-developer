"use client";

import React, { useEffect, useRef, useState } from "react";
import { CornerDownLeft, Terminal, X } from "lucide-react";
import { siteConfig } from "@/lib/site";

interface TerminalHistoryEntry {
  command: string;
  output: string;
}

interface CommandResult {
  output?: string;
  shouldClear?: boolean;
  shouldClose?: boolean;
}

const initialHistory: TerminalHistoryEntry[] = [
  {
    command: "system --init",
    output:
      "Bem-vindo ao terminal interativo de Murilo Alves. Digite 'help' para listar os comandos permitidos.",
  },
];

function executeTerminalCommand(normalizedCommand: string): CommandResult {
  switch (normalizedCommand) {
    case "help":
      return {
        output:
          "Comandos dispon\u00edveis:\n  about      - Exibe biografia de Murilo Alves\n  skills     - Mostra as quatro stacks de compet\u00eancias\n  projects   - Lista os projetos em destaque\n  contact    - Informa\u00e7\u00f5es de e-mail e canais de contato\n  linkedin   - Abre o perfil do LinkedIn em nova aba\n  github     - Abre o GitHub em nova aba\n  clear      - Limpa o hist\u00f3rico de comandos\n  exit       - Fecha o console do terminal",
      };
    case "about":
      return {
        output: `Murilo Alves - ${siteConfig.role}\nForma\u00e7\u00e3o: ${siteConfig.education}\nMiss\u00e3o: ${siteConfig.mission}\n\u00c1reas: ${siteConfig.area}`,
      };
    case "skills":
      return {
        output:
          "Skills mapeadas:\n  [Web]: HTML, CSS, JavaScript, React, Vite, UX\n  [Backend]: PHP, MySQL, CRUD, APIs, Modelagem de dados\n  [Infra/DevOps]: Linux, SSH, VPS, Docker, DNS, Nginx, Deploy, Git\n  [Automa\u00e7\u00f5es]: n8n, Scripts, APIs, AI Tools, Google Workspace",
      };
    case "projects":
      return {
        output:
          "Projetos em Destaque:\n  1. CrudPHP (Estudo CRUD com PHP/MySQL)\n  2. Jogo do N\u00famero Secreto (HTML/CSS/JS nativo)\n  3. Cadastro de Atletas (JS L\u00f3gica)\n  4. Notas de Atletas (JS Array logic)\n  5. Projeto privado em equipe (React/Vite corporativo)\n  6. Rotina de TI e infraestrutura (Suporte, VPS, DNS, Docker)",
      };
    case "contact":
      return {
        output: `Contato & Canais:\n  E-mail: ${siteConfig.email}\n  Status: ${siteConfig.status.toUpperCase()}\n  Localiza\u00e7\u00e3o: ${siteConfig.location}\n  Redes: LinkedIn (${siteConfig.linkedin}), Instagram (@asyncstudiodev)`,
      };
    case "linkedin":
      window.open(siteConfig.linkedin, "_blank");
      return { output: "Redirecionando para o perfil do LinkedIn em nova aba..." };
    case "github":
      window.open(siteConfig.github, "_blank");
      return { output: "Redirecionando para o GitHub em nova aba..." };
    case "clear":
      return { shouldClear: true };
    case "exit":
      return { shouldClose: true };
    default:
      return {
        output: `bash: comando n\u00e3o encontrado: '${normalizedCommand}'. Digite 'help' para comandos v\u00e1lidos.`,
      };
  }
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState<TerminalHistoryEntry[]>(initialHistory);

  const inputRef = useRef<HTMLInputElement>(null);
  const historyEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsOpen((previousValue) => !previousValue);
      } else if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommandSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const submittedCommand = inputValue;
    const normalizedCommand = submittedCommand.trim().toLowerCase();
    if (!normalizedCommand) return;

    const commandResult = executeTerminalCommand(normalizedCommand);

    if (commandResult.shouldClear) {
      setHistory([]);
      setInputValue("");
      return;
    }

    if (commandResult.shouldClose) {
      setIsOpen(false);
      setInputValue("");
      return;
    }

    setHistory((previousHistory) => [
      ...previousHistory,
      { command: submittedCommand, output: commandResult.output ?? "" },
    ]);
    setInputValue("");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-bg-deep/85 p-4 backdrop-blur-sm select-none"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Console Terminal de Comandos"
    >
      <div
        className="w-full max-w-xl rounded-md border border-white/[0.08] bg-bg-deep shadow-2xl overflow-hidden flex flex-col h-[400px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-panel-light border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-terminal-orange-soft font-mono text-xs font-semibold">
            <Terminal className="w-4 h-4" />
            <span>murilo_os://bash</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline">
              ESC para fechar
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-sm text-zinc-500 hover:text-terminal-orange-soft hover:bg-bg-deep border border-transparent transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-terminal-orange"
              aria-label="Fechar terminal de comandos"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-zinc-300 flex flex-col gap-3 select-text bg-editor-bg scrollbar-thin scrollbar-thumb-zinc-800">
          {history.map((item, index) => (
            <div key={`${item.command}-${index}`} className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-terminal-green font-semibold">
                <span>guest@murilo-os:~$</span>
                <span className="text-zinc-200">{item.command}</span>
              </div>
              <div className="text-zinc-400 whitespace-pre-wrap pl-4 border-l border-zinc-900">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={historyEndRef} />
        </div>

        <form
          onSubmit={handleCommandSubmit}
          className="border-t border-white/[0.08] bg-bg-deep px-4 py-3 flex items-center gap-2"
        >
          <span className="font-mono text-xs text-terminal-green font-bold select-none">
            guest@murilo-os:~$
          </span>

          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="flex-1 bg-transparent font-mono text-xs text-zinc-200 outline-none placeholder-zinc-700"
            placeholder="digite 'help' e aperte Enter..."
            aria-label="Entrada de comando no terminal"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />

          <button
            type="submit"
            className="p-1 rounded-sm text-zinc-500 hover:text-terminal-orange transition-colors"
            aria-label="Executar comando"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
