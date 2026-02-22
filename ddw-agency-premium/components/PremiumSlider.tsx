'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, TrendingUp, ShoppingCart, Cpu, Zap, Layers } from 'lucide-react'

const slides = [
  {
    icon: TrendingUp,
    tag: 'E-Commerce • Google Ads • Italy/EU',
    title: '€69.7K → 418K Purchases',
    subtitle: '600% ROAS for Italian Fashion Brand',
    metric: '600%',
    metricLabel: 'ROAS',
    description: 'Full-funnel Google Shopping + Search campaigns. Scaled from €20K/month to €70K while maintaining profitability. Real revenue. Real scale. Real client in Milan.',
    gradient: 'from-premium-600 to-electric-600',
    bgGradient: 'from-premium-950/40 via-electric-950/20 to-gray-950',
  },
  {
    icon: ShoppingCart,
    tag: 'Healthcare • Google Ads • USA',
    title: '15,594 Conversions',
    subtitle: '$6.3K Spend at $0.09 CPC',
    metric: '$0.09',
    metricLabel: 'Cost Per Click',
    description: '71,784 clicks. 4.58% CTR. Medical clinic appointment booking system integrated with Google Ads for instant ROI tracking. Serving patients across 12 US states.',
    gradient: 'from-orange-500 to-premium-600',
    bgGradient: 'from-orange-950/40 via-premium-950/20 to-gray-950',
  },
  {
    icon: Cpu,
    tag: 'Mental Health • Call Campaigns • USA',
    title: '517 Phone Calls',
    subtitle: '$17.9K Spend for Therapy Practice',
    metric: '$34.70',
    metricLabel: 'Cost Per Call',
    description: 'Call-only campaigns targeting high-intent keywords for therapy services. 162K phone impressions, 3.23% CTR. Client books 60%+ of callers for paid sessions.',
    gradient: 'from-electric-500 to-premium-600',
    bgGradient: 'from-electric-950/40 via-premium-950/20 to-gray-950',
  },
  {
    icon: Zap,
    tag: 'Luxury Services • Google Ads • USA',
    title: '4,644 Phone Calls',
    subtitle: '$32.5K for Wine Tour Limo Service',
    metric: '$7.01',
    metricLabel: 'Cost Per Call',
    description: '465K impressions, 4.31% CTR. Premium wine tour transportation in California. High-intent keywords driving qualified calls for $500+ bookings.',
    gradient: 'from-yellow-500 to-orange-600',
    bgGradient: 'from-yellow-950/40 via-orange-950/20 to-gray-950',
  },
  {
    icon: Layers,
    tag: 'E-Commerce • Meta Ads • Europe',
    title: '317 Purchases + 6,190 Add-to-Carts',
    subtitle: '€3.6K Spend at €11.52 per Purchase',
    metric: '€11.52',
    metricLabel: 'Cost Per Purchase',
    description: 'Retargeting + prospecting for diverse product catalog. 17,084 clicks, 3.61% CTR, €0.21 CPC. Multi-country EU campaigns with localized ad creative.',
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
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} transition-all duration-1000`} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
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
                <Icon className={`w-4 h-4 bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`} />
                <span className="text-sm text-gray-300 font-medium">{slide.tag}</span>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
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
                >
                  <span>View Case Study</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="glass hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center"
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
                <div className="absolute inset-0 bg-shimmer-gradient animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                
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
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? `bg-gradient-to-r ${slides[currentSlide].gradient} w-8` 
                    : 'bg-gray-600 hover:bg-gray-500'
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
