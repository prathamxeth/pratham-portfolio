"use client";

import React, { useState } from "react";
import { 
  ExternalLink, 
  Smartphone, 
  Globe
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function ProjectsGrid() {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<"all" | "mobile" | "web">("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "mobile") return p.category.toLowerCase().includes("android") || p.category.toLowerCase().includes("mobile");
    if (filter === "web") return p.category.toLowerCase().includes("web") || p.category.toLowerCase().includes("edge");
    return true;
  });

  return (
    <section id="projects" className="py-12 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--neutral-strong)]">
            Featured Projects
          </h2>
          <p className="text-[var(--neutral-medium)] text-sm">
            Local-first systems, keyframe video engines, and high-speed web platforms.
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 rounded-xl magic-panel self-start sm:self-auto">
          {(["all", "mobile", "web"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 text-xs font-medium rounded-lg capitalize transition-all ${
                filter === cat
                  ? "bg-[var(--neutral-strong)] text-[var(--background)] shadow-sm"
                  : "text-[var(--neutral-medium)] hover:text-[var(--neutral-strong)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="magic-panel p-6 sm:p-7 rounded-2xl space-y-3 relative group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--brand-primary)] flex items-center gap-1.5">
                {project.category.includes("Android") ? <Smartphone className="w-3.5 h-3.5" /> : <Globe className="w-3.5 h-3.5" />}
                {project.category}
              </span>
              
              <span className="magic-tag px-2.5 py-0.5 rounded-full text-xs font-mono text-emerald-500">
                {project.metrics}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[var(--neutral-strong)] group-hover:text-[var(--brand-primary)] transition-colors mb-1">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-[var(--brand-secondary)] mb-2">
                {project.tagline}
              </p>
              <p className="text-sm text-[var(--neutral-medium)] leading-relaxed max-w-[65ch]">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[var(--neutral-border)]">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span 
                    key={tag.name}
                    className="magic-tag px-2.5 py-0.5 rounded-md text-xs font-mono"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="magic-panel px-3.5 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 text-[var(--neutral-strong)] hover:border-[var(--brand-primary)]"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-[var(--neutral-strong)] text-[var(--background)] flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
