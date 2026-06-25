"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Heart } from "lucide-react";
import { products } from "@/lib/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Electronics",
    "Gaming",
    "Fashion",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center mb-16">

          <h1 className="text-6xl font-black">
            Explore Products
          </h1>

          <p className="text-gray-400 mt-4">
            Discover premium products curated for you.
          </p>

        </div>

        {/* Search */}

        <div className="relative max-w-xl mx-auto mb-10">

          <Search
            className="absolute left-4 top-4 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              pl-12
              pr-4
              py-4
              rounded-2xl
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              outline-none
              focus:border-purple-500
            "
          />

        </div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {categories.map((cat) => (

            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                category === cat
                  ? "bg-linear-to-r from-purple-600 to-cyan-500"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>

          ))}

        </div>

        {/* Products Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((product, index) => (

            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative"
            >

              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-r
                  from-purple-600
                  to-cyan-500
                  opacity-0
                  blur-2xl
                  group-hover:opacity-20
                  transition
                "
              />

              {/* Card */}

              <div
                className="
                  relative
                  rounded-3xl
                  overflow-hidden
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                "
              >

                {/* Wishlist */}

                <button
                  className="
                    absolute
                    top-4
                    right-4
                    z-10
                    p-2
                    rounded-full
                    bg-black/30
                    hover:bg-purple-600
                    transition
                  "
                >
                  <Heart size={18} />
                </button>

                {/* Product Image */}

                <div
                  className="
                    h-56
                    flex
                    items-center
                    justify-center
                    text-8xl
                    bg-linear-to-br
                    from-purple-600/20
                    to-cyan-500/20
                  "
                >
                  {product.image}
                </div>

                {/* Content */}

                <div className="p-6">

                  <h3 className="text-xl font-bold">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {product.category}
                  </p>

                  <div className="mt-4">

                    <span className="text-2xl font-bold text-purple-400">
                      ${product.price}
                    </span>

                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="
                      block
                      text-center
                      mt-6
                      py-3
                      rounded-xl
                      bg-linear-to-r
                      from-purple-600
                      to-cyan-500
                      font-semibold
                      hover:scale-105
                      transition
                    "
                  >
                    View Product
                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </main>
  );
}