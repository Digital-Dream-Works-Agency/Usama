'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Code, Cpu, Zap } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Google Ads + Meta Ads management for companies spending $20K+/month. We optimize for revenue, not impressions. 300-600% ROAS or we refund the setup fee.',
    features: ['Google Ads (Shopping, Search, Display)', 'Meta Ads (Facebook, Instagram)', 'Campaign structure + optimization', 'Monthly performance reports'],
    pricing: '$3K-$5K setup + 10-15% of ad spend',
    gradient: 'from-premium-600 to-electric-600',
  },
  {
    icon: Code,
    title: 'Custom Web Development',
    description: 'Production-grade websites and web apps built with Next.js, React, or whatever tech stack fits your needs. Not WordPress templates—real custom code.',
    features: ['Full-stack web development', 'E-commerce platforms', 'Custom CMS integration', 'Performance optimization'],
    pricing: '$15K-$50K (fixed scope)',
    gradient: 'from-orange-500 to-premium-600',
  },
  {
    icon: Cpu,
    title: 'Custom Software Development',
    description: 'Build the software your business actually needs. CRMs, internal tools, dashboards, automation systems. If it runs your operations, we build it.',
    features: ['Custom CRM systems', 'Business automation tools', 'API integrations', 'Database architecture'],
    pricing: '$25K-$100K+ (depends on scope)',
    gradient: 'from-electric-500 to-premium-600',
  },
  {
    icon: Zap,
    title: 'AI Automation',
    description: 'Production AI systems that actually work. Voice AI for customer support, chatbots that qualify leads, automated workflows that don't break. No demos—deployed systems only.',
    features: ['AI voice assistants (phone support)', 'Lead qualification chatbots', 'Document processing automation', 'Custom AI integrations'],
    pricing: '$10K-$40K implementation',
    gradient: 'from-premium-600 via-electric-600 to-premium-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-premium-950/10 to-gray-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6"
          >
            <span className="text-sm text-premium-400 font-medium">What We Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Four Services. <span className="gradient-text">All Revenue-Focused</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400"
          >
            We don't offer 20 services. We offer 4 things we're exceptional at.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass rounded-3xl p-8 lg:p-10 card-hover group"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Starting at</div>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.pricing}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            All services include direct access to our team. No account managers, no junior staff.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-premium-600 to-electric-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105 premium-glow"
          >
            <span>Book Strategy Call</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
