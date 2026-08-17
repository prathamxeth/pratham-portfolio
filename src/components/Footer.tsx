"use client";

import React, { useState, useEffect } from "react";
import { Globe, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, WhatsAppIcon } from "./Icons";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatted = new Intl.DateTimeFormat("en-GB", options).format(new Date());
      setTimeString(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-8 sm:py-10 border-t border-(--neutral-border) relative z-10 safe-paddings">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
        
        {/* Live IST Timezone & Status Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl liquid-glass text-xs font-mono">
          <div className="flex items-center gap-2 text-(--neutral-medium)">
            <Globe className="w-3.5 h-3.5 text-(--brand-primary) shrink-0" />
            <span className="font-semibold text-(--neutral-strong)">{profile.timezone}</span>
            <span className="text-(--neutral-weak)">•</span>
            <span className="text-(--neutral-medium)">IST (UTC+5:30)</span>
          </div>

          <div className="flex items-center gap-3 text-(--neutral-strong)">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-(--brand-secondary) shrink-0" />
              <span className="font-bold tracking-wider">{timeString || "00:00:00"}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-500 font-sans font-medium bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span>Available</span>
            </div>
          </div>
        </div>

        {/* Bottom Details & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-(--neutral-medium) text-center sm:text-left">
          
          {/* Left Info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
            <span>© 2026</span>
            <span className="text-(--neutral-weak)">/</span>
            <span className="font-semibold text-(--neutral-strong)">{profile.name}</span>
            <span className="text-(--neutral-weak)">({profile.handle})</span>
            <span className="hidden xs:inline">•</span>
            <span className="block xs:inline w-full xs:w-auto text-(--neutral-weak)">{profile.location}</span>
          </div>

          {/* Right Social Liquid Buttons */}
          <div className="flex items-center justify-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-xl liquid-icon-btn text-(--neutral-medium) hover:text-(--neutral-strong)"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-xl liquid-icon-btn text-(--neutral-medium) hover:text-(--neutral-strong)"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={profile.x}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-xl liquid-icon-btn text-(--neutral-medium) hover:text-(--neutral-strong)"
              title="X (Twitter)"
              aria-label="X Profile"
            >
              <TwitterXIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-xl liquid-icon-btn text-(--neutral-medium) hover:text-(--neutral-strong)"
              title="WhatsApp"
              aria-label="WhatsApp Direct"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="w-8 h-8 rounded-xl liquid-icon-btn text-(--neutral-medium) hover:text-(--neutral-strong)"
              title="Email"
              aria-label="Direct Email"
            >
              <span className="text-xs">✉️</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
