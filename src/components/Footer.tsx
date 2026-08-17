"use client";

import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

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
    <footer className="py-12 pb-28 border-t border-black/5 dark:border-white/5 relative z-10">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
        
        {/* Location & Time */}
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-indigo-500" />
          <span>Lucknow & Kanpur, India</span>
          <span>•</span>
          <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300">{currentTime || "IST (UTC+5:30)"}</span>
        </div>

        {/* Attribution */}
        <div>
          <span>© 2026 </span>
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">Prathmesh Upadhyay</span>
          <span> (@prathamxeth)</span>
        </div>

      </div>
    </footer>
  );
}
