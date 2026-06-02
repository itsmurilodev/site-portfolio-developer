import React from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  className?: string;
}

const interactiveSkillKeys = [
  "web_development",
  "backend_database",
  "infrastructure_devops",
  "automation_tools",
];

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function getInteractiveLineKey(line: string) {
  const keyMatch = line.match(/"([^"]+)":/);
  const extractedKey = keyMatch?.[1];

  return extractedKey && interactiveSkillKeys.includes(extractedKey) ? extractedKey : undefined;
}

function highlightJsonLine(line: string) {
  return escapeHtml(line)
    .replace(/"([^"]+)":/g, '<span class="text-syntax-blue font-bold">"$1"</span>:')
    .replace(/: \s*"([^"]+)"/g, ': <span class="text-terminal-green">"$1"</span>')
    .replace(/,\s*"([^"]+)"/g, ', <span class="text-terminal-green">"$1"</span>')
    .replace(/\[\s*"([^"]+)"/g, '[ <span class="text-terminal-green">"$1"</span>')
    .replace(/"([^"]+)"\s*(,\s*|\]\s*)/g, '<span class="text-terminal-green">"$1"</span>$2')
    .replace(/([{}\[\]])/g, '<span class="text-zinc-500 font-semibold">$1</span>');
}

export function CodeBlock({ code, className }: CodeBlockProps) {
  const highlightedLines = code.split("\n").map((line, index) => ({
    content: highlightJsonLine(line),
    key: getInteractiveLineKey(line),
    lineNumber: index + 1,
  }));

  return (
    <pre
      className={cn(
        "font-mono text-xs text-zinc-300 py-3 bg-bg-deep rounded-sm border border-white/[0.05] overflow-x-auto",
        className
      )}
    >
      <code>
        {highlightedLines.map((line) => (
          <div
            key={line.lineNumber}
            className="flex items-start font-mono text-xs leading-relaxed select-text py-0.5 px-3 rounded-sm transition-all duration-300"
            data-line-key={line.key}
          >
            <span className="w-5 text-zinc-700 text-right pr-3 select-none text-[10px] self-center">
              {line.lineNumber}
            </span>
            <span
              className="flex-1 whitespace-pre animate-fade-in"
              dangerouslySetInnerHTML={{ __html: line.content }}
            />
          </div>
        ))}
      </code>
    </pre>
  );
}
