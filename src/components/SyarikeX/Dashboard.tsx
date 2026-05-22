import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings as SettingsIcon, 
  Bell, 
  Plus,
  ArrowUpRight,
  Database,
  Cpu,
  Brain,
  CheckSquare,
  UserCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Overview } from "./Dashboard/Overview";
import { Tasks } from "./Dashboard/Tasks";
import { Profile } from "./Dashboard/Profile";
import { Analytics } from "./Dashboard/Analytics";
import { Settings } from "./Dashboard/Settings";

type Tab = "overview" | "tasks" | "profile" | "analytics" | "settings";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const menuItems = [
    { id: "overview", icon: LayoutDashboard, label: "Overview" },
    { id: "tasks", icon: CheckSquare, label: "Mission Tasks" },
    { id: "profile", icon: UserCircle, label: "Universal ID" },
    { id: "analytics", icon: BarChart3, label: "Neural Metrics" },
    { id: "settings", icon: SettingsIcon, label: "System Config" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview": return <Overview />;
      case "tasks": return <Tasks />;
      case "profile": return <Profile />;
      case "analytics": return <Analytics />;
      case "settings": return <Settings />;
      default: return <Overview />;
    }
  };

  return (
    <div className="flex bg-background min-h-screen text-foreground relative overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/5 space-y-8 py-8 px-6 hidden lg:block sticky top-0 h-screen">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 rounded-lg bg-syarikex-blue flex items-center justify-center font-bold text-white italic shadow-[0_0_15px_rgba(56,189,248,0.5)]">X</div>
          <span className="font-bold tracking-tighter">SYARIKEX ADMIN</span>
        </div>

        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as Tab)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all relative ${
                activeTab === item.id 
                  ? "text-syarikex-blue" 
                  : "text-foreground/40 hover:text-foreground hover:bg-white/5"
              }`}
            >
              {activeTab === item.id && (
                <motion.div 
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-syarikex-blue/10 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon size={18} className="relative z-10" />
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="pt-20">
          <div className="glass p-4 rounded-2xl border-white/5">
            <div className="text-[10px] text-foreground/40 uppercase tracking-widest mb-2 font-mono">System Health</div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-syarikex-blue" 
                initial={{ width: 0 }}
                animate={{ width: "98%" }}
                transition={{ duration: 2 }}
              />
            </div>
            <div className="flex justify-between mt-2 text-[10px] items-center">
              <span className="text-foreground/30">Intelligence Core</span>
              <span className="text-syarikex-blue font-bold">OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <h1 className="text-3xl font-bold tracking-tight mb-1">
                    {menuItems.find(m => m.id === activeTab)?.label}
                </h1>
                <p className="text-foreground/40">
                    Nexus Node: <span className="text-syarikex-blue/60">0x-SYX-7832</span> &bull; 
                    {activeTab === 'overview' ? " System status is 100% stable." : " Personal forge sequence active."}
                </p>
            </motion.div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="rounded-full border-white/10 hidden sm:flex h-11">
              <Bell size={18} className="mr-2" />
              <Badge className="bg-syarikex-blue text-white border-none h-5 px-1.5 min-w-[20px] justify-center">3</Badge>
            </Button>
            <Button className="rounded-full bg-syarikex-blue hover:bg-syarikex-blue/90 text-white px-6 h-11 shadow-lg shadow-syarikex-blue/20">
              <Plus size={18} className="mr-2" /> Action Hub
            </Button>
          </div>
        </header>

        <div className="relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    {renderContent()}
                </motion.div>
            </AnimatePresence>
        </div>
      </main>

      {/* Decorative gradients */}
      <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-syarikex-blue/5 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-syarikex-violet/5 blur-[120px] pointer-events-none" />
    </div>
  );
}

