export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  logo: string;
  badge: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  highlights: string[];
  badge: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  metrics: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  colorGradient: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Prathmesh Upadhyay",
    preferredName: "Pratham",
    handle: "@prathamxeth",
    avatar: "https://palzee.fun/android-chrome-512x512.png",
    location: "Lucknow & Kanpur, India",
    headline: "CTO @FinRein · Developer @PalZee",
    subhead: "BS in Data Science & Applications @IIT Madras",
    tagline: "Building zero-latency, local-first native mobile apps and modern web systems.",
    bio: "Android Developer & Full-Stack Engineer. Founder at Fin Rein Inc. Focused on clean architecture, local-first performance, state-latch keyframe engines, and non-intrusive social tech.",
    status: "Available for high-impact projects & architecture advisory",
    email: "prathamup123@gmail.com",
    companyEmail: "pratham@palzee.fun",
    whatsapp: "+91 9811548599",
    whatsappLink: "https://wa.me/919811548599?text=Hi%20Pratham,%20saw%20your%20portfolio!",
    github: "https://github.com/prathamxeth",
    linkedin: "https://www.linkedin.com/in/prathmesh-upadhyay-11a5a732a/",
    x: "https://x.com/0xBlurr",
    website: "https://palzee.fun/",
  },
  
  experiences: [
    {
      role: "Developer",
      company: "PalZee",
      location: "Kanpur, Uttar Pradesh, India · Hybrid",
      period: "Jun 2026 – Present",
      badge: "Full-time",
      logo: "📱",
      description: "Spearheading the native Android application architecture for PALZEE — a privacy-first micro-vlogging platform for real-time daily moments.",
      highlights: [
        "Architected camera capture and keyframe playback engine with CameraX & Media3 ExoPlayer for instant video starts with zero lag.",
        "Engineered real-time state latching (timeUs = 0) and zero-algorithmic chronological feeds for authentic social circles.",
        "Integrated Supabase Auth, PostgreSQL Row Level Security (RLS), and Edge CDN media distribution."
      ],
      tech: ["Kotlin 2.0", "Jetpack Compose", "CameraX", "Media3", "Supabase", "Room", "Coroutines"]
    },
    {
      role: "Chief Technology Officer (CTO)",
      company: "FinRein",
      location: "Kanpur, Uttar Pradesh, India · Hybrid",
      period: "Apr 2026 – Present",
      badge: "Full-time",
      logo: "⚡",
      description: "Leading technology strategy, infrastructure design, and core software engineering. Turning ambitious concepts into resilient, scalable products.",
      highlights: [
        "Architected multi-tenant cloud backends, Edge APIs, and SaaS pipelines optimized for speed and reliability.",
        "Drove UI/UX engineering with liquid modern web interfaces, micro-animations, and fluid responsive design systems.",
        "Established automated CI/CD deployment routines, security benchmarks, and zero-tolerance safety policies."
      ],
      tech: ["Architecture", "Full-Stack Dev", "Mobile Systems", "SaaS", "PostgreSQL", "Cloudflare Edge", "Tailwind CSS"]
    }
  ] as WorkExperience[],

  education: [
    {
      institution: "Indian Institute of Technology, Madras (IIT Madras)",
      degree: "Bachelor of Science - BS, Data Science & Applications / Computer Science",
      period: "Sep 2025 – Mar 2027",
      highlights: [
        "Specializing in Large-scale Data Systems, Web Architecture & SaaS Engineering.",
        "Advanced study in Algorithms, Distributed Systems, and Modern Computing."
      ],
      badge: "Undergraduate",
      icon: "🎓"
    },
    {
      institution: "Jawahar Navodaya Vidyalaya (JNV SDR)",
      degree: "Senior Secondary (12th Grade) — Physics, Chemistry & Mathematics (PCM)",
      period: "Apr 2020 – Mar 2024",
      highlights: [
        "Rigorous foundation in analytical problem solving, mathematics, and computational logic.",
        "Academic excellence with distinction in scientific coursework."
      ],
      badge: "High School",
      icon: "🏫"
    }
  ] as Education[],

  projects: [
    {
      id: "palzee-android",
      title: "PALZEE Android",
      tagline: "Native Android micro-vlogging app with zero-latency keyframes.",
      description: "A native, privacy-first micro-vlogging platform designed for sharing real-time daily moments with close friends. Powered by Kotlin and Jetpack Compose featuring zero-latency keyframe playback and algorithm-free feeds.",
      category: "Native Android / Kotlin",
      tags: ["Kotlin 2.0", "Jetpack Compose", "CameraX", "Media3 ExoPlayer", "Supabase", "Room DB"],
      metrics: "⚡ Zero-Latency State-Latch · 🔒 Privacy-First Architecture",
      githubUrl: "https://github.com/prathamxeth/PALZEE-ANDROID",
      liveUrl: "https://palzee.fun/",
      featured: true,
      colorGradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20"
    },
    {
      id: "palzee-site",
      title: "PALZEE Site & Compliance Portal",
      tagline: "Official web hub, download distribution, and legal safety center.",
      description: "The official web portal for PALZEE by Fin Rein Inc. Delivers instant app download routing, user feedback ingestion pipelines, and legal compliance policies including Privacy and Child Safety Standards.",
      category: "Web & Edge Systems",
      tags: ["HTML5", "Tailwind CSS v4", "Supabase", "Cloudflare Edge", "TypeScript"],
      metrics: "⚡ Sub-50ms Global Edge Response · 🌐 Multi-Region CDN",
      githubUrl: "https://github.com/prathamxeth/PALZEE-SITE",
      liveUrl: "https://palzee.fun/",
      featured: true,
      colorGradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20"
    },
    {
      id: "mero-nepal",
      title: "Mero Nepal Portal",
      tagline: "Interactive cultural and tourism portal with liquid modern UI.",
      description: "An immersive digital showcase celebrating the culture, scenic trekking routes, and rich heritage of Nepal. Features interactive discovery cards, fluid transitions, and responsive liquid design.",
      category: "Full-Stack Web App",
      tags: ["TypeScript", "Tailwind CSS", "Next.js", "Liquid UI", "Edge Functions"],
      metrics: "🎨 Liquid Micro-Interactions · 🚀 100/100 Lighthouse Performance",
      githubUrl: "https://github.com/prathamxeth/mero-nepal",
      liveUrl: "https://github.com/prathamxeth/mero-nepal",
      featured: true,
      colorGradient: "from-amber-500/20 via-orange-500/20 to-rose-500/20"
    }
  ] as Project[],

  skillCategories: [
    {
      name: "Native Mobile Systems",
      icon: "📱",
      skills: ["Kotlin 2.0+", "Jetpack Compose", "CameraX", "Media3 ExoPlayer", "Room Database", "Coroutines & Flow", "Android Studio", "Gradle"]
    },
    {
      name: "Web & Frontend Architecture",
      icon: "🌐",
      skills: ["TypeScript", "Next.js", "React 19", "Tailwind CSS v4", "Liquid CSS3 Animations", "Responsive UI/UX", "Figma Design"]
    },
    {
      name: "Backend, Cloud & Edge",
      icon: "🗄️",
      skills: ["Supabase Auth & RLS", "PostgreSQL", "Cloudflare Edge", "Firebase FCM", "RESTful APIs", "Edge Functions", "GitHub Actions"]
    },
    {
      name: "Core Engineering & Security",
      icon: "⚡",
      skills: ["State-Latch Keyframes", "Local-First Architecture", "Zero-Latency Pipelines", "CSAM Compliance", "Data Structures", "System Design"]
    }
  ] as SkillCategory[],

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
