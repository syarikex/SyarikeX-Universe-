import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { AuthModal } from "./AuthModal";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Command } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", view: "home" },
  { name: "Grid", view: "grid" },
  { name: "Map", view: "map" },
  { name: "Forge", view: "forge" },
  { name: "Academy", view: "academy" },
  { name: "Roadmap", view: "roadmap" },
  { name: "Founder", view: "founder" },
  { name: "Citoyen", view: "citoyen" },
];

export function Navbar({ activeView }: { activeView?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const switchView = (view: string) => {
    window.dispatchEvent(new CustomEvent("change-view", { detail: { view } }));
    setIsMobileMenuOpen(false);
  };

  const openAssistant = () => {
    window.dispatchEvent(new CustomEvent("open-assistant"));
  };

  const toggleSidebar = () => {
    window.dispatchEvent(new CustomEvent("toggle-sidebar"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled ? "py-3" : "py-6"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-6 py-2",
        isScrolled ? "glass shadow-lg border-white/10 dark:border-white/5 py-3" : "bg-transparent"
      )}>
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.slice(0, 5).map((item) => (
            <motion.button
              key={item.name}
              onClick={() => switchView(item.view)}
              whileHover={{ scale: 1.05, y: -2 }}
              className={cn(
                "text-[13px] font-medium transition-colors px-1 py-1 relative group uppercase tracking-widest",
                activeView === item.view ? "text-syarikex-blue" : "text-foreground/50 hover:text-syarikex-blue"
              )}
            >
              {item.name}
              <motion.span 
                className={cn(
                  "absolute -bottom-1 left-0 h-px bg-syarikex-blue transition-all group-hover:w-full",
                  activeView === item.view ? "w-full" : "w-0"
                )}
                aria-hidden="true"
              />
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full hover:bg-syarikex-blue/10">
            <Search className="w-4 h-4" />
          </Button>
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-foreground/40">
            <Command size={10} /> <span>K</span>
          </div>
          
          <AuthModal>
            <Button variant="ghost" className="rounded-full text-foreground/70 hover:text-syarikex-blue text-xs uppercase tracking-widest font-bold">
              Access
            </Button>
          </AuthModal>

          <Button 
            onClick={toggleSidebar}
            variant="outline"
            className="rounded-full border-white/10 text-foreground/70 hover:text-syarikex-blue px-6 hidden sm:flex"
          >
            Nexus Core
          </Button>
          
          <Button 
            onClick={openAssistant}
            className="rounded-full bg-syarikex-blue hover:bg-syarikex-blue/90 text-white px-6 hidden md:flex shadow-[0_0_15px_rgba(56,189,248,0.3)] font-bold text-xs uppercase tracking-widest"
          >
            Assistant
          </Button>
          
          <button 
            className="p-2 text-foreground glass rounded-full"
            onClick={toggleSidebar}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 px-6 md:hidden"
          >
            <div className="glass rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => switchView(item.view)}
                  className={cn(
                    "text-lg font-medium transition-colors border-b border-white/5 pb-2 text-left",
                    activeView === item.view ? "text-syarikex-blue" : "text-foreground/80 hover:text-syarikex-blue"
                  )}
                >
                  {item.name}
                </button>
              ))}
              <AuthModal>
                <Button variant="outline" className="w-full rounded-full border-white/10 text-foreground/70 hover:text-syarikex-blue mt-4">
                  Sign In
                </Button>
              </AuthModal>
              <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openAssistant();
                }}
                className="w-full rounded-full bg-syarikex-blue hover:bg-syarikex-blue/90 text-white"
              >
                Launch Assistant
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
