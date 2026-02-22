'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-premium-600/10 via-gray-950 to-electric-600/10" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">3 Spots Available in March 2026</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            If You're Spending $20K+/Month on Ads <span className="gradient-text">and Not Seeing 300%+ ROAS</span>, We Should Talk
          </h2>
          <p className="text-xl text-gray-400">First call is a free audit. We'll show you exactly where your money is leaking.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-2xl p-6 text-center card-hover">
            <Mail className="text-premium-500 mx-auto mb-3" size={28} />
            <p className="text-sm text-gray-500 mb-1">Email</p>
            <a href="mailto:hello@digitaldreamworksagency.com" className="text-white hover:text-premium-400 transition-colors font-medium text-sm">hello@digitaldreamworksagency.com</a>
          </div>
          <div className="glass rounded-2xl p-6 text-center card-hover">
            <Phone className="text-premium-500 mx-auto mb-3" size={28} />
            <p className="text-sm text-gray-500 mb-1">Phone</p>
            <a href="tel:+17867352988" className="text-white hover:text-premium-400 transition-colors font-medium">+1 (786) 735-2988</a>
          </div>
          <div className="glass rounded-2xl p-6 text-center card-hover">
            <MapPin className="text-premium-500 mx-auto mb-3" size={28} />
            <p className="text-sm text-gray-500 mb-1">Offices</p>
            <p className="text-white font-medium">Florida • Rome</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <a href="mailto:hello@digitaldreamworksagency.com" className="inline-flex items-center space-x-2 bg-gradient-to-r from-premium-600 to-electric-600 hover:opacity-90 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 premium-glow">
            <span>Book Free Ad Account Audit</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-gray-500 mt-4">$20K/month minimum ad spend • Setup from $3K • Book by Feb 28 for March start</p>
        </motion.div>
      </div>
    </section>
  )
}
