'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const Hero3D = dynamic(() => import('./Hero3D'), { 
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden hero-bg"
      data-testid="hero-section"
    >
      {/* Animated gradient orbs */}
      <div className="gradient-orb w-[600px] h-[600px] bg-accent-purple/30 top-[-200px] right-[-100px]" />
      <div className="gradient-orb w-[400px] h-[400px] bg-accent-pink/20 bottom-[-100px] left-[-100px]" style={{ animationDelay: '-5s' }} />
      <div className="gradient-orb w-[300px] h-[300px] bg-accent-blue/20 top-[40%] left-[20%]" style={{ animationDelay: '-10s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* 3D Background - Right side */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
            <span className="text-sm font-medium text-muted">Florida&apos;s Premier B2B Growth Agency</span>
          </motion.div>

          {/* H1 - GEO Optimized */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8"
            data-testid="hero-h1"
          >
            <span className="block text-foreground">AI Automation Platform</span>
            <span className="gradient-text">for Modern Enterprises</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed"
            data-testid="hero-subtitle"
          >
            Transform your operations with AI-driven marketing systems, high-speed web architecture, and operational retainers that scale your revenue.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            {/* Primary CTA */}
            <Link
              href="/audit"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full gradient-btn text-white font-semibold text-lg"
              data-testid="hero-cta-primary"
            >
              <span>Schedule Enterprise Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full ghost-btn text-foreground font-semibold text-lg"
              data-testid="hero-cta-secondary"
            >
              <span>Explore Products</span>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex items-center gap-8"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple/50 to-accent-pink/50 border-2 border-background flex items-center justify-center"
                >
                  <span className="text-xs font-bold">{i}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold">500+ Enterprise Clients</p>
              <p className="text-xs text-muted">Trusted by Fortune 500</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
