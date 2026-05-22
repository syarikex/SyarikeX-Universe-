import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 tracking-tighter">SyarikeX Universe</h3>
            <p className="text-foreground/50 max-w-sm leading-relaxed mb-8">
              Building Africa's futuristic digital universe. AI, research, technology and next-generation digital experiences.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <motion.button 
                  key={i} 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass border border-white/5 flex items-center justify-center hover:bg-syarikex-blue/20 hover:border-syarikex-blue/50 transition-all shadow-lg hover:shadow-syarikex-blue/20"
                >
                  <Icon size={18} />
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/40 mb-6">Platforms</h4>
            <ul className="space-y-4">
              {["AI Assistant", "Projects", "Labs", "Academy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground/60 hover:text-syarikex-blue transition-colors flex items-center gap-1 group">
                    {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/40 mb-6">Foundation</h4>
            <ul className="space-y-4">
              {["About", "Founder", "Career", "Press"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground/60 hover:text-syarikex-blue transition-colors flex items-center gap-1 group">
                    {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/40 mb-6">Legal</h4>
            <ul className="space-y-4">
              {["Privacy", "Terms", "Ethics", "Security"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground/60 hover:text-syarikex-blue transition-colors flex items-center gap-1 group">
                    {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-xs text-foreground/30 font-mono uppercase tracking-widest">
          <div>© 2026 SyarikeX Universe. All orbits reserved.</div>
          <div className="flex gap-8">
            <span>Status: All Systems Active</span>
            <span className="text-syarikex-blue">Version 1.0.0-Beta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
