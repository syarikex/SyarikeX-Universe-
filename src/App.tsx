import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { Navbar } from "./components/SyarikeX/Navbar";
import { Hero } from "./components/SyarikeX/Hero";
import { UniverseGrid } from "./components/SyarikeX/UniverseGrid";
import { FeaturedMilestone } from "./components/SyarikeX/FeaturedMilestone";
import { UniverseMap } from "./components/SyarikeX/UniverseMap";
import { CitizenRanks } from "./components/SyarikeX/CitizenRanks";
import { ResearchForge } from "./components/SyarikeX/ResearchForge";
import { Academy } from "./components/SyarikeX/Academy";
import { Founder } from "./components/SyarikeX/Founder";
import { Assistant } from "./components/SyarikeX/Assistant";
import { Sidebar } from "./components/SyarikeX/Sidebar";
import { Roadmap } from "./components/SyarikeX/Roadmap";
import { Footer } from "./components/SyarikeX/Footer";
import { CommandPalette } from "./components/SyarikeX/CommandPalette";
import { BlogTeaser } from "./components/SyarikeX/BlogTeaser";
import { Dashboard } from "./components/SyarikeX/Dashboard";
import { CustomCursor } from "./components/SyarikeX/CustomCursor";
import { Toaster } from "sonner";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function App() {
  const [activeView, setActiveView] = useState<"home" | "map" | "academy" | "forge" | "citoyen" | "founder" | "roadmap" | "grid">("home");
  const [isAdmin, setIsAdmin] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleViewChange = (e: any) => {
      if (e.detail?.view) {
        setActiveView(e.detail.view);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    const handleToggleAdmin = () => setIsAdmin(prev => !prev);
    
    window.addEventListener("change-view", (handleViewChange as EventListener));
    window.addEventListener("toggle-admin", handleToggleAdmin);
    return () => {
      window.removeEventListener("change-view", (handleViewChange as EventListener));
      window.removeEventListener("toggle-admin", handleToggleAdmin);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  if (isAdmin) {
    return (
      <div className="dark">
        <div className="fixed top-6 left-6 z-[200]">
          <Button 
            variant="outline" 
            onClick={() => setIsAdmin(false)}
            className="rounded-full glass border-white/10 hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Exit Nexus
          </Button>
        </div>
        <Dashboard />
        <CustomCursor />
        <Toaster position="bottom-left" closeButton richColors />
      </div>
    );
  }

  const founderBio = `Isaac Syarike is a visionary entrepreneur and technologist dedicated to building the next generation of digital infrastructure in Africa. With a deep passion for AI and futuristic research, he founded SyarikeX Universe to serve as a catalyst for innovation and education across the continent.

His mission is to fuse premium product design with cutting-edge intelligence, creating a digital ecosystem that empowers researchers, developers, and students to reach beyond the known horizon. Under his leadership, SyarikeX is not just building apps—it's building a universe.`;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-syarikex-blue/30 selection:text-syarikex-blue overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-syarikex-blue via-syarikex-cyan to-syarikex-violet z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar activeView={activeView} />
      
      <main>
        <AnimatePresence mode="wait">
          {activeView === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <UniverseGrid />
              <FeaturedMilestone />
              <BlogTeaser />
              <Founder 
                name="Isaac SYARIKE"
                role="Founder & CEO"
                bio={founderBio}
              />
              <Roadmap />
            </motion.div>
          )}

          {activeView === "map" && (
            <motion.div
              key="map"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="pt-20"
            >
              <UniverseMap />
              <div className="max-w-7xl mx-auto px-6 pb-20 text-center">
                <Button onClick={() => setActiveView("home")} variant="outline" className="rounded-full glass border-white/10 hover:bg-white/10 px-8 py-6">
                  <ArrowLeft className="mr-2 w-5 h-5" /> Return to Universe Home
                </Button>
              </div>
            </motion.div>
          )}

          {activeView === "academy" && (
            <motion.div
              key="academy"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="pt-20"
            >
              <Academy />
              <div className="max-w-7xl mx-auto px-6 pb-20 text-center">
                <Button onClick={() => setActiveView("home")} variant="outline" className="rounded-full glass border-white/10 hover:bg-white/10 px-8 py-6">
                  <ArrowLeft className="mr-2 w-5 h-5" /> Return to Universe Home
                </Button>
              </div>
            </motion.div>
          )}

          {activeView === "forge" && (
            <motion.div
              key="forge"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="pt-20"
            >
              <ResearchForge />
              <div className="max-w-7xl mx-auto px-6 pb-20 text-center">
                <Button onClick={() => setActiveView("home")} variant="outline" className="rounded-full glass border-white/10 hover:bg-white/10 px-8 py-6">
                  <ArrowLeft className="mr-2 w-5 h-5" /> Return to Universe Home
                </Button>
              </div>
            </motion.div>
          )}

          {activeView === "citoyen" && (
            <motion.div
              key="citoyen"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="pt-20"
            >
              <CitizenRanks />
              <div className="max-w-7xl mx-auto px-6 pb-20 text-center">
                <Button onClick={() => setActiveView("home")} variant="outline" className="rounded-full glass border-white/10 hover:bg-white/10 px-8 py-6">
                  <ArrowLeft className="mr-2 w-5 h-5" /> Return to Universe Home
                </Button>
              </div>
            </motion.div>
          )}

          {activeView === "founder" && (
            <motion.div
              key="founder"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="pt-20"
            >
              <Founder 
                name="Isaac SYARIKE"
                role="Founder & CEO"
                bio={founderBio}
              />
              <div className="max-w-7xl mx-auto px-6 pb-20 text-center">
                <Button onClick={() => setActiveView("home")} variant="outline" className="rounded-full glass border-white/10 hover:bg-white/10 px-8 py-6">
                  <ArrowLeft className="mr-2 w-5 h-5" /> Return to Universe Home
                </Button>
              </div>
            </motion.div>
          )}

          {activeView === "roadmap" && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="pt-20"
            >
              <Roadmap />
              <div className="max-w-7xl mx-auto px-6 pb-20 text-center">
                <Button onClick={() => setActiveView("home")} variant="outline" className="rounded-full glass border-white/10 hover:bg-white/10 px-8 py-6">
                  <ArrowLeft className="mr-2 w-5 h-5" /> Return to Universe Home
                </Button>
              </div>
            </motion.div>
          )}

          {activeView === "grid" && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="pt-20"
            >
              <UniverseGrid />
              <div className="max-w-7xl mx-auto px-6 pb-20 text-center">
                <Button onClick={() => setActiveView("home")} variant="outline" className="rounded-full glass border-white/10 hover:bg-white/10 px-8 py-6">
                  <ArrowLeft className="mr-2 w-5 h-5" /> Return to Universe Home
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      <Assistant />
      <Sidebar />
      <CommandPalette />
      <CustomCursor />
      <Toaster position="bottom-left" closeButton richColors />

      {/* Global Grain/Noise effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
