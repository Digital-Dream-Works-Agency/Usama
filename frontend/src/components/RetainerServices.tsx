'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { TrendingUp, Bot, Zap, ArrowRight } from 'lucide-react';

const iconMap = {
  marketing: TrendingUp,
  automation: Bot,
  web: Zap,
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function RetainerServices() {
  const t = useTranslations('retainerEngine');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      key: 'marketing',
      href: '/solutions/marketing',
      gradient: 'from-accent-purple to-accent-pink',
      bgGlow: 'bg-accent-purple/20',
    },
    {
      key: 'automation',
      href: '/solutions/automation',
      gradient: 'from-accent-blue to-accent-purple',
      bgGlow: 'bg-accent-blue/20',
    },
    {
      key: 'web',
      href: '/solutions/web',
      gradient: 'from-accent-pink to-orange-500',
      bgGlow: 'bg-accent-pink/20',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      data-testid="retainer-services-section"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-sm font-semibold text-accent-purple uppercase tracking-widest mb-4 block">
            Our AI Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Grade <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Comprehensive AI automation tools designed to transform your business operations and drive exponential growth.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = iconMap[card.key as keyof typeof iconMap];
            return (
              <motion.a
                key={card.key}
                href={card.href}
                custom={index}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={cardVariants}
                className="group relative glass rounded-2xl p-8 card-hover cursor-pointer overflow-hidden"
                data-testid={`service-card-${card.key}`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                
                {/* Card content wrapper */}
                <div className="relative z-10 bg-dark-900/90 rounded-2xl p-8 -m-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent-purple transition-colors">
                    {t(`cards.${card.key}.title`)}
                  </h3>
                  <p className="text-sm text-accent-purple font-medium mb-4">
                    {t(`cards.${card.key}.subtitle`)}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {t(`cards.${card.key}.description`)}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-accent-purple group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
