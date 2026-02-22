import Navbar from '@/components/Navbar'
import PremiumSlider from '@/components/PremiumSlider'
import TrustBar from '@/components/TrustBar'
import HookSection from '@/components/HookSection'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'DDW Agency - Performance Marketing That Drives Revenue | $1M+ Ad Spend Managed',
  description: '$683K in Google Ads managed monthly. 600% ROAS campaigns. Custom AI automation for e-commerce, healthcare, logistics. Florida & Rome offices serving US, EU, Middle East.',
}

export default function Home() {
  return (
    <main className="relative" data-testid="homepage">
      <Navbar />
      <PremiumSlider />
      <TrustBar />
      <HookSection />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
