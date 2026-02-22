import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Healthcare Marketing Agency | Medical Clinic Google Ads | $0.09 CPC',
  description: 'Healthcare digital marketing for clinics and medical practices. Patient appointment campaigns. 15,594 conversions at $0.09 CPC. HIPAA-compliant. US, EU.',
}

export default function Healthcare() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="pt-12 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-premium-400 font-medium">Healthcare</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Fill Your Appointment Calendar With <span className="gradient-text">Qualified Patients</span>
            </h1>
            <p className="text-xl text-gray-400">
              We&apos;ve driven 15,594 patient appointments at $0.09 CPC for medical clinics across 12 US states. HIPAA-compliant tracking included.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-4xl font-bold gradient-text">15,594</div>
                <div className="text-sm text-gray-400">Conversions</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">$0.09</div>
                <div className="text-sm text-gray-400">Average CPC</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">4.58%</div>
                <div className="text-sm text-gray-400">CTR</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Healthcare Marketing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Patient Acquisition Campaigns</h3>
                <p className="text-gray-400 mb-4">Google Ads targeting high-intent medical searches. Local service ads for immediate appointments.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• &quot;Near me&quot; search optimization</li>
                  <li>• Service-specific campaigns</li>
                  <li>• Insurance-based targeting</li>
                  <li>• Emergency vs. scheduled appointment campaigns</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Appointment Booking Automation</h3>
                <p className="text-gray-400 mb-4">Direct booking integration with your practice management system. Track ROI from click to appointment.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Google Ads to calendar integration</li>
                  <li>• Automated appointment reminders</li>
                  <li>• No-show reduction campaigns</li>
                  <li>• Patient re-engagement sequences</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">HIPAA-Compliant Tracking</h3>
                <p className="text-gray-400 mb-4">Full conversion tracking without violating patient privacy. Custom implementation for healthcare.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• HIPAA-compliant analytics setup</li>
                  <li>• Server-side tracking</li>
                  <li>• De-identified conversion data</li>
                  <li>• BAA agreements with tracking vendors</li>
                </ul>
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Local SEO for Medical Practices</h3>
                <p className="text-gray-400 mb-4">Dominate local search results. Google Business Profile optimization, review management, local citations.</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Google Business Profile optimization</li>
                  <li>• Review generation & management</li>
                  <li>• Local directory listings</li>
                  <li>• Multi-location SEO</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Who We Work With</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">✅ Medical Clinics</h3>
                <p className="text-gray-400">Primary care, urgent care, specialty clinics. Patient acquisition at scale.</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">✅ Dental Practices</h3>
                <p className="text-gray-400">New patient campaigns, emergency dental ads, cosmetic dentistry marketing.</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">✅ Therapy & Mental Health</h3>
                <p className="text-gray-400">Call-only campaigns for immediate support. 517 calls at $34.70 each for therapy practice.</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">✅ Wellness Centers</h3>
                <p className="text-gray-400">Chiropractic, physical therapy, wellness programs. High-intent local campaigns.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Case Study: US Medical Clinic</h2>
            <div className="glass p-10 rounded-xl">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-sm text-premium-400 font-semibold mb-2 uppercase">Challenge</h3>
                  <p className="text-gray-400 mb-6">Medical clinic in competitive US market struggling with $3+ CPC on Google Ads. Needed cost-effective patient acquisition across 12 states.</p>
                  
                  <h3 className="text-sm text-premium-400 font-semibold mb-2 uppercase">Solution</h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Built location-specific landing pages for each service line</li>
                    <li>• Implemented appointment booking integration with Google Ads tracking</li>
                    <li>• Optimized for &quot;near me&quot; searches with geo-targeted bid adjustments</li>
                    <li>• Created remarketing campaigns for incomplete bookings</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm text-premium-400 font-semibold mb-4 uppercase">Results</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-premium-900/30 to-black p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold gradient-text">15,594</div>
                      <div className="text-xs text-gray-500">Conversions</div>
                    </div>
                    <div className="bg-gradient-to-br from-premium-900/30 to-black p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold gradient-text">$0.09</div>
                      <div className="text-xs text-gray-500">CPC</div>
                    </div>
                    <div className="bg-gradient-to-br from-premium-900/30 to-black p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold gradient-text">4.58%</div>
                      <div className="text-xs text-gray-500">CTR</div>
                    </div>
                    <div className="bg-gradient-to-br from-premium-900/30 to-black p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold gradient-text">71,784</div>
                      <div className="text-xs text-gray-500">Clicks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Geographic Coverage</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-xl">
                <div className="text-4xl mb-4">🇺🇸</div>
                <h3 className="text-2xl font-bold mb-4">United States</h3>
                <p className="text-gray-400">All 50 states. Expertise in competitive markets like New York, California, Florida, Texas.</p>
              </div>
              <div className="glass p-8 rounded-xl">
                <div className="text-4xl mb-4">🇪🇺</div>
                <h3 className="text-2xl font-bold mb-4">European Union</h3>
                <p className="text-gray-400">GDPR-compliant campaigns. Italy, Germany, France, Spain. Multi-language support.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Fill Your <span className="gradient-text">Appointment Calendar</span>?
            </h2>
            <a href="mailto:hello@digitaldreamworksagency.com" className="inline-flex items-center space-x-2 bg-gradient-to-r from-premium-600 to-electric-600 text-white! px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 premium-glow">
              <span>Request Healthcare Marketing Audit</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-400 mt-4">HIPAA-compliant • $20K/month minimum ad spend</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
