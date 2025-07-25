"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">About FLOKI WIF HAT</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The most adorable memecoin on Base Network, bringing joy and community together through our beloved mascot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                  <img
                    src="/images/character-icon.png"
                    alt="FLOKI WIF HAT mascot"
                    className="w-80 h-80 object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                FLOKI WIF HAT was born from the love of memes and the power of community. Our adorable Shiba Inu mascot,
                sporting his signature pink beanie, represents the fun and inclusive spirit of the memecoin revolution
                on Base Network.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                We aim to create the strongest and most supportive memecoin community on Base Network. Through fair
                distribution, zero taxes, and community-driven governance, we're building something special that brings
                people together through the power of memes and shared dreams.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Base Network?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built on Coinbase's Layer 2 solution, FLOKI WIF HAT benefits from lightning-fast transactions and
                minimal fees. This allows our community to trade, interact, and participate without the burden of high
                gas costs, making our memecoin accessible to everyone.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Community Owned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">0%</div>
            <div className="text-sm text-muted-foreground">Buy/Sell Tax</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Base</div>
            <div className="text-sm text-muted-foreground">Network</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Fair</div>
            <div className="text-sm text-muted-foreground">Launch</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
