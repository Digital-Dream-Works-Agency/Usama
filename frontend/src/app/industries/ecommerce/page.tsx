import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'E-Commerce Marketing Agency | Google Shopping, Meta Ads | 600% ROAS',
  description: 'E-commerce performance marketing for online stores spending $20K+/month. Google Shopping + Meta Ads. 600% ROAS for Italian fashion brand. EU, US, Middle East.',
}

export default function ECommerce() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="pt-12 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-premium-400 font-medium">E-Commerce</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Scale Your E-Commerce Store <span className="gradient-text">Without Destroying Margins</span>
            </h1>
            <p className="text-xl text-gray-400">We&apos;ve managed €69.7K/month in ad spend for Italian fashion brands at 600% ROAS. We can do the same for you.</p>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-4xl font-bold gradient-text">418K</div>
                <div className="text-sm text-gray-400">Purchases Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">600%</div>
                <div className="text-sm text-gray-400">Peak ROAS</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">€69.7K</div>
                <div className="text-sm text-gray-400">Monthly Ad Spend</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">E-Commerce Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Google Shopping Campaigns</h3>
                <p className="text-gray-400 mb-4">Product feed optimization, smart bidding, seasonal adjustments for retail calendars.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Product feed optimization (titles, descriptions, images)</li>
                  <li>• Smart bidding strategies by product margin</li>
                  <li>• Seasonal campaign adjustments</li>
                  <li>• Shopping campaign structure optimization</li>
                </ul>
              </div>
              
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Meta Dynamic Product Ads</h3>
                <p className="text-gray-400 mb-4">Retargeting campaigns, lookalike audiences, multi-country creative testing.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Dynamic product retargeting</li>
                  <li>• Lookalike audience creation (high-LTV customers)</li>
                  <li>• Multi-country campaign management</li>
                  <li>• Creative testing frameworks (10+ variants)</li>
                </ul>
              </div>
              
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Abandoned Cart Recovery</h3>
                <p className="text-gray-400 mb-4">Email + SMS sequences, Meta Messenger campaigns, discount optimization.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Automated email sequences</li>
                  <li>• SMS cart recovery</li>
                  <li>• Meta Messenger campaigns</li>
                  <li>• Dynamic discount testing</li>
                </ul>
              </div>
              
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Conversion Rate Optimization</h3>
                <p className="text-gray-400 mb-4">Landing page testing, checkout optimization, A/B testing frameworks.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Landing page A/B testing</li>
                  <li>• Checkout flow optimization</li>
                  <li>• Product page improvements</li>
                  <li>• Trust element optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="glass p-4 rounded">Fashion & Apparel</div>
              <div className="glass p-4 rounded">Consumer Goods</div>
              <div className="glass p-4 rounded">Luxury Products</div>
              <div className="glass p-4 rounded">Health & Beauty</div>
              <div className="glass p-4 rounded">Home & Garden</div>
              <div className="glass p-4 rounded">Electronics</div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Scale Profitably</span>?
            </h2>
            <a href="mailto:hello@digitaldreamworksagency.com" className="inline-flex items-center space-x-2 bg-gradient-to-r from-premium-600 to-electric-600 text-white! px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 premium-glow">
              <span>Request E-Commerce Audit</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-400 mt-4">$20K/month minimum ad spend</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
