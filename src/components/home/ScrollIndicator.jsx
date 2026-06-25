"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
      <div className="w-6 h-10 border border-white rounded-full flex justify-center">
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="w-1 h-3 bg-white rounded-full mt-2"
        />
      </div>
    </div>
  );
}