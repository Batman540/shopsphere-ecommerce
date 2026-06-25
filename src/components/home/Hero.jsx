"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
import ParticleScene from "./ParticleScene";
import ParallaxGalaxy from "./ParallaxGalaxy";

export default function Hero() {
  return (
    <section
      className="
        relative
        h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black
      "
      style={{
        perspective: "1500px",
      }}
    >
      {/* Galaxy Stars */}
      <ParticleScene />
      <ParallaxGalaxy />
      {/* Nebula Cloud 1 */}

      <motion.div
  animate={{
    x: [0, 80, 0],
    y: [0, -40, 0],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
  }}
  className="
    absolute
    top-10
    left-10
    w-175
    h-175
    rounded-full
    bg-cyan-500/30
    blur-[180px]
  "
/>

      {/* Nebula Cloud 2 */}

      <motion.div
  animate={{
    x: [0, -80, 0],
    y: [0, 60, 0],
  }}
  transition={{
    duration: 25,
    repeat: Infinity,
  }}
  className="
    absolute
    bottom-10
    right-10
    w-200
    h-200
    rounded-full
    bg-purple-500/30
    blur-[200px]
  "
/>

      {/* Hero Content */}

      <div className="relative text-center z-10">
        {/* Purple Energy Burst */}

        <motion.div
          initial={{
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: 8,
            opacity: 0,
          }}
          transition={{
            duration: 2,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-32
            h-32
            rounded-full
            bg-purple-500
            blur-3xl
          "
        />

        {/* Logo */}

        <motion.h1
          initial={{
            scale: 0.02,
            opacity: 0,
            rotateX: 180,
            filter: "blur(50px)",
          }}
          animate={{
            scale: 1,
            opacity: 1,
            rotateX: 0,
            filter: "blur(0px)",
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            ease: [0.16, 1, 0.3, 1],
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            text-6xl
            md:text-8xl
            font-black
            drop-shadow-[0_0_40px_rgba(168,85,247,0.8)]
            bg-linear-to-r
            from-purple-400
            via-white
            to-cyan-400
            bg-clip-text
            text-transparent
          "
        >
          SHOPSPHERE
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="
            mt-6
            text-xl
            text-gray-300
            max-w-2xl
            mx-auto
          "
        >
          The Future Of Commerce
          <br />
          Built For The Next Generation
        </motion.p>

        {/* CTA Button */}

        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            mt-10
            px-8
            py-4
            rounded-full
            bg-linear-to-r
            from-purple-600
            to-cyan-500
            font-semibold
            shadow-lg
            shadow-purple-500/30
          "
        >
          Explore Products
        </motion.button>
      </div>

      <ScrollIndicator />
    </section>
  );
}