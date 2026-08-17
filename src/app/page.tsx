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
    <main className="min-h-screen bg-ambient-gradient bg-grid-pattern relative selection:bg-indigo-500/20 selection:text-indigo-400">
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
