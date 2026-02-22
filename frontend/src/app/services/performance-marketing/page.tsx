import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Performance Marketing Agency | Google Ads & Meta Ads Management | 300-600% ROAS',
  description: 'Performance marketing for companies spending $20K+/month. Google Ads and Meta Ads management with 300-600% ROAS. Florida & Rome offices serving US, EU, Italy, Middle East.',
}

export default function PerformanceMarketing() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="pt-12 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-premium-400 font-medium">Performance Marketing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We Manage Ad Spend Like It&apos;s <span className="gradient-text">Our Own Money</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              Because when you&apos;re spending $50K/month on ads, every dollar wasted is profit lost. We optimize for revenue, not impressions.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold gradient-text">$1.08M</div>
                <div className="text-sm text-gray-500">Ad Spend Managed (90 Days)</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">600%</div>
                <div className="text-sm text-gray-500">Peak ROAS Achieved</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">$0.09</div>
                <div className="text-sm text-gray-500">Lowest CPC (Healthcare)</div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">What We Actually Do</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Google Ads Management</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Google Shopping campaigns (e-commerce brands)</li>
                  <li>• Search campaigns (high-intent keywords)</li>
                  <li>• Display remarketing (cart abandoners, site visitors)</li>
                  <li>• Performance Max campaigns (when they actually work)</li>
                  <li>• Call-only campaigns (service businesses)</li>
                  <li>• YouTube ads (video content that converts)</li>
                </ul>
                
                <div className="mt-6 p-6 glass rounded-xl">
                  <div className="text-sm text-gray-500 mb-2">Real Result</div>
                  <div className="text-lg font-semibold">Italian Fashion Brand: €69.7K → 418K Purchases, 600% ROAS</div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Meta Ads Management</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Facebook & Instagram ads</li>
                  <li>• Dynamic product ads (DPA) for e-commerce</li>
                  <li>• Messenger campaigns (lead gen, customer support)</li>
                  <li>• Lookalike audiences (high-LTV customers)</li>
                  <li>• Retargeting campaigns (cart abandoners)</li>
                  <li>• Creative testing frameworks (10+ variants)</li>
                </ul>
                
                <div className="mt-6 p-6 glass rounded-xl">
                  <div className="text-sm text-gray-500 mb-2">Real Result</div>
                  <div className="text-lg font-semibold">EU E-Commerce: 317 Purchases at €11.52 Cost Per Sale</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Who This Is For</h2>
            
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">✅ E-Commerce Brands Spending $20K+/Month</h3>
                <p className="text-gray-400">You&apos;re already profitable but want to scale without destroying margins. We&apos;ve managed €69.7K/month for Italian fashion brands at 600% ROAS.</p>
              </div>

              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">✅ Healthcare Clinics & Medical Practices</h3>
                <p className="text-gray-400">Need patient appointments, not clicks. We&apos;ve driven 15,594 conversions at $0.09 CPC for US clinics across 12 states.</p>
              </div>

              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">✅ Service Businesses (Luxury, B2B, High-Ticket)</h3>
                <p className="text-gray-400">Call-only campaigns that drive qualified leads. 517 therapy calls at $34.70 each, 4,644 limo booking calls at $7.01 each.</p>
              </div>

              <div className="glass p-6 rounded-xl border-2 border-red-500/50">
                <h3 className="text-xl font-bold mb-2">❌ NOT For You If:</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• You&apos;re spending less than $20K/month on ads</li>
                  <li>• You want to &quot;test the waters&quot; with $2K/month</li>
                  <li>• You measure success in impressions, not revenue</li>
                  <li>• You&apos;re looking for the cheapest agency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Pricing & Process</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Setup Fee</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$3K - $5K</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Account audit & restructure</li>
                  <li>• Campaign setup (Shopping, Search, Display)</li>
                  <li>• Conversion tracking implementation</li>
                  <li>• Landing page recommendations</li>
                  <li>• First 30 days of optimization included</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Monthly Management</h3>
                <div className="text-4xl font-bold gradient-text mb-4">10-15%</div>
                <p className="text-gray-400 text-sm mb-4">of ad spend</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Daily campaign monitoring</li>
                  <li>• Bid adjustments & optimization</li>
                  <li>• Weekly performance reports</li>
                  <li>• Monthly strategy calls</li>
                  <li>• Direct Slack/email access to your account manager</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-8 glass rounded-xl border-2 border-premium-500/50">
              <h3 className="text-2xl font-bold mb-4">Performance Guarantee</h3>
              <p className="text-gray-400 mb-4">
                If we don&apos;t beat your current ROAS by at least 20% in the first 60 days, we refund your setup fee. That&apos;s how confident we are.
              </p>
              <p className="text-sm text-gray-500">
                *Guarantee applies to accounts spending $30K+/month with at least 3 months of historical data
              </p>
            </div>
          </div>
        </section>

        {/* Geographic Coverage */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">We Serve Clients Globally</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center glass p-6 rounded-xl">
                <div className="text-5xl mb-4">🇺🇸</div>
                <h3 className="font-bold mb-2">United States</h3>
                <p className="text-sm text-gray-400">All 50 states, optimized for US search behavior and buying patterns</p>
              </div>
              
              <div className="text-center glass p-6 rounded-xl">
                <div className="text-5xl mb-4">🇮🇹</div>
                <h3 className="font-bold mb-2">Italy</h3>
                <p className="text-sm text-gray-400">Native Italian optimization, local market expertise, Rome office</p>
              </div>
              
              <div className="text-center glass p-6 rounded-xl">
                <div className="text-5xl mb-4">🇪🇺</div>
                <h3 className="font-bold mb-2">European Union</h3>
                <p className="text-sm text-gray-400">Multi-country campaigns, GDPR compliant, localized ad creative</p>
              </div>
              
              <div className="text-center glass p-6 rounded-xl">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="font-bold mb-2">Middle East</h3>
                <p className="text-sm text-gray-400">UAE, Saudi Arabia, Qatar - English and Arabic campaigns</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300 font-medium">3 Spots Available in March 2026</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Ready to Stop Wasting <span className="gradient-text">Ad Budget</span>?
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              First call is a free audit. We&apos;ll show you exactly where your money is leaking.
            </p>

            <a href="mailto:hello@digitaldreamworksagency.com" className="inline-flex items-center space-x-2 bg-gradient-to-r from-premium-600 to-electric-600 text-white! px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-all premium-glow">
              <span>Book Free Ad Account Audit</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="text-sm text-gray-500 mt-4">$20K/month minimum • Setup from $3K • Book by Feb 28</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
