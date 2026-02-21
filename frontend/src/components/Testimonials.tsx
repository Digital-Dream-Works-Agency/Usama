'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "We needed a custom dispatch system for our field operations. Every off-the-shelf solution had limitations. DDW Agency built exactly what we needed — integrated with our CRM, mobile-friendly for drivers, and deployed in 6 weeks. It's now the backbone of our operations.",
    author: "James Davidson",
    role: "VP of Operations",
    company: "TechCorp Inc."
  },
  {
    quote: "We were using 6 different tools with no integration. DDW Agency built a unified marketing system — CRM, email automation, analytics dashboard, lead routing — all connected. Our marketing team is now 3x more efficient.",
    author: "Sarah Mitchell",
    role: "Chief Marketing Officer",
    company: "Meridian Health Group"
  },
  {
    quote: "When we were evaluating between building in-house vs buying vs outsourcing, DDW Agency provided the clarity we needed. Their technical advisory saved us from a $200K mistake, and they executed the right solution in half the time we expected.",
    author: "Michael Chen",
    role: "CEO",
    company: "Apex Logistics"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden" data-testid="testimonials-section">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-agency-950/20 to-gray-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-agency-950/50 border border-agency-800/50 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-sm text-agency-400 font-medium">Client Success</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            What Leaders <span className="gradient-text">Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800/50 rounded-2xl p-6"
              data-testid={`testimonial-${index}`}
            >
              <Quote className="text-agency-600 mb-4" size={32} />
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
