'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden" data-testid="contact-section">
      <div className="absolute inset-0 bg-gradient-to-br from-agency-600/10 via-gray-950 to-orange-600/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Operations?
            </h2>
            <p className="text-lg text-gray-400">
              Let&apos;s discuss how we can help you achieve your goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center" data-testid="contact-email">
              <Mail className="text-agency-500 mx-auto mb-3" size={24} />
              <p className="text-sm text-gray-500 mb-1">Email Us</p>
              <a href="mailto:hello@digitaldreamworksagency.com" className="text-white hover:text-agency-400 transition-colors text-sm">
                hello@digitaldreamworksagency.com
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center" data-testid="contact-phone">
              <Phone className="text-agency-500 mx-auto mb-3" size={24} />
              <p className="text-sm text-gray-500 mb-1">Call Us</p>
              <a href="tel:+17867352988" className="text-white hover:text-agency-400 transition-colors">
                +1 (786) 735-2988
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center" data-testid="contact-location">
              <MapPin className="text-agency-500 mx-auto mb-3" size={24} />
              <p className="text-sm text-gray-500 mb-1">Offices</p>
              <p className="text-white text-sm">Florida, USA | Rome, Italy</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <a
              href="mailto:hello@digitaldreamworksagency.com"
              className="inline-block bg-gradient-to-r from-agency-600 to-orange-600 hover:from-agency-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-agency-600/25"
              data-testid="contact-cta"
            >
              Schedule a Strategy Call
            </a>
            <p className="text-sm text-gray-500 mt-4">
              No commitment required • Free consultation • Results guaranteed
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
