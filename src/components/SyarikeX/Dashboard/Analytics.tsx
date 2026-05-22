import { motion } from "motion/react";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  BarChart, 
  Bar, 
  Cell,
  PieChart, 
  Pie 
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const data = [
  { name: "Mon", value: 4000 },
  { name: "Tue", value: 3000 },
  { name: "Wed", value: 2000 },
  { name: "Thu", value: 2780 },
  { name: "Fri", value: 1890 },
  { name: "Sat", value: 2390 },
  { name: "Sun", value: 3490 },
];

const modelData = [
  { name: "Nexus-Primary", efficiency: 98, latency: 45 },
  { name: "Core-A", efficiency: 85, latency: 120 },
  { name: "Neural-X", efficiency: 92, latency: 68 },
  { name: "Vision-A1", efficiency: 78, latency: 154 },
];

const COLORS = ["#3b82f6", "#06b6d4", "#8b5cf6", "#ec4899"];

export function Analytics() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass border-white/5 rounded-[2.5rem] overflow-hidden p-6">
          <CardHeader className="px-0">
            <CardTitle>Universe Traffic</CardTitle>
            <CardDescription>Network activity across all orbital nodes.</CardDescription>
          </CardHeader>
          <CardContent className="px-0 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#ffffff20" 
                  fontSize={10} 
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#ffffff20" 
                  fontSize={10} 
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#0a0a0a", 
                    borderColor: "#ffffff10",
                    borderRadius: "12px",
                    color: "#fff"
                  }}
                  itemStyle={{ color: "#3b82f6" }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass border-white/5 rounded-[2.5rem] overflow-hidden p-6">
          <CardHeader className="px-0">
            <CardTitle>Neural Core Efficiency</CardTitle>
            <CardDescription>Performance distribution of AI models.</CardDescription>
          </CardHeader>
          <CardContent className="px-0 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={modelData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#ffffff20" 
                  fontSize={10} 
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#ffffff20" 
                  fontSize={10} 
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                   contentStyle={{ 
                    backgroundColor: "#0a0a0a", 
                    borderColor: "#ffffff10",
                    borderRadius: "12px",
                    color: "#fff"
                  }}
                />
                <Bar dataKey="efficiency" radius={[4, 4, 0, 0]}>
                  {modelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="glass border-white/5 rounded-[2.5rem] overflow-hidden p-8 flex flex-col items-center justify-center">
            <CardTitle className="mb-6">Global Presence</CardTitle>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: "Africa", value: 65 },
                      { name: "Europe", value: 15 },
                      { name: "Americas", value: 10 },
                      { name: "Asia", value: 10 },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {[0, 1, 2, 3].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#0a0a0a", 
                      borderColor: "#ffffff10",
                      borderRadius: "12px",
                      color: "#fff"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-4 mt-4 flex-wrap justify-center">
                {["Africa", "Europe", "Americas", "Asia"].map((reg, i) => (
                    <div key={reg} className="flex items-center gap-2 text-[10px] font-mono text-foreground/40">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                        {reg}
                    </div>
                ))}
            </div>
        </Card>

        <Card className="lg:col-span-2 glass border-white/5 rounded-[2.5rem] p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-full items-center">
                {[
                    { label: "Avg Latency", value: "45ms", desc: "-12%" },
                    { label: "Uptime", value: "99.9%", desc: "Perfect" },
                    { label: "Sync Rate", value: "0.4s", desc: "+2ms" },
                    { label: "Data Flow", value: "4.2TB", desc: "+8%" }
                ].map((m, i) => (
                    <div key={i} className="text-center group">
                        <div className="text-[10px] font-mono text-syarikex-blue uppercase tracking-widest mb-2">{m.label}</div>
                        <div className="text-3xl font-bold mb-1 group-hover:scale-110 transition-transform">{m.value}</div>
                        <div className="text-[10px] text-foreground/30">{m.desc}</div>
                    </div>
                ))}
            </div>
        </Card>
      </div>
    </div>
  );
}
