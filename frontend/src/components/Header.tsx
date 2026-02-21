'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Menu, X, Sun, Moon, ChevronDown, Globe } from 'lucide-react';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' },
];

export default function Header() {
  const t = useTranslations('header');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [currentLocale, setCurrentLocale] = useState('en');
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const savedLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1];

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    if (savedLocale) {
      setCurrentLocale(savedLocale);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const changeLanguage = (code: string) => {
    setCurrentLocale(code);
    document.cookie = `NEXT_LOCALE=${code};path=/;max-age=31536000`;
    setIsLangOpen(false);
    window.location.reload();
  };

  const navLinks = [
    { href: '/products', label: 'Products' },
    { href: '/solutions', label: t('solutions') },
    { href: '/enterprise', label: 'Enterprise' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-3' : 'py-5 bg-transparent'
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" data-testid="logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center shadow-lg shadow-accent-purple/20">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg block leading-tight">DDW Studio</span>
              <span className="text-[10px] text-muted uppercase tracking-widest">Enterprise AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-200 relative group"
                data-testid={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-pink group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm text-muted hover:text-foreground"
                data-testid="language-switcher"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{currentLocale.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 glass rounded-xl overflow-hidden min-w-[80px]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full px-4 py-2.5 text-left text-sm hover:bg-accent-purple/20 transition-colors ${
                          currentLocale === lang.code ? 'text-accent-purple' : 'text-muted'
                        }`}
                        data-testid={`lang-${lang.code}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg hover:bg-white/5 transition-colors text-muted hover:text-foreground"
              data-testid="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Talk to Sales */}
            <Link
              href="/contact"
              className="hidden md:inline-flex text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              Talk to Sales
            </Link>

            {/* Get Demo Button */}
            <a
              href="https://portfolio.digitaldreamworksagency.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full gradient-btn text-white text-sm font-semibold"
              data-testid="elite-portfolio-btn"
            >
              Get Demo
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              data-testid="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 glass rounded-2xl overflow-hidden"
              data-testid="mobile-menu"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 rounded-xl text-muted hover:text-foreground hover:bg-accent-purple/10 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 border-t border-white/10">
                  <a
                    href="https://portfolio.digitaldreamworksagency.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-4 py-3 rounded-full gradient-btn text-white font-semibold mt-2"
                  >
                    Get Demo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
