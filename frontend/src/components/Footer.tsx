'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  const footerLinks = {
    products: [
      { href: '/products/ai-marketing', label: 'AI Marketing' },
      { href: '/products/automation', label: 'Automation Suite' },
      { href: '/products/analytics', label: 'Analytics Platform' },
      { href: '/products/integrations', label: 'Integrations' },
    ],
    solutions: [
      { href: '/solutions/logistics', label: 'Logistics' },
      { href: '/solutions/healthcare', label: 'Healthcare' },
      { href: '/solutions/finance', label: 'Finance' },
      { href: '/solutions/professional', label: 'Professional Services' },
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/careers', label: 'Careers' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
    ],
    legal: [
      { href: '/privacy', label: t('links.privacy') },
      { href: '/terms', label: t('links.terms') },
      { href: '/compliance', label: t('links.compliance') },
    ],
  };

  return (
    <footer className="relative pt-24 pb-12 border-t border-white/5" data-testid="footer">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="gradient-orb w-[400px] h-[400px] bg-accent-purple/10 -bottom-40 left-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Join 500+ enterprises already leveraging our AI platform for exponential growth
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://portfolio.digitaldreamworksagency.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-btn text-white font-semibold"
            >
              Schedule a Demo
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full ghost-btn font-semibold"
            >
              Talk to Sales
            </Link>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <span className="font-bold text-xl block">DDW Studio</span>
                <span className="text-xs text-muted">Enterprise AI Platform</span>
              </div>
            </Link>

            <p className="text-muted text-sm mb-6 max-w-xs">
              {t('tagline')}
            </p>

            {/* Location */}
            <div className="flex items-start gap-3 text-sm text-muted mb-4" data-testid="location-info">
              <MapPin className="w-5 h-5 text-accent-purple flex-shrink-0 mt-0.5" />
              <p>{t('location')}</p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <a href="mailto:hello@ddwstudio.com" className="flex items-center gap-2 text-sm text-muted hover:text-accent-purple transition-colors">
                <Mail className="w-4 h-4" />
                hello@ddwstudio.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted hover:text-accent-purple transition-colors">
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-accent-purple transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-accent-purple transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-accent-purple transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-accent-purple transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted" data-testid="copyright">
              {t('copyright')}
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted">SOC 2 Compliant</span>
              <span className="text-xs text-muted">GDPR Ready</span>
              <span className="text-xs text-muted">HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
