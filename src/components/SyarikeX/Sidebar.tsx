import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { 
  X, 
  Home, 
  Map as MapIcon, 
  FlaskConical, 
  GraduationCap, 
  Users, 
  User, 
  Route, 
  LayoutGrid,
  Zap,
  Lock,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Home Terminal", view: "home", icon: Home, category: "Core" },
  { name: "Universe Grid", view: "grid", icon: LayoutGrid, category: "Core" },
  { name: "Strategic Roadmap", view: "roadmap", icon: Route, category: "Core" },
  { name: "Isaac Syarike Profile", view: "founder", icon: User, category: "Identity" },
  { name: "Citizen Status", view: "citoyen", icon: Users, category: "Identity" },
  { name: "Research Forge", view: "forge", icon: FlaskConical, category: "Scientific" },
  { name: "Science Institute", view: "academy", icon: GraduationCap, category: "Scientific" },
  { name: "Infrastructure Map", view: "map", icon: MapIcon, category: "Scientific" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !isOpen ? true : !prev);
    const handleViewChange = (e: any) => {
        if (e.detail?.view) {
            setActiveTab(e.detail.view);
            setIsOpen(false);
        }
    };
    window.addEventListener("toggle-sidebar", handleToggle);
    window.addEventListener("change-view", (handleViewChange as EventListener));
    return () => {
        window.removeEventListener("toggle-sidebar", handleToggle);
        window.removeEventListener("change-view", (handleViewChange as EventListener));
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/60 backdrop-blur-md z-[100]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-2 bottom-2 right-2 w-full max-w-[450px] glass z-[101] rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Nexus Core</h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-syarikex-blue animate-pulse" />
                  <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Navigation Unit 01</span>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="rounded-full hover:bg-white/10"
              >
                <X size={24} />
              </Button>
            </div>

            {/* Menu Sections */}
            <div className="flex-1 overflow-y-auto p-8 space-y-12">
              {["Core", "Identity", "Scientific"].map((category) => (
                <div key={category}>
                  <h3 className="text-[10px] font-mono text-syarikex-blue uppercase tracking-[0.4em] mb-6 pl-4">{category} Operations</h3>
                  <div className="space-y-2">
                    {menuItems.filter(item => item.category === category).map((item) => (
                      <motion.button
                        key={item.name}
                        onClick={() => {
                          window.dispatchEvent(new CustomEvent("change-view", { detail: { view: item.view } }));
                        }}
                        whileHover={{ x: 8 }}
                        className={cn(
                          "w-full flex items-center justify-between p-4 rounded-2xl transition-all group",
                          activeTab === item.view 
                            ? "bg-syarikex-blue text-white shadow-[0_0_20px_rgba(56,189,248,0.2)]" 
                            : "hover:bg-white/5 border border-transparent hover:border-white/10"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "p-2 rounded-xl transition-colors",
                            activeTab === item.view ? "bg-white/20" : "bg-white/5 group-hover:bg-white/10"
                          )}>
                            <item.icon size={18} />
                          </div>
                          <span className="text-sm font-medium tracking-tight">{item.name}</span>
                        </div>
                        <ChevronRight className={cn(
                          "w-4 h-4 transition-transform",
                          activeTab === item.view ? "opacity-100" : "opacity-0 group-hover:opacity-40 group-hover:translate-x-1"
                        )} />
                      </motion.button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Special Features */}
              <div className="pt-8 border-t border-white/5">
                 <h3 className="text-[10px] font-mono text-foreground/30 uppercase tracking-[0.4em] mb-6 pl-4">System Utilities</h3>
                 <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="rounded-2xl border-white/5 bg-white/5 h-24 flex-col gap-2 hover:bg-syarikex-blue/20 hover:border-syarikex-blue/30 transition-all">
                       <Lock size={18} className="text-syarikex-blue" />
                       <span className="text-[10px] font-mono uppercase">Secure Vault</span>
                    </Button>
                    <Button variant="outline" className="rounded-2xl border-white/5 bg-white/5 h-24 flex-col gap-2 hover:bg-syarikex-violet/20 hover:border-syarikex-violet/30 transition-all">
                       <Zap size={18} className="text-syarikex-violet" />
                       <span className="text-[10px] font-mono uppercase">Compute Stats</span>
                    </Button>
                 </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 bg-white/5 border-t border-white/5 mt-auto">
               <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Protocol V2.4</div>
                  <div className="flex items-center gap-1.5">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                     <span className="text-[10px] font-mono text-green-500 uppercase">Synchronized</span>
                  </div>
               </div>
               <Button className="w-full rounded-2xl bg-white text-black hover:bg-syarikex-blue hover:text-white py-6 font-bold tracking-tighter flex items-center gap-2">
                  EXPLORE THE GALAXY <ExternalLink size={16} />
               </Button>
            </div>

            {/* Background grain texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
