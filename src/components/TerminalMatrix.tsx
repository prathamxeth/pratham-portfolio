"use client";

import React, { useState } from "react";
import { Copy, Check, Code2 } from "lucide-react";
import LiquidTabs, { TabItem } from "./LiquidTabs";
import confetti from "canvas-confetti";

export default function TerminalMatrix() {
  const [activeTab, setActiveTab] = useState<string>("design");
  const [copied, setCopied] = useState(false);

  const tabs: TabItem[] = [
    { id: "design", label: "Design" },
    { id: "architecture", label: "Arch" },
    { id: "specs", label: "Specs" },
  ];

  const designContent = `🎛️ PALZEE ANDROID SYSTEM
🎨 UI & Design         : Jetpack Compose · Material3 · Custom Silhouettes
⚡ Language & Runtime   : Kotlin 2.0+ · JVM 17 Target · Coroutines & Flow
📹 Camera & Media      : CameraX 1.4.2 · Media3 ExoPlayer · MediaRetriever
💾 Local Persistence   : Room Database · Preferences DataStore
🔒 Backend Services    : Supabase Auth · Supabase Realtime · CDN Storage
🔔 Cloud Messaging     : Firebase Cloud Messaging (FCM) · Notifications`;

  const architectureContent = `app
├── src/main/java/io/supabase/pals/
│   ├── core/
│   │   ├── designsystem/          # UI tokens, themes & navigation
│   │   └── network/               # Supabase client & API services
│   ├── feature/                   # Feature modular packages
│   │   ├── auth/                  # Passkey & email flows
│   │   ├── camera/                # CameraX viewfinder & instant capture
│   │   ├── chat/                  # Video reactions & private messaging
│   │   ├── home/                  # Daily moments & friend feed
│   │   └── pals/                  # Friends circle management
│   ├── services/                  # Background sync & FCM Workers
│   └── utils/                     # Media GC & keyframe extractors
└── build.gradle.kts               # Dependencies & custom tasks`;

  const specsContent = `🚀 PALZEE ENGINE SPECIFICATIONS
├── Target Platform       : Android Native (SDK 26–35) · JVM 17
├── State Latch Engine    : timeUs = 0L instantaneous frame pre-caching
├── Feed Architecture     : Zero-algorithmic chronological loop
├── Persistence           : Local-first SQLite with Room ORM
├── Cloud & Auth          : Supabase Auth · PostgreSQL Row Level Security (RLS)
└── Safety Standards      : End-to-end privacy by design · Child safety verified`;

  const handleCopy = () => {
    const textToCopy = 
      activeTab === "design" 
        ? designContent 
        : activeTab === "architecture" 
          ? architectureContent 
          : specsContent;

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

  return (
    <section id="palzee-engine" className="py-4 sm:py-6 space-y-3 sm:space-y-4">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-(--neutral-strong) flex items-center gap-2">
          <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-(--brand-primary)" />
          <span>Palzee Architecture</span>
        </h2>
      </div>

      {/* Transparent Liquid Glass Terminal Screen Container */}
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden font-mono text-xs liquid-glass transition-all duration-300">
        
        {/* macOS Title Bar with Design | Architecture | Specs Switcher */}
        <div className="px-3 sm:px-4 py-2.5 sm:py-3 border-b border-(--neutral-border) flex items-center justify-between bg-(--neutral-alpha-weak) flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] opacity-80" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] opacity-80" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] opacity-80" />
            </div>
            <span className="text-[11px] text-(--neutral-weak) ml-1 font-sans font-medium hidden sm:inline truncate max-w-50">
              github.com/prathamxeth/PALZEE
            </span>
          </div>

          {/* Design | Arch | Specs Liquid Tabs & Copy Button */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <LiquidTabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />

            <button
              onClick={handleCopy}
              className="p-1.5 sm:p-2 rounded-xl liquid-button text-(--neutral-medium) hover:text-(--neutral-strong) shrink-0"
              title="Copy snippet"
              aria-label="Copy code snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-(--neutral-weak)" />}
            </button>
          </div>
        </div>

        {/* Architecture Content View */}
        <div className="p-4 sm:p-6 overflow-x-auto min-h-55 sm:min-h-65 leading-relaxed text-(--neutral-strong)">
          {activeTab === "design" && (
            <pre className="text-[11px] sm:text-xs text-(--brand-primary) whitespace-pre font-mono leading-relaxed">
              {designContent}
            </pre>
          )}

          {activeTab === "architecture" && (
            <pre className="text-[11px] sm:text-xs text-emerald-500 dark:text-emerald-400 whitespace-pre font-mono leading-relaxed">
              {architectureContent}
            </pre>
          )}

          {activeTab === "specs" && (
            <pre className="text-[11px] sm:text-xs text-(--brand-secondary) whitespace-pre font-mono leading-relaxed">
              {specsContent}
            </pre>
          )}

          <div className="mt-4 sm:mt-5 pt-3 border-t border-(--neutral-border) flex items-center justify-between text-xs text-(--neutral-weak) flex-wrap gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
              <span className="text-emerald-500 font-bold">➜</span>
              <span className="text-(--brand-primary)">~/PALZEE</span>
              <span className="text-(--brand-peach)">git:(main)</span>
              <span className="animate-pulse inline-block w-1.5 h-3 bg-(--brand-primary)" />
            </div>

            <a
              href="https://github.com/prathamxeth/PALZEE-ANDROID"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-mono text-(--brand-primary) hover:underline flex items-center gap-1"
            >
              <span>GitHub Repo</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
