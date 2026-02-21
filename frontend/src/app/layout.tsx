import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Dream Works Agency | Strategic Software Consulting & Marketing Systems',
  description: 'Custom software development, AI integration, marketing automation, and strategic consulting for businesses in Florida and Rome. Enterprise-grade solutions that scale.',
  keywords: ['custom software development', 'AI integration', 'marketing automation', 'strategic consulting', 'fractional CTO', 'Florida software agency', 'Rome software agency'],
  authors: [{ name: 'Digital Dream Works LLC' }],
  openGraph: {
    title: 'Digital Dream Works Agency | Strategic Software Consulting',
    description: 'Custom software development, AI integration, and marketing systems for modern enterprises.',
    url: 'https://digitaldreamworksagency.com',
    siteName: 'Digital Dream Works Agency',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Dream Works Agency | Strategic Software Consulting',
    description: 'Custom software development, AI integration, and marketing systems for modern enterprises.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
