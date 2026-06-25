"use client";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/cartSlice";

import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
} from "lucide-react";

export default function CartPage() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );
  console.log("CART PAGE ITEMS:", cartItems);

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const shipping =
    subtotal > 0 ? 49 : 0;

  const tax = Math.floor(
    subtotal * 0.18
  );

  const total =
    subtotal + shipping + tax;

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <h1 className="text-6xl font-black mb-4">
            Shopping Cart
          </h1>

          <p className="text-gray-400">
            Review your selected products
          </p>
        </motion.div>

        {cartItems.length === 0 ? (
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              py-32
            "
          >
            <ShoppingBag
              size={80}
              className="text-gray-500"
            />

            <h2 className="text-3xl font-bold mt-6">
              Your Cart is Empty
            </h2>

            <p className="text-gray-400 mt-3">
              Start adding products to continue
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10 mt-12">

            {/* Cart Items */}

            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    rounded-3xl
                    p-6
                  "
                >
                  <div className="flex justify-between items-center">

                    {/* Left */}

                    <div className="flex items-center gap-6">

                      <div className="text-6xl">
                        {item.image}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold">
                          {item.name}
                        </h3>

                        <p className="text-gray-400">
                          {item.category}
                        </p>

                        <p className="text-cyan-400 mt-2 font-bold">
                          ₹{item.price}
                        </p>
                      </div>

                    </div>

                    {/* Right */}

                    <div className="flex items-center gap-4">

                      {/* Quantity */}

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          bg-white/10
                          rounded-xl
                          px-3
                          py-2
                        "
                      >
                        <button
                          onClick={() =>
                            dispatch(
                              decreaseQuantity(item.id)
                            )
                          }
                        >
                          <Minus size={18} />
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            dispatch(
                              increaseQuantity(item.id)
                            )
                          }
                        >
                          <Plus size={18} />
                        </button>
                      </div>

                      {/* Remove */}

                      <button
                        onClick={() =>
                          dispatch(
                            removeFromCart(item.id)
                          )
                        }
                        className="
                          p-3
                          rounded-xl
                          bg-red-500/20
                          hover:bg-red-500/30
                        "
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </div>
                </motion.div>
              ))}

            </div>

            {/* Summary */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="
                h-fit
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                sticky
                top-32
              "
            >
              <h2 className="text-3xl font-black mb-8">
                Order Summary
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>
                    ₹{subtotal}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    ₹{shipping}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>
                    ₹{tax}
                  </span>
                </div>

                <hr className="border-white/10" />

                <div className="flex justify-between text-2xl font-black">

                  <span>Total</span>

                  <span className="text-cyan-400">
                    ₹{total}
                  </span>

                </div>

              </div>

              <button
                className="
                  w-full
                  mt-8
                  py-4
                  rounded-2xl
                  font-bold
                  text-lg
                  bg-linear-to-r
                  from-purple-600
                  to-cyan-500
                  hover:scale-105
                  transition
                "
              >
                Proceed To Checkout
              </button>

            </motion.div>

          </div>
        )}

      </div>

    </main>
  );
}