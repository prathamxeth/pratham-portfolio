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
    <section id="projects" className="py-16 md:py-20 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Local-first systems, keyframe video engines, and high-speed web platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 p-1 rounded-full apple-dock self-start sm:self-auto">
            {(["all", "mobile", "web"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-xs font-medium rounded-full capitalize transition-all ${
                  filter === cat
                    ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="apple-glass p-6 sm:p-8 space-y-4 relative overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                    {project.category.includes("Android") ? <Smartphone className="w-3.5 h-3.5" /> : <Globe className="w-3.5 h-3.5" />}
                    {project.category}
                  </span>
                </div>
                
                <span className="apple-glass-pill px-2.5 py-0.5 rounded-full text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                  {project.metrics}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white group-hover:underline transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-3">
                  {project.tagline}
                </p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/5 dark:border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="apple-glass-pill px-2.5 py-0.5 rounded-md text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium apple-glass-pill hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:opacity-90 transition-opacity shadow-sm"
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

      </div>
    </section>
  );
}
