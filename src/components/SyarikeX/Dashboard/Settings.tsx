import { useState } from "react";
import { 
  Bell, 
  Moon, 
  Sun, 
  Shield, 
  Smartphone, 
  Eye, 
  Key, 
  Globe,
  Zap,
  Cpu
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [aiAssistant, setAiAssistant] = useState(true);

  const handleToggle = (setting: string, value: boolean, setter: (v: boolean) => void) => {
    setter(value);
    toast.info(`${setting} configuration updated`);
  };

  const [accentColor, setAccentColor] = useState("#3b82f6");
  const [secondaryAccent, setSecondaryAccent] = useState("#8b5cf6");
  const [backgroundIntensity, setBackgroundIntensity] = useState(5);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Account & Security */}
        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
                <Shield size={20} className="text-syarikex-blue" /> Account Protocol
            </h2>
            <Card className="glass border-white/5 rounded-[2rem] overflow-hidden">
                <div className="p-1">
                    {[
                        { icon: Key, label: "Port Access Key (Password)", desc: "Update your login credentials" },
                        { icon: Eye, label: "Visibility Status", desc: "Choose who can see your universe presence" },
                        { icon: Globe, label: "Universal Language", desc: "Select primary system language" },
                    ].map((item, i) => (
                        <button key={i} className="w-full flex items-center justify-between p-5 hover:bg-white/5 transition-all text-left group">
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 rounded-xl bg-white/5 text-foreground/40 group-hover:text-syarikex-blue group-hover:bg-syarikex-blue/10 transition-all">
                                    <item.icon size={18} />
                                </div>
                                <div>
                                    <div className="text-sm font-medium">{item.label}</div>
                                    <div className="text-[10px] text-foreground/30 font-mono uppercase tracking-tighter">{item.desc}</div>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" className="rounded-lg h-8 text-[10px] uppercase font-bold tracking-widest text-syarikex-blue">Manage</Button>
                        </button>
                    ))}
                </div>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
                <Bell size={20} className="text-syarikex-blue" /> Neural Signals
            </h2>
            <Card className="glass border-white/5 rounded-[2rem] p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-sm font-medium">Critical Alerts</div>
                        <div className="text-xs text-foreground/40">Push notifications for system events</div>
                    </div>
                    <Switch 
                        checked={notifications} 
                        onCheckedChange={(v) => handleToggle("Notifications", v, setNotifications)} 
                        style={{ backgroundColor: notifications ? accentColor : undefined }}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-sm font-medium">Marketing Insight</div>
                        <div className="text-xs text-foreground/40">Receive news about the universe</div>
                    </div>
                    <Switch 
                        checked={marketing} 
                        onCheckedChange={(v) => handleToggle("Marketing", v, setMarketing)} 
                        style={{ backgroundColor: marketing ? accentColor : undefined }}
                    />
                </div>
            </Card>
          </section>
        </div>

        {/* System & Appearance */}
        <div className="space-y-8">
           <section className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
                <Moon size={20} className="text-syarikex-blue" /> Nexus Appearance
            </h2>
            <Card className="glass border-white/5 rounded-[2rem] p-6">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <div className="text-sm font-medium">Core Theme</div>
                        <div className="text-xs text-foreground/40">Switch between dark and light nexus</div>
                    </div>
                    <div className="flex bg-white/5 p-1 rounded-xl">
                        <button 
                            onClick={() => setDarkMode(true)}
                            className={`p-2 rounded-lg flex items-center gap-2 text-xs transition-all ${darkMode ? 'text-white shadow-lg' : 'text-foreground/40'}`}
                            style={{ backgroundColor: darkMode ? accentColor : 'transparent' }}
                        >
                            <Moon size={14} /> Dark
                        </button>
                        <button 
                            onClick={() => setDarkMode(false)}
                            className={`p-2 rounded-lg flex items-center gap-2 text-xs transition-all ${!darkMode ? 'text-white shadow-lg' : 'text-foreground/40'}`}
                            style={{ backgroundColor: !darkMode ? accentColor : 'transparent' }}
                        >
                            <Sun size={14} /> Light
                        </button>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="text-[10px] uppercase font-mono tracking-[0.3em] text-foreground/30">Primary Accent (Interactive)</div>
                        <div className="flex flex-wrap gap-3">
                            {["#3b82f6", "#06b6d4", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#ef4444"].map((color) => (
                                <button 
                                    key={color}
                                    onClick={() => setAccentColor(color)}
                                    className={`w-10 h-10 rounded-xl border-2 transition-all ${accentColor === color ? 'border-white scale-110 shadow-lg' : 'border-transparent hover:scale-105'}`}
                                    style={{ backgroundColor: color, boxShadow: accentColor === color ? `0 0 20px ${color}40` : undefined }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="text-[10px] uppercase font-mono tracking-[0.3em] text-foreground/30">Secondary Accent (Visual)</div>
                        <div className="flex flex-wrap gap-3">
                            {["#8b5cf6", "#ec4899", "#3b82f6", "#f59e0b", "#06b6d4", "#10b981"].map((color) => (
                                <button 
                                    key={color}
                                    onClick={() => setSecondaryAccent(color)}
                                    className={`w-8 h-8 rounded-full border-2 transition-all ${secondaryAccent === color ? 'border-white scale-110 shadow-lg' : 'border-transparent hover:scale-105'}`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <div className="text-[10px] uppercase font-mono tracking-[0.3em] text-foreground/30">Interface Gloss</div>
                            <div className="text-[10px] font-mono text-syarikex-blue">{backgroundIntensity}%</div>
                        </div>
                        <input 
                            type="range" 
                            min="0" 
                            max="20" 
                            value={backgroundIntensity}
                            onChange={(e) => setBackgroundIntensity(parseInt(e.target.value))}
                            className="w-full h-1 bg-white/5 rounded-lg appearance-none cursor-pointer accent-syarikex-blue"
                        />
                    </div>
                </div>
            </Card>
           </section>

           <section className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
                <Zap size={20} className="text-syarikex-blue" /> Beta Features
            </h2>
            <Card className="glass border-white/5 border-dashed rounded-[2rem] p-6 bg-syarikex-blue/[0.02]">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-syarikex-blue/10 text-syarikex-blue" style={{ color: accentColor }}>
                            <Smartphone size={18} />
                        </div>
                        <div>
                            <div className="text-sm font-medium">Haptic Feedback</div>
                            <div className="text-xs text-foreground/40">Vibrations on interface interactions</div>
                        </div>
                    </div>
                    <Switch disabled />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-syarikex-blue/10 text-syarikex-blue" style={{ color: accentColor }}>
                            <Cpu size={18} />
                        </div>
                        <div>
                            <div className="text-sm font-medium">AI Copilot Analysis</div>
                            <div className="text-xs text-foreground/40">Real-time task suggestion engine</div>
                        </div>
                    </div>
                    <Switch 
                        checked={aiAssistant} 
                        onCheckedChange={(v) => handleToggle("AI Copilot", v, setAiAssistant)} 
                        style={{ backgroundColor: aiAssistant ? accentColor : undefined }}
                    />
                </div>
            </Card>
           </section>

           <Button variant="destructive" className="w-full py-6 rounded-2xl bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 shadow-lg shadow-red-500/5">
             Deactivate Universal ID
           </Button>
        </div>

      </div>
    </div>
  );
}
