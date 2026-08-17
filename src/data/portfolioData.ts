export interface WorkExperience {
  company: string;
  role: string;
  timeframe: string;
  location: string;
  badge: string;
  description: string;
  achievements: string[];
  tech: string[];
  images?: { src: string; alt: string }[];
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
  images?: { src: string; alt: string }[];
  featured: boolean;
  colorAccent: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  tags: { name: string; icon?: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  readingTime: string;
  tags: string[];
  content: string[];
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
    tagline: "Building zero-latency, local-first native mobile experiences & modern web systems.",
    bio: "Android Developer & Full-Stack Engineer. Founder at Fin Rein Inc. Focused on clean architecture, local-first performance, state-latch keyframe engines, and non-intrusive social tech.",
    status: "Available for high-impact projects",
    email: "prathamup123@gmail.com",
    companyEmail: "pratham@palzee.fun",
    whatsapp: "+91 9811548599",
    whatsappLink: "https://wa.me/919811548599?text=Hi%20Pratham,%20saw%20your%20portfolio!",
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
      description: "Spearheading the native Android application architecture for PALZEE — a privacy-first micro-vlogging platform for real-time daily moments.",
      achievements: [
        "Architected camera capture and keyframe playback engine with CameraX & Media3 ExoPlayer for instant video starts with zero lag.",
        "Engineered real-time state latching (timeUs = 0) and zero-algorithmic chronological feeds for authentic social circles.",
        "Integrated Supabase Auth, PostgreSQL Row Level Security (RLS), and Edge CDN media distribution."
      ],
      tech: ["Kotlin 2.0", "Jetpack Compose", "CameraX", "Media3", "Supabase", "Room", "Coroutines"]
    },
    {
      company: "FinRein",
      role: "Chief Technology Officer (CTO)",
      timeframe: "2026 - Present",
      location: "Kanpur & Lucknow, India · Hybrid",
      badge: "Full-time",
      description: "Leading technology strategy, infrastructure design, and core software engineering. Turning ambitious concepts into resilient, scalable products.",
      achievements: [
        "Architected multi-tenant cloud backends, Edge APIs, and SaaS pipelines optimized for speed and reliability.",
        "Drove UI/UX engineering with liquid modern web interfaces, micro-animations, and fluid responsive design systems.",
        "Established automated CI/CD deployment routines, security benchmarks, and zero-tolerance safety policies."
      ],
      tech: ["System Architecture", "Full-Stack Dev", "Mobile Systems", "SaaS", "PostgreSQL", "Cloudflare Edge", "Tailwind CSS"]
    }
  ] as WorkExperience[],

  education: [
    {
      name: "Indian Institute of Technology, Madras (IIT Madras)",
      degree: "Bachelor of Science - BS, Data Science & Applications / Computer Science",
      timeframe: "2025 - 2027",
      description: "Specializing in Large-scale Data Systems, Web Architecture & SaaS Engineering.",
      highlights: [
        "Advanced study in Algorithms, Distributed Systems, and Modern Computing.",
        "Statistical machine learning and data engineering pipelines."
      ],
      badge: "Undergraduate"
    },
    {
      name: "Jawahar Navodaya Vidyalaya (JNV SDR)",
      degree: "Senior Secondary (12th Grade) — Physics, Chemistry & Mathematics (PCM)",
      timeframe: "2020 - 2024",
      description: "Rigorous foundation in analytical problem solving, mathematics, and computational logic.",
      highlights: [
        "Academic excellence with distinction in scientific coursework.",
        "Competitive programming foundation."
      ],
      badge: "High School"
    }
  ] as Education[],

  projects: [
    {
      id: "palzee-android",
      title: "PALZEE Android",
      tagline: "Native Android micro-vlogging app with zero-latency keyframes.",
      description: "A native, privacy-first micro-vlogging platform designed for sharing real-time daily moments with close friends. Powered by Kotlin and Jetpack Compose featuring zero-latency keyframe playback and algorithm-free feeds.",
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
      title: "PALZEE Site & Web Portal",
      tagline: "Official web hub, download distribution, and legal safety center.",
      description: "The official web portal for PALZEE by Fin Rein Inc. Delivers instant app download routing, user feedback ingestion pipelines, and legal compliance policies including Privacy and Child Safety Standards.",
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
      tagline: "Interactive cultural and tourism portal with liquid modern UI.",
      description: "An immersive digital showcase celebrating the culture, scenic trekking routes, and rich heritage of Nepal. Features interactive discovery cards, fluid transitions, and responsive liquid design.",
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
      title: "Native Mobile Systems",
      description: "Engineering zero-latency video engines and clean MVVM / MVI architectures on Android.",
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
      title: "Web & Frontend Architecture",
      description: "Building responsive, liquid web applications with modern design systems and smooth micro-interactions.",
      tags: [
        { name: "TypeScript" },
        { name: "Next.js" },
        { name: "React" },
        { name: "Tailwind CSS v4" },
        { name: "CSS3 Liquid Motion" },
        { name: "Figma" }
      ]
    },
    {
      title: "Backend, Cloud & Edge",
      description: "Designing low-latency edge computing, serverless databases, and row-level security.",
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
      title: "Core Architecture & Security",
      description: "System principles ensuring zero-latency throughput, local-first caching, and complete privacy compliance.",
      tags: [
        { name: "State-Latch Keyframes" },
        { name: "Local-First GC" },
        { name: "CSAM Compliance" },
        { name: "Data Structures & Algos" }
      ]
    }
  ] as SkillCategory[],

  blogs: [
    {
      slug: "zero-latency-keyframe-engine",
      title: "Architecting a Zero-Latency Keyframe Engine in Kotlin with Media3",
      publishedAt: "Aug 2026",
      summary: "How we eliminated video playback startup latency to under 15ms in PALZEE using custom state-latch keyframing.",
      readingTime: "4 min read",
      tags: ["Android", "Kotlin", "Media3", "Performance"],
      content: [
        "In short-form social micro-vlogging, even a 100ms buffering spinner destroys the spontaneous feeling of a friend's live story.",
        "By binding CameraX pre-warmed sessions with Media3 ExoPlayer custom frame pre-caching and state-latch initialization at timeUs = 0, we achieved instant, frame-accurate playback."
      ]
    },
    {
      slug: "local-first-social-tech",
      title: "Local-First Architecture: Building Non-Intrusive Social Applications",
      publishedAt: "Jul 2026",
      summary: "Why algorithmic feeds compromise authenticity, and how local-first databases with Supabase RLS empower user privacy.",
      readingTime: "5 min read",
      tags: ["Architecture", "Privacy", "Supabase", "Local-First"],
      content: [
        "Traditional social networks monetize algorithmic engagement loops. In contrast, local-first social architecture keeps the user's circle strictly chronological and private.",
        "We discuss our schema design using Room for local offline SQLite persistence synchronized with Supabase Edge CDN."
      ]
    }
  ] as BlogPost[],

  terminalSpecs: {
    user: "prathamxeth@system",
    os: "Android Native (Kotlin 2.0+ / JVM 17)",
    host: "Fin Rein Inc. (Kanpur & Lucknow)",
    shell: "Jetpack Compose · CameraX · Media3",
    backend: "Supabase Auth · PostgreSQL · Edge CDN",
    coreSpecs: "State-Latch Keyframes (timeUs = 0)",
    uptime: "100% Zero-Latency · Local-First",
    projects: "PALZEE Android & PALZEE Site"
  }
};
