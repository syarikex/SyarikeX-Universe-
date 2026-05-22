import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  Mail, 
  MapPin, 
  Briefcase, 
  Camera, 
  Save, 
  ShieldCheck, 
  Globe,
  Loader2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMockData } from "../../../services/mockService";
import { toast } from "sonner";

export function Profile() {
  const { profile, updateProfile } = useMockData();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulating database latency
    await new Promise(resolve => setTimeout(resolve, 1000));
    updateProfile(formData);
    setIsLoading(false);
    setIsEditing(false);
    toast.success("Profile sync complete");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Profile Card */}
      <Card className="glass border-white/5 rounded-[3rem] overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-syarikex-blue/20 via-syarikex-violet/20 to-syarikex-cyan/20" />
        <CardContent className="p-8 -mt-16 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="flex flex-col md:flex-row items-end gap-6">
            <div className="relative group">
              <div className="w-32 h-32 rounded-[2.5rem] bg-background border-4 border-background overflow-hidden relative shadow-2xl">
                <img 
                  src={profile.avatar} 
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-2 right-2 w-8 h-8 rounded-xl bg-syarikex-blue text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Camera size={14} />
              </button>
            </div>
            <div className="pb-2">
              <h1 className="text-3xl font-bold tracking-tight mb-1">{profile.name}</h1>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-sm text-foreground/40 font-mono uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Globe size={12} className="text-syarikex-blue" /> Universe Resident</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-green-400" /> Verified Identity</span>
                </div>
                
                {/* Citizen Rank Progress */}
                <div className="w-full max-w-xs space-y-2">
                   <div className="flex justify-between text-[10px] font-mono text-syarikex-blue uppercase tracking-widest">
                      <span>Citizen Rank: Archon</span>
                      <span>Level 4 / 10</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "40%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-syarikex-blue to-syarikex-violet"
                      />
                   </div>
                </div>
              </div>
            </div>
          </div>
          <Button 
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? "ghost" : "outline"}
            className="rounded-full px-6 border-white/10"
          >
            {isEditing ? "Discard Changes" : "Edit Profile"}
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side: Info */}
        <div className="space-y-6">
          <Card className="glass border-white/5 rounded-[2rem] p-6">
             <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-foreground/60">
                    <Mail size={16} className="text-syarikex-blue" />
                    {profile.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/60">
                    <Briefcase size={16} className="text-syarikex-blue" />
                    {profile.role}
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/60">
                    <MapPin size={16} className="text-syarikex-blue" />
                    {profile.location}
                </div>
             </div>
          </Card>

          <Card className="glass border-white/5 rounded-[2rem] p-6 bg-gradient-to-br from-syarikex-blue/5 to-transparent">
             <div className="text-[10px] font-mono text-syarikex-blue uppercase tracking-widest mb-4">Neural Signature</div>
             <div className="text-xs text-foreground/40 leading-relaxed font-mono italic">
                "{profile.bio}"
             </div>
          </Card>
        </div>

        {/* Right Side: Edit Form */}
        <div className="md:col-span-2">
           <Card className="glass border-white/5 rounded-[2.5rem] p-8 h-full">
             <form onSubmit={handleSave} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-foreground/40 ml-1">Universal ID</label>
                        <Input 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            disabled={!isEditing}
                            className="bg-white/5 border-white/5 rounded-2xl py-6 h-12"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-foreground/40 ml-1">Nexus Email</label>
                        <Input 
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            disabled={!isEditing}
                            className="bg-white/5 border-white/5 rounded-2xl py-6 h-12"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-foreground/40 ml-1">Current Sector (Location)</label>
                    <Input 
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        disabled={!isEditing}
                        className="bg-white/5 border-white/5 rounded-2xl py-6 h-12"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-foreground/40 ml-1">Neural Bio</label>
                    <textarea 
                        value={formData.bio}
                        onChange={(e) => setFormData({...formData, bio: e.target.value})}
                        disabled={!isEditing}
                        className="w-full bg-white/5 border-white/5 rounded-2xl p-4 outline-none text-sm text-foreground/70 min-h-[120px] focus:ring-1 focus:ring-syarikex-blue/30 transition-all disabled:opacity-50"
                    />
                </div>

                <AnimatePresence>
                    {isEditing && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                        >
                            <Button 
                                type="submit" 
                                disabled={isLoading}
                                className="w-full py-6 rounded-2xl bg-syarikex-blue text-white shadow-lg shadow-syarikex-blue/20"
                            >
                                {isLoading ? <Loader2 className="animate-spin mr-2" /> : <Save className="mr-2 w-4 h-4" />}
                                Sync with Universe Core
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
             </form>
           </Card>
        </div>
      </div>
    </div>
  );
}
