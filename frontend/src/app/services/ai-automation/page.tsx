import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'AI Automation | Voice AI, Chatbots, Document Processing | Production Systems',
  description: 'Production AI systems that work. Voice AI for customer support, lead qualification chatbots, automated workflows. $10K-$40K. No demos—deployed systems only.',
}

export default function AIAutomation() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="pt-12 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-premium-400 font-medium">AI Automation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI That Actually <span className="gradient-text">Works in Production</span>
            </h1>
            <p className="text-xl text-gray-400">
              No demos. No proofs of concept. Deployed systems that handle real customers, real support tickets, real workflows.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">What We Build</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">AI Voice Assistants</h3>
                <p className="text-gray-400 mb-4">Phone support that sounds human. Handles FAQs, schedules appointments, qualifies leads.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Inbound call handling</li>
                  <li>• Appointment scheduling</li>
                  <li>• FAQ automation</li>
                  <li>• Lead qualification</li>
                  <li>• Transfer to human when needed</li>
                </ul>
                <div className="mt-4 p-4 bg-premium-950/30 rounded">
                  <div className="text-sm text-gray-500">Example: LYRA</div>
                  <div className="text-white">Handles 80% of support calls, $0.10/minute</div>
                </div>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Lead Qualification Chatbots</h3>
                <p className="text-gray-400 mb-4">Chat with website visitors, qualify leads, book meetings—all automated.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Website chat integration</li>
                  <li>• Lead scoring & routing</li>
                  <li>• Calendar integration</li>
                  <li>• CRM sync</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Document Processing</h3>
                <p className="text-gray-400 mb-4">Extract data from PDFs, invoices, contracts. Process thousands of documents in seconds.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• PDF data extraction</li>
                  <li>• Invoice processing</li>
                  <li>• Contract analysis</li>
                  <li>• Form automation</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Workflow Automation</h3>
                <p className="text-gray-400 mb-4">AI-powered workflows that connect all your tools and automate repetitive tasks.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Email automation</li>
                  <li>• Data entry automation</li>
                  <li>• Report generation</li>
                  <li>• Multi-step workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Why AI? Why Now?</h2>
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">💰 Cost Savings</h3>
                <p className="text-gray-400">AI voice support: $0.10/minute. Human support: $15-25/hour. Do the math.</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">⚡ 24/7 Availability</h3>
                <p className="text-gray-400">AI doesn&apos;t sleep. Answer customer questions at 3 AM. Qualify leads on weekends.</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">📈 Scalability</h3>
                <p className="text-gray-400">Handle 10 calls or 10,000 calls. Same cost, same quality.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Chatbot</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$10K-$15K</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Website integration</li>
                  <li>• Lead qualification</li>
                  <li>• CRM sync</li>
                  <li>• 4-6 weeks</li>
                </ul>
              </div>
              <div className="glass p-8 rounded-xl border-2 border-premium-500/50">
                <h3 className="text-xl font-bold mb-4">Voice AI</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$25K-$35K</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Phone system integration</li>
                  <li>• Custom voice training</li>
                  <li>• Call routing</li>
                  <li>• 8-10 weeks</li>
                </ul>
              </div>
              <div className="glass p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Custom AI System</h3>
                <div className="text-4xl font-bold gradient-text mb-4">$40K+</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Multi-channel AI</li>
                  <li>• Complex workflows</li>
                  <li>• Custom model training</li>
                  <li>• 12+ weeks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Deploy <span className="gradient-text">Production AI</span>?
            </h2>
            <a href="mailto:hello@digitaldreamworksagency.com" className="inline-flex items-center space-x-2 bg-gradient-to-r from-premium-600 to-electric-600 text-white! px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 premium-glow">
              <span>Request AI Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
