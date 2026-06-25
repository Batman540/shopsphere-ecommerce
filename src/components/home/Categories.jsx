"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Electronics",
    icon: "⚡",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Gaming",
    icon: "🎮",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Fashion",
    icon: "👕",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Smart Home",
    icon: "🏠",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Categories() {
  return (
    <section className="py-32 bg-black px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-purple-400 font-semibold">
            SHOP BY CATEGORY
          </p>

          <h2 className="text-6xl font-black mt-4">
            Explore Categories
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
              }}
              className="group relative h-70"
            >

              <div
                className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-20 blur-2xl group-hover:opacity-50 transition`}
              />

              <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center">

                <div className="text-7xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}