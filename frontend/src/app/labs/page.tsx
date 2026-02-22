import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'DDW Labs | AI Voice Assistant, Fleet Management, HR Software, Proposal Generator',
  description: 'Production-ready SaaS products from DDW: LYRA (AI voice), Fleet-OS (trucking), HR-OS (HR management), ProposalOS (AI proposals).',
}

const products = [
  {
    name: 'LYRA',
    tagline: 'AI Voice Assistant',
    icon: '🎙️',
    description: 'AI-powered voice assistant that handles customer support calls, schedules appointments, qualifies leads. Sounds human. Works 24/7. Costs $0.10/minute.',
    features: ['Handles 80% of support calls automatically', 'Transfers to human when needed', 'Integrates with existing phone systems'],
    bestFor: 'Customer support, appointment scheduling, lead qualification',
  },
  {
    name: 'Fleet-OS',
    tagline: 'Truck Dispatch System',
    icon: '🚛',
    description: 'Complete fleet management and dispatch system for trucking companies. Built for the Italian and US markets with ZTL zone awareness and Autostrade integration.',
    features: ['Real-time GPS tracking & route optimization', 'AI-powered dispatch automation', 'Italian ZTL zones & Autostrade tolls'],
    bestFor: 'Trucking companies, freight forwarders, logistics providers',
  },
  {
    name: 'HR-OS',
    tagline: 'HR Management Platform',
    icon: '👥',
    description: 'Complete HR management system. Employee onboarding, time tracking, leave management, performance reviews. Everything HR needs in one place.',
    features: ['Employee onboarding automation', 'Time tracking & leave management', 'Performance review workflows'],
    bestFor: 'Growing companies (10-200 employees)',
  },
  {
    name: 'ProposalOS',
    tagline: 'AI Proposal Generator',
    icon: '📄',
    description: 'Generate professional proposals in under 2 minutes. AI-powered content, custom branding, e-signature integration. 3x your proposal output.',
    features: ['AI-generated proposal content', 'Custom templates & branding', 'E-signature integration'],
    bestFor: 'Agencies, consultants, professional services',
  },
]

export default function Labs() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="pt-12 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-premium-400 font-medium">DDW Labs</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Production SaaS</span> Products
            </h1>
            
            <p className="text-xl text-gray-400">
              We don&apos;t just build software for clients. We build our own SaaS products that solve real business problems.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {products.map((product) => (
                <div key={product.name} className="glass p-10 rounded-3xl card-hover">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                      <p className="text-premium-400 font-semibold">{product.tagline}</p>
                    </div>
                    <div className="text-4xl">{product.icon}</div>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{product.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-premium-600 to-electric-600 mt-2" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-sm text-gray-500 mb-2">Best For</div>
                    <div className="font-semibold">{product.bestFor}</div>
                  </div>
                  
                  <a href="https://ddwstudio.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center space-x-2 glass hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Want to Build Your Own <span className="gradient-text">SaaS Product</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We build production-ready SaaS products for other companies too. From idea to deployment in 8-12 weeks.
            </p>
            <a href="mailto:hello@digitaldreamworksagency.com" className="inline-flex items-center space-x-2 bg-gradient-to-r from-premium-600 to-electric-600 text-white! px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 premium-glow">
              <span>Request SaaS Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
