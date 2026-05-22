import { motion } from "motion/react";
import { 
  Hammer, 
  FlaskConical, 
  Cpu, 
  Code2, 
  Wrench, 
  ArrowRight,
  BookOpen,
  Terminal,
  Layers,
  FileText
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Neural Core V2 Architecture",
    description: "Documentation for the next iteration of bio-inspired compute units.",
    author: "Lab Node 04",
    status: "Drafting",
    icon: Cpu,
    category: "AI Architecture"
  },
  {
    id: 2,
    title: "Project Nexus SDK",
    description: "Beta tools for developers to build applications within the Universe Grid.",
    author: "Dev Cluster Gamma",
    status: "In Testing",
    icon: Code2,
    category: "Developer Tools"
  },
  {
    id: 3,
    title: "Orbital Relay Protocol",
    description: "Drafting low-latency communication standards for space-based nodes.",
    author: "Space Lab Beta",
    status: "Peer Review",
    icon: Terminal,
    category: "Communication"
  },
  {
    id: 4,
    title: "Decentralized Sync Engine",
    description: "Deep dive into the conflict-free replicated data types used in the Grid.",
    author: "Algoric Team",
    status: "Published",
    icon: Layers,
    category: "System Engineering"
  }
];

export function ResearchForge() {
  return (
    <section id="research" className="py-32 px-6 relative bg-background">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-syarikex-blue font-mono text-xs uppercase tracking-[0.5em] mb-4"
            >
              Research & Development
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-asteady italic tracking-tight"
            >
              The Research <span className="text-foreground/40 italic">Forge</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 py-3 px-6 glass rounded-2xl border border-white/5"
          >
            <FlaskConical size={18} className="text-syarikex-blue animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-foreground/60">Active Experiments: 42</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-[3rem] glass border border-white/5 group relative overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 p-20 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    <project.icon size={150} />
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-syarikex-blue/10 border border-syarikex-blue/20">
                      <project.icon size={20} className="text-syarikex-blue" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">{project.category}</div>
                      <div className="text-xs font-bold text-syarikex-blue">{project.status}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-syarikex-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/40 leading-relaxed font-light mb-8">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2">
                       <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10" />
                       <span className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest">{project.author}</span>
                    </div>
                    <button className="text-syarikex-blue hover:text-white transition-colors">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-gradient-to-br from-syarikex-blue/30 via-transparent to-syarikex-violet/10 border border-white/5 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Contribute to the Forge</h3>
                <p className="text-foreground/50 max-w-xl mb-8 leading-relaxed">
                  Have a research proposal or a technical enhancement for the Universe Grid? Submit your PR or manifesto to be reviewed by the Core Visionaries.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 rounded-2xl bg-syarikex-blue text-white font-bold text-sm tracking-tighter flex items-center gap-2 group/btn">
                    Submit Proposal <Hammer size={18} className="group-hover:rotate-12 transition-transform" />
                  </button>
                  <button className="px-8 py-4 rounded-2xl border border-white/10 glass hover:bg-white/5 text-sm font-bold tracking-tighter transition-all">
                    View Public Repos
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-80 h-80 bg-syarikex-blue/20 rounded-full blur-[100px] -z-10 group-hover:bg-syarikex-blue/30 transition-colors" />
            </motion.div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass p-8 rounded-[3rem] border border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-syarikex-blue mb-8">Resources</h4>
              <div className="space-y-4">
                {[
                  { icon: BookOpen, label: "Technical Manifestos" },
                  { icon: FileText, label: "Peer Review Guidelines" },
                  { icon: Wrench, label: "Compute Provisioning" },
                  { icon: FlaskConical, label: "Experimental Data" },
                ].map((item) => (
                  <button key={item.label} className="w-full flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all group">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-syarikex-blue transition-colors">
                      <item.icon size={16} className="text-foreground/40 group-hover:text-syarikex-blue transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-foreground/60">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-syarikex-violet/20 flex items-center justify-center border border-syarikex-violet/30 mb-6">
                <FlaskConical size={28} className="text-syarikex-violet" />
              </div>
              <h4 className="font-bold mb-2">Beta Access</h4>
              <p className="text-[10px] text-foreground/40 leading-relaxed uppercase tracking-widest mb-6">Quantum Neural Testing</p>
              <button className="text-xs font-bold text-syarikex-violet hover:underline decoration-2 underline-offset-8">
                Apply for Researcher Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
