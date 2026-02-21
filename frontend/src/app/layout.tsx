import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  title: 'Digital Dream Works Agency | Premium Software Consulting & AI Integration',
  description: 'We build competitive advantages when off-the-shelf solutions don\'t fit. Custom software, AI automation, marketing systems for enterprises in Florida, Rome, and worldwide.',
  keywords: ['custom software development', 'AI integration', 'marketing automation', 'strategic consulting', 'fractional CTO', 'Florida software agency', 'Rome AI consulting'],
  authors: [{ name: 'Digital Dream Works LLC' }],
  openGraph: {
    title: 'Digital Dream Works Agency | Premium Software Consulting',
    description: 'Custom software and AI systems that become competitive advantages.',
    url: 'https://digitaldreamworksagency.com',
    siteName: 'Digital Dream Works Agency',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
