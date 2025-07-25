"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function NewsletterSubscribe() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log({ email })
      setIsSubmitting(false)
      setEmail("")
      alert("Welcome to the FLOKI WIF HAT family!")
    }, 2000)
  }

  return (
    <section className="bg-background py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 text-center">
            Subscribe to get the latest updates on FLOKI WIF HAT, exclusive airdrops, and memecoin alpha!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email for alpha"
                className="rounded-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
              {isSubmitting ? "Joining..." : "Join the Pack"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
