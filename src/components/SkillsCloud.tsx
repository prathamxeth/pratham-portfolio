"use client";

import React from "react";
import { Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function SkillsCloud() {
  const { skillCategories } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-16 md:py-20 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Skills & Ecosystem
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            Core technologies, mobile architecture, cloud infrastructure, and toolchains.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillCategories.map((cat) => (
            <div key={cat.name} className="apple-glass p-5 space-y-3 flex flex-col justify-between">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>{cat.name}</span>
              </h3>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="apple-glass-pill px-2.5 py-1 rounded-lg text-xs font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
