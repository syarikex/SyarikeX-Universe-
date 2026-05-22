import { motion } from "motion/react";
import { 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  Crown, 
  Star, 
  Award,
  Zap,
  Lock,
  ChevronRight,
  TrendingUp
} from "lucide-react";

const ranks = [
  {
    id: 'initiate',
    name: "Initiate Citoyen",
    level: "1-10",
    points: "0 - 1,000",
    icon: Shield,
    color: "text-blue-400",
    bg: "bg-blue-400/5",
    border: "border-blue-400/20",
    perks: ["Access to AI Chat", "Public Forum Entry", "Basic Learning Modules"],
    description: "Your journey in the SyarikeX Universe begins. Explore the foundations."
  },
  {
    id: 'researcher',
    name: "Research Elite",
    level: "11-25",
    points: "1,001 - 5,000",
    icon: ShieldCheck,
    color: "text-cyan-400",
    bg: "bg-cyan-400/5",
    border: "border-cyan-400/20",
    perks: ["Lab Forge Access", "Collaborative Tools", "Advanced Documentation"],
    description: "Active contributor to the collective intelligence. Your voice matters."
  },
  {
    id: 'guardian',
    name: "Universe Guardian",
    level: "26-50",
    points: "5,001 - 15,000",
    icon: ShieldAlert,
    color: "text-violet-400",
    bg: "bg-violet-400/5",
    border: "border-violet-400/20",
    perks: ["Cyber Academy Leadership", "Beta Feature Access", "Private Node Invites"],
    description: "Stabilizer of the Grid. You protect and guide new explorers."
  },
  {
    id: 'visionary',
    name: "Core Visionary",
    level: "51-99",
    points: "15,001 - 100,000",
    icon: Star,
    color: "text-gold-400",
    bg: "bg-amber-400/5",
    border: "border-amber-400/30",
    perks: ["Direct Founder Contact", "Governance Voting", "Exascale Cloud Priority"],
    description: "A master of the digital universe. You shape the future of African tech."
  },
  {
    id: 'founder',
    name: "Prime Origin",
    level: "∞",
    points: "Max Overflow",
    icon: Crown,
    color: "text-white",
    bg: "bg-white/5",
    border: "border-white/40",
    perks: ["Universe Architecture Power", "Neural Core Ownership", "Interstellar Lead"],
    description: "Beyond status. You are an architect of the SyarikeX legacy."
  }
];

export function CitizenRanks() {
  return (
    <section id="citoyen" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-syarikex-blue/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-syarikex-violet font-mono text-xs uppercase tracking-[0.5em] mb-4"
          >
            Gamification Hierarchy
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-asteady italic tracking-tight mb-8"
          >
            Universe <span className="text-foreground/40 italic">Citoyen Ranks</span>
          </motion.h2>
          <p className="text-foreground/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Ascend through the layers of the SyarikeX ecosystem. Earn points by researching, learning, and contributing to the Grid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ranks.map((rank, index) => (
            <motion.div
              key={rank.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[3rem] glass border ${rank.border} ${rank.bg} relative overflow-hidden group transition-all duration-500 hover:shadow-2xl`}
            >
              <div className="absolute top-0 right-0 p-10 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                <rank.icon size={120} />
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${rank.color}`}>
                  <rank.icon size={24} />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest">Level</div>
                  <div className="font-bold text-lg leading-tight">{rank.level}</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 tracking-tight">{rank.name}</h3>
              <p className="text-sm text-foreground/50 leading-relaxed mb-8">
                {rank.description}
              </p>

              <div className="space-y-3 mb-8">
                {rank.perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-2 text-xs text-foreground/70">
                    <Zap size={10} className="text-syarikex-blue" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest">XP Progress</div>
                <div className="text-[10px] font-mono text-syarikex-blue">{rank.points}</div>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-8">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "30%" }}
                   viewport={{ once: true }}
                   className="h-full bg-syarikex-blue shadow-[0_0_10px_rgba(56,189,248,0.5)]" 
                 />
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-syarikex-blue" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">{rank.points} XP</span>
                </div>
                <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                  <ChevronRight size={18} className="text-foreground/20" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Locked State placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[3rem] bg-white/[0.02] border border-dashed border-white/10 flex flex-col items-center justify-center text-center opacity-40 grayscale group"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:border-syarikex-blue transition-colors">
              <Lock size={24} className="group-hover:text-syarikex-blue transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-2">Unknown Horizon</h3>
            <p className="text-[10px] font-mono tracking-widest uppercase">Secret Rank Detected</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-[2.5rem] bg-gradient-to-r from-syarikex-blue/20 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-syarikex-blue/10 flex items-center justify-center border border-syarikex-blue/20">
              <Award size={32} className="text-syarikex-blue" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">Your Citoyen ID</h4>
              <p className="text-sm text-foreground/40">Connect your wallet or profile to see your rank and available perks.</p>
            </div>
          </div>
          <button className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-sm tracking-tighter hover:bg-white/90 transition-all">
            VERIFY IDENTITY
          </button>
        </motion.div>
      </div>
    </section>
  );
}
