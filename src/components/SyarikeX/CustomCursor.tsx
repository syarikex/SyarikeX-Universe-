import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("button, a, .group")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <motion.div
        className="w-8 h-8 rounded-full border border-syarikex-blue/30 flex items-center justify-center mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
          mass: 0.5,
        }}
      >
        <div className="w-1 h-1 bg-syarikex-blue rounded-full" />
      </motion.div>
      
      {/* Light follow shadow */}
      <motion.div
        className="w-[300px] h-[300px] bg-syarikex-blue/5 rounded-full blur-[100px]"
        animate={{
          x: position.x - 150,
          y: position.y - 150,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      />
    </div>
  );
}
