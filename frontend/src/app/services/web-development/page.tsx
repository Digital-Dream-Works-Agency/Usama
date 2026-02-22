import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Custom Web Development | Next.js, React, E-Commerce | Florida & Rome',
  description: 'Production-grade web development for e-commerce, SaaS, and enterprise. Next.js, React, custom platforms. No WordPress templates. $15K-$50K. US, EU, Italy, Middle East.',
}

export default function WebDevelopment() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="pt-12 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-premium-400 font-medium">Web Development</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We Build Websites That <span className="gradient-text">Actually Convert</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              Not WordPress templates. Not Wix. Not Squarespace. Real custom code built for your specific business needs.
            </p>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">What We Build</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">E-Commerce Platforms</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Headless Shopify (custom frontend)</li>
                  <li>• WooCommerce to custom platform migrations</li>
                  <li>• Multi-currency, multi-language support</li>
                  <li>• Custom checkout flows</li>
                  <li>• Subscription & membership systems</li>
                </ul>
                <div className="mt-6 text-sm text-gray-500">
                  Tech: Next.js, Shopify API, Stripe, PayPal
                </div>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">SaaS & Web Apps</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Full-stack web applications</li>
                  <li>• User dashboards & admin panels</li>
                  <li>• Payment integration (Stripe, Paddle)</li>
                  <li>• Authentication & user management</li>
                  <li>• API development & integration</li>
                </ul>
                <div className="mt-6 text-sm text-gray-500">
                  Tech: Next.js, React, Node.js, PostgreSQL
                </div>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Corporate Websites</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• High-performance landing pages</li>
                  <li>• Multi-page corporate sites</li>
                  <li>• Custom CMS integration</li>
                  <li>• Lead capture & form automation</li>
                  <li>• Analytics & tracking setup</li>
                </ul>
                <div className="mt-6 text-sm text-gray-500">
                  Tech: Next.js, TypeScript, Tailwind CSS
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Custom Code */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Custom Code Instead of Templates?</h2>
            
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">⚡ Performance</h3>
                <p className="text-gray-400">Custom Next.js sites load in under 1 second. WordPress sites? 5-8 seconds. Speed = conversions.</p>
              </div>

              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">🎯 Conversion Optimization</h3>
                <p className="text-gray-400">Every element is built for conversion. No bloat, no unnecessary plugins, no distractions.</p>
              </div>

              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">🔒 Security</h3>
                <p className="text-gray-400">No WordPress vulnerabilities. No plugin conflicts. No random theme exploits.</p>
              </div>

              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">📈 Scalability</h3>
                <p className="text-gray-400">Built to handle growth. Add features without rebuilding. Scale to millions of users.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-4">Week 1</div>
                <h3 className="font-bold mb-2">Discovery & Design</h3>
                <p className="text-sm text-gray-400">Requirements gathering, wireframes, design mockups</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-4">Week 2-3</div>
                <h3 className="font-bold mb-2">Development</h3>
                <p className="text-sm text-gray-400">Frontend + backend build, integrations, testing</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-4">Week 4</div>
                <h3 className="font-bold mb-2">Review & Launch</h3>
                <p className="text-sm text-gray-400">Final revisions, deployment, training</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-4">Ongoing</div>
                <h3 className="font-bold mb-2">Support</h3>
                <p className="text-sm text-gray-400">30-day bug fixes, maintenance packages available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Pricing</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Landing Page</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$15K</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Single high-converting page</li>
                  <li>• Lead capture forms</li>
                  <li>• Analytics setup</li>
                  <li>• 4-week delivery</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl border-2 border-premium-500/50">
                <div className="text-xs text-premium-400 uppercase mb-2">Most Popular</div>
                <h3 className="text-xl font-bold mb-4">Full Website</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$25K-$35K</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• 5-10 pages</li>
                  <li>• Custom CMS</li>
                  <li>• Payment integration</li>
                  <li>• 6-8 week delivery</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">E-Commerce Platform</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$40K-$50K</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Custom checkout flow</li>
                  <li>• Multi-currency support</li>
                  <li>• Inventory management</li>
                  <li>• 8-12 week delivery</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">All projects include 30 days of post-launch support</p>
              <p className="text-sm text-gray-500">Maintenance packages: $2K-$5K/month</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build a Website That <span className="gradient-text">Actually Works</span>?
            </h2>
            
            <a href="mailto:hello@digitaldreamworksagency.com" className="inline-flex items-center space-x-2 bg-gradient-to-r from-premium-600 to-electric-600 text-white! px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-all premium-glow">
              <span>Request Project Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
