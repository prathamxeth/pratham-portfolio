"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  MapPin, 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
  Sparkles,
  Smartphone,
  Zap,
  Shield,
  GraduationCap
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import confetti from "canvas-confetti";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const { profile } = PORTFOLIO_DATA;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 55,
      origin: { y: 0.8 },
      colors: ["#6366f1", "#a855f7", "#ec4899"]
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-20 relative z-10">
      <div className="max-w-3xl mx-auto px-6">

        {/* Hero Card Container (Apple Glass) */}
        <div className="apple-glass p-7 sm:p-9 mb-8">
          <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-6 mb-6">
            
            <div className="space-y-2.5 flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
                {profile.name}
              </h1>
              
              <p className="text-base sm:text-lg font-semibold text-vibrant-gradient">
                {profile.headline}
              </p>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>{profile.location}</span>
                </div>
                <span>•</span>
                <span className="font-mono text-zinc-700 dark:text-zinc-300">{profile.subhead}</span>
              </div>
            </div>

            {/* Avatar with Specular Ring */}
            <div className="relative group shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/40 dark:border-white/20 shadow-xl bg-zinc-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  unoptimized
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement("div");
                      fallback.className = "text-xl font-bold font-mono text-white";
                      fallback.innerText = "PU";
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>

          </div>

          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[65ch] mb-8">
            {profile.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium apple-glass-pill hover:border-indigo-500 transition-colors"
            >
              <Mail className="w-4 h-4 text-indigo-500" />
              <span>Get in Touch</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono apple-glass-pill hover:border-indigo-500 transition-colors"
              title="Copy Email to Clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{profile.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Frosted Grid Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          <div className="apple-glass p-4 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-indigo-500 mb-1">
              <Smartphone className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Mobile</span>
            </div>
            <div className="font-bold text-sm text-zinc-950 dark:text-white">Kotlin 2.0+</div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">Jetpack Compose</div>
          </div>

          <div className="apple-glass p-4 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-amber-500 mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Latency</span>
            </div>
            <div className="font-bold text-sm text-zinc-950 dark:text-white">Zero-Latency</div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">State-Latch Keyframe</div>
          </div>

          <div className="apple-glass p-4 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-emerald-500 mb-1">
              <Shield className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Privacy</span>
            </div>
            <div className="font-bold text-sm text-zinc-950 dark:text-white">Local-First</div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">Clean Architecture</div>
          </div>

          <div className="apple-glass p-4 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-purple-500 mb-1">
              <GraduationCap className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Academics</span>
            </div>
            <div className="font-bold text-sm text-zinc-950 dark:text-white">IIT Madras</div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">BS in Data Science</div>
          </div>
        </div>

      </div>
    </section>
  );
}
