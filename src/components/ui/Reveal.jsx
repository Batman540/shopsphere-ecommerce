"use client";

import { motion } from "framer-motion";

export default function Reveal({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}