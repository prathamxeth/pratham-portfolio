"use client";

import React from "react";
import { Cpu, CheckCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function SkillsCloud() {
  const { skillCategories } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-indigo-600 dark:text-indigo-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Skills & Ecosystem
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl">
            A comprehensive overview of languages, frameworks, edge runtimes, and engineering principles used across daily builds.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div 
              key={cat.name}
              className="glass-panel p-6 rounded-3xl border border-black/5 dark:border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                    {cat.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-zinc-950 dark:text-white">
                      {cat.name}
                    </h3>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                      {cat.skills.length} core technologies
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="glass-pill px-3 py-1.5 rounded-xl text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
