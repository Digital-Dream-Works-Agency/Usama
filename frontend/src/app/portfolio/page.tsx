import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Portfolio & Case Studies | Digital Dream Works Agency',
  description: 'Real case studies with verified results. $1M+ ad spend managed, 300-600% ROAS, custom software for enterprise clients. US, EU, Italy, Middle East.',
}

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="pt-12 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-premium-400 font-medium">Case Studies</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Case Studies <span className="gradient-text">You Can Verify</span>
            </h1>
            <p className="text-xl text-gray-400">
              Platform dashboards. Real clients. Numbers you can check. No bullshit.
            </p>
          </div>
        </section>

        {/* Google Ads Case Studies */}
        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Google Ads Campaigns</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Italian Fashion */}
              <div className="glass p-8 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-premium-400 mb-1">E-Commerce • Italy/EU</div>
                    <h3 className="text-2xl font-bold">€69.7K → 418K Purchases at 600% ROAS</h3>
                  </div>
                  <div className="text-3xl">🇮🇹</div>
                </div>
                
                <p className="text-gray-400 mb-6">
                  Italian fashion retailer. Scaled from €20K/month to €70K while maintaining 600% ROAS. 
                  Google Shopping optimization with seasonal bidding.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-premium-950/30 p-4 rounded text-center">
                    <div className="text-2xl font-bold gradient-text">418K</div>
                    <div className="text-xs text-gray-500">Purchases</div>
                  </div>
                  <div className="bg-premium-950/30 p-4 rounded text-center">
                    <div className="text-2xl font-bold gradient-text">600%</div>
                    <div className="text-xs text-gray-500">ROAS</div>
                  </div>
                </div>
              </div>

              {/* US Healthcare */}
              <div className="glass p-8 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-premium-400 mb-1">Healthcare • USA</div>
                    <h3 className="text-2xl font-bold">15,594 Conversions at $0.09 CPC</h3>
                  </div>
                  <div className="text-3xl">🇺🇸</div>
                </div>
                
                <p className="text-gray-400 mb-6">
                  US medical clinic. 71,784 clicks on $6.3K spend. 4.58% CTR. 
                  Appointment booking integrated with Google Ads tracking.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-premium-950/30 p-4 rounded text-center">
                    <div className="text-2xl font-bold gradient-text">15,594</div>
                    <div className="text-xs text-gray-500">Conversions</div>
                  </div>
                  <div className="bg-premium-950/30 p-4 rounded text-center">
                    <div className="text-2xl font-bold gradient-text">$0.09</div>
                    <div className="text-xs text-gray-500">CPC</div>
                  </div>
                </div>
              </div>

              {/* US Therapy */}
              <div className="glass p-8 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-premium-400 mb-1">Mental Health • USA</div>
                    <h3 className="text-2xl font-bold">517 Phone Calls for Therapy Practice</h3>
                  </div>
                  <div className="text-3xl">🇺🇸</div>
                </div>
                
                <p className="text-gray-400 mb-6">
                  Call-only campaigns targeting high-intent therapy keywords. 
                  $17.9K spend, 162K phone impressions.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-premium-950/30 p-4 rounded text-center">
                    <div className="text-2xl font-bold gradient-text">517</div>
                    <div className="text-xs text-gray-500">Calls</div>
                  </div>
                  <div className="bg-premium-950/30 p-4 rounded text-center">
                    <div className="text-2xl font-bold gradient-text">$34.70</div>
                    <div className="text-xs text-gray-500">Cost/Call</div>
                  </div>
                </div>
              </div>

              {/* Wine Tours */}
              <div className="glass p-8 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-premium-400 mb-1">Luxury Services • USA</div>
                    <h3 className="text-2xl font-bold">4,644 Calls for Wine Tour Limos</h3>
                  </div>
                  <div className="text-3xl">🇺🇸</div>
                </div>
                
                <p className="text-gray-400 mb-6">
                  Premium wine tour transportation. $32.5K spend, 465K impressions, 4.31% CTR. 
                  High-intent keywords for $500+ bookings.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-premium-950/30 p-4 rounded text-center">
                    <div className="text-2xl font-bold gradient-text">4,644</div>
                    <div className="text-xs text-gray-500">Calls</div>
                  </div>
                  <div className="bg-premium-950/30 p-4 rounded text-center">
                    <div className="text-2xl font-bold gradient-text">$7.01</div>
                    <div className="text-xs text-gray-500">Cost/Call</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meta Ads Case Studies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Meta Ads Campaigns</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* EU E-commerce */}
              <div className="glass p-8 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-premium-400 mb-1">E-Commerce • EU</div>
                    <h3 className="text-2xl font-bold">317 Purchases at €11.52 Cost Per Sale</h3>
                  </div>
                  <div className="text-3xl">🇪🇺</div>
                </div>
                
                <p className="text-gray-400 mb-6">
                  Multi-country EU e-commerce. 6,190 add-to-carts, 17,084 clicks. 
                  Retargeting + prospecting campaigns.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-premium-950/30 p-4 rounded text-center">
                    <div className="text-2xl font-bold gradient-text">317</div>
                    <div className="text-xs text-gray-500">Purchases</div>
                  </div>
                  <div className="bg-premium-950/30 p-4 rounded text-center">
                    <div className="text-2xl font-bold gradient-text">€11.52</div>
                    <div className="text-xs text-gray-500">Cost/Sale</div>
                  </div>
                </div>
              </div>

              {/* US Wellness */}
              <div className="glass p-8 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-premium-400 mb-1">Healthcare • USA</div>
                    <h3 className="text-2xl font-bold">3,802 Messenger Conversations</h3>
                  </div>
                  <div className="text-3xl">🇺🇸</div>
                </div>
                
                <p className="text-gray-400 mb-6">
                  Wellness brand Messenger campaigns. 80,454 clicks, $1.3K spend, 2.2M impressions. 
                  Health consultations via chat.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-premium-950/30 p-4 rounded text-center">
                    <div className="text-2xl font-bold gradient-text">3,802</div>
                    <div className="text-xs text-gray-500">Conversations</div>
                  </div>
                  <div className="bg-premium-950/30 p-4 rounded text-center">
                    <div className="text-2xl font-bold gradient-text">$0.35</div>
                    <div className="text-xs text-gray-500">Cost/Conv</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Want Results Like <span className="gradient-text">These</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              First call is a free audit. We&apos;ll show you exactly where your money is leaking.
            </p>
            <a href="mailto:hello@digitaldreamworksagency.com" className="inline-flex items-center space-x-2 bg-gradient-to-r from-premium-600 to-electric-600 text-white! px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 premium-glow">
              <span>Book Free Audit</span>
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
