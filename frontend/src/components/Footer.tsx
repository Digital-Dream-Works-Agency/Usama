'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  const footerLinks = [
    { href: '/privacy', label: t('links.privacy') },
    { href: '/terms', label: t('links.terms') },
    { href: '/compliance', label: t('links.compliance') },
  ];

  return (
    <footer className="relative py-16 lg:py-24 border-t border-accent-indigo/10" data-testid="footer">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-indigo/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-indigo to-accent-cyan flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <div>
                  <span className="font-bold text-xl block group-hover:text-accent-indigo transition-colors">
                    Digital Dream Works
                  </span>
                  <span className="text-xs opacity-50">Agency LLC</span>
                </div>
              </Link>

              {/* Tagline */}
              <p className="text-lg opacity-80 mb-8 max-w-md">
                {t('tagline')}
              </p>

              {/* Location - GEO Signal */}
              <div className="flex items-start gap-3 text-sm opacity-70 mb-6" data-testid="location-info">
                <MapPin className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                <p>{t('location')}</p>
              </div>

              {/* Elite Portfolio Link */}
              <a
                href="https://portfolio.digitaldreamworksagency.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-indigo hover:text-accent-cyan transition-colors font-medium"
                data-testid="footer-portfolio-link"
              >
                View Elite Portfolio
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-6 text-accent-cyan">Quick Links</h4>
              <div className="space-y-3">
                <Link
                  href="/solutions"
                  className="block text-sm opacity-70 hover:opacity-100 hover:text-accent-indigo transition-all"
                >
                  Solutions
                </Link>
                <Link
                  href="/retainers"
                  className="block text-sm opacity-70 hover:opacity-100 hover:text-accent-indigo transition-all"
                >
                  Retainers
                </Link>
                <Link
                  href="/labs"
                  className="block text-sm opacity-70 hover:opacity-100 hover:text-accent-indigo transition-all"
                >
                  Labs
                </Link>
                <a
                  href="https://portfolio.digitaldreamworksagency.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm opacity-70 hover:opacity-100 hover:text-accent-indigo transition-all"
                >
                  Elite Portfolio
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-accent-indigo/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm opacity-50" data-testid="copyright">
              {t('copyright')}
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-50 hover:opacity-100 hover:text-accent-indigo transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
