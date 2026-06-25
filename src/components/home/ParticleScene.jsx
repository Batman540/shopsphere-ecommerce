"use client";

import { motion } from "framer-motion";

export default function ParticleScene() {
  const stars = Array.from({ length: 200 });

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Galaxy Core */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-150
          h-150
          rounded-full
          bg-purple-600/20
          blur-[120px]
        "
      />

      {/* Stars */}

      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="
            absolute
            rounded-full
            bg-white
          "
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 5,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}