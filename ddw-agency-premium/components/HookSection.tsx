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
              If Your Agency Talks About <span className="gradient-text">"Brand Awareness"</span>
              <br />
              Instead of <span className="gradient-text">Revenue Per Dollar Spent</span>, Fire Them
            </h2>

            {/* Supporting Text */}
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We manage $683K/month in ad spend across Google Ads and Meta. Our clients see 300-600% ROAS because we optimize for revenue, not vanity metrics. If you're spending $20K+/month on ads and not seeing profitable returns, we should talk.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
              {[
                { label: 'Minimum Ad Spend', value: '$20K/month clients only' },
                { label: 'Our Fee Structure', value: '$3K-$5K setup + 10-15% of spend' },
                { label: 'Availability', value: '3 spots open in March 2026' },
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
                <span>Book Free Ad Account Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-500 mt-4">First audit is free. We'll show you exactly where your money is leaking.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
