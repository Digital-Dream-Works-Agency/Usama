'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, TrendingUp, ShoppingCart, Cpu, Zap, Layers } from 'lucide-react'

const slides = [
  {
    icon: TrendingUp,
    tag: 'Lead Generation Campaign',
    title: '2,400 Qualified Leads',
    subtitle: 'in 90 Days for B2B SaaS Client',
    metric: '340%',
    metricLabel: 'Increase in SQLs',
    description: 'Multi-channel demand generation system with AI-powered lead scoring, automated nurture sequences, and conversion optimization.',
    gradient: 'from-premium-600 to-electric-600',
    bgGradient: 'from-premium-950/40 via-electric-950/20 to-gray-950',
  },
  {
    icon: ShoppingCart,
    tag: 'E-Commerce Growth',
    title: '340% Revenue Increase',
    subtitle: 'in 6 Months for Italian Fashion Brand',
    metric: '€1.2M',
    metricLabel: 'Additional Revenue',
    description: 'Complete e-commerce transformation: conversion rate optimization, abandoned cart recovery, personalization engine, and performance marketing.',
    gradient: 'from-orange-500 to-premium-600',
    bgGradient: 'from-orange-950/40 via-premium-950/20 to-gray-950',
  },
  {
    icon: Cpu,
    tag: 'AI Automation (Italy)',
    title: '€180K Saved Annually',
    subtitle: 'for Milan Logistics Company',
    metric: '92%',
    metricLabel: 'Error Reduction',
    description: 'AI-powered dispatch automation with voice-activated routing, real-time fleet tracking, and predictive maintenance scheduling.',
    gradient: 'from-electric-500 to-premium-600',
    bgGradient: 'from-electric-950/40 via-premium-950/20 to-gray-950',
  },
  {
    icon: Zap,
    tag: 'Speed Delivery',
    title: 'Preview in 48 Hours',
    subtitle: 'Production Deployment in 7 Days',
    metric: '7 Days',
    metricLabel: 'To Live Site',
    description: 'Rapid development system for urgent product launches. Full-stack website with custom CMS, payment integration, and analytics — deployed before competitors even start.',
    gradient: 'from-yellow-500 to-orange-600',
    bgGradient: 'from-yellow-950/40 via-orange-950/20 to-gray-950',
  },
  {
    icon: Layers,
    tag: 'Full-Stack Transformation',
    title: '$400K Revenue Saved',
    subtitle: 'End-to-End System in 4 Weeks',
    metric: '4 Weeks',
    metricLabel: 'Full Deployment',
    description: 'Complete business operating system: AI customer support (Lyra), HR automation (HR-OS), proposal generation (Proposal OS), lead reactivation workflows, and management dashboard — all integrated, all deployed in under a month.',
    gradient: 'from-premium-600 via-electric-600 to-premium-600',
    bgGradient: 'from-premium-950/40 via-electric-950/20 to-premium-950/40',
  },
]

export default function PremiumSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [isPaused, currentSlide])

  const slide = slides[currentSlide]
  const Icon = slide.icon

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      data-testid="hero-section"
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} transition-all duration-1000`} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Animated orbs */}
      <motion.div
        key={`orb-1-${currentSlide}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className={`absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br ${slide.gradient} rounded-full blur-3xl`}
      />
      <motion.div
        key={`orb-2-${currentSlide}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className={`absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-br ${slide.gradient} rounded-full blur-3xl`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Content */}
            <div className="space-y-8">
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2"
              >
                <Icon className="w-4 h-4 text-premium-400" />
                <span className="text-sm text-gray-300 font-medium">{slide.tag}</span>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4" data-testid="hero-h1">
                  <span className={`bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                    {slide.title}
                  </span>
                </h2>
                <p className="text-2xl sm:text-3xl text-gray-400 font-light">
                  {slide.subtitle}
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-400 leading-relaxed max-w-xl"
              >
                {slide.description}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#portfolio"
                  className={`group bg-gradient-to-r ${slide.gradient} hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 premium-glow inline-flex items-center justify-center space-x-2`}
                  data-testid="hero-cta-primary"
                >
                  <span>View Case Study</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="glass hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center"
                  data-testid="hero-cta-secondary"
                >
                  Start Your Project
                </a>
              </motion.div>
            </div>

            {/* Right: Metric Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="glass rounded-3xl p-12 relative overflow-hidden group card-hover">
                {/* Shimmer effect */}
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${slide.gradient} mb-8 animate-glow`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <div className={`text-7xl sm:text-8xl font-bold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent mb-2`}>
                      {slide.metric}
                    </div>
                    <div className="text-xl text-gray-400">{slide.metricLabel}</div>
                  </div>

                  {/* Decorative elements */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="glass rounded-lg p-4">
                        <div className="w-full h-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                            className={`h-full bg-gradient-to-r ${slide.gradient}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-6">
          {/* Prev/Next Buttons */}
          <button
            onClick={prevSlide}
            className="glass hover:bg-white/10 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots */}
          <div className="flex items-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1)
                  setCurrentSlide(index)
                }}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? `bg-gradient-to-r ${slides[currentSlide].gradient} w-8` 
                    : 'bg-gray-600 hover:bg-gray-500 w-2'
                }`} />
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="glass hover:bg-white/10 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
