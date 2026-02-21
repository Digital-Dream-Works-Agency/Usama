'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { TrendingUp, Clock, MapPin } from 'lucide-react';

const metrics = [
  {
    key: 'pipeline',
    icon: TrendingUp,
    color: 'from-accent-indigo to-purple-500',
    ringColor: 'ring-accent-indigo/30',
  },
  {
    key: 'hours',
    icon: Clock,
    color: 'from-accent-cyan to-emerald-500',
    ringColor: 'ring-accent-cyan/30',
  },
  {
    key: 'rankings',
    icon: MapPin,
    color: 'from-orange-500 to-amber-500',
    ringColor: 'ring-orange-500/30',
  },
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
      {/* Dark Data UI Background */}
      <div className="absolute inset-0 bg-slate-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-indigo/10 via-transparent to-transparent" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('h2')}</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-accent-indigo to-accent-cyan rounded-full" />
        </motion.div>

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
                <div className="glass rounded-2xl p-8 text-center hover:border-accent-indigo/40 transition-all duration-500">
                  {/* Glowing Ring */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${metric.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-6 shadow-2xl ring-4 ${metric.ringColor}`}>
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
                    <p className="text-lg opacity-70 font-medium">
                      {t(`metrics.${metric.key}.label`)}
                    </p>

                    {/* Decorative Line */}
                    <div className={`mt-6 h-1 w-16 mx-auto rounded-full bg-gradient-to-r ${metric.color} opacity-50`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm opacity-50 uppercase tracking-widest mb-6">
            Trusted by Florida&apos;s leading enterprises
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40">
            {['Logistics', 'Healthcare', 'Legal', 'Finance', 'Real Estate'].map((industry) => (
              <span key={industry} className="text-sm font-medium">{industry}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
