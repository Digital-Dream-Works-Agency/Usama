'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight, TrendingUp, Zap, ShoppingCart, Cpu } from 'lucide-react'

const caseStudies = [
  {
    icon: TrendingUp,
    client: 'Italian Fashion E-Commerce',
    industry: 'E-Commerce • Italy/EU',
    title: '€69.7K Ad Spend Generated 418K Purchases at 600% ROAS',
    challenge: 'Italian fashion retailer spending €20K/month on Google Shopping with inconsistent 180-250% ROAS. Needed to scale profitably to €70K/month without margin erosion.',
    solution: [
      'Restructured entire Google Shopping feed with Italian-optimized product titles',
      'Implemented tiered bidding strategy by product margin and seasonality',
      'Created separate campaigns for high-AOV vs. volume products',
      'Integrated with existing Italian e-commerce platform (custom API)',
    ],
    results: [
      { metric: '418K', label: 'Purchases (4 months)' },
      { metric: '600%', label: 'Peak ROAS' },
      { metric: '€69.7K', label: 'Monthly spend' },
      { metric: '1.1K', label: 'Daily conversions' },
    ],
    tags: ['Google Ads', 'E-Commerce', 'Italy'],
    gradient: 'from-premium-600 to-electric-600',
  },
  {
    icon: ShoppingCart,
    client: 'US Healthcare Clinic',
    industry: 'Healthcare • USA',
    title: '15,594 Patient Appointments Booked at $0.09 CPC',
    challenge: 'Medical clinic in competitive US market struggling with $3+ CPC on Google Ads. Needed cost-effective patient acquisition across 12 states.',
    solution: [
      'Built location-specific landing pages for each service line',
      'Implemented appointment booking integration with Google Ads tracking',
      'Optimized for "near me" searches with geo-targeted bid adjustments',
      'Created remarketing campaigns for incomplete bookings',
    ],
    results: [
      { metric: '15,594', label: 'Conversions' },
      { metric: '$0.09', label: 'Average CPC' },
      { metric: '4.58%', label: 'CTR' },
      { metric: '$6.3K', label: 'Total spend' },
    ],
    tags: ['Google Ads', 'Healthcare', 'USA'],
    gradient: 'from-orange-500 to-premium-600',
  },
  {
    icon: Cpu,
    client: 'European E-Commerce',
    industry: 'E-Commerce • EU',
    title: '317 Purchases via Meta Ads at €11.52 Cost Per Sale',
    challenge: 'Multi-country EU e-commerce store struggling with Meta Ads profitability. High cart abandonment, low ROAS across 5 markets.',
    solution: [
      'Built retargeting campaigns with dynamic product ads in 5 languages',
      'Created lookalike audiences based on high-LTV customer segments',
      'Implemented abandoned cart recovery via Meta Messenger',
      'Optimized creative testing framework (10+ variants per product)',
    ],
    results: [
      { metric: '317', label: 'Purchases' },
      { metric: '€11.52', label: 'Cost/purchase' },
      { metric: '6,190', label: 'Add-to-carts' },
      { metric: '3.61%', label: 'CTR' },
    ],
    tags: ['Meta Ads', 'E-Commerce', 'EU'],
    gradient: 'from-electric-500 to-premium-600',
  },
  {
    icon: Zap,
    client: 'US Therapy Practice',
    industry: 'Mental Health • USA',
    title: '517 High-Intent Phone Calls for Therapy Services',
    challenge: 'Therapy practice needed qualified calls from people actively seeking help. Standard lead gen campaigns were attracting low-intent browsers.',
    solution: [
      'Call-only Google Ads campaigns targeting crisis + immediate-need keywords',
      'Custom call tracking integration with practice management system',
      'Optimized for phone impression share in high-intent moments',
      'A/B tested ad copy focused on immediate availability',
    ],
    results: [
      { metric: '517', label: 'Phone calls' },
      { metric: '$34.70', label: 'Cost per call' },
      { metric: '3.23%', label: 'CTR' },
      { metric: '60%+', label: 'Booked rate' },
    ],
    tags: ['Google Ads', 'Call Campaigns', 'USA'],
    gradient: 'from-premium-600 via-electric-600 to-premium-600',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 overflow-hidden" data-testid="portfolio-section">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-premium-950/5 to-gray-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6"
          >
            <span className="text-sm text-premium-400 font-medium">Verified Results</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Case Studies <span className="gradient-text">You Can Verify</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400"
          >
            Platform dashboards. Real clients. Numbers you can check.
          </motion.p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass rounded-3xl overflow-hidden card-hover"
                data-testid={`case-study-${index}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left: Content */}
                  <div className="p-8 lg:p-12 space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${study.gradient} inline-block`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 font-semibold">{study.client}</div>
                        <div className="text-xs text-gray-600">{study.industry}</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {study.title}
                    </h3>

                    {/* Challenge */}
                    <div>
                      <div className="text-sm text-premium-400 font-semibold mb-2 uppercase tracking-wide">Challenge</div>
                      <p className="text-gray-400 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <div className="text-sm text-premium-400 font-semibold mb-2 uppercase tracking-wide">Solution</div>
                      <ul className="space-y-2">
                        {study.solution.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-gray-400">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${study.gradient} mt-2 flex-shrink-0`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-8 lg:p-12 border-l border-white/10">
                    <div className="text-sm text-premium-400 font-semibold mb-6 uppercase tracking-wide">Results</div>
                    <div className="grid grid-cols-2 gap-6">
                      {study.results.map((result, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="glass rounded-2xl p-6 text-center card-hover"
                        >
                          <div className={`text-4xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-2`}>
                            {result.metric}
                          </div>
                          <div className="text-sm text-gray-500">{result.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8">
                      <a
                        href="#contact"
                        className={`group w-full glass hover:bg-gradient-to-r hover:${study.gradient} text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2`}
                      >
                        <span>Request Full Breakdown</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
