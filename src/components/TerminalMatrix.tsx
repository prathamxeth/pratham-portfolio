"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Sparkles, Code2, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import confetti from "canvas-confetti";

export default function TerminalMatrix() {
  const [activeTab, setActiveTab] = useState<"neofetch" | "matrix" | "system">("neofetch");
  const [copied, setCopied] = useState(false);
  const { terminalSpecs } = PORTFOLIO_DATA;

  const neofetchContent = `prathamxeth@system:~$ neofetch --ecosystem
 
  ██████╗  █████╗ ██╗     ███████╗███████╗███████╗
  ██╔══██╗██╔══██╗██║     ╚══███╔╝██╔════╝██╔════╝
  ██████╔╝███████║██║       ███╔╝ █████╗  █████╗  
  ██╔═══╝ ██╔══██║██║      ███╔╝  ██╔══╝  ██╔══╝  
  ██║     ██║  ██║███████╗███████╗███████╗███████╗
  ╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚══════╝

  OS          : ${terminalSpecs.os}
  HOST        : ${terminalSpecs.host}
  SHELL       : ${terminalSpecs.shell}
  BACKEND     : ${terminalSpecs.backend}
  CORE SPECS  : ${terminalSpecs.coreSpecs}
  UPTIME      : ${terminalSpecs.uptime}
  PROJECTS    : ${terminalSpecs.projects}`;

  const matrixContent = `⚡ TECHNICAL ECOSYSTEM MATRIX
├── 📱 Native Mobile         : Kotlin 2.0+ · Jetpack Compose · CameraX · Media3 ExoPlayer · Room
├── 🌐 Web & Frontend        : Modern HTML5 · CSS3 · Tailwind CSS v4 · Responsive Liquid Design
├── 🗄️ Backend & Cloud       : Supabase Auth · PostgreSQL · Edge Functions · Firebase FCM
├── 🔒 Security & Arch       : State-Latch Keyframes · Local-First GC · RLS · CSAM Zero-Tolerance
└── 🛠️ Tools & DevOps        : Gradle · Android Studio · Git · Cloudflare Edge · GitHub Actions`;

  const systemJson = JSON.stringify(
    {
      developer: "Prathmesh Upadhyay",
      handle: "@prathamxeth",
      roles: ["CTO @FinRein", "Developer @PalZee"],
      education: "BS in Data Science @IIT Madras",
      principles: [
        "Zero-latency execution",
        "Local-first privacy",
        "Liquid aesthetics",
        "Clean architecture"
      ],
      active_stack: {
        mobile: "Kotlin / Compose / Media3",
        web: "TypeScript / Next.js / Tailwind v4",
        cloud: "Supabase / Postgres / Cloudflare Edge"
      }
    },
    null,
    2
  );

  const handleCopy = () => {
    const textToCopy = 
      activeTab === "neofetch" 
        ? neofetchContent 
        : activeTab === "matrix" 
          ? matrixContent 
          : systemJson;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 },
      colors: ["#6366f1", "#38bdf8", "#34d399"]
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-indigo-600 dark:text-indigo-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE SYSTEM SHELL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            System & Ecosystem Matrix
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl">
            Live technical overview and specs straight from the terminal.
          </p>
        </div>

        {/* Terminal Window Card */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-[#0d1117] text-zinc-200 font-mono text-xs sm:text-sm">
          
          {/* Terminal Title Bar */}
          <div className="bg-[#161b22] px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="text-[11px] text-zinc-400 ml-2 font-sans font-medium hidden sm:inline">
                pratham@finrein-arch: ~ (zsh)
              </span>
            </div>

            {/* Terminal Tab Switchers */}
            <div className="flex items-center gap-1 bg-[#0d1117] p-1 rounded-lg border border-zinc-800">
              <button
                onClick={() => setActiveTab("neofetch")}
                className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
                  activeTab === "neofetch"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                neofetch
              </button>

              <button
                onClick={() => setActiveTab("matrix")}
                className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
                  activeTab === "matrix"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                ecosystem.tree
              </button>

              <button
                onClick={() => setActiveTab("system")}
                className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
                  activeTab === "system"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                system.json
              </button>
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
              title="Copy snippet"
              aria-label="Copy terminal content"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-5 sm:p-6 overflow-x-auto min-h-[260px] leading-relaxed text-zinc-300">
            {activeTab === "neofetch" && (
              <pre className="text-[11px] sm:text-xs text-indigo-300 whitespace-pre font-mono">
                {neofetchContent}
              </pre>
            )}

            {activeTab === "matrix" && (
              <pre className="text-[11px] sm:text-xs text-emerald-300 whitespace-pre font-mono">
                {matrixContent}
              </pre>
            )}

            {activeTab === "system" && (
              <pre className="text-[11px] sm:text-xs text-cyan-300 whitespace-pre font-mono">
                {systemJson}
              </pre>
            )}

            {/* Prompt Line */}
            <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center gap-2 text-zinc-400">
              <span className="text-emerald-400 font-bold">➜</span>
              <span className="text-cyan-400">~/palzee-systems</span>
              <span className="text-pink-400 font-semibold">git:(main)</span>
              <span className="animate-pulse inline-block w-2 h-4 bg-indigo-400" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
