import Hero from "../components/Hero";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ProjectsGrid from "../components/ProjectsGrid";
import SkillsCloud from "../components/SkillsCloud";
import TerminalMatrix from "../components/TerminalMatrix";
import ContactSection from "../components/ContactSection";
import BlurDock from "../components/BlurDock";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen liquid-mesh-bg text-zinc-950 dark:text-zinc-50 relative selection:bg-zinc-900 selection:text-zinc-50 dark:selection:bg-zinc-100 dark:selection:text-zinc-950">
      <Hero />
      <ExperienceTimeline />
      <ProjectsGrid />
      <SkillsCloud />
      <TerminalMatrix />
      <ContactSection />
      <Footer />
      <BlurDock />
    </main>
  );
}
