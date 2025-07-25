"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegramHandle: "",
    walletAddress: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(formData)
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        telegramHandle: "",
        walletAddress: "",
        message: "",
      })
      alert("Thank you for reaching out! Our team will contact you soon!")
    }, 2000)
  }

  return (
    <section className="bg-background py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground">
            Want to partner with us or have questions? Fill out the form below and let's build the future of memecoins
            together!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Crypto Degen"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="degen@crypto.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="telegramHandle" className="block text-sm font-medium text-foreground mb-2">
                Telegram Handle
              </label>
              <Input
                id="telegramHandle"
                name="telegramHandle"
                type="text"
                placeholder="@cryptodegen"
                value={formData.telegramHandle}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="walletAddress" className="block text-sm font-medium text-foreground mb-2">
                Wallet Address (Base Network)
              </label>
              <Input
                id="walletAddress"
                name="walletAddress"
                type="text"
                placeholder="0x..."
                value={formData.walletAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your ideas or partnership proposals..."
                className="min-h-[120px]"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
