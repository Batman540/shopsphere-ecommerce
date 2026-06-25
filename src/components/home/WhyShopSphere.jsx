"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "50K+",
    label: "Products",
  },
  {
    number: "25K+",
    label: "Happy Customers",
  },
  {
    number: "500+",
    label: "Verified Sellers",
  },
  {
    number: "99.9%",
    label: "Customer Satisfaction",
  },
];

export default function WhyShopSphere() {
  return (
    <section className="py-32 bg-black px-6 relative overflow-hidden">

      <div className="absolute w-125 h-125 bg-purple-500/20 blur-[180px] rounded-full left-0 top-20" />

      <div className="absolute w-125 h-125 bg-cyan-500/20 blur-[180px] rounded-full right-0 bottom-20" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-20">

          <p className="text-purple-400 font-semibold tracking-widest">
            WHY SHOPSPHERE
          </p>

          <h2 className="text-6xl font-black mt-4 text-white">
            Built For The Future
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            AI-powered ecommerce experience designed for modern customers,
            sellers, and businesses.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 40,
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
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
            >
              <h3 className="text-5xl font-black bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-4">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-24">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="text-5xl mb-6">🤖</div>

            <h3 className="text-2xl font-bold text-white">
              AI Recommendations
            </h3>

            <p className="text-gray-400 mt-4">
              Personalized product suggestions powered by AI.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="text-5xl mb-6">⚡</div>

            <h3 className="text-2xl font-bold text-white">
              Lightning Fast
            </h3>

            <p className="text-gray-400 mt-4">
              Built with Next.js for exceptional performance.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="text-5xl mb-6">🔒</div>

            <h3 className="text-2xl font-bold text-white">
              Secure Checkout
            </h3>

            <p className="text-gray-400 mt-4">
              Enterprise-grade security for payments and data.
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}