"use client";

import React from "react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterXIcon, WhatsAppIcon } from "./Icons";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <footer className="py-10 border-t border-[var(--neutral-border)] relative z-10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[var(--neutral-medium)]">
        
        {/* Left Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span>© 2026 /</span>
          <span className="font-semibold text-[var(--neutral-strong)]">{profile.name}</span>
          <span className="text-[var(--neutral-weak)]">({profile.handle})</span>
          <span>•</span>
          <span>Lucknow & Kanpur, India</span>
        </div>

        {/* Right Social Liquid Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-xl liquid-icon-btn text-[var(--neutral-medium)] hover:text-[var(--neutral-strong)]"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-xl liquid-icon-btn text-[var(--neutral-medium)] hover:text-[var(--neutral-strong)]"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={profile.x}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-xl liquid-icon-btn text-[var(--neutral-medium)] hover:text-[var(--neutral-strong)]"
            title="X (Twitter)"
            aria-label="X Profile"
          >
            <TwitterXIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={profile.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-xl liquid-icon-btn text-[var(--neutral-medium)] hover:text-[var(--neutral-strong)]"
            title="WhatsApp"
            aria-label="WhatsApp Direct"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="w-8 h-8 rounded-xl liquid-icon-btn text-[var(--neutral-medium)] hover:text-[var(--neutral-strong)]"
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
