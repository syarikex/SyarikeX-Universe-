import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Terminal, 
  Cpu, 
  Bot, 
  FlaskConical, 
  GraduationCap, 
  Rocket, 
  Keyboard,
  ArrowRight,
  Sparkles,
  FileText
} from "lucide-react";
import { 
  Dialog, 
  DialogContent 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useMockData } from "../../services/mockService";

const staticCommands = [
  { group: "Universe", items: [
    { name: "Launch AI Assistant", icon: Bot, shortcut: "A" },
    { name: "Explore Research Labs", icon: FlaskConical, shortcut: "R" },
    { name: "Open Cyber Academy", icon: GraduationCap, shortcut: "L" },
    { name: "Space Station Teleport", icon: Rocket, shortcut: "S" },
  ]},
  { group: "Developer", items: [
    { name: "Documentation Core", icon: Terminal, shortcut: "D" },
    { name: "Project Repository", icon: Cpu, shortcut: "P" },
  ]},
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { searchables } = useMockData();

  const results = useMemo(() => {
    if (!search) return [];
    
    return searchables.filter(item => 
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, searchables]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden glass border-white/10 dark:border-white/5 rounded-[2rem] shadow-[0_0_80px_rgba(0,0,0,0.5)]">
        <div className="p-6 border-b border-white/5 bg-white/5 flex items-center gap-3">
          <Search className="w-5 h-5 text-syarikex-blue" />
          <Input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search the Universe..." 
            className="border-none bg-transparent focus-visible:ring-0 text-lg placeholder:text-foreground/20"
          />
          <Badge variant="outline" className="text-[10px] opacity-40">ESC</Badge>
        </div>
        
        <ScrollArea className="h-[400px]">
          <div className="p-4 space-y-8">
            {search && results.length > 0 && (
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-syarikex-blue mb-4 ml-2">
                  Intelligence Results
                </h4>
                <div className="space-y-1">
                  {results.map((item) => (
                     <button
                        key={item.id}
                        onClick={() => setOpen(false)}
                        className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-syarikex-blue/10 group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-syarikex-blue/20 transition-colors">
                            {item.type === "AI Tool" ? <Sparkles className="w-5 h-5 text-syarikex-blue" /> : <FileText className="w-5 h-5 text-syarikex-violet" />}
                          </div>
                          <div className="text-left">
                            <div className="flex items-center gap-2">
                               <span className="font-medium text-foreground/80 group-hover:text-foreground transition-colors">{item.title}</span>
                               <Badge className="text-[8px] h-4 bg-white/5 border-none font-mono uppercase tracking-tighter text-foreground/30">{item.type}</Badge>
                            </div>
                            <div className="text-[10px] text-foreground/40 line-clamp-1">{item.description}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-syarikex-blue" />
                      </button>
                  ))}
                </div>
              </div>
            )}

            {staticCommands.map((group) => (
              <div key={group.group}>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/30 mb-4 ml-2">
                  {group.group}
                </h4>
                <div className="space-y-1">
                  {group.items.filter(i => i.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setOpen(false)}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                          <item.icon className="w-5 h-5 text-foreground/60 group-hover:text-syarikex-blue transition-colors" />
                        </div>
                        <span className="font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] font-mono text-foreground/40">⌘</kbd>
                          <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] font-mono text-foreground/40">{item.shortcut}</kbd>
                        </div>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-syarikex-blue" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className="p-4 bg-white/5 border-t border-white/5 flex items-center justify-between text-[10px] text-foreground/30 font-mono tracking-widest uppercase">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Keyboard size={10} /> Navigate</span>
            <span className="flex items-center gap-1"><ArrowRight size={10} /> Select</span>
          </div>
          <div>SyarikeX Intelligence Core v1.0</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
