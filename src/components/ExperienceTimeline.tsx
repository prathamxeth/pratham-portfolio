"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  ChevronDown, 
  MapPin, 
  Calendar,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function ExperienceTimeline() {
  const { experiences, education } = PORTFOLIO_DATA;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-16 md:py-20 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Experience & Education
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            Engineering leadership, native systems architecture, and mathematical foundation.
          </p>
        </div>

        <div className="space-y-10">
          
          {/* Work Experience */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-indigo-500" />
              <span>Work Experience</span>
            </div>

            <div className="space-y-4">
              {experiences.map((exp, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div 
                    key={exp.company}
                    onClick={() => toggleExpand(idx)}
                    className="apple-glass p-6 cursor-pointer space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="font-bold text-base sm:text-lg text-zinc-950 dark:text-white">
                          {exp.role}
                        </span>
                        <span className="text-zinc-400">@</span>
                        <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                          {exp.company}
                        </span>
                        <span className="apple-glass-pill px-2.5 py-0.5 rounded-full text-xs font-medium">
                          {exp.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
                      {exp.description}
                    </p>

                    {/* Expandable Highlights */}
                    {isExpanded && (
                      <div className="pt-3 border-t border-black/5 dark:border-white/5 space-y-2">
                        <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 max-w-[65ch]">
                          {exp.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Pills */}
                    <div className="flex items-center justify-between pt-3 border-t border-black/5 dark:border-white/5 flex-wrap gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span 
                            key={t}
                            className="apple-glass-pill px-2.5 py-0.5 rounded-md text-xs font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">
                        <span>{isExpanded ? "Less" : "Details"}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-purple-500" />
              <span>Education</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.map((edu) => (
                <div key={edu.institution} className="apple-glass p-5 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="apple-glass-pill px-2.5 py-0.5 rounded-full text-xs font-mono">
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-zinc-950 dark:text-white">
                      {edu.institution}
                    </h4>

                    <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {edu.degree}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-black/5 dark:border-white/5 text-xs text-zinc-600 dark:text-zinc-400">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
