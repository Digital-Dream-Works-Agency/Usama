import { Heart } from 'lucide-react'
import IndustryLayout from '@/components/IndustryLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Healthcare Solutions | DDW Agency - Patient Acquisition & Practice Management',
  description: 'Healthcare marketing and software solutions. Patient acquisition campaigns, appointment booking systems, and HIPAA-compliant automation.',
}

export default function Healthcare() {
  return (
    <>
      <Navbar />
      <IndustryLayout
        icon={<Heart className="w-4 h-4 text-premium-400" />}
        badge="Healthcare"
        title="Grow Your Practice"
        titleHighlight="Efficiently"
        description="We help healthcare providers acquire more patients and streamline operations with compliant marketing and custom software solutions."
        gradient="from-orange-500 to-premium-600"
        challenges={[
          'Patient acquisition costs spiraling out of control with generic agencies',
          'No-shows and cancellations wasting valuable appointment slots',
          'Manual intake processes creating administrative burden and errors',
          'Difficulty tracking ROI across multiple marketing channels',
          'HIPAA compliance concerns limiting technology adoption',
        ]}
        solutions={[
          {
            title: 'Patient Acquisition',
            description: 'Google Ads campaigns optimized for high-intent local searches. We have achieved $0.09 CPC for healthcare clients.',
          },
          {
            title: 'Appointment Booking',
            description: 'Custom booking systems integrated with your practice management software and Google Ads tracking.',
          },
          {
            title: 'AI Phone Support',
            description: 'HIPAA-compliant voice AI that handles appointment scheduling, FAQ, and patient intake 24/7.',
          },
          {
            title: 'Patient Engagement',
            description: 'Automated appointment reminders, follow-up sequences, and review requests that reduce no-shows.',
          },
          {
            title: 'Practice Dashboards',
            description: 'Real-time visibility into patient acquisition costs, appointment rates, and revenue per channel.',
          },
          {
            title: 'Intake Automation',
            description: 'Digital intake forms, insurance verification, and pre-visit workflows that save hours daily.',
          },
        ]}
        services={[
          'Performance Marketing (Google Ads)',
          'Call-Only Campaigns',
          'Appointment Booking Systems',
          'AI Voice Assistants',
          'Patient Engagement Automation',
          'Practice Management Integration',
        ]}
        caseStudy={{
          title: 'US Healthcare Clinic',
          metric: '15,594',
          metricLabel: 'Patient Appointments',
          description: 'Generated 15,594 patient appointments at $0.09 CPC across 12 states. Integrated booking system with Google Ads for instant ROI tracking.',
        }}
      />
      <Footer />
    </>
  )
}
