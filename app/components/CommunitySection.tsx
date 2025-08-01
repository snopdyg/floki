"use client"

import { motion } from "framer-motion"

const socialLinks = [
  {
    name: "Telegram",
    icon: <img src="/images/telegram-icon.png" alt="Telegram" className="w-6 h-6" />,
    url: "https://t.me/flokiwifhat",
    description: "Join our main community chat",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    name: "Twitter",
    icon: <img src="/images/twitter-icon.png" alt="Twitter" className="w-6 h-6" />,
    url: "https://x.com/FLOWIFHAT",
    description: "Follow for memes and updates",
    color: "bg-sky-500 hover:bg-sky-600",
  },
]

export default function CommunitySection() {
  return (
    <section id="community" className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Join Our Pack</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of the strongest memecoin community on Base Network. Connect with fellow FLOKI WIF HAT holders and
            stay updated with the latest alpha!
          </p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} text-white rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                {social.icon}
                <h3 className="text-xl sm:text-2xl font-bold">{social.name}</h3>
              </div>
              <p className="text-base sm:text-lg opacity-90 mb-4">{social.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Join Now</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Community Features */}
        <motion.div
          className="bg-background rounded-3xl p-6 sm:p-8 shadow-lg border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 text-center">
            What You Get in Our Community
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Exclusive Alpha</h4>
              <p className="text-sm text-muted-foreground">
                Get early access to announcements, partnerships, and trading signals
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Meme Contests</h4>
              <p className="text-sm text-muted-foreground">
                Participate in weekly meme competitions with token rewards
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Diamond Hand Rewards</h4>
              <p className="text-sm text-muted-foreground">Special perks and airdrops for long-term holders</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
