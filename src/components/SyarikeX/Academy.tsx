import { motion } from "motion/react";
import { 
  Play, 
  BookMarked, 
  Trophy, 
  Users, 
  Star,
  Clock,
  ArrowUpRight,
  Monitor,
  Cpu,
  Brain,
  ShieldCheck,
  Globe
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Neuro-Architectural Foundations: Bio-Inspired AI",
    instructor: "Isaac Syarike",
    level: "Advanced",
    duration: "12 Hours",
    rating: 4.9,
    students: "12.4k",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
    icon: Brain,
    color: "from-syarikex-blue to-syarikex-cyan",
    description: "Explore the intersection of neuroscience and deep learning. Building AI that thinks like humans."
  },
  {
    id: 2,
    title: "Quantum Ledger Systems & Cryptography",
    instructor: "Sarah Alabi",
    level: "Intermediate",
    duration: "8 Hours",
    rating: 4.8,
    students: "8.2k",
    image: "https://images.unsplash.com/photo-1639322537231-2f206e06af84?auto=format&fit=crop&q=80&w=800",
    icon: Cpu,
    color: "from-purple-500 to-indigo-500",
    description: "Understanding quantum resistance and the future of decentralized security."
  },
  {
    id: 3,
    title: "Exascale Cloud: Continental Infrastructure",
    instructor: "Dr. Kofi Mensah",
    level: "Expert",
    duration: "15 Hours",
    rating: 5.0,
    students: "4.1k",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    icon: Globe,
    color: "from-emerald-500 to-teal-500",
    description: "Designing cloud systems that scale across entire continents with zero latency."
  },
  {
    id: 4,
    title: "Relativistic Physics in Digital Simulations",
    instructor: "Astra Vance",
    level: "Expert",
    duration: "20 Hours",
    rating: 4.9,
    students: "2.5k",
    image: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&q=80&w=800",
    icon: Star,
    color: "from-orange-500 to-red-500",
    description: "Implementing Einstein's theory of relativity in real-time cosmic simulations."
  },
  {
    id: 5,
    title: "Cyber-Security: Zero-Trust Universe",
    instructor: "Leo Matrix",
    level: "Advanced",
    duration: "10 Hours",
    rating: 4.7,
    students: "15k",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    icon: ShieldCheck,
    color: "from-blue-600 to-indigo-700",
    description: "Securing the SyarikeX Grid against multi-dimensional cyber threats."
  },
  {
    id: 6,
    title: "Futuristic Design: Aesthetic Intelligence",
    instructor: "Elena Vision",
    level: "Intermediate",
    duration: "6 Hours",
    rating: 4.8,
    students: "10.1k",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    icon: Monitor,
    color: "from-pink-500 to-rose-500",
    description: "The philosophy of premium design and how it drives user trust in tech."
  }
];

export function Academy() {
  return (
    <section id="learn" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-syarikex-blue font-mono text-xs uppercase tracking-[0.5em] mb-4"
            >
              Cyber Academy
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-asteady italic tracking-tight mb-8"
            >
              The Next <span className="text-foreground/40 italic">Horizon of Learning</span>
            </motion.h2>
            <p className="text-foreground/50 text-xl font-light leading-relaxed">
              Master the technologies of the future. Our courses are designed by world-class researchers to bridge the gap between imagination and implementation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            <div className="glass p-6 rounded-3xl border border-white/5 text-center">
              <div className="text-3xl font-bold mb-1 tracking-tighter">500k+</div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-foreground/40">Students</div>
            </div>
            <div className="glass p-6 rounded-3xl border border-white/5 text-center">
              <div className="text-3xl font-bold mb-1 tracking-tighter">98%</div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-foreground/40">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-[3rem] border border-white/5 overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-lg`}>
                    <course.icon size={24} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                   <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-white/80 uppercase">
                     {course.level}
                   </div>
                   <div className="flex items-center gap-1.5 px-3 py-1 bg-syarikex-blue/20 backdrop-blur-md rounded-full border border-syarikex-blue/30 text-[10px] font-mono text-syarikex-blue uppercase">
                     <Clock size={10} />
                     {course.duration}
                   </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-syarikex-blue transition-colors line-clamp-2 min-h-[4rem]">
                  {course.title}
                </h3>
                
                <p className="text-sm text-foreground/40 leading-relaxed font-light mb-6 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                  <div className="text-sm">
                    <div className="text-foreground/40 text-[10px] uppercase font-mono">Instructor</div>
                    <div className="font-medium">{course.instructor}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-xs">
                      <Star size={12} className="text-amber-400 fill-amber-400" />
                      <span className="font-bold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-foreground/40">
                      <Users size={12} />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  <button className="p-3 rounded-xl bg-white text-black hover:bg-syarikex-blue hover:text-white transition-all transform group-hover:translate-x-1">
                    <Play size={18} fill="currentColor" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-24 p-12 rounded-[4rem] glass border border-white/5 relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="flex-1">
              <h3 className="text-4xl font-bold mb-6 tracking-tight">Become an Instructor</h3>
              <p className="text-foreground/50 text-lg font-light leading-relaxed mb-8">
                Join our elite panel of researchers and industry experts. Share your vision and help shape the next generation of African technicity.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: BookMarked, label: "Curriculum Design" },
                  { icon: Monitor, label: "Live Workshops" },
                  { icon: Trophy, label: "Certifications" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-syarikex-blue">
                    <item.icon size={16} />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <button className="px-10 py-6 rounded-3xl bg-white text-black font-bold text-lg tracking-tighter hover:bg-syarikex-blue hover:text-white transition-all flex items-center gap-3">
              APPLY NOW <ArrowUpRight size={24} />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
             <Trophy size={400} className="absolute -top-20 -right-20 rotate-12" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
