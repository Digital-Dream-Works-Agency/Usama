import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "B2B AI Automation & Marketing Agency in Florida | Digital Dream Works",
  description: "Florida's premier agency for enterprise marketing retainers, AI automation, and high-speed web projects. Scale your operations with DDW Agency.",
  keywords: [
    "Florida AI automation",
    "B2B marketing agency Florida",
    "enterprise marketing retainers",
    "St. Petersburg marketing agency",
    "Tampa logistics marketing",
    "Miami enterprise web development",
    "AI automation systems",
    "growth marketing Florida",
    "Digital Dream Works",
    "DDW Agency",
  ],
  authors: [{ name: "Digital Dream Works Agency LLC" }],
  creator: "Digital Dream Works Agency LLC",
  publisher: "Digital Dream Works Agency LLC",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://digitaldreamworksagency.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "es-ES": "/es",
      "it-IT": "/it",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitaldreamworksagency.com",
    siteName: "Digital Dream Works Agency",
    title: "B2B AI Automation & Marketing Agency in Florida | Digital Dream Works",
    description: "Florida's premier agency for enterprise marketing retainers, AI automation, and high-speed web projects.",
    images: [
      {
        url: "/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Digital Dream Works Agency - Florida B2B Growth Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B AI Automation & Marketing Agency in Florida",
    description: "Florida's premier agency for enterprise marketing retainers, AI automation, and high-speed web projects.",
    images: ["/assets/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// JSON-LD Schema for ProfessionalService
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://digitaldreamworksagency.com/#organization",
  name: "Digital Dream Works Agency LLC",
  alternateName: "DDW Agency",
  description: "Florida's premier agency for enterprise marketing retainers, AI automation, and high-speed web projects.",
  url: "https://digitaldreamworksagency.com",
  logo: {
    "@type": "ImageObject",
    url: "https://digitaldreamworksagency.com/assets/logo.webp",
    width: 512,
    height: 512,
  },
  image: "https://digitaldreamworksagency.com/assets/florida-b2b-ai-automation-systems.webp",
  telephone: "+1-XXX-XXX-XXXX",
  email: "contact@digitaldreamworksagency.com",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Jamshed",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 1,
    maxValue: 50,
  },
  slogan: "Florida's Growth Infrastructure for Modern Enterprise",
  knowsAbout: [
    "AI Automation",
    "B2B Marketing",
    "Growth Marketing",
    "Web Development",
    "Next.js Development",
    "Enterprise Marketing Retainers",
    "Lead Generation",
    "Marketing Automation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marketing & Automation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Growth Marketing Retainers",
          description: "Full-funnel inbound and outbound infrastructure targeting high-value B2B accounts.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation Integration",
          description: "Operational AI integration for back-office automation, lead-routing, and client onboarding.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "High-Velocity Web Projects",
          description: "Next.js & Vercel-hosted architecture designed for technical SEO dominance.",
        },
      },
    ],
  },
  areaServed: [
    {
      "@type": "State",
      name: "Florida",
      containedInPlace: {
        "@type": "Country",
        name: "United States",
      },
    },
    {
      "@type": "City",
      name: "St. Petersburg",
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "City",
      name: "Tampa",
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "City",
      name: "Miami",
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    },
  ],
  location: [
    {
      "@type": "Place",
      name: "Digital Dream Works - St. Petersburg HQ",
      address: {
        "@type": "PostalAddress",
        addressLocality: "St. Petersburg",
        addressRegion: "FL",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.7676,
        longitude: -82.6403,
      },
    },
    {
      "@type": "Place",
      name: "Digital Dream Works - Rome Operations",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rome",
        addressRegion: "Lazio",
        addressCountry: "IT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
  ],
  sameAs: [
    "https://portfolio.digitaldreamworksagency.com/",
    "https://linkedin.com/company/digitaldreamworksagency",
    "https://twitter.com/ddwagency",
  ],
  priceRange: "$5,000 - $10,000/month",
  paymentAccepted: ["Credit Card", "Wire Transfer", "ACH"],
  currenciesAccepted: "USD",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
