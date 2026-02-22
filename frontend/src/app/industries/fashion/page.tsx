import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Fashion E-Commerce Marketing | 600% ROAS Google Shopping | Italy, EU, US',
  description: 'Performance marketing for fashion brands. Google Shopping + Meta Ads. 600% ROAS for Italian fashion e-commerce. Italy, EU, US markets.',
}

export default function Fashion() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="pt-12 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-premium-400 font-medium">Fashion & Luxury</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Scale Your Fashion Brand <span className="gradient-text">Profitably</span>
            </h1>
            <p className="text-xl text-gray-400">
              We&apos;ve managed €69.7K/month in Google Ads for Italian fashion brands at 600% ROAS. We understand seasonal campaigns, fashion calendars, and luxury positioning.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-4xl font-bold gradient-text">418K</div>
                <div className="text-sm text-gray-400">Purchases</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">600%</div>
                <div className="text-sm text-gray-400">ROAS</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">€69.7K</div>
                <div className="text-sm text-gray-400">Monthly Spend</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Fashion Marketing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Google Shopping for Fashion</h3>
                <p className="text-gray-400 mb-4">Product feed optimization, seasonal bidding strategies, fashion-specific targeting.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Dynamic product titles optimized for fashion searches</li>
                  <li>• Seasonal campaign adjustments (FW, SS collections)</li>
                  <li>• High-AOV vs. volume product segmentation</li>
                  <li>• Smart bidding by margin and inventory</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Instagram & Facebook Ads</h3>
                <p className="text-gray-400 mb-4">Dynamic product ads, collection campaigns, influencer ROI tracking.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Instagram Shopping integration</li>
                  <li>• Lookbook & collection campaigns</li>
                  <li>• Influencer campaign tracking</li>
                  <li>• User-generated content campaigns</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Seasonal Campaign Planning</h3>
                <p className="text-gray-400 mb-4">Strategic planning for fashion weeks, holidays, end-of-season sales.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Milan/Paris Fashion Week campaigns</li>
                  <li>• Black Friday/Cyber Monday strategy</li>
                  <li>• End-of-season clearance optimization</li>
                  <li>• New collection launch campaigns</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Luxury Brand Positioning</h3>
                <p className="text-gray-400 mb-4">Maintain brand exclusivity while scaling. Premium ad creative, targeted audiences.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• High-net-worth audience targeting</li>
                  <li>• Brand-safe ad placements</li>
                  <li>• Premium creative production guidance</li>
                  <li>• VIP/loyalty customer campaigns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Who We Work With</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="glass p-4 rounded text-center">Women&apos;s Fashion</div>
              <div className="glass p-4 rounded text-center">Men&apos;s Apparel</div>
              <div className="glass p-4 rounded text-center">Luxury Brands</div>
              <div className="glass p-4 rounded text-center">Streetwear</div>
              <div className="glass p-4 rounded text-center">Accessories</div>
              <div className="glass p-4 rounded text-center">Footwear</div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Scale Without <span className="gradient-text">Destroying Your Brand</span>?
            </h2>
            <a href="mailto:hello@digitaldreamworksagency.com" className="inline-flex items-center space-x-2 bg-gradient-to-r from-premium-600 to-electric-600 text-white! px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 premium-glow">
              <span>Request Fashion Brand Audit</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-400 mt-4">$20K/month minimum • Italy, EU, US markets</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
