import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Plus, 
  Search, 
  Filter, 
  CheckCircle2, 
  Circle, 
  Trash2,
  Calendar,
  ChevronDown,
  ArrowUpDown
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuCheckboxItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu";
import { useMockData, Task } from "../../../services/mockService";
import { toast } from "sonner";

export function Tasks() {
  const { tasks, addTask, updateTask, deleteTask } = useMockData();
  const [search, setSearch] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [priorityFilter, setPriorityFilter] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"date" | "priority">("date");
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium" as Task["priority"]
  });

  const filteredTasks = useMemo(() => {
    let result = tasks.filter(t => 
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
    );

    if (priorityFilter.length > 0) {
      result = result.filter(t => priorityFilter.includes(t.priority));
    }

    result.sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      } else {
        const priorityScore = { high: 3, medium: 2, low: 1 };
        return priorityScore[b.priority] - priorityScore[a.priority];
      }
    });

    return result;
  }, [tasks, search, priorityFilter, sortBy]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.title) return;
    
    addTask({
      ...newTask,
      status: "todo",
      dueDate: new Date().toISOString(),
      userId: "1"
    });
    setNewTask({ title: "", description: "", priority: "medium" });
    setIsAdding(false);
    toast.success("Task forged successfully");
  };

  const toggleStatus = (task: Task) => {
    const nextStatus: Task["status"] = 
      task.status === "todo" ? "in-progress" : 
      task.status === "in-progress" ? "completed" : "todo";
    updateTask(task.id, { status: nextStatus });
    toast.info(`Task status updated to ${nextStatus}`);
  };

  const getPriorityColor = (p: string) => {
    switch (p) {
      case "high": return "text-red-400 bg-red-400/10 border-red-400/20";
      case "medium": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      default: return "text-green-400 bg-green-400/10 border-green-400/20";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
          <Input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tasks in the universe..." 
            className="pl-12 py-6 rounded-2xl bg-white/5 border-white/5 focus-visible:ring-syarikex-blue/30"
          />
        </div>
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-xl border border-white/5 h-12 px-6 flex items-center gap-2 hover:bg-white/5 transition-colors">
              <Filter size={18} />
              <span>Filter</span>
              <ChevronDown size={14} className="opacity-40" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 glass border-white/10 rounded-2xl ml-4">
              <DropdownMenuLabel className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Priority Levels</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/5" />
              {["low", "medium", "high"].map((p) => (
                <DropdownMenuCheckboxItem
                  key={p}
                  checked={priorityFilter.includes(p)}
                  onCheckedChange={(checked) => {
                    setPriorityFilter(prev => 
                      checked ? [...prev, p] : prev.filter(x => x !== p)
                    );
                  }}
                  className="rounded-lg capitalize"
                >
                  {p}
                </DropdownMenuCheckboxItem>
              ))}
              <DropdownMenuSeparator className="bg-white/5" />
              <DropdownMenuLabel className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Sort By</DropdownMenuLabel>
              <DropdownMenuRadioGroup value={sortBy} onValueChange={(v) => setSortBy(v as any)}>
                <DropdownMenuRadioItem value="date" className="rounded-lg">Due Date</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="priority" className="rounded-lg">Priority Level</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            onClick={() => setIsAdding(true)}
            className="rounded-xl bg-syarikex-blue hover:bg-syarikex-blue/90 text-white h-12 px-6"
          >
            <Plus size={18} className="mr-2" /> New Task
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <Card className="glass border-syarikex-blue/20 rounded-[2rem] p-6 mb-8">
              <form onSubmit={handleAddTask} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    value={newTask.title}
                    onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                    placeholder="Task Title" 
                    className="bg-white/5 border-white/5 rounded-xl h-12"
                  />
                  <select 
                    value={newTask.priority}
                    onChange={(e) => setNewTask({...newTask, priority: e.target.value as any})}
                    className="bg-white/5 border-white/5 rounded-xl h-12 px-4 outline-none text-sm text-foreground/70"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                  </select>
                </div>
                <Input 
                  value={newTask.description}
                  onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                  placeholder="Task Description" 
                  className="bg-white/5 border-white/5 rounded-xl h-12"
                />
                <div className="flex gap-2 justify-end">
                   <Button type="button" variant="ghost" onClick={() => setIsAdding(false)} className="rounded-xl">Cancel</Button>
                   <Button type="submit" className="bg-syarikex-blue text-white rounded-xl">Forge Task</Button>
                </div>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-4">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-20 glass rounded-[2.5rem] border-white/5">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 text-foreground/20">
              <CheckCircle2 size={32} />
            </div>
            <p className="text-foreground/40 font-mono text-sm uppercase tracking-widest">No tasks found in this orbit</p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <motion.div
              layout
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="group"
            >
              <Card className="glass border-white/5 hover:border-syarikex-blue/30 transition-all rounded-[2rem] overflow-hidden">
                <CardContent className="p-6 flex items-center gap-6">
                  <button 
                    onClick={() => toggleStatus(task)}
                    className="transition-transform active:scale-95"
                  >
                    {task.status === "completed" ? (
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    ) : (
                      <Circle className={`w-8 h-8 ${task.status === "in-progress" ? "text-syarikex-blue animate-pulse" : "text-foreground/20"}`} />
                    )}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className={`font-semibold text-lg truncate ${task.status === "completed" ? "text-foreground/40 line-through" : ""}`}>
                        {task.title}
                      </h3>
                      <Badge className={`rounded-md px-2 py-0.5 text-[10px] uppercase font-mono tracking-tighter ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground/40 line-clamp-1">{task.description}</p>
                  </div>

                  <div className="hidden md:flex items-center gap-8">
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-foreground/30 uppercase mb-1">Due Horizon</div>
                      <div className="text-sm font-medium flex items-center gap-1.5">
                        <Calendar size={14} className="text-syarikex-blue" />
                        {new Date(task.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                       <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          deleteTask(task.id);
                          toast.error("Task deleted from database");
                        }}
                        className="text-foreground/20 hover:text-red-400 hover:bg-red-400/10 rounded-xl"
                       >
                         <Trash2 size={18} />
                       </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
