import { motion } from "motion/react";
import { 
  Users, 
  BarChart3, 
  Cpu, 
  Brain,
  ArrowUpRight,
  TrendingUp,
  Activity as ActivityIcon,
  Zap
} from "lucide-react";
import { 
  ResponsiveContainer, 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useMockData } from "../../../services/mockService";
import { formatDistanceToNow } from "date-fns";

export function Overview() {
  const { aiModels, activities } = useMockData();

  // Prepare radar data for models
  const radarData = aiModels.map(model => ({
    subject: model.name,
    speed: 100 - (model.inferenceSpeed / 2),
    efficiency: model.efficiency,
    reliability: 100 - (model.errorRate * 20),
    dataScale: Math.min(100, parseFloat(model.trainingData) * 20),
    fullMark: 100,
  }));

  const chartColors = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"];

  return (
    <div className="space-y-12 pb-12">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Citizens", value: "12,842", change: "+12%", icon: Users },
          { label: "AI Operations", value: "842k", change: "+24%", icon: Brain },
          { label: "Compute Logic", value: "98.2%", change: "Stable", icon: Cpu },
          { label: "Universe Reach", value: "142", change: "Nations", icon: BarChart3 },
        ].map((stat, i) => (
          <Card key={i} className="glass border-white/5 rounded-[2rem] overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-syarikex-blue/10 flex items-center justify-center text-syarikex-blue">
                  <stat.icon size={20} />
                </div>
                <span className={`text-[10px] font-mono ${stat.change.includes('+') ? 'text-green-400' : 'text-foreground/30'}`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-foreground/40 font-mono uppercase tracking-widest">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Model Intelligence Visualization */}
      <Card className="glass border-white/5 rounded-[2.5rem] overflow-hidden">
        <CardHeader className="p-8 pb-0">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Zap className="text-syarikex-blue" /> Neural Core Intelligence
              </CardTitle>
              <CardDescription>Multi-dimensional analysis of active AI models across the nexus.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-4 mr-4">
                    {["Efficiency", "Reliability", "Speed"].map((m, i) => (
                        <div key={m} className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-foreground/30">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: chartColors[i] }} />
                            {m}
                        </div>
                    ))}
                </div>
                <Button variant="outline" className="rounded-xl border-white/5 h-10 text-xs">
                    Sync Models
                </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8 pt-6">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-12">
            {/* Multi-Dimensional Comparison */}
            <div className="xl:col-span-2 space-y-6">
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                            <PolarGrid stroke="#ffffff10" />
                            <PolarAngleAxis dataKey="subject" stroke="#ffffff40" fontSize={10} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="none" />
                            <Radar
                                name="Efficiency"
                                dataKey="efficiency"
                                stroke={chartColors[0]}
                                fill={chartColors[0]}
                                fillOpacity={0.3}
                            />
                            <Radar
                                name="Reliability"
                                dataKey="reliability"
                                stroke={chartColors[1]}
                                fill={chartColors[1]}
                                fillOpacity={0.2}
                            />
                            <Tooltip 
                                contentStyle={{ backgroundColor: "#0a0a0a", borderColor: "#ffffff10", borderRadius: "12px", color: "#fff" }}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-syarikex-blue mb-4">Intelligence Summary</h4>
                    <p className="text-sm text-foreground/50 leading-relaxed">
                        Nexus-Primary maintains <span className="text-foreground italic">98% efficiency</span> while Core-A-Alpha shows high latency in distributed environments. 
                        Optimization sequence recommended for Vision-A1 nodes.
                    </p>
                </div>
            </div>

            {/* Detailed Metric Bars */}
            <div className="xl:col-span-3 space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Inference Speed (Lower is better) */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Inference Latency (ms)</span>
                            <TrendingUp size={12} className="text-syarikex-blue" />
                        </div>
                        <div className="h-[140px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={aiModels}>
                                    <XAxis dataKey="name" hide />
                                    <YAxis hide domain={[0, 200]} />
                                    <Tooltip cursor={{ fill: '#ffffff05' }} contentStyle={{ backgroundColor: "#0a0a0a", borderColor: "#ffffff10", borderRadius: "8px" }} />
                                    <Bar dataKey="inferenceSpeed" radius={[4, 4, 0, 0]} barSize={32}>
                                        {aiModels.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.inferenceSpeed < 50 ? "#3b82f6" : entry.inferenceSpeed < 100 ? "#8b5cf6" : "#444"} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Error Rate (Lower is better) */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Neural Drift (Error Rate %)</span>
                            <Cpu size={12} className="text-syarikex-blue" />
                        </div>
                        <div className="h-[140px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={aiModels}>
                                    <XAxis dataKey="name" hide />
                                    <YAxis hide domain={[0, 5]} />
                                    <Tooltip cursor={{ fill: '#ffffff05' }} contentStyle={{ backgroundColor: "#0a0a0a", borderColor: "#ffffff10", borderRadius: "8px" }} />
                                    <Bar dataKey="errorRate" radius={[4, 4, 0, 0]} barSize={32}>
                                        {aiModels.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.errorRate < 1 ? "#10b981" : "#ef4444"} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Training Data & Efficiency Comparison */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Efficiency vs Training Scale</span>
                        <Brain size={12} className="text-syarikex-blue" />
                    </div>
                    <div className="h-[180px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={aiModels} layout="vertical" margin={{ left: -20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" horizontal={false} />
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" stroke="#ffffff20" fontSize={10} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ backgroundColor: "#0a0a0a", borderColor: "#ffffff10", borderRadius: "8px" }} />
                                <Bar dataKey="efficiency" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={12} name="Efficiency %" />
                                <Bar dataKey="inferenceSpeed" fill="#ffffff10" radius={[0, 4, 4, 0]} barSize={12} name="Scale Factor" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Activity Feed */}
        <Card className="lg:col-span-2 glass border-white/5 rounded-[2.5rem]">
          <CardHeader className="p-8 pb-0">
            <CardTitle className="text-xl flex items-center gap-2">
              <ActivityIcon className="text-syarikex-blue" size={20} /> Nexus Activity Feed
            </CardTitle>
            <CardDescription>Real-time updates from across the research ecosystem.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0 group">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    activity.type === 'login' ? 'bg-syarikex-blue/10 text-syarikex-blue' :
                    activity.type === 'task_completion' ? 'bg-green-500/10 text-green-500' :
                    activity.type === 'profile_update' ? 'bg-yellow-500/10 text-yellow-500' :
                    'bg-syarikex-violet/10 text-syarikex-violet'
                  }`}>
                    {activity.type === 'login' ? <TrendingUp size={18} /> : 
                     activity.type === 'task_completion' ? <Zap size={18} /> : 
                     activity.type === 'profile_update' ? <Users size={18} /> : <Cpu size={18} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <div className="font-semibold text-sm group-hover:text-syarikex-blue transition-colors">
                        {activity.user}
                      </div>
                      <div className="text-[10px] font-mono text-foreground/30 uppercase">
                        {formatDistanceToNow(new Date(activity.timestamp))} ago
                      </div>
                    </div>
                    <p className="text-xs text-foreground/50 leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Global News */}
        <Card className="glass border-white/5 rounded-[2.5rem]">
          <CardHeader className="p-8">
            <CardTitle className="text-xl">Universal News</CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-6">
                {[
                  "New orbit established near Andromeda cluster.",
                  "Cyber Academy reaches 500k students.",
                  "Neural core update complete (v2.1.0).",
                  "New partnership with Alpha Centauri Labs.",
                  "Major security patch deployed to sentinel nodes.",
                  "Isaac Syarike adds new visionary statement.",
                  "Data sync latency reduced by 15% globally.",
                  "African research nodes see record compute spike."
                ].map((news) => (
                  <div key={news} className="flex gap-3 group cursor-pointer">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-syarikex-blue group-hover:scale-150 transition-all" />
                    <p className="text-sm text-foreground/60 leading-tight hover:text-foreground transition-colors">{news}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Button variant="ghost" className="w-full mt-6 text-syarikex-blue hover:bg-syarikex-blue/10 rounded-xl">
              See Universe Logs <ArrowUpRight size={14} className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
