"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  GraduationCap, 
  ExternalLink,
  ChevronRight,
  Mail,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import TerminalMatrix from "../components/TerminalMatrix";
import confetti from "canvas-confetti";

export default function HomePage() {
  const { profile, projects } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.8 },
      colors: ["#17C0FD", "#049EE2", "#FF9689"]
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-12 sm:space-y-16">
      
      {/* Hero Section */}
      <section className="space-y-6 sm:space-y-8">
        
        {/* Profile Main Header */}
        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start text-center sm:text-left justify-between gap-6">
          <div className="space-y-2.5 sm:space-y-3 flex-1">
            <div className="space-y-1">
              <div className="inline-flex sm:hidden items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-(--brand-primary) bg-(--liquid-active-bg) border border-(--liquid-active-border) mb-1">
                <Sparkles className="w-3 h-3" />
                <span>CTO & Developer</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-(--neutral-strong)">
                {profile.name}
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-(--brand-primary)">
                {profile.headline}
              </p>
            </div>

            <p className="text-xs sm:text-sm font-mono text-(--neutral-medium)">
              {profile.subhead} • {profile.location}
            </p>
          </div>

          {/* Profile Avatar with Liquid Glass Specular Rim */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-(--liquid-glass-border) shadow-xl relative bg-zinc-900 shrink-0">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 96px, 112px"
              priority
            />
          </div>
        </div>

        {/* Bio Text */}
        <p className="text-sm sm:text-base md:text-lg text-(--neutral-medium) leading-relaxed text-center sm:text-left max-w-[65ch] mx-auto sm:mx-0">
          {profile.tagline}
        </p>

        {/* Liquid Glass Action Buttons */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
          <Link
            href="/work"
            className="liquid-primary-btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium flex-1 sm:flex-initial min-w-30"
          >
            <span>View Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/about"
            className="liquid-button inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-(--neutral-strong) flex-1 sm:flex-initial min-w-30"
          >
            <span>About Me</span>
            <ChevronRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="liquid-button inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-(--neutral-strong)"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </Link>

          <button
            onClick={handleCopyEmail}
            className="liquid-button inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono text-(--neutral-medium) hover:text-(--neutral-strong)"
            title="Copy Email"
            aria-label="Copy Email"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">{profile.email}</span>
                <span className="xs:hidden">Email</span>
              </>
            )}
          </button>
        </div>

        {/* Liquid Glass Metric Capsules (4-Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-2 sm:pt-4">
          <div className="liquid-glass p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl space-y-1">
            <div className="flex items-center gap-1.5 text-(--brand-primary)">
              <Smartphone className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-(--neutral-weak)">Mobile Core</span>
            </div>
            <div className="font-bold text-xs sm:text-sm text-(--neutral-strong)">Kotlin 2.0+</div>
            <div className="text-[11px] sm:text-xs text-(--neutral-medium) truncate">Compose & Media3</div>
          </div>

          <div className="liquid-glass p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl space-y-1">
            <div className="flex items-center gap-1.5 text-amber-500">
              <Zap className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-(--neutral-weak)">Engine</span>
            </div>
            <div className="font-bold text-xs sm:text-sm text-(--neutral-strong)">Zero-Latency</div>
            <div className="text-[11px] sm:text-xs text-(--neutral-medium) truncate">State-Latch Keyframe</div>
          </div>

          <div className="liquid-glass p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-500">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-(--neutral-weak)">Privacy</span>
            </div>
            <div className="font-bold text-xs sm:text-sm text-(--neutral-strong)">Local-First</div>
            <div className="text-[11px] sm:text-xs text-(--neutral-medium) truncate">Clean Architecture</div>
          </div>

          <div className="liquid-glass p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl space-y-1">
            <div className="flex items-center gap-1.5 text-(--brand-peach)">
              <GraduationCap className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-(--neutral-weak)">Academics</span>
            </div>
            <div className="font-bold text-xs sm:text-sm text-(--neutral-strong)">IIT Madras</div>
            <div className="text-[11px] sm:text-xs text-(--neutral-medium) truncate">BS Data Science</div>
          </div>
        </div>

      </section>

      {/* Featured Projects Liquid Preview Section */}
      <section className="space-y-4 sm:space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-(--neutral-strong)">
            Featured Projects
          </h2>
          <Link
            href="/work"
            className="text-xs font-medium text-(--brand-primary) hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="liquid-glass p-5 sm:p-7 rounded-2xl sm:rounded-3xl space-y-3 relative group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-(--brand-primary)">
                  {project.category}
                </span>
                <span className="magic-tag px-2.5 sm:px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-mono">
                  {project.metrics}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-(--neutral-strong) group-hover:text-(--brand-primary) transition-colors">
                {project.title}
              </h3>
              
              <p className="text-xs font-medium text-(--brand-secondary)">
                {project.tagline}
              </p>

              <p className="text-xs sm:text-sm text-(--neutral-medium) leading-relaxed max-w-[65ch]">
                {project.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-(--neutral-border)">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="magic-tag px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="liquid-button px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-1.5 text-(--neutral-strong)"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="liquid-primary-btn px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-1.5"
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

      {/* PALZEE Architecture Code Engine Widget */}
      <TerminalMatrix />

    </div>
  );
}
