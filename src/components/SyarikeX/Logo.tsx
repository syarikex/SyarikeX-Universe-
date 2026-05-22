import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div 
        className="relative flex items-center justify-center w-10 h-10 overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* The sX Logo Mark */}
        <div className="relative font-bold text-3xl tracking-tighter flex items-center">
          <span className="text-foreground -mr-1">s</span>
          <div className="relative">
            <span className="text-syarikex-blue text-4xl italic font-black">X</span>
            {/* Rocket Trail / Smoke Trajectory inspiration */}
            <motion.div 
              className="absolute -bottom-1 -left-2 w-full h-0.5 bg-gradient-to-r from-syarikex-blue to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "120%", opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
              style={{ rotate: "-45deg", transformOrigin: "left" }}
            />
          </div>
        </div>
      </motion.div>

      {showText && (
        <div className="relative overflow-hidden">
          <motion.span 
            className="text-xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 block py-1"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ delay: 0.8, duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
          >
            SyarikeX Universe
          </motion.span>
        </div>
      )}
    </div>
  );
}
