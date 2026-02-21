'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20" data-testid="hero-section">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-agency-950/20 via-gray-950 to-gray-950" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-agency-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-agency-950/50 border border-agency-800/50 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-agency-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Strategic Software Consulting</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            data-testid="hero-h1"
          >
            Building Solutions When
            <span className="block gradient-text mt-2">Products Don&apos;t Fit</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            data-testid="hero-subtitle"
          >
            Custom software development, AI integration, and marketing systems for businesses that need tailored solutions. Based in Florida & Rome, serving enterprises worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="group w-full sm:w-auto bg-gradient-to-r from-agency-600 to-orange-600 hover:from-agency-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 hover:scale-105 shadow-lg shadow-agency-600/25"
              data-testid="hero-cta-primary"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto border border-gray-700 hover:border-gray-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-900/50"
              data-testid="hero-cta-secondary"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Florida & Rome Based</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>7+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Enterprise Clients</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
