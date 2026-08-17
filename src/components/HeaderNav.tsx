"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  User, 
  Briefcase, 
  Mail, 
  Clock, 
  Globe,
  Sun,
  Moon
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { useTheme } from "./ThemeProvider";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function HeaderNav() {
  const pathname = usePathname();
  const { resolvedTheme, toggleTheme } = useTheme();
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
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
    <header className="sticky top-0 inset-x-0 z-50 py-2 sm:py-3 px-3 sm:px-6 md:px-8 flex items-center justify-between pointer-events-none transition-all duration-300">
      
      {/* Desktop Left: Timezone Capsule (Hidden on mobile) */}
      <div className="hidden md:flex flex-1 items-center gap-2 text-xs font-mono font-medium text-(--neutral-medium) pointer-events-auto">
        <div className="inline-flex items-center liquid-icon-btn px-3 py-1.5 rounded-full text-xs gap-1.5 font-mono shadow-sm">
          <Globe className="w-3.5 h-3.5 text-(--brand-primary)" />
          <span>{PORTFOLIO_DATA.profile.timezone}</span>
        </div>
      </div>

      {/* Navigation Dock: Full-sized blurdock on Mobile, Floating centered dock on Desktop */}
      <nav 
        aria-label="Main Navigation"
        className="pointer-events-auto w-full md:w-auto max-w-lg md:max-w-none mx-auto flex items-center justify-between md:justify-center gap-1 p-1 sm:p-1.5 rounded-full magic-header-dock shadow-lg"
      >
        <div className="flex-1 md:flex-initial flex items-center justify-between md:justify-start gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-2.5 sm:px-4 py-2 sm:py-2 rounded-full text-xs transition-all duration-200 min-h-[38px] ${
                  isActive
                    ? "bg-(--liquid-active-bg) border border-(--liquid-active-border) text-(--neutral-strong) shadow-sm font-semibold scale-[1.02]"
                    : "text-(--neutral-medium) hover:text-(--neutral-strong) hover:bg-(--liquid-active-bg) font-medium"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="w-4 h-4 md:w-3.5 md:h-3.5 shrink-0" />
                <span className="text-[12px] sm:text-xs tracking-tight">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile-only Integrated Theme Toggle */}
        {isMounted && (
          <button
            onClick={toggleTheme}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-(--neutral-strong) hover:bg-(--liquid-active-bg) active:scale-95 transition-all shrink-0 ml-0.5 border border-(--liquid-glass-border)"
            title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            aria-label="Toggle color theme"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-(--brand-primary)" />
            )}
          </button>
        )}
      </nav>

      {/* Desktop Right: Theme Switcher & Live IST Clock Liquid Capsule */}
      <div className="hidden md:flex flex-1 items-center justify-end gap-2 text-xs font-mono font-medium text-(--neutral-strong) pointer-events-auto">
        <div className="inline-flex items-center liquid-icon-btn px-3 py-1.5 rounded-full text-xs gap-1.5 font-mono shadow-sm">
          <Clock className="w-3.5 h-3.5 text-(--brand-secondary)" />
          <span>{timeString || "00:00:00"}</span>
        </div>

        {isMounted && (
          <button
            onClick={toggleTheme}
            className="liquid-icon-btn w-8 h-8 rounded-full shadow-sm text-(--neutral-strong) hover:scale-110 active:scale-95 transition-all"
            title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            aria-label="Toggle color theme"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-(--brand-primary)" />
            )}
          </button>
        )}
      </div>

    </header>
  );
}
