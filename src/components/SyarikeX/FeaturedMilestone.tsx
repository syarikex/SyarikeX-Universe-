import { motion, useScroll, useTransform } from "motion/react";
import { 
  Rocket, 
  Target, 
  Calendar, 
  MapPin, 
  Cpu, 
  Zap,
  ArrowRight
} from "lucide-react";

export function FeaturedMilestone() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-syarikex-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{ scale, opacity }}
          className="glass rounded-[4rem] border border-white/5 p-8 md:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Background Decorative Text */}
          <div className="absolute -top-10 -right-10 text-[12rem] font-bold text-white/[0.02] select-none pointer-events-none font-mono tracking-tighter">
            2025
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:items-center relative z-10">
            {/* Visual Part */}
            <div className="flex-1 relative aspect-square max-w-[500px] mx-auto lg:mx-0">
               <div className="absolute inset-0 bg-syarikex-blue/10 rounded-[3rem] rotate-6 scale-95" />
               <div className="absolute inset-0 bg-syarikex-violet/10 rounded-[3rem] -rotate-3 scale-95" />
               <div className="relative h-full w-full glass rounded-[3rem] border border-white/10 p-8 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative z-10 text-syarikex-blue"
                  >
                    <Rocket size={180} className="drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]" />
                  </motion.div>
                  
                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        x: [0, Math.random() * 40 - 20, 0],
                        y: [0, Math.random() * 40 - 20, 0],
                        opacity: [0.2, 0.5, 0.2]
                      }}
                      transition={{ 
                        duration: 3 + Math.random() * 2, 
                        repeat: Infinity 
                      }}
                      className="absolute w-2 h-2 rounded-full bg-syarikex-blue/30"
                      style={{ 
                        top: `${20 + Math.random() * 60}%`, 
                        left: `${20 + Math.random() * 60}%` 
                      }}
                    />
                  ))}
               </div>
               
               <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border border-white/10 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Zap className="text-green-500 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-foreground/40 uppercase font-mono tracking-widest">Efficiency</div>
                      <div className="font-bold">+420%</div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Content Part */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="px-4 py-1.5 rounded-full bg-syarikex-blue/20 border border-syarikex-blue/30 text-[10px] font-mono text-syarikex-blue uppercase tracking-widest">
                  Focus Milestone
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-foreground/40 uppercase tracking-widest">
                  <Calendar size={12} />
                  Q3 2025
                </div>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                Neural Core <br />
                <span className="text-syarikex-blue italic font-asteady">Genesis Engine</span>
              </h2>

              <p className="text-xl text-foreground/50 leading-relaxed font-light mb-10">
                The deployment of the first autonomous African-centric hardware core. Designed to survive unstable energy grids while providing petaflops of localized intelligence. This isn't just a chip; it's the heartbeat of the Universe Grid.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                   <div className="flex items-center gap-3 text-foreground/40 mb-2">
                     <Target size={16} />
                     <span className="text-xs font-mono uppercase tracking-widest">Primary Objective</span>
                   </div>
                   <div className="font-medium">Energy-Efficient AI Architecture</div>
                </div>
                <div>
                   <div className="flex items-center gap-3 text-foreground/40 mb-2">
                     <MapPin size={16} />
                     <span className="text-xs font-mono uppercase tracking-widest">Deployment site</span>
                   </div>
                   <div className="font-medium">Sub-Saharan Edge Nodes</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                 <button className="px-8 py-4 rounded-2xl bg-syarikex-blue text-white font-bold text-sm tracking-tighter hover:bg-syarikex-blue/90 transition-all flex items-center gap-3 group">
                   Dive into Specs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
                 <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-sm font-bold tracking-tighter transition-all">
                   View Hardware Blueprint
                 </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
