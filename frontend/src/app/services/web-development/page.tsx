import { Code } from 'lucide-react'
import ServiceLayout from '@/components/ServiceLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Custom Web Development | DDW Agency - Next.js, React, Full-Stack',
  description: 'Production-grade websites and web apps built with Next.js, React, and modern tech stacks. Not WordPress templates—real custom code.',
}

export default function WebDevelopment() {
  return (
    <>
      <Navbar />
      <ServiceLayout
        icon={<Code className="w-4 h-4 text-premium-400" />}
        badge="Web Development"
        title="Websites That"
        titleHighlight="Convert & Scale"
        description="Production-grade websites and web apps built with Next.js, React, or whatever tech stack fits your needs. Not WordPress templates—real custom code."
        gradient="from-orange-500 to-premium-600"
        features={[
          {
            title: 'Full-Stack Development',
            description: 'Frontend and backend built together for seamless performance and maintainability.',
          },
          {
            title: 'E-Commerce Platforms',
            description: 'Custom shopping experiences with Shopify, headless commerce, or fully custom solutions.',
          },
          {
            title: 'CMS Integration',
            description: 'Sanity, Contentful, Strapi, or custom CMS solutions for easy content management.',
          },
          {
            title: 'Performance Optimization',
            description: 'Sub-2-second load times, Core Web Vitals optimization, and SEO-ready architecture.',
          },
          {
            title: 'Responsive Design',
            description: 'Pixel-perfect across all devices. Mobile-first approach for modern audiences.',
          },
          {
            title: 'Analytics & Tracking',
            description: 'Full analytics setup including event tracking, conversion funnels, and user behavior.',
          },
        ]}
        pricing={[
          {
            title: 'Marketing Sites',
            price: '$15K-$30K',
            description: 'Landing pages, corporate sites, and marketing-focused web experiences.',
          },
          {
            title: 'E-Commerce',
            price: '$25K-$50K',
            description: 'Full e-commerce platforms with custom checkout and inventory management.',
          },
          {
            title: 'Web Applications',
            price: '$40K+',
            description: 'Complex web apps with user authentication, dashboards, and integrations.',
          },
        ]}
        process={[
          {
            step: '01',
            title: 'Discovery & Planning',
            description: 'We dive deep into your business goals, target audience, and technical requirements to create a detailed project roadmap.',
          },
          {
            step: '02',
            title: 'Design & Prototyping',
            description: 'High-fidelity designs and interactive prototypes. You see exactly what you are getting before development starts.',
          },
          {
            step: '03',
            title: 'Development',
            description: 'Agile development with weekly updates. We build in sprints so you can provide feedback throughout.',
          },
          {
            step: '04',
            title: 'Launch & Support',
            description: 'Thorough QA, performance testing, and launch. Post-launch support included for 90 days.',
          },
        ]}
        caseStudy={{
          title: 'Fashion E-Commerce Rebuild',
          metric: '340%',
          metricLabel: 'Revenue Increase',
          description: 'Complete platform rebuild reduced page load from 8.4s to 2.8s and dropped cart abandonment from 68% to 32%.',
        }}
      />
      <Footer />
    </>
  )
}
