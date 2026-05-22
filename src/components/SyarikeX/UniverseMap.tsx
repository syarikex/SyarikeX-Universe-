import { motion } from "motion/react";
import { 
  Globe, 
  Map as MapIcon, 
  Navigation, 
  Zap, 
  Activity, 
  Layers,
  Search,
  Crosshair
} from "lucide-react";
import { useState } from "react";

const nodes = [
  { id: 1, name: "Nexus Core", x: "50%", y: "50%", status: "online", type: "hub", description: "Central intelligence processing unit." },
  { id: 2, name: "Lagos Lab", x: "42%", y: "58%", status: "online", type: "lab", description: "Primary research facility for adaptive AI." },
  { id: 3, name: "Nairobi Node", x: "65%", y: "55%", status: "online", type: "relay", description: "Regional data relay and compute cluster." },
  { id: 4, name: "Accra Array", x: "38%", y: "54%", status: "online", type: "lab", description: "Cyber Academy primary hosting center." },
  { id: 5, name: "Cape Town Station", x: "48%", y: "82%", status: "maintenance", type: "relay", description: "Space station downlink and orbital research." },
  { id: 6, name: "Deep Sea Cluster", x: "30%", y: "45%", status: "planned", type: "compute", description: "Experimental hydro-compute facility." },
];

export function UniverseMap() {
  const [selectedNode, setSelectedNode] = useState(nodes[0]);

  return (
    <section id="space" className="py-32 px-6 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-syarikex-blue/[0.02] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-syarikex-blue/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Map View */}
          <div className="flex-1">
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-syarikex-blue font-mono text-xs uppercase tracking-[0.5em] mb-4"
              >
                Geospatial Nexus
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-asteady italic tracking-tight mb-6"
              >
                Interactive <span className="text-foreground/40 text-glow">Universe Map</span>
              </motion.h2>
              <p className="text-foreground/50 max-w-xl text-lg font-light leading-relaxed">
                A real-time visualization of the SyarikeX infrastructure across the globe. Monitor node status, latency, and research output.
              </p>
            </div>

            <div className="relative aspect-[16/9] glass rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl group/map">
              {/* Fake Map Grid */}
              <div 
                className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(56,189,248,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.2)_1px,transparent_1px)]"
                style={{ backgroundSize: '40px 40px' }}
              />
              
              {/* Atmospheric effects in map */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-syarikex-blue/20 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-syarikex-violet/10 rounded-full blur-[120px] animate-pulse delay-500" />

              {/* Central Crosshair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full animate-ping opacity-20 pointer-events-none" />

              {/* Node Markers */}
              {nodes.map((node) => (
                <motion.button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.5, zIndex: 50 }}
                  className="absolute p-2 -translate-x-1/2 -translate-y-1/2 group/node"
                  style={{ top: node.y, left: node.x }}
                >
                  <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    selectedNode.id === node.id 
                      ? "bg-syarikex-blue border-white scale-125 shadow-[0_0_20px_rgba(56,189,248,0.8)]" 
                      : node.status === 'online' 
                        ? "bg-syarikex-blue/40 border-syarikex-blue/60 group-hover/node:bg-syarikex-blue group-hover/node:border-white shadow-[0_0_10px_rgba(56,189,248,0.3)]"
                        : node.status === 'maintenance'
                          ? "bg-amber-400/40 border-amber-400 group-hover/node:bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.3)]"
                          : "bg-white/10 border-white/20"
                  }`} />
                  
                  {/* Tooltip on hover */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {node.name}
                  </div>
                </motion.button>
              ))}

              {/* Map HUD Elements */}
              <div className="absolute top-8 left-8 flex flex-col gap-4">
                <div className="glass px-4 py-2 border-white/5 rounded-2xl flex items-center gap-3">
                  <Activity size={14} className="text-syarikex-blue animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-foreground/60 uppercase">Streaming Global Data</span>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 flex items-center gap-4">
                <div className="glass px-4 py-2 border-white/5 rounded-2xl flex items-center gap-3">
                  <Navigation size={14} className="text-white/40" />
                  <span className="text-[10px] font-mono tracking-widest text-foreground/40 uppercase">Lat: 0.00° / Lng: 0.00°</span>
                </div>
              </div>
            </div>
          </div>

          {/* Node Details Sidebar */}
          <div className="w-full lg:w-96 flex flex-col gap-6">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-10 rounded-[3rem] border border-white/5 flex-1 relative overflow-hidden group/details"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover/details:opacity-5 transition-opacity">
                {selectedNode.type === 'hub' && <Globe size={180} />}
                {selectedNode.type === 'lab' && <Zap size={180} />}
                {selectedNode.type === 'relay' && <Layers size={180} />}
                {selectedNode.type === 'compute' && <MapIcon size={180} />}
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className={`w-3 h-3 rounded-full animate-pulse ${
                  selectedNode.status === 'online' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 
                  selectedNode.status === 'maintenance' ? 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]' : 
                  'bg-white/20'
                }`} />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/40">{selectedNode.status}</span>
              </div>

              <h3 className="text-4xl font-bold mb-4 tracking-tight">{selectedNode.name}</h3>
              <div className="text-xs font-mono text-syarikex-blue uppercase tracking-widest mb-6 px-3 py-1 bg-syarikex-blue/10 rounded-full inline-block">
                {selectedNode.type} Node Phase 4
              </div>
              
              <p className="text-foreground/50 leading-relaxed font-light text-lg mb-12">
                {selectedNode.description}
              </p>

              <div className="space-y-6">
                {[
                  { label: "Research Output", value: "84.2%", icon: Activity },
                  { label: "Connection Strength", value: "99.9%", icon: Zap },
                  { label: "Active Researchers", value: "1,204", icon: Globe },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <stat.icon size={16} className="text-syarikex-blue" />
                      <span className="text-xs font-medium text-foreground/40">{stat.label}</span>
                    </div>
                    <span className="font-mono text-xs font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-12 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-syarikex-blue hover:text-white transition-all font-medium flex items-center justify-center gap-3 group">
                <Search size={18} />
                Explore Node Documentation
                <Navigation size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-30" />
              </button>
            </motion.div>
            
            <div className="glass p-8 rounded-[2.5rem] border border-white/5 bg-syarikex-blue/5">
              <div className="flex items-center gap-4 mb-4">
                <Crosshair className="text-syarikex-blue animate-spin-slow" size={24} />
                <h4 className="font-bold">Satellite Link Active</h4>
              </div>
              <p className="text-sm text-foreground/40 leading-relaxed">
                Connect your personal lab to the Universe Grid. Earn Citoyen points by contributing idle compute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
