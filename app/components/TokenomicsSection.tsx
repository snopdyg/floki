"use client"

import { motion } from "framer-motion"

const tokenFeatures = [
  {
    title: "Total Supply",
    value: "1,000,000,000",
    subtitle: "FLOKI WIF HAT",
  },
  {
    title: "Network",
    value: "Base",
    subtitle: "Layer 2 Solution",
  },
  {
    title: "Tax",
    value: "0%",
    subtitle: "Buy & Sell",
  },
  {
    title: "Contract",
    value: "Renounced",
    subtitle: "Community Owned",
  },
]

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-16 sm:py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Tokenomics</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Fair and transparent token distribution designed for long-term community growth and sustainability.
          </p>
        </motion.div>

        {/* Token Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {tokenFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-background rounded-2xl p-4 sm:p-6 shadow-lg border border-primary/10 text-center hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">{feature.value}</h3>
              <h4 className="text-base sm:text-lg font-semibold text-primary mb-1">{feature.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{feature.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Centered Mascot */}
        <motion.div
          className="flex justify-center mb-12 sm:mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center">
            <img
              src="/images/character-icon.png"
              alt="FLOKI WIF HAT"
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto mb-4 object-contain"
            />
            <h4 className="text-lg sm:text-xl font-bold text-foreground">FLOKI</h4>
            <p className="text-sm text-muted-foreground">WIF HAT</p>
          </div>
        </motion.div>

        {/* Contract Info */}
        <motion.div
          className="bg-background rounded-3xl p-6 sm:p-8 shadow-lg border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 text-center">
            Contract Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Contract Address</h4>
              <p className="text-xs sm:text-sm text-muted-foreground bg-secondary/20 p-3 rounded-lg font-mono break-all">
                0x1234...5678 (Base Network)
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Ape Store Listing</h4>
              <a
                href="#"
                className="inline-flex items-center text-primary hover:underline font-semibold text-sm sm:text-base"
              >
                Trade on Ape Store
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
