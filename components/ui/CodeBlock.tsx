import React from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export function CodeBlock({ code, className }: CodeBlockProps) {
  // Simple, highly robust static regex highlighter for JSON
  const highlightJson = (jsonStr: string) => {
    const lines = jsonStr.split("\n");
    return lines.map((line, idx) => {
      const keyRegex = /"([^"]+)":/g;
      
      let htmlLine = line
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      let lineKey: string | null = null;

      // Extract key matching for DOM attribute tagging
      const keyMatch = line.match(/"([^"]+)":/);
      if (keyMatch) {
        const extractedKey = keyMatch[1];
        if (["web_development", "backend_database", "infrastructure_devops", "automation_tools"].includes(extractedKey)) {
          lineKey = extractedKey;
        }
      }

      // 1. Highlight JSON Keys
      htmlLine = htmlLine.replace(keyRegex, (match, key) => {
        return `<span class="text-syntax-blue font-bold">"${key}"</span>:`;
      });

      // 2. Highlight Strings values (anything between quotes after a colon or inside arrays)
      htmlLine = htmlLine.replace(/: \s*"([^"]+)"/g, ': <span class="text-terminal-green">"$1"</span>');
      htmlLine = htmlLine.replace(/,\s*"([^"]+)"/g, ', <span class="text-terminal-green">"$1"</span>');
      htmlLine = htmlLine.replace(/\[\s*"([^"]+)"/g, '[ <span class="text-terminal-green">"$1"</span>');
      htmlLine = htmlLine.replace(/"([^"]+)"\s*(,\s*|\]\s*)/g, '<span class="text-terminal-green">"$1"</span>$2');

      // 3. Highlight braces and brackets
      htmlLine = htmlLine.replace(/([\{\}\[\]])/g, '<span class="text-zinc-500 font-semibold">$1</span>');

      return (
        <div
          key={idx}
          className="flex items-start font-mono text-xs leading-relaxed select-text py-0.5 px-3 rounded-sm transition-all duration-300"
          data-line-key={lineKey || undefined}
        >
          {/* Line number */}
          <span className="w-5 text-zinc-700 text-right pr-3 select-none text-[10px] self-center">
            {idx + 1}
          </span>
          <span
            className="flex-1 whitespace-pre animate-fade-in"
            dangerouslySetInnerHTML={{ __html: htmlLine }}
          />
        </div>
      );
    });
  };

  return (
    <pre className={cn("font-mono text-xs text-zinc-300 py-3 bg-bg-deep rounded-sm border border-white/[0.05] overflow-x-auto", className)}>
      <code>{highlightJson(code)}</code>
    </pre>
  );
}
