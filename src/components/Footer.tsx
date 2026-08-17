"use client";

import React from "react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, WhatsAppIcon } from "./Icons";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <footer className="py-8 sm:py-10 border-t border-(--neutral-border) relative z-10 safe-paddings">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-(--neutral-medium) text-center sm:text-left">
        
        {/* Left Info */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
          <span>© 2026</span>
          <span className="text-(--neutral-weak)">/</span>
          <span className="font-semibold text-(--neutral-strong)">{profile.name}</span>
          <span className="text-(--neutral-weak)">({profile.handle})</span>
          <span className="hidden xs:inline">•</span>
          <span className="block xs:inline w-full xs:w-auto text-(--neutral-weak)">Lucknow & Kanpur, India</span>
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
    </footer>
  );
}
