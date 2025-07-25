"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">FLOKI WIF HAT</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The cutest memecoin on Base Network! Join our adorable Floki wearing his signature pink hat as we moon
            together. Now listed on Ape Store!
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://ape.store/base/0x1fbd31e8745867cbacd4564634e7daf8ad62fb71"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button text-sm sm:text-base"
            >
              Buy on Ape Store
            </a>
            <a
              href="https://dexscreener.com/base/0x08E927fD1AAa6848C753882C83998F6AC25FB730"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-primary hover:underline font-semibold"
            >
              View Chart →
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-12 max-w-sm sm:max-w-md lg:mt-0 lg:max-w-none"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <img
              src="/images/character-icon.png"
              alt="FLOKI WIF HAT mascot"
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10 mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
