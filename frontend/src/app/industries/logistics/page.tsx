import { Truck } from 'lucide-react'
import IndustryLayout from '@/components/IndustryLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Logistics Solutions | DDW Agency - Fleet Management & AI Dispatch',
  description: 'Logistics software and automation solutions. AI dispatch systems, fleet tracking, route optimization, and driver management platforms.',
}

export default function Logistics() {
  return (
    <>
      <Navbar />
      <IndustryLayout
        icon={<Truck className="w-4 h-4 text-premium-400" />}
        badge="Logistics"
        title="Optimize Your"
        titleHighlight="Operations"
        description="We help logistics companies reduce costs and improve efficiency with custom software, AI automation, and operational systems that scale."
        gradient="from-electric-500 to-premium-600"
        challenges={[
          'Manual dispatch processes causing delays and miscommunication',
          'Route inefficiencies bleeding money on fuel and driver hours',
          'No real-time visibility into fleet status and performance',
          'Driver communication gaps leading to delivery failures',
          'Legacy systems that cannot integrate with modern tools',
        ]}
        solutions={[
          {
            title: 'AI Dispatch System',
            description: 'Voice-activated dispatch that eliminates manual errors and instantly assigns routes to drivers.',
          },
          {
            title: 'Route Optimization',
            description: 'AI-powered routing that minimizes fuel costs and maximizes daily deliveries.',
          },
          {
            title: 'Fleet Tracking',
            description: 'Real-time GPS tracking with predictive maintenance alerts and driver performance monitoring.',
          },
          {
            title: 'Driver Mobile App',
            description: 'Custom mobile apps for drivers with turn-by-turn navigation, delivery confirmation, and communication.',
          },
          {
            title: 'Operations Dashboard',
            description: 'Centralized command center with live fleet status, KPIs, and exception alerts.',
          },
          {
            title: 'ERP Integration',
            description: 'Connect dispatch with your existing ERP, accounting, and customer systems.',
          },
        ]}
        services={[
          'Custom Dispatch Software',
          'AI Voice Dispatch',
          'Fleet Management Systems',
          'Driver Mobile Applications',
          'Route Optimization',
          'Operations Dashboards',
        ]}
        caseStudy={{
          title: 'Milan Logistics Company',
          metric: '€180K',
          metricLabel: 'Annual Savings',
          description: 'AI dispatch system reduced errors by 92% and increased daily routes completed by 34%. Full deployment in 4 weeks.',
        }}
      />
      <Footer />
    </>
  )
}
