# Prathmesh Upadhyay · Portfolio

> Android & Full-Stack Engineer · CTO @FinRein & Developer @PalZee · BS in Data Science @IIT Madras.

A high-performance, multi-page portfolio built with **Next.js 16 (App Router)**, **Turbopack**, **Tailwind CSS v4**, and a **LiquidGL-inspired Liquid Glass Design System**.

---

## ⚡ Overview

- **Zero-Latency Native Engineering**: Showcasing native Android systems, real-time media pipelines (CameraX, ExoPlayer, state-latch keyframe extraction), and local-first architectures.
- **Liquid Glass Interface**: Crystal refraction, sub-pixel specular rim highlights, and fluid sliding tab indicators.
- **Adaptive System Color Palette**: Automatically synchronizes with device theme preferences:
  - **Dark Mode**: `#09090B` canvas with cyan (`#17C0FD`) and peach (`#FF9689`) accents.
  - **Light Mode**: `#FDFDFD` canvas with high-contrast typography and cobalt (`#0279BE`) highlights.
- **Static Export & Edge Delivery**: Fully prerendered static build deployed automatically to GitHub Pages via GitHub Actions.

---

## 🗂️ Architecture & Routes

```
pratham-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with ThemeProvider, ambient grid, dock & footer
│   │   ├── page.tsx           # Home: hero, core metrics, featured work, Palzee code engine
│   │   ├── about/page.tsx     # About: bio, work history, IIT Madras studies, technical skills
│   │   ├── work/page.tsx      # Work: Android native & web systems with LiquidTabs filters
│   │   ├── contact/page.tsx   # Contact: direct channels & instant note dispatch
│   │   └── globals.css        # Liquid glass refraction tokens & specular shaders
│   ├── components/
│   │   ├── HeaderNav.tsx      # Floating liquid glass navigation dock with live IST clock
│   │   ├── LiquidTabs.tsx     # Morphing spring pill tabs
│   │   ├── TerminalMatrix.tsx # Palzee design, architecture, and engine specs
│   │   ├── ThemeProvider.tsx  # Automatic device theme synchronization
│   │   └── Footer.tsx         # Minimalist footer with local metadata and social channels
│   └── data/
│       └── portfolioData.ts   # Central typed data schema
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions automated static export & deployment
└── next.config.ts             # Static export configuration (output: 'export')
```

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, Turbopack, React 19) |
| **Styling** | Tailwind CSS v4, Liquid Glass CSS Shaders |
| **Icons & Motion** | Lucide React, Canvas Confetti |
| **Deployment** | GitHub Pages (Automated CI/CD via GitHub Actions) |
| **Native Mobile** | Kotlin 2.0+, Jetpack Compose, CameraX, Media3, Room, Supabase |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/prathamxeth/pratham-portfolio.git

# Navigate into directory
cd pratham-portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build & Static Export

```bash
# Build optimized static export to /out
npm run build
```

---

## 🌐 Connect

- **GitHub**: [@prathamxeth](https://github.com/prathamxeth)
- **X (Twitter)**: [@0xBlurr](https://x.com/0xBlurr)
- **LinkedIn**: [Prathmesh Upadhyay](https://www.linkedin.com/in/prathmesh-upadhyay-11a5a732a/)
- **Email**: [prathamup123@gmail.com](mailto:prathamup123@gmail.com)

---

## 📄 License

MIT © 2026 [Prathmesh Upadhyay](https://github.com/prathamxeth)
