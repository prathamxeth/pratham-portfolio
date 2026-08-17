export interface WorkExperience {
  company: string;
  role: string;
  timeframe: string;
  location: string;
  badge: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Education {
  name: string;
  degree: string;
  timeframe: string;
  description: string;
  highlights: string[];
  badge: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  tags: { name: string; icon?: string }[];
  metrics: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  colorAccent: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  tags: { name: string; icon?: string }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Prathmesh Upadhyay",
    preferredName: "Pratham",
    handle: "@prathamxeth",
    avatar: "/profile.jpg",
    location: "Lucknow & Kanpur, India",
    timezone: "Asia/Kolkata",
    headline: "CTO @FinRein · Developer @PalZee",
    subhead: "BS in Data Science & Applications @IIT Madras",
    tagline: "Android & Full-Stack Engineer. Founder at Fin Rein Inc. Building zero-latency, local-first native mobile apps and modern web systems.",
    bio: "Android & Full-Stack Engineer based in Lucknow and Kanpur, India. Founder at Fin Rein Inc. and developer at PalZee. Building zero-latency, local-first native mobile apps and high-performance web systems with a focus on privacy, smooth keyframe video playback, and clean architecture.",
    email: "prathamup123@gmail.com",
    companyEmail: "pratham@palzee.fun",
    whatsapp: "+91 9811548599",
    whatsappLink: "https://wa.me/919811548599?text=Hi%20Pratham!",
    github: "https://github.com/prathamxeth",
    linkedin: "https://www.linkedin.com/in/prathmesh-upadhyay-11a5a732a/",
    x: "https://x.com/0xBlurr",
    website: "https://palzee.fun/",
    languages: ["English", "Hindi"],
  },
  
  experiences: [
    {
      company: "PalZee",
      role: "Developer",
      timeframe: "2026 - Present",
      location: "Kanpur, Uttar Pradesh, India · Hybrid",
      badge: "Full-time",
      description: "Leading the native Android development for PALZEE — a privacy-focused micro-vlogging platform designed for sharing real-time daily moments with close friends.",
      achievements: [
        "Built the camera capture and video playback engine using CameraX and Media3 ExoPlayer for instant playback with no buffering lag.",
        "Engineered the zero-latency state-latch keyframing pipeline (timeUs = 0) and chronological feed for real-time social loops.",
        "Integrated Supabase Auth, PostgreSQL Row Level Security (RLS), and Cloudflare Edge distribution for media security."
      ],
      tech: ["Kotlin 2.0", "Jetpack Compose", "CameraX", "Media3", "Supabase", "Room DB", "Coroutines"]
    },
    {
      company: "FinRein",
      role: "Chief Technology Officer (CTO)",
      timeframe: "2026 - Present",
      location: "Kanpur & Lucknow, India · Hybrid",
      badge: "Full-time",
      description: "Leading technology strategy, infrastructure, and core software engineering at Fin Rein Inc.",
      achievements: [
        "Architected multi-tenant cloud backends, Edge APIs, and SaaS platforms built for high throughput and reliability.",
        "Engineered responsive web applications with modern design systems and smooth micro-interactions.",
        "Set up CI/CD automation pipelines, security benchmarks, and zero-compromise privacy standards."
      ],
      tech: ["System Architecture", "Android Core", "Full-Stack Dev", "PostgreSQL", "Cloudflare Edge", "Tailwind CSS"]
    }
  ] as WorkExperience[],

  education: [
    {
      name: "Indian Institute of Technology, Madras (IIT Madras)",
      degree: "Bachelor of Science - BS, Data Science & Applications",
      timeframe: "2025 - 2027",
      description: "Focusing on data structures, distributed systems, web architectures, and machine learning pipelines.",
      highlights: [
        "Rigorous coursework in Data Structures, Algorithms, and Software Design.",
        "Applied database engineering and scalable systems."
      ],
      badge: "Undergraduate"
    },
    {
      name: "Jawahar Navodaya Vidyalaya (JNV SDR)",
      degree: "Senior Secondary (12th Grade) — Physics, Chemistry & Mathematics (PCM)",
      timeframe: "2020 - 2024",
      description: "Strong foundation in mathematics, analytical problem solving, and computational logic.",
      highlights: [
        "Distinction in science and mathematics.",
        "Foundation in competitive programming."
      ],
      badge: "High School"
    }
  ] as Education[],

  projects: [
    {
      id: "palzee-android",
      title: "PALZEE Android",
      tagline: "Native Android micro-vlogging app with zero-latency keyframes.",
      description: "Native, privacy-first micro-vlogging platform designed for sharing real-time daily moments with close friends. Built in Kotlin 2.0 and Jetpack Compose, featuring custom keyframe playback and an algorithm-free chronological feed.",
      category: "Native Android / Kotlin",
      tags: [
        { name: "Kotlin 2.0" },
        { name: "Jetpack Compose" },
        { name: "CameraX" },
        { name: "Media3 ExoPlayer" },
        { name: "Supabase" },
        { name: "Room DB" }
      ],
      metrics: "⚡ Zero-Latency Keyframes · 🔒 Local-First Privacy",
      githubUrl: "https://github.com/prathamxeth/PALZEE-ANDROID",
      liveUrl: "https://palzee.fun/",
      featured: true,
      colorAccent: "#17C0FD"
    },
    {
      id: "palzee-site",
      title: "PALZEE Site & Web Hub",
      tagline: "Official web hub, download distribution, and legal safety center.",
      description: "Official web portal for PALZEE by Fin Rein Inc. Delivers instant app download routing, user feedback ingestion pipelines, and legal compliance policies including Privacy and Child Safety Standards.",
      category: "Web & Edge Systems",
      tags: [
        { name: "HTML5" },
        { name: "Tailwind CSS v4" },
        { name: "Supabase" },
        { name: "Cloudflare Edge" },
        { name: "TypeScript" }
      ],
      metrics: "⚡ Sub-50ms Edge Response · 🌐 Multi-Region CDN",
      githubUrl: "https://github.com/prathamxeth/PALZEE-SITE",
      liveUrl: "https://palzee.fun/",
      featured: true,
      colorAccent: "#049EE2"
    },
    {
      id: "mero-nepal",
      title: "Mero Nepal Portal",
      tagline: "Interactive cultural and tourism portal with liquid UI.",
      description: "Digital showcase celebrating the culture, scenic trekking routes, and rich heritage of Nepal. Features interactive discovery cards, fluid transitions, and responsive liquid design.",
      category: "Full-Stack Web App",
      tags: [
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Next.js" },
        { name: "Liquid UI" },
        { name: "Edge Functions" }
      ],
      metrics: "🎨 Liquid Micro-Interactions · 🚀 100/100 Lighthouse",
      githubUrl: "https://github.com/prathamxeth/mero-nepal",
      liveUrl: "https://github.com/prathamxeth/mero-nepal",
      featured: true,
      colorAccent: "#FF9689"
    }
  ] as Project[],

  technicalSkills: [
    {
      title: "Native Mobile Engineering",
      description: "Building zero-latency video pipelines and clean MVI / MVVM architectures on Android.",
      tags: [
        { name: "Kotlin 2.0+" },
        { name: "Jetpack Compose" },
        { name: "CameraX" },
        { name: "Media3 ExoPlayer" },
        { name: "Room DB" },
        { name: "Coroutines & Flow" },
        { name: "Android Studio" },
        { name: "Gradle" }
      ]
    },
    {
      title: "Web & Frontend Systems",
      description: "Developing fast, responsive web applications with clean design systems and fluid interfaces.",
      tags: [
        { name: "TypeScript" },
        { name: "Next.js" },
        { name: "React" },
        { name: "Tailwind CSS v4" },
        { name: "CSS3 Motion" },
        { name: "Figma" }
      ]
    },
    {
      title: "Cloud, Database & Edge",
      description: "Managing serverless databases, edge routing, and row-level security policies.",
      tags: [
        { name: "Supabase" },
        { name: "PostgreSQL" },
        { name: "Cloudflare Edge" },
        { name: "Firebase FCM" },
        { name: "REST APIs" },
        { name: "GitHub Actions" }
      ]
    },
    {
      title: "Core Architecture & Principles",
      description: "Key architecture patterns for zero-latency execution, local persistence, and user privacy.",
      tags: [
        { name: "State-Latch Keyframing" },
        { name: "Local-First Persistence" },
        { name: "Data Structures & Algos" },
        { name: "Privacy by Design" }
      ]
    }
  ] as SkillCategory[],

  terminalSpecs: {
    user: "pratham@palzee-dev",
    os: "Android Native / Kotlin 2.0 (JVM 17)",
    host: "Fin Rein Inc. (Lucknow & Kanpur)",
    stack: "Jetpack Compose · CameraX · Media3 ExoPlayer",
    backend: "Supabase · PostgreSQL RLS · Edge CDN",
    engine: "State-Latch Keyframe Engine (timeUs = 0)",
    status: "Active Production · Zero-Latency",
    repositories: "PALZEE-ANDROID · PALZEE-SITE · mero-nepal"
  }
};
