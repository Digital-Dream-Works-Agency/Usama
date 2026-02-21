# Digital Dream Works Agency - PRD

## Original Problem Statement
Build a production-ready, highly technical, and visually elite homepage for 'Digital Dream Works Agency' (a Florida-based LLC). The goal is to convert enterprise leads into $5k–$10k/month retainers for AI Automation, Growth Marketing, and Custom Web Infrastructure.

## Architecture & Tech Stack
- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4 with Enterprise Minimalist Dark Mode aesthetic
- **3D Graphics**: Three.js via @react-three/fiber and @react-three/drei
- **Animations**: Framer Motion for scroll-triggered reveals
- **Carousels**: Swiper.js with custom pagination
- **i18n**: next-intl with EN/ES/IT language support
- **Theme**: Dark mode default with Light mode toggle (next-themes pattern)
- **Colors**: Deep Slate (#0B0E14), Off-white (#F8FAFC), Electric Indigo (#6366F1), Florida Cyan (#06B6D4)

## User Personas
1. **Enterprise Decision Makers** - C-suite executives looking for B2B growth solutions
2. **Marketing Directors** - Seeking AI automation and marketing retainers
3. **IT Leaders** - Looking for high-speed web infrastructure

## Core Requirements (Static)
1. GEO-optimized SEO for Florida markets
2. JSON-LD ProfessionalService schema markup
3. Responsive design (desktop & mobile)
4. Interactive 3D hero canvas with mouse tracking
5. Multilingual support (EN/ES/IT)
6. Dark/Light theme toggle
7. Swiper carousels for niche markets

## What's Been Implemented (Feb 21, 2026)

### Components Created
- ✅ `Header.tsx` - Sticky glassmorphism header with language switcher & theme toggle
- ✅ `HeroSection.tsx` - Main hero with 3D canvas, H1, CTAs
- ✅ `Hero3D.tsx` - Three.js interactive mesh (full on desktop, light on mobile)
- ✅ `RetainerServices.tsx` - 3-column grid for service pillars
- ✅ `NicheSlider.tsx` - Swiper carousel for Florida markets
- ✅ `SocialProof.tsx` - Dashboard-style metrics section
- ✅ `Footer.tsx` - With GEO signals and Elite Portfolio link

### SEO Implementation
- ✅ Title: "B2B AI Automation & Marketing Agency in Florida | Digital Dream Works"
- ✅ Meta description optimized for Florida B2B keywords
- ✅ JSON-LD ProfessionalService schema with dual locations (St. Petersburg, FL & Rome, Italy)
- ✅ OpenGraph and Twitter card metadata
- ✅ Semantic image alt tags for all placeholders

### i18n Setup
- ✅ next-intl configured with request.ts
- ✅ EN locale fully populated with all content
- ✅ ES/IT locales structured (English placeholders for translation)
- ✅ Language switcher functional with cookie persistence

### Theme System
- ✅ Dark mode as default
- ✅ Light mode toggle functional
- ✅ CSS variables for theme colors
- ✅ localStorage persistence

## Prioritized Backlog

### P0 (Critical for Launch)
- [ ] Replace placeholder images with actual branded assets
- [ ] Add actual contact form with lead capture
- [ ] Translate ES/IT locale files
- [ ] Add actual phone number and email in schema

### P1 (High Priority)
- [ ] Build `/solutions` subpages (Logistics, Healthcare, Professional Services)
- [ ] Build `/retainers` pricing page
- [ ] Build `/labs` innovation showcase
- [ ] Add `/audit` lead capture form page
- [ ] Add `/case-studies` success stories page

### P2 (Nice to Have)
- [ ] Add Calendly integration for booking
- [ ] Implement Google Analytics / Tag Manager
- [ ] Add cookie consent banner (GDPR)
- [ ] Add blog/insights section
- [ ] Add client testimonials carousel

## Next Tasks
1. Create lead capture form with FastAPI backend for form submissions
2. Build out `/solutions/logistics` subpage
3. Add Calendly embed for "Audit Your Systems" CTA
4. Implement Google Analytics tracking

## Deployment Notes
- Designed for Vercel deployment
- Uses `next dev` in development mode
- Run `next build` before `next start` for production
- Ensure all environment variables are configured in Vercel
