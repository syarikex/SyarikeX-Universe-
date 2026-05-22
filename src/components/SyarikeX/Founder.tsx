import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { 
  Camera, 
  Lock, 
  Eye, 
  Moon, 
  Sun, 
  Laptop,
  Code,
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface FounderProps {
  name: string;
  role: string;
  bio: string;
}

const privateGallery = [
  {
    id: 1,
    title: "The Grind Protocol",
    description: "Isaac in the lab, forging the digital future of Africa. 3 AM is just the beginning.",
    url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200",
    theme: "Night"
  },
  {
    id: 2,
    title: "Executive Vision",
    description: "Captured in a moment of strategic deep-thought, wearing the signature blue blazer.",
    url: "/files/portrait_isaac.png",
    theme: "Business"
  },
  {
    id: 3,
    title: "Quantum Integration",
    description: "Founder analyzing the holographic data streams of the SyarikeX Nexus.",
    url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
    theme: "Technical"
  },
  {
    id: 4,
    title: "Dawn of SyarikeX",
    description: "The first light hitting the innovation center as a new protocol is deployed.",
    url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200",
    theme: "Action"
  }
];

export function Founder({ name, role, bio }: FounderProps) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const nextImage = () => setGalleryIndex((prev) => (prev + 1) % privateGallery.length);
  const prevImage = () => setGalleryIndex((prev) => (prev - 1 + privateGallery.length) % privateGallery.length);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          {/* Main Portrait */}
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden glass border border-white/10 shadow-2xl overflow-hidden">
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <img 
                src="/files/portrait_isaac.png" 
                alt="Isaac SYARIKE"
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-syarikex-blue/20 opacity-60" />
            
            {/* Biometric UI overlay */}
            <div className="absolute top-8 left-8 flex flex-col gap-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-syarikex-blue">
                <div className="w-1.5 h-1.5 rounded-full bg-syarikex-blue animate-pulse" />
                BIOMETRIC SCAN ACTIVE
              </div>
              <div className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest pl-1">
                UID: IS-2024-X
              </div>
            </div>

            <div className="absolute bottom-12 left-12 right-12">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 className="h-px bg-syarikex-blue/50 mb-6" 
               />
               <div className="flex items-center justify-between">
                 <div>
                   <div className="text-2xl font-bold tracking-tight">{name}</div>
                   <div className="text-xs font-mono text-foreground/40 uppercase tracking-[0.2em]">{role}</div>
                 </div>
                 <Button 
                   onClick={() => setShowGallery(true)}
                   className="rounded-full bg-syarikex-blue hover:bg-syarikex-blue/90 w-12 h-12 p-0"
                 >
                   <Camera size={20} />
                 </Button>
               </div>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-syarikex-blue/10 rounded-full blur-[100px] -z-10" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-syarikex-violet/10 rounded-full blur-[100px] -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-syarikex-blue" />
              <div className="text-syarikex-blue font-mono text-sm uppercase tracking-[0.3em]">The Founder's Manifesto</div>
            </div>
            <h2 className="text-5xl md:text-6xl font-light italic tracking-tight mb-8">
              Pioneering <span className="text-foreground/40 font-normal">Infinite Futures</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-xl text-foreground/50 leading-relaxed font-light">
            {bio.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2 tracking-tighter">01</div>
              <div className="text-[10px] text-foreground/40 uppercase font-mono tracking-widest">Global Pioneer</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2 tracking-tighter">24/7</div>
              <div className="text-[10px] text-foreground/40 uppercase font-mono tracking-widest">Innovation Loop</div>
            </div>
            <div className="hidden lg:block">
              <div className="text-4xl font-bold text-syarikex-blue mb-2 tracking-tighter">∞</div>
              <div className="text-[10px] text-foreground/40 uppercase font-mono tracking-widest">Vision Scale</div>
            </div>
          </div>
          
          <div className="mt-12 flex gap-4">
            <Button className="rounded-full bg-white text-black hover:bg-syarikex-blue hover:text-white px-8 py-6 text-lg font-bold">
              Read Full Bio
            </Button>
            <Button 
               onClick={() => setShowGallery(true)}
               variant="outline" 
               className="rounded-full border-white/10 hover:bg-white/5 py-6 px-4"
            >
              <Eye className="mr-2" /> View Archives
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Archives Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-background/90 backdrop-blur-2xl"
          >
            <motion.button 
              onClick={() => setShowGallery(false)}
              className="absolute top-8 right-8 text-foreground/40 hover:text-white"
            >
              <Lock size={32} />
            </motion.button>

            <div className="max-w-6xl w-full h-full flex flex-col justify-center gap-12">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-syarikex-blue mb-2">Private Archive // Sequence 01</h3>
                  <div className="text-4xl font-bold tracking-tight">The Grind Protocol</div>
                </div>
                <div className="flex items-center gap-2">
                   <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-mono uppercase">
                      {privateGallery[galleryIndex].theme}
                   </div>
                   <div className="px-4 py-2 bg-syarikex-blue/10 rounded-full border border-syarikex-blue/30 text-xs font-mono text-syarikex-blue uppercase">
                      Classified
                   </div>
                </div>
              </div>

              <div className="relative aspect-video rounded-[3rem] overflow-hidden group shadow-[0_0_100px_rgba(56,189,248,0.1)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={galleryIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={privateGallery[galleryIndex].url}
                      alt={privateGallery[galleryIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    
                    {/* Animated "Coding" overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                       <Code size={400} className="animate-pulse" />
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 flex items-center justify-between px-12">
                   <Button onClick={prevImage} variant="ghost" className="rounded-full w-16 h-16 glass border-white/10 group-hover:scale-110 transition-transform">
                      <ChevronLeft size={32} />
                   </Button>
                   <Button onClick={nextImage} variant="ghost" className="rounded-full w-16 h-16 glass border-white/10 group-hover:scale-110 transition-transform">
                      <ChevronRight size={32} />
                   </Button>
                </div>

                <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between">
                   <div className="max-w-xl">
                      <div className="text-2xl font-bold mb-2">{privateGallery[galleryIndex].title}</div>
                      <p className="text-foreground/60 text-sm font-light leading-relaxed">
                         {privateGallery[galleryIndex].description}
                      </p>
                   </div>
                   <div className="flex gap-4">
                      {privateGallery[galleryIndex].theme === "Night" ? <Moon className="text-syarikex-blue animate-bounce" /> : <Sun className="text-amber-400 animate-spin-slow" />}
                      <Laptop className="text-foreground/20" />
                      <Zap className="text-syarikex-violet animate-pulse" />
                   </div>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                {privateGallery.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setGalleryIndex(i)}
                    className={`h-1.5 transition-all rounded-full ${i === galleryIndex ? 'w-12 bg-syarikex-blue' : 'w-3 bg-white/10'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
