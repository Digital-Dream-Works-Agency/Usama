import { Cpu } from 'lucide-react'
import ServiceLayout from '@/components/ServiceLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Custom Software Development | DDW Agency - CRMs, Dashboards, Automation',
  description: 'Build the software your business actually needs. CRMs, internal tools, dashboards, automation systems. If it runs your operations, we build it.',
}

export default function CustomSoftware() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        icon={<Cpu className="w-4 h-4 text-premium-400" />}
        badge="Custom Software"
        title="Software Built For"
        titleHighlight="Your Operations"
        description="Build the software your business actually needs. CRMs, internal tools, dashboards, automation systems. If it runs your operations, we build it."
        gradient="from-electric-500 to-premium-600"
        features={[
          {
            title: 'Custom CRM Systems',
            description: 'Tailored customer relationship management built around your sales process, not generic workflows.',
          },
          {
            title: 'Business Automation',
            description: 'Automate repetitive tasks, approvals, notifications, and workflows to free up your team.',
          },
          {
            title: 'API Integrations',
            description: 'Connect your existing tools—Salesforce, HubSpot, Quickbooks, custom ERPs—into one unified system.',
          },
          {
            title: 'Database Architecture',
            description: 'Scalable, secure database design that grows with your business. PostgreSQL, MongoDB, or hybrid.',
          },
          {
            title: 'Admin Dashboards',
            description: 'Real-time visibility into your operations. KPIs, reports, and alerts all in one place.',
          },
          {
            title: 'Mobile Apps',
            description: 'Native iOS/Android apps or cross-platform solutions for field teams and customers.',
          },
        ]}
        pricing={[
          {
            title: 'Internal Tools',
            price: '$25K-$50K',
            description: 'Dashboards, admin panels, and single-purpose internal applications.',
          },
          {
            title: 'Custom CRM',
            price: '$50K-$100K',
            description: 'Full CRM systems with sales pipelines, automation, and reporting.',
          },
          {
            title: 'Enterprise Systems',
            price: '$100K+',
            description: 'Large-scale platforms with multiple user types, integrations, and complex logic.',
          },
        ]}
        process={[
          {
            step: '01',
            title: 'Requirements Workshop',
            description: 'We spend time understanding your current processes, pain points, and what success looks like. This informs everything.',
          },
          {
            step: '02',
            title: 'Technical Architecture',
            description: 'Detailed technical specification including database schema, API design, and infrastructure plan.',
          },
          {
            step: '03',
            title: 'Iterative Development',
            description: 'Build in phases with regular demos. You test and provide feedback throughout development.',
          },
          {
            step: '04',
            title: 'Training & Handoff',
            description: 'Full documentation, admin training, and knowledge transfer. We ensure your team can maintain it.',
          },
        ]}
        caseStudy={{
          title: 'Operations Platform',
          metric: '$400K',
          metricLabel: 'Annual Savings',
          description: 'Built end-to-end operating system in 4 weeks. Reduced operational overhead by 65% and increased proposal output by 3x.',
        }}
      />
      <Footer />
    </>
  )
}
