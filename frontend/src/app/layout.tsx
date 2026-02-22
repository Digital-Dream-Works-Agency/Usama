import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  title: 'DDW Agency - Performance Marketing That Drives Revenue | $1M+ Ad Spend Managed',
  description: '$683K in Google Ads managed monthly. 600% ROAS campaigns. Custom AI automation for e-commerce, healthcare, logistics. Florida & Rome offices serving US, EU, Middle East.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
