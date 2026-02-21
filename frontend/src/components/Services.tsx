'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, Workflow, Search, Cloud, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'When off-the-shelf solutions don\'t fit, we architect and build custom software tailored to your operations. From internal tools to client-facing platforms, we deliver production-ready systems that scale.',
    features: ['Full-stack development', 'API integrations', 'Database design', 'Legacy modernization']
  },
  {
    icon: Cpu,
    title: 'AI Development & Integration',
    description: 'Implement AI into your existing systems or build new AI-powered workflows. We integrate GPT, Claude, voice AI, computer vision, and custom ML models into production environments.',
    features: ['LLM integration', 'Voice AI systems', 'Custom ML models', 'AI workflow automation']
  },
  {
    icon: Workflow,
    title: 'Marketing Systems & Automation',
    description: 'We build the infrastructure that powers your marketing: CRM integrations, lead routing, email sequences, analytics dashboards, and automation workflows that convert at scale.',
    features: ['CRM automation', 'Lead routing', 'Email sequences', 'Analytics dashboards']
  },
  {
    icon: Search,
    title: 'SEO & Content Strategy',
    description: 'Rank for what matters. We conduct keyword research, build content strategies, optimize on-page SEO, and execute link-building campaigns that drive qualified traffic.',
    features: ['Keyword research', 'Technical SEO', 'Content optimization', 'Link building']
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure & DevOps',
    description: 'Design, deploy, and manage production infrastructure on AWS, Azure, or GCP. We handle CI/CD pipelines, monitoring, security, and scaling so your team can focus on building product.',
    features: ['AWS/Azure/GCP setup', 'CI/CD pipelines', 'Infrastructure monitoring', 'Security hardening']
  },
  {
    icon: Lightbulb,
    title: 'Strategic Consulting',
    description: 'Technical advisory for companies navigating complex software decisions: architecture reviews, vendor evaluation, build-vs-buy analysis, go-to-market strategy, and fractional CTO services.',
    features: ['Architecture reviews', 'Vendor evaluation', 'Technical strategy', 'Fractional CTO']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 relative overflow-hidden" data-testid="services-section">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-agency-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-agency-950/50 border border-agency-800/50 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-sm text-agency-400 font-medium">Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Strategic Services for
            <span className="block gradient-text">Modern Enterprises</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            High-margin consulting and development services. No commodities, just strategic work.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800/50 rounded-2xl p-6 hover:border-agency-600/50 transition-all duration-300 hover:scale-[1.02]"
                data-testid={`service-card-${index}`}
              >
                {/* Gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-agency-600/0 to-orange-600/0 group-hover:from-agency-600/5 group-hover:to-orange-600/5 rounded-2xl transition-all duration-300" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-agency-600/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-agency-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-agency-500 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-agency-400 hover:text-agency-300 transition-colors font-medium"
          >
            <span>Discuss your project</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
