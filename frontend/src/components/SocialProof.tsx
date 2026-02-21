'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { TrendingUp, Clock, MapPin, Users, Shield, Zap } from 'lucide-react';

const metrics = [
  {
    key: 'pipeline',
    icon: TrendingUp,
    gradient: 'from-accent-purple to-accent-pink',
  },
  {
    key: 'hours',
    icon: Clock,
    gradient: 'from-accent-blue to-accent-purple',
  },
  {
    key: 'rankings',
    icon: MapPin,
    gradient: 'from-accent-pink to-orange-500',
  },
];

const additionalStats = [
  { value: '99.9%', label: 'Uptime SLA', icon: Shield },
  { value: '50ms', label: 'Avg Response', icon: Zap },
  { value: '10k+', label: 'API Calls/sec', icon: Users },
];

export default function SocialProof() {
  const t = useTranslations('socialProof');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      data-testid="social-proof-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900/50" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Gradient orbs */}
      <div className="gradient-orb w-[400px] h-[400px] bg-accent-purple/20 top-0 left-1/4" style={{ animationDelay: '-3s' }} />
      <div className="gradient-orb w-[300px] h-[300px] bg-accent-pink/15 bottom-0 right-1/4" style={{ animationDelay: '-8s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent-purple uppercase tracking-widest mb-4 block">
            Numbers That Speak
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Results That <span className="gradient-text">Compound</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Our enterprise clients see measurable ROI within 90 days of implementation
          </p>
        </motion.div>

        {/* Main Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.key}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
                data-testid={`metric-${metric.key}`}
              >
                <div className="stat-card p-8 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Value */}
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.3 + index * 0.15,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    className="text-5xl lg:text-6xl font-bold gradient-text mb-3"
                  >
                    {t(`metrics.${metric.key}.value`)}
                  </motion.div>

                  {/* Label */}
                  <p className="text-lg text-muted font-medium">
                    {t(`metrics.${metric.key}.label`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 lg:gap-16 pt-8 border-t border-white/5"
        >
          {additionalStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
