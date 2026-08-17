"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  User, 
  Briefcase, 
  Mail, 
  Sun, 
  Moon, 
  Clock, 
  Globe
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function HeaderNav() {
  const pathname = usePathname();
  const { resolvedTheme, toggleTheme } = useTheme();
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

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/work", label: "Work", icon: Briefcase },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 inset-x-0 z-50 py-3 px-4 sm:px-8 flex items-center justify-between pointer-events-none">
      
      {/* Left: Timezone / City */}
      <div className="flex-1 flex items-center gap-2 text-xs font-mono font-medium text-[var(--neutral-medium)] pointer-events-auto hidden md:flex">
        <Globe className="w-3.5 h-3.5 text-[var(--brand-primary)]" />
        <span>{PORTFOLIO_DATA.profile.timezone}</span>
      </div>

      {/* Center: Apple-style Frosted Nav Dock */}
      <nav 
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center gap-1 p-1 rounded-2xl magic-header-dock shadow-xl"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[var(--neutral-strong)] text-[var(--background)] shadow-sm"
                  : "text-[var(--neutral-medium)] hover:text-[var(--neutral-strong)] hover:bg-[var(--neutral-alpha-weak)]"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          );
        })}

        <div className="h-4 w-[1px] bg-[var(--neutral-border)] mx-1" />

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-1.5 rounded-xl text-[var(--neutral-medium)] hover:text-[var(--neutral-strong)] hover:bg-[var(--neutral-alpha-weak)] transition-all"
        >
          {resolvedTheme === "dark" ? (
            <Sun className="w-4 h-4 text-[var(--brand-peach)]" />
          ) : (
            <Moon className="w-4 h-4 text-[var(--brand-primary)]" />
          )}
        </button>
      </nav>

      {/* Right: Live IST Clock */}
      <div className="flex-1 flex items-center justify-end gap-2 text-xs font-mono font-medium text-[var(--neutral-strong)] pointer-events-auto hidden md:flex">
        <Clock className="w-3.5 h-3.5 text-[var(--brand-secondary)]" />
        <span>{timeString || "00:00:00"}</span>
      </div>

    </header>
  );
}
