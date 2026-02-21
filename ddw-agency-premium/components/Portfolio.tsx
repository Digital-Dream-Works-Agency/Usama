'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight, TrendingUp, Zap, Layers, ShoppingCart } from 'lucide-react'

const caseStudies = [
  {
    icon: TrendingUp,
    client: 'Enterprise B2B SaaS',
    industry: 'Software / Sales Tech',
    title: 'Lead Generation System That Scaled to $2.4M Pipeline',
    challenge: 'Mid-market SaaS struggling with low-quality leads and 12% MQL-to-SQL conversion. Sales team overwhelmed with unqualified prospects.',
    solution: [
      'Built AI-powered lead scoring system with behavioral tracking',
      'Implemented multi-touch nurture sequences across 5 channels',
      'Created custom analytics dashboard for sales/marketing alignment',
      'Integrated with existing CRM (Salesforce) and marketing automation (HubSpot)',
    ],
    results: [
      { metric: '2,400', label: 'Qualified leads in 90 days' },
      { metric: '47%', label: 'MQL-to-SQL conversion (up from 12%)' },
      { metric: '$2.4M', label: 'Pipeline generated' },
      { metric: '8 weeks', label: 'From kickoff to launch' },
    ],
    tags: ['Marketing Automation', 'AI Integration', 'Custom CRM'],
    gradient: 'from-premium-600 to-electric-600',
  },
  {
    icon: ShoppingCart,
    client: 'Italian Fashion Brand',
    industry: 'E-Commerce / Retail',
    title: '340% Revenue Growth for Direct-to-Consumer Fashion',
    challenge: 'Italian luxury fashion brand had beautiful products but poor online presence. 68% cart abandonment, slow site, no personalization.',
    solution: [
      'Complete e-commerce platform rebuild (headless Shopify + custom frontend)',
      'AI-powered product recommendations and personalization engine',
      'Abandoned cart recovery system with SMS + email sequences',
      'Performance marketing infrastructure (Meta, Google, TikTok)',
    ],
    results: [
      { metric: '340%', label: 'Revenue increase in 6 months' },
      { metric: '€1.2M', label: 'Additional annual revenue' },
      { metric: '32%', label: 'Cart abandonment (down from 68%)' },
      { metric: '2.8s', label: 'Page load time (down from 8.4s)' },
    ],
    tags: ['E-Commerce', 'Personalization', 'Performance Marketing'],
    gradient: 'from-orange-500 to-premium-600',
  },
  {
    icon: Zap,
    client: 'Milan Logistics Company',
    industry: 'Logistics / Transportation',
    title: 'AI Dispatch System Saved €180K Annually',
    challenge: 'Manual dispatch process causing 92% error rate, driver miscommunication, €200K+ in annual losses from inefficient routing.',
    solution: [
      'Voice-activated AI dispatch system (custom voice AI + route optimization)',
      'Real-time fleet tracking with predictive maintenance alerts',
      'Mobile app for drivers with turn-by-turn navigation',
      'Integration with existing ERP and accounting systems',
    ],
    results: [
      { metric: '€180K', label: 'Annual cost savings' },
      { metric: '92%', label: 'Reduction in dispatch errors' },
      { metric: '34%', label: 'Increase in daily routes completed' },
      { metric: '4 weeks', label: 'From concept to production' },
    ],
    tags: ['AI Automation', 'Custom Software', 'Voice AI'],
    gradient: 'from-electric-500 to-premium-600',
  },
  {
    icon: Layers,
    client: 'Mid-Market B2B Company',
    industry: 'Professional Services',
    title: 'End-to-End Operating System in 4 Weeks Saved $400K',
    challenge: 'Growing professional services firm drowning in operational chaos. Using 12 different tools, no integration, massive inefficiency.',
    solution: [
      'AI customer support system (voice + chat) handling 80% of inquiries',
      'HR automation platform for employee onboarding, leave, performance',
      'AI proposal generator creating custom proposals in under 2 minutes',
      'Lead reactivation workflow recovering dormant opportunities',
      'Centralized management dashboard connecting all systems',
    ],
    results: [
      { metric: '$400K', label: 'Revenue recovered/saved annually' },
      { metric: '4 weeks', label: 'Full deployment timeline' },
      { metric: '65%', label: 'Reduction in operational overhead' },
      { metric: '3x', label: 'Increase in proposal output' },
    ],
    tags: ['Full-Stack', 'AI Automation', 'System Integration'],
    gradient: 'from-premium-600 via-electric-600 to-premium-600',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
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
            <span className="text-sm text-premium-400 font-medium">Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Results That <span className="gradient-text">Speak</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400"
          >
            Real projects. Real metrics. Real competitive advantages built for clients who demand excellence.
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
                        <div className="text-sm text-gray-500">{study.client}</div>
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
                      <button className={`group w-full glass hover:bg-gradient-to-r hover:${study.gradient} text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2`}>
                        <span>View Full Case Study</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
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
