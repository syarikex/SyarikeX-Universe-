import { motion } from "motion/react";
import { 
  Bot, 
  Orbit, 
  Cpu, 
  FlaskConical, 
  GraduationCap, 
  Rocket, 
  ShieldAlert, 
  FileText, 
  Map,
  BookOpen
} from "lucide-react";
import { cn } from "@/lib/utils";

const universeSections = [
  {
    title: "AI Ecosystem",
    description: "Next-generation intelligence tools and neural research.",
    icon: Bot,
    color: "from-blue-500 to-cyan-400",
    view: "home",
    href: "#ai"
  },
  {
    title: "Project Forge",
    description: "The digital heartbeat of SyarikeX innovation.",
    icon: Cpu,
    color: "from-cyan-500 to-blue-400",
    view: "forge"
  },
  {
    title: "Research Labs",
    description: "Exploring the boundaries of futuristic technology.",
    icon: FlaskConical,
    color: "from-violet-500 to-purple-400",
    view: "forge"
  },
  {
    title: "Cyber Academy",
    description: "Premium education for the architects of tomorrow.",
    icon: GraduationCap,
    color: "from-blue-600 to-indigo-400",
    view: "academy"
  },
  {
    title: "Space Station",
    description: "Reaching beyond the digital horizon.",
    icon: Rocket,
    color: "from-indigo-600 to-violet-400",
    view: "map"
  },
  {
    title: "Citoyen Ranks",
    description: "Your hierarchy within the digital sovereignty.",
    icon: ShieldAlert,
    color: "from-red-500 to-rose-400",
    view: "citoyen"
  },
  {
    title: "Intelligence Docs",
    description: "Complete roadmap and technical documentation.",
    icon: FileText,
    color: "from-emerald-500 to-teal-400",
    href: "#docs"
  },
  {
    title: "Universe Map",
    description: "Real-time infrastructure visualization.",
    icon: Map,
    color: "from-orange-500 to-amber-400",
    view: "map"
  },
  {
    title: "Universe Blog",
    description: "Insights from the heart of the digital ecosystem.",
    icon: BookOpen,
    color: "from-pink-500 to-rose-400",
    href: "#blog"
  }
];

export function UniverseGrid() {
  const switchView = (view: string, href?: string) => {
    window.dispatchEvent(new CustomEvent("change-view", { detail: { view } }));
    if (href && view === "home") {
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <section id="grid" className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-syarikex-blue/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-syarikex-violet/5 rounded-full blur-[140px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-syarikex-blue font-mono text-xs uppercase tracking-[0.5em] mb-6"
          >
            Universal Infrastructure
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-asteady italic tracking-tight mb-4"
          >
            The Ecosystem of <span className="text-foreground/40">the Future</span>
          </motion.h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-syarikex-blue to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universeSections.map((item, index) => (
            <motion.button
              key={item.title}
              onClick={() => switchView(item.view || "home", item.href)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -12,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(56,189,248,0.1)"
              }}
              className="group glass-card p-8 rounded-[2rem] border border-white/5 hover:border-syarikex-blue/40 transition-all duration-500 overflow-hidden relative text-left"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-syarikex-blue/0 via-transparent to-syarikex-blue/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
              <div className={cn(
                "w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10",
                item.color
              )}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-syarikex-blue transition-colors relative z-10">
                {item.title}
              </h3>
              <p className="text-foreground/50 leading-relaxed group-hover:text-foreground/70 transition-colors relative z-10">
                {item.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-syarikex-blue font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 relative z-10 duration-300">
                Explore Station <Orbit className="w-4 h-4 animate-spin-slow" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
