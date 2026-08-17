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
    { id: "architecture", label: "Architecture" },
    { id: "specs", label: "Specs" },
  ];

  const designContent = `🎛️ PALZEE ANDROID SYSTEM
  🎨 UI & Design         : Jetpack Compose · Material3 · Custom Silhouette Layouts
  ⚡ Language & Runtime   : Kotlin 2.0+ · JVM 17 Target · Coroutines & Flow
  📹 Camera & Media      : CameraX 1.4.2 · AndroidX Media3 ExoPlayer · MediaMetadataRetriever
  💾 Local Persistence   : Room Database · Preferences DataStore
  🔒 Backend Services    : Supabase Auth · Supabase Realtime · Supabase Storage CDN
  🔔 Cloud Messaging     : Firebase Cloud Messaging (FCM) · Android Notifications`;

  const architectureContent = `app
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
    <section id="palzee-engine" className="py-6 space-y-4">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-(--neutral-strong) flex items-center gap-2">
          <Code2 className="w-5 h-5 text-(--brand-primary)" />
          <span>Palzee</span>
        </h2>
      </div>

      {/* Borderless Transparent Liquid Glass Terminal Screen Container */}
      <div className="rounded-3xl overflow-hidden font-mono text-xs liquid-glass shadow-lg transition-all duration-300">
        
        {/* macOS Title Bar with Design | Architecture | Specs Switcher */}
        <div className="px-5 py-3.5 flex items-center justify-between bg-(--liquid-active-bg) flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-80" />
            <span className="text-xs text-(--neutral-weak) ml-2 font-sans font-medium hidden md:inline">
              github.com/prathamxeth/PALZEE-ANDROID
            </span>
          </div>

          {/* Design | Architecture | Specs Liquid Tabs */}
          <div className="flex items-center gap-2">
            <LiquidTabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />

            <button
              onClick={handleCopy}
              className="p-2.5 rounded-full liquid-button text-(--neutral-medium) hover:text-(--neutral-strong)"
              title="Copy snippet"
              aria-label="Copy code snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-(--neutral-weak)" />}
            </button>
          </div>
        </div>

        {/* Architecture Content View */}
        <div className="p-6 overflow-x-auto min-h-[260px] leading-relaxed text-(--neutral-strong)">
          {activeTab === "design" && (
            <pre className="text-xs text-(--brand-primary) whitespace-pre font-mono leading-relaxed">
              {designContent}
            </pre>
          )}

          {activeTab === "architecture" && (
            <pre className="text-xs text-emerald-500 dark:text-emerald-400 whitespace-pre font-mono leading-relaxed">
              {architectureContent}
            </pre>
          )}

          {activeTab === "specs" && (
            <pre className="text-xs text-(--brand-secondary) whitespace-pre font-mono leading-relaxed">
              {specsContent}
            </pre>
          )}

          <div className="mt-5 pt-3 flex items-center justify-between text-xs text-(--neutral-weak) flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">➜</span>
              <span className="text-(--brand-primary)">~/PALZEE-ANDROID</span>
              <span className="text-(--brand-peach)">git:(main)</span>
              <span className="animate-pulse inline-block w-1.5 h-3.5 bg-(--brand-primary)" />
            </div>

            <a
              href="https://github.com/prathamxeth/PALZEE-ANDROID"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-mono text-(--brand-primary) hover:underline flex items-center gap-1"
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
