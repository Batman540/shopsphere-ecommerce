"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ParallaxGalaxy() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: mouse.x,
        y: mouse.y,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
      className="absolute inset-0 pointer-events-none"
    >
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-300
          h-300
          rounded-full
          bg-purple-500/10
          blur-[200px]
        "
      />
    </motion.div>
  );
}