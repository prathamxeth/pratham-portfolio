import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prathmesh Upadhyay | CTO @FinRein & Developer @PalZee",
  description:
    "Portfolio of Prathmesh Upadhyay (Pratham / @prathamxeth) — Android Developer, Full-Stack Engineer, Founder at Fin Rein Inc., BS in Data Science at IIT Madras. Building zero-latency, local-first native mobile experiences.",
  keywords: [
    "Prathmesh Upadhyay",
    "Pratham",
    "prathamxeth",
    "asurxeth",
    "PalZee",
    "FinRein",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "IIT Madras",
    "Full-Stack Engineer",
    "Zero-Latency",
    "Local-First"
  ],
  authors: [{ name: "Prathmesh Upadhyay", url: "https://github.com/prathamxeth" }],
  creator: "Prathmesh Upadhyay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://palzee.fun",
    title: "Prathmesh Upadhyay | CTO @FinRein & Developer @PalZee",
    description:
      "Android Developer & Full-Stack Engineer. Founder at Fin Rein Inc. BS in Data Science @IIT Madras.",
    siteName: "Prathmesh Upadhyay Portfolio",
    images: [
      {
        url: "https://palzee.fun/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Prathmesh Upadhyay Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathmesh Upadhyay (@0xBlurr)",
    description:
      "Android Developer & Full-Stack Engineer. Founder at Fin Rein Inc. BS in Data Science @IIT Madras.",
    creator: "@0xBlurr",
    images: ["https://palzee.fun/android-chrome-512x512.png"],
  },
  icons: {
    icon: "https://palzee.fun/android-chrome-512x512.png",
    apple: "https://palzee.fun/android-chrome-512x512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
