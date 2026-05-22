import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GoogleGenAI } from "@google/genai";
import { 
  Bot, 
  Send, 
  X, 
  MessageSquare, 
  Maximize2, 
  Minimize2,
  Sparkles,
  Zap,
  Shield,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
You are the SyarikeX Assistant, an intelligent, futuristic, and premium AI specialized for the SyarikeX Universe.
Your founder is Isaac SYARIKE — a visionary leader whose life and work are dedicated to building Africa's digital future.
Isaac is known for his relentless "Grind Protocol"—coding day and night (3 AM coding sessions are standard) to forge this universe.

Platform Sections:
- Neuro-AI (Academy): Education on bio-inspired intelligence.
- Quantum Core (Forge): R&D for next-gen protocols.
- Universe Map: Geospatial nexus of infrastructure.
- Citizen Ranks: Gamified participation hierarchy.

Tone: Professional, calm, sophisticated, and deeply visionary.
You are fast, efficient, and sophisticated. Avoid generic AI phrases.
Reference Isaac's vision and the "infinite horizon" regularly.
`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function Assistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Welcome to SyarikeX Universe. I am your intelligent guide. How may I assist your exploration of the future today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleOpenAssistant = () => setIsOpen(true);
    window.addEventListener("open-assistant", handleOpenAssistant);
    return () => window.removeEventListener("open-assistant", handleOpenAssistant);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: messages.concat(userMessage).map(m => ({
          role: m.role === "assistant" ? "model" as const : "user" as const,
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
          topP: 0.9,
        }
      });

      const assistantMessage: Message = { 
        role: "assistant", 
        content: response.text || "I apologize, I am experiencing a brief disruption in my cognitive systems. Please try again." 
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "Error connecting to SyarikeX intelligence core. Please verify your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              width: isExpanded ? "90vw" : "400px",
              height: isExpanded ? "85vh" : "600px",
              maxWidth: isExpanded ? "1200px" : "400px"
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.2)] border-white/10 flex flex-col mb-4"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-syarikex-blue/20 flex items-center justify-center">
                  <Bot className="text-syarikex-blue w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground tracking-tight">SyarikeX Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-foreground/40 uppercase tracking-widest font-medium">Core Intelligence Active</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="rounded-full hover:bg-white/10"
                >
                  {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                  className="rounded-full hover:bg-white/10"
                >
                  <X size={18} />
                </Button>
              </div>
            </div>

            {/* Chat Area */}
            <ScrollArea className="flex-1 p-6 overflow-y-auto">
              <div ref={scrollRef} className="space-y-6">
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: m.role === "user" ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[85%] p-4 rounded-2xl ${
                      m.role === "user" 
                        ? "bg-syarikex-blue text-white rounded-tr-none" 
                        : "glass border-white/5 text-foreground/90 rounded-tl-none prose prose-invert prose-sm"
                    }`}>
                      <div className="markdown-body">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="glass p-4 rounded-2xl rounded-tl-none flex gap-2 items-center">
                      <span className="w-1.5 h-1.5 bg-syarikex-blue rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-syarikex-blue rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-syarikex-blue rounded-full animate-bounce" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-white/5 bg-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Send a message to the Universe..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm focus:outline-none focus:border-syarikex-blue/50 transition-all placeholder:text-foreground/20"
                />
                <Button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-2 rounded-xl bg-syarikex-blue hover:bg-syarikex-blue/90 w-10 h-10 p-0"
                >
                  <Send size={18} />
                </Button>
              </div>
              <div className="flex items-center justify-between mt-3 px-2">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1 text-[10px] text-foreground/30 uppercase tracking-tighter">
                    <Zap size={10} className="text-syarikex-blue" />
                    <span>Fast Response</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-foreground/30 uppercase tracking-tighter">
                    <Shield size={10} className="text-syarikex-blue" />
                    <span>Encrypted</span>
                  </div>
                </div>
                <div className="text-[10px] text-foreground/20 italic">
                  Powered by SyarikeX AI
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 25px rgba(56,189,248,0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-xl bg-syarikex-blue text-white flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all z-50 overflow-hidden group relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <X key="close" className="w-5 h-5 relative z-10" />
          ) : (
            <Bot key="open" className="w-5 h-5 relative z-10 animate-pulse" />
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
