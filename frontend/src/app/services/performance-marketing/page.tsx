import { TrendingUp } from 'lucide-react'
import ServiceLayout from '@/components/ServiceLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Performance Marketing | DDW Agency - Google & Meta Ads Management',
  description: 'Google Ads + Meta Ads management for companies spending $20K+/month. 300-600% ROAS or we refund the setup fee. $1M+ ad spend managed.',
}

export default function PerformanceMarketing() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        icon={<TrendingUp className="w-4 h-4 text-premium-400" />}
        badge="Performance Marketing"
        title="Turn Ad Spend Into"
        titleHighlight="Predictable Revenue"
        description="Google Ads + Meta Ads management for companies spending $20K+/month. We optimize for revenue, not impressions. 300-600% ROAS or we refund the setup fee."
        gradient="from-premium-600 to-electric-600"
        features={[
          {
            title: 'Google Ads Management',
            description: 'Shopping, Search, Display, and Performance Max campaigns optimized for ROAS, not clicks.',
          },
          {
            title: 'Meta Ads Management',
            description: 'Facebook and Instagram campaigns with advanced audience targeting and creative testing.',
          },
          {
            title: 'Campaign Structure',
            description: 'Complete campaign architecture designed for scale, profitability, and testing.',
          },
          {
            title: 'Conversion Tracking',
            description: 'Full tracking setup including GA4, server-side tracking, and attribution modeling.',
          },
          {
            title: 'Monthly Reporting',
            description: 'Detailed performance reports with actionable insights and recommendations.',
          },
          {
            title: 'Creative Strategy',
            description: 'Data-driven creative testing framework to find winning ads faster.',
          },
        ]}
        pricing={[
          {
            title: 'Setup Fee',
            price: '$3K-$5K',
            description: 'One-time setup including audit, strategy, campaign build, and tracking setup.',
          },
          {
            title: 'Management Fee',
            price: '10-15%',
            description: 'Of monthly ad spend. Scales with your investment.',
          },
          {
            title: 'Minimum Spend',
            price: '$20K/mo',
            description: 'We work with companies serious about scaling their ad investment.',
          },
        ]}
        process={[
          {
            step: '01',
            title: 'Free Ad Account Audit',
            description: 'We analyze your current campaigns, identify leaks, and show you exactly where money is being wasted. No cost, no obligation.',
          },
          {
            step: '02',
            title: 'Strategy & Campaign Build',
            description: 'Complete campaign architecture designed for your specific business model, margins, and growth goals.',
          },
          {
            step: '03',
            title: 'Launch & Optimize',
            description: 'Campaigns go live with daily monitoring. We optimize bids, audiences, and creative based on real data.',
          },
          {
            step: '04',
            title: 'Scale Profitably',
            description: 'Once we hit target ROAS, we scale spend while maintaining profitability. Monthly strategy calls to align on goals.',
          },
        ]}
        caseStudy={{
          title: 'Italian Fashion E-Commerce',
          metric: '600%',
          metricLabel: 'Peak ROAS Achieved',
          description: 'Scaled from €20K/month to €70K/month ad spend while maintaining 600% ROAS. 418K purchases generated in 4 months.',
        }}
      />
      <Footer />
    </>
  )
}
