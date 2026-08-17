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
    <header className="sticky top-0 inset-x-0 z-50 py-3.5 px-4 sm:px-8 flex items-center justify-between pointer-events-none">
      
      {/* Left: Timezone / City with Liquid Glass Capsule */}
      <div className="flex-1 flex items-center gap-2 text-xs font-mono font-medium text-(--neutral-medium) pointer-events-auto hidden md:flex">
        <div className="liquid-icon-btn px-2.5 py-1 rounded-xl text-xs gap-1.5 font-mono">
          <Globe className="w-3.5 h-3.5 text-(--brand-primary)" />
          <span>{PORTFOLIO_DATA.profile.timezone}</span>
        </div>
      </div>

      {/* Center: LiquidGL Frosted Nav Dock */}
      <nav 
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center gap-1 p-1 rounded-2xl magic-header-dock"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                isActive
                  ? "bg-(--neutral-strong) text-(--background) shadow-sm font-semibold"
                  : "text-(--neutral-medium) hover:text-(--neutral-strong) hover:bg-(--neutral-alpha-medium)"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          );
        })}

        <div className="h-4 w-px bg-(--neutral-border) mx-1" />

        {/* Liquid Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-2 rounded-xl text-(--neutral-medium) hover:text-(--neutral-strong) hover:bg-(--neutral-alpha-medium) active:scale-95 transition-all"
        >
          {resolvedTheme === "dark" ? (
            <Sun className="w-3.5 h-3.5 text-(--brand-peach)" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-(--brand-primary)" />
          )}
        </button>
      </nav>

      {/* Right: Live IST Clock Capsule */}
      <div className="flex-1 flex items-center justify-end gap-2 text-xs font-mono font-medium text-(--neutral-strong) pointer-events-auto hidden md:flex">
        <div className="liquid-icon-btn px-2.5 py-1 rounded-xl text-xs gap-1.5 font-mono">
          <Clock className="w-3.5 h-3.5 text-(--brand-secondary)" />
          <span>{timeString || "00:00:00"}</span>
        </div>
      </div>

    </header>
  );
}
