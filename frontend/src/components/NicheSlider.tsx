'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Truck, HeartPulse, Briefcase, ArrowRight } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const niches = [
  {
    key: 'logistics',
    icon: Truck,
    href: '/solutions/logistics',
    image: '/assets/tampa-logistics-marketing-retainers.webp',
    imageAlt: 'Growth marketing dashboards for Florida logistics firms',
    gradient: 'from-orange-500 to-amber-500',
    placeholder: 'https://images.unsplash.com/photo-1680992044138-ce4864c2b962?w=800&h=500&fit=crop',
  },
  {
    key: 'healthcare',
    icon: HeartPulse,
    href: '/solutions/healthcare',
    image: '/assets/florida-b2b-ai-automation-systems.webp',
    imageAlt: 'AI automation systems for Florida B2B companies',
    gradient: 'from-emerald-500 to-teal-500',
    placeholder: 'https://images.unsplash.com/photo-1680992046615-065f58bcb4d8?w=800&h=500&fit=crop',
  },
  {
    key: 'professional',
    icon: Briefcase,
    href: '/solutions/professional-services',
    image: '/assets/miami-enterprise-web-projects.webp',
    imageAlt: 'High-speed enterprise web development architecture',
    gradient: 'from-accent-purple to-accent-pink',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent-purple uppercase tracking-widest mb-4 block">
            Industry Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Dominating <span className="gradient-text">Complex Markets</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Specialized AI solutions tailored for the unique challenges of your industry
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
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
                    className="group block relative overflow-hidden rounded-2xl h-[420px] cursor-pointer"
                    data-testid={`niche-slide-${niche.key}`}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={niche.placeholder}
                        alt={niche.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                        className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/90 to-dark-950/40" />
                    </div>

                    {/* Gradient border on hover */}
                    <div className={`absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent-purple/50 transition-colors duration-500`} />

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-8">
                      {/* Icon Badge */}
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${niche.gradient} flex items-center justify-center mb-5 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-purple transition-colors">
                        {t(`slides.${niche.key}.title`)}
                      </h3>

                      {/* Description */}
                      <p className="text-muted leading-relaxed mb-5">
                        {t(`slides.${niche.key}.description`)}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 font-semibold text-accent-purple opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <span>Explore Solution</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
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
