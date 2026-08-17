"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  ChevronDown, 
  MapPin, 
  Calendar,
  CheckCircle2
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function ExperienceTimeline() {
  const { experiences, education } = PORTFOLIO_DATA;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-12 space-y-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--neutral-strong)]">
          Experience & Studies
        </h2>
        <p className="text-[var(--neutral-medium)] text-sm">
          Career trajectory, engineering leadership, and academic foundation.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div key={exp.company} className="magic-panel p-6 rounded-2xl space-y-3">
              <div 
                onClick={() => toggleExpand(idx)}
                className="cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-1"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-base text-[var(--neutral-strong)]">
                    {exp.company}
                  </span>
                  <span className="text-xs text-[var(--neutral-weak)]">•</span>
                  <span className="text-xs font-semibold text-[var(--brand-primary)]">
                    {exp.role}
                  </span>
                  <span className="magic-tag px-2 py-0.5 rounded text-[10px]">
                    {exp.badge}
                  </span>
                </div>

                <span className="text-xs font-mono text-[var(--neutral-weak)]">
                  {exp.timeframe}
                </span>
              </div>

              <p className="text-sm text-[var(--neutral-medium)] leading-relaxed">
                {exp.description}
              </p>

              {isExpanded && (
                <div className="pt-2 space-y-1.5">
                  <ul className="space-y-1.5 text-xs text-[var(--neutral-medium)]">
                    {exp.achievements.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-[var(--neutral-border)] flex-wrap gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className="magic-tag px-2 py-0.5 rounded text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => toggleExpand(idx)}
                  className="text-xs text-[var(--neutral-weak)] hover:text-[var(--neutral-strong)] flex items-center gap-1"
                >
                  <span>{isExpanded ? "Less" : "Details"}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
