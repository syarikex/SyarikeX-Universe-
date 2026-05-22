import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Circle, 
  Zap, 
  Globe, 
  Cpu, 
  Rocket, 
  RocketIcon,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Brain,
  Network,
  Database,
  Telescope,
  ShieldAlert,
  Users,
  Waves,
  Eye,
  Heart,
  Infinity as InfinityIcon
} from "lucide-react";

const milestones = [
  {
    year: "Early 2024",
    title: "Project Genesis",
    description: "Foundation of SyarikeX Research Labs in Lagos. Seed funding secured from a consortium of tech visionaries to build the future of African compute.",
    status: "completed",
    icon: Globe,
    color: "text-blue-400"
  },
  {
    year: "Mid 2024",
    title: "The Architecture Phase",
    description: "Finalizing the Neural Core blueprint and establishing partnerships with major compute providers in Africa to secure sustainable energy sources.",
    status: "completed",
    icon: Zap,
    color: "text-amber-400"
  },
  {
    year: "Late 2024",
    title: "Seed Node Deployment",
    description: "First beta test of the Universe Grid with selective research partners at the University of Lagos and beyond.",
    status: "completed",
    icon: Network,
    color: "text-indigo-400"
  },
  {
    year: "Late 2024",
    title: "The Great African Firewall",
    description: "Deployment of sovereignty-first cyber defensive layers to protect the continent's data from external quantum threats.",
    status: "completed",
    icon: ShieldAlert,
    color: "text-red-400"
  },
  {
    year: "2025",
    title: "Neural Core V1",
    description: "Launch of Nexus-Primary, the first autonomous AI research model designed specifically for African infrastructure constraints and language nuances.",
    status: "completed",
    icon: Cpu,
    color: "text-cyan-400"
  },
  {
    year: "Mid 2025",
    title: "Neural Sync Protocol",
    description: "Introduction of low-latency data synchronization across distributed nodes, enabling real-time collaboration between remote research labs.",
    status: "completed",
    icon: Network,
    color: "text-blue-300"
  },
  {
    year: "Late 2025",
    title: "Universe Grid Expansion",
    description: "Establishment of regional nodes in Nairobi, Accra, and Cape Town. Ecosystem hits 100,000 active nodes globally.",
    status: "completed",
    icon: Sparkles,
    color: "text-violet-400"
  },
  {
    year: "Early 2026",
    title: "Cyber Academy Campus",
    description: "Opening the first physical Innovation Center in Lagos to complement virtual learning initiatives.",
    status: "in-progress",
    icon: GraduationCap,
    color: "text-blue-500"
  },
  {
    year: "Mid 2026",
    title: "Neuro-Education Summit",
    description: "Gathering 10,000 top researchers to align on the ethical foundations of global machine intelligence and shared prosperity.",
    status: "planned",
    icon: Users,
    color: "text-orange-400"
  },
  {
    year: "Mid 2026",
    title: "Academy Reach",
    description: "Virtual reality learning modules deployed. Reaching a milestone of 500,000 students across the continent.",
    status: "planned",
    icon: Zap,
    color: "text-blue-500"
  },
  {
    year: "Late 2026",
    title: "Space Station Beta",
    description: "Initiating satellite-based neural link experiments to provide zero-latency access to the Universe Grid globally.",
    status: "planned",
    icon: RocketIcon,
    color: "text-indigo-400"
  },
  {
    year: "Early 2027",
    title: "Neural Core V2",
    description: "Launch of the second generation neural engine, featuring bio-inspired processing and holographic data visualization.",
    status: "planned",
    icon: Brain,
    color: "text-rose-400"
  },
  {
    year: "Mid 2027",
    title: "Citizen Node Program",
    description: "Decentralizing the Universe Grid by allowing individual researchers to host localized mini-nodes and contribute to global compute.",
    status: "planned",
    icon: Network,
    color: "text-emerald-400"
  },
  {
    year: "2027",
    title: "The Singularity Hub",
    description: "Consolidation of all SyarikeX nodes into a singular, unified intelligence network. Launch of the SyarikeX OS.",
    status: "planned",
    icon: Rocket,
    color: "text-purple-500"
  },
  {
    year: "Early 2028",
    title: "Global Nexus Convergence",
    description: "Reaching a unified state where all regional nodes operate as a single virtual supercomputer with exascale capabilities.",
    status: "planned",
    icon: Network,
    color: "text-blue-400"
  },
  {
    year: "2028",
    title: "Interstellar Initiative",
    description: "Partnering with international space agencies to deploy the first neural relay on the lunar surface for deep space research.",
    status: "planned",
    icon: Telescope,
    color: "text-blue-600"
  },
  {
    year: "2029+",
    title: "Quantum Nexus",
    description: "Achieving full quantum supremacy within the SyarikeX ecosystem, enabling near-instantaneous complex simulations.",
    status: "planned",
    icon: Database,
    color: "text-indigo-600"
  },
  {
    year: "2030",
    title: "Solar Neural Array",
    description: "Deployment of orbital solar-compute sails that provide clean, infinite energy for the Universe Grid's massive exascale nodes.",
    status: "planned",
    icon: Zap,
    color: "text-amber-500"
  },
  {
    year: "2031",
    title: "Hydro-Compute Clusters",
    description: "Submerging massive, self-cooling neural nodes into the deep Atlantic to harness oceanic thermal energy for carbon-negative exascale computing.",
    status: "planned",
    icon: Waves,
    color: "text-blue-300"
  },
  {
    year: "2032",
    title: "Red Planet Node",
    description: "Establishing the first SyarikeX Research Lab on Mars, facilitating zero-latency scientific collaboration for the first wave of space pioneers.",
    status: "planned",
    icon: Rocket,
    color: "text-orange-600"
  },
  {
    year: "2034",
    title: "Saturn Ring Observatory",
    description: "Stationing a long-range sensory array in the Saturnian rings to scan for high-dimensional signals and expand the Universe Grid's cosmic reach.",
    status: "planned",
    icon: Eye,
    color: "text-amber-200"
  },
  {
    year: "2035",
    title: "The Galactic Core",
    description: "SyarikeX evolves into a multi-planetary intelligence network, safeguarding human research and knowledge across the solar system.",
    status: "planned",
    icon: Sparkles,
    color: "text-white"
  },
  {
    year: "2040",
    title: "Universal Intelligence Rights",
    description: "Guaranteeing free, high-speed neural access to every sentient being, ensuring that knowledge and research are no longer gated by geography or status.",
    status: "planned",
    icon: Heart,
    color: "text-rose-500"
  },
  {
    year: "2050+",
    title: "The Andromeda Probe",
    description: "Launching the first SyarikeX AI-Seed towards our galactic neighbor, designed to independently establish a neural relay across the intergalactic void.",
    status: "planned",
    icon: InfinityIcon,
    color: "text-indigo-900"
  }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-32 px-6 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-syarikex-blue font-mono text-sm uppercase tracking-[0.4em] mb-4"
          >
            Evolution Trajectory
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            The SyarikeX <span className="text-foreground/40 italic">Roadmap</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between group ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-[45%] mb-8 md:mb-0">
                  <div className={`p-8 rounded-[2.5rem] glass border border-white/5 transition-all duration-500 hover:border-syarikex-blue/30 hover:shadow-[0_0_40px_rgba(56,189,248,0.05)] relative overflow-hidden group/card`}>
                    <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover/card:opacity-10 transition-opacity">
                      <milestone.icon size={80} />
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`text-xs font-mono font-bold tracking-tighter uppercase px-3 py-1 rounded-full bg-white/5 ${milestone.color}`}>
                        {milestone.year}
                      </div>
                      <div className="flex-1 h-px bg-white/5" />
                      {milestone.status === "completed" && (
                        <CheckCircle2 size={16} className="text-green-500" />
                      )}
                      {milestone.status === "in-progress" && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                          <Zap size={16} className="text-syarikex-blue" />
                        </motion.div>
                      )}
                      {milestone.status === "planned" && (
                        <Circle size={16} className="text-foreground/20" />
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover/card:text-syarikex-blue transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-foreground/50 leading-relaxed text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Central Point */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center glass border border-white/10 group-hover:bg-syarikex-blue group-hover:border-syarikex-blue transition-all duration-500 group-hover:scale-125 shadow-xl`}>
                    <milestone.icon 
                      size={20} 
                      className={`transition-colors duration-500 group-hover:text-white ${milestone.color}`} 
                    />
                  </div>
                  
                  {/* Status Indicator pulse for in-progress */}
                  {milestone.status === "in-progress" && (
                    <div className="absolute inset-0 w-12 h-12 rounded-2xl bg-syarikex-blue/20 animate-ping" />
                  )}
                </div>

                {/* Empty Side (for spacing) */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3.5rem] bg-gradient-to-br from-syarikex-blue/20 via-transparent to-syarikex-violet/20 border border-white/5 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Ready to join the trajectory?</h3>
            <p className="text-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed">
              We are constantly seeking brilliant minds to help us navigate the unknown frontiers of futuristic technology and intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-2xl bg-syarikex-blue text-white font-semibold hover:bg-syarikex-blue/90 transition-all flex items-center gap-2 group shadow-lg shadow-syarikex-blue/20">
                Apply for Lab Residency <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl glass hover:bg-white/5 transition-all text-sm font-medium border-white/5">
                Download Technical Manifesto
              </button>
            </div>
          </div>
          
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-syarikex-violet/20 rounded-full blur-[100px]" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-syarikex-blue/20 rounded-full blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
}
