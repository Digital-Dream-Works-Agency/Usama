'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface IndustryLayoutProps {
  icon: ReactNode
  badge: string
  title: string
  titleHighlight: string
  description: string
  challenges: string[]
  solutions: { title: string; description: string }[]
  services: string[]
  caseStudy: {
    title: string
    metric: string
    metricLabel: string
    description: string
  }
  gradient: string
}

export default function IndustryLayout({
  icon,
  badge,
  title,
  titleHighlight,
  description,
  challenges,
  solutions,
  services,
  caseStudy,
  gradient,
}: IndustryLayoutProps) {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br from-gray-950 via-premium-950/20 to-gray-950`} />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className={`absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br ${gradient} rounded-full blur-3xl`}
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className={`absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-br ${gradient} rounded-full blur-3xl`}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6"
            >
              {icon}
              <span className="text-sm text-gray-300 font-medium">{badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              {title} <span className="gradient-text">{titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className={`group bg-gradient-to-r ${gradient} hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 premium-glow inline-flex items-center justify-center space-x-2`}
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#portfolio"
                className="glass hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-premium-950/5 to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-bold mb-6"
              >
                Industry <span className="gradient-text">Challenges</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg mb-8"
              >
                We understand the unique challenges you face. Here&apos;s what we hear most often:
              </motion.p>
            </div>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                      <span className="text-sm font-bold text-white">{index + 1}</span>
                    </div>
                    <p className="text-gray-300">{challenge}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-premium-950/10 to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              Our <span className="gradient-text">Solutions</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 card-hover"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-premium-950/5 to-gray-950" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center card-hover"
          >
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-premium-400 font-medium">Featured Result</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">{caseStudy.title}</h3>
            <div className={`text-7xl sm:text-8xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
              {caseStudy.metric}
            </div>
            <div className="text-xl text-gray-400 mb-6">{caseStudy.metricLabel}</div>
            <p className="text-gray-400 max-w-2xl mx-auto">{caseStudy.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Services For Industry */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-premium-950/10 to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              Recommended <span className="gradient-text">Services</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 card-hover flex items-center gap-4"
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient}`} />
                <span className="text-white font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative">
        <div className={`absolute inset-0 bg-gradient-to-br from-premium-600/10 via-gray-950 to-electric-600/10`} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Let&apos;s Discuss Your <span className="gradient-text">Project</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Book a free consultation to explore how we can help your business grow.
            </p>
            <Link
              href="mailto:hello@digitaldreamworksagency.com"
              className={`inline-flex items-center space-x-2 bg-gradient-to-r ${gradient} hover:opacity-90 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 premium-glow`}
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
