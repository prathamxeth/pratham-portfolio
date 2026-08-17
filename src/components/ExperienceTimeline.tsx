"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  ChevronDown, 
  MapPin, 
  Calendar,
  Sparkles,
  CheckCircle2,
  Building
} from "lucide-react";
import { PORTFOLIO_DATA, WorkExperience, Education } from "../data/portfolioData";

export default function ExperienceTimeline() {
  const { experiences, education } = PORTFOLIO_DATA;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-indigo-600 dark:text-indigo-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & ACADEMIC TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Experience & Education
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl">
            A journey rooted in performance-first native engineering, scalable product systems, and mathematical rigor.
          </p>
        </div>

        {/* Experience & Education Grid */}
        <div className="space-y-12">
          
          {/* Work Experience Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
              <span className="p-1 rounded-md bg-indigo-500/10 text-indigo-500">
                <Briefcase className="w-4 h-4" />
              </span>
              <span>Work Experience</span>
            </h3>

            <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 pl-6 sm:pl-8 space-y-8">
              {experiences.map((exp, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div key={exp.company} className="relative group">
                    {/* Timeline node icon */}
                    <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-zinc-950 border-2 border-indigo-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <span className="text-xs">{exp.logo}</span>
                    </div>

                    {/* Card */}
                    <div 
                      onClick={() => toggleExpand(idx)}
                      className="glass-panel p-5 sm:p-6 rounded-2xl cursor-pointer border border-black/5 dark:border-white/10 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h4 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {exp.role}
                            </h4>
                            <span className="text-zinc-400 dark:text-zinc-500 font-normal">@</span>
                            <span className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
                              {exp.company}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                              {exp.badge}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                          <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{exp.location}</span>
                      </div>

                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Expandable Highlights */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 space-y-2.5 animate-fadeIn">
                          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                            Key Achievements & Architecture
                          </div>
                          <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
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
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex-wrap gap-2">
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tech.map((t) => (
                            <span 
                              key={t}
                              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
                          <span>{isExpanded ? "Less details" : "More details"}</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6 pt-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
              <span className="p-1 rounded-md bg-purple-500/10 text-purple-500">
                <GraduationCap className="w-4 h-4" />
              </span>
              <span>Education</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.map((edu) => (
                <div 
                  key={edu.institution}
                  className="glass-panel p-5 sm:p-6 rounded-2xl border border-black/5 dark:border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-2xl">{edu.icon}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="font-bold text-base sm:text-lg text-zinc-950 dark:text-white mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                      {edu.degree}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-3 border-t border-black/5 dark:border-white/5 text-xs text-zinc-600 dark:text-zinc-400">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
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
