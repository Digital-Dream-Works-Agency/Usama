'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="text-xl font-bold mb-4">
              <span className="text-white">DDW</span>
              <span className="gradient-text"> Agency</span>
            </div>
            <p className="text-gray-500 text-sm">
              Strategic software consulting and marketing systems for businesses that need solutions, not products.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-500 hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-white transition-colors">AI Integration</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-white transition-colors">Marketing Systems</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-white transition-colors">Strategic Consulting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-500 hover:text-white transition-colors">About</a></li>
              <li><a href="#portfolio" className="text-gray-500 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © 2026 Digital Dream Works Agency. Part of Digital Dream Works LLC. All rights reserved.
            <br />
            <span className="text-xs">Florida, USA | Rome, Italy</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
