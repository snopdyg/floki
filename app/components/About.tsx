"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About FLOKI WIF HAT</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            The most adorable memecoin on Base Network, bringing joy and community together through our beloved mascot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            className="flex justify-center order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/images/character-icon.png"
                alt="FLOKI WIF HAT mascot"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 order-2 lg:order-2"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Our Story</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                FLOKI WIF HAT was born from the love of memes and the power of community. Our adorable Shiba Inu mascot,
                sporting his signature pink beanie, represents the fun and inclusive spirit of the memecoin revolution
                on Base Network.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We aim to create the strongest and most supportive memecoin community on Base Network. Through fair
                distribution, zero taxes, and community-driven governance, we're building something special that brings
                people together through the power of memes and shared dreams.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Why Base Network?</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Built on Coinbase's Layer 2 solution, FLOKI WIF HAT benefits from lightning-fast transactions and
                minimal fees. This allows our community to trade, interact, and participate without the burden of high
                gas costs, making our memecoin accessible to everyone.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">100%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Community Owned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">0%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Buy/Sell Tax</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">Base</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Network</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">Fair</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Launch</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
