import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Logistics Software & Marketing | Fleet Management, Dispatch Automation | Italy, EU, US',
  description: 'Custom software and marketing for logistics companies. AI dispatch systems, fleet tracking, Google Ads for freight. Italy, EU, US expertise.',
}

export default function Logistics() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="pt-12 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-premium-400 font-medium">Logistics</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Software & Marketing Built for <span className="gradient-text">Logistics Companies</span>
            </h1>
            <p className="text-xl text-gray-400">
              We understand Italian logistics. ZTL zones, Autostrade tolls, EU regulations. Plus custom dispatch software that actually works.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Logistics Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Fleet Management Software</h3>
                <p className="text-gray-400 mb-4">Custom fleet tracking, route optimization, driver management. Built for Italian and EU logistics.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Real-time GPS tracking</li>
                  <li>• Route optimization with ZTL zone avoidance</li>
                  <li>• Autostrade toll calculation</li>
                  <li>• Driver performance analytics</li>
                  <li>• Maintenance scheduling</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">AI Dispatch Automation</h3>
                <p className="text-gray-400 mb-4">Voice-activated dispatch system. Reduce errors by 92%, save €180K annually.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Voice AI for dispatch calls</li>
                  <li>• Automated route assignment</li>
                  <li>• Load optimization</li>
                  <li>• Real-time ETAs</li>
                  <li>• Driver communication automation</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Google Ads for Freight</h3>
                <p className="text-gray-400 mb-4">Lead generation campaigns for freight forwarding, logistics services, warehousing.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• B2B freight forwarding leads</li>
                  <li>• Local logistics service campaigns</li>
                  <li>• International shipping ads</li>
                  <li>• LinkedIn B2B campaigns</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">TMS Integration</h3>
                <p className="text-gray-400 mb-4">Connect your transportation management system with accounting, CRM, customer portals.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• API integrations</li>
                  <li>• Data synchronization</li>
                  <li>• Custom reporting dashboards</li>
                  <li>• Customer tracking portals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Italian Logistics Expertise</h2>
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">🇮🇹 ZTL Zone Management</h3>
                <p className="text-gray-400">Our software knows every ZTL zone in Italy. Automatic route optimization to avoid fines.</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">🛣️ Autostrade Integration</h3>
                <p className="text-gray-400">Automatic toll calculation, Telepass integration, route cost optimization.</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">📦 Last-Mile Delivery</h3>
                <p className="text-gray-400">Optimized for Italian city centers. Narrow streets, pedestrian zones, delivery windows.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Modernize Your <span className="gradient-text">Logistics Operations</span>?
            </h2>
            <a href="mailto:hello@digitaldreamworksagency.com" className="inline-flex items-center space-x-2 bg-gradient-to-r from-premium-600 to-electric-600 text-white! px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 premium-glow">
              <span>Request Logistics Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
