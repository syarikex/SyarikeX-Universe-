import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-background">
      {/* Immersive Universe Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Star Field Effect */}
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.25]">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: "0 0 8px 1px rgba(255,255,255,0.8)",
              }}
            />
          ))}
        </div>

        {/* Deep Nebula Clouds */}
        <div className="absolute -top-[20%] -left-[10%] w-[120%] h-[140%] opacity-20 dark:opacity-30 mix-blend-screen overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-syarikex-blue/30 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-syarikex-violet/20 rounded-full blur-[180px] animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-syarikex-cyan/10 rounded-full blur-[200px] animate-pulse delay-1000" />
        </div>

        {/* Grid Background - Immense Platform Suggestion */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: "linear-gradient(rgba(56, 189, 248, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.2) 1px, transparent 1px)", 
            backgroundSize: "60px 60px" 
          }} 
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-syarikex-blue/20 text-syarikex-blue text-xs font-mono uppercase tracking-[0.3em] mb-12 shadow-[0_0_20px_rgba(56,189,248,0.1)]"
        >
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
          <span>The Immense Research Ecosystem</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(15px)", y: 40 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 relative"
        >
          <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-asteady italic tracking-tighter leading-none mb-4 select-none">
            <span className="block text-foreground/90 font-light translate-x-[-5%] opacity-80">SyarikeX</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-syarikex-blue via-foreground to-syarikex-violet animate-gradient font-black scale-110 -mt-[0.1em] text-glow">
              Universe
            </span>
          </h1>
          
          {/* Subtle flare effect behind text */}
          <div className="absolute inset-0 bg-syarikex-blue/5 blur-[120px] -z-10 animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl text-foreground/60 max-w-3xl mx-auto mb-16 leading-relaxed font-light tracking-wide"
        >
          Behold the supreme convergence of intelligence and creativity. A monumental platform designed for those who dare to build the future across the stars.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="rounded-2xl bg-syarikex-blue hover:bg-syarikex-blue/90 text-white px-10 py-8 text-xl font-medium group shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] transition-all">
              Initialize Orbit
              <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" className="rounded-2xl px-10 py-8 text-xl font-medium border-white/10 glass hover:bg-white/10 transition-all">
              Lab Access
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Borders */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {/* Side HUD Elements */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block z-20">
        <div className="flex flex-col gap-20">
          {["NEURAL", "SPATIAL", "QUANTUM"].map((mod) => (
            <div key={mod} className="flex items-center gap-4 group cursor-help">
              <div className="w-px h-12 bg-white/10 group-hover:bg-syarikex-blue transition-colors" />
              <div className="text-[10px] font-mono tracking-[0.5em] text-foreground/30 rotate-180 vertical-text group-hover:text-syarikex-blue transition-colors">
                {mod}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
