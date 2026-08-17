import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://palzee.fun"),
  title: "Prathmesh Upadhyay – CTO @FinRein & Developer @PalZee",
  description:
    "Meet Prathmesh Upadhyay, Android & Full-Stack Engineer from Lucknow & Kanpur, India. Founder at Fin Rein Inc., BS in Data Science @IIT Madras.",
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
    "Data Science"
  ],
  authors: [{ name: "Prathmesh Upadhyay", url: "https://github.com/prathamxeth" }],
  creator: "Prathmesh Upadhyay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://palzee.fun",
    title: "Prathmesh Upadhyay – CTO @FinRein & Developer @PalZee",
    description:
      "Android Developer & Full-Stack Engineer. Founder at Fin Rein Inc. BS in Data Science @IIT Madras.",
    siteName: "Prathmesh Upadhyay Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 512,
        height: 512,
        alt: "Prathmesh Upadhyay Profile",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/profile.jpg" },
    ],
    apple: [
      { url: "/profile.jpg" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathmesh Upadhyay (@0xBlurr)",
    description:
      "Android Developer & Full-Stack Engineer. Founder at Fin Rein Inc. BS in Data Science @IIT Madras.",
    creator: "@0xBlurr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] relative selection:bg-[var(--brand-primary)] selection:text-white">
        <ThemeProvider>
          {/* Ambient Background Grid Pattern */}
          <div className="magic-bg-dots" />
          
          {/* Top Apple / Magic UI Navigation */}
          <HeaderNav />
          
          {/* Page Content */}
          <div className="flex-1 relative z-10">
            {children}
          </div>
          
          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
