import { ShoppingCart } from 'lucide-react'
import IndustryLayout from '@/components/IndustryLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'E-Commerce Solutions | DDW Agency - Performance Marketing & Custom Development',
  description: 'E-commerce performance marketing and custom development. 600% ROAS campaigns, custom Shopify development, and AI automation for online stores.',
}

export default function Ecommerce() {
  return (
    <>
      <Navbar />
      <IndustryLayout
        icon={<ShoppingCart className="w-4 h-4 text-premium-400" />}
        badge="E-Commerce"
        title="Scale Your Online Store"
        titleHighlight="Profitably"
        description="We help e-commerce brands scale from $1M to $10M+ with performance marketing that actually converts and technology that removes bottlenecks."
        gradient="from-premium-600 to-electric-600"
        challenges={[
          'Ad costs keep rising but ROAS is falling—competitors are outbidding you',
          'High cart abandonment rates bleeding revenue every day',
          'Inventory management and fulfillment creating operational chaos',
          'Generic marketing platforms cannot handle your product catalog complexity',
          'Customer acquisition cost eating into margins on every sale',
        ]}
        solutions={[
          {
            title: 'Performance Marketing',
            description: 'Google Shopping, Meta Ads, and TikTok campaigns optimized for ROAS, not clicks. We manage $1M+/month in e-commerce ad spend.',
          },
          {
            title: 'Conversion Optimization',
            description: 'Data-driven site optimization, A/B testing, and checkout flow improvements that reduce abandonment.',
          },
          {
            title: 'Custom E-Commerce Development',
            description: 'Headless Shopify, custom checkout flows, and integrations that scale with your business.',
          },
          {
            title: 'AI-Powered Personalization',
            description: 'Product recommendations, dynamic pricing, and personalized email sequences that increase AOV.',
          },
          {
            title: 'Inventory & Operations',
            description: 'Custom dashboards and automation to manage multi-channel inventory and fulfillment.',
          },
          {
            title: 'Analytics & Attribution',
            description: 'Full-funnel tracking and attribution so you know exactly which channels drive revenue.',
          },
        ]}
        services={[
          'Performance Marketing (Google & Meta)',
          'Custom Shopify Development',
          'E-Commerce Platform Migration',
          'AI Personalization & Recommendations',
          'Inventory Management Systems',
          'Email & SMS Automation',
        ]}
        caseStudy={{
          title: 'Italian Fashion E-Commerce',
          metric: '600%',
          metricLabel: 'Peak ROAS',
          description: 'Scaled from €20K/month to €70K/month ad spend while maintaining 600% ROAS. Generated 418K purchases in 4 months with restructured Google Shopping campaigns.',
        }}
      />
      <Footer />
    </>
  )
}
