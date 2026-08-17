"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
  Smartphone, 
  Zap, 
  ShieldCheck,
  ExternalLink
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
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#6366f1", "#8b5cf6", "#ec4899"]
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Decorative ambient background light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill mb-6 text-xs font-medium text-zinc-700 dark:text-zinc-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{profile.status}</span>
        </div>

        {/* Profile Header Main Flex */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div className="flex-1 space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  {profile.name}
                </h1>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  {profile.handle}
                </span>
              </div>
              <p className="text-lg sm:text-xl font-medium text-zinc-700 dark:text-zinc-300">
                {profile.headline}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                <span>{profile.location}</span>
              </div>
              <span>•</span>
              <span className="font-mono text-zinc-600 dark:text-zinc-300">{profile.subhead}</span>
            </div>
          </div>

          {/* Avatar with Glow Aura */}
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-md opacity-50 group-hover:opacity-85 transition duration-500" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden glass-panel border border-white/20 dark:border-white/10 shadow-xl flex items-center justify-center bg-gradient-to-b from-zinc-800 to-zinc-950">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={112}
                height={112}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
                onError={(e) => {
                  // Fallback to stylized monogram if external image fails
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement("div");
                    fallback.className = "text-3xl font-bold font-mono text-indigo-400";
                    fallback.innerText = "PU";
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Bio paragraph with high-contrast emphasis */}
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mb-8">
          {profile.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-md hover:shadow-lg hover:gap-3"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium glass-panel text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono glass-pill text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            title="Copy Email to Clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Highlight Metrics Strip (Bento preview) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="glass-panel p-4 rounded-2xl border border-black/5 dark:border-white/5">
            <div className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 mb-1">
              <Smartphone className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Mobile</span>
            </div>
            <div className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">Kotlin 2.0+</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Jetpack Compose & Media3</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-black/5 dark:border-white/5">
            <div className="flex items-center gap-2 text-amber-500 dark:text-amber-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Latency</span>
            </div>
            <div className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">Zero-Latency</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">State-Latch Keyframes</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-black/5 dark:border-white/5">
            <div className="flex items-center gap-2 text-emerald-500 dark:text-emerald-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Architecture</span>
            </div>
            <div className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">Local-First</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Privacy & Clean Arch</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-black/5 dark:border-white/5">
            <div className="flex items-center gap-2 text-purple-500 dark:text-purple-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Academics</span>
            </div>
            <div className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">IIT Madras</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">BS in Data Science</div>
          </div>
        </div>
      </div>
    </section>
  );
}
