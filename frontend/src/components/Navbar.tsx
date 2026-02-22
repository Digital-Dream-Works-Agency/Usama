'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sparkles, ChevronDown, TrendingUp, Code, Cpu, Zap, ShoppingCart, Heart, Truck, Shirt } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const services = [
  { name: 'Performance Marketing', href: '/services/performance-marketing', icon: TrendingUp, desc: 'Google & Meta Ads' },
  { name: 'Web Development', href: '/services/web-development', icon: Code, desc: 'Next.js & React' },
  { name: 'Custom Software', href: '/services/custom-software', icon: Cpu, desc: 'CRMs & Dashboards' },
  { name: 'AI Automation', href: '/services/ai-automation', icon: Zap, desc: 'Voice AI & Chatbots' },
]

const industries = [
  { name: 'E-Commerce', href: '/industries/ecommerce', icon: ShoppingCart },
  { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
  { name: 'Logistics', href: '/industries/logistics', icon: Truck },
  { name: 'Fashion', href: '/industries/fashion', icon: Shirt },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass border-b border-white/10' : 'bg-transparent'}`} data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3" data-testid="logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-premium-600 to-electric-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold">
              <span className="text-white">DDW</span>
              <span className="gradient-text"> Agency</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors text-sm font-medium py-2">
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-72 glass rounded-xl overflow-hidden border border-white/10"
                  >
                    {services.map((service) => {
                      const Icon = service.icon
                      return (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-white/5 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-premium-600/20 to-electric-600/20 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-premium-400" />
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm">{service.name}</div>
                            <div className="text-gray-500 text-xs">{service.desc}</div>
                          </div>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors text-sm font-medium py-2">
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 glass rounded-xl overflow-hidden border border-white/10"
                  >
                    {industries.map((industry) => {
                      const Icon = industry.icon
                      return (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-white/5 transition-colors"
                        >
                          <Icon className="w-5 h-5 text-premium-400" />
                          <span className="text-white font-medium text-sm">{industry.name}</span>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/#portfolio" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Portfolio
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Contact
            </Link>
            <ThemeToggle />
            <Link href="/#contact" className="bg-gradient-to-r from-premium-600 to-electric-600 hover:opacity-90 text-white! px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 premium-glow" data-testid="cta-btn">
              Let&apos;s Talk
            </Link>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-300 hover:text-white" data-testid="mobile-menu-toggle">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden glass border-t border-white/10" data-testid="mobile-menu">
            <div className="px-4 py-6 space-y-4">
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Services</div>
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-3 py-2"
                    >
                      <Icon className="w-5 h-5 text-premium-400" />
                      <span className="text-gray-300 hover:text-white transition-colors">{service.name}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Industries Section */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Industries</div>
                {industries.map((industry) => {
                  const Icon = industry.icon
                  return (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-3 py-2"
                    >
                      <Icon className="w-5 h-5 text-premium-400" />
                      <span className="text-gray-300 hover:text-white transition-colors">{industry.name}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Other Links */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <Link href="/#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2">
                  Portfolio
                </Link>
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2">
                  Contact
                </Link>
              </div>

              <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full bg-gradient-to-r from-premium-600 to-electric-600 text-white px-6 py-3 rounded-xl text-center font-semibold mt-4">
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
