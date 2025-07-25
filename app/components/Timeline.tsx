"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: 2025,
    title: "FLOKI WIF HAT Launch",
    description: "Our memecoin journey began with a fair launch on Base Network.",
    details:
      "Launched with 100% community ownership, no team allocation, and immediate liquidity provision on Base Network DEXs.",
  },
  {
    year: 2025,
    title: "Ape Store Listing",
    description: "Successfully listed on Ape Store, the premier memecoin marketplace.",
    details:
      "Our listing on Ape Store brought massive exposure and trading volume, establishing FLOKI WIF HAT as a serious contender in the memecoin space.",
  },
  {
    year: 2025,
    title: "Community Explosion",
    description: "Reached 10,000+ holders and viral social media presence.",
    details:
      "Our adorable mascot went viral across Twitter, Telegram, and Discord, building one of the strongest memecoin communities on Base Network.",
  },
  {
    year: 2025,
    title: "NFT Collection Drop",
    description: "Launched exclusive FLOKI WIF HAT NFT collection for holders.",
    details:
      "Released 1,000 unique NFTs featuring different hat styles and expressions, exclusively for our token holders and community members.",
  },
  {
    year: 2025,
    title: "Major Exchange Listings",
    description: "Listed on top-tier centralized exchanges for wider accessibility.",
    details:
      "Secured listings on major CEXs, making FLOKI WIF HAT accessible to millions of traders worldwide and increasing our market presence.",
  },
  {
    year: 2025,
    title: "Ecosystem Expansion",
    description: "Launching FLOKI WIF HAT DeFi ecosystem and gaming integration.",
    details:
      "Developing our own DEX, staking platform, and play-to-earn games featuring our beloved mascot, creating utility beyond just being a memecoin.",
  },
]

const FlokiIcon = ({ progress }: { progress: number }) => (
  <div
    className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary bg-white"
    style={{ transform: `scale(${progress})` }}
  >
    <img src="/images/character-icon.png" alt="FLOKI WIF HAT" className="w-full h-full object-cover" />
  </div>
)

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="roadmap" ref={containerRef} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Roadmap</h2>
          <p className="mt-4 text-lg text-muted-foreground">The journey of FLOKI WIF HAT to the moon</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"
            style={{ scaleY: scaleX }}
          />

          {/* Floki icon */}
          <motion.div
            className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-primary"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          >
            <FlokiIcon progress={useTransform(scrollYProgress, [0, 1], [0.5, 1]) as any} />
          </motion.div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
          <span className="font-bold text-primary">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
          <p className="text-muted-foreground">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-muted-foreground">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
