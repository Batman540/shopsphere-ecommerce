"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  console.log("Cart Items:", cartItems);
  console.log("Navbar:", cartItems);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        backdrop-blur-xl
        bg-black/30
        border-b
        border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link href="/">
            <h1
              className="
                text-3xl
                font-black
                bg-linear-to-r
                from-purple-400
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              ShopSphere
            </h1>
          </Link>

          {/* Navigation */}

          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="hover:text-purple-400 transition"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="hover:text-purple-400 transition"
            >
              Products
            </Link>

            <Link
              href="/seller"
              className="hover:text-purple-400 transition"
            >
              Seller
            </Link>

          </div>

          {/* Cart */}

          <Link
            href="/cart"
            className="relative"
          >
            <ShoppingCart size={28} />

            {cartItems.length > 0 && (
              <span
                className="
                  absolute
                  -top-2
                  -right-2
                  w-5
                  h-5
                  rounded-full
                  bg-red-500
                  text-xs
                  flex
                  items-center
                  justify-center
                  font-bold
                "
              >
                {cartItems.length}
              </span>
            )}
          </Link>

        </div>

      </div>
    </motion.nav>
  );
}