'use client'
import { motion } from 'framer-motion'
import { Code2, Cpu, Workflow, Search, Cloud, Lightbulb } from 'lucide-react'

const services = [
  { icon: Code2, title: 'Custom Software Development', desc: 'Full-stack systems built for your exact operations. No templates, no limitations.', gradient: 'from-premium-600 to-electric-600' },
  { icon: Cpu, title: 'AI Development & Integration', desc: 'Production AI systems that actually work. GPT, Claude, voice AI, computer vision integrated into your workflows.', gradient: 'from-electric-500 to-premium-600' },
  { icon: Workflow, title: 'Marketing Systems & Automation', desc: 'Infrastructure that powers revenue: CRM, lead routing, email sequences, analytics dashboards.', gradient: 'from-orange-500 to-premium-600' },
  { icon: Search, title: 'SEO & Content Strategy', desc: 'Rank for keywords that matter. Technical SEO, content, link building that drives qualified traffic.', gradient: 'from-premium-600 to-pink-600' },
  { icon: Cloud, title: 'Cloud Infrastructure & DevOps', desc: 'Production-grade infrastructure on AWS/Azure/GCP. CI/CD, monitoring, scaling handled.', gradient: 'from-electric-600 to-premium-600' },
  { icon: Lightbulb, title: 'Strategic Consulting', desc: 'Fractional CTO, architecture reviews, build-vs-buy analysis. Strategic decisions for technical leaders.', gradient: 'from-premium-600 via-electric-600 to-premium-600' },
]

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-premium-950/10 to-gray-950" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-premium-400 font-medium">Services</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl sm:text-5xl font-bold mb-4">
            Premium Services for <span className="gradient-text">Technical Excellence</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8 card-hover group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
