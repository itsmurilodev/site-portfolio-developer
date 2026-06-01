import React from "react";
import Link from "next/link";
import { ShieldAlert, RotateCcw } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg-main text-zinc-300 flex items-center justify-center p-4 font-mono relative select-none">
      {/* Visual cyber mesh background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,96,38,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,96,38,0.06)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* BIOS Screen Box */}
      <div className="w-full max-w-xl rounded-md border border-red-500/20 bg-bg-deep/85 p-6 md:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

        {/* Brand Icon and Header */}
        <div className="flex items-center gap-2 text-red-500 mb-6 border-b border-zinc-900 pb-4">
          <ShieldAlert className="w-5 h-5 animate-pulse" />
          <span className="font-extrabold tracking-wide uppercase text-sm">
            system_warning: page_not_found
          </span>
        </div>

        {/* BIOS Terminal details */}
        <div className="flex flex-col gap-3 text-xs leading-relaxed text-zinc-400 mb-8 bg-editor-bg p-4 border border-white/[0.08] rounded-sm select-text">
          <div>*** SYSTEM SEGMENT OVERFLOW DETECTED ***</div>
          <div>ERROR_CODE: <span className="text-red-400 font-bold">0x00000194 (404)</span></div>
          <div>PROCESS_NAME: murilo-devos-routing-core</div>
          <div>STATUS: active_page_pointer_invalid</div>
          <div className="text-zinc-600 mt-2">{"// O endereço requisitado não existe neste host."}</div>
          <div className="text-zinc-600">{"// Certifique-se de que digitou o caminho correto."}</div>
        </div>

        {/* Direct Action Navigation link */}
        <div className="flex justify-start">
          <Link
            href="/"
            className="command-button inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-zinc-950 bg-gradient-to-r from-red-400 to-amber-500 hover:from-red-500 hover:to-amber-600 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-red-500 shadow-[0_0_16px_rgba(239,68,68,0.15)]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reboot System (Voltar ao Início)</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
