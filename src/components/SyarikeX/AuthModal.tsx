import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Chrome, ArrowRight, ShieldCheck, Zap, Lock, Loader2, AlertCircle } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "./Logo";

export function AuthModal({ children }: { children: React.ReactElement }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"login" | "signup">("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trigger = React.cloneElement(children as React.ReactElement<{ onClick?: (e: React.MouseEvent) => void }>, {
    onClick: (e: React.MouseEvent) => {
      (children as React.ReactElement<{ onClick?: (e: React.MouseEvent) => void }>).props.onClick?.(e);
      setOpen(true);
    },
  });

  const validate = () => {
    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    if (view === "signup" && !formData.name) {
      setError("Please enter your name.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!validate()) return;
    
    setIsLoading(true);
    
    try {
      // Simulating authentication logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Artificial failure for certain emails to demonstrate error handling
      if (formData.email.includes("fail")) {
        throw { code: 'auth/email-already-in-use' };
      }
      
      console.log(`${view === 'login' ? 'Logging in' : 'Signing up'} with:`, formData);
      
      // Success feedback
      setOpen(false);
      setFormData({ email: "", password: "", name: "" });
    } catch (err: any) {
      // Map Firebase-style errors to user-friendly messages
      let message = "An authenticaton error occurred. Please try again.";
      
      if (err.code === 'auth/email-already-in-use') {
        message = "This universal identity is already registered in our database.";
      } else if (err.code === 'auth/wrong-password') {
        message = "Port access key is incorrect. Verification failed.";
      } else if (err.code === 'auth/user-not-found') {
        message = "Identity not recognized. Please forge an account first.";
      } else if (err.code === 'auth/invalid-email') {
        message = "Format error: The provided email format is invalid.";
      } else if (err.code === 'auth/weak-password') {
        message = "Security risk: Access key must be at least 6 characters.";
      }
      
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger}
      <DialogContent className="max-w-4xl p-0 overflow-hidden glass border-white/10 dark:border-white/5 rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.6)]">
        <div className="grid md:grid-cols-2">
          {/* Left Side: Brand/Atmosphere */}
          <div className="hidden md:block relative p-12 bg-gradient-to-br from-syarikex-blue/20 via-transparent to-syarikex-violet/20 overflow-hidden border-r border-white/5">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
            <Logo showText={false} className="mb-12" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold tracking-tighter mb-6">
                Step into the <br />
                <span className="text-syarikex-blue italic">Future.</span>
              </h2>
              <p className="text-foreground/50 leading-relaxed max-w-xs mb-10">
                Join our premium ecosystem of AI, research, and galactic-scale innovation. Your journey into the digital universe starts here.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Zap, text: "Access Next-Gen AI Tools" },
                  { icon: ShieldCheck, text: "Secure Digital Identity" },
                  { icon: Chrome, text: "Cross-Universe Sync" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-syarikex-blue/20 flex items-center justify-center">
                      <item.icon size={14} className="text-syarikex-blue" />
                    </div>
                    <span className="text-sm font-medium text-foreground/70">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-12 left-12">
              <div className="text-[10px] font-mono text-foreground/30 uppercase tracking-[0.5em]">
                SyarikeX Universe // 2026
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-8 md:p-16 flex flex-col justify-center bg-white/[0.02]">
            <Logo showText={false} className="md:hidden mb-8" />
            <h3 className="text-3xl font-bold tracking-tight mb-2">
              {view === "login" ? "Welcome Back" : "Forge Account"}
            </h3>
            <p className="text-foreground/40 mb-10">
              {view === "login" 
                ? "Enter your credentials to re-enter the universe." 
                : "Initialize your universal profile to begin."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs"
                  >
                    <AlertCircle size={14} />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono tracking-widest text-foreground/40 ml-1">Universal Identity (Email)</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 group-focus-within:text-syarikex-blue transition-colors" />
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="architect@syarikex.com" 
                    disabled={isLoading}
                    className="pl-12 py-6 rounded-2xl bg-white/5 border-white/10 focus-visible:ring-syarikex-blue/30 focus-visible:border-syarikex-blue/30 transition-all"
                  />
                </div>
              </div>

              {view === "signup" && (
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-foreground/40 ml-1">Citizen Name</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    disabled={isLoading}
                    className="py-6 rounded-2xl bg-white/5 border-white/10 focus-visible:ring-syarikex-blue/30 focus-visible:border-syarikex-blue/30 transition-all"
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono tracking-widest text-foreground/40 ml-1">Port Access Key (Password)</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 group-focus-within:text-syarikex-blue transition-colors" />
                  <Input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••" 
                    disabled={isLoading}
                    className="pl-12 py-6 rounded-2xl bg-white/5 border-white/10 focus-visible:ring-syarikex-blue/30 focus-visible:border-syarikex-blue/30 transition-all"
                  />
                </div>
              </div>

              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full py-7 rounded-2xl bg-syarikex-blue hover:bg-syarikex-blue/90 text-white font-semibold text-lg group relative overflow-hidden"
              >
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    {view === "login" ? "Return to Orbit" : "Forge Identity"}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5" />
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest">
                <span className="bg-background px-4 text-foreground/20">Alternate Ports</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="w-full rounded-2xl py-6 border-white/10 hover:bg-white/5 hover:border-syarikex-blue/50 focus-visible:ring-syarikex-blue/30 gap-2 transition-all shadow-sm hover:shadow-syarikex-blue/10">
                  <Chrome size={18} /> Google
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="w-full rounded-2xl py-6 border-white/10 hover:bg-white/5 hover:border-syarikex-blue/50 focus-visible:ring-syarikex-blue/30 gap-2 transition-all shadow-sm hover:shadow-syarikex-blue/10">
                  <Github size={18} /> GitHub
                </Button>
              </motion.div>
            </div>

            <button 
              onClick={() => setView(view === "login" ? "signup" : "login")}
              className="text-sm font-medium text-foreground/40 hover:text-syarikex-blue transition-colors text-center"
            >
              {view === "login" 
                ? "Don't have a profile? Forge one now →" 
                : "Already a citizen? Return home →"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
