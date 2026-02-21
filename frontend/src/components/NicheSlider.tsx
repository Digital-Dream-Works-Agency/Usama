'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { Truck, HeartPulse, Briefcase, ArrowRight } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const niches = [
  {
    key: 'logistics',
    icon: Truck,
    href: '/solutions/logistics',
    image: '/assets/tampa-logistics-marketing-retainers.webp',
    imageAlt: 'Growth marketing dashboards for Florida logistics firms',
    color: 'from-orange-500 to-amber-500',
    placeholder: 'https://images.unsplash.com/photo-1680992044138-ce4864c2b962?w=800&h=500&fit=crop',
  },
  {
    key: 'healthcare',
    icon: HeartPulse,
    href: '/solutions/healthcare',
    image: '/assets/florida-b2b-ai-automation-systems.webp',
    imageAlt: 'AI automation systems for Florida B2B companies',
    color: 'from-emerald-500 to-teal-500',
    placeholder: 'https://images.unsplash.com/photo-1680992046615-065f58bcb4d8?w=800&h=500&fit=crop',
  },
  {
    key: 'professional',
    icon: Briefcase,
    href: '/solutions/professional-services',
    image: '/assets/miami-enterprise-web-projects.webp',
    imageAlt: 'High-speed enterprise web development architecture',
    color: 'from-blue-500 to-indigo-500',
    placeholder: 'https://images.unsplash.com/photo-1704188646899-4198ab26341c?w=800&h=500&fit=crop',
  },
];

export default function NicheSlider() {
  const t = useTranslations('niches');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      data-testid="niche-slider-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent" />
      
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

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay, FreeMode]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 2.5,
                centeredSlides: true,
              },
            }}
            className="pb-14 hide-scrollbar"
            data-testid="niche-swiper"
          >
            {niches.map((niche) => {
              const Icon = niche.icon;
              return (
                <SwiperSlide key={niche.key}>
                  <a
                    href={niche.href}
                    className="group block relative overflow-hidden rounded-2xl glass h-[400px] cursor-pointer"
                    data-testid={`niche-slide-${niche.key}`}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={niche.placeholder}
                        alt={niche.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                        className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-8">
                      {/* Icon Badge */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${niche.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">
                        {t(`slides.${niche.key}.title`)}
                      </h3>

                      {/* Description */}
                      <p className="text-sm opacity-80 leading-relaxed mb-4">
                        {t(`slides.${niche.key}.description`)}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-accent-cyan font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Decorative Gradient Border */}
                    <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${niche.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} style={{ WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'destination-out' }} />
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
