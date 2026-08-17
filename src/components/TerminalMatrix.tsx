"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";
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

  const matrixContent = `TECHNICAL ECOSYSTEM MATRIX
├── Native Mobile         : Kotlin 2.0+ · Jetpack Compose · CameraX · Media3 · Room
├── Web & Frontend        : TypeScript · Next.js · Tailwind CSS · React
├── Backend & Cloud       : Supabase Auth · PostgreSQL · Edge Functions · Firebase FCM
├── Security & Arch       : State-Latch Keyframes · Local-First GC · RLS
└── Tools & DevOps        : Gradle · Android Studio · Git · Cloudflare Edge · Actions`;

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
      ]
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
      particleCount: 25,
      spread: 40,
      origin: { y: 0.8 },
      colors: ["#6366f1", "#a855f7"]
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-16 md:py-20 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="space-y-1 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            System Specs
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            Interactive macOS shell output and developer environment telemetry.
          </p>
        </div>

        {/* macOS Terminal Window (Frosted Glass) */}
        <div className="apple-glass overflow-hidden font-mono text-xs shadow-2xl">
          
          {/* macOS Title Bar */}
          <div className="px-4 py-3 border-b border-black/5 dark:border-white/5 flex items-center justify-between bg-black/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm" />
              <span className="text-xs text-zinc-500 ml-2 font-sans font-medium hidden sm:inline">
                pratham@finrein-macbook: ~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-1 p-0.5 rounded-lg apple-glass-pill">
                {(["neofetch", "matrix", "system"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2.5 py-0.5 rounded-md text-xs font-sans font-medium transition-all ${
                      activeTab === tab
                        ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-950 dark:hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg apple-glass-pill hover:border-indigo-500 transition-colors"
                title="Copy snippet"
                aria-label="Copy terminal text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-zinc-500" />}
              </button>
            </div>
          </div>

          {/* Terminal Screen Content */}
          <div className="p-6 overflow-x-auto min-h-[220px] leading-relaxed text-zinc-800 dark:text-zinc-200">
            {activeTab === "neofetch" && (
              <pre className="text-xs text-indigo-600 dark:text-indigo-400 whitespace-pre font-mono">
                {neofetchContent}
              </pre>
            )}

            {activeTab === "matrix" && (
              <pre className="text-xs text-emerald-600 dark:text-emerald-400 whitespace-pre font-mono">
                {matrixContent}
              </pre>
            )}

            {activeTab === "system" && (
              <pre className="text-xs text-cyan-600 dark:text-cyan-400 whitespace-pre font-mono">
                {systemJson}
              </pre>
            )}

            <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center gap-2 text-zinc-400">
              <span className="text-emerald-500 font-bold">➜</span>
              <span className="text-indigo-500">~/palzee</span>
              <span className="text-pink-500">git:(main)</span>
              <span className="animate-pulse inline-block w-1.5 h-3.5 bg-indigo-500" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
