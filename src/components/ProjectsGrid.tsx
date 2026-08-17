"use client";

import React, { useState } from "react";
import { 
  Layers, 
  ExternalLink, 
  Github, 
  Smartphone, 
  Globe, 
  Sparkles, 
  Terminal,
  Activity
} from "lucide-react";
import { PORTFOLIO_DATA, Project } from "../data/portfolioData";

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
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-indigo-600 dark:text-indigo-400">
              <Layers className="w-3.5 h-3.5" />
              <span>CRAFTED SYSTEMS & PLATFORMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-lg">
              High-performance applications built with local-first keyframes, zero algorithm feeds, and liquid responsive design.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-full glass-panel border border-black/5 dark:border-white/10 self-start md:self-auto">
            {(["all", "mobile", "web"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-xs font-medium rounded-full capitalize transition-all ${
                  filter === cat
                    ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative glass-panel rounded-3xl p-6 sm:p-7 border border-black/5 dark:border-white/10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Background gradient decorative glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${project.colorGradient} rounded-full blur-3xl opacity-40 group-hover:opacity-75 transition-opacity pointer-events-none -z-10`} />

              <div>
                {/* Category & Metrics Top Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1.5">
                    {project.category.includes("Android") ? <Smartphone className="w-3.5 h-3.5" /> : <Globe className="w-3.5 h-3.5" />}
                    {project.category}
                  </span>
                  
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {project.metrics}
                  </span>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                  {project.title}
                </h3>
                
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3">
                  {project.tagline}
                </p>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Footer with Tags and Action Links */}
              <div className="space-y-4 pt-4 border-t border-black/5 dark:border-white/5">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium glass-pill text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 group/btn"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-sm"
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
