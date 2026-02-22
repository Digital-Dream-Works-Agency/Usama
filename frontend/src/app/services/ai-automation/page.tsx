import { Zap } from 'lucide-react'
import ServiceLayout from '@/components/ServiceLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'AI Automation | DDW Agency - Voice AI, Chatbots, Workflow Automation',
  description: 'Production AI systems that actually work. Voice AI for customer support, chatbots that qualify leads, automated workflows that do not break.',
}

export default function AIAutomation() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        icon={<Zap className="w-4 h-4 text-premium-400" />}
        badge="AI Automation"
        title="AI That Actually"
        titleHighlight="Works in Production"
        description="Production AI systems that actually work. Voice AI for customer support, chatbots that qualify leads, automated workflows that don't break. No demos—deployed systems only."
        gradient="from-premium-600 via-electric-600 to-premium-600"
        features={[
          {
            title: 'AI Voice Assistants',
            description: 'Phone-based AI that handles customer support, appointment booking, and FAQ responses 24/7.',
          },
          {
            title: 'Lead Qualification Chatbots',
            description: 'AI chatbots that qualify leads, answer questions, and book meetings—integrated with your CRM.',
          },
          {
            title: 'Document Processing',
            description: 'Automated extraction and processing of invoices, contracts, and forms using AI.',
          },
          {
            title: 'Workflow Automation',
            description: 'End-to-end process automation with AI decision-making and human-in-the-loop when needed.',
          },
          {
            title: 'Custom AI Integrations',
            description: 'GPT, Claude, or custom models integrated into your existing systems and workflows.',
          },
          {
            title: 'Analytics & Monitoring',
            description: 'Real-time AI performance dashboards. Know exactly how your AI is performing.',
          },
        ]}
        pricing={[
          {
            title: 'Chatbot',
            price: '$10K-$20K',
            description: 'AI chatbot for website, SMS, or messaging platforms with CRM integration.',
          },
          {
            title: 'Voice AI',
            price: '$20K-$35K',
            description: 'Phone-based AI assistant with custom voice, scripts, and call handling logic.',
          },
          {
            title: 'Full Automation',
            price: '$35K+',
            description: 'End-to-end workflow automation with multiple AI components and integrations.',
          },
        ]}
        process={[
          {
            step: '01',
            title: 'Use Case Analysis',
            description: 'We identify the highest-ROI automation opportunities. Not everything should be automated—we focus on what matters.',
          },
          {
            step: '02',
            title: 'AI Design & Training',
            description: 'Design conversation flows, train on your data, and configure integrations with your existing systems.',
          },
          {
            step: '03',
            title: 'Pilot & Refinement',
            description: 'Deploy in controlled environment. Monitor, analyze conversations, and refine based on real interactions.',
          },
          {
            step: '04',
            title: 'Full Deployment',
            description: 'Scale to full volume with monitoring dashboards and escalation workflows.',
          },
        ]}
        caseStudy={{
          title: 'AI Dispatch System',
          metric: '€180K',
          metricLabel: 'Annual Cost Savings',
          description: 'Voice-activated AI dispatch system reduced errors by 92% and increased daily routes completed by 34%.',
        }}
      />
      <Footer />
    </>
  )
}
