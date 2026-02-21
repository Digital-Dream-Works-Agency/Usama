'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function HookSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-premium-950/10 to-gray-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3">
              <span className="w-2 h-2 bg-premium-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300 font-medium">Strategic Software Consulting</span>
            </div>

            {/* Main Statement */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              We Don't Build <span className="gradient-text">Generic Solutions</span>
              <br />
              We Architect <span className="gradient-text">Competitive Advantages</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              When off-the-shelf software can't deliver the results you need, we build custom systems that become your unfair advantage. AI-powered automation, marketing infrastructure, and full-stack platforms that competitors can't replicate.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
              {[
                { label: 'Premium Positioning', value: 'No Commodity Work' },
                { label: 'Technical Excellence', value: 'Production-Grade Code' },
                { label: 'Speed to Market', value: 'Weeks, Not Months' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass rounded-2xl p-6 card-hover"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-premium-500 flex-shrink-0 mt-1" />
                    <div className="text-left">
                      <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                      <div className="font-semibold text-white">{item.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-premium-600 to-electric-600 hover:from-premium-700 hover:to-electric-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 premium-glow"
              >
                <span>Let's Build Your Advantage</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
