"use client";

import React, { useState, useEffect } from "react";
import { Clock, MapPin, Heart, ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const timeStr = new Intl.DateTimeFormat("en-US", options).format(new Date());
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 pb-28 border-t border-black/5 dark:border-white/5 relative bg-gradient-to-t from-black/[0.02] dark:from-white/[0.02] to-transparent">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 dark:text-zinc-400">
        
        {/* Left: Location & Local Time */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-1.5 font-medium text-zinc-700 dark:text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-indigo-500" />
            <span>Lucknow & Kanpur, India</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <Clock className="w-3 h-3 text-indigo-400 animate-spin-slow" />
            <span>{currentTime || "IST (UTC+5:30)"}</span>
          </div>
        </div>

        {/* Right: Copyright */}
        <div className="flex items-center gap-1.5">
          <span>© 2026</span>
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">Prathmesh Upadhyay</span>
          <span>(asurxeth)</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-zinc-400">
            Built with Next.js &amp; Tailwind
          </span>
        </div>

      </div>
    </footer>
  );
}
