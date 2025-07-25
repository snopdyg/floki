"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Ape Store Listing",
    description: "Successfully listed on the premier memecoin marketplace",
    category: "Exchange",
  },
  {
    id: 2,
    title: "Base Network Integration",
    description: "Lightning-fast transactions on Coinbase's L2 solution",
    category: "Technology",
  },
  {
    id: 3,
    title: "Community Growth",
    description: "Building the strongest memecoin community on Base",
    category: "Community",
  },
  {
    id: 4,
    title: "Meme Marketing",
    description: "Viral marketing campaigns featuring our adorable mascot",
    category: "Marketing",
  },
  {
    id: 5,
    title: "Tokenomics Design",
    description: "Fair launch with community-first token distribution",
    category: "Tokenomics",
  },
  {
    id: 6,
    title: "NFT Collection",
    description: "Exclusive FLOKI WIF HAT NFTs for early supporters",
    category: "NFTs",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Achievements</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Milestones in our journey to become the top memecoin on Base Network.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg p-6 hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
