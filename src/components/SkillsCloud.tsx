"use client";

import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function SkillsCloud() {
  const { technicalSkills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-12 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--neutral-strong)]">
          Skills & Ecosystem
        </h2>
        <p className="text-[var(--neutral-medium)] text-sm">
          Core technologies, mobile architecture, cloud infrastructure, and toolchains.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {technicalSkills.map((cat) => (
          <div key={cat.title} className="magic-panel p-5 rounded-2xl space-y-3 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--neutral-strong)] flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)]" />
                <span>{cat.title}</span>
              </h3>
              <p className="text-xs text-[var(--neutral-medium)]">
                {cat.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {cat.tags.map((skill) => (
                <span 
                  key={skill.name}
                  className="magic-tag px-2.5 py-1 rounded-lg text-xs"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
