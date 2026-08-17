"use client";

import React, { useState, useEffect } from "react";
import { 
  User, 
  Briefcase, 
  Layers, 
  Cpu, 
  Terminal, 
  Mail, 
  ArrowUp
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./Icons";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function BlurDock() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ["hero", "experience", "projects", "skills", "terminal", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "About", icon: User },
    { id: "experience", label: "Work", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Layers },
    { id: "skills", label: "Skills", icon: Cpu },
    { id: "terminal", label: "Specs", icon: Terminal },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center items-center pointer-events-none px-4">
      <nav 
        aria-label="Floating Dock Navigation"
        className="pointer-events-auto flex items-center gap-1.5 px-3 py-2 rounded-full apple-dock transition-all duration-300 hover:scale-[1.02]"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`group relative p-2.5 rounded-full transition-all duration-200 ${
                isActive 
                  ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-md scale-105" 
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
              }`}
              title={item.label}
              aria-label={item.label}
            >
              <Icon className="w-4 h-4" />
              
              {/* Apple Style Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform px-2.5 py-1 text-[11px] font-medium rounded-lg bg-zinc-950/90 text-white dark:bg-white/95 dark:text-zinc-950 shadow-lg backdrop-blur-md whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </button>
          );
        })}

        <div className="h-4 w-[1px] bg-black/10 dark:bg-white/15 mx-1" />

        {/* External Links */}
        <a
          href={PORTFOLIO_DATA.profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className="group relative p-2.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all"
        >
          <GithubIcon className="w-4 h-4" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform px-2.5 py-1 text-[11px] font-medium rounded-lg bg-zinc-950/90 text-white dark:bg-white/95 dark:text-zinc-950 shadow-lg backdrop-blur-md whitespace-nowrap pointer-events-none">
            GitHub
          </span>
        </a>

        <a
          href={PORTFOLIO_DATA.profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          className="group relative p-2.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all"
        >
          <LinkedinIcon className="w-4 h-4" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform px-2.5 py-1 text-[11px] font-medium rounded-lg bg-zinc-950/90 text-white dark:bg-white/95 dark:text-zinc-950 shadow-lg backdrop-blur-md whitespace-nowrap pointer-events-none">
            LinkedIn
          </span>
        </a>

        <a
          href={PORTFOLIO_DATA.profile.x}
          target="_blank"
          rel="noreferrer"
          aria-label="X (Twitter) Profile"
          className="group relative p-2.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all"
        >
          <TwitterXIcon className="w-4 h-4" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform px-2.5 py-1 text-[11px] font-medium rounded-lg bg-zinc-950/90 text-white dark:bg-white/95 dark:text-zinc-950 shadow-lg backdrop-blur-md whitespace-nowrap pointer-events-none">
            X
          </span>
        </a>

        {showScrollTop && (
          <>
            <div className="h-4 w-[1px] bg-black/10 dark:bg-white/15 mx-1" />
            <button
              onClick={() => scrollTo("hero")}
              aria-label="Scroll to top"
              className="group relative p-2.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform px-2.5 py-1 text-[11px] font-medium rounded-lg bg-zinc-950/90 text-white dark:bg-white/95 dark:text-zinc-950 shadow-lg backdrop-blur-md whitespace-nowrap pointer-events-none">
                Top
              </span>
            </button>
          </>
        )}
      </nav>
    </div>
  );
}
