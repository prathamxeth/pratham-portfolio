"use client";

import React, { useState } from "react";
import { Copy, Check, Code2, Sparkles, Layers, Shield } from "lucide-react";
import LiquidTabs, { TabItem } from "./LiquidTabs";
import confetti from "canvas-confetti";

export default function TerminalMatrix() {
  const [activeTab, setActiveTab] = useState<string>("stack");
  const [surfaceStyle, setSurfaceStyle] = useState<string>("frosted");
  const [copied, setCopied] = useState(false);

  const tabs: TabItem[] = [
    { id: "stack", label: "Tech Stack Matrix" },
    { id: "repo", label: "Repository Tree" },
    { id: "spec", label: "Engine Specs" },
  ];

  const surfaceTabs: TabItem[] = [
    { id: "frosted", label: "Frosted" },
    { id: "glass", label: "Liquid Glass" },
    { id: "clear", label: "Clear" },
  ];

  const stackMatrixContent = `🎛️ PALZEE ANDROID SYSTEM
  🎨 UI & Design         : Jetpack Compose · Material3 · Custom Silhouette Layouts
  ⚡ Language & Runtime   : Kotlin 2.0+ · JVM 17 Target · Coroutines & Flow
  📹 Camera & Media      : CameraX 1.4.2 · AndroidX Media3 ExoPlayer · MediaMetadataRetriever
  💾 Local Persistence   : Room Database · Preferences DataStore
  🔒 Backend Services    : Supabase Auth · Supabase Realtime · Supabase Storage CDN
  🔔 Cloud Messaging     : Firebase Cloud Messaging (FCM) · Android Notifications`;

  const repoStructureContent = `app
├── src/main/java/io/supabase/pals/
│   ├── core/
│   │   ├── designsystem/          # Common UI components, themes, design tokens & navigation
│   │   └── network/               # Supabase client & API services
│   ├── feature/                   # Feature-driven modular packages
│   │   ├── auth/                  # Sign in, registration, passkey & email flows
│   │   ├── camera/                # CameraX viewfinder & instant moment capture
│   │   ├── chat/                  # Real-time private messaging & video reactions
│   │   ├── home/                  # Daily moments timeline & friend feed
│   │   └── pals/                  # Friends circle management & profile setup
│   ├── services/                  # Background sync workers & FCM NotificationService
│   └── utils/                     # Media GC, keyframe extractors & system helpers
└── build.gradle.kts               # App-level Gradle dependencies & custom tasks`;

  const specContent = `🚀 PALZEE ENGINE SPECIFICATIONS
├── Target Platform       : Android Native (SDK 26–35) · JVM 17
├── State Latch Engine    : timeUs = 0L instantaneous frame pre-caching
├── Feed Architecture     : Zero-algorithmic chronological loop
├── Persistence           : Local-first SQLite with Room ORM
├── Cloud & Auth          : Supabase Auth · PostgreSQL Row Level Security (RLS)
└── Safety Standards      : End-to-end privacy by design · Child safety verified`;

  const handleCopy = () => {
    const textToCopy = 
      activeTab === "stack" 
        ? stackMatrixContent 
        : activeTab === "repo" 
          ? repoStructureContent 
          : specContent;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.8 },
      colors: ["#17C0FD", "#049EE2", "#FF9689"]
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const getSurfaceClass = () => {
    switch (surfaceStyle) {
      case "glass":
        return "liquid-glass shadow-[0_24px_60px_rgba(23,192,253,0.25)] border-[var(--liquid-glass-border)]";
      case "clear":
        return "bg-black/40 dark:bg-black/70 backdrop-blur-md border-[var(--neutral-border)] shadow-lg";
      case "frosted":
      default:
        return "magic-panel backdrop-blur-3xl saturate-200 border-[var(--liquid-glass-border)] shadow-2xl";
    }
  };

  return (
    <section id="palzee-engine" className="py-6 space-y-6">
      
      {/* Header & Surface Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--neutral-strong)] flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[var(--brand-primary)]" />
            <span>PALZEE Architecture & Code</span>
          </h2>
          <p className="text-[var(--neutral-medium)] text-sm max-w-[65ch]">
            Live repository structure, technology stack matrix, and zero-latency video engine fetched from GitHub.
          </p>
        </div>

        {/* Liquid Surface Style Selector */}
        <LiquidTabs
          tabs={surfaceTabs}
          activeTab={surfaceStyle}
          onChange={setSurfaceStyle}
          className="self-start sm:self-auto"
        />
      </div>

      {/* macOS Terminal / Architecture Screen Container */}
      <div className={`rounded-2xl overflow-hidden font-mono text-xs border transition-all duration-300 ${getSurfaceClass()}`}>
        
        {/* macOS Title Bar */}
        <div className="px-4 py-3 border-b border-[var(--neutral-border)] flex items-center justify-between bg-[var(--neutral-alpha-weak)] flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm" />
            <span className="text-xs text-[var(--neutral-weak)] ml-2 font-sans font-medium hidden md:inline">
              github.com/prathamxeth/PALZEE-ANDROID (README.md)
            </span>
          </div>

          {/* Liquid Tabs Navigation */}
          <div className="flex items-center gap-2">
            <LiquidTabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />

            <button
              onClick={handleCopy}
              className="p-2 rounded-xl liquid-button text-[var(--neutral-medium)] hover:text-[var(--neutral-strong)]"
              title="Copy snippet"
              aria-label="Copy code snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-[var(--neutral-weak)]" />}
            </button>
          </div>
        </div>

        {/* Architecture Content View */}
        <div className="p-6 overflow-x-auto min-h-[260px] leading-relaxed text-[var(--neutral-strong)]">
          {activeTab === "stack" && (
            <pre className="text-xs text-[var(--brand-primary)] whitespace-pre font-mono leading-relaxed">
              {stackMatrixContent}
            </pre>
          )}

          {activeTab === "repo" && (
            <pre className="text-xs text-emerald-500 dark:text-emerald-400 whitespace-pre font-mono leading-relaxed">
              {repoStructureContent}
            </pre>
          )}

          {activeTab === "spec" && (
            <pre className="text-xs text-[var(--brand-secondary)] whitespace-pre font-mono leading-relaxed">
              {specContent}
            </pre>
          )}

          <div className="mt-5 pt-3 border-t border-[var(--neutral-border)] flex items-center justify-between text-xs text-[var(--neutral-weak)] flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">➜</span>
              <span className="text-[var(--brand-primary)]">~/PALZEE-ANDROID</span>
              <span className="text-[var(--brand-peach)]">git:(main)</span>
              <span className="animate-pulse inline-block w-1.5 h-3.5 bg-[var(--brand-primary)]" />
            </div>

            <a
              href="https://github.com/prathamxeth/PALZEE-ANDROID"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-mono text-[var(--brand-primary)] hover:underline flex items-center gap-1"
            >
              <span>View full README on GitHub</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
