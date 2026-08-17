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
  Mail
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
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-16">
      
      {/* Hero Section */}
      <section className="space-y-8">
        
        {/* Profile Main Header */}
        <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-(--neutral-strong)">
                {profile.name}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-(--brand-primary)">
                {profile.headline}
              </p>
            </div>

            <p className="text-xs sm:text-sm font-mono text-(--neutral-medium)">
              {profile.subhead} • {profile.location}
            </p>
          </div>

          {/* Profile Avatar with Liquid Glass Specular Rim */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-(--liquid-glass-border) shadow-xl relative bg-zinc-900 shrink-0">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="object-cover"
              sizes="112px"
              priority
            />
          </div>
        </div>

        {/* Bio Text */}
        <p className="text-base sm:text-lg text-(--neutral-medium) leading-relaxed max-w-[65ch]">
          {profile.tagline}
        </p>

        {/* Liquid Glass Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/work"
            className="liquid-primary-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium"
          >
            <span>View Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/about"
            className="liquid-button inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-(--neutral-strong)"
          >
            <span>About Me</span>
            <ChevronRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="liquid-button inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-(--neutral-strong)"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </Link>

          <button
            onClick={handleCopyEmail}
            className="liquid-button inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono text-(--neutral-medium) hover:text-(--neutral-strong)"
            title="Copy Email"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Liquid Glass Metric Capsules (4-Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4">
          <div className="liquid-glass p-4 rounded-3xl space-y-1">
            <div className="flex items-center gap-1.5 text-(--brand-primary)">
              <Smartphone className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-(--neutral-weak)">Mobile Core</span>
            </div>
            <div className="font-bold text-sm text-(--neutral-strong)">Kotlin 2.0+</div>
            <div className="text-xs text-(--neutral-medium)">Compose & Media3</div>
          </div>

          <div className="liquid-glass p-4 rounded-3xl space-y-1">
            <div className="flex items-center gap-1.5 text-amber-500">
              <Zap className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-(--neutral-weak)">Engine</span>
            </div>
            <div className="font-bold text-sm text-(--neutral-strong)">Zero-Latency</div>
            <div className="text-xs text-(--neutral-medium)">State-Latch Keyframe</div>
          </div>

          <div className="liquid-glass p-4 rounded-3xl space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-500">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-(--neutral-weak)">Privacy</span>
            </div>
            <div className="font-bold text-sm text-(--neutral-strong)">Local-First</div>
            <div className="text-xs text-(--neutral-medium)">Clean Architecture</div>
          </div>

          <div className="liquid-glass p-4 rounded-3xl space-y-1">
            <div className="flex items-center gap-1.5 text-(--brand-peach)">
              <GraduationCap className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-(--neutral-weak)">Academics</span>
            </div>
            <div className="font-bold text-sm text-(--neutral-strong)">IIT Madras</div>
            <div className="text-xs text-(--neutral-medium)">BS Data Science</div>
          </div>
        </div>

      </section>

      {/* Featured Projects Liquid Preview Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-(--neutral-strong)">
            Featured Projects
          </h2>
          <Link
            href="/work"
            className="text-xs font-medium text-(--brand-primary) hover:underline flex items-center gap-1"
          >
            <span>View All Work</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="liquid-glass p-6 sm:p-7 rounded-3xl space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-(--brand-primary)">
                  {project.category}
                </span>
                <span className="magic-tag px-3 py-0.5 rounded-full text-xs font-mono">
                  {project.metrics}
                </span>
              </div>

              <h3 className="text-xl font-bold text-(--neutral-strong) group-hover:text-(--brand-primary) transition-colors">
                {project.title}
              </h3>
              
              <p className="text-xs font-medium text-(--brand-secondary)">
                {project.tagline}
              </p>

              <p className="text-sm text-(--neutral-medium) leading-relaxed max-w-[65ch]">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-(--neutral-border)">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="magic-tag px-2.5 py-0.5 rounded-full text-xs font-mono"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="liquid-button px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1.5 text-(--neutral-strong)"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="liquid-primary-btn px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1.5"
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
