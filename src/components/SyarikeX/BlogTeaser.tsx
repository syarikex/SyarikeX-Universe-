import { motion } from "motion/react";
import { ArrowRight, Clock, User, Tag } from "lucide-react";

const posts = [
  {
    title: "The Neural Horizon: Africa's Role in AGI Development",
    excerpt: "Exploring how decentralized compute networks are empowering African researchers to compete on the global stage.",
    author: "Isaac SYARIKE",
    date: "May 06, 2026",
    category: "AI Research",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Quantum Landscapes: Visualizing the Digital Universe",
    excerpt: "Designing next-generation interfaces that feel more like biological systems than rigid grids.",
    author: "SyarikeX Creative",
    date: "May 04, 2026",
    category: "Design",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cyber Academy: 1 Million Architects by 2030",
    excerpt: "Our ambitious roadmap to educate the next generation of futuristic technology specialists.",
    author: "Education Core",
    date: "April 28, 2026",
    category: "Academy",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  }
];

export function BlogTeaser() {
  return (
    <section className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-syarikex-blue font-mono text-sm uppercase tracking-[0.4em] mb-4">Universe Journal</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Recent Insights</h2>
          </div>
          <button className="text-sm font-medium text-foreground/60 hover:text-syarikex-blue transition-colors flex items-center gap-2 group">
            View All Articles <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 glass border border-white/5 transition-all duration-500 group-hover:border-syarikex-blue/30 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-syarikex-blue text-white rounded-full px-3 shadow-lg shadow-syarikex-blue/20">{post.category}</Badge>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-mono text-foreground/40 uppercase mb-3 tracking-widest group-hover:text-foreground/60 transition-colors">
                <span className="flex items-center gap-1"><Clock size={10} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={10} /> {post.author}</span>
              </div>
              <h3 className="text-xl font-bold group-hover:text-syarikex-blue transition-colors leading-snug mb-3">
                {post.title}
              </h3>
              <p className="text-sm text-foreground/40 leading-relaxed line-clamp-3 group-hover:text-foreground/60 transition-colors">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-2 text-syarikex-blue text-xs font-semibold opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                Read Insight <ArrowRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`text-[10px] font-bold uppercase tracking-widest py-1 px-2 ${className}`}>
      {children}
    </span>
  );
}
