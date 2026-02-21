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
      gradient: 'from-accent-indigo/20 to-transparent',
      iconBg: 'bg-accent-indigo/20',
      iconColor: 'text-accent-indigo',
    },
    {
      key: 'automation',
      href: '/solutions/automation',
      gradient: 'from-accent-cyan/20 to-transparent',
      iconBg: 'bg-accent-cyan/20',
      iconColor: 'text-accent-cyan',
    },
    {
      key: 'web',
      href: '/solutions/web',
      gradient: 'from-purple-500/20 to-transparent',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      data-testid="retainer-services-section"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-indigo/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('h2')}</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-accent-indigo to-accent-cyan rounded-full" />
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
                className="group relative glass rounded-2xl p-8 hover:border-accent-indigo/40 transition-all duration-500 cursor-pointer overflow-hidden"
                data-testid={`service-card-${card.key}`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${card.iconColor}`} />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-indigo transition-colors">
                    {t(`cards.${card.key}.title`)}
                  </h3>
                  <p className="text-sm text-accent-cyan font-medium mb-4">
                    {t(`cards.${card.key}.subtitle`)}
                  </p>

                  {/* Description */}
                  <p className="text-sm opacity-70 leading-relaxed mb-6">
                    {t(`cards.${card.key}.description`)}
                  </p>

                  {/* CTA Arrow */}
                  <div className="flex items-center gap-2 text-sm font-medium text-accent-indigo opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-indigo/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
