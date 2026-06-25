"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-9999 bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
            },
          }}
        >
          <motion.div
            initial={{
              scale: 0.6,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear",
              }}
              className="absolute -inset-16 rounded-full border border-purple-500/40"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
              className="absolute -inset-24 rounded-full border border-blue-500/30"
            />

            <h1 className="text-7xl font-black bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              ShopSphere
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}