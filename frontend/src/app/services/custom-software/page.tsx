import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Custom Software Development | CRM, Internal Tools, Business Automation',
  description: 'Custom software for businesses that need more than off-the-shelf. CRMs, dashboards, automation systems. $25K-$100K. Florida & Rome.',
}

export default function CustomSoftware() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="pt-12 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-premium-400 font-medium">Custom Software</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build the Software <span className="gradient-text">Your Business Actually Needs</span>
            </h1>
            <p className="text-xl text-gray-400">
              Off-the-shelf software forces you to change your business. Custom software adapts to you.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">What We Build</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Custom CRM Systems</h3>
                <p className="text-gray-400 mb-4">Salesforce costs $150/user/month and still doesn&apos;t fit your workflow. We build CRMs that do exactly what you need.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Lead management & pipeline tracking</li>
                  <li>• Custom fields & workflows</li>
                  <li>• Email integration & automation</li>
                  <li>• Reporting & analytics dashboards</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Business Automation Tools</h3>
                <p className="text-gray-400 mb-4">If your team spends hours on repetitive tasks, we build software that does it in seconds.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Invoice & billing automation</li>
                  <li>• Document generation systems</li>
                  <li>• Inventory management</li>
                  <li>• Workflow automation</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Internal Dashboards</h3>
                <p className="text-gray-400 mb-4">One dashboard that shows everything. Revenue, KPIs, operations, team performance.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Real-time data visualization</li>
                  <li>• Multi-source data integration</li>
                  <li>• Role-based access control</li>
                  <li>• Mobile-responsive design</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">API Integrations</h3>
                <p className="text-gray-400 mb-4">Connect all your tools. CRM to accounting. E-commerce to inventory. Everything in sync.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Third-party API connections</li>
                  <li>• Data synchronization</li>
                  <li>• Webhook automation</li>
                  <li>• Custom API development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Software Stack</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="glass p-6 rounded-xl">
                <div className="text-4xl mb-2">⚛️</div>
                <div className="font-bold">Frontend</div>
                <div className="text-sm text-gray-400">React, Next.js, TypeScript</div>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="text-4xl mb-2">⚙️</div>
                <div className="font-bold">Backend</div>
                <div className="text-sm text-gray-400">Node.js, Python, Go</div>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="text-4xl mb-2">🗄️</div>
                <div className="font-bold">Database</div>
                <div className="text-sm text-gray-400">PostgreSQL, MongoDB</div>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="text-4xl mb-2">☁️</div>
                <div className="font-bold">Infrastructure</div>
                <div className="text-sm text-gray-400">AWS, Vercel, Docker</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Small Tool</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$25K-$40K</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Single-purpose tool</li>
                  <li>• Basic integrations</li>
                  <li>• Up to 50 users</li>
                  <li>• 6-8 weeks</li>
                </ul>
              </div>
              <div className="glass p-8 rounded-xl border-2 border-premium-500/50">
                <h3 className="text-xl font-bold mb-4">Custom CRM</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$50K-$75K</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Full CRM system</li>
                  <li>• Multiple integrations</li>
                  <li>• Unlimited users</li>
                  <li>• 10-12 weeks</li>
                </ul>
              </div>
              <div className="glass p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Enterprise Platform</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$100K+</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Multi-module system</li>
                  <li>• Complex workflows</li>
                  <li>• Advanced permissions</li>
                  <li>• 16+ weeks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Stop Forcing Your Business to Fit <span className="gradient-text">Off-the-Shelf Software</span>
            </h2>
            <a href="mailto:hello@digitaldreamworksagency.com" className="inline-flex items-center space-x-2 bg-gradient-to-r from-premium-600 to-electric-600 text-white! px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 premium-glow">
              <span>Request Custom Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
