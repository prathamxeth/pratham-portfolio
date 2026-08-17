"use client";

import React, { useState } from "react";
import { 
  ExternalLink, 
  Smartphone, 
  Globe
} from "lucide-react";
import { GithubIcon } from "../../components/Icons";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import LiquidTabs, { TabItem } from "../../components/LiquidTabs";

export default function WorkPage() {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<string>("all");

  const filterTabs: TabItem[] = [
    { id: "all", label: "All" },
    { id: "mobile", label: "Android", icon: Smartphone },
    { id: "web", label: "Web & Edge", icon: Globe },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "mobile") return p.category.toLowerCase().includes("android") || p.category.toLowerCase().includes("mobile");
    if (filter === "web") return p.category.toLowerCase().includes("web") || p.category.toLowerCase().includes("edge");
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12">
      
      {/* Header & Liquid Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-(--neutral-border)">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-(--neutral-strong)">
            Selected Work
          </h1>
          <p className="text-xs sm:text-sm text-(--neutral-medium) max-w-[65ch]">
            Engineered systems, zero-latency keyframe video pipelines, and modern edge portals.
          </p>
        </div>

        {/* Liquid Tabs Filter */}
        <LiquidTabs
          tabs={filterTabs}
          activeTab={filter}
          onChange={setFilter}
          className="self-start sm:self-auto shrink-0"
        />
      </div>

      {/* Projects Showcase Cards */}
      <div className="space-y-6 sm:space-y-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="liquid-glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-5 relative overflow-hidden group"
          >
            {/* Top Bar: Category & Metric */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-(--brand-primary) flex items-center gap-1.5">
                {project.category.includes("Android") ? <Smartphone className="w-3.5 h-3.5" /> : <Globe className="w-3.5 h-3.5" />}
                {project.category}
              </span>

              <span className="magic-tag px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400">
                {project.metrics}
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-1.5 sm:space-y-2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-(--neutral-strong) group-hover:text-(--brand-primary) transition-colors">
                {project.title}
              </h2>
              <p className="text-xs font-medium text-(--brand-secondary)">
                {project.tagline}
              </p>
              <p className="text-xs sm:text-sm text-(--neutral-medium) leading-relaxed max-w-[65ch]">
                {project.description}
              </p>
            </div>

            {/* Tech Tags & Links */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 sm:pt-4 border-t border-(--neutral-border)">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="magic-tag px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="liquid-button px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-1.5 text-(--neutral-strong)"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="liquid-primary-btn px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
