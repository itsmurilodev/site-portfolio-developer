"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, CornerDownLeft, X } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: "system --init",
      output: "Bem-vindo ao terminal interativo de Murilo Alves. Digite 'help' para listar os comandos permitidos.",
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const historyEndRef = useRef<HTMLDivElement>(null);

  // 1. Listen for Ctrl/Cmd + K to toggle palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 2. Focus input when palette opens
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

  // 3. Scroll to bottom of terminal output history
  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputValue.trim().toLowerCase();
    if (!cleanCmd) return;

    let output = "";

    switch (cleanCmd) {
      case "help":
        output = "Comandos disponíveis:\n  about      - Exibe biografia de Murilo Alves\n  skills     - Mostra as quatro stacks de competências\n  projects   - Lista os projetos em destaque\n  contact    - Informações de e-mail e canais de contato\n  linkedin   - Abre o perfil do LinkedIn em nova aba\n  github     - Abre o GitHub em nova aba\n  clear      - Limpa o histórico de comandos\n  exit       - Fecha o console do terminal";
        break;
      case "about":
        output = `Murilo Alves - ${siteConfig.role}\nFormação: ${siteConfig.education}\nMissão: ${siteConfig.mission}\nÁreas: ${siteConfig.area}`;
        break;
      case "skills":
        output = "Skills mapeadas:\n  [Web]: HTML, CSS, JavaScript, React, Vite, UX\n  [Backend]: PHP, MySQL, CRUD, APIs, Modelagem de dados\n  [Infra/DevOps]: Linux, SSH, VPS, Docker, DNS, Nginx, Deploy, Git\n  [Automações]: n8n, Scripts, APIs, AI Tools, Google Workspace";
        break;
      case "projects":
        output = "Projetos em Destaque:\n  1. CrudPHP (Estudo CRUD com PHP/MySQL)\n  2. Jogo do Número Secreto (HTML/CSS/JS nativo)\n  3. Cadastro de Atletas (JS Lógica)\n  4. Notas de Atletas (JS Array logic)\n  5. Projeto privado em equipe (React/Vite corporativo)\n  6. Rotina de TI e infraestrutura (Suporte, VPS, DNS, Docker)";
        break;
      case "contact":
        output = `Contato & Canais:\n  E-mail: ${siteConfig.email}\n  Status: ${siteConfig.status.toUpperCase()}\n  Localização: ${siteConfig.location}\n  Redes: LinkedIn (${siteConfig.linkedin}), Instagram (@asyncstudiodev)`;
        break;
      case "linkedin":
        window.open(siteConfig.linkedin, "_blank");
        output = "Redirecionando para o perfil do LinkedIn em nova aba...";
        break;
      case "github":
        window.open(siteConfig.github, "_blank");
        output = "Redirecionando para o GitHub em nova aba...";
        break;
      case "clear":
        setHistory([]);
        setInputValue("");
        return;
      case "exit":
        setIsOpen(false);
        setInputValue("");
        return;
      default:
        output = `bash: comando não encontrado: '${cleanCmd}'. Digite 'help' para comandos válidos.`;
        break;
    }

    setHistory((prev) => [...prev, { cmd: inputValue, output }]);
    setInputValue("");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#07050f]/80 p-4 backdrop-blur-sm select-none"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Console Terminal de Comandos"
    >
      {/* Console Box */}
      <div
        className="w-full max-w-xl rounded-lg border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden flex flex-col h-[400px]"
        onClick={(e) => e.stopPropagation()} // Prevent closing
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
            <Terminal className="w-4 h-4" />
            <span>murilo_os://bash</span>
          </div>

          {/* Shortcut hint */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline">ESC para fechar</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 border border-transparent transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-cyan-500"
              aria-label="Fechar terminal de comandos"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* History Log */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-zinc-300 flex flex-col gap-3 select-text bg-zinc-950/80 scrollbar-thin scrollbar-thumb-zinc-800">
          {history.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <span>guest@murilo-os:~$</span>
                <span className="text-zinc-200">{item.cmd}</span>
              </div>
              <div className="text-zinc-400 whitespace-pre-wrap pl-4 border-l border-zinc-900">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={historyEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleCommandSubmit}
          className="border-t border-zinc-900 bg-zinc-950/90 px-4 py-3 flex items-center gap-2"
        >
          <span className="font-mono text-xs text-purple-400 font-bold select-none">guest@murilo-os:~$</span>
          
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
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
            className="p-1 rounded text-zinc-500 hover:text-cyan-400 transition-colors"
            aria-label="Executar comando"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
