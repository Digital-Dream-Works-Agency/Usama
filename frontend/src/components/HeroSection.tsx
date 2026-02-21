'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const Hero3D = dynamic(() => import('./Hero3D'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/10 to-accent-cyan/5" />
  ),
});

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* 3D Background */}
      <Hero3D />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none z-10" />
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-sm font-medium opacity-80">Florida&apos;s Premier B2B Growth Agency</span>
          </motion.div>

          {/* H1 - GEO Optimized */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            data-testid="hero-h1"
          >
            <span className="block">{t('h1').split(' ').slice(0, 2).join(' ')}</span>
            <span className="gradient-text">{t('h1').split(' ').slice(2).join(' ')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto mb-12 leading-relaxed"
            data-testid="hero-subtitle"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <Link
              href="/audit"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent-indigo to-accent-cyan text-white font-semibold text-lg hover:shadow-2xl hover:shadow-accent-indigo/30 transition-all duration-300 hover:scale-105"
              data-testid="hero-cta-primary"
            >
              <span>{t('cta.primary')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-accent-indigo/30 hover:border-accent-indigo text-foreground font-semibold text-lg hover:bg-accent-indigo/10 transition-all duration-300"
              data-testid="hero-cta-secondary"
            >
              <Play className="w-5 h-5 text-accent-cyan" />
              <span>{t('cta.secondary')}</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-accent-indigo/30 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-accent-indigo"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
