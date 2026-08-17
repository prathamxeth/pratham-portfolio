"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type Orientation = "portrait" | "landscape";

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouch: boolean;
  orientation: Orientation;
  breakpoint: Breakpoint;
  width: number;
  height: number;
  isHydrated: boolean;
}

const defaultDeviceInfo: DeviceInfo = {
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isTouch: false,
  orientation: "portrait",
  breakpoint: "lg",
  width: 1200,
  height: 800,
  isHydrated: false,
};

const DeviceContext = createContext<DeviceInfo>(defaultDeviceInfo);

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(defaultDeviceInfo);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      let breakpoint: Breakpoint = "xs";
      if (width >= 1536) breakpoint = "2xl";
      else if (width >= 1280) breakpoint = "xl";
      else if (width >= 1024) breakpoint = "lg";
      else if (width >= 768) breakpoint = "md";
      else if (width >= 640) breakpoint = "sm";
      else breakpoint = "xs";

      const isTouch = 
        "ontouchstart" in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia("(pointer: coarse)").matches;

      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      const orientation: Orientation = width > height ? "landscape" : "portrait";

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isTouch,
        orientation,
        breakpoint,
        width,
        height,
        isHydrated: true,
      });
    };

    checkDevice();
    window.addEventListener("resize", checkDevice, { passive: true });
    window.addEventListener("orientationchange", checkDevice, { passive: true });

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("orientationchange", checkDevice);
    };
  }, []);

  return (
    <DeviceContext.Provider value={deviceInfo}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDevice(): DeviceInfo {
  return useContext(DeviceContext);
}
