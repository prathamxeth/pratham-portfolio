"use client";

import React, { useRef, useState, useEffect } from "react";

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface LiquidTabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export default function LiquidTabs({
  tabs,
  activeTab,
  onChange,
  className = "",
}: LiquidTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const activeEl = containerRef.current.querySelector(
      `[data-tab-id="${activeTab}"]`
    ) as HTMLElement | null;

    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeTab, tabs]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center p-1 rounded-full liquid-glass shadow-sm ${className}`}
    >
      {/* Liquid Morphing Borderless Indicator */}
      <div
        className="absolute top-1 bottom-1 rounded-full bg-(--liquid-active-bg) shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
        }}
      />

      {/* Tabs list */}
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            data-tab-id={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative z-10 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
              isActive
                ? "text-(--neutral-strong) font-semibold"
                : "text-(--neutral-medium) hover:text-(--neutral-strong)"
            }`}
          >
            {Icon && <Icon className="w-3.5 h-3.5" />}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
