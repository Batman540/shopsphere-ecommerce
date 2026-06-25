"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    price: "$1299",
    rating: 4.9,
    icon: "📱",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    name: "MacBook Pro M4",
    price: "$1999",
    rating: 5.0,
    icon: "💻",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    name: "Sony XM5",
    price: "$349",
    rating: 4.8,
    icon: "🎧",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    name: "Apple Watch Ultra",
    price: "$899",
    rating: 4.9,
    icon: "⌚",
    color: "from-green-500 to-emerald-500",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <p className="text-purple-400 font-semibold tracking-wider">
            TRENDING NOW
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4 text-white">
            Featured Products
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Premium products loved by thousands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              className="group relative"
            >

              {/* Glow */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${product.color}
                opacity-20 blur-3xl group-hover:opacity-50 transition duration-500`}
              />

              {/* Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

                {/* Product Visual */}
                <div
                  className={`h-48 bg-linear-to-br ${product.color}
                  flex items-center justify-center`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-8xl"
                  >
                    {product.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold text-white">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-3">
                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-white">
                      {product.rating}
                    </span>
                  </div>

                  <div className="mt-5">
                    <span className="text-3xl font-bold text-purple-400">
                      {product.price}
                    </span>
                  </div>

                  <button
                    className={`mt-8 w-full py-3 rounded-xl
                    bg-linear-to-r ${product.color}
                    font-semibold text-white
                    hover:scale-105 transition-all duration-300`}
                  >
                    Add To Cart
                  </button>

                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}