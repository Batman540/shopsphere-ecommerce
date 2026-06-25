"use client";

import { use } from "react";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Star, Heart, ShoppingCart } from "lucide-react";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

export default function ProductDetails({ params }) {
  const { id } = use(params);

  const dispatch = useDispatch();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Product Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              rounded-3xl
              overflow-hidden
              bg-linear-to-br
              from-purple-600/20
              to-cyan-500/20
              h-137.5
              flex
              items-center
              justify-center
            "
          >
            <div className="text-[180px]">
              {product.image}
            </div>
          </motion.div>

          {/* Product Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <span
              className="
                px-4
                py-2
                rounded-full
                bg-purple-500/20
                text-purple-300
              "
            >
              {product.category}
            </span>

            <h1 className="text-6xl font-black mt-8">
              {product.name}
            </h1>

            {/* Rating */}

            <div className="flex items-center gap-2 mt-6">

              <Star
                className="
                  text-yellow-400
                  fill-yellow-400
                "
              />

              <span>4.9 Rating</span>

            </div>

            {/* Price */}

            <h2
              className="
                text-5xl
                font-black
                text-cyan-400
                mt-8
              "
            >
              ${product.price}
            </h2>

            {/* Description */}

            <p
              className="
                mt-8
                text-gray-400
                leading-8
                text-lg
              "
            >
              Experience next-generation performance,
              premium build quality and futuristic design.
              Crafted for users who demand excellence.
            </p>

            {/* Buttons */}

            <div className="flex gap-4 mt-10">

              <button
                onClick={() => {
                  console.log("ADD TO CART CLICKED");
                  console.log(product);

                  dispatch(addToCart(product));

                  setTimeout(() => {
                    console.log("AFTER DISPATCH");
                  }, 100);
                }}
                className="
                  flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-xl
                  bg-linear-to-r
                  from-purple-600
                  to-cyan-500
                  font-bold
                  hover:scale-105
                  transition
                "
              >
                <ShoppingCart size={20} />
                Add To Cart
              </button>

              <button
                className="
                  p-4
                  rounded-xl
                  border
                  border-white/10
                  hover:bg-white/10
                "
              >
                <Heart />
              </button>

            </div>

          </motion.div>

        </div>

        {/* Reviews */}

        <section className="mt-32">

          <h2 className="text-4xl font-black mb-10">
            Customer Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                "
              >
                <div className="text-yellow-400 mb-3">
                  ★★★★★
                </div>

                <p className="text-gray-400">
                  Amazing quality. Premium feel and
                  excellent experience.
                </p>

                <p className="mt-4 font-bold">
                  Customer {item}
                </p>
              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}