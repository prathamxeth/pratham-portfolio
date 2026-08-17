"use client";

import React from "react";
import Image from "next/image";
import { 
  Globe, 
  Calendar, 
  ChevronRight, 
  CheckCircle2, 
  Cpu, 
  GraduationCap, 
  Briefcase 
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "../../components/Icons";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

export default function AboutPage() {
  const { profile, experiences, education, technicalSkills } = PORTFOLIO_DATA;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
      
      {/* Main Two-Column Structure */}
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-14">
        
        {/* Left Sticky Avatar & Profile Summary Column */}
        <div className="md:w-56 shrink-0 md:sticky md:top-24 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          
          {/* Avatar with Liquid Glass Specular Border */}
          <div className="w-36 h-36 rounded-full overflow-hidden border border-(--liquid-glass-border) shadow-2xl relative bg-zinc-900">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="object-cover"
              sizes="144px"
              priority
            />
          </div>

          {/* Timezone / Location */}
          <div className="flex items-center gap-1.5 text-xs text-(--neutral-medium)">
            <Globe className="w-3.5 h-3.5 text-(--brand-primary)" />
            <span>{profile.timezone}</span>
          </div>

          {/* Language Badges */}
          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
            {profile.languages.map((lang) => (
              <span
                key={lang}
                className="magic-tag px-2.5 py-0.5 rounded-full text-xs"
              >
                {lang}
              </span>
            ))}
          </div>

        </div>

        {/* Right Content Stream */}
        <div className="flex-1 space-y-12">
          
          {/* Section: Introduction */}
          <section id="Introduction" className="space-y-4 pt-2">
            
            {/* Schedule Call Pill */}
            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="liquid-button inline-flex items-center gap-2 p-1.5 pl-3.5 rounded-full text-(--brand-primary) text-xs font-medium hover:scale-[1.02] active:scale-95 transition-all shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule a call / WhatsApp</span>
              <div className="w-5 h-5 rounded-full bg-(--brand-primary) text-white flex items-center justify-center">
                <ChevronRight className="w-3 h-3" />
              </div>
            </a>

            {/* Name & Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--neutral-strong)">
                {profile.name}
              </h1>
              <p className="text-base font-medium text-(--brand-secondary)">
                {profile.headline}
              </p>
            </div>

            {/* Social Action Liquid Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="liquid-button px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 text-(--neutral-strong)"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="liquid-button px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 text-(--neutral-strong)"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.x}
                target="_blank"
                rel="noreferrer"
                className="liquid-button px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 text-(--neutral-strong)"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
                <span>X (Twitter)</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="liquid-button px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 text-(--neutral-strong)"
              >
                <span className="text-xs">✉️</span>
                <span>Email</span>
              </a>
            </div>

            {/* Bio Body */}
            <p className="text-sm sm:text-base text-(--neutral-medium) leading-relaxed pt-2 max-w-[65ch]">
              {profile.bio}
            </p>

          </section>

          {/* Section: Work Experience */}
          <section id="Work Experience" className="space-y-6 pt-6 border-t border-(--neutral-border)">
            <h2 className="text-lg font-bold text-(--neutral-strong) flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-(--brand-primary)" />
              <span>Work Experience</span>
            </h2>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.company} className="liquid-glass p-6 rounded-3xl space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-base text-(--neutral-strong)">
                        {exp.company}
                      </span>
                      <span className="text-xs text-(--neutral-weak)">•</span>
                      <span className="text-xs font-semibold text-(--brand-primary)">
                        {exp.role}
                      </span>
                      <span className="magic-tag px-2 py-0.5 rounded text-[10px]">
                        {exp.badge}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-(--neutral-weak)">
                      {exp.timeframe}
                    </span>
                  </div>

                  <p className="text-sm text-(--neutral-medium) leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet Achievements */}
                  <ul className="space-y-1.5 pt-1 text-xs text-(--neutral-medium) max-w-[65ch]">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="magic-tag px-2 py-0.5 rounded text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Studies */}
          <section id="Studies" className="space-y-6 pt-6 border-t border-(--neutral-border)">
            <h2 className="text-lg font-bold text-(--neutral-strong) flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-(--brand-peach)" />
              <span>Studies</span>
            </h2>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.name} className="liquid-glass p-6 rounded-3xl space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-bold text-base text-(--neutral-strong)">
                      {edu.name}
                    </h3>
                    <span className="text-xs font-mono text-(--neutral-weak)">
                      {edu.timeframe}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-(--brand-primary)">
                    {edu.degree}
                  </p>

                  <p className="text-xs text-(--neutral-medium)">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Technical Skills */}
          <section id="Technical skills" className="space-y-6 pt-6 border-t border-(--neutral-border)">
            <h2 className="text-lg font-bold text-(--neutral-strong) flex items-center gap-2">
              <Cpu className="w-4 h-4 text-(--brand-secondary)" />
              <span>Technical skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill) => (
                <div key={skill.title} className="liquid-glass p-5 rounded-3xl space-y-2">
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-(--neutral-strong)">
                    {skill.title}
                  </h3>
                  
                  <p className="text-xs text-(--neutral-medium)">
                    {skill.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag.name}
                        className="magic-tag px-2.5 py-0.5 rounded-full text-xs"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>

    </div>
  );
}
