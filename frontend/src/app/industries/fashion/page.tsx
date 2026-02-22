import { Shirt } from 'lucide-react'
import IndustryLayout from '@/components/IndustryLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Fashion & Luxury Solutions | DDW Agency - E-Commerce & Brand Marketing',
  description: 'Fashion and luxury brand solutions. High-end e-commerce development, performance marketing, and personalization for fashion retailers.',
}

export default function Fashion() {
  return (
    <>
      <Navbar />
      <IndustryLayout
        icon={<Shirt className="w-4 h-4 text-premium-400" />}
        badge="Fashion & Luxury"
        title="Elevate Your"
        titleHighlight="Brand Online"
        description="We help fashion and luxury brands create premium digital experiences that convert browsers into loyal customers."
        gradient="from-pink-500 to-premium-600"
        challenges={[
          'Beautiful products but website does not reflect brand premium positioning',
          'High cart abandonment from slow sites and poor mobile experience',
          'Generic marketing approaches that do not work for fashion seasonality',
          'Difficulty scaling ad spend profitably across multiple markets',
          'Inventory management chaos during seasonal peaks and sales',
        ]}
        solutions={[
          {
            title: 'Luxury E-Commerce',
            description: 'Custom-built shopping experiences that reflect your brand aesthetic and convert premium customers.',
          },
          {
            title: 'Fashion Marketing',
            description: 'Google Shopping and Meta Ads campaigns optimized for fashion seasonality and margin protection.',
          },
          {
            title: 'Visual Merchandising',
            description: 'AI-powered product recommendations and dynamic collections that increase AOV.',
          },
          {
            title: 'Global Expansion',
            description: 'Multi-language, multi-currency e-commerce with localized marketing across EU and beyond.',
          },
          {
            title: 'Inventory Systems',
            description: 'Real-time inventory sync across channels with demand forecasting and replenishment alerts.',
          },
          {
            title: 'Customer Experience',
            description: 'Personalized post-purchase journeys, VIP programs, and retention automation.',
          },
        ]}
        services={[
          'Performance Marketing (Google & Meta)',
          'Custom E-Commerce Development',
          'Multi-Market Expansion',
          'AI Personalization',
          'Inventory Management',
          'Customer Retention Systems',
        ]}
        caseStudy={{
          title: 'Italian Fashion Brand',
          metric: '340%',
          metricLabel: 'Revenue Increase',
          description: 'Complete platform rebuild reduced load time from 8.4s to 2.8s and cut cart abandonment from 68% to 32%, generating €1.2M additional annual revenue.',
        }}
      />
      <Footer />
    </>
  )
}
