"use client";

import { motion } from "framer-motion";

const recommendations = [
  {
    name: "MacBook Air M4",
    reason: "Perfect for developers",
    icon: "💻",
  },
  {
    name: "Sony WH-1000XM5",
    reason: "Based on your audio interests",
    icon: "🎧",
  },
  {
    name: "iPhone 17 Pro",
    reason: "Trending in your region",
    icon: "📱",
  },
];

export default function AIRecommendations() {
  return (
    <section className="py-28 bg-black px-6 relative overflow-hidden">

      <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 via-transparent to-cyan-500/10" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold tracking-widest">
            AI POWERED
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-4">
            Recommendations For You
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Personalized product suggestions generated using intelligent
            recommendation systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {recommendations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <div className="text-6xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.name}
              </h3>

              <p className="text-purple-400 mt-3">
                {item.reason}
              </p>

              <button className="mt-8 px-6 py-3 rounded-xl bg-linear-to-r from-purple-500 to-cyan-500 text-white font-semibold">
                View Product
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}